import { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import LayananSection from './components/LayananSection';
import PaketSection from './components/PaketSection';
import ArmadaSection from './components/ArmadaSection';
import CaraBookingSection from './components/CaraBookingSection';
import TestimoniSection from './components/TestimoniSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import FloatingWA from './components/FloatingWA';

export default function App() {
  // Smooth scroll polyfill for anchor links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector((anchor as HTMLAnchorElement).getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen" style={{ background: '#1a1a1a', overflowX: 'hidden' }}>
      {/* Sticky Navbar */}
      <Navbar />

      {/* Page Content */}
      <main>
        {/* 1. Hero */}
        <HeroSection />

        {/* 2. Stats Trust Bar */}
        <StatsSection />

        {/* 3. Layanan */}
        <LayananSection />

        {/* 4. Paket Promo */}
        <PaketSection />

        {/* 5. Armada / Fleet */}
        <ArmadaSection />

        {/* 6. Cara Booking */}
        <CaraBookingSection />

        {/* 7. Testimoni */}
        <TestimoniSection />

        {/* 8. CTA Banner */}
        <CTASection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Button */}
      <FloatingWA />
    </div>
  );
}
