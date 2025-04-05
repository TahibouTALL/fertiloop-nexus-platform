
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Clock, Map, CheckCircle, Truck, AlertTriangle, ArrowLeft, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { toast } from "sonner";
import { v4 as uuidv4 } from "uuid";
import CollectionMap from "@/components/collection/CollectionMap";

interface CollectionPoint {
  id: string;
  position: { lat: number; lng: number };
  title: string;
  address: string;
  type: 'collection' | 'delivery';
}

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

// Points de collecte initiaux
const initialCollectionPoints: CollectionPoint[] = [
  {
    id: uuidv4(),
    position: { lat: 14.7167, lng: -17.4677 },
    title: "Centre de collecte Dakar",
    address: "123 Rue Principale, Dakar",
    type: "collection"
  },
  {
    id: uuidv4(),
    position: { lat: 14.7505, lng: -17.3880 },
    title: "Point de dépôt Parcelles Assainies",
    address: "45 Avenue de la Paix, Parcelles Assainies",
    type: "collection"
  }
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
    useMap: false,
  });

  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [collectionPoints, setCollectionPoints] = useState<CollectionPoint[]>(initialCollectionPoints);
  const [activeTab, setActiveTab] = useState<'form' | 'map'>('form');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setRequestSubmitted(true);
    toast.success("Demande de collecte envoyée avec succès!");
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setRequestSubmitted(false);
      setFormState({
        address: "",
        containerCount: 1,
        preferredDate: "",
        notes: "",
        useMap: false,
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

  const handleAddCollectionPoint = (point: Omit<CollectionPoint, 'id'>) => {
    const newPoint = {
      ...point,
      id: uuidv4(),
      title: "Nouveau point de collecte"
    };
    
    setCollectionPoints(prev => [...prev, newPoint]);
    
    // Mettre à jour l'adresse dans le formulaire
    if (activeTab === 'map') {
      setFormState(prev => ({
        ...prev,
        address: point.address,
        useMap: true
      }));
      
      // Basculer vers l'onglet du formulaire
      setActiveTab('form');
    }
  };

  return (
    <div className="min-h-screen bg-fertiloop-gray">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
          <Link to="/dashboard" className="mr-4">
            <ArrowLeft className="h-5 w-5 text-gray-500 hover:text-fertiloop-green transition-colors" />
          </Link>
          <h1 className="text-xl font-bold text-gray-900">
            Collecte des biodéchets
          </h1>
        </div>
      </header>

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
              <Card>
                <CardHeader className="border-b border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Truck className="h-5 w-5 text-fertiloop-green mr-2" />
                      <CardTitle>Demander une collecte</CardTitle>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant={activeTab === 'form' ? "default" : "outline"} 
                        size="sm"
                        onClick={() => setActiveTab('form')}
                        className="gap-2"
                      >
                        <Calendar className="h-4 w-4" />
                        Formulaire
                      </Button>
                      <Button 
                        variant={activeTab === 'map' ? "default" : "outline"}
                        size="sm"
                        onClick={() => setActiveTab('map')}
                        className="gap-2"
                      >
                        <MapPin className="h-4 w-4" />
                        Carte
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
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
                  ) : activeTab === 'map' ? (
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground mb-2">
                        Cliquez sur la carte pour définir votre point de collecte. 
                        L'adresse sera automatiquement détectée et ajoutée à votre demande.
                      </p>
                      <CollectionMap 
                        height="500px"
                        points={collectionPoints}
                        onAddPoint={handleAddCollectionPoint}
                      />
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
                          <div className="relative">
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
                            <Button
                              type="button"
                              variant="ghost"
                              size="sm"
                              className="absolute right-1 top-1 text-gray-500"
                              onClick={() => setActiveTab('map')}
                            >
                              <MapPin className="h-4 w-4" />
                            </Button>
                          </div>
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
                </CardContent>
              </Card>
            </div>

            {/* Collection history */}
            <div className="lg:col-span-1">
              <Card className="h-full">
                <CardHeader className="border-b border-gray-200">
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-fertiloop-green mr-2" />
                    <CardTitle>Points de collecte</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  {collectionPoints.length > 0 ? (
                    <div className="space-y-6">
                      <div className="mb-4">
                        <CollectionMap 
                          height="200px"
                          points={collectionPoints}
                          interactive={false}
                        />
                      </div>
                      <h3 className="font-medium text-gray-900 mb-3">Historique des demandes</h3>
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
                      <Link to="/collection-tracking" className="w-full flex justify-center items-center">
                        Voir le suivi des collectes
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WasteCollection;
