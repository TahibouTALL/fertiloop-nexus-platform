
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

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <div className="flex-1">
        {/* Le carousel pourrait être trop grand sur mobile, mais on peut le garder */}
        <MainCarousel />
        
        {/* Composants ordonnés pour l'expérience mobile */}
        <Features />
        {!isMobile && <CompanyShowcase />}
        <ImageGallery />
        <HowItWorks />
        <ProductsSection />
        <CTASection />
        {isMobile && <CompanyShowcase />}
      </div>
      <Footer />
    </div>
  );
};

export default Index;
