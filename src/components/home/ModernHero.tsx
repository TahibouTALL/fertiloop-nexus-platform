
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Droplets, Recycle, Plant } from "lucide-react";
import { Button } from "@/components/ui/button";

const ModernHero: React.FC = () => {
  return (
    <section className="pt-32 pb-20 relative overflow-hidden">
      {/* Décoration d'arrière-plan */}
      <div className="absolute inset-0 bg-dots pointer-events-none"></div>
      
      {/* Décorations flottantes */}
      <motion.div 
        className="absolute top-40 left-10 text-accent opacity-20"
        animate={{ 
          y: [0, -20, 0], 
          rotate: [0, 10, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 8,
          ease: "easeInOut"
        }}
      >
        <Leaf size={80} />
      </motion.div>
      
      <motion.div 
        className="absolute bottom-20 right-10 text-primary opacity-10"
        animate={{ 
          y: [0, 15, 0], 
          rotate: [0, -5, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 10, 
          ease: "easeInOut"
        }}
      >
        <Plant size={100} />
      </motion.div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Recycle size={16} className="text-primary" />
              <span className="text-sm font-medium">Économie circulaire</span>
            </div>
            
            <h1 className="mb-6 max-w-xl">
              <span className="block text-gradient-gold mb-2">Transformez vos biodéchets</span>
              <span className="heading-decorated">en ressources précieuses</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-xl mb-8">
              Fertiloop révolutionne la gestion des déchets avec un biodigesteur innovant qui produit du biogaz et de l'engrais naturel, tout en réduisant votre empreinte carbone.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="button-hover-effect bg-primary hover:bg-primary/90">
                <Link to="/get-started" className="inline-flex items-center gap-2">
                  Get Started
                  <ArrowRight size={16} />
                </Link>
              </Button>
              
              <Button variant="outline" asChild className="button-hover-effect">
                <Link to="/notre-mission">
                  Notre mission
                </Link>
              </Button>
            </div>
            
            {/* Statistiques */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12">
              <div className="gold-accent-section pl-4">
                <p className="text-3xl font-bold text-accent">80%</p>
                <p className="text-sm text-muted-foreground">Réduction des déchets</p>
              </div>
              
              <div className="gold-accent-section pl-4">
                <p className="text-3xl font-bold text-accent">100%</p>
                <p className="text-sm text-muted-foreground">Énergie renouvelable</p>
              </div>
              
              <div className="gold-accent-section pl-4">
                <p className="text-3xl font-bold text-accent">60%</p>
                <p className="text-sm text-muted-foreground">Économie en fertilisants</p>
              </div>
            </div>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg glass-dark shine-effect">
              <img 
                src="/lovable-uploads/bdae05c3-c03f-4da6-92f8-63091a46137f.png"
                alt="Biodigesteur Fertiloop" 
                className="w-full h-full object-cover"
              />
              
              {/* Overlay avec gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent"></div>
              
              {/* Badge flottant */}
              <motion.div 
                className="absolute top-4 right-4 glass-orange px-4 py-2 rounded-full text-sm font-medium backdrop-blur-xl flex items-center gap-2"
                animate={{ y: [0, -5, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
              >
                <Droplets size={16} className="text-primary" />
                <span>Technologie brevetée</span>
              </motion.div>
              
              {/* Texte de l'image */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white">Biodigesteur Fertiloop</h3>
                <p className="text-sm text-white/80">Compact, efficace, et facile à utiliser</p>
              </div>
            </div>
            
            {/* Badge décoration */}
            <motion.div 
              className="absolute -left-5 -bottom-5 glass-gold p-4 rounded-xl shadow-lg hidden sm:flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <span className="p-2 bg-accent/20 rounded-lg">
                <Leaf size={20} className="text-accent" />
              </span>
              <div>
                <p className="text-xs font-medium text-accent">Certifié</p>
                <p className="text-sm font-semibold">Éco-responsable</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
