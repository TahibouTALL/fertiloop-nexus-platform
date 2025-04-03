
import React from "react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const CTASection: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="bg-fertiloop-green">
      <div className="max-w-7xl mx-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="text-center lg:text-left">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white">
              <span className="block">Prêt à rejoindre Fertiloop?</span>
              <span className="block text-fertiloop-beige mt-1">Inscrivez-vous dès aujourd'hui.</span>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-end">
            <Link
              to="/register"
              className="w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-fertiloop-green bg-white hover:bg-gray-50 transition-colors"
            >
              S'inscrire
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center px-4 sm:px-5 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-fertiloop-green-dark hover:bg-opacity-90 transition-colors"
            >
              {isMobile ? "Nos services" : "Découvrir nos services"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
