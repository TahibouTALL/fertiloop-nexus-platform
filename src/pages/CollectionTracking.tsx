
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Check, Clock, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const collections = [
  {
    id: "col1",
    date: "05/04/2025",
    status: "completed",
    time: "09:30 - 11:30",
    address: "123 Rue Principale, Dakar",
    collector: "Moussa Diop",
    quantity: "5 kg",
  },
  {
    id: "col2",
    date: "28/03/2025",
    status: "completed",
    time: "14:00 - 16:00",
    address: "123 Rue Principale, Dakar",
    collector: "Amadou Sow",
    quantity: "7 kg",
  },
  {
    id: "col3",
    date: "21/03/2025",
    status: "completed",
    time: "10:00 - 12:00",
    address: "123 Rue Principale, Dakar",
    collector: "Fatou Ndiaye",
    quantity: "4 kg",
  },
  {
    id: "col4",
    date: "12/04/2025",
    status: "scheduled",
    time: "14:00 - 16:00",
    address: "123 Rue Principale, Dakar",
    collector: "À déterminer",
  },
  {
    id: "col5",
    date: "19/04/2025",
    status: "scheduled",
    time: "09:30 - 11:30",
    address: "123 Rue Principale, Dakar",
    collector: "À déterminer",
  },
];

const CollectionTracking = () => {
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
            <Link
              to="/waste-collection"
              className="bg-fertiloop-green text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-fertiloop-green-dark transition-colors"
            >
              Demander une collecte
            </Link>
          </div>
          
          <div className="space-y-4">
            <Card className="bg-fertiloop-green/5 border-l-4 border-fertiloop-green">
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-fertiloop-green/20 flex items-center justify-center mr-4">
                      <AlertTriangle className="h-5 w-5 text-fertiloop-green" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900">Prochaine collecte prévue</h3>
                      <p className="text-sm text-gray-600">Préparez vos biodéchets dans les conteneurs fournis</p>
                    </div>
                  </div>
                  <Badge className="bg-fertiloop-green text-white">{collections.filter(c => c.status === "scheduled")[0]?.date}</Badge>
                </div>
              </CardContent>
            </Card>
            
            {collections.map((collection) => (
              <Card 
                key={collection.id}
                className={`border-l-4 ${collection.status === "completed" ? "border-green-500" : "border-amber-500"}`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start">
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
                          <h3 className="font-medium text-gray-900">
                            {collection.status === "completed" ? "Collecte effectuée" : "Collecte programmée"}
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <Card className="mb-6">
          <CardContent className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Informations importantes</h3>
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
