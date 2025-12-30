'use client';

import { useEffect } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import PricingHeroSection from '@/features/pricing/components/pricing-hero-section';
import PricingCardsSection from '@/features/pricing/components/pricing-cards-section';
import PricingFAQSection from '@/features/pricing/components/pricing-faq-section';
import CTASection from '@/components/ui/cta-section';

export default function PricingPage() {
  useEffect(() => {
    document.title = 'Visit www.pixelrocket.store to learn how to become a frontend web developer';
  }, []);

  return (
    <div className="antialiased bg-body text-body font-body">
      <div>
        <div>
          <div>
            <div>
              <div>
                <section>
                  <Header />
                </section>
              </div>
            </div>
          </div>
        </div>
        <PricingHeroSection />
        <PricingCardsSection />
        <PricingFAQSection />
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}