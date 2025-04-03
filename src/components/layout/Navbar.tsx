
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <span className="text-fertiloop-green text-2xl font-bold">Fertiloop</span>
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-4 sm:items-center">
              <Link to="/" className="nav-link">Accueil</Link>
              <Link to="/services" className="nav-link">Services</Link>
              <Link to="/about" className="nav-link">À propos</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
            </div>
          </div>
          <div className="hidden sm:flex sm:items-center sm:ml-6">
            <Link to="/register" className="mr-4 text-sm font-medium text-fertiloop-blue">
              S'inscrire
            </Link>
            <Link to="/login" className="btn-primary py-2 px-4">
              Se connecter
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-fertiloop-green"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className="block pl-3 pr-4 py-2 border-l-4 border-fertiloop-green text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
            <Link
              to="/services"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/about"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              À propos
            </Link>
            <Link
              to="/contact"
              className="block pl-3 pr-4 py-2 border-l-4 border-transparent hover:bg-gray-50 hover:border-gray-300 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4 space-x-4">
                <Link 
                  to="/register" 
                  className="text-base font-medium text-fertiloop-blue"
                  onClick={() => setIsOpen(false)}
                >
                  S'inscrire
                </Link>
                <Link 
                  to="/login" 
                  className="btn-primary py-2 px-3 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  Se connecter
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
