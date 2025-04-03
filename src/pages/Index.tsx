
import React from "react";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import ImageGallery from "../components/home/ImageGallery";
import CompanyShowcase from "../components/home/CompanyShowcase";
import { Leaf, Recycle, Cylinder, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <CompanyShowcase />
      <ImageGallery />

      {/* How it works section */}
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

      {/* Products section */}
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

      {/* CTA Section */}
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

      {/* Footer */}
      <footer className="bg-fertiloop-beige-dark">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="md:flex md:justify-between">
            <div className="mb-8 md:mb-0">
              <div className="flex items-center">
                <img 
                  src="/lovable-uploads/4eb1fc11-5e7f-4cdd-a755-9dffd17d3b51.png" 
                  alt="Fertiloop Logo" 
                  className="h-10 w-10 mr-2"
                />
                <div>
                  <h2 className="text-fertiloop-green text-2xl font-bold">Fertiloop</h2>
                  <p className="text-fertiloop-green/70 text-sm">Closing the loop</p>
                </div>
              </div>
              <p className="mt-2 text-sm text-gray-600">
                Plateforme de gestion du biogaz<br />et de l'engrais
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
              <div>
                <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase">
                  Services
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/services/biogas" className="text-base text-gray-600 hover:text-gray-800">
                      Biogaz
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/fertilizer" className="text-base text-gray-600 hover:text-gray-800">
                      Engrais
                    </Link>
                  </li>
                  <li>
                    <Link to="/services/waste" className="text-base text-gray-600 hover:text-gray-800">
                      Biodéchets
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase">
                  Support
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/contact" className="text-base text-gray-600 hover:text-gray-800">
                      Contact
                    </Link>
                  </li>
                  <li>
                    <Link to="/faq" className="text-base text-gray-600 hover:text-gray-800">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="text-base text-gray-600 hover:text-gray-800">
                      À propos
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <h3 className="text-sm font-semibold text-gray-800 tracking-wider uppercase">
                  Légal
                </h3>
                <ul className="mt-4 space-y-4">
                  <li>
                    <Link to="/privacy" className="text-base text-gray-600 hover:text-gray-800">
                      Confidentialité
                    </Link>
                  </li>
                  <li>
                    <Link to="/terms" className="text-base text-gray-600 hover:text-gray-800">
                      Conditions
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-300 pt-8 md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Facebook</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Instagram</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
            <p className="mt-8 text-base text-gray-500 md:mt-0 md:order-1">
              &copy; {new Date().getFullYear()} Fertiloop. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
