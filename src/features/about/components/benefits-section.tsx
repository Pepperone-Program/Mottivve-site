import Image from 'next/image';
import benefits from '@/data/benefits.json';

interface Benefit {
  icon: string;
  title: string;
  description: string;
}

const BenefitsSection: React.FC = () => {
  if (!benefits) {
    return (
      <div className="container px-4 mb-28 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="pb-20 mb-20 border-b border-gray-100">
            <h3 className="font-heading text-4xl font-bold text-gray-900 mb-4">Benefits</h3>
            <p className="text-lg text-gray-500 mb-16">We help our employees thrive</p>
            <div className="flex items-center justify-center">
              <div className="text-gray-500">Loading benefits...</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container px-4 mb-28 mx-auto">
      <div className="max-w-4xl mx-auto">
        <div className="pb-20 mb-20 border-b border-gray-100">
          <h3 className="font-heading text-4xl font-bold text-gray-900 mb-4">Benefits</h3>
          <p className="text-lg text-gray-500 mb-16">We help our employees thrive</p>
          <div className="flex flex-wrap -mx-4 -mb-8">
            {(benefits as Benefit[]).map((benefit, index) => (
              <div key={index} className="w-full lg:w-1/2 px-4 mb-8">
                <div className="h-full p-8 border border-gray-100 rounded-xl">
                  <div className="flex w-16 h-16 mb-8 items-center justify-center rounded-full bg-gray-200">
                    <Image
                      src={benefit.icon}
                      alt=""
                      width={24}
                      height={24}
                      style={{ width: 'auto', height: 'auto', maxWidth: '24px', maxHeight: '24px' }}
                    />
                  </div>
                  <h5 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h5>
                  <p className="max-w-sm text-gray-500">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenefitsSection;