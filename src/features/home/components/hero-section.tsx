'use client';

import Image from 'next/image';
import Button from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="container px-4 mx-auto" role="banner">
      <div className="relative py-16 pb-40 md:pb-72 px-2 xs:px-8 rounded-3xl overflow-hidden">
        <Image
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/images/headers-bg-gray-platee.png"
          alt=""
          fill
          priority
        />

        {/* Hero content */}
        <div className="relative max-w-lg lg:max-w-3xl mb-14 mx-auto text-center">
          <div className="max-w-lg md:max-w-2xl px-4 mx-auto">
            <h1 className="font-heading tracking-tight text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Eleve sua presença. Vista Bad Boy. Com a Mottivve.
            </h1>
            <p className="max-w-lg mx-auto text-lg text-gray-700 mb-10">
              Produtos pensados para quem vive em movimento e valoriza atitude.
            </p>

            {/* CTA Button */}
            <Button
              onClick={() => window.location.href='https://mottivve.lojavirtualnuvem.com.br'}
              aria-label="Get started with Frequencii"
            >
              Conheça agora!
            </Button>
          </div>
        </div>
      </div>

      {/* Feature image */}
      <Image
        className="relative block mx-auto px-12 lg:px-8 -mt-40 md:-mt-64"
        src="/images/headers-header-2-center.png"
        alt="Frequencii dashboard showing marketing asset organization and management interface"
        width={800}
        height={600}
        priority
      />
    </section>
  );
};

export default HeroSection;