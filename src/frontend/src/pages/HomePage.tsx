import { useEffect } from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import BenefitsSection from '../components/sections/BenefitsSection';
import VisualTrustSection from '../components/sections/VisualTrustSection';
import WhatsAppCTASection from '../components/sections/WhatsAppCTASection';
import SupportSection from '../components/sections/SupportSection';
import { usePageMeta } from '../hooks/usePageMeta';

export default function HomePage() {
  usePageMeta({
    title: 'MagadhPrime - Premium Quality Wheat Flour | MAGADH FLOUR MILL',
    description: 'MagadhPrime offers premium quality wheat flour processed with advanced milling technology. Organic wheat selection, added bran, no chemicals or preservatives. Order now on WhatsApp.',
  });

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
          });
        }
      }, 100);
    }
  }, []);

  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <VisualTrustSection />
      <WhatsAppCTASection />
      <SupportSection />
    </main>
  );
}
