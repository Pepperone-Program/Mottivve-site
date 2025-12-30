import faqs from '@/data/faq.json';

interface FAQ {
  question: string;
  answer: string;
}

const PricingFAQSection: React.FC = () => {
  if (!faqs) {
    return null;
  }

  return (
    <section className="relative py-12 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-20">
          <h1 className="font-heading tracking-tight text-4xl sm:text-5xl font-semibold mb-6">
            Frequently asked questions
          </h1>
          <p className="text-gray-500">Everything you need to know about the product.</p>
        </div>
        <div className="flex flex-wrap -mx-4 lg:-mx-12 -mb-16">
          {(faqs as FAQ[]).map((faq, index) => (
            <div key={index} className="w-full xs:w-1/2 md:w-1/3 px-4 lg:px-12 mb-16">
              <div className="max-w-sm">
                <h6 className="text-xl font-semibold mb-1">{faq.question}</h6>
                <p className="text-gray-500">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingFAQSection;