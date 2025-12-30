'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import RegisterFormSection from '@/features/auth/components/register-form-section';
import CTASection from '@/components/ui/cta-section';

export default function RegisterPage() {
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
        <section className="relative py-12 md:py-24 overflow-hidden">
          <Image
            className="absolute bottom-0 left-0 w-full xl:-mb-24"
            src="/images/sign-up-eclipse-light-green.png"
            alt="Decorative background"
            width={1200}
            height={400}
            style={{ height: 'auto' }}
          />
          <div className="relative container px-4 mx-auto">
            <div>
              <div className="text-center">
                <Link className="inline-block mx-auto mb-8" href="/">
                  <Image
                    className="h-8"
                    src="/images/brand.svg"
                    alt="Brand logo"
                    width={120}
                    height={32}
                    style={{ width: 'auto' }}
                  />
                </Link>
              </div>
              <RegisterFormSection />
              <div className="text-center">
                <p className="text-sm">
                  <span className="mr-1 text-gray-500">Already have an account?</span>
                  <Link className="inline-block text-teal-500 hover:text-yellowGreen-600 font-semibold" href="/login">Login</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
        <CTASection />
        <Footer />
      </div>
    </div>
  );
}