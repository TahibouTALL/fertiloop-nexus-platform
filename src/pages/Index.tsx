
import React from "react";
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
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <MainCarousel />
      <Features />
      <CompanyShowcase />
      <ImageGallery />
      <HowItWorks />
      <ProductsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
