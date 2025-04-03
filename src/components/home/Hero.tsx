
import React from "react";
import { Link } from "react-router-dom";
import { Trash2, Recycle, Truck } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-fertiloop-beige py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-fertiloop-green sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl">
              <span className="md:block">Plateforme de gestion</span>{" "}
              <span className="text-fertiloop-green md:block">du biogaz et de l'engrais</span>
            </h1>
            <p className="mt-3 text-base text-gray-600 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Un service de gestion efficace des biodéchets, de collecte et de vente 
              de biogaz et d'engrais.
            </p>
            <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/register"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-fertiloop-blue hover:bg-fertiloop-blue-dark md:py-4 md:text-lg md:px-10"
                  >
                    S'inscrire
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/services"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-fertiloop-green bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    Nos services
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
              <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                <div className="p-8 flex flex-col items-center">
                  <div className="flex space-x-4 justify-center mb-6">
                    <div className="bg-fertiloop-green/10 p-3 rounded-full">
                      <Trash2 className="h-8 w-8 text-fertiloop-green" />
                    </div>
                    <div className="bg-fertiloop-blue/10 p-3 rounded-full">
                      <Recycle className="h-8 w-8 text-fertiloop-blue" />
                    </div>
                    <div className="bg-fertiloop-yellow/10 p-3 rounded-full">
                      <Truck className="h-8 w-8 text-fertiloop-yellow-dark" />
                    </div>
                  </div>
                  <div className="space-y-4 w-full">
                    <div className="rounded-lg border border-gray-100 p-4 flex items-center">
                      <Trash2 className="h-5 w-5 text-fertiloop-green mr-3" />
                      <span>Signaler des biodéchets</span>
                    </div>
                    <div className="rounded-lg border border-gray-100 p-4 flex items-center">
                      <Truck className="h-5 w-5 text-fertiloop-green mr-3" />
                      <span>Suivi des collectes et livraisons</span>
                    </div>
                    <div className="rounded-lg border border-gray-100 p-4 flex items-center">
                      <Recycle className="h-5 w-5 text-fertiloop-green mr-3" />
                      <span>Commander du biogaz/engrais</span>
                    </div>
                  </div>
                  <div className="mt-6 w-full">
                    <input
                      type="text"
                      placeholder="Numéro de téléphone"
                      className="input-field"
                    />
                    <Link
                      to="/register"
                      className="mt-4 w-full btn-primary flex justify-center"
                    >
                      Inscription
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
