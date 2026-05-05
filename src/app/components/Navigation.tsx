import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Facility', href: '#facility' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[black]/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#FFFFFF] rounded-lg flex items-center justify-center">
              <img src="https://revolutionsp.com/wp-content/uploads/2025/05/Revolution-Sports-Performance_Logo-.png" alt="" />
            </div>
            <div>
              <div className="text-white font-bold text-lg leading-tight">Revolution</div>
              <div className="text-gray-400 text-xs leading-tight">Sports Performance</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <button className="bg-[#0066FF] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#0052CC] transition-colors">
              Book Now
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block text-gray-300 hover:text-white transition-colors font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button className="w-full bg-[#0066FF] text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-[#0052CC] transition-colors">
              Book Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
