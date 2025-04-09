
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, TreeDeciduous, Recycle } from "lucide-react";

const CTASection: React.FC = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="relative glass-orange rounded-2xl overflow-hidden">
          {/* Décorations */}
          <motion.div
            className="absolute -top-10 -right-10 text-primary/20"
            animate={{
              rotate: 360,
              transition: { duration: 30, repeat: Infinity, ease: "linear" }
            }}
          >
            <TreeDeciduous size={150} />
          </motion.div>

          <motion.div
            className="absolute -bottom-10 -left-10 text-accent/20"
            animate={{
              rotate: -360,
              transition: { duration: 40, repeat: Infinity, ease: "linear" }
            }}
          >
            <Recycle size={150} />
          </motion.div>

          {/* Contenu */}
          <div className="relative z-10 p-8 sm:p-12 md:p-16">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-background mb-6"
              >
                <Leaf size={30} className="text-primary" />
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white"
              >
                Prêt à rejoindre la révolution verte ?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-white/80 mb-8 text-lg"
              >
                Transformez vos déchets en ressources précieuses et contribuez à un avenir plus durable avec Fertiloop.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <Button
                  asChild
                  size="lg"
                  className="button-hover-effect bg-background text-primary hover:bg-background/90"
                >
                  <Link to="/get-started" className="inline-flex items-center gap-2">
                    Get Started
                    <ArrowRight size={16} />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="button-hover-effect border-white text-white hover:bg-white/10"
                >
                  <Link to="/contact">
                    Contactez-nous
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
