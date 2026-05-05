import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect, useRef } from 'react';
import { useInView } from 'motion/react';

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(motionValue, value, { duration: 2 });
      return controls.stop;
    }
  }, [motionValue, value, isInView]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function Stats() {
  const stats = [
    { value: 500, suffix: '+', label: 'Athletes Trained' },
    { value: 10, suffix: '+', label: 'Years Experience' },
    { value: 95, suffix: '%', label: 'Athlete Satisfaction' },
    { value: 4000, suffix: '+', label: 'Sq Ft Facility' },
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-[black] to-[#1a2942] relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-20 bg-[#0066FF]"
            style={{
              left: `${(i % 10) * 10}%`,
              top: `${Math.floor(i / 10) * 25}%`,
            }}
            animate={{
              scaleY: [1, 2, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.1,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold text-[#0066FF] mb-2"
                whileHover={{ scale: 1.1 }}
              >
                <Counter value={stat.value} suffix={stat.suffix} />
              </motion.div>
              <div className="text-gray-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
