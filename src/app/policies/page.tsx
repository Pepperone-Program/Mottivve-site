'use client';

import { useEffect } from 'react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import PrivacyPolicySection from '@/features/policies/page';

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

        <PrivacyPolicySection />

        <Footer />
      </div>
    </div>
  );
}