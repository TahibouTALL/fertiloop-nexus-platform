
import React from "react";
import { Link } from "react-router-dom";
import { Leaf, Facebook, Twitter, Instagram, Linkedin, Mail, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const ModernFooter: React.FC = () => {
  return (
    <footer className="relative overflow-hidden">
      {/* Footer Top */}
      <div className="glass-dark">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo et description */}
            <div>
              <Link to="/" className="flex items-center gap-2 mb-5">
                <span className="text-accent">
                  <Leaf size={24} className="stroke-accent fill-accent/10" />
                </span>
                <h3 className="text-xl font-bold">Fertiloop</h3>
              </Link>
              
              <p className="text-sm text-muted-foreground mb-6">
                Transformant les déchets organiques en biogaz et en engrais naturel pour un avenir plus durable et écologique.
              </p>
              
              <div className="flex space-x-4">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-secondary hover:bg-primary transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={16} />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-secondary hover:bg-primary transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={16} />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-secondary hover:bg-primary transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={16} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full flex items-center justify-center bg-secondary hover:bg-primary transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
            
            {/* Liens rapides */}
            <div>
              <h4 className="text-lg font-semibold mb-5">Liens rapides</h4>
              <ul className="space-y-3">
                {[
                  { name: "Accueil", path: "/" },
                  { name: "Notre Mission", path: "/mission" },
                  { name: "Le Produit", path: "/produit" },
                  { name: "FAQ", path: "/faq" },
                  { name: "Contact", path: "/contact" }
                ].map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.path} 
                      className="group text-sm text-muted-foreground hover:text-primary transition-colors flex items-center"
                    >
                      <ChevronRight size={14} className="mr-1 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Nous contacter */}
            <div>
              <h4 className="text-lg font-semibold mb-5">Nous contacter</h4>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Mail size={18} className="text-primary mt-1 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">
                    contact@fertiloop.com
                  </span>
                </li>
                <li>
                  <address className="text-sm text-muted-foreground not-italic">
                    123 Avenue Verte<br />
                    75001 Paris, France
                  </address>
                </li>
              </ul>
            </div>
            
            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold mb-5">Newsletter</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Inscrivez-vous pour recevoir nos dernières nouvelles et mises à jour.
              </p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Votre email" 
                  type="email" 
                  className="bg-secondary/50 border-border/50"
                />
                <Button size="sm" className="bg-primary hover:bg-primary/90">
                  <Mail size={16} />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="bg-background py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Fertiloop. Tous droits réservés.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Conditions d'utilisation
              </Link>
              <Link to="/cookies" className="text-xs text-muted-foreground hover:text-primary transition-colors">
                Politique de cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ModernFooter;
