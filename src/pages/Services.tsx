
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Leaf, Cylinder, Recycle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Services = () => {
  return (
    <div className="min-h-screen bg-fertiloop-gray">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
          <Link to="/" className="mr-4">
            <ArrowLeft className="h-5 w-5 text-gray-500 hover:text-fertiloop-green transition-colors" />
          </Link>
          <h1 className="text-xl font-bold text-gray-900">
            Nos Services
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-fertiloop-green mb-6">Solutions Écologiques Complètes</h2>
          <p className="text-xl text-gray-600 mb-8">
            Fertiloop propose une gamme complète de services pour transformer vos déchets organiques en ressources précieuses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="h-48 bg-fertiloop-green/10 p-6 flex items-center justify-center">
              <Recycle className="h-24 w-24 text-fertiloop-green opacity-80" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Collecte de Biodéchets</h3>
              <p className="text-gray-600 mb-4">
                Notre service de collecte régulière de déchets organiques chez les particuliers, restaurants et hôtels.
              </p>
              <Link to="/waste-collection" className="text-fertiloop-green hover:text-fertiloop-green-dark font-medium flex items-center">
                En savoir plus
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden" 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="h-48 bg-fertiloop-green/10 p-6 flex items-center justify-center">
              <Cylinder className="h-24 w-24 text-fertiloop-green opacity-80" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Production de Biogaz</h3>
              <p className="text-gray-600 mb-4">
                Transformation des déchets en biogaz écologique, disponible en bonbonnes pour différents usages domestiques.
              </p>
              <Link to="/biogas-management" className="text-fertiloop-green hover:text-fertiloop-green-dark font-medium flex items-center">
                En savoir plus
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="h-48 bg-fertiloop-green/10 p-6 flex items-center justify-center">
              <Leaf className="h-24 w-24 text-fertiloop-green opacity-80" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Engrais Organique</h3>
              <p className="text-gray-600 mb-4">
                Production et livraison d'engrais organique de haute qualité pour l'agriculture durable et les jardins.
              </p>
              <Link to="/fertilizer-orders" className="text-fertiloop-green hover:text-fertiloop-green-dark font-medium flex items-center">
                En savoir plus
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden mb-12">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Notre Technologie de Biodigestion</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-600 mb-6">
                  Nos biodigesteurs utilisent un processus naturel de décomposition anaérobie pour transformer les déchets organiques en biogaz et en engrais riche en nutriments.
                </p>
                <p className="text-gray-600 mb-6">
                  Le système est conçu pour être efficace, fiable et adapté à différentes échelles, des ménages aux entreprises.
                </p>
                <ul className="list-disc pl-5 text-gray-600 space-y-2 mb-6">
                  <li>Système fermé sans émissions nocives</li>
                  <li>Récupération d'énergie sous forme de biogaz</li>
                  <li>Production d'engrais organique certifié</li>
                  <li>Maintenance réduite et longue durée de vie</li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <img 
                  src="/lovable-uploads/bdae05c3-c03f-4da6-92f8-63091a46137f.png" 
                  alt="Biodigesteur Fertiloop" 
                  className="rounded-lg shadow-md max-h-80"
                />
              </div>
            </div>
          </div>
        </div>

        <Card className="bg-fertiloop-beige border-none mb-8">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-fertiloop-green mb-4">Contactez-nous</h2>
            <p className="text-lg text-gray-700 mb-6">
              Intéressé par nos services ? Nous serions ravis de discuter de vos besoins spécifiques et de vous proposer une solution adaptée.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-fertiloop-green hover:bg-fertiloop-green-dark">
                Demander un devis
              </Button>
              <Button variant="outline" className="border-fertiloop-green text-fertiloop-green hover:bg-fertiloop-green/10">
                Contacter un conseiller
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Services;
