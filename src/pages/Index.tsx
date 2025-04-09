
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import ModernNavbar from "../components/layout/ModernNavbar";
import ModernFooter from "../components/layout/ModernFooter";
import ModernHero from "../components/home/ModernHero";
import OurMission from "../components/home/OurMission";
import ProductSection from "../components/home/ProductSection";
import FaqSection from "../components/home/FaqSection";
import ContactSection from "../components/home/ContactSection";
import CTASection from "../components/home/CTASection";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Sparkles, Star, CircleDot, Leaf, Sprout } from "lucide-react";

const Index = () => {
  // Effet pour faire apparaître les sections au scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section-transition');
      
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.85) {
          section.classList.add('visible');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Exécuter une fois au chargement
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Éléments de décoration de fond */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Particules */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 30 - 15],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 5,
            }}
          />
        ))}
        
        {/* Grandes icônes décoratives */}
        <motion.div 
          className="fixed top-20 right-10 text-primary/5 z-0"
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity,
            ease: "linear" 
          }}
        >
          <Sparkles size={120} />
        </motion.div>
        
        <motion.div 
          className="fixed bottom-20 left-10 text-accent/5 z-0"
          animate={{ 
            rotate: -360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 35, 
            repeat: Infinity,
            ease: "linear" 
          }}
        >
          <Leaf size={100} />
        </motion.div>
        
        <motion.div 
          className="fixed top-1/3 left-20 text-primary/5 z-0"
          animate={{ 
            rotate: 180,
            scale: [1, 1.3, 1]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity,
            ease: "linear" 
          }}
        >
          <CircleDot size={150} />
        </motion.div>
        
        <motion.div 
          className="fixed bottom-1/4 right-1/5 text-accent/5 z-0"
          animate={{ 
            rotate: -180,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "linear" 
          }}
        >
          <Sprout size={120} />
        </motion.div>
      </div>
      
      {/* Contenu principal */}
      <ModernNavbar />
      
      <main className="flex-1">
        <ModernHero />
        
        <div className="section-transition fade-in">
          <OurMission />
        </div>
        
        <div className="section-transition fade-in">
          <ProductSection />
        </div>
        
        <div className="section-transition fade-in">
          <FaqSection />
        </div>
        
        <div className="section-transition fade-in">
          <ContactSection />
        </div>
        
        <div className="section-transition fade-in">
          <CTASection />
        </div>
      </main>
      
      {/* Toggle de thème flottant */}
      <div className="fixed bottom-6 right-6 z-50 p-3 rounded-full glass-orange shadow-lg button-hover-effect">
        <ThemeToggle label={false} description={false} />
      </div>
      
      <ModernFooter />
    </div>
  );
};

export default Index;
