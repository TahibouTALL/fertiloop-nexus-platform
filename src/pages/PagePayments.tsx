
import React, { useState, useEffect } from "react";
import { CreditCard, Receipt, Clock, Check, ArrowLeft, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";
import PaymentForm, { Transaction } from "@/components/payments/PaymentForm";
import PaymentConfirmation from "@/components/payments/PaymentConfirmation";
import { getStoredTransactions, saveTransaction } from "@/services/localTransactions";
import DashboardLayout from "../components/layout/DashboardLayout";

const PagePayments = () => {
  const [showPaymentForm, setShowPaymentForm] = useState(true);
  const [currentTransaction, setCurrentTransaction] = useState<Transaction | null>(null);
  const [recentTransactions, setRecentTransactions] = useState<Transaction[]>([]);

  // Charger les transactions au démarrage
  useEffect(() => {
    const storedTransactions = getStoredTransactions();
    setRecentTransactions(storedTransactions);
  }, []);

  const handlePaymentComplete = (transaction: Transaction) => {
    setCurrentTransaction(transaction);
    setShowPaymentForm(false);
    
    // Sauvegarder la transaction
    saveTransaction(transaction);
    
    // Mettre à jour l'état local des transactions
    setRecentTransactions(prevTransactions => [transaction, ...prevTransactions]);
  };

  const handleBackToForm = () => {
    setShowPaymentForm(true);
    setCurrentTransaction(null);
  };

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { 
      day: '2-digit', 
      month: 'short'
    };
    return date.toLocaleDateString('fr-FR', options);
  };

  const StatusIcon = ({ status }: { status: string }) => {
    if (status === "completed") {
      return <Check className="h-5 w-5 text-green-500" />;
    }
    return <Clock className="h-5 w-5 text-yellow-500" />;
  };

  return (
    <DashboardLayout>
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
              {showPaymentForm ? (
                <PaymentForm onPaymentComplete={handlePaymentComplete} />
              ) : (
                currentTransaction && (
                  <PaymentConfirmation
                    transaction={currentTransaction}
                    onBackClick={handleBackToForm}
                  />
                )
              )}
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
                    {recentTransactions.length > 0 ? (
                      recentTransactions.map((transaction) => (
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
                                {formatDate(new Date(transaction.date))}
                              </p>
                            </div>
                            <div className="flex flex-col items-end">
                              <p className="font-medium text-gray-900">
                                {transaction.amount.toLocaleString()} FCFA
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
                      ))
                    ) : (
                      <div className="text-center py-6 text-gray-500">
                        <ShoppingCart className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                        <p>Aucune transaction récente</p>
                      </div>
                    )}
                  </div>
                  {recentTransactions.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <Button variant="outline" className="w-full">
                        Voir toutes les transactions
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PagePayments;
