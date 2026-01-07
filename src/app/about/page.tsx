'use client';

import { useEffect } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import StatsSection from '@/features/about/components/stats-section';
import AboutCTASection from '@/features/about/components/about-cta-section';

export default function AboutPage() {
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

        <StatsSection />

        <AboutCTASection />

        <Footer />
      </div>
    </div>
  );
}