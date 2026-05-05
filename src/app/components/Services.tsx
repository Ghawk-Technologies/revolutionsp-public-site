import { Target, Zap, TrendingUp, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: Target,
      title: 'Personalized Training Programs',
      description: 'Custom-designed programs tailored to your sport, position, and goals.',
    },
    {
      icon: Zap,
      title: 'Strength, Speed & Movement',
      description: 'Build explosive power, lightning-fast speed, and elite movement quality.',
    },
    {
      icon: TrendingUp,
      title: 'Data-Driven Results',
      description: 'Track your progress with advanced metrics and performance analytics.',
    },
    {
      icon: Award,
      title: 'Character & Mental Development',
      description: 'Develop the mindset and character of a champion on and off the field.',
    },
  ];

  return (
    <section className="py-20 bg-[#F8F9FA]" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#0066FF] font-semibold text-sm uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[black] mt-4">
            How We Help Athletes
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <motion.div
                className="w-14 h-14 bg-[#0066FF]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#0066FF] transition-colors duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                <service.icon className="w-7 h-7 text-[#0066FF] group-hover:text-white transition-colors duration-300" />
              </motion.div>
              <h3 className="font-bold text-xl text-[black] mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
