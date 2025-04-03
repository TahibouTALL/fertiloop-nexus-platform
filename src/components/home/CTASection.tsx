
import React from "react";
import { Link } from "react-router-dom";

const CTASection: React.FC = () => {
  return (
    <div className="bg-fertiloop-green">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          <span className="block">Prêt à rejoindre Fertiloop?</span>
          <span className="block text-fertiloop-beige">Inscrivez-vous dès aujourd'hui.</span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link
              to="/register"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-fertiloop-green bg-white hover:bg-gray-50"
            >
              S'inscrire
            </Link>
          </div>
          <div className="ml-3 inline-flex rounded-md shadow">
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-fertiloop-green-dark hover:bg-fertiloop-green-dark"
            >
              Découvrir nos services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
