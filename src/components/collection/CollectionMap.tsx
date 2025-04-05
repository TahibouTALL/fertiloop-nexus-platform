
import React, { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface CollectionPoint {
  id: string;
  position: { lat: number; lng: number };
  title: string;
  address: string;
  type: 'collection' | 'delivery';
}

interface CollectionMapProps {
  height?: string;
  initialCenter?: { lat: number; lng: number };
  points?: CollectionPoint[];
  onAddPoint?: (point: Omit<CollectionPoint, 'id'>) => void;
  interactive?: boolean;
}

const CollectionMap: React.FC<CollectionMapProps> = ({
  height = '400px',
  initialCenter = { lat: 14.7167, lng: -17.4677 }, // Dakar par défaut
  points = [],
  onAddPoint,
  interactive = true
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const googleMapRef = useRef<any>(null);
  const [mapKey, setMapKey] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [currentMarkers, setCurrentMarkers] = useState<any[]>([]);

  // Input pour la clé API temporaire
  const [showKeyInput, setShowKeyInput] = useState(true);
  
  const initMap = () => {
    if (!mapRef.current || !window.google || !mapKey) return;
    
    // Initialiser la carte
    const map = new window.google.maps.Map(mapRef.current, {
      center: initialCenter,
      zoom: 12,
      mapTypeControl: true,
      streetViewControl: true,
      fullscreenControl: true,
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }]
        }
      ]
    });
    
    googleMapRef.current = map;
    setLoading(false);
    
    // Ajouter les marqueurs existants
    addMarkersToMap(points);
    
    // Ajouter l'écouteur de clic si la carte est interactive
    if (interactive && onAddPoint) {
      map.addListener('click', (e: any) => {
        if (!e.latLng) return;
        
        const position = {
          lat: e.latLng.lat(),
          lng: e.latLng.lng()
        };
        
        // Obtenir l'adresse à partir des coordonnées
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ location: position }, (results: any, status: any) => {
          if (status === 'OK' && results && results[0]) {
            const address = results[0].formatted_address;
            
            // Créer un nouveau point
            onAddPoint({
              position,
              title: 'Nouveau point',
              address,
              type: 'collection'
            });
            
            toast.success("Point de collecte ajouté");
          } else {
            toast.error("Impossible de déterminer l'adresse");
          }
        });
      });
    }
  };
  
  // Ajouter des marqueurs à la carte
  const addMarkersToMap = (points: CollectionPoint[]) => {
    if (!googleMapRef.current || !window.google) return;
    
    // Supprimer les marqueurs existants
    currentMarkers.forEach(marker => marker.setMap(null));
    
    const newMarkers = points.map(point => {
      const icon = {
        path: window.google.maps.SymbolPath.CIRCLE,
        fillColor: point.type === 'collection' ? '#2E6D32' : '#2979FF',
        fillOpacity: 1,
        strokeWeight: 1,
        scale: 10,
      };
      
      const marker = new window.google.maps.Marker({
        position: point.position,
        map: googleMapRef.current,
        icon,
        title: point.title
      });
      
      // Ajouter une fenêtre d'info
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div style="padding: 8px">
            <h3 style="font-weight: 600; margin-bottom: 4px">${point.title}</h3>
            <p style="font-size: 14px">${point.address}</p>
          </div>
        `
      });
      
      marker.addListener('click', () => {
        infoWindow.open(googleMapRef.current, marker);
      });
      
      return marker;
    });
    
    setCurrentMarkers(newMarkers);
    
    // Ajuster la vue pour montrer tous les marqueurs
    if (newMarkers.length > 1) {
      const bounds = new window.google.maps.LatLngBounds();
      points.forEach(point => bounds.extend(point.position));
      googleMapRef.current.fitBounds(bounds);
    }
  };
  
  // Charger Google Maps
  const loadGoogleMaps = () => {
    if (window.google) {
      initMap();
      return;
    }
    
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${mapKey}&callback=initMapCallback&libraries=places`;
    script.defer = true;
    script.async = true;
    
    window.initMapCallback = () => {
      initMap();
    };
    
    document.head.appendChild(script);
  };
  
  // Mettre à jour les marqueurs lorsque les points changent
  useEffect(() => {
    if (googleMapRef.current) {
      addMarkersToMap(points);
    }
  }, [points]);
  
  // Initialiser la carte lorsque la clé API est fournie
  useEffect(() => {
    if (mapKey) {
      loadGoogleMaps();
    }
    
    return () => {
      if (window.google && googleMapRef.current) {
        window.google.maps.event.clearInstanceListeners(googleMapRef.current);
      }
    };
  }, [mapKey]);
  
  const handleSubmitKey = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const key = formData.get('apiKey') as string;
    
    if (key) {
      setMapKey(key);
      setShowKeyInput(false);
      toast.success("Clé API Google Maps configurée");
    } else {
      toast.error("Veuillez saisir une clé API valide");
    }
  };
  
  return (
    <Card className="border shadow-sm overflow-hidden">
      {showKeyInput ? (
        <div className="p-6 flex flex-col items-center justify-center" style={{ height }}>
          <div className="max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4 text-center">Configuration Google Maps</h3>
            <p className="text-sm text-muted-foreground mb-6 text-center">
              Pour utiliser la carte interactive, veuillez saisir une clé API Google Maps.
              <br />
              <a 
                href="https://developers.google.com/maps/documentation/javascript/get-api-key" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-fertiloop-green hover:underline"
              >
                Comment obtenir une clé API
              </a>
            </p>
            
            <form onSubmit={handleSubmitKey} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="apiKey"
                  placeholder="Saisissez votre clé API Google Maps"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fertiloop-green"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-fertiloop-green hover:bg-fertiloop-green/90">
                Configurer la carte
              </Button>
            </form>
          </div>
        </div>
      ) : loading ? (
        <div className="flex items-center justify-center" style={{ height }}>
          <div className="animate-pulse flex flex-col items-center">
            <MapPin className="h-10 w-10 text-fertiloop-green/50 mb-2" />
            <p className="text-muted-foreground">Chargement de la carte...</p>
          </div>
        </div>
      ) : (
        <div ref={mapRef} style={{ height, width: '100%' }} />
      )}
    </Card>
  );
};

declare global {
  interface Window {
    google: any;
    initMapCallback: () => void;
  }
}

export default CollectionMap;
