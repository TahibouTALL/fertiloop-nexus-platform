
import React from "react";
import { CreditCard, Receipt, Clock, Check, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";

const paymentMethods = [
  {
    id: "om",
    name: "Orange Money",
    logo: "🟠",
    selected: true,
  },
  {
    id: "wave",
    name: "Wave",
    logo: "🔵",
    selected: false,
  },
  {
    id: "free",
    name: "Free Money",
    logo: "🟣",
    selected: false,
  },
  {
    id: "card",
    name: "Carte bancaire",
    logo: "💳",
    selected: false,
  },
];

const recentTransactions = [
  {
    id: "tx1",
    type: "Achat d'engrais",
    amount: "15 000 FCFA",
    date: "24 Avr 2024",
    status: "completed",
  },
  {
    id: "tx2",
    type: "Achat de biogaz",
    amount: "8 500 FCFA",
    date: "20 Avr 2024",
    status: "completed",
  },
  {
    id: "tx3",
    type: "Achat d'engrais",
    amount: "22 000 FCFA",
    date: "15 Avr 2024",
    status: "pending",
  },
];

const StatusIcon = ({ status }: { status: string }) => {
  if (status === "completed") {
    return <Check className="h-5 w-5 text-green-500" />;
  }
  return <Clock className="h-5 w-5 text-yellow-500" />;
};

const PagePayments = () => {
  return (
    <div className="min-h-screen bg-fertiloop-gray">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
          <Link to="/dashboard" className="mr-4">
            <ArrowLeft className="h-5 w-5 text-gray-500 hover:text-fertiloop-green transition-colors" />
          </Link>
          <h1 className="text-xl font-bold text-gray-900">
            Paiements
          </h1>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col space-y-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Gestion des paiements</h1>
            <p className="mt-2 text-gray-600">
              Gérez vos méthodes de paiement et consultez vos transactions récentes
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader className="border-b border-gray-200">
                  <div className="flex items-center">
                    <CreditCard className="h-5 w-5 text-fertiloop-green mr-2" />
                    <CardTitle>Méthodes de paiement</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {paymentMethods.map((method) => (
                      <div
                        key={method.id}
                        className={`relative border rounded-lg p-4 ${
                          method.selected
                            ? "border-fertiloop-green bg-fertiloop-green/5"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="h-10 w-10 flex items-center justify-center rounded-md bg-gray-100 mr-4">
                              <span className="text-2xl">{method.logo}</span>
                            </div>
                            <div>
                              <h3 className="font-medium text-gray-900">
                                {method.name}
                              </h3>
                              {method.selected && (
                                <p className="text-sm text-fertiloop-green">
                                  Méthode par défaut
                                </p>
                              )}
                            </div>
                          </div>
                          <input
                            type="radio"
                            name="payment-method"
                            checked={method.selected}
                            className="h-4 w-4 text-fertiloop-green focus:ring-fertiloop-green border-gray-300"
                            readOnly
                          />
                        </div>
                      </div>
                    ))}

                    <Button className="w-full bg-fertiloop-green hover:bg-fertiloop-green/90">
                      Ajouter une nouvelle méthode de paiement
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card className="h-full">
                <CardHeader className="border-b border-gray-200">
                  <div className="flex items-center">
                    <Receipt className="h-5 w-5 text-fertiloop-green mr-2" />
                    <CardTitle>Transactions récentes</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    {recentTransactions.map((transaction) => (
                      <div
                        key={transaction.id}
                        className="border-b border-gray-100 last:border-0 pb-4 last:pb-0"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-medium text-gray-900">
                              {transaction.type}
                            </p>
                            <p className="text-sm text-gray-500">
                              {transaction.date}
                            </p>
                          </div>
                          <div className="flex flex-col items-end">
                            <p className="font-medium text-gray-900">
                              {transaction.amount}
                            </p>
                            <div className="flex items-center text-sm">
                              <StatusIcon status={transaction.status} />
                              <span className="ml-1 capitalize">
                                {transaction.status === "completed" ? "Complété" : "En attente"}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <Button variant="outline" className="w-full">
                      Voir toutes les transactions
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

export default PagePayments;
