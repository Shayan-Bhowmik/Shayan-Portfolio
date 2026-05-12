import { CalendarDays, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionFrame, SectionHeading } from './SectionFrame';

const experiences = [
  {
    company: 'Google',
    role: ['Student Ambassador'],
    period: 'May 2026 - Present',
    location: 'Internship ',
    points: [
      'Represented Google Gemini on campus by promoting Google products, tools, and developer programs to the student community at SIT.',
      'Campus representative for Google Gemini, driving awareness of developer tools, programs, and initiatives among students.',
      'Promoted Google developer ecosystem on campus, organizing events and engaging the student tech community.'
    ],
  },
  {
    company: 'GirlScript Summer of Code',
    role: ['Contributor'],
    period: 'Apr 2026 - Present',
    location: 'Full-Time',
    points: [
      'Open Source Engineering: Actively contributing to high-impact projects by auditing codebases for vulnerabilities, proposing architectural enhancements, and delivering optimized pull requests.',
    ],
  },
  {
    company: 'Nexus Spring of Code',
    role: 'Contributor',
    period: 'Apr 2026 - Present',
    location: 'Full-Time',
    points: [
      'System Architecture & Development: Contributing to the core architecture of open-source projects by implementing scalable features and optimizing existing codebase performance.',
      'Quality Assurance: Streamlining project reliability through detailed code reviews, comprehensive bug tracking, and the integration of robust testing protocols.',
    ],
  },
  {
    company: 'Symbiosis Quantum Club',
    role: 'Research & Technical Team Member',
    period: 'Sep 2025 - Present',
    location: 'Full-Time',
    points: [
      'Quantum Algorithm Analysis: Investigating the mechanics and real-world implications of Shor\'s and Grover\'s algorithms, specifically focusing on their impact on modern cryptographic standards.',
      'Cryptographic Resilience: Developing simulations to evaluate the vulnerability of classical systems like RSA and SHA-256 against quantum-driven attacks.',
    ],
  },
  {
    company: 'Google Developer Student Club',
    role: 'Student Contributor',
    period: 'Sep 2025 - Present',
    location: 'Full-Time',
    points: [
      'Algorithmic Excellence: Solving complex data structure and algorithm challenges to sharpen technical efficiency and logical reasoning.',
      'Logic Optimization: Implementing efficient solutions for advanced problems on platforms like HackerRank and LeetCode.',
    ],
  },
  {
    company: 'Cyber Blockchain Club',
    role: 'Technical Volunteer',
    period: 'Aug 2025 - Present',
    location: 'Full-Time',
    points: [
      'Decentralized Systems Advocacy: Contributing to the growth of the blockchain ecosystem by facilitating technical workshops and community initiatives that promote the adoption of decentralized technologies.',
      'First-Principles Implementation: Leading hands-on sessions specifically focused on the fundamental mechanics of blockchain, including peer-to-peer networking and the logic behind decentralized ledgers.',
    ],
  },
];

export default function Experience() {
  return (
    <SectionFrame id="experience" className="bg-primary">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Building Experience One Step at a Time"
          description="A Timeline of Academic, Collaborative, and Hands-On Experiences that have shaped How I Think, Code, and Work With Others."/>

        <div className="relative space-y-8 pl-6 before:absolute before:bottom-0 before:left-2 before:top-2 before:w-px before:bg-card lg:pl-10">
          {experiences.map((experience) => (
            <motion.article
              key={experience.company}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="relative rounded-[1.75rem] border border-card bg-secondary p-6 shadow-[0_20px_50px_rgba(0,0,0,0.16)] lg:p-8"
            >
              <span className="absolute -left-8 top-8 h-4 w-4 rounded-full border-4 border-primary bg-accent lg:-left-12" />
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.22em] text-accent">{experience.company}</p>
                  <h3 className="mt-2 text-2xl font-semibold text-text-base">
                    {Array.isArray(experience.role) ? experience.role.join(' & ') : experience.role}
                  </h3>
                </div>
                <div className="flex flex-col gap-3 text-sm text-text-base/64 sm:items-end">
                  <div className="flex items-center gap-2">
                    <CalendarDays size={16} className="text-accent" />
                    <span>{experience.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase size={16} className="text-accent" />
                    <span>{experience.location}</span>
                  </div>
                </div>
              </div>

              <ul className="mt-6 space-y-4 text-base leading-7 text-text-base/72">
                {experience.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}