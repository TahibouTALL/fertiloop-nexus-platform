
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, Check, Clock, ChevronRight } from "lucide-react";
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
            <ChevronLeft className="h-5 w-5 text-gray-500" />
          </Link>
          <h1 className="text-xl font-bold text-gray-900">
            Commander des engrais
          </h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          {!orderPlaced ? (
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label htmlFor="quantity" className="block text-lg font-medium text-gray-900 mb-2">
                  Quantité
                </label>
                <div className="relative rounded-md shadow-sm">
                  <input
                    type="text"
                    name="quantity"
                    id="quantity"
                    className="input-field pr-12 text-2xl font-semibold"
                    placeholder="0"
                    value={quantity}
                    onChange={handleQuantityChange}
                    required
                  />
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <span className="text-gray-500 text-2xl">kg</span>
                  </div>
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full btn-primary"
              >
                Continuer
              </button>
            </form>
          ) : (
            <div className="text-center py-4">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <Check className="h-6 w-6 text-green-600" aria-hidden="true" />
              </div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Commande réussie
              </h3>
              <div className="mt-2">
                <p className="text-sm text-gray-500">
                  Votre commande de {quantity} kg d'engrais a été enregistrée. Vous serez contacté pour la livraison.
                </p>
              </div>
              <div className="mt-6">
                <button
                  type="button"
                  className="btn-secondary"
                  onClick={() => setOrderPlaced(false)}
                >
                  Nouvelle commande
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Suivi des commandes
          </h2>
          
          {orderHistory.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-lg border border-gray-100 shadow-sm p-4 mb-4"
            >
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  {order.status === "completed" ? (
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
                      {order.status === "completed" ? "Commande livrée" : "Commande en cours"}
                    </h3>
                    <span className="text-gray-500 text-sm">{order.date}</span>
                  </div>
                  <p className="text-gray-600">{order.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Nos types d'engrais
          </h2>
          
          <div className="space-y-6">
            <div className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors">
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
            
            <div className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors">
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
            
            <div className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors">
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
            
            <div className="flex items-center justify-between cursor-pointer hover:bg-gray-50 p-2 rounded-md transition-colors">
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
          
          <div className="mt-6 text-center">
            <Link
              to="/fertilizer-guides"
              className="text-fertiloop-blue hover:text-fertiloop-blue-dark text-sm font-medium inline-flex items-center"
            >
              Consulter nos guides d'utilisation
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default FertilizerOrders;
