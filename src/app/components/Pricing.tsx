import { Check } from 'lucide-react';

export function Pricing() {
  const programs = [
    {
      name: 'Training',
      price: '$75',
      period: 'per session',
      description: 'Complete sports performance training',
      features: [
        'Personalized training program',
        'Strength & conditioning',
        'Speed & agility work',
        'Movement quality development',
        'Progress tracking',
      ],
      popular: false,
    },
    {
      name: 'Pitching',
      price: '$85',
      period: 'per session',
      description: 'Baseball pitching development',
      features: [
        'Mechanics analysis',
        'Arm care & injury prevention',
        'Velocity development',
        'Command & control',
        'Video analysis',
      ],
      popular: true,
    },
    {
      name: 'Combo',
      price: '$140',
      period: 'per session',
      description: 'Training + Pitching combined',
      features: [
        'All training benefits',
        'All pitching benefits',
        'Comprehensive development',
        'Best value for baseball athletes',
        'Priority scheduling',
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#0066FF] font-semibold text-sm uppercase tracking-wider">
            Investment In Excellence
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-[black] mt-4">
            Programs & Pricing
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${
                program.popular ? 'ring-2 ring-[#0066FF]' : 'border border-gray-200'
              }`}
            >
              {program.popular && (
                <div className="absolute top-0 right-0 bg-[#0066FF] text-white px-4 py-1 text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-[black] mb-2">
                  {program.name}
                </h3>
                <p className="text-gray-600 mb-6">{program.description}</p>

                <div className="mb-6">
                  <span className="text-5xl font-bold text-[black]">{program.price}</span>
                  <span className="text-gray-500 ml-2">{program.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#0066FF]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#0066FF]" />
                      </div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    program.popular
                      ? 'bg-[#0066FF] text-white hover:bg-[#0052CC] shadow-md hover:shadow-lg'
                      : 'border-2 border-[black] text-[black] hover:bg-[black] hover:text-white'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Package discounts available. <span className="text-[#0066FF] font-semibold">Contact us</span> for custom training plans.
          </p>
        </div>
      </div>
    </section>
  );
}
