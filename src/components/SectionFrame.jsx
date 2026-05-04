import { motion } from 'framer-motion';

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
      when: 'beforeChildren',
      staggerChildren: 0.08,
    },
  },
};

export function SectionFrame({ id, className = '', children }) {
  return (
    <motion.section
      id={id}
      className={`py-24 scroll-mt-24 ${className}`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.22 }}
    >
      {children}
    </motion.section>
  );
}

export function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`mb-12 flex max-w-3xl flex-col gap-4 ${alignment}`}>
      <p className="section-overline text-sm font-semibold uppercase text-accent/90">
        {eyebrow}
      </p>
      <h2 className="font-heading text-3xl font-bold tracking-tight text-text-base sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-base leading-7 text-text-base/72">{description}</p>
      ) : null}
    </div>
  );
}