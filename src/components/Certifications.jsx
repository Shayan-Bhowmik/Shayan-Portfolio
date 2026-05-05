import { Award, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionFrame, SectionHeading } from './SectionFrame';

const certifications = [
  { name: 'Hashgraph Developer', issuer: 'The Hashgraph Association', date: '2025', url: 'https://certs.hashgraphdev.com/453afbe9-5b53-4a92-aca0-b3690c305aea.pdf' },
  { name: 'Python', issuer: 'HackerRank', date: '2025', url: 'https://www.hackerrank.com/certificates/iframe/b6a61b5d0032' },
  { name: 'Introduction to Prompt Engineering', issuer: 'Microsoft', date: '2025', url: '' },
  { name: 'Introduction to Generative AI', issuer: 'Google', date: '2025', url: '' },
];

export default function Certifications() {
  return (
    <SectionFrame id="certifications" className="bg-primary">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Certifications"
          title="Certifications and Credentials"
          description="Each certification represents a topic I chose to pursue on my own time, outside of what the syllabus required."/>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {certifications.map((certification) => (
            <motion.article
              key={`${certification.name}-${certification.date}`}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="rounded-[1.5rem] border-l-4 border-l-accent border-t border-r border-b border-card bg-secondary p-6 shadow-[0_20px_45px_rgba(0,0,0,0.16)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-deep text-accent">
                <Award size={22} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-text-base">{certification.name}</h3>
              <p className="mt-2 text-sm text-text-base/68">{certification.issuer}</p>
              <p className="mt-5 text-sm uppercase tracking-[0.2em] text-accent">{certification.date}</p>
              {certification.url && (
                <div className="mt-4">
                  <a
                    href={certification.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View certificate for ${certification.name}`}
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