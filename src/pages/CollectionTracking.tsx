
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Check, Clock, AlertTriangle, MapPin, ChevronDown, ChevronRight, Truck } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import CollectionMap from "@/components/collection/CollectionMap";

const collections = [
  {
    id: "col1",
    date: "05/04/2025",
    status: "completed",
    time: "09:30 - 11:30",
    address: "123 Rue Principale, Dakar",
    collector: "Moussa Diop",
    quantity: "5 kg",
    position: { lat: 14.7167, lng: -17.4677 }
  },
  {
    id: "col2",
    date: "28/03/2025",
    status: "completed",
    time: "14:00 - 16:00",
    address: "45 Avenue de la Paix, Thiès",
    collector: "Amadou Sow",
    quantity: "7 kg",
    position: { lat: 14.7889, lng: -16.9242 }
  },
  {
    id: "col3",
    date: "21/03/2025",
    status: "completed",
    time: "10:00 - 12:00",
    address: "78 Boulevard Maritime, Saint-Louis",
    collector: "Fatou Ndiaye",
    quantity: "4 kg",
    position: { lat: 16.0326, lng: -16.4818 }
  },
  {
    id: "col4",
    date: "12/04/2025",
    status: "scheduled",
    time: "14:00 - 16:00",
    address: "123 Rue Principale, Dakar",
    collector: "À déterminer",
    position: { lat: 14.7167, lng: -17.4677 }
  },
  {
    id: "col5",
    date: "19/04/2025",
    status: "scheduled",
    time: "09:30 - 11:30",
    address: "123 Rue Principale, Dakar",
    collector: "À déterminer",
    position: { lat: 14.7167, lng: -17.4677 }
  },
];

