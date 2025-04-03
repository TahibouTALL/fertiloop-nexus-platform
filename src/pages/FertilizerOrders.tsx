
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Check, Clock, ChevronRight, Leaf, Package, ArrowLeft } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";

const FertilizerOrders = () => {
  const [quantity, setQuantity] = useState("100");
  const [orderPlaced, setOrderPlaced] = useState(false);
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(e.target.value);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
    toast.success("Commande d'engrais enregistrée avec succès!");
  };

  const orderHistory = [
    {
      id: "ord1",
      status: "completed",
      date: "12 avr.",
      quantity: "50 kg",
      message: "Votre commande de 50 kg a été livrée",
    },
    {
      id: "ord2",
      status: "in-progress",
      date: "8 avr.",
      quantity: "20 kg",
      message: "Votre commande de 20 kg est en préparation",
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
            Commander des engrais
          </h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Card className="mb-6">
          <CardContent className="pt-6">
            {!orderPlaced ? (
              <form onSubmit={handleSubmit}>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center">
                    <div className="h-10 w-10 bg-fertiloop-green/20 rounded-full flex items-center justify-center">
                      <Package className="h-5 w-5 text-fertiloop-green" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold text-gray-900">Nouvelle commande</h3>
                      <p className="text-sm text-gray-500">Indiquez la quantité d'engrais nécessaire</p>
                    </div>
                  </div>
                </div>
              
                <div className="mb-6">
                  <label htmlFor="quantity" className="block text-lg font-medium text-gray-900 mb-2">
                    Quantité
                  </label>
                  <div className="relative rounded-lg border-2 border-fertiloop-green/20 p-6 transition-all hover:border-fertiloop-green/40">
                    <input
                      type="text"
                      name="quantity"
                      id="quantity"
                      className="w-full border-none text-4xl font-semibold text-fertiloop-green focus:ring-0 focus:outline-none bg-transparent"
                      placeholder="0"
                      value={quantity}
                      onChange={handleQuantityChange}
                      required
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-6 pointer-events-none">
                      <span className="text-gray-500 text-2xl">kg</span>
                    </div>
                  </div>
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-fertiloop-green hover:bg-fertiloop-green/90 h-12 text-lg"
                >
                  Continuer
                </Button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                  <Check className="h-8 w-8 text-green-600" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Commande réussie
                </h3>
                <div className="mt-4">
                  <p className="text-gray-600">
                    Votre commande de {quantity} kg d'engrais a été enregistrée. Vous serez contacté pour la livraison.
                  </p>
                </div>
                <div className="mt-6">
                  <Button
                    variant="outline"
                    className="btn-secondary"
                    onClick={() => setOrderPlaced(false)}
                  >
                    Nouvelle commande
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
            <Clock className="h-5 w-5 mr-2 text-fertiloop-green" />
            Suivi des commandes
          </h2>
          
          {orderHistory.map((order) => (
            <Card
              key={order.id}
              className="mb-4 overflow-hidden border-l-4 hover:shadow-md transition-shadow"
              style={{
                borderLeftColor: order.status === "completed" ? "#10B981" : "#F59E0B"
              }}
            >
              <CardContent className="p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    {order.status === "completed" ? (
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
                        {order.status === "completed" ? "Commande livrée" : "Commande en cours"}
                      </h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {order.date}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center">
                      <Badge variant="secondary" className="mr-2">{order.quantity}</Badge>
                      <p className="text-gray-600">{order.message}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mb-6">
          <CardHeader>
            <div className="flex items-center">
              <Leaf className="h-5 w-5 text-fertiloop-green mr-2" />
              <CardTitle>Nos types d'engrais</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-2">
            <div className="space-y-4">
              <div className="flex items-center justify-between cursor-pointer rounded-lg p-4 hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200">
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-fertiloop-green/10 rounded-full flex items-center justify-center">
                    <span className="text-fertiloop-green font-bold">N</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base font-medium text-gray-900">Engrais riche en azote</h3>
                    <p className="text-sm text-gray-500">Idéal pour la croissance des feuilles</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
              
              <div className="flex items-center justify-between cursor-pointer rounded-lg p-4 hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200">
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-fertiloop-green/10 rounded-full flex items-center justify-center">
                    <span className="text-fertiloop-green font-bold">P</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base font-medium text-gray-900">Engrais riche en phosphore</h3>
                    <p className="text-sm text-gray-500">Pour le développement des racines</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
              
              <div className="flex items-center justify-between cursor-pointer rounded-lg p-4 hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200">
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-fertiloop-green/10 rounded-full flex items-center justify-center">
                    <span className="text-fertiloop-green font-bold">K</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base font-medium text-gray-900">Engrais riche en potassium</h3>
                    <p className="text-sm text-gray-500">Pour les fruits et la résistance</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
              
              <div className="flex items-center justify-between cursor-pointer rounded-lg p-4 hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-200">
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-fertiloop-green/10 rounded-full flex items-center justify-center">
                    <span className="text-fertiloop-green font-bold">C</span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-base font-medium text-gray-900">Compost complet</h3>
                    <p className="text-sm text-gray-500">Équilibré pour toutes cultures</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-gray-400" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center border-t border-gray-100 pt-4">
            <Link
              to="/fertilizer-guides"
              className="text-fertiloop-blue hover:text-fertiloop-blue-dark text-sm font-medium inline-flex items-center"
            >
              Consulter nos guides d'utilisation
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </CardFooter>
        </Card>
      </main>
    </div>
  );
};

export default FertilizerOrders;
