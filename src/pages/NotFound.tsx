
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-fertiloop-gray">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <div className="mb-6">
          <div className="mx-auto h-24 w-24 bg-fertiloop-green/10 rounded-full flex items-center justify-center">
            <span className="text-4xl font-bold text-fertiloop-green">404</span>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Page non trouvée</h1>
        
        <p className="text-gray-600 mb-8">
          La page que vous recherchez n'existe pas ou a été déplacée.
        </p>
        
        <div className="space-y-4">
          <Button 
            className="w-full bg-fertiloop-green hover:bg-fertiloop-green-dark" 
            asChild
          >
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Retour à l'accueil
            </Link>
          </Button>
          
          <Button 
            variant="outline" 
            className="w-full" 
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Page précédente
          </Button>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Vous pouvez également consulter:
          </p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            <Link to="/services" className="text-fertiloop-green hover:text-fertiloop-green-dark text-sm">
              Services
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/support" className="text-fertiloop-green hover:text-fertiloop-green-dark text-sm">
              Support
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/login" className="text-fertiloop-green hover:text-fertiloop-green-dark text-sm">
              Connexion
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
