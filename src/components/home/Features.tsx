
import React from "react";
import { Truck, Leaf, Recycle, Cylinder, MapPin, Clock } from "lucide-react";

const features = [
  {
    name: "Collecte de biodéchets",
    description: "Signalement de biodéchets et planification des collectes pour les particuliers et professionnels.",
    icon: Truck,
  },
  {
    name: "Production de biogaz",
    description: "Transformation des biodéchets en biogaz durable pour une utilisation domestique et professionnelle.",
    icon: Cylinder,
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
    <div className="py-12 sm:py-16 bg-gradient-to-b from-fertiloop-beige-light to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-base text-fertiloop-green font-medium tracking-wide uppercase">
            Nos services
          </h2>
          <p className="mt-2 text-2xl sm:text-3xl lg:text-4xl leading-9 font-extrabold tracking-tight text-gray-900">
            Une gestion complète des biodéchets
          </p>
          <p className="mt-4 text-lg sm:text-xl text-gray-600">
            De la collecte des biodéchets à la production d'énergie et d'engrais, Fertiloop vous accompagne dans chaque étape.
          </p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div 
                key={feature.name} 
                className="group relative p-4 sm:p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 transform hover:-translate-y-1"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-gradient-to-br from-fertiloop-green to-fertiloop-green-light flex items-center justify-center shadow-sm group-hover:shadow-md transition-all duration-300">
                  <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div className="pt-10 sm:pt-12 text-center">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2 sm:mb-3">{feature.name}</h3>
                  <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
