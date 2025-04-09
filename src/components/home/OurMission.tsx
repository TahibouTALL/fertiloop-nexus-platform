
import React from "react";
import { motion } from "framer-motion";
import { Recycle, Leaf, TreeDeciduous, Droplet } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="nature-card glass-dark p-6 rounded-xl border border-border/30 hover:border-accent/30 transition-all duration-300"
  >
    <div className="rounded-full w-12 h-12 flex items-center justify-center bg-accent/10 mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm">{description}</p>
  </motion.div>
);

const OurMission: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="notre-mission">
      {/* Décoration d'arrière-plan */}
      <div className="absolute inset-0 bg-lines pointer-events-none opacity-50"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="inline-block text-accent mb-2"
          >
            <Leaf size={24} />
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gradient-gold heading-decorated inline-block mb-4"
          >
            Notre Mission
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-muted-foreground"
          >
            Chez Fertiloop, nous transformons les déchets organiques en ressources précieuses, 
            contribuant à un avenir plus durable et plus vert pour tous.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Recycle size={24} className="text-accent" />}
            title="Économie Circulaire"
            description="Nous fermons la boucle des déchets en transformant les restes organiques en énergie et en nutriments, réduisant ainsi les déchets envoyés aux décharges."
            delay={0.1}
          />
          
          <FeatureCard
            icon={<Droplet size={24} className="text-accent" />}
            title="Biogaz Durable"
            description="Notre biodigesteur produit du biogaz renouvelable qui peut être utilisé pour la cuisine, le chauffage ou même la production d'électricité."
            delay={0.2}
          />
          
          <FeatureCard
            icon={<TreeDeciduous size={24} className="text-accent" />}
            title="Engrais Naturel"
            description="Le processus génère un engrais liquide riche en nutriments qui améliore la santé des sols et stimule la croissance des plantes sans produits chimiques nocifs."
            delay={0.3}
          />
          
          <FeatureCard
            icon={<Leaf size={24} className="text-accent" />}
            title="Impact Environnemental"
            description="En réduisant les émissions de méthane et la dépendance aux combustibles fossiles, nous contribuons à la lutte contre le changement climatique."
            delay={0.4}
          />
          
          <FeatureCard
            icon={<Recycle size={24} className="text-accent" />}
            title="Innovation Locale"
            description="Conçu pour être accessible et facile à utiliser, notre système peut être déployé dans les foyers, les communautés et les exploitations agricoles."
            delay={0.5}
          />
          
          <FeatureCard
            icon={<TreeDeciduous size={24} className="text-accent" />}
            title="Éducation et Sensibilisation"
            description="Nous travaillons à sensibiliser le public à l'importance du compostage et de la gestion durable des déchets pour un avenir plus vert."
            delay={0.6}
          />
        </div>
      </div>
    </section>
  );
};

export default OurMission;
