import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Facility() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const features = [
    { label: '4,000+ sq ft', detail: 'Premium Training Space' },
    { label: 'Professional Turf', detail: 'Speed & Agility Work' },
    { label: 'Full Weight Room', detail: 'Strength Development' },
    { label: 'Pitching Mounds', detail: 'Baseball Specific' },
  ];

  const images = [
    { src: "https://images.unsplash.com/photo-1758875568671-9fa1829fe1e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", alt: "Weight training", className: "h-64" },
    { src: "https://images.unsplash.com/photo-1758875569612-94d5e0f1a35f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", alt: "Battle ropes training", className: "h-48" },
    { src: "https://images.unsplash.com/photo-1758875568433-7b8301847439?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", alt: "Box jump training", className: "h-48" },
    { src: "https://images.unsplash.com/photo-1758875569215-6f4743bcbe97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", alt: "Tire flip training", className: "h-64" },
  ];

  return (
    <section className="py-20 bg-[black]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div>
              <motion.span
                className="text-[#0066FF] font-semibold text-sm uppercase tracking-wider"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                World-Class Facility
              </motion.span>
              <motion.h2
                className="text-4xl sm:text-5xl font-bold text-white mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Train Like The Pros
              </motion.h2>
            </div>

            <motion.p
              className="text-lg text-gray-300 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Our 4,000+ square foot facility features everything you need to reach peak performance.
              From professional turf for speed and agility work to a fully-equipped weight room for
              strength development, we've created the perfect environment for athletic excellence.
            </motion.p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm p-5 rounded-lg border border-white/10 hover:bg-white/10 hover:border-[#0066FF]/30 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="font-bold text-2xl text-[#0066FF]">{feature.label}</div>
                  <div className="text-gray-300 text-sm mt-1">{feature.detail}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              {images.slice(0, 2).map((image, index) => (
                <motion.img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={`w-full ${image.className} object-cover rounded-lg shadow-xl`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.15 }}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                />
              ))}
            </div>
            <div className="space-y-4 pt-8">
              {images.slice(2).map((image, index) => (
                <motion.img
                  key={index}
                  src={image.src}
                  alt={image.alt}
                  className={`w-full ${image.className} object-cover rounded-lg shadow-xl`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.1 + index * 0.15 }}
                  whileHover={{ scale: 1.05, rotate: -2 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
