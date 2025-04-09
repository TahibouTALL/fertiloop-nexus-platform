
import React from "react";
import { motion } from "framer-motion";
import { HelpCircle, Leaf } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Questions fréquemment posées
const faqItems = [
  {
    question: "Comment fonctionne un biodigesteur ?",
    answer: "Un biodigesteur fonctionne par digestion anaérobie, un processus naturel où des microorganismes décomposent la matière organique en l'absence d'oxygène. Ce processus produit du biogaz (principalement du méthane) et un résidu liquide riche en nutriments appelé digestat, qui peut être utilisé comme engrais."
  },
  {
    question: "Quels types de déchets peut-on mettre dans le biodigesteur Fertiloop ?",
    answer: "Le biodigesteur Fertiloop accepte la plupart des déchets organiques de cuisine : restes de fruits et légumes, coquilles d'œufs broyées, marc de café, sachets de thé (sans agrafes), restes de nourriture cuite (en petites quantités). Il est préférable d'éviter les produits laitiers, les viandes et les graisses en grandes quantités."
  },
  {
    question: "Combien de biogaz le système peut-il produire ?",
    answer: "La production de biogaz dépend de la quantité et du type de déchets alimentés. En moyenne, notre modèle domestique peut produire jusqu'à 1-2 heures de cuisson par jour avec une alimentation régulière de 1-2 kg de déchets organiques quotidiens."
  },
  {
    question: "L'utilisation d'un biodigesteur nécessite-t-elle des compétences techniques ?",
    answer: "Non, nous avons conçu notre biodigesteur pour qu'il soit simple à utiliser. Il est livré avec un guide d'utilisation détaillé et notre équipe fournit une formation initiale. Le processus quotidien consiste simplement à ajouter des déchets organiques et, périodiquement, à collecter l'engrais liquide."
  },
  {
    question: "Le biodigesteur dégage-t-il des odeurs désagréables ?",
    answer: "Lorsqu'il est correctement utilisé et entretenu, le biodigesteur Fertiloop ne dégage pas d'odeurs désagréables. Le processus se déroule dans un conteneur hermétique, et le système est conçu avec des filtres pour minimiser les odeurs lors de l'ajout des déchets."
  },
  {
    question: "Où puis-je installer mon biodigesteur ?",
    answer: "Le biodigesteur peut être installé dans votre jardin, sur une terrasse ou dans un espace extérieur bien ventilé. Il nécessite un emplacement où la température reste idéalement entre 15°C et 35°C pour une performance optimale. Des solutions d'isolation sont disponibles pour les climats plus froids."
  }
];

const FaqSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="faq">
      {/* Décoration du fond */}
      <div className="absolute inset-0 bg-dots pointer-events-none opacity-30"></div>
      
      {/* Décoration flottante */}
      <motion.div
        className="absolute -bottom-10 -right-10 text-accent/10"
        animate={{ 
          rotate: 360,
          transition: { duration: 40, repeat: Infinity, ease: "linear" }
        }}
      >
        <Leaf size={200} />
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4"
          >
            <HelpCircle size={16} className="text-accent" />
            <span className="text-sm font-medium">Questions fréquentes</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-decorated inline-block mb-4"
          >
            <span className="text-gradient-gold">Tout ce que vous devez savoir</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground"
          >
            Nous avons rassemblé les questions les plus courantes sur nos biodigesteurs et le processus de production de biogaz et d'engrais.
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="glass-dark rounded-xl border border-border/30 overflow-hidden">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/30 last:border-0">
                <AccordionTrigger className="px-6 py-4 hover:bg-secondary/50 transition-all text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 pt-0 text-muted-foreground">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;
