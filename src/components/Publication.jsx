import { ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionFrame, SectionHeading } from './SectionFrame';

const publications = [
  {
    title: 'Synapse X: Explainable Deep Learning for Brain MRI',
    venue: 'arXiv preprint',
    year: '2025',
    url: 'https://github.com/Shayan-Bhowmik/image-processing-mri',
    summary:
      'An explainable deep learning framework combining CNN-based brain MRI classification with GradCAM heatmaps to improve clinical interpretability.',
  },
];

export default function Publication() {
  return (
    <SectionFrame id="publications" className="bg-primary">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Publications"
          title="Thoughts, Write Ups, and Explorations"
          description="A space where I document concepts, experiences, and ideas as I navigate through my career."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {publications.map((pub) => (
            <motion.article
              key={`${pub.title}-${pub.year}`}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group rounded-[1.75rem] border border-card bg-secondary p-6 shadow-[0_20px_50px_rgba(0,0,0,0.16)]"
            >
              <div className="flex items-start justify-between">
                <div className="pr-4">
                  <h3 className="text-2xl font-semibold text-text-base">{pub.title}</h3>
                  <p className="mt-2 text-sm text-text-base/68">{pub.venue} · {pub.year}</p>
                  <p className="mt-4 text-base leading-7 text-text-base/72">{pub.summary}</p>
                </div>
                {pub.url && (
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open publication ${pub.title}`}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-accent/35 bg-primary text-accent transition-colors duration-300 hover:bg-accent hover:text-white"
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}
