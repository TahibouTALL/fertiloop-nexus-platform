
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import RegistrationForm from "../components/forms/RegistrationForm";

const Register = () => {
  return (
    <div className="min-h-screen bg-fertiloop-beige-light">
      <Navbar />
      <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Inscription
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            Rejoignez Fertiloop et contribuez à l'économie circulaire
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-8 items-center justify-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="rounded-xl bg-white shadow-sm p-6 md:p-8">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <img 
                    src="https://placehold.co/300x200/e2f2d5/1f7532?text=Fertiloop" 
                    alt="Fertiloop" 
                    className="w-24 h-24 object-cover rounded-xl shadow-sm"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-1">
                    Pourquoi rejoindre Fertiloop?
                  </h2>
                  <p className="text-sm text-gray-500">
                    Une solution complète pour la gestion des biodéchets et l'accès aux ressources durables
                  </p>
                </div>
              </div>
              
              <ul className="space-y-4">
                <li className="flex p-3 bg-fertiloop-green/5 rounded-lg">
                  <svg
                    className="h-6 w-6 text-fertiloop-green flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div className="ml-3">
                    <span className="text-gray-700 font-medium">Engrais organiques de qualité</span>
                    <p className="text-sm text-gray-500 mt-1">Produits 100% naturels et écologiques</p>
                  </div>
                </li>
                <li className="flex p-3 bg-fertiloop-blue/5 rounded-lg">
                  <svg
                    className="h-6 w-6 text-fertiloop-blue flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div className="ml-3">
                    <span className="text-gray-700 font-medium">Énergie renouvelable</span>
                    <p className="text-sm text-gray-500 mt-1">Biogaz issu de la valorisation des déchets</p>
                  </div>
                </li>
                <li className="flex p-3 bg-fertiloop-yellow/5 rounded-lg">
                  <svg
                    className="h-6 w-6 text-fertiloop-yellow-dark flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div className="ml-3">
                    <span className="text-gray-700 font-medium">Suivi en temps réel</span>
                    <p className="text-sm text-gray-500 mt-1">Commandes et livraisons tracées de bout en bout</p>
                  </div>
                </li>
                <li className="flex p-3 bg-fertiloop-green/5 rounded-lg">
                  <svg
                    className="h-6 w-6 text-fertiloop-green flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <div className="ml-3">
                    <span className="text-gray-700 font-medium">Impact environnemental positif</span>
                    <p className="text-sm text-gray-500 mt-1">Réduction des déchets et des émissions de gaz à effet de serre</p>
                  </div>
                </li>
              </ul>

              <div className="mt-8 p-4 bg-fertiloop-beige rounded-lg border border-fertiloop-beige-dark/20">
                <p className="text-sm text-gray-600 flex items-center">
                  <svg
                    className="h-5 w-5 text-fertiloop-green mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Déjà inscrit?{" "}
                  <Link to="/login" className="text-fertiloop-blue font-medium hover:underline ml-1">
                    Se connecter
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
