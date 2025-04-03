
import React, { useState } from "react";
import { Calendar, Clock, Map, CheckCircle, Truck, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const collectionRequests = [
  {
    id: "req1",
    address: "123 Rue Principale, Dakar",
    date: "25 Avr 2024",
    time: "14:00 - 16:00",
    status: "scheduled",
  },
  {
    id: "req2",
    address: "45 Avenue de la Paix, Thiès",
    date: "23 Avr 2024",
    time: "09:30 - 11:30",
    status: "completed",
  },
  {
    id: "req3",
    address: "78 Boulevard Maritime, Saint-Louis",
    date: "20 Avr 2024",
    time: "10:00 - 12:00",
    status: "completed",
  },
];

const RequestStatus = ({ status }: { status: string }) => {
  if (status === "scheduled") {
    return (
      <Badge variant="outline" className="flex items-center gap-1 border-yellow-500 text-yellow-700">
        <Clock className="h-3 w-3" />
        <span>Programmé</span>
      </Badge>
    );
  }
  return (
    <Badge variant="outline" className="flex items-center gap-1 border-green-500 text-green-700">
      <CheckCircle className="h-3 w-3" />
      <span>Complété</span>
    </Badge>
  );
};

const WasteCollection = () => {
  const [formState, setFormState] = useState({
    address: "",
    containerCount: 1,
    preferredDate: "",
    notes: "",
  });

  const [requestSubmitted, setRequestSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setRequestSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setRequestSubmitted(false);
      setFormState({
        address: "",
        containerCount: 1,
        preferredDate: "",
        notes: "",
      });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-fertiloop-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Collecte des biodéchets</h1>
            <p className="mt-2 text-gray-600">
              Signalez vos biodéchets à collecter et suivez l'état de vos demandes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Request form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="border-b border-gray-200 px-6 py-4">
                  <div className="flex items-center">
                    <Truck className="h-5 w-5 text-fertiloop-green mr-2" />
                    <h2 className="text-lg font-medium text-gray-900">
                      Demander une collecte
                    </h2>
                  </div>
                </div>
                <div className="p-6">
                  {requestSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-6">
                      <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                        <CheckCircle className="h-8 w-8 text-green-600" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">
                        Demande envoyée avec succès !
                      </h3>
                      <p className="text-gray-500 text-center mb-4">
                        Votre demande de collecte a été enregistrée. Vous recevrez une confirmation prochainement.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label
                            htmlFor="address"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Adresse complète
                          </label>
                          <input
                            type="text"
                            id="address"
                            name="address"
                            value={formState.address}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fertiloop-green focus:border-transparent"
                            placeholder="Entrez l'adresse de collecte"
                          />
                        </div>

                        <div className="space-y-2">
                          <label
                            htmlFor="containerCount"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Nombre de conteneurs
                          </label>
                          <select
                            id="containerCount"
                            name="containerCount"
                            value={formState.containerCount}
                            onChange={handleInputChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fertiloop-green focus:border-transparent"
                          >
                            {[1, 2, 3, 4, 5].map((num) => (
                              <option key={num} value={num}>
                                {num} {num === 1 ? "conteneur" : "conteneurs"}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-2">
                          <label
                            htmlFor="preferredDate"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Date préférée
                          </label>
                          <input
                            type="date"
                            id="preferredDate"
                            name="preferredDate"
                            value={formState.preferredDate}
                            onChange={handleInputChange}
                            min={new Date().toISOString().split("T")[0]}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fertiloop-green focus:border-transparent"
                          />
                        </div>

                        <div className="space-y-2 md:col-span-2">
                          <label
                            htmlFor="notes"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Notes supplémentaires (facultatif)
                          </label>
                          <textarea
                            id="notes"
                            name="notes"
                            value={formState.notes}
                            onChange={handleInputChange}
                            rows={4}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fertiloop-green focus:border-transparent"
                            placeholder="Instructions particulières pour le collecteur..."
                          ></textarea>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="flex items-center h-5">
                          <input
                            id="terms"
                            type="checkbox"
                            required
                            className="h-4 w-4 text-fertiloop-green focus:ring-fertiloop-green border-gray-300 rounded"
                          />
                        </div>
                        <div className="ml-3 text-sm">
                          <label htmlFor="terms" className="font-medium text-gray-700">
                            J'accepte les conditions de collecte
                          </label>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <Button type="submit" className="bg-fertiloop-green hover:bg-fertiloop-green/90">
                          Demander la collecte
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Collection history */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow overflow-hidden h-full">
                <div className="border-b border-gray-200 px-6 py-4">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-fertiloop-green mr-2" />
                    <h2 className="text-lg font-medium text-gray-900">
                      Historique des collectes
                    </h2>
                  </div>
                </div>
                <div className="p-6">
                  {collectionRequests.length > 0 ? (
                    <div className="space-y-6">
                      {collectionRequests.map((request) => (
                        <div
                          key={request.id}
                          className="border-b border-gray-100 last:border-0 pb-4 last:pb-0"
                        >
                          <div className="flex justify-between items-start mb-2">
                            <div>
                              <p className="font-medium text-gray-900 mb-1">
                                {request.address}
                              </p>
                              <div className="flex items-center text-sm text-gray-500">
                                <Calendar className="h-4 w-4 mr-1" />
                                <span>{request.date}</span>
                              </div>
                              <div className="flex items-center text-sm text-gray-500 mt-1">
                                <Clock className="h-4 w-4 mr-1" />
                                <span>{request.time}</span>
                              </div>
                            </div>
                            <RequestStatus status={request.status} />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-6 text-center">
                      <AlertTriangle className="h-12 w-12 text-gray-400 mb-3" />
                      <p className="text-gray-500">
                        Vous n'avez pas encore de collectes programmées.
                      </p>
                    </div>
                  )}
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Button variant="outline" className="w-full">
                      Voir toutes les collectes
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WasteCollection;
