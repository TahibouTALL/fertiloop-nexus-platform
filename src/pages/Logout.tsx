
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Logout = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const performLogout = async () => {
      try {
        // Add logout logic here (e.g., clear tokens, reset auth state)
        toast({
          title: "Déconnexion réussie",
          description: "Vous avez été déconnecté avec succès.",
        });
        navigate("/login");
      } catch (error) {
        toast({
          title: "Erreur de déconnexion",
          description: "Un problème est survenu lors de la déconnexion.",
          variant: "destructive",
        });
      }
    };

    performLogout();
  }, [navigate, toast]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-fertiloop-gray">
      <div className="text-center">
        <Loader2 className="mx-auto h-12 w-12 animate-spin text-fertiloop-green" />
        <p className="mt-4 text-lg text-gray-700">Déconnexion en cours...</p>
      </div>
    </div>
  );
};

export default Logout;
