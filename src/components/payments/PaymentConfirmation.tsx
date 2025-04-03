
import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Download, ArrowLeft } from "lucide-react";
import { type Transaction } from "./PaymentForm";

interface PaymentConfirmationProps {
  transaction: Transaction;
  onBackClick: () => void;
}

const PaymentConfirmation: React.FC<PaymentConfirmationProps> = ({
  transaction,
  onBackClick,
}) => {
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit'
    };
    return date.toLocaleDateString('fr-FR', options);
  };

  const handleDownloadInvoice = () => {
    // Simuler le téléchargement d'une facture
    const element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," +
        encodeURIComponent(
          `Facture Fertiloop\n\nRéférence: ${transaction.reference}\nMontant: ${transaction.amount} FCFA\nDate: ${formatDate(transaction.date)}\nMéthode: ${transaction.method}`
        )
    );
    element.setAttribute("download", `facture-${transaction.reference}.txt`);
    element.style.display = "none";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <Card className="w-full max-w-md mx-auto p-8 shadow-md bg-white text-center">
      <div className="mb-6">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
          <Check className="h-8 w-8 text-green-600" aria-hidden="true" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800">Paiement réussi</h2>
      </div>

      <div className="space-y-4 mb-8">
        <div className="bg-gray-50 p-4 rounded-md">
          <div className="flex justify-between mb-2">
            <span className="text-gray-500">Montant</span>
            <span className="font-semibold text-gray-900">{transaction.amount.toLocaleString()} FCFA</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-500">Méthode</span>
            <span className="font-semibold text-gray-900">{transaction.method}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span className="text-gray-500">Date</span>
            <span className="font-semibold text-gray-900">{formatDate(transaction.date)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Référence</span>
            <span className="font-mono text-sm font-semibold text-gray-900">{transaction.reference}</span>
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        <Button
          variant="outline"
          className="flex-1"
          onClick={onBackClick}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Retour
        </Button>
        <Button
          variant="outline"
          className="flex-1"
          onClick={handleDownloadInvoice}
        >
          <Download className="mr-2 h-4 w-4" />
          Télécharger facture
        </Button>
      </div>
    </Card>
  );
};

export default PaymentConfirmation;
