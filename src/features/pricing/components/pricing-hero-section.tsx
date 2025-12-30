'use client';

import { useState } from 'react';

const PricingHeroSection: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState<boolean>(true);

  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="max-w-md lg:max-w-6xl mx-auto">
          <div className="flex flex-wrap items-end -mx-4 mb-24">
            <div className="w-full lg:w-1/2 px-4 mb-10 lg:mb-0">
              <div className="max-w-sm sm:max-w-md">
                <h1 className="font-heading tracking-tight text-4xl sm:text-5xl font-semibold mb-4">
                  Flexible pricing plan
                </h1>
                <p className="text-lg text-gray-500">
                  Plan that scales with your business immediately.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-4">
              <div className="flex justify-end">
                <div className="inline-flex items-center p-1 bg-gray-50 rounded-lg">
                  <button
                    className={`inline-block px-4 mr-1 py-2.5 text-sm ${
                      !isAnnual
                        ? 'text-gray-900 font-medium bg-white border border-gray-100 rounded-lg'
                        : 'text-gray-500 bg-transparent border border-transparent rounded-lg'
                    }`}
                    onClick={() => setIsAnnual(false)}
                  >
                    Monthly
                  </button>
                  <button
                    className={`inline-block px-4 py-2.5 text-sm ${
                      isAnnual
                        ? 'text-gray-900 font-medium bg-white border border-gray-100 rounded-lg'
                        : 'text-gray-500 bg-transparent border border-transparent rounded-lg'
                    }`}
                    onClick={() => setIsAnnual(true)}
                  >
                    Annually
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingHeroSection;