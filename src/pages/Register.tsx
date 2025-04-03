
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
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Pourquoi rejoindre Fertiloop?
              </h2>
              <ul className="space-y-4">
                <li className="flex">
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
                  <span className="ml-3 text-gray-700">
                    Accès à des engrais organiques de qualité
                  </span>
                </li>
                <li className="flex">
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
                  <span className="ml-3 text-gray-700">
                    Source d'énergie propre et renouvelable
                  </span>
                </li>
                <li className="flex">
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
                  <span className="ml-3 text-gray-700">
                    Suivi en temps réel de vos commandes et livraisons
                  </span>
                </li>
                <li className="flex">
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
                  <span className="ml-3 text-gray-700">
                    Contribution à la réduction des déchets et des émissions
                  </span>
                </li>
                <li className="flex">
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
                  <span className="ml-3 text-gray-700">
                    Accompagnement technique personnalisé
                  </span>
                </li>
              </ul>

              <div className="mt-8">
                <p className="text-sm text-gray-600">
                  Déjà inscrit?{" "}
                  <Link to="/login" className="text-fertiloop-blue font-medium hover:underline">
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
