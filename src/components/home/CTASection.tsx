
import React from "react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";

const CTASection: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="bg-fertiloop-green">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              <span className="block">Prêt à rejoindre Fertiloop?</span>
              <span className="block text-fertiloop-beige mt-1">Inscrivez-vous dès aujourd'hui.</span>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-end">
            <div className="rounded-md shadow">
              <Link
                to="/register"
                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-fertiloop-green bg-white hover:bg-gray-50"
              >
                S'inscrire
              </Link>
            </div>
            <div className="rounded-md shadow">
              <Link
                to="/services"
                className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-fertiloop-green-dark hover:bg-opacity-90"
              >
                {isMobile ? "Nos services" : "Découvrir nos services"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
