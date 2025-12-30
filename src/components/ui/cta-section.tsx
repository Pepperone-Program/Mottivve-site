'use client';

import Image from 'next/image';
import Button from './button';

interface CTASectionProps {
  badge?: string;
  title?: string;
  buttonText?: string;
  buttonUrl?: string;
  showArrow?: boolean;
  className?: string;
  backgroundImagePath?: string;
}

/**
 * Reusable Call-to-Action section component
 */
const CTASection: React.FC<CTASectionProps> = ({
  badge = 'Conheça nosso site',
  title = 'Ainda não sabe se somos a melhor opção?',
  buttonText = 'Visite o site https://mottivve.lojavirtualnuvem.com.br',
  buttonUrl = 'https://mottivve.lojavirtualnuvem.com.br',
  showArrow = true,
  className = '',
  backgroundImagePath = '/images'
}) => {
  return (
    <section className={`py-12 md:py-24 ${className}`}>
      <div className="container px-4 mx-auto">
        <div className="relative pb-16 border-b overflow-hidden" style={{borderBottom: '1px solid #1f94cc'}}>
          {/* Background Images */}
          <Image
            className="absolute bottom-0 left-1/2 md:-mb-2 lg:-mb-20 transform -translate-x-1/2"
            src={`${backgroundImagePath}/cta-light-blue-bottom.png`}
            alt=""
            width={800}
            height={200}
            aria-hidden="true"
          />
          <Image
            className="absolute bottom-0 left-1/2 -mb-5 sm:-mb-10 md:-mb-16 lg:-mb-28 transform -translate-x-1/2"
            src={`${backgroundImagePath}/cta-light-blue-bottom.png`}
            alt=""
            width={800}
            height={300}
            aria-hidden="true"
          />

          {/* Content */}
          <div className="relative max-w-sm md:max-w-xl mx-auto text-center">
            {badge && (
              <span className="inline-flex items-center h-6 mb-4 px-2 text-sm font-medium text-white bg-blue-500 rounded-full">
                {badge}
              </span>
            )}

            <h2 className="font-heading tracking-tight text-4xl sm:text-5xl font-bold mb-10">
              {title}
            </h2>

            <Button
              onClick={() => window.location.href=`${buttonUrl}`}
              className=''
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;