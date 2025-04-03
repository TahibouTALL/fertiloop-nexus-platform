
import { useEffect, useState } from 'react';

// Set your API key here
const GOOGLE_MAPS_API_KEY = 'YOUR_GOOGLE_API_KEY';

declare global {
  interface Window {
    initMap: () => void;
  }
}

export const useGoogleMapsLoader = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    if (window.google) {
      setIsLoaded(true);
      return;
    }

    // Initialize callback function
    window.initMap = () => {
      setIsLoaded(true);
    };

    // Create script element for Google Maps API
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&callback=initMap&libraries=places`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
    
    return () => {
      window.initMap = () => {};
      const existingScript = document.querySelector(`script[src*="maps.googleapis.com"]`);
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);
  
  return { isLoaded };
};
