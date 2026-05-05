import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const links = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Education', href: '#education', id: 'education' },
  { label: 'Certifications', href: '#certifications', id: 'certifications' },
  { label: 'Articles', href: '#publications', id: 'publications' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fallback scroll handler: pick section nearest the viewport center
  useEffect(() => {
    let ticking = false;

    const ids = links.map((l) => l.id);
    const getElements = () => ids.map((id) => document.getElementById(id)).filter(Boolean);

    const onScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const elems = getElements();
        if (elems.length === 0) {
          ticking = false;
          return;
        }

        const center = window.innerHeight * 0.5;
        let best = null;
        let bestDist = Infinity;

        elems.forEach((el) => {
          const rect = el.getBoundingClientRect();
          const dist = Math.abs(rect.top - center);
          if (dist < bestDist) {
            bestDist = dist;
            best = el;
          }
        });

        if (best && best.id !== activeSection) setActiveSection(best.id);
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    // run once to initialize
    onScroll();

    return () => window.removeEventListener('scroll', onScroll);
  }, [activeSection]);

  useEffect(() => {
    // Use IntersectionObserver to update active nav when sections enter the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        // pick the most visible intersecting entry (by intersectionRatio),
        // fallback to closest to top if ratios are equal
        const intersecting = entries.filter((e) => e.isIntersecting);

        if (intersecting.length > 0) {
          intersecting.sort((a, b) => {
            if (b.intersectionRatio !== a.intersectionRatio) return b.intersectionRatio - a.intersectionRatio;
            return Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top);
          });

          const best = intersecting[0];
          setActiveSection(best.target.id);
        }
      },
      { root: null, rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    );

    // Observe each declared link id and common singular/plural variants
    const observed = new Set();

    links.forEach((link) => {
      const candidates = [link.id];

      // try singular/plural variants to handle naming mismatches
      if (link.id.endsWith('s')) candidates.push(link.id.replace(/s$/, ''));
      else candidates.push(`${link.id}s`);

      // explicit alias for publications <-> articles
      if (link.id === 'publications') candidates.push('articles');
      if (link.id === 'articles') candidates.push('publications');

      candidates.forEach((id) => {
        if (observed.has(id)) return;
        const el = document.getElementById(id);
        if (el) {
          observer.observe(el);
          observed.add(id);
        }
      });
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id) => {
    setActiveSection(id);
    setIsMobileOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-card bg-secondary/96 shadow-[0_20px_60px_rgba(0,0,0,0.32)] backdrop-blur-xl'
          : 'border-transparent bg-secondary/92 backdrop-blur-xl'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" onClick={() => handleNavClick('home')} className="group inline-flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-deep bg-primary text-sm font-bold text-accent transition-transform duration-300 group-hover:scale-105">
            SB
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-semibold tracking-wide text-text-base">Shayan Bhowmik</span>
            <span className="text-xs uppercase tracking-[0.3em] text-text-base/60">AI Engineer</span>
          </div>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(link.id)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'text-accent' : 'text-text-base/78 hover:text-text-base'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-card bg-primary text-text-base transition-colors duration-200 hover:border-accent/60 hover:text-accent lg:hidden"
          aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMobileOpen}
          onClick={() => setIsMobileOpen((current) => !current)}
        >
          {isMobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {isMobileOpen ? (
        <div className="border-t border-card bg-secondary/98 lg:hidden">
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-6 py-4 lg:px-8">
            {links.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(link.id)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'bg-deep/60 text-accent' : 'text-text-base/78 hover:bg-card hover:text-text-base'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      ) : null}
    </header>
  );
}