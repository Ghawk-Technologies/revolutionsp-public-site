import { ClipboardCheck, FileText, Dumbbell, BarChart3 } from 'lucide-react';

export function Process() {
  const steps = [
    {
      icon: ClipboardCheck,
      title: 'Free Evaluation',
      description: 'Comprehensive assessment of your current abilities, goals, and areas for improvement.',
    },
    {
      icon: FileText,
      title: 'Personalized Program',
      description: 'Custom training plan designed specifically for your sport, position, and objectives.',
    },
    {
      icon: Dumbbell,
      title: 'Expert Coaching',
      description: 'One-on-one training with experienced coaches in our state-of-the-art facility.',
    },
    {
      icon: BarChart3,
      title: 'Measurable Results',
      description: 'Track your progress with data and see real improvements in your performance.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#0066FF] font-semibold text-sm uppercase tracking-wider">
            Our Process
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[black] mt-4">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-full h-0.5 bg-gradient-to-r from-[#0066FF] to-[#0066FF]/20" />
              )}

              <div className="relative bg-[#F8F9FA] p-8 rounded-xl text-center space-y-4">
                <div className="w-16 h-16 bg-[#0066FF] rounded-full flex items-center justify-center mx-auto shadow-lg">
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                <div className="absolute -top-3 -right-3 w-10 h-10 bg-[black] rounded-full flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-lg">{index + 1}</span>
                </div>

                <h3 className="font-bold text-xl text-[black]">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
