
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Settings as SettingsIcon } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const Settings = () => {
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card shadow">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
          <Link to="/dashboard" className="mr-4">
            <ArrowLeft className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
          </Link>
          <h1 className="text-xl font-bold text-foreground">Paramètres</h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-card rounded-xl shadow-sm p-6 space-y-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-medium text-foreground">Notifications</h3>
              <p className="text-sm text-muted-foreground">Recevoir des notifications push</p>
            </div>
            <Switch
              checked={notifications}
              onCheckedChange={setNotifications}
            />
          </div>

          <ThemeToggle />

          <div>
            <h3 className="text-lg font-medium text-foreground mb-4">Langue</h3>
            <select className="w-full border p-2 rounded-md bg-background text-foreground">
              <option value="fr">Français</option>
              <option value="en">English</option>
            </select>
          </div>

          <div className="pt-6 border-t border-border">
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
