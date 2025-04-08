
import React from "react";
import { Link } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import { ArrowRight, Leaf } from "lucide-react";
import { motion } from "framer-motion";

const CTASection: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="relative bg-gradient-to-br from-fertiloop-green to-fertiloop-green-dark overflow-hidden">
      {/* Décorations en fond */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-white/20"></div>
        <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full bg-white/10"></div>
        <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-white/15"></div>
      </div>
      
      <div className="max-w-7xl mx-auto py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Leaf className="w-12 h-12 mx-auto lg:mx-0 text-white/80 mb-4" />
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              <span className="block">Prêt à rejoindre Fertiloop?</span>
              <span className="block text-fertiloop-beige mt-2">Inscrivez-vous dès aujourd'hui.</span>
            </h2>
            <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto lg:mx-0">
              Rejoignez notre communauté et participez à la révolution verte en transformant vos déchets en ressources.
            </p>
          </motion.div>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-end"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/register"
              className="group w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-transparent text-base sm:text-lg font-medium rounded-lg text-fertiloop-green bg-white hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <span>S'inscrire</span>
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              to="/services"
              className="group w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border border-white/30 text-base sm:text-lg font-medium rounded-lg text-white bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {isMobile ? "Nos services" : "Découvrir nos services"}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
