import Image from 'next/image';

const ContactHeroSection: React.FC = () => {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-5/12 xl:w-1/2 px-4 mb-16 lg:mb-0">
            <div className="max-w-sm">
              <span className="inline-flex items-center h-7 mb-6 px-2 text-sm font-medium text-yellowGreen-700 bg-yellowGreen-200 rounded-full">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 5.5C10 3.29086 8.20914 1.5 6 1.5C3.79086 1.5 2 3.29086 2 5.5" stroke="#70A617" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M2.34038 8.83509L2.21268 8.80317C1.49998 8.62499 1 7.98463 1 7.25C1 6.51537 1.49998 5.87501 2.21268 5.69683L2.34038 5.66491C2.67543 5.58114 3 5.83456 3 6.17992V8.32008C3 8.66544 2.67543 8.91886 2.34038 8.83509Z" stroke="#70A617"></path>
                  <path d="M9.65962 8.83509L9.78732 8.80317C10.5 8.62499 11 7.98463 11 7.25C11 6.51537 10.5 5.87501 9.78732 5.69683L9.65962 5.66491C9.32457 5.58114 9 5.83456 9 6.17992V8.32008C9 8.66544 9.32457 8.91886 9.65962 8.83509Z" stroke="#70A617"></path>
                  <path d="M10 9V9C10 9.69036 9.44036 10.25 8.75 10.25H7.25" stroke="#70A617"></path>
                  <path d="M6.75 11H5.25C4.83579 11 4.5 10.6642 4.5 10.25C4.5 9.83579 4.83579 9.5 5.25 9.5H6.75C7.16421 9.5 7.5 9.83579 7.5 10.25C7.5 10.6642 7.16421 11 6.75 11Z" stroke="#70A617"></path>
                </svg>
                <span className="ml-1">Contact Support</span>
              </span>
              <h1 className="font-heading tracking-tight text-4xl xs:text-5xl font-bold mb-4">How can we help you today?</h1>
              <p className="text-lg text-gray-500 mb-10">Submit your info and we&apos;ll get back to you as soon as possible.</p>
              <div className="flex items-center">
                <Image
                  className="block w-10 h-10 rounded-full"
                  src="/images/blog-avatar-medium.png"
                  alt="Support representative"
                  width={40}
                  height={40}
                />
                <span className="ml-4 text-sm font-medium">Responds in &lt; 1-2 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHeroSection;