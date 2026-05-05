import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionFrame, SectionHeading } from './SectionFrame';

const projects = [
  {
    title: 'Synapse X',
    description: 'An Explainable Deep Learning framework combining CNN-based Brain MRI classification with GradCAM Heatmaps bridging high performance AI with Clinical Interpretability for Transparent, Trustworthy Disease Detection.',
    tech: ['Python', 'PyTorch', 'Pandas', 'NumPy', 'scikit-learn', 'NiBabel', 'Matplotlib'],
  },
];

export default function Projects() {
  return (
    <SectionFrame id="projects" className="bg-primary">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Work Built Through Curiosity and Code"
          description="Each project represents a problem I chose to solve, a concept I wanted to understand, or a skill I was actively building."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group flex h-full flex-col items-start rounded-[1.75rem] border border-deep bg-card p-6 text-left shadow-[0_20px_55px_rgba(0,0,0,0.2)] transition-shadow duration-300 hover:shadow-glow"
            >
              <div className="flex h-full w-full flex-col items-start">
                <div className="w-full flex-1">
                  <h3 className="text-2xl font-semibold text-text-base">{project.title}</h3>
                  <p className="mt-4 w-full text-left text-base leading-7 text-text-base/72">{project.description}</p>
                </div>

                <div className="mt-6 flex w-full flex-wrap justify-start gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-deep px-3 py-1.5 text-xs font-medium text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex w-full items-center justify-start gap-3">
                  <a
                    href="https://github.com/Shayan-Bhowmik/image-processing-mri"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`GitHub repository for ${project.title}`}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent/35 bg-primary text-accent transition-colors duration-300 hover:bg-accent hover:text-white"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://synapse-x-brain-mri-imaging.streamlit.app/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Live demo for ${project.title}`}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent/35 bg-primary text-accent transition-colors duration-300 hover:bg-accent hover:text-white"
                  >
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}