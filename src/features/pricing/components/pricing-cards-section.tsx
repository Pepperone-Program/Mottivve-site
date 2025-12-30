import pricingTiers from '@/data/pricing-tiers.json';

interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  popular?: boolean;
  popularText?: string;
  buttonText: string;
  buttonStyle: 'primary' | 'secondary';
  description?: string;
  features: string[];
}

const CheckIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15.5917 6.00822C15.5142 5.93011 15.4221 5.86811 15.3205 5.82581C15.219 5.7835 15.11 5.76172 15 5.76172C14.89 5.76172 14.7811 5.7835 14.6796 5.82581C14.578 5.86811 14.4858 5.93011 14.4084 6.00822L8.20004 12.2249L5.59171 9.60822C5.51127 9.53052 5.41632 9.46942 5.31227 9.42842C5.20823 9.38742 5.09713 9.36731 4.98531 9.36924C4.87349 9.37118 4.76315 9.39512 4.66058 9.4397C4.55802 9.48427 4.46524 9.54862 4.38754 9.62905C4.30984 9.70949 4.24875 9.80444 4.20774 9.90848C4.16674 10.0125 4.14663 10.1236 4.14856 10.2354C4.1505 10.3473 4.17444 10.4576 4.21902 10.5602C4.2636 10.6627 4.32794 10.7555 4.40837 10.8332L7.60837 14.0332C7.68584 14.1113 7.77801 14.1733 7.87956 14.2156C7.98111 14.2579 8.09003 14.2797 8.20004 14.2797C8.31005 14.2797 8.41897 14.2579 8.52052 14.2156C8.62207 14.1733 8.71424 14.1113 8.79171 14.0332L15.5917 7.23322C15.6763 7.15518 15.7438 7.06047 15.79 6.95506C15.8361 6.84964 15.86 6.7358 15.86 6.62072C15.86 6.50563 15.8361 6.3918 15.79 6.28638C15.7438 6.18096 15.6763 6.08625 15.5917 6.00822V6.00822Z"
      fill="#041109"
    />
  </svg>
);

const PricingCardsSection: React.FC = () => {
  if (!pricingTiers) {
    return null;
  }

  return (
    <div className="container px-4 mx-auto">
      <div className="max-w-md lg:max-w-6xl mx-auto">
        <div className="flex flex-wrap -mx-4">
          {(pricingTiers as PricingTier[]).map((tier) => (
            <div key={tier.id} className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
              <div className={`relative p-8 rounded-xl ${tier.popular ? 'bg-teal-900' : 'bg-white border border-gray-100 shadow-xl'}`}>
                {tier.popular && tier.popularText && (
                  <span className="absolute top-0 right-0 m-8 inline-block px-2 py-px text-xs text-white bg-teal-800 rounded-full">
                    {tier.popularText}
                  </span>
                )}

                <h5 className={`text-xl font-medium mb-4 ${tier.popular ? 'text-white' : ''}`}>
                  {tier.name}
                </h5>

                <span className={`block mb-2 text-3xl font-semibold tracking-tighter ${tier.popular ? 'text-white' : ''}`}>
                  {tier.price}
                </span>

                <span className={`block mb-6 ${tier.popular ? 'text-gray-400' : 'text-gray-500'}`}>
                  {tier.period}
                </span>

                <a
                  className={`flex items-center justify-center w-full h-12 px-4 mb-8 text-center text-base font-bold rounded-lg transition duration-200 ${
                    tier.buttonStyle === 'primary'
                      ? 'group relative bg-yellowGreen-600 text-gray-900'
                      : 'text-gray-700 hover:text-yellowGreen-700 border border-gray-200 hover:border-yellowGreen-600 shadow-sm hover:shadow-none'
                  }`}
                  href="#"
                >
                  {tier.buttonStyle === 'primary' && (
                    <div className="absolute top-0 left-0 w-full h-full rounded-lg ring ring-yellowGreen-900 animate-pulse group-hover:ring-0 transition duration-300"></div>
                  )}
                  <span>{tier.buttonText}</span>
                </a>

                {tier.description && (
                  <span className={`block mb-4 text-sm font-semibold ${tier.popular ? 'text-white' : ''}`}>
                    {tier.description}
                  </span>
                )}

                {!tier.description && (
                  <span className={`block mb-4 text-sm font-semibold ${tier.popular ? 'text-white' : ''}`}>
                    What&apos;s included
                  </span>
                )}

                <ul>
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className={`flex items-center ${featureIndex < tier.features.length - 1 ? 'mb-4' : ''}`}>
                      <div className="flex items-center justify-center w-5 h-5 mr-3 bg-gray-50 rounded-full">
                        <CheckIcon />
                      </div>
                      <span className={tier.popular ? 'text-white' : ''}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingCardsSection;