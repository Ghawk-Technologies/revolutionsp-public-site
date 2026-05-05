import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

export function PerformanceGoals() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const goals = [
    {
      title: 'HIT FURTHER',
      image: 'https://images.unsplash.com/photo-1746528552055-f080ad5f8319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      description: 'Increase bat speed and power',
    },
    {
      title: 'THROW HARDER',
      image: 'https://images.unsplash.com/photo-1489460427746-b6296f4bc3f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      description: 'Build velocity and arm strength',
    },
    {
      title: 'RUN FASTER',
      image: 'https://images.unsplash.com/photo-1526676317768-d9b14f15615a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      description: 'Improve speed and explosiveness',
    },
  ];

  return (
    <section className="py-20 bg-black relative overflow-hidden" ref={ref}>
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#0066FF 1px, transparent 1px), linear-gradient(90deg, #0066FF 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Elevate Your Game
          </h2>
          <p className="text-xl text-gray-400">
            Train with purpose. Achieve measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {goals.map((goal, index) => (
            <motion.div
              key={index}
              className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={goal.image}
                  alt={goal.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                <div className="absolute inset-0 bg-[#0066FF]/0 group-hover:bg-[#0066FF]/20 transition-colors duration-500" />
              </div>

              {/* Content */}
              <div className="relative h-full flex flex-col justify-end p-8">
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="w-16 h-1 bg-[#0066FF] mb-6 group-hover:w-24 transition-all duration-300" />
                  <h3 className="text-4xl font-bold text-white mb-3 tracking-tight">
                    {goal.title}
                  </h3>
                  <p className="text-lg text-gray-300 mb-6">
                    {goal.description}
                  </p>
                </motion.div>

                <motion.button
                  className="flex items-center gap-2 text-white font-semibold group-hover:text-[#0066FF] transition-colors"
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <ArrowUpRight className="w-5 h-5" />
                </motion.button>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#0066FF] rounded-2xl transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
