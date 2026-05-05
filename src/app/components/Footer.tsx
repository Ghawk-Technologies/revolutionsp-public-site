import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[black] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#0066FF] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <div>
                <div className="font-bold text-lg leading-tight">Revolution</div>
                <div className="text-gray-400 text-xs leading-tight">Sports Performance</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Building better athletes and better humans through personalized training and character development.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#0066FF] transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#0066FF] transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 bg-white/5 rounded-full flex items-center justify-center hover:bg-[#0066FF] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#facility" className="hover:text-white transition-colors">Facility</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Programs</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Sports Training</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pitching Development</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Combo Programs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Team Training</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Private Sessions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0 text-[#0066FF]" />
                <span>123 Performance Drive<br />Athletic City, ST 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 text-[#0066FF]" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0 text-[#0066FF]" />
                <span>info@revolutionsp.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2026 Revolution Sports Performance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
