
import React, { useState } from "react";
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface CompanyImage {
  src: string;
  alt: string;
  description?: string;
}

const companyImages: CompanyImage[] = [
  {
    src: "/lovable-uploads/e64e1495-3f90-49c4-946f-fb427005afd5.png",
    alt: "Bonbonne Fertiloop avec logo",
    description: "Notre bonbonne de biogaz écologique avec le logo Fertiloop"
  },
  {
    src: "/lovable-uploads/28e5c3b8-8275-4109-81af-334eeebee6a2.png",
    alt: "Bonbonne Fertiloop vue de face",
    description: "Bonbonne de biogaz Fertiloop avec système de valve sécurisé"
  },
  {
    src: "/lovable-uploads/a1ff9adc-04fe-429b-b3dd-1ea725e6ac52.png",
    alt: "Bonbonne Fertiloop vue de dessus",
    description: "Vue de dessus montrant la valve de notre bonbonne de biogaz"
  },
  {
    src: "/lovable-uploads/a7487d3b-bbc5-4c46-9752-2dcf8e15b6cd.png",
    alt: "Bonbonne Fertiloop complète",
    description: "Bonbonne complète avec le logo Fertiloop et notre slogan 'Closing the loop'"
  },
  {
    src: "/lovable-uploads/f63a87ac-6f14-4833-9b87-cff52d592e32.png",
    alt: "Logo Fertiloop noir",
    description: "Notre logo emblématique sur fond noir représentant notre engagement pour l'économie circulaire"
  },
  {
    src: "/lovable-uploads/c434d401-67a4-4c6c-8469-96e794d1348c.png",
    alt: "Logo Fertiloop blanc",
    description: "Version blanche de notre logo représentant la durabilité et le cycle naturel"
  },
  {
    src: "/lovable-uploads/bdae05c3-c03f-4da6-92f8-63091a46137f.png",
    alt: "Biodigesteur Fertiloop",
    description: "Notre biodigesteur principal pour la transformation des déchets en biogaz"
  },
  {
    src: "/lovable-uploads/fd50b7cc-ca5a-4228-b073-7917416084f5.png",
    alt: "Processus de biogaz",
    description: "Fonctionnement d'un biodigesteur pour la valorisation des déchets"
  },
  {
    src: "/lovable-uploads/9351b59b-bc69-4c5e-ba47-d77247b8f91d.png",
    alt: "Biodigesteur avec indicateurs",
    description: "Biodigesteur avec système de surveillance de la production"
  },
  {
    src: "/lovable-uploads/89a1dc4d-21cf-4359-9aa1-75a1a9abd9a5.png",
    alt: "Système de production de biogaz",
    description: "Notre système de production de biogaz à partir de déchets organiques"
  },
  {
    src: "/lovable-uploads/6bed58f7-415a-405c-9442-66e4def8f57b.png",
    alt: "Biodigesteur en opération",
    description: "Un biodigesteur Fertiloop en pleine opération"
  },
  {
    src: "/lovable-uploads/586da19d-2214-4390-bb3d-7a8297a73213.png",
    alt: "Logo Fertiloop sur biodigesteur",
    description: "Notre technologie de biodigestion avec le logo Fertiloop"
  },
  {
    src: "/lovable-uploads/4eb1fc11-5e7f-4cdd-a755-9dffd17d3b51.png",
    alt: "Logo Fertiloop Closing the loop",
    description: "Notre identité visuelle - Fermer la boucle de l'économie circulaire"
  },
  {
    src: "/lovable-uploads/f8a6d4ac-c40c-4118-9cc9-e3b82ead44a9.png",
    alt: "Logo Fertiloop sur fond noir",
    description: "Notre logo emblématique représentant le cycle de l'économie circulaire"
  }
];

const ImageGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<CompanyImage | null>(null);

  return (
    <div className="py-12 bg-fertiloop-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-base text-fertiloop-green font-semibold tracking-wide uppercase">
            Notre Technologie
          </h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Découvrez nos solutions en images
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Nos biodigesteurs transforment les déchets organiques en biogaz et en engrais de qualité
          </p>
        </div>

        <div className="relative mx-auto max-w-5xl">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {companyImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <div 
                        className="relative overflow-hidden rounded-lg cursor-pointer group h-64"
                        onClick={() => setSelectedImage(image)}
                      >
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                          <div className="p-4 w-full bg-gradient-to-t from-black to-transparent">
                            <p className="text-white font-medium text-sm">{image.alt}</p>
                          </div>
                        </div>
                      </div>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[800px] p-0 bg-transparent border-none">
                      <div className="bg-white rounded-lg overflow-hidden">
                        <div className="relative aspect-video">
                          <img
                            src={image.src}
                            alt={image.alt}
                            className="object-contain w-full h-full"
                          />
                        </div>
                        <div className="p-4 bg-white">
                          <h3 className="text-lg font-medium text-gray-900">{image.alt}</h3>
                          <p className="mt-2 text-gray-600">{image.description}</p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="-left-12 border-fertiloop-green text-fertiloop-green" />
              <CarouselNext className="-right-12 border-fertiloop-green text-fertiloop-green" />
            </div>
          </Carousel>
        </div>

        <div className="mt-10 text-center">
          <p className="text-gray-500">
            Faites défiler pour voir toutes nos installations et technologies
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
