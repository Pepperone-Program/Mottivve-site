import Image from 'next/image';

const FeatureHighlightSection: React.FC = () => {
  return (
    <section className="relative py-12 md:py-24">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-5/12 px-4 mb-20 lg:mb-0">
            <div className="max-w-xs mb-10">
              <span className="inline-flex items-center h-6 mb-4 px-2 text-sm uppercase font-medium text-white bg-blue-500 rounded-full">Facilidade</span>
              <h1 className="font-heading tracking-tight text-4xl sm:text-5xl font-bold mb-4">Compre tudo que quiser de forma fácil</h1>
              <p className="text-gray-700 mb-10">Mochilas, camisetas, agasalhos, bolsas, garrafas e muitos outros equipamentos em um só lugar.</p>
              <ul>
                <li className="flex mb-5 items-center">
                  <div className="flex items-center justify-center w-8 h-8 mr-3 p-px rounded-full bg-blue-500">
                    <div className="flex items-center justify-center bg-white h-full w-full rounded-full">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2 11.6V4.4C2 4.29391 2.04214 4.19217 2.11716 4.11716C2.19217 4.04214 2.29391 4 2.4 4H11.1193C11.2527 4 11.378 4.06667 11.4527 4.178L13.8527 7.778C13.8965 7.84373 13.9199 7.92098 13.9199 8C13.9199 8.07902 13.8965 8.15627 13.8527 8.222L11.4527 11.822C11.4161 11.8768 11.3665 11.9218 11.3083 11.9528C11.2502 11.9839 11.1853 12.0001 11.1193 12H2.4C2.34747 12 2.29546 11.9897 2.24693 11.9696C2.1984 11.9495 2.1543 11.92 2.11716 11.8828C2.08001 11.8457 2.05055 11.8016 2.03045 11.7531C2.01035 11.7045 2 11.6525 2 11.6Z" stroke="url(#paint0_linear_3018_20784)" strokeWidth="1.5"></path>
                        <defs>
                          <linearGradient id="paint0_linear_3018_20784" x1="1.81375" y1="1.5" x2="4.80178" y2="12.8327" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#1f94cc">
                              <stop offset="1" stopColor="#1f94cc"></stop>
                            </stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <span className="font-semibold">Selecione</span>
                </li>
                <li className="flex mb-5 items-center">
                  <div className="flex items-center justify-center w-8 h-8 mr-3 p-px rounded-full bg-gradient-to-br from-gray-200 to-gray-200">
                    <div className="flex items-center justify-center bg-white h-full w-full rounded-full">
                      <img width="16" height="50" src="https://img.icons8.com/ios/50/credit-card-front.png" alt="credit-card-front"/>
                    </div>
                  </div>
                  <span className="text-gray-600">Efetue o pagamento</span>
                </li>
                <li className="flex items-center">
                  <div className="flex items-center justify-center w-8 h-8 mr-3 p-px rounded-full bg-gradient-to-br from-gray-200 to-gray-200">
                    <div className="flex items-center justify-center bg-white h-full w-full rounded-full">
                      <img width="18" height="18" src="https://img.icons8.com/small/16/product.png" alt="product"/>
                    </div>
                  </div>
                  <span className="text-gray-600">Receba onde desejar</span>
                </li>
              </ul>
            </div>
            <a className="xs:flex-shrink-0 group relative w-full xs:w-auto h-12 flex xs:inline-flex items-center justify-center px-5 font-bold text-gray-800 bg-white border border-gray-200 hover:border-blue-500 shadow-md hover:shadow-none rounded-lg transition-all duration-300 focus:outline-none" href="https://mottivve.lojavirtualnuvem.com.br/">
              <div className="absolute top-0 left-0 w-full h-full rounded-lg ring ring-gray-100 animate-pulse group-hover:ring-0 transition duration-300"></div>
              <span className="mr-2">Acessar a loja oficial</span>
              <span className="transform group-hover:translate-x-1 transition duration-300">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.5 5L12.5 10L7.5 15" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
              </span>
            </a>
          </div>
          <div className="w-full md:w-1/2 lg:w-7/12 px-4">
            <div>
              <div className="flex items-start max-w-xl mb-12">
                <div className="flex-shrink-0 flex items-center justify-center w-8 h-8 mr-6 p-px rounded-full bg-gradient-to-br from-blue-500 to-blue-600">
                  <div className="flex items-center justify-center bg-white h-full w-full rounded-full">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 11.6V4.4C2 4.29391 2.04214 4.19217 2.11716 4.11716C2.19217 4.04214 2.29391 4 2.4 4H11.1193C11.2527 4 11.378 4.06667 11.4527 4.178L13.8527 7.778C13.8965 7.84373 13.9199 7.92098 13.9199 8C13.9199 8.07902 13.8965 8.15627 13.8527 8.222L11.4527 11.822C11.4161 11.8768 11.3665 11.9218 11.3083 11.9528C11.2502 11.9839 11.1853 12.0001 11.1193 12H2.4C2.34747 12 2.29546 11.9897 2.24693 11.9696C2.1984 11.9495 2.1543 11.92 2.11716 11.8828C2.08001 11.8457 2.05055 11.8016 2.03045 11.7531C2.01035 11.7045 2 11.6525 2 11.6Z" stroke="url(#paint0_linear_3018_20784)" strokeWidth="1.5"></path>
                      <defs>
                        <linearGradient id="paint0_linear_3018_20784" x1="1.81375" y1="1.5" x2="4.80178" y2="12.8327" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#1f94cc">
                            <stop offset="1" stopColor="#25ACA0"></stop>
                          </stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div>
                  <h5 className="text-lg font-semibold mb-1">Ver produtos disponíveis</h5>
                  <p className="text-gray-600">Explore nosso vasto catalogo de produtos, aposto que não irá se arrepender.</p>
                </div>
              </div>
              <div >
                <Image
                  className="block rounded-4xl"
                  src="/images/catalogo_badboy.png"
                  alt="Catalogo de produtos"
                  width={600}
                  height={400}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlightSection;