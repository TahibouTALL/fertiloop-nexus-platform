
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useToast } from "@/hooks/use-toast";
import DashboardLayout from '@/components/layout/DashboardLayout';
import LogisticsMap from '@/components/logistics/LogisticsMap';
import LogisticsSidebar from '@/components/logistics/LogisticsSidebar';
import LogisticsHeader from '@/components/logistics/LogisticsHeader';

// Interfaces pour Google Maps et Distance Matrix
interface DistanceMatrixResult {
  status: string;
  originAddresses: string[];
  destinationAddresses: string[];
  rows: {
    elements: {
      status: string;
      duration: { text: string; value: number };
      distance: { text: string; value: number };
    }[];
  }[];
}

export interface Marker {
  id: string;
  position: { lat: number; lng: number };
  type: 'origin' | 'destination';
  address?: string;
  title?: string;
}

const Logistics = () => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [markers, setMarkers] = useState<Marker[]>([]);
  const [response, setResponse] = useState<DistanceMatrixResult | null>(null);
  const [request, setRequest] = useState<any | null>(null);
  const [mapCenter, setMapCenter] = useState({ lat: 14.7167, lng: -17.4677 }); // Dakar par défaut
  const mapRef = useRef<any>(null);
  
  // Ajouter un marqueur
  const addMarker = useCallback((position: { lat: number; lng: number }, type: 'origin' | 'destination', address?: string) => {
    const newMarker: Marker = {
      id: `marker-${Date.now()}`,
      position,
      type,
      address: address || '',
      title: type === 'origin' ? 'Point de collecte' : 'Point de livraison'
    };
    
    setMarkers(prev => [...prev, newMarker]);
    
    toast({
      title: `${type === 'origin' ? 'Point de collecte' : 'Point de livraison'} ajouté`,
      description: address ? `Adresse: ${address}` : `Position: ${position.lat.toFixed(5)}, ${position.lng.toFixed(5)}`,
    });
    
    return newMarker;
  }, [toast]);
  
  // Supprimer tous les marqueurs
  const deleteMarkers = useCallback(() => {
    if (markers.length > 0) {
      setMarkers([]);
      setResponse(null);
      setRequest(null);
      toast({
        title: "Carte réinitialisée",
        description: "Tous les points ont été supprimés."
      });
    }
  }, [markers.length, toast]);
  
  // Calculer les distances entre les points
  const calculateDistances = useCallback(() => {
    if (!window.google || markers.length < 2) {
      toast({
        title: "Erreur",
        description: "Veuillez ajouter au moins une origine et une destination",
        variant: "destructive"
      });
      return;
    }
    
    const origins = markers.filter(marker => marker.type === 'origin')
      .map(marker => marker.position);
      
    const destinations = markers.filter(marker => marker.type === 'destination')
      .map(marker => marker.position);
      
    if (origins.length === 0 || destinations.length === 0) {
      toast({
        title: "Erreur",
        description: "Veuillez ajouter au moins une origine et une destination",
        variant: "destructive"
      });
      return;
    }
    
    const service = new window.google.maps.DistanceMatrixService();
    const requestOptions = {
      origins,
      destinations,
      travelMode: window.google.maps.TravelMode.DRIVING,
      unitSystem: window.google.maps.UnitSystem.METRIC,
    };
    
    setRequest(requestOptions);
    
    toast({
      title: "Calcul des distances",
      description: "Le calcul des itinéraires est en cours..."
    });
    
    service.getDistanceMatrix(
      requestOptions,
      (response: any, status: string) => {
        if (status === 'OK' && response) {
          setResponse(response as DistanceMatrixResult);
          toast({
            title: "Calcul terminé",
            description: `${origins.length} origines × ${destinations.length} destinations = ${origins.length * destinations.length} routes calculées.`
          });
        } else {
          toast({
            title: "Erreur API",
            description: `Erreur lors du calcul des distances: ${status}`,
            variant: "destructive"
          });
        }
      }
    );
  }, [markers, toast]);
  
  return (
    <DashboardLayout>
      <div className="flex flex-col h-full">
        <LogisticsHeader 
          calculateDistances={calculateDistances} 
          deleteMarkers={deleteMarkers} 
        />
        
        <div className="flex flex-col lg:flex-row h-[calc(100vh-10rem)] gap-4">
          <div className="lg:w-3/5 h-full">
            <LogisticsMap 
              loading={loading}
              mapCenter={mapCenter}
              markers={markers}
              addMarker={addMarker}
              deleteMarkers={deleteMarkers}
              setMapRef={(map: any) => { mapRef.current = map; setLoading(false); }}
            />
          </div>
          <div className="lg:w-2/5 h-full overflow-auto">
            <LogisticsSidebar 
              markers={markers}
              setMarkers={setMarkers}
              request={request} 
              response={response} 
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Logistics;
