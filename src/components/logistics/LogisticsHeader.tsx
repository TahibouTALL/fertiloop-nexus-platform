
import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin, RefreshCw, CalculatorIcon } from 'lucide-react';

interface LogisticsHeaderProps {
  calculateDistances: () => void;
  deleteMarkers: () => void;
}

const LogisticsHeader: React.FC<LogisticsHeaderProps> = ({ 
  calculateDistances,
  deleteMarkers
}) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <MapPin className="h-7 w-7 text-primary" />
          Logistique Fertiloop
        </h1>
        <p className="text-muted-foreground">
          Gestion des tournées de collecte et livraison
        </p>
      </div>
      
      <div className="flex gap-3 mt-4 sm:mt-0">
        <Button 
          variant="outline" 
          onClick={deleteMarkers}
          className="gap-2"
        >
          <RefreshCw className="h-4 w-4" />
          Réinitialiser
        </Button>
        <Button 
          onClick={calculateDistances}
          className="gap-2"
        >
          <CalculatorIcon className="h-4 w-4" />
          Calculer les distances
        </Button>
      </div>
    </div>
  );
};

export default LogisticsHeader;
