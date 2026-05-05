import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Mission() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const pillars = [
    {
      number: '01',
      title: 'Physical Development',
      description: 'Build strength, speed, and movement quality through science-based training.',
    },
    {
      number: '02',
      title: 'Mental Resilience',
      description: 'Develop the mindset and mental toughness to overcome any challenge.',
    },
    {
      number: '03',
      title: 'Character Building',
      description: 'Foster integrity, leadership, and values that extend beyond the field.',
    },
  ];

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#0066FF] font-semibold text-sm uppercase tracking-wider">
              Our Mission
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl font-bold text-[black]"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Person First. Athlete Second.
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            At Revolution Sports Performance, we believe in developing the whole person — not just the athlete.
            Our holistic approach focuses on physical excellence, mental resilience, and emotional growth.
            We're committed to building character, instilling discipline, and creating better humans who happen
            to be exceptional athletes.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            {pillars.map((pillar, index) => (
              <motion.div
                key={index}
                className="space-y-3"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className="w-16 h-16 bg-[#0066FF]/10 rounded-full flex items-center justify-center mx-auto"
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(0, 102, 255, 0.2)' }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.span
                    className="text-3xl font-bold text-[#0066FF]"
                    whileHover={{ scale: 1.2 }}
                  >
                    {pillar.number}
                  </motion.span>
                </motion.div>
                <h3 className="font-bold text-xl text-[black]">{pillar.title}</h3>
                <p className="text-gray-600">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
