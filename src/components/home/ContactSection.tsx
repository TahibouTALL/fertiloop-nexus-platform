
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MessageSquare, Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden" id="contact">
      {/* Décoration du fond */}
      <div className="absolute inset-0 bg-lines pointer-events-none opacity-30"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informations de contact */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="mb-8">
              <span className="text-primary font-medium mb-2 block">Contact</span>
              <h2 className="heading-decorated mb-4">
                <span className="text-gradient-gold">Discutons de votre projet</span>
              </h2>
              <p className="text-muted-foreground">
                Vous avez des questions sur nos produits ou vous souhaitez en savoir plus sur comment nous pouvons vous aider à transformer vos déchets en ressources ? N'hésitez pas à nous contacter.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Mail size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Email</h4>
                  <a href="mailto:contact@fertiloop.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    contact@fertiloop.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Phone size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Téléphone</h4>
                  <a href="tel:+33123456789" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                    +33 1 23 45 67 89
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <MapPin size={18} className="text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Adresse</h4>
                  <p className="text-sm text-muted-foreground">
                    123 Avenue Verte, 75001 Paris, France
                  </p>
                </div>
              </div>
            </div>
            
            {/* Carte stylisée */}
            <div className="mt-8 rounded-xl overflow-hidden h-48 glass-dark p-1">
              <div className="w-full h-full rounded-lg bg-accent/5 flex items-center justify-center">
                <p className="text-sm text-muted-foreground">Carte interactive à venir</p>
              </div>
            </div>
          </motion.div>
          
          {/* Formulaire de contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass-dark rounded-xl border border-border/30 p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare size={20} className="text-primary" />
                <h3 className="text-lg font-semibold">Envoyez-nous un message</h3>
              </div>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nom
                    </label>
                    <Input
                      id="name"
                      placeholder="Votre nom"
                      className="bg-secondary/50 border-border/50 focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="votre@email.com"
                      className="bg-secondary/50 border-border/50 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Sujet
                  </label>
                  <Input
                    id="subject"
                    placeholder="Comment pouvons-nous vous aider ?"
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Votre message..."
                    rows={5}
                    className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>
                
                <Button type="submit" className="w-full button-hover-effect bg-primary hover:bg-primary/90">
                  <span className="flex items-center gap-2">
                    Envoyer le message
                    <Send size={16} />
                  </span>
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  En soumettant ce formulaire, vous acceptez notre politique de confidentialité.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
