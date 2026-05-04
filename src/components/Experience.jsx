import { CalendarDays, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { SectionFrame, SectionHeading } from './SectionFrame';

const experiences = [
  {
    company: 'Northstar Labs',
    role: 'Senior AIML Engineer',
    period: '2023 - Present',
    location: 'Remote',
    points: [
      'Led delivery of client-facing product interfaces with a polished, recruiter-ready visual standard.',
      'Partnered with design and backend teams to reduce UI inconsistency and tighten handoff quality.',
      'Improved maintainability by consolidating reusable components and shared interaction patterns.',
    ],
  },
  {
    company: 'Aperture Systems',
    role: 'Frontend Engineer',
    period: '2021 - 2023',
    location: 'New York, NY',
    points: [
      'Built responsive dashboards and marketing pages that supported sales and operations workflows.',
      'Standardized component behavior across products to improve consistency and release confidence.',
      'Worked closely with QA and product stakeholders to close visual and functional gaps before launch.',
    ],
  },
  {
    company: 'Elevate Studio',
    role: 'Software Engineer',
    period: '2019 - 2021',
    location: 'Austin, TX',
    points: [
      'Delivered modular web features for small business clients with emphasis on accessibility and speed.',
      'Integrated external services and APIs while keeping code paths predictable and testable.',
      'Supported content-driven sites and internal tools with a strong focus on long-term upkeep.',
    ],
  },
];

export default function Experience() {
  return (
    <SectionFrame id="experience" className="bg-primary">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="A concise timeline of production-focused delivery"
          description="Each role highlights execution, collaboration, and the ability to ship reliable interface work at team scale."
        />

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
                  <h3 className="mt-2 text-2xl font-semibold text-text-base">{experience.role}</h3>
                </div>
                <div className="space-y-2 text-sm text-text-base/64 sm:text-right">
                  <div className="inline-flex items-center gap-2 sm:justify-end">
                    <CalendarDays size={16} className="text-accent" />
                    <span>{experience.period}</span>
                  </div>
                  <div className="inline-flex items-center gap-2 sm:justify-end">
                    <MapPin size={16} className="text-accent" />
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