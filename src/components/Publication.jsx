import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionFrame, SectionHeading } from './SectionFrame';

const publications = [
  {
    title: 'If It Works, Do We Need to Understand It?',
    venue: 'Medium.com',
    year: '2026',
    url: 'https://medium.com/@shayan.bhowmik/if-it-works-do-we-need-to-understand-it-35e8706e13dd',
    summary:
      'Why accuracy alone is not enough, a case for interpretability in AI systems where decisions carry real world consequences.',
  },
  {
    title: 'Where Newton Meets Heisenberg: Rethinking the Quantum-Classical Divide',
    venue: 'Medium.com',
    year: '2026',
    url: 'https://medium.com/@shayan.bhowmik/where-newton-meets-heisenberg-rethinking-the-quantum-classical-divide-fecebd8ae903',
    summary: 'A review of an original article: Unifying Quantum and Classical Dynamics by Abdul Rahaman Shaikh and Tabish Qureshi',
  },
  {
    title: 'Prompt Engineering: A Complete, Practical Guide',
    venue: 'Medium.com',
    year: '2026',
    url: 'https://medium.com/@shayan.bhowmik/prompt-engineering-a-complete-practical-guide-a42a6734549a',
    summary: 'What learning to ask clearer questions taught me about thinking, communication, and working with AI.',
  },
  {
    title: 'How I improved my Coding Skills in 30 Days as a College Student',
    venue: 'Medium.com',
    year: '2025',
    url: 'https://medium.com/@shayan.bhowmik/how-i-improved-my-coding-skills-in-30-days-as-a-college-student-f8a39aabacb3',
    summary: 'A simple four week system that rebuilt my fundamentals and gave me real coding confidence.',
  },
];

export default function Publication() {
  return (
    <SectionFrame id="publications" className="bg-primary">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Articles"
          title="Thoughts, Write Ups, and Explorations"
          description="A space where I document concepts, experiences, and ideas as I navigate through my career."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {publications.map((pub) => (
            <motion.article
              key={`${pub.title}-${pub.year}`}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group flex h-full flex-col rounded-[1.75rem] border border-card bg-secondary p-6 text-left shadow-[0_20px_50px_rgba(0,0,0,0.16)]"
            >
              <div className="flex h-full flex-col justify-between">
                <h3 className="text-2xl font-semibold leading-tight text-text-base">
                  {pub.title}
                </h3>
                <p className="mt-2 text-sm text-text-base/68">
                  {pub.venue} · {pub.year}
                </p>
                <p className="mt-4 flex-grow text-base leading-7 text-text-base/72">{pub.summary}</p>
              </div>

              {pub.url && (
                <div className="mt-6 flex justify-start">
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open publication ${pub.title}`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent/35 bg-primary text-accent transition-colors duration-300 hover:bg-accent hover:text-white"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}
