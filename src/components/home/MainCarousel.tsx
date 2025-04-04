
import React, { useEffect, useState } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface CarouselImage {
  src: string;
  alt: string;
  heading: string;
  description: string;
  buttonText?: string;
  buttonLink?: string;
}

const carouselImages: CarouselImage[] = [
  {
    src: "/lovable-uploads/d83e87c9-0bec-4a3e-951d-370555961d7b.png", 
    alt: "Femme avec poubelle Fertiloop",
    heading: "Collecte écologique",
    description: "Transformez vos déchets en ressources avec nos services de collecte",
    buttonText: "Découvrir la collecte",
    buttonLink: "/waste-collection" 
  },
  {
    src: "/lovable-uploads/16d4f03f-85eb-4524-a622-a34579525e98.png",
    alt: "Agriculteur avec engrais Fertiloop",
    heading: "Engrais organique",
    description: "Un engrais 100% naturel pour des cultures plus saines et plus productives",
    buttonText: "Voir nos engrais",
    buttonLink: "/fertilizer-orders" 
  },
  {
    src: "/lovable-uploads/6e450c4c-7066-4937-a273-9c674a350b03.png",
    alt: "Homme avec logo Fertiloop",
    heading: "Une équipe engagée",
    description: "Rejoignez notre communauté pour un avenir plus durable",
    buttonText: "Nous rejoindre",
    buttonLink: "/register" 
  },
  {
    src: "/lovable-uploads/baae1282-4555-4fda-8d9b-e40ab082365a.png",
    alt: "Femme avec produit Fertiloop",
    heading: "Solutions naturelles",
    description: "Des produits écologiques issus de l'économie circulaire",
    buttonText: "En savoir plus",
    buttonLink: "/services" 
  },
  {
    src: "/lovable-uploads/32fb4369-02d3-4596-b511-268ba1cf8ca6.png",
    alt: "Bonbonnes de biogaz Fertiloop",
    heading: "Énergie verte",
    description: "Notre biogaz disponible en différentes tailles pour tous vos besoins",
    buttonText: "Commander du biogaz",
    buttonLink: "/biogas-management" 
  }
];

const MainCarousel: React.FC = () => {
  const [api, setApi] = useState<any>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    api.on("select", handleSelect);
    api.on("reInit", handleSelect);

    const autoScrollInterval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 3000); // Réduction du temps d'interval de 5000 à 3000 ms

    return () => {
      api.off("select", handleSelect);
      clearInterval(autoScrollInterval);
    };
  }, [api]);

  return (
    <div className="relative w-full bg-fertiloop-beige-dark">
      <Carousel
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
      >
        <CarouselContent className="h-[500px] md:h-[650px]">
          {carouselImages.map((image, index) => (
            <CarouselItem key={index} className="relative pl-0">
              <div className="relative w-full h-full overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-auto h-full max-h-full object-contain"
                  />
                  {/* Overlay with gradient for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1B2B1A]/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 z-10">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: current === index ? 1 : 0, y: current === index ? 0 : 20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 text-shadow">{image.heading}</h2>
                      <p className="text-white text-lg md:text-xl mb-6 max-w-xl text-shadow-sm">{image.description}</p>
                      {image.buttonText && image.buttonLink && (
                        <Link to={image.buttonLink}>
                          <Button className="bg-fertiloop-green-dark hover:bg-fertiloop-green text-white shadow-md transition-all duration-300 transform hover:scale-105">
                            {image.buttonText}
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      )}
                    </motion.div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === current ? "w-8 bg-fertiloop-green-light" : "w-2 bg-white/60"
              }`}
              onClick={() => api?.scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="hidden md:block z-20">
          <CarouselPrevious className="absolute left-4 top-1/2 h-10 w-10 -translate-y-1/2 bg-black/40 hover:bg-fertiloop-green-dark border-none text-white shadow-lg z-20" />
          <CarouselNext className="absolute right-4 top-1/2 h-10 w-10 -translate-y-1/2 bg-black/40 hover:bg-fertiloop-green-dark border-none text-white shadow-lg z-20" />
        </div>
      </Carousel>
    </div>
  );
};

export default MainCarousel;
