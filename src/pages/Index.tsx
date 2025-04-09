
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import Features from "../components/home/Features";
import ImageGallery from "../components/home/ImageGallery";
import CompanyShowcase from "../components/home/CompanyShowcase";
import MainCarousel from "../components/home/MainCarousel";
import HowItWorks from "../components/home/HowItWorks";
import ProductsSection from "../components/home/ProductsSection";
import CTASection from "../components/home/CTASection";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { motion } from "framer-motion";
import { Sparkles, Star, CircleDot } from "lucide-react";

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen flex flex-col relative bg-gradient-dark">
      {/* Decorative Elements */}
      <div className="particle-container">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 5 + 2}px`,
              height: `${Math.random() * 5 + 2}px`,
            }}
            animate={{
              y: [0, Math.random() * -30 - 10, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      
      {/* Accent Decorations */}
      <motion.div 
        className="fixed top-20 right-10 text-primary/10 z-0"
        animate={{ 
          rotate: 360,
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: "linear" 
        }}
      >
        <Sparkles size={100} />
      </motion.div>
      
      <motion.div 
        className="fixed bottom-20 left-10 text-primary/10 z-0"
        animate={{ 
          rotate: -360,
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity,
          ease: "linear" 
        }}
      >
        <Star size={80} />
      </motion.div>
      
      <motion.div 
        className="fixed top-1/3 left-20 text-primary/5 z-0"
        animate={{ 
          rotate: 180,
          scale: [1, 1.3, 1]
        }}
        transition={{ 
          duration: 15, 
          repeat: Infinity,
          ease: "linear" 
        }}
      >
        <CircleDot size={120} />
      </motion.div>
      
      {/* Main Content */}
      <Navbar />
      <div className="flex-1 relative z-10">
        <MainCarousel />
        
        <Features />
        {!isMobile && <CompanyShowcase />}
        <ImageGallery />
        <HowItWorks />
        <ProductsSection />
        <CTASection />
        {isMobile && <CompanyShowcase />}
      </div>
      
      {/* Theme toggle floating button */}
      <div className="fixed bottom-6 right-6 z-50 p-3 rounded-full frosted-glass-green shadow-glow animate-pulse-soft">
        <ThemeToggle label={false} description={false} />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
