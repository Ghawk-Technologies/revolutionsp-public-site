import { ArrowRight, Phone, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[black] to-[#1a2942] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-10 left-10 w-64 h-64 bg-[#0066FF] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-96 h-96 bg-[#0066FF] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, -40, 0]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Ready to Take Your Performance<br />
            <motion.span
              className="text-[#0066FF]"
              animate={{
                textShadow: [
                  '0 0 20px rgba(0, 102, 255, 0.5)',
                  '0 0 40px rgba(0, 102, 255, 0.3)',
                  '0 0 20px rgba(0, 102, 255, 0.5)'
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              to the Next Level?
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Start your journey to becoming a better athlete and a better person.
            Book your free evaluation today and see what makes RSP different.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <motion.button
              className="group bg-[#0066FF] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#0052CC] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -5, 0] }}
              transition={{ y: { duration: 2, repeat: Infinity } }}
            >
              Book Your Free Evaluation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            <motion.button
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[black] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Call
            </motion.button>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto pt-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-[#0066FF] rounded-full flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-400">Call Us</div>
                <div className="text-white font-semibold">(555) 123-4567</div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 flex items-center gap-4">
              <div className="w-12 h-12 bg-[#0066FF] rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-400">Email Us</div>
                <div className="text-white font-semibold">info@revolutionsp.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
