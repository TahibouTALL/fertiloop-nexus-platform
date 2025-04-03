
import React, { useEffect, useRef } from 'react';
import { Marker } from '@/pages/Logistics';
import { Card } from '@/components/ui/card';

interface LogisticsMapProps {
  loading: boolean;
  mapCenter: google.maps.LatLngLiteral;
  markers: Marker[];
  addMarker: (position: google.maps.LatLngLiteral, type: 'origin' | 'destination', address?: string) => void;
  deleteMarkers: () => void;
  setMapRef: (map: google.maps.Map) => void;
}

const LogisticsMap: React.FC<LogisticsMapProps> = ({ 
  loading, 
  mapCenter,
  markers,
  addMarker,
  deleteMarkers,
  setMapRef
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const googleMapRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<{ [key: string]: google.maps.Marker }>({});
  
  // Initialize the map
  useEffect(() => {
    if (loading || !mapRef.current || !window.google || !window.google.maps) return;
    
    const map = new google.maps.Map(mapRef.current, {
      center: mapCenter,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      mapTypeControl: true,
      streetViewControl: true,
      fullscreenControl: true,
    });
    
    googleMapRef.current = map;
    setMapRef(map);
    
    // Add click listener to map
    map.addListener('click', (e: google.maps.MapMouseEvent) => {
      if (!e.latLng) return;
      
      const position = {
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      };
      
      // Get address from geocoder
      const geocoder = new google.maps.Geocoder();
      geocoder.geocode({ location: position }, (results, status) => {
        if (status === 'OK' && results && results[0]) {
          const address = results[0].formatted_address;
          
          // Ask user if this is origin or destination
          const markerType = window.confirm(
            'Cliquez sur OK pour un point de collecte (origine), ou ANNULER pour un point de livraison (destination)'
          ) ? 'origin' : 'destination';
          
          addMarker(position, markerType, address);
        } else {
          addMarker(position, 'origin');
        }
      });
    });
    
    return () => {
      google.maps.event.clearInstanceListeners(map);
    };
  }, [loading, mapCenter, addMarker, setMapRef]);
  
  // Update markers on map
  useEffect(() => {
    if (loading || !googleMapRef.current || !window.google || !window.google.maps) return;
    
    // Clear existing markers from the map
    Object.values(markersRef.current).forEach(marker => marker.setMap(null));
    markersRef.current = {};
    
    // Add new markers to the map
    markers.forEach(marker => {
      const icon = {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: marker.type === 'origin' ? '#2E6D32' : '#2979FF',
        fillOpacity: 1,
        strokeWeight: 1,
        scale: 10,
        labelOrigin: new google.maps.Point(0, 3),
      };
      
      const newMarker = new google.maps.Marker({
        position: marker.position,
        map: googleMapRef.current,
        icon,
        label: {
          text: marker.type === 'origin' ? 'O' : 'D',
          color: 'white',
          fontWeight: 'bold',
        },
        title: `${marker.type === 'origin' ? 'Origine' : 'Destination'}: ${marker.address || ''}`,
      });
      
      // Add info window
      const infoWindow = new google.maps.InfoWindow({
        content: `
          <div>
            <h3 class="font-medium">${marker.type === 'origin' ? 'Point de collecte' : 'Point de livraison'}</h3>
            <p>${marker.address || 'Adresse non disponible'}</p>
            <p>Lat: ${marker.position.lat.toFixed(6)}, Lng: ${marker.position.lng.toFixed(6)}</p>
          </div>
        `,
      });
      
      newMarker.addListener('click', () => {
        infoWindow.open(googleMapRef.current, newMarker);
      });
      
      markersRef.current[marker.id] = newMarker;
    });
    
    // Si nous avons des marqueurs, ajustons le zoom pour les voir tous
    if (markers.length > 1 && googleMapRef.current) {
      const bounds = new google.maps.LatLngBounds();
      markers.forEach(marker => {
        bounds.extend(marker.position);
      });
      googleMapRef.current.fitBounds(bounds);
    }
  }, [markers, loading]);
  
  return (
    <Card className="h-full border shadow-sm rounded-lg overflow-hidden">
      {loading ? (
        <div className="h-full w-full flex items-center justify-center bg-secondary">
          <p className="text-lg animate-pulse">Chargement de Google Maps...</p>
        </div>
      ) : (
        <div ref={mapRef} className="h-full w-full" />
      )}
    </Card>
  );
};

export default LogisticsMap;
