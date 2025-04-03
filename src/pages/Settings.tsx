
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Settings as SettingsIcon } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="min-h-screen bg-fertiloop-gray">
      <header className="bg-white shadow">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
          <Link to="/dashboard" className="mr-4">
            <ArrowLeft className="h-5 w-5 text-gray-500 hover:text-fertiloop-green transition-colors" />
          </Link>
          <h1 className="text-xl font-bold text-gray-900">Paramètres</h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Notifications</h3>
              <p className="text-sm text-gray-600">Recevoir des notifications push</p>
            </div>
            <Switch
              checked={notifications}
              onCheckedChange={setNotifications}
            />
          </div>

          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Mode sombre</h3>
              <p className="text-sm text-gray-600">Activer le mode sombre</p>
            </div>
            <Switch
              checked={darkMode}
              onCheckedChange={setDarkMode}
            />
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Langue</h3>
            <select className="w-full border p-2 rounded-md">
              <option value="fr">Français</option>
              <option value="en">English</option>
            </select>
          </div>

          <div className="pt-6 border-t">
            <Button variant="destructive" className="w-full">
              Déconnexion
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Settings;
