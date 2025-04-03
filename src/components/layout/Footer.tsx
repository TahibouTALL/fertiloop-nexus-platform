
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-fertiloop-green-dark">
      <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          <div>
            <h3 className="text-sm font-semibold text-fertiloop-beige uppercase tracking-wider">À propos</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/about" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Notre mission
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-sm text-gray-300 hover:text-white transition-colors">
                  L'équipe
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-fertiloop-beige uppercase tracking-wider">Services</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/services/biogas" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Biogaz
                </Link>
              </li>
              <li>
                <Link to="/services/fertilizer" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Engrais
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-fertiloop-beige uppercase tracking-wider">Support</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/faq" className="text-sm text-gray-300 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-fertiloop-beige uppercase tracking-wider">Légal</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link to="/privacy" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Confidentialité
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-gray-300 hover:text-white transition-colors">
                  Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 sm:mt-12 pt-8 border-t border-fertiloop-green">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Fertiloop. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
