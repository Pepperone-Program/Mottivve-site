/* eslint-disable @next/next/no-img-element */
const FeaturesGridSection: React.FC = () => {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 mx-auto">
        <div>
          <div className="max-w-2xl mx-auto mb-24 text-center">
            <h1 className="font-heading tracking-tight text-4xl sm:text-5xl font-bold mb-4" >Compre tudo que quiser de forma fácil</h1>
            <p className="text-gray-500">Com a Mottivve, você tem tudo que quiser com a qualidade de sempre.</p>
            <p className="text-gray-500">Compre, pague e receba onde quiser em um instante.</p>
          </div>
          <div className="flex flex-wrap -mx-4 -mb-16">
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-16">
              <div className="max-w-xs lg:px-4 mx-auto text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-gray-50">
                  <img width="64" height="64" src="https://img.icons8.com/external-others-zufarizal-robiyanto/64/external-bag-garis-workout-fitness-others-zufarizal-robiyanto.png" alt="external-bag-garis-workout-fitness-others-zufarizal-robiyanto"/>
                </div>
                <div className="mt-3">
                  <h5 className="text-xl font-bold mb-1">Bolsas & Mochilas</h5>
                  <p className="text-lg text-gray-500">Leve tudo que precisa para todos os lugares</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-16">
              <div className="max-w-xs lg:px-4 mx-auto text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-gray-50">
                  <img width="64" height="64" src="https://img.icons8.com/external-justicon-lineal-justicon/64/external-coat-autumn-clothes-justicon-lineal-justicon-1.png" alt="external-coat-autumn-clothes-justicon-lineal-justicon-1"/>
                </div>
                <div className="mt-3">
                  <h5 className="text-xl font-bold mb-1">Agasalhos & Moletons</h5>
                  <p className="text-lg text-gray-500">Sempre preparado para qualquer ocasião</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-16">
              <div className="max-w-xs lg:px-4 mx-auto text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-gray-50">
                  <img width="48" height="48" src="https://img.icons8.com/parakeet-line/48/t-shirt.png" alt="t-shirt"/>
                </div>
                <div className="mt-3">
                  <h5 className="text-xl font-bold mb-1">Camisetas</h5>
                  <p className="text-lg text-gray-500">Cortes que te valorizam.</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-16">
              <div className="max-w-xs lg:px-4 mx-auto text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-gray-50">
                  <img width="64" height="64" src="https://img.icons8.com/external-icongeek26-outline-icongeek26/64/external-boxing-sports-and-games-icongeek26-outline-icongeek26.png" alt="external-boxing-sports-and-games-icongeek26-outline-icongeek26"/>
                </div>
                <div className="mt-3">
                  <h5 className="text-xl font-bold mb-1">Equipamentos</h5>
                  <p className="text-lg text-gray-500">Material certo para quem leva a sério.</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-16">
              <div className="max-w-xs lg:px-4 mx-auto text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-gray-50">
                  <img width="64" height="64" src="https://img.icons8.com/laces/64/sparring.png" alt="sparring"/>
                </div>
                <div className="mt-3">
                  <h5 className="text-xl font-bold mb-1">Linha Luta (MMA, Jiu-Jitsu, Fightwear)</h5>
                  <p className="text-lg text-gray-500">Atitude que se sente no movimento.</p>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-16">
              <div className="max-w-xs lg:px-4 mx-auto text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-gray-50">
                  <img width="50" height="50" src="https://img.icons8.com/ios/50/exercise.png" alt="exercise"/>
                </div>
                <div className="mt-3">
                  <h5 className="text-xl font-bold mb-1">Lifestyle & Performance</h5>
                  <p className="text-lg text-gray-500">Para quem vive em movimento.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesGridSection;