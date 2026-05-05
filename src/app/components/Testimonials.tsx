import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Michael Johnson',
      role: 'Baseball, College Athlete',
      content: 'RSP transformed my game. The personalized training and focus on both physical and mental development gave me the edge I needed to compete at the college level.',
      rating: 5,
    },
    {
      name: 'Sarah Martinez',
      role: 'Soccer, High School Varsity',
      content: 'The coaches here genuinely care about you as a person, not just an athlete. My speed and agility have improved dramatically, and I feel more confident on the field.',
      rating: 5,
    },
    {
      name: 'David Chen',
      role: 'Football, Professional',
      content: 'I train here in the off-season, and it keeps me in peak condition. The data-driven approach and attention to detail are unmatched.',
      rating: 5,
    },
    {
      name: 'Emily Williams',
      role: 'Track & Field, State Champion',
      content: 'The facility is incredible, and the training programs are exactly what I needed to reach the next level. Highly recommend to any serious athlete.',
      rating: 5,
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
            Success Stories
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[black] mt-4">
            What Athletes Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow relative"
              initial={{ opacity: 0, y: 50, rotate: -5 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#0066FF]/20" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#0066FF] text-[#0066FF]" />
                ))}
              </div>

              <p className="text-gray-600 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              <div className="border-t border-gray-100 pt-4">
                <div className="font-bold text-[black]">{testimonial.name}</div>
                <div className="text-sm text-gray-500">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-[#0066FF] text-[#0066FF]" />
              ))}
            </div>
            <span className="text-gray-600">
              <span className="font-bold text-[black]">5.0</span> from 200+ reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
