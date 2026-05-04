import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionFrame, SectionHeading } from './SectionFrame';

const projects = [
  {
    title: 'Atlas Analytics',
    description: 'Executive dashboard for product health, revenue trends, and operational reporting.',
    tech: ['React', 'TypeScript', 'Charting', 'Tailwind'],
  },
  {
    title: 'Northwind Commerce',
    description: 'Responsive storefront with product browsing, cart workflows, and checkout states.',
    tech: ['Vite', 'React Router', 'API Design', 'Payments'],
  },
  {
    title: 'Patient Portal',
    description: 'Private healthcare portal with appointment scheduling, document access, and alerts.',
    tech: ['React', 'Forms', 'Auth', 'Accessibility'],
  },
  {
    title: 'Studio CMS',
    description: 'Editorial publishing interface for managing articles, assets, and approval flows.',
    tech: ['Content Modeling', 'GraphQL', 'UI Systems', 'Motion'],
  },
  {
    title: 'Ops Control Room',
    description: 'Internal tool for service status, release tracking, and incident coordination.',
    tech: ['Node.js', 'Dashboards', 'Monitoring', 'Teams'],
  },
  {
    title: 'Client Intake Suite',
    description: 'Lead capture and qualification experience for sales teams with clear conversion paths.',
    tech: ['UX Writing', 'Validation', 'CRM', 'Optimization'],
  },
];

export default function Projects() {
  return (
    <SectionFrame id="projects" className="bg-primary">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Representative projects built to read cleanly in reviews"
          description="The examples are intentionally varied so recruiters can scan product range, UI quality, and technical breadth quickly."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <motion.article
              key={project.title}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
              className="group flex h-full flex-col rounded-[1.75rem] border border-deep bg-card p-6 shadow-[0_20px_55px_rgba(0,0,0,0.2)] transition-shadow duration-300 hover:shadow-glow"
            >
              <div className="flex h-full flex-col">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-text-base">{project.title}</h3>
                  <p className="mt-4 text-base leading-7 text-text-base/72">{project.description}</p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-deep px-3 py-1.5 text-xs font-medium text-accent"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`GitHub repository for ${project.title}`}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-accent/35 bg-primary text-accent transition-colors duration-300 hover:bg-accent hover:text-white"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href="https://example.com"
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