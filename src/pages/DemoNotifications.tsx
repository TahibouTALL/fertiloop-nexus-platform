
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  simulateContainerNotification, 
  simulateOrderStatusChange, 
  scheduleReminderNotification 
} from "@/services/localTransactions";

const DemoNotifications = () => {
  const [containerType, setContainerType] = useState<"bocal" | "bonbonne">("bonbonne");
  const [containerStatus, setContainerStatus] = useState("vide");
  const [orderNumber, setOrderNumber] = useState("ORD-2025-1234");
  const [orderStatus, setOrderStatus] = useState<"validée" | "en cours" | "livrée">("validée");
  const [reminderMessage, setReminderMessage] = useState("N'oubliez pas de préparer vos biodéchets pour la collecte de demain");
  const [reminderDelay, setReminderDelay] = useState(5);

  const handleContainerNotification = () => {
    simulateContainerNotification(containerType, containerStatus);
  };

  const handleOrderStatusNotification = () => {
    simulateOrderStatusChange(orderNumber, orderStatus);
  };

  const handleReminderNotification = () => {
    scheduleReminderNotification(reminderMessage, reminderDelay);
  };

  return (
    <div className="min-h-screen bg-fertiloop-gray">
      <header className="bg-white shadow">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
          <Link to="/dashboard" className="mr-4">
            <ArrowLeft className="h-5 w-5 text-gray-500 hover:text-fertiloop-green transition-colors" />
          </Link>
          <h1 className="text-xl font-bold text-gray-900">
            Démonstration des Notifications
          </h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>Notification de Contenants</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="containerType" className="block text-sm font-medium text-gray-700 mb-1">
                  Type de contenant
                </label>
                <Select value={containerType} onValueChange={(value: "bocal" | "bonbonne") => setContainerType(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez un type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bocal">Bocal</SelectItem>
                    <SelectItem value="bonbonne">Bonbonne</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="containerStatus" className="block text-sm font-medium text-gray-700 mb-1">
                  État
                </label>
                <Input
                  id="containerStatus"
                  value={containerStatus}
                  onChange={(e) => setContainerStatus(e.target.value)}
                  placeholder="vide, plein, endommagé..."
                />
              </div>
            </div>

            <Button onClick={handleContainerNotification} className="w-full bg-fertiloop-green hover:bg-fertiloop-green/90">
              Envoyer la notification
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notification de Commande</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="orderNumber" className="block text-sm font-medium text-gray-700 mb-1">
                  Numéro de commande
                </label>
                <Input
                  id="orderNumber"
                  value={orderNumber}
                  onChange={(e) => setOrderNumber(e.target.value)}
                  placeholder="ORD-2025-1234"
                />
              </div>

              <div>
                <label htmlFor="orderStatus" className="block text-sm font-medium text-gray-700 mb-1">
                  Statut
                </label>
                <Select value={orderStatus} onValueChange={(value: "validée" | "en cours" | "livrée") => setOrderStatus(value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez un statut" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="validée">Validée</SelectItem>
                    <SelectItem value="en cours">En cours</SelectItem>
                    <SelectItem value="livrée">Livrée</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button onClick={handleOrderStatusNotification} className="w-full bg-fertiloop-blue hover:bg-fertiloop-blue/90">
              Envoyer la notification
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rappels Automatisés</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label htmlFor="reminderMessage" className="block text-sm font-medium text-gray-700 mb-1">
                Message du rappel
              </label>
              <Input
                id="reminderMessage"
                value={reminderMessage}
                onChange={(e) => setReminderMessage(e.target.value)}
                placeholder="Entrez le message du rappel"
              />
            </div>

            <div>
              <label htmlFor="reminderDelay" className="block text-sm font-medium text-gray-700 mb-1">
                Délai avant envoi (secondes)
              </label>
              <Input
                id="reminderDelay"
                type="number"
                min="1"
                value={reminderDelay}
                onChange={(e) => setReminderDelay(parseInt(e.target.value))}
              />
            </div>

            <Button onClick={handleReminderNotification} className="w-full bg-fertiloop-yellow hover:bg-fertiloop-yellow/90 text-fertiloop-yellow-dark">
              Programmer le rappel
            </Button>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default DemoNotifications;
