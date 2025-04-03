
import React from "react";
import { Truck, Leaf, Recycle, GasCylinder, MapPin, Clock } from "lucide-react";

const features = [
  {
    name: "Collecte de biodéchets",
    description: "Signalement de biodéchets et planification des collectes pour les particuliers et professionnels.",
    icon: Truck,
  },
  {
    name: "Production de biogaz",
    description: "Transformation des biodéchets en biogaz durable pour une utilisation domestique et professionnelle.",
    icon: GasCylinder,
  },
  {
    name: "Engrais organique",
    description: "Production d'engrais de haute qualité pour l'agriculture et le jardinage.",
    icon: Leaf,
  },
  {
    name: "Logistique optimisée",
    description: "Planification automatisée des tournées et suivi en temps réel des véhicules.",
    icon: MapPin,
  },
  {
    name: "Économie circulaire",
    description: "Valorisation des déchets dans un système économique durable et responsable.",
    icon: Recycle,
  },
  {
    name: "Suivi en temps réel",
    description: "Visualisez l'état de vos commandes et des collectes en tout temps.",
    icon: Clock,
  },
];

const Features = () => {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-fertiloop-green font-semibold tracking-wide uppercase">
            Nos services
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Une gestion complète des biodéchets
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            De la collecte des biodéchets à la production d'énergie et d'engrais, Fertiloop vous accompagne dans chaque étape.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="feature-card group">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-fertiloop-green-light/10 text-fertiloop-green mb-5 group-hover:bg-fertiloop-green/20 transition-colors">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{feature.name}</h3>
                <p className="text-gray-500 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
