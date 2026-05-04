import { motion } from 'framer-motion';
import { SectionFrame, SectionHeading } from './SectionFrame';

const stats = [
  { label: 'Years Experience', value: '1+' },
  { label: 'Projects Completed', value: '5+' },
  { label: 'Technologies', value: '25' },
  { label: 'Certifications', value: '8' },
];

export default function About() {
  return (
    <SectionFrame id="about" className="bg-primary">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
        <SectionHeading
          eyebrow="About"
          title="A person who builds to understand, not just to complete."
          description="Still learning. Always building."
        />

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch">
          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            className="space-y-6 text-text-base/74"
          >
            <p className="text-lg leading-8 text-text-base/82">
            Pre-Final Year Computer Science student at Symbiosis Institute of Technology, 
            driven by a genuine curiosity for how systems work — not just how to make 
            them run, but why they're built the way they are.

            </p>
            <p className="text-lg leading-8 text-text-base/74">
            I spend my time writing code in C++, Python, and Java, working through 
            data structures, algorithms, and system-level problems that push me to 
            think clearly and build deliberately. Every project I take on is an 
            opportunity to connect theory with something tangible.
            </p>
            <p className="text-lg leading-8 text-text-base/74">
            Outside the classroom, hackathons have been my most valuable classroom, 
            fast-paced, collaborative, and honest about where your skills actually 
            stand. They've shaped how I approach problems, work in teams, and 
            deliver under pressure.
            </p>
            <p className="text-lg leading-8 text-text-base/74">
            I am focused on mastering the fundamentals, systems, 
            algorithms, and clean code because strong foundations 
            are what separate engineers who adapt from those who don't.
            </p>
          </motion.div>

          <motion.div
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0 } }}
            className="rounded-[2rem] border border-deep bg-secondary/40 p-5 shadow-glow lg:h-full"
          >
            <div className="grid h-full gap-4 sm:grid-cols-2 sm:auto-rows-fr">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                  className={`flex h-full flex-col items-center justify-center rounded-2xl border border-deep p-5 text-center ${
                    index % 2 === 0 ? 'bg-secondary' : 'bg-card'
                  }`}
                >
                  <p className="text-3xl font-bold text-accent">{stat.value}</p>
                  <p className="mt-2 text-sm uppercase tracking-[0.22em] text-text-base/58">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionFrame>
  );
}