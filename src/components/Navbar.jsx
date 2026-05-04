import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const links = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Projects', href: '#projects', id: 'projects' },
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Find the section with the highest intersection ratio
        let maxRatio = 0;
        let maxEntry = null;

        entries.forEach((entry) => {
          if (entry.intersectionRatio > maxRatio) {
            maxRatio = entry.intersectionRatio;
            maxEntry = entry;
          }
        });

        // Only update if we found an intersecting section
        if (maxEntry && maxEntry.intersectionRatio > 0) {
          setActiveSection(maxEntry.target.id);
        }
      },
      {
        root: null,
        rootMargin: '-40% 0px -55% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    links.forEach((link) => {
      const element = document.getElementById(link.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
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
            AM
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-semibold tracking-wide text-text-base">Shayan Bhowmik</span>
            <span className="text-xs uppercase tracking-[0.3em] text-text-base/60">AIML Engineer</span>
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