
import React, { useEffect, useRef } from 'react';
import { Marker as MarkerType } from '@/pages/Logistics';
import { Card } from '@/components/ui/card';
import { useGoogleMapsLoader } from './useGoogleMaps';

interface LogisticsMapProps {
  loading: boolean;
  mapCenter: { lat: number; lng: number };
  markers: MarkerType[];
  addMarker: (position: { lat: number; lng: number }, type: 'origin' | 'destination', address?: string) => void;
  deleteMarkers: () => void;
  setMapRef: (map: any) => void;
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
  const googleMapRef = useRef<any>(null);
  const markersRef = useRef<{ [key: string]: any }>({});
  const { isLoaded } = useGoogleMapsLoader();
  
  // Initialize the map
  useEffect(() => {
    if (loading || !mapRef.current || !window.google || !window.google.maps) return;
    
    const map = new window.google.maps.Map(mapRef.current, {
      center: mapCenter,
      zoom: 13,
      mapTypeId: window.google.maps.MapTypeId.ROADMAP,
      mapTypeControl: true,
      streetViewControl: true,
      fullscreenControl: true,
    });
    
    googleMapRef.current = map;
    setMapRef(map);
    
    // Add click listener to map
    map.addListener('click', (e: any) => {
      if (!e.latLng) return;
      
      const position = {
        lat: e.latLng.lat(),
        lng: e.latLng.lng()
      };
      
      // Get address from geocoder
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ location: position }, (results: any, status: any) => {
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
      window.google.maps.event.clearInstanceListeners(map);
    };
  }, [loading, mapCenter, addMarker, setMapRef, isLoaded]);
  
  // Update markers on map
  useEffect(() => {
    if (loading || !googleMapRef.current || !window.google || !window.google.maps) return;
    
    // Clear existing markers from the map
    Object.values(markersRef.current).forEach((marker: any) => marker.setMap(null));
    markersRef.current = {};
    
    // Add new markers to the map
    markers.forEach(marker => {
      const icon = {
        path: window.google.maps.SymbolPath.CIRCLE,
        fillColor: marker.type === 'origin' ? '#2E6D32' : '#2979FF',
        fillOpacity: 1,
        strokeWeight: 1,
        scale: 10,
        labelOrigin: new window.google.maps.Point(0, 3),
      };
      
      const newMarker = new window.google.maps.Marker({
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
      const infoWindow = new window.google.maps.InfoWindow({
        content: `
          <div>
            <h3 class="font-medium">${marker.type === 'origin' ? 'Point de collecte' : 'Point de livraison'}</h3>
            <p>${marker.address || 'Adresse non disponible'}</p>
            <p>Lat: ${marker.position.lat.toFixed(6)}, Lng: ${marker.position.lng.toFixed(6)}</p>
          </div>
        `,
      });
      
      // Use the correct parameter type for the addListener method
      window.google.maps.event.addListener(
        newMarker, 
        'click', 
        () => {
          infoWindow.open(googleMapRef.current, newMarker);
        }
      );
      
      markersRef.current[marker.id] = newMarker;
    });
    
    // Si nous avons des marqueurs, ajustons le zoom pour les voir tous
    if (markers.length > 1 && googleMapRef.current) {
      const bounds = new window.google.maps.LatLngBounds();
      markers.forEach(marker => {
        bounds.extend(marker.position);
      });
      googleMapRef.current.fitBounds(bounds);
    }
  }, [markers, loading, isLoaded]);
  
  return (
    <Card className="h-full border shadow-sm rounded-lg overflow-hidden">
      {loading || !isLoaded ? (
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
