import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Cylinder, Check, Clock } from "lucide-react";
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
            <ChevronLeft className="h-5 w-5 text-gray-500" />
          </Link>
          <h1 className="text-xl font-bold text-gray-900">
            Gestion des bonbonnes de biogaz
          </h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <div className="flex items-center mb-6">
            <div className="h-12 w-12 bg-fertiloop-yellow/20 rounded-full flex items-center justify-center">
              <Cylinder className="h-6 w-6 text-fertiloop-yellow-dark" />
            </div>
            <h2 className="ml-4 text-xl font-semibold text-gray-900">
              Signaler une bonbonne vide
            </h2>
          </div>

          <p className="text-gray-600 mb-8">
            Lorsque votre bonbonne de biogaz est vide, signalez-le pour planifier un remplacement.
          </p>

          {!requestSent ? (
            <button
              onClick={handleRequest}
              className="w-full btn-primary"
            >
              Demander
            </button>
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
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Suivi des livraisons
          </h2>
          
          {deliveryHistory.map((delivery) => (
            <div
              key={delivery.id}
              className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 mb-4 flex items-center"
            >
              <div className="flex-shrink-0">
                {delivery.status === "completed" ? (
                  <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                ) : (
                  <div className="h-10 w-10 rounded-full bg-fertiloop-yellow flex items-center justify-center">
                    <Clock className="h-5 w-5 text-white" />
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
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Informations utiles
          </h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-fertiloop-blue pl-4">
              <h3 className="text-lg font-medium text-gray-900">Utilisation du biogaz</h3>
              <p className="text-gray-600 mt-1">
                Le biogaz est parfait pour la cuisine, le chauffage et la production d'électricité à petite échelle.
              </p>
            </div>
            
            <div className="border-l-4 border-fertiloop-green pl-4">
              <h3 className="text-lg font-medium text-gray-900">Sécurité</h3>
              <p className="text-gray-600 mt-1">
                Stockez toujours les bonbonnes dans un endroit bien ventilé et à l'abri des sources de chaleur directe.
              </p>
            </div>
            
            <div className="border-l-4 border-fertiloop-yellow pl-4">
              <h3 className="text-lg font-medium text-gray-900">Entretien</h3>
              <p className="text-gray-600 mt-1">
                Vérifiez régulièrement l'état de vos équipements et signalez tout problème à notre service technique.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BiogasManagement;
