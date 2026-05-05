import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { PerformanceGoals } from './components/PerformanceGoals';
import { Mission } from './components/Mission';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Facility } from './components/Facility';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';
import { ChatBot } from './components/ChatBot';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <PerformanceGoals />
      <div id="about">
        <Mission />
      </div>
      <Stats />
      <div id="services">
        <Services />
      </div>
      <Process />
      <div id="facility">
        <Facility />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <CTA />
      <Footer />
      <ChatBot />
    </div>
  );
}