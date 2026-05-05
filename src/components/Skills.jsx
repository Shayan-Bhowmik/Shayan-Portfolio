import { motion } from 'framer-motion';
import { SectionFrame, SectionHeading } from './SectionFrame';

const skills = [
  {
    title: 'Frontend',
    items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    items: ['Node.js', 'FLask', 'C#', 'Express.js', 'Java'],
  },
  {
    title: 'Tools & DevOps',
    items: ['Git', 'GitHub', 'Vercel', 'Postman', 'Figma', 'Canva', 'VS Code', 'Notion'],
  },
  {
    title: 'Databases',
    items: ['PostgreSQL', 'MongoDB', 'MySQL', 'Supabase'],
  },
  {
    title: 'AI Engineering',
    items: ['Python', 'PyTorch', 'OpenCV', 'Numpy', 'Pandas', 'Matplotlib', 'Scikit-learn'],
  },
  {
    title: 'Other Skills',
    items: ['Quantum Computation', 'Blockchain', 'Linux', 'System Design', 'Open-Source'],
  },
  
];

export default function Skills() {
  return (
    <SectionFrame id="skills" className="bg-primary">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="A Growing Stack Built Through Practice and Curiosity"
          description="Skills developed through real projects, academic work, and self-driven exploration across systems and software."/>

        <div className="grid gap-6 lg:grid-cols-2">
          {skills.map((group) => (
            <motion.article
              key={group.title}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="rounded-[1.75rem] border border-deep bg-secondary p-6 shadow-[0_20px_50px_rgba(0,0,0,0.16)]"
            >
              <h3 className="text-xl font-semibold text-text-base">{group.title}</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-2 rounded-full border border-deep bg-card px-4 py-2 text-sm text-text-base/90"
                  >
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    {skill}
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