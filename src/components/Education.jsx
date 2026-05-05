import { motion } from 'framer-motion';
import { SectionFrame, SectionHeading } from './SectionFrame';

const education = [
  {
    degree: 'Bachelor of Technology',
    major: 'Computer Science & Engineering',
    institution: 'Symbiosis Institute of Technology',
    year: '2024 - Present',
    coursework: ['Data Structures', 'Algorithms', 'Operating System', 'Database', 'Computer Networks'],
  },
];

export default function Education() {
  return (
    <SectionFrame id="education" className="bg-primary">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Education"
          title="Academic Background"
          description="The academic background that underpins everything I build and learn."
        />

        <div className="grid gap-6">
          {education.map((item) => (
            <motion.article
              key={item.degree}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="rounded-[1.75rem] border border-deep bg-card p-6 shadow-[0_20px_50px_rgba(0,0,0,0.18)] lg:p-8"
            >
              <p className="text-sm uppercase tracking-[0.24em] text-accent">{item.year}</p>
              <h3 className="mt-3 text-2xl font-semibold text-text-base">{item.degree}</h3>
              <p className="mt-1 text-sm font-semibold text-white">{item.major}</p>
              
              <p className="mt-2 text-base font-medium text-accent">{item.institution}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                {item.coursework.map((course) => (
                  <span
                    key={course}
                    className="rounded-full border border-deep bg-secondary px-4 py-2 text-sm text-text-base/88"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}
