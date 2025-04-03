
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
  position: google.maps.LatLngLiteral;
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
  const mapRef = useRef<google.maps.Map | null>(null);
  
  // Ajouter un marqueur
  const addMarker = useCallback((position: google.maps.LatLngLiteral, type: 'origin' | 'destination', address?: string) => {
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
    
    const service = new google.maps.DistanceMatrixService();
    const requestOptions = {
      origins,
      destinations,
      travelMode: google.maps.TravelMode.DRIVING,
      unitSystem: google.maps.UnitSystem.METRIC,
    };
    
    setRequest(requestOptions);
    
    toast({
      title: "Calcul des distances",
      description: "Le calcul des itinéraires est en cours..."
    });
    
    service.getDistanceMatrix(
      requestOptions,
      (response, status) => {
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
  
  // Charger l'API Google Maps
  useEffect(() => {
    const loadGoogleMapsAPI = () => {
      if (!window.google || !window.google.maps) {
        const script = document.createElement('script');
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_API_KEY&libraries=places`;
        script.async = true;
        script.defer = true;
        script.onload = () => {
          setLoading(false);
          toast({
            title: "Google Maps chargé",
            description: "Cliquez sur la carte pour ajouter des points d'origine et de destination."
          });
        };
        document.head.appendChild(script);
        
        return () => {
          document.head.removeChild(script);
        };
      } else {
        setLoading(false);
      }
    };
    
    loadGoogleMapsAPI();
  }, [toast]);
  
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
              setMapRef={(map: google.maps.Map) => { mapRef.current = map; }}
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
