
import React from "react";
import { Link } from "react-router-dom";
import { Leaf, Cylinder, ChevronRight } from "lucide-react";

const ProductsSection: React.FC = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-fertiloop-green font-semibold tracking-wide uppercase">
            Nos produits
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Des solutions durables
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Des produits écologiques et efficaces issus de l'économie circulaire.
          </p>
        </div>

        <div className="mt-12">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            <div className="bg-white overflow-hidden rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="px-4 py-5 sm:px-6 bg-fertiloop-green-light/10">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Cylinder className="h-8 w-8 text-fertiloop-green" />
                  </div>
                  <h3 className="ml-3 text-lg font-medium text-gray-900">Biogaz</h3>
                </div>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <p className="text-gray-500 mb-4">
                  Une source d'énergie propre et renouvelable pour la cuisine, le chauffage et plus encore.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">Livraison de bonbonnes à domicile</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">Suivi digital de vos niveaux</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">Réduction de l'empreinte carbone</p>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    to="/services/biogas"
                    className="inline-flex items-center px-4 py-2 border border-fertiloop-green text-sm font-medium rounded-md text-fertiloop-green bg-white hover:bg-fertiloop-green-light/10"
                  >
                    En savoir plus
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="bg-white overflow-hidden rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="px-4 py-5 sm:px-6 bg-fertiloop-green-light/10">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Leaf className="h-8 w-8 text-fertiloop-green" />
                  </div>
                  <h3 className="ml-3 text-lg font-medium text-gray-900">Engrais organique</h3>
                </div>
              </div>
              <div className="px-4 py-5 sm:p-6">
                <p className="text-gray-500 mb-4">
                  Un engrais naturel et riche en nutriments pour augmenter la fertilité de vos sols.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">100% organique et écologique</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">Disponible en différents formats</p>
                  </li>
                  <li className="flex items-start">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">Livraison pour professionnels et particuliers</p>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    to="/services/fertilizer"
                    className="inline-flex items-center px-4 py-2 border border-fertiloop-green text-sm font-medium rounded-md text-fertiloop-green bg-white hover:bg-fertiloop-green-light/10"
                  >
                    En savoir plus
                    <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsSection;
