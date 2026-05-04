import { Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionFrame, SectionHeading } from './SectionFrame';

const certifications = [
  { name: 'AWS Certified Developer Associate', issuer: 'Amazon Web Services', date: '2025', id: 'AWS-DEV-10482' },
  { name: 'Google Cloud Associate Engineer', issuer: 'Google Cloud', date: '2024', id: 'GCP-AE-88104' },
  { name: 'Professional Scrum Master I', issuer: 'Scrum.org', date: '2024', id: 'PSM1-65027' },
  { name: 'Frontend Performance Optimization', issuer: 'Frontend Masters', date: '2023', id: 'FM-PO-22319' },
];

export default function Certifications() {
  return (
    <SectionFrame id="certifications" className="bg-primary">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Certifications"
          title="Targeted credentials that support credibility"
          description="A recruiter can scan issuer, date, and credential ID without leaving the page."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {certifications.map((certification) => (
            <motion.article
              key={certification.id}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="rounded-[1.5rem] border-l-4 border-l-accent border-t border-r border-b border-card bg-secondary p-6 shadow-[0_20px_45px_rgba(0,0,0,0.16)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-deep text-accent">
                <Award size={22} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-text-base">{certification.name}</h3>
              <p className="mt-2 text-sm text-text-base/68">{certification.issuer}</p>
              <p className="mt-5 text-sm uppercase tracking-[0.2em] text-accent">{certification.date}</p>
              <p className="mt-2 text-sm text-text-base/72">{certification.id}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}