const CollectionTracking = () => {
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [activeView, setActiveView] = useState<'list' | 'map'>('list');
  
  const toggleCard = (id: string) => {
    if (expandedCard === id) {
      setExpandedCard(null);
    } else {
      setExpandedCard(id);
    }
  };

  // Convertir les collections en points pour la carte
  const collectionPoints = collections.map(collection => ({
    id: collection.id,
    position: collection.position,
    title: `Collecte du ${collection.date}`,
    address: collection.address,
    type: 'collection' as const
  }));

  const nextCollection = collections.find(col => col.status === 'scheduled');
  
  return (
    <div className="min-h-screen bg-fertiloop-gray">
      <header className="bg-white shadow">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
          <Link to="/dashboard" className="mr-4">
            <ArrowLeft className="h-5 w-5 text-gray-500 hover:text-fertiloop-green transition-colors" />
          </Link>
          <h1 className="text-xl font-bold text-gray-900">
            Suivi des collectes
          </h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center">
              <Calendar className="h-6 w-6 text-fertiloop-green mr-2" />
              <h2 className="text-2xl font-semibold text-gray-900">Calendrier des collectes</h2>
            </div>
            <div className="flex gap-2">
              <Button
                variant={activeView === 'list' ? "default" : "outline"} 
                size="sm"
                onClick={() => setActiveView('list')}
                className="gap-1"
              >
                <Calendar className="h-4 w-4" />
                <span className="hidden sm:inline">Liste</span>
              </Button>
              <Button 
                variant={activeView === 'map' ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveView('map')}
                className="gap-1"
              >
                <MapPin className="h-4 w-4" />
                <span className="hidden sm:inline">Carte</span>
              </Button>
              <Link
                to="/waste-collection"
                className="bg-fertiloop-green text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-fertiloop-green-dark transition-colors flex items-center gap-1"
              >
                <Truck className="h-4 w-4" />
                <span className="hidden sm:inline">Nouvelle collecte</span>
              </Link>
            </div>
          </div>
          
          {activeView === 'map' ? (
            <div className="mb-6">
              <CollectionMap 
                height="500px"
                points={collectionPoints}
                interactive={false}
              />
            </div>
          ) : (
            <div className="space-y-4">
              {nextCollection && (
                <Card className="bg-fertiloop-green/5 border-l-4 border-fertiloop-green">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-fertiloop-green/20 flex items-center justify-center mr-4">
                          <AlertTriangle className="h-5 w-5 text-fertiloop-green" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">Prochaine collecte prévue</h3>
                          <p className="text-sm text-gray-600">
                            {nextCollection.date} • {nextCollection.time} • {nextCollection.address}
                          </p>
                        </div>
                      </div>
                      <Badge className="bg-fertiloop-green text-white">
                        {nextCollection.date}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              )}
              
              {collections.map((collection) => (
                <Card 
                  key={collection.id}
                  className={`border-l-4 ${collection.status === "completed" ? "border-green-500" : "border-amber-500"} transition-all duration-200 hover:shadow-md`}
                >
                  <CardContent className="p-4">
                    <div 
                      className="flex items-start cursor-pointer" 
                      onClick={() => toggleCard(collection.id)}
                    >
                      <div className="flex-shrink-0 mt-1">
                        {collection.status === "completed" ? (
                          <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                            <Check className="h-4 w-4 text-green-600" />
                          </div>
                        ) : (
                          <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center">
                            <Clock className="h-4 w-4 text-amber-600" />
                          </div>
                        )}
                      </div>
                      <div className="ml-4 flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium text-gray-900 flex items-center">
                              {collection.status === "completed" ? "Collecte effectuée" : "Collecte programmée"}
                              {expandedCard === collection.id ? (
                                <ChevronDown className="h-4 w-4 ml-1" />
                              ) : (
                                <ChevronRight className="h-4 w-4 ml-1" />
                              )}
                            </h3>
                            <p className="text-sm text-gray-600">{collection.date} • {collection.time}</p>
                          </div>
                          {collection.quantity && (
                            <Badge variant="outline" className="bg-gray-50">
                              {collection.quantity}
                            </Badge>
                          )}
                        </div>
                        <div className="mt-2 text-sm text-gray-600 space-y-1">
                          <div className="flex">
                            <span className="font-medium mr-2">Adresse:</span>
                            <span>{collection.address}</span>
                          </div>
                          <div className="flex">
                            <span className="font-medium mr-2">Collecteur:</span>
                            <span>{collection.collector}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Détails étendus */}
                    {expandedCard === collection.id && (
                      <div className="mt-4 pl-12 pt-4 border-t border-gray-100 transition-all duration-300">
                        <div className="mb-4">
                          <CollectionMap 
                            height="200px"
                            points={[{
                              id: collection.id,
                              position: collection.position,
                              title: `Collecte du ${collection.date}`,
                              address: collection.address,
                              type: 'collection'
                            }]}
                            interactive={false}
                          />
                        </div>
                        
                        {collection.status === "completed" ? (
                          <div className="mt-3 bg-green-50 p-3 rounded-md">
                            <h4 className="text-sm font-medium text-green-800 mb-1">Détails de la collecte</h4>
                            <p className="text-xs text-green-700">
                              Biodéchets collectés: <strong>{collection.quantity}</strong>
                            </p>
                            <p className="text-xs text-green-700 mt-1">
                              Impact écologique: <strong>Réduction de 2kg de CO₂</strong>
                            </p>
                          </div>
                        ) : (
                          <div className="flex justify-end mt-3">
                            <Button variant="outline" size="sm" className="text-xs mr-2">
                              Modifier
                            </Button>
                            <Button variant="destructive" size="sm" className="text-xs">
                              Annuler
                            </Button>
                          </div>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        <Card className="mb-6 border border-gray-200 shadow-sm">
          <CardHeader className="border-b border-gray-100 pb-3">
            <CardTitle className="text-lg font-medium flex items-center">
              <AlertTriangle className="h-5 w-5 text-amber-500 mr-2" />
              Informations importantes
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div className="flex">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">
                  Placez vos déchets organiques dans le bac vert fourni, à l'extérieur de votre domicile avant l'heure de collecte prévue.
                </p>
              </div>
              <div className="flex">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                  <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">
                  Pour toute question ou pour modifier une date de collecte, contactez notre service client au moins 48h à l'avance.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default CollectionTracking;
