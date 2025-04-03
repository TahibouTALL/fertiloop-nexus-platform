
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CompanyShowcase: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-fertiloop-green font-semibold tracking-wide uppercase">
            Notre approche
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Transformez vos déchets en richesse
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Fertiloop conçoit des systèmes de biodigestion innovants pour valoriser les déchets organiques
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="bg-fertiloop-green/10 p-6 rounded-lg mb-6">
                <img 
                  src="/lovable-uploads/bdae05c3-c03f-4da6-92f8-63091a46137f.png" 
                  alt="Biodigesteur Fertiloop" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Technologie de pointe</h3>
              <p className="mt-2 text-gray-600">
                Nos biodigesteurs sont équipés de technologies avancées pour optimiser la production de biogaz et d'engrais.
              </p>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="bg-fertiloop-green/10 p-6 rounded-lg mb-6">
                <img 
                  src="/lovable-uploads/89a1dc4d-21cf-4359-9aa1-75a1a9abd9a5.png" 
                  alt="Processus de biodigestion" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Processus écologique</h3>
              <p className="mt-2 text-gray-600">
                Un processus naturel de décomposition anaérobie qui transforme les déchets en ressources renouvelables.
              </p>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="bg-fertiloop-green/10 p-6 rounded-lg mb-6">
                <img 
                  src="/lovable-uploads/fd50b7cc-ca5a-4228-b073-7917416084f5.png" 
                  alt="Résultats de biodigestion" 
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Double bénéfice</h3>
              <p className="mt-2 text-gray-600">
                Production simultanée de biogaz pour l'énergie et d'engrais organique pour l'agriculture.
              </p>
            </motion.div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-fertiloop-green hover:bg-fertiloop-green-dark transition-colors"
            >
              En savoir plus sur nos technologies
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyShowcase;
