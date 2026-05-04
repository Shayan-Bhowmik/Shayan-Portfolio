import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionFrame } from './SectionFrame';

const heroItems = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/Shayan-Bhowmik', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shayan-bhowmik-227808321/', icon: Linkedin },
  { label: 'Email', href: 'mailto:shayan.bhowmik05@gmail.com', icon: Mail },
];

export default function Hero() {
  return (
    <SectionFrame id="home" className="relative overflow-hidden bg-primary pt-36 lg:pt-40">
      <div className="absolute inset-0">
        <div className="hero-dot-grid absolute inset-0 opacity-40" />
        <div className="absolute left-1/2 top-0 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-deep/50 blur-3xl" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
        <motion.div
          className="max-w-3xl"
          variants={heroItems}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
        >
          <motion.p
            variants={item}
            className="section-overline mb-6 text-sm font-semibold uppercase text-accent/90"
          >
            Introduction
          </motion.p>

          <motion.h1
            variants={heroItems}
            className="font-heading text-5xl font-bold leading-[1.05] tracking-tight text-text-base sm:text-6xl lg:text-7xl"
          >
            <motion.span variants={item} className="block">
              Shayan Bhowmik
            </motion.span>
            <motion.span variants={item} className="mt-3 block text-text-base/82">
              AI Engineer
            </motion.span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-2xl text-balance text-lg leading-8 text-text-base/72 sm:text-xl"
          >
            I build my skills through hands on projects and competitive experiences, where I've strengthened my problem solving abilities, deepened my understanding of core programming concepts, and learned how to translate theory into practical solutions.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-transform duration-300 hover:-translate-y-0.5 hover:bg-accent/90"
            >
              View Work
              <ArrowRight size={18} />
            </a>
            <a
              href="/resume.pdf"
              download="Shayan_Bhowmik_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-accent px-7 py-3.5 text-sm font-semibold text-text-base transition-colors duration-300 hover:bg-accent hover:text-white"
            >
              Download Resume
              <Download size={18} />
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-6 flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel={link.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                  aria-label={link.label}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-accent bg-accent text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent/90"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </motion.div>
        </motion.div>

        <motion.aside
          variants={item}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="grid w-full max-w-xl gap-5 rounded-[2rem] border border-card bg-secondary/70 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.24)] backdrop-blur-sm lg:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-deep bg-card/90 p-5">
              <p className="text-sm uppercase tracking-[0.28em] text-text-base/50">Focus</p>
              <p className="mt-3 text-xl font-semibold text-text-base">Curious, Structured, Growth Driven</p>
            </div>
            <div className="rounded-3xl border border-deep bg-deep/70 p-5">
              <p className="text-sm uppercase tracking-[0.28em] text-text-base/50">Specialty</p>
              <p className="mt-3 text-xl font-semibold text-text-base">Systems, Algorithms, Problem Solving</p>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-deep bg-primary/95 p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-accent">Delivery profile</p>
            <ul className="mt-5 space-y-4 text-sm leading-7 text-text-base/72">
              <li>Building practical systems in C++, Python, and Java with a growing interest in AI-based applications.</li>
              <li>Strengthening foundations in data structures, algorithms, and real-world problem-solving.</li>
              <li>Exploring system design principles and industry-level project architecture.</li>
            </ul>
          </div>
        </motion.aside>
      </div>
    </SectionFrame>
  );
}