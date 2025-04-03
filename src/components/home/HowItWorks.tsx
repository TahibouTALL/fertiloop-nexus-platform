
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
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Un processus simple et efficace
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            De la collecte des biodéchets jusqu'à l'utilisation des produits finaux
          </p>
        </div>

        <div className="mt-10">
          <div className="relative">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-fertiloop-beige-light px-3 text-lg font-medium text-gray-900">
                Le cycle de Fertiloop
              </span>
            </div>
          </div>

          <div className="mt-8 lg:grid lg:grid-cols-3 lg:gap-8">
            <div className="relative">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-fertiloop-green text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg leading-6 font-medium text-gray-900 text-center">Collecte des biodéchets</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Signalez vos biodéchets prêts à être collectés via l'application et nous nous occupons du reste.
              </p>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-fertiloop-green text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg leading-6 font-medium text-gray-900 text-center">Transformation</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Vos déchets sont transformés en biogaz et en engrais organique de qualité.
              </p>
            </div>

            <div className="mt-10 lg:mt-0">
              <div className="flex items-center justify-center h-20 w-20 rounded-full bg-fertiloop-green text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg leading-6 font-medium text-gray-900 text-center">Utilisation</h3>
              <p className="mt-2 text-base text-gray-500 text-center">
                Commandez du biogaz et de l'engrais directement via l'application avec livraison.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
