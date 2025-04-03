
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Trash2, Recycle, Truck } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-fertiloop-beige py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="flex items-center justify-center lg:justify-start space-x-4">
              <img 
                src="/lovable-uploads/feb1c2b3-ac7e-4e36-8d99-075a7106d0fb.png" 
                alt="Fertiloop Logo" 
                className="h-12 w-12 sm:h-16 sm:w-16"
              />
              <div>
                <motion.h1 
                  className="text-2xl sm:text-3xl font-bold text-fertiloop-green"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  Fertiloop
                </motion.h1>
                <motion.p 
                  className="text-sm sm:text-base text-fertiloop-green/70"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  Closing the loop
                </motion.p>
              </div>
            </div>
            
            <motion.h1 
              className="mt-6 text-3xl sm:text-4xl lg:text-5xl tracking-tight font-extrabold text-fertiloop-green"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="block mb-2">Plateforme de gestion</span>
              <span className="text-fertiloop-green">du biogaz et de l'engrais</span>
            </motion.h1>
            
            <motion.p 
              className="mt-3 text-base sm:text-lg lg:text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Un service de gestion efficace des biodéchets, de collecte et de vente 
              de biogaz et d'engrais.
            </motion.p>
            
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Link
                  to="/register"
                  className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-fertiloop-blue hover:bg-fertiloop-blue-dark transition-colors"
                >
                  S'inscrire
                </Link>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Link
                  to="/services"
                  className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-fertiloop-green bg-white hover:bg-gray-50 transition-colors"
                >
                  Nos services
                </Link>
              </motion.div>
            </div>
          </div>
          
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <motion.div 
              className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative block w-full bg-white rounded-lg overflow-hidden">
                <img 
                  src="/lovable-uploads/bdae05c3-c03f-4da6-92f8-63091a46137f.png" 
                  alt="Biodigesteur Fertiloop" 
                  className="w-full h-48 sm:h-64 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
                  <div className="p-4 sm:p-6 w-full bg-gradient-to-t from-black to-transparent">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      Biodigesteur Fertiloop
                    </h3>
                    <p className="text-sm text-white/80">
                      Notre technologie pour transformer les déchets en énergie verte
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
