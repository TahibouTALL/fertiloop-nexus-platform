
import React from "react";
import { Link } from "react-router-dom";

const HowItWorks: React.FC = () => {
  return (
    <div className="bg-fertiloop-beige-light py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-fertiloop-green font-semibold tracking-wide uppercase">
            Comment ça marche
          </h2>
          <p className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
            Un processus simple et efficace
          </p>
          <p className="mt-4 text-lg sm:text-xl text-gray-500 mx-auto max-w-2xl">
            De la collecte des biodéchets jusqu'à l'utilisation des produits finaux
          </p>
        </div>

        <div className="mt-10 sm:mt-12">
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-fertiloop-beige-light px-3 text-base sm:text-lg font-medium text-gray-900">
                Le cycle de Fertiloop
              </span>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
            {[1, 2, 3].map((step) => (
              <div key={step} className="relative flex flex-col items-center p-4 sm:p-6">
                <div className="flex items-center justify-center h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full bg-fertiloop-green text-white text-xl sm:text-2xl font-bold mb-4">
                  {step}
                </div>
                <h3 className="text-base sm:text-lg leading-6 font-medium text-gray-900 text-center">
                  {step === 1 && "Collecte des biodéchets"}
                  {step === 2 && "Transformation"}
                  {step === 3 && "Utilisation"}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-gray-500 text-center">
                  {step === 1 && "Signalez vos biodéchets prêts à être collectés via l'application et nous nous occupons du reste."}
                  {step === 2 && "Vos déchets sont transformés en biogaz et en engrais organique de qualité."}
                  {step === 3 && "Commandez du biogaz et de l'engrais directement via l'application avec livraison."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
