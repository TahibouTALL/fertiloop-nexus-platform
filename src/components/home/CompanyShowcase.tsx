
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Cylinder, PlaneTakeoff, Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const CompanyShowcase: React.FC = () => {
  const cardVariants = {
    offscreen: {
      opacity: 0,
      y: 50
    },
    onscreen: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: i * 0.2
      }
    })
  };

  return (
    <div className="py-20 bg-gradient-to-b from-white to-fertiloop-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-fertiloop-green/10 text-fertiloop-green text-sm font-semibold mb-3">
            Notre approche
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
            Transformez vos déchets en richesse
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Fertiloop conçoit des systèmes de biodigestion innovants pour valoriser les déchets organiques
          </p>
        </motion.div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <motion.div 
              className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              custom={0}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
              variants={cardVariants}
            >
              <div className="bg-gradient-to-br from-fertiloop-green/10 to-fertiloop-green/5 p-6 rounded-xl mb-6 flex items-center justify-center h-72">
                <img 
                  src="/lovable-uploads/bdae05c3-c03f-4da6-92f8-63091a46137f.png" 
                  alt="Biodigesteur Fertiloop" 
                  className="max-h-full max-w-full object-contain rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-fertiloop-green text-white p-3 rounded-full shadow-lg">
                  <Cylinder className="h-6 w-6" />
                </div>
              </div>
              <div className="px-6 pb-6">
                <h3 className="text-xl font-bold text-gray-900">Technologie de pointe</h3>
                <p className="mt-2 text-gray-600">
                  Nos biodigesteurs sont équipés de technologies avancées pour optimiser la production de biogaz et d'engrais.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              custom={1}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
              variants={cardVariants}
            >
              <div className="bg-gradient-to-br from-fertiloop-blue/10 to-fertiloop-blue/5 p-6 rounded-xl mb-6 flex items-center justify-center h-72">
                <img 
                  src="/lovable-uploads/a7487d3b-bbc5-4c46-9752-2dcf8e15b6cd.png" 
                  alt="Bonbonne de biogaz Fertiloop" 
                  className="max-h-full max-w-full object-contain rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-fertiloop-blue text-white p-3 rounded-full shadow-lg">
                  <PlaneTakeoff className="h-6 w-6" />
                </div>
              </div>
              <div className="px-6 pb-6">
                <h3 className="text-xl font-bold text-gray-900">Biogaz écologique</h3>
                <p className="mt-2 text-gray-600">
                  Notre biogaz est conditionné dans des bonbonnes éco-responsables, facilement utilisables pour vos besoins énergétiques.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
              custom={2}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.1 }}
              variants={cardVariants}
            >
              <div className="bg-gradient-to-br from-fertiloop-yellow/10 to-fertiloop-yellow/5 p-6 rounded-xl mb-6 flex items-center justify-center h-72">
                <img 
                  src="/lovable-uploads/fd50b7cc-ca5a-4228-b073-7917416084f5.png" 
                  alt="Résultats de biodigestion" 
                  className="max-h-full max-w-full object-contain rounded-lg shadow-lg transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-fertiloop-yellow text-white p-3 rounded-full shadow-lg">
                  <Leaf className="h-6 w-6" />
                </div>
              </div>
              <div className="px-6 pb-6">
                <h3 className="text-xl font-bold text-gray-900">Double bénéfice</h3>
                <p className="mt-2 text-gray-600">
                  Production simultanée de biogaz pour l'énergie et d'engrais organique pour l'agriculture.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link
              to="/services"
              className="group inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg shadow-lg text-white bg-gradient-to-r from-fertiloop-green to-fertiloop-green-dark hover:from-fertiloop-green-dark hover:to-fertiloop-green transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
            >
              En savoir plus sur nos technologies
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CompanyShowcase;
