
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Leaf, Droplets, Recycle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProductSection: React.FC = () => {
  const features = [
    "Facile à installer et à utiliser",
    "Convertit jusqu'à 80% des déchets organiques",
    "Production de biogaz utilisable pour la cuisine",
    "Génère un engrais naturel riche en nutriments",
    "Réduction significative des émissions de méthane",
    "Conçu pour durer plus de 10 ans"
  ];

  return (
    <section className="py-20 relative overflow-hidden" id="le-produit">
      {/* Décoration du fond */}
      <div className="absolute inset-0 leaf-pattern-bg"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image du produit */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 relative"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden glass-dark shine-effect">
              <img
                src="/lovable-uploads/feb1c2b3-ac7e-4e36-8d99-075a7106d0fb.png"
                alt="Biodigesteur Fertiloop"
                className="w-full h-full object-cover"
              />
              
              {/* Décorations superposées */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-background/50 to-transparent"></div>
              
              {/* Badge d'informations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-4 left-4 right-4 glass-dark p-4 rounded-xl"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <Recycle size={20} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Cycle complet</h4>
                    <p className="text-xs text-muted-foreground">
                      De la collecte des déchets à la production d'énergie et d'engrais
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Badges flottants */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute -bottom-5 -right-5 glass-orange p-3 rounded-xl hidden sm:block"
            >
              <Droplets size={32} className="text-primary" />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -top-5 -left-5 glass-gold p-3 rounded-xl hidden sm:block"
            >
              <Leaf size={32} className="text-accent" />
            </motion.div>
          </motion.div>
          
          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <span className="text-primary font-medium mb-2 block">Notre solution</span>
            <h2 className="heading-decorated mb-6">
              <span className="text-gradient-gold">Biodigesteur Fertiloop</span>
            </h2>
            
            <p className="text-muted-foreground mb-8">
              Notre biodigesteur compact et efficace transforme vos déchets organiques en deux ressources précieuses : 
              du biogaz pour vos besoins énergétiques et un engrais liquide naturel pour vos plantes.
            </p>
            
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Caractéristiques principales</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="mt-1 text-accent">
                      <Check size={16} />
                    </span>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="button-hover-effect bg-primary hover:bg-primary/90">
                <Link to="/produit" className="inline-flex items-center gap-2">
                  Découvrir le produit
                  <ArrowRight size={16} />
                </Link>
              </Button>
              
              <Button variant="outline" asChild className="button-hover-effect">
                <Link to="/contact">
                  Demander une démo
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
