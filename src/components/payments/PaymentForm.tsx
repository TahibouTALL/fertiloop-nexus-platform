
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { v4 as uuidv4 } from 'uuid';

// Définition des types de paiement
interface PaymentMethod {
  id: string;
  name: string;
  logo: string;
}

export interface Transaction {
  id: string;
  amount: number;
  method: string;
  date: Date;
  status: string;
  type: string;
  reference: string;
}

interface PaymentFormProps {
  initialAmount?: number;
  onPaymentComplete: (transaction: Transaction) => void;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ 
  initialAmount = 10000,
  onPaymentComplete
}) => {
  const [amount, setAmount] = useState(initialAmount);
  const [selectedMethod, setSelectedMethod] = useState("om");
  const [isProcessing, setIsProcessing] = useState(false);

  const paymentMethods: PaymentMethod[] = [
    {
      id: "om",
      name: "Orange Money",
      logo: "🟠",
    },
    {
      id: "wave",
      name: "Wave",
      logo: "🔵",
    },
    {
      id: "free",
      name: "Free Money",
      logo: "🟣",
    },
  ];

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(e.target.value));
  };

  const generateTransactionReference = (methodId: string) => {
    const prefix = methodId.toUpperCase();
    const date = new Date();
    const dateString = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, '0')}${String(date.getDate()).padStart(2, '0')}`;
    const timeString = `${String(date.getHours()).padStart(2, '0')}${String(date.getMinutes()).padStart(2, '0')}`;
    return `${prefix}-${dateString}${timeString}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simuler un délai de traitement
    setTimeout(() => {
      const methodName = paymentMethods.find(m => m.id === selectedMethod)?.name || "";
      
      // Créer une nouvelle transaction
      const newTransaction: Transaction = {
        id: uuidv4(),
        amount: amount,
        method: methodName,
        date: new Date(),
        status: "completed",
        type: "Achat de services",
        reference: generateTransactionReference(selectedMethod)
      };
      
      // Appeler le callback avec la nouvelle transaction
      onPaymentComplete(newTransaction);
      setIsProcessing(false);
    }, 2500);
  };

  return (
    <Card className="w-full max-w-md mx-auto p-6 shadow-md bg-white">
      <h2 className="text-2xl font-semibold text-gray-800 mb-5">
        Effectuer un paiement
      </h2>
      
      <form onSubmit={handleSubmit}>
        <div className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="amount">Montant à payer (FCFA)</Label>
            <div className="relative">
              <Input
                id="amount"
                type="number"
                value={amount}
                onChange={handleAmountChange}
                className="pl-4 pr-16 py-3 text-lg font-medium"
                min={100}
                required
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <span className="text-gray-500">FCFA</span>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Label>Mode de paiement</Label>
            <RadioGroup 
              value={selectedMethod} 
              onValueChange={setSelectedMethod}
              className="space-y-2"
            >
              {paymentMethods.map((method) => (
                <div 
                  key={method.id}
                  className={`flex items-center space-x-2 border p-3 rounded-md transition-all ${
                    selectedMethod === method.id 
                      ? "border-fertiloop-green bg-fertiloop-green/5" 
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <RadioGroupItem value={method.id} id={method.id} className="text-fertiloop-green" />
                  <Label 
                    htmlFor={method.id} 
                    className="flex flex-1 items-center cursor-pointer"
                  >
                    <span className="text-2xl mr-3">{method.logo}</span>
                    <span>{method.name}</span>
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          <Button 
            type="submit" 
            className="w-full bg-fertiloop-green hover:bg-fertiloop-green/90 text-white py-6"
            disabled={isProcessing}
          >
            {isProcessing ? (
              <div className="flex items-center justify-center">
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                <span>Traitement en cours...</span>
              </div>
            ) : (
              "Payer maintenant"
            )}
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default PaymentForm;
