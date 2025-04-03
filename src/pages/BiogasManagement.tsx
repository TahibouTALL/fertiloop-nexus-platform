
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Cylinder, Check, Clock, AlertCircle, Info } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const BiogasManagement = () => {
  const [requestSent, setRequestSent] = useState(false);

  const handleRequest = () => {
    setRequestSent(true);
    toast.success("Votre demande a été envoyée avec succès!");
  };

  const deliveryHistory = [
    {
      id: "del1",
      status: "completed",
      date: "12 avr.",
      message: "Votre bonbonne a été remplie",
    },
    {
      id: "del2",
      status: "in-progress",
      date: "8 avr.",
      message: "Livraison en cours",
    },
  ];

  return (
    <div className="min-h-screen bg-fertiloop-gray">
      <header className="bg-white shadow">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
          <Link to="/dashboard" className="mr-4">
            <ArrowLeft className="h-5 w-5 text-gray-500 hover:text-fertiloop-green transition-colors" />
          </Link>
          <h1 className="text-xl font-bold text-gray-900">
            Gestion des bonbonnes de biogaz
          </h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="mb-6 overflow-hidden">
          <CardHeader className="bg-fertiloop-yellow/10">
            <div className="flex items-center">
              <div className="h-12 w-12 bg-fertiloop-yellow/20 rounded-full flex items-center justify-center mr-4">
                <Cylinder className="h-6 w-6 text-fertiloop-yellow-dark" />
              </div>
              <div>
                <CardTitle>Signaler une bonbonne vide</CardTitle>
                <p className="text-sm text-gray-600 mt-1">
                  Lorsque votre bonbonne de biogaz est vide, signalez-le pour planifier un remplacement
                </p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="pt-6">
            <div className="flex items-center mb-6">
              <img 
                src="https://placehold.co/300x200/e2f2d5/1f7532?text=Biogaz" 
                alt="Illustration d'une bonbonne de biogaz" 
                className="w-32 h-auto rounded-lg mr-6 shadow-sm"
              />
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Bonbonne standard</h3>
                <p className="text-gray-600 mb-3">
                  Idéal pour les besoins domestiques quotidiens. Capacité de 12kg.
                </p>
                <div className="flex items-center">
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Disponible en stock
                  </span>
                </div>
              </div>
            </div>

            {!requestSent ? (
              <Button
                onClick={handleRequest}
                className="w-full bg-fertiloop-green hover:bg-fertiloop-green/90"
              >
                Demander un remplacement
              </Button>
            ) : (
              <div className="p-4 bg-green-50 rounded-md flex items-center">
                <div className="flex-shrink-0">
                  <Check className="h-5 w-5 text-green-500" />
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-green-800">
                    Demande envoyée avec succès! Nous vous contacterons pour la livraison.
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Clock className="h-5 w-5 mr-2 text-fertiloop-green" />
            Suivi des livraisons
          </h2>
          
          {deliveryHistory.map((delivery) => (
            <Card
              key={delivery.id}
              className="mb-4 border-l-4 hover:shadow-md transition-shadow"
              style={{
                borderLeftColor: delivery.status === "completed" ? "#10B981" : "#F59E0B"
              }}
            >
              <CardContent className="p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    {delivery.status === "completed" ? (
                      <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                        <Check className="h-5 w-5 text-green-600" />
                      </div>
                    ) : (
                      <div className="h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center">
                        <Clock className="h-5 w-5 text-amber-600" />
                      </div>
                    )}
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-medium text-gray-900">
                        {delivery.status === "completed" ? "Remplissage effectué" : "Livraison en cours"}
                      </h3>
                      <span className="text-gray-500 text-sm">{delivery.date}</span>
                    </div>
                    <p className="text-gray-600">{delivery.message}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-white rounded-xl shadow-sm p-6">
          <CardHeader className="px-0 pt-0">
            <div className="flex items-center">
              <Info className="h-5 w-5 text-fertiloop-green mr-2" />
              <CardTitle>Informations utiles</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="px-0 pt-4">
            <div className="space-y-4">
              <div className="border-l-4 border-fertiloop-blue pl-4 py-2">
                <h3 className="text-lg font-medium text-gray-900">Utilisation du biogaz</h3>
                <div className="flex items-center mt-2">
                  <img 
                    src="https://placehold.co/300x200/daeefa/1a68c9?text=Utilisation" 
                    alt="Utilisation du biogaz" 
                    className="w-16 h-16 object-cover rounded-md mr-3 shadow-sm" 
                  />
                  <p className="text-gray-600">
                    Le biogaz est parfait pour la cuisine, le chauffage et la production d'électricité à petite échelle.
                  </p>
                </div>
              </div>
              
              <div className="border-l-4 border-fertiloop-green pl-4 py-2">
                <h3 className="text-lg font-medium text-gray-900">Sécurité</h3>
                <div className="flex items-center mt-2">
                  <img 
                    src="https://placehold.co/300x200/e2f2d5/1f7532?text=Sécurité" 
                    alt="Sécurité" 
                    className="w-16 h-16 object-cover rounded-md mr-3 shadow-sm"
                  />
                  <p className="text-gray-600">
                    Stockez toujours les bonbonnes dans un endroit bien ventilé et à l'abri des sources de chaleur directe.
                  </p>
                </div>
              </div>
              
              <div className="border-l-4 border-fertiloop-yellow pl-4 py-2">
                <h3 className="text-lg font-medium text-gray-900">Entretien</h3>
                <div className="flex items-center mt-2">
                  <img 
                    src="https://placehold.co/300x200/fef7cd/e9b949?text=Entretien" 
                    alt="Entretien" 
                    className="w-16 h-16 object-cover rounded-md mr-3 shadow-sm"
                  />
                  <p className="text-gray-600">
                    Vérifiez régulièrement l'état de vos équipements et signalez tout problème à notre service technique.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default BiogasManagement;
