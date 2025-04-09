
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Trash2, Recycle, Truck, ArrowRight, Leaf, Sprout } from "lucide-react";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-fertiloop-beige via-fertiloop-beige-light to-fertiloop-beige py-8 sm:py-12 lg:py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-pattern-dots opacity-10 pointer-events-none"></div>
      
      {/* Floating elements */}
      <motion.div 
        className="absolute -top-10 -left-10 w-40 h-40 bg-fertiloop-green/5 rounded-full"
        animate={{ 
          y: [0, 20, 0], 
          scale: [1, 1.05, 1],
          rotate: [0, 10, 0]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-60 h-60 bg-fertiloop-yellow/5 rounded-full"
        animate={{ 
          y: [0, -30, 0], 
          scale: [1, 1.1, 1],
          rotate: [0, -10, 0]
        }}
        transition={{ 
          duration: 12, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1 
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <motion.div 
              className="flex items-center justify-center lg:justify-start space-x-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.img 
                src="/lovable-uploads/feb1c2b3-ac7e-4e36-8d99-075a7106d0fb.png" 
                alt="Fertiloop Logo" 
                className="h-12 w-12 sm:h-16 sm:w-16 drop-shadow-lg"
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
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
            </motion.div>
            
            <motion.h1 
              className="mt-8 text-3xl sm:text-4xl lg:text-5xl tracking-tight font-extrabold text-fertiloop-green-dark decorated-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <span className="block mb-4 text-gradient">Plateforme de gestion</span>
              <span className="text-fertiloop-green relative">
                du biogaz et de l'engrais
                <motion.span 
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-fertiloop-green-light rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 1 }}
                />
              </span>
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-base sm:text-lg lg:text-xl text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Un service de gestion efficace des biodéchets, de collecte et de vente 
              de biogaz et d'engrais.
            </motion.p>
            
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/register"
                  className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-fertiloop-blue to-fertiloop-blue-dark hover:shadow-lg transition-all duration-300 shine-effect glow-effect"
                >
                  S'inscrire
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/services"
                  className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-fertiloop-green text-base font-medium rounded-lg text-fertiloop-green bg-white hover:bg-gray-50 hover:shadow-lg transition-all duration-300 shine-effect"
                >
                  Nos services
                </Link>
              </motion.div>
            </div>
          </div>
          
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <motion.div 
              className="relative mx-auto w-full rounded-2xl shadow-2xl lg:max-w-md overflow-hidden fancy-border"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)" }}
            >
              <div className="relative block w-full bg-white rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/bdae05c3-c03f-4da6-92f8-63091a46137f.png" 
                  alt="Biodigesteur Fertiloop" 
                  className="w-full h-64 sm:h-80 object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end">
                  <div className="p-4 sm:p-6 w-full frosted-glass bg-black/40">
                    <h3 className="text-xl sm:text-2xl font-bold text-white text-shadow animated-underline">
                      Biodigesteur Fertiloop
                    </h3>
                    <p className="text-sm sm:text-base text-white/90 text-shadow-sm mt-2">
                      Notre technologie pour transformer les déchets en énergie verte
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Floating icons for decoration */}
            <motion.div 
              className="absolute -top-6 -left-6 bg-fertiloop-green/90 p-3 rounded-full shadow-lg text-white glow-effect"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <Recycle size={24} />
            </motion.div>
            
            <motion.div 
              className="absolute top-1/2 -right-4 bg-fertiloop-yellow/90 p-3 rounded-full shadow-lg text-white glow-effect"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              whileHover={{ scale: 1.2, rotate: -10 }}
            >
              <Truck size={24} />
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 left-1/3 bg-fertiloop-blue/90 p-3 rounded-full shadow-lg text-white glow-effect"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <Trash2 size={24} />
            </motion.div>
            
            <motion.div 
              className="absolute top-1/4 left-1/4 bg-fertiloop-green-light/90 p-3 rounded-full shadow-lg text-white glow-effect"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.7, duration: 0.5 }}
              whileHover={{ scale: 1.2, rotate: -10 }}
            >
              <Leaf size={24} />
            </motion.div>
            
            <motion.div 
              className="absolute bottom-1/4 right-1/4 bg-fertiloop-coral/90 p-3 rounded-full shadow-lg text-white glow-effect"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.9, duration: 0.5 }}
              whileHover={{ scale: 1.2, rotate: 10 }}
            >
              <Sprout size={24} />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
