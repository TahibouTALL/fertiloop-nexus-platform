
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Leaf, Sun, Moon } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const ModernNavbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  // Surveiller le défilement pour changer l'apparence de la navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Liens de navigation
  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Notre Mission", path: "/mission" },
    { name: "Le Produit", path: "/produit" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-dark py-2" : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 z-10">
          <span className="text-accent">
            <Leaf size={28} className="stroke-accent fill-accent/10" />
          </span>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-foreground">
              Fertiloop
            </h1>
            <span className="text-xs text-muted-foreground">
              Du Déchet à la Ressource
            </span>
          </div>
        </Link>

        {/* Menu de navigation sur desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-sm text-foreground/90 hover:text-primary transition-colors relative group py-2"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
        
        {/* Actions (bouton, toggle de thème) */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label={theme === "light" ? "Activer le mode sombre" : "Activer le mode clair"}
          >
            {theme === "light" ? (
              <Moon size={20} className="text-foreground" />
            ) : (
              <Sun size={20} className="text-foreground" />
            )}
          </button>

          <Button 
            asChild 
            className="button-hover-effect bg-primary hover:bg-primary/90"
          >
            <Link to="/get-started">
              Get Started
            </Link>
          </Button>
        </div>

        {/* Bouton du menu mobile */}
        <button
          className="md:hidden text-foreground z-10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu mobile */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 bottom-0 w-3/4 glass-dark flex flex-col py-20 px-6 z-0"
            >
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="text-lg text-foreground py-2 border-b border-border/30 hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              
              <div className="mt-8 flex flex-col gap-4">
                <Button
                  className="w-full button-hover-effect bg-primary hover:bg-primary/90"
                  asChild
                >
                  <Link to="/get-started" onClick={() => setIsMobileMenuOpen(false)}>
                    Get Started
                  </Link>
                </Button>
                
                <Button
                  variant="outline"
                  onClick={toggleTheme}
                  className="w-full gap-2"
                >
                  {theme === "light" ? (
                    <>
                      <Moon size={16} />
                      <span>Mode sombre</span>
                    </>
                  ) : (
                    <>
                      <Sun size={16} />
                      <span>Mode clair</span>
                    </>
                  )}
                </Button>
              </div>

              {/* Décorations pour le menu mobile */}
              <div className="absolute bottom-8 left-8 opacity-10">
                <Leaf size={64} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default ModernNavbar;
