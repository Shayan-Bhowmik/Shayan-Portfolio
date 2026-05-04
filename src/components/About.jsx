import { motion } from 'framer-motion';
import { SectionFrame, SectionHeading } from './SectionFrame';

const stats = [
  { label: 'Years Experience', value: '5+' },
  { label: 'Projects Completed', value: '25+' },
  { label: 'Technologies', value: '18' },
  { label: 'Certifications', value: '6' },
];

export default function About() {
  return (
    <SectionFrame id="about" className="bg-primary">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="A person who builds to understand, not just to complete"
          description="This portfolio is structured to communicate technical breadth, execution quality, and professional polish at a glance."
        />

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            className="rounded-[2rem] border border-deep bg-secondary p-6 shadow-glow"
          >
            <div className="flex min-h-[24rem] items-center justify-center rounded-[1.5rem] border border-card bg-card">
              <div className="flex h-40 w-40 items-center justify-center rounded-[1.5rem] border border-accent/35 bg-primary text-5xl font-bold text-accent">
                AM
              </div>
            </div>
          </motion.div>

          <div className="space-y-6 text-text-base/74">
            <p className="text-lg leading-8 text-text-base/82">
              I build interfaces and application layers with a strong bias toward clarity,
              maintainability, and visual consistency. My work is grounded in implementation detail,
              but always shaped around the person who will use the product.
            </p>
            <p className="text-lg leading-8 text-text-base/74">
              I enjoy taking projects from rough ideas to production-ready systems with defined
              structure, predictable components, and a presentation layer that can stand up in a
              recruiting or client review setting.
            </p>
            <p className="text-lg leading-8 text-text-base/74">
              Across product pages, dashboards, and internal tools, I focus on clean interactions,
              accessible layout decisions, and engineering patterns that support long-term scaling.
            </p>
            <p className="text-lg leading-8 text-text-base/74">
              The result is work that reads well to hiring teams while still being practical for
              day-to-day development, collaboration, and iteration.
            </p>

            <div className="grid gap-4 pt-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                  className={`rounded-2xl border border-deep p-5 ${
                    index % 2 === 0 ? 'bg-secondary' : 'bg-card'
                  }`}
                >
                  <p className="text-3xl font-bold text-accent">{stat.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.22em] text-text-base/58">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionFrame>
  );
}