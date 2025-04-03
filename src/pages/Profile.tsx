
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, User, Phone, Briefcase } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Profile = () => {
  const { user } = useAuth();

  console.log("User data in profile:", user); // Ajout d'un log pour déboguer

  // Function to get user initials
  const getUserInitials = () => {
    if (!user?.name) return "U";
    
    const names = user.name.split(" ");
    if (names.length === 1) return names[0].charAt(0).toUpperCase();
    return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase();
  };

  // Function to get role name
  const getRoleName = (role: string) => {
    switch (role) {
      case "admin":
        return "Administrateur";
      case "farmer":
        return "Agriculteur";
      case "household":
        return "Ménage";
      case "logistics":
        return "Logistique";
      case "restaurant":
        return "Restaurant";
      case "hotel":
        return "Hôtel";
      default:
        return role;
    }
  };

  return (
    <div className="min-h-screen bg-fertiloop-gray">
      <header className="bg-white shadow">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center">
          <Link to="/dashboard" className="mr-4">
            <ArrowLeft className="h-5 w-5 text-gray-500 hover:text-fertiloop-green transition-colors" />
          </Link>
          <h1 className="text-xl font-bold text-gray-900">Mon Profil</h1>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center mb-6">
            <Avatar className="h-16 w-16 bg-fertiloop-green text-white mr-4">
              <AvatarFallback className="bg-fertiloop-green text-xl font-semibold">
                {getUserInitials()}
              </AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">{user?.name || "Utilisateur"}</h2>
              <p className="text-gray-600 flex items-center">
                <Phone className="h-4 w-4 mr-1" />
                {user?.phone || "Non renseigné"}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Informations personnelles</h3>
              <div className="bg-gray-50 p-4 rounded-md space-y-2">
                <p className="flex items-center">
                  <User className="h-5 w-5 mr-3 text-gray-500" />
                  <strong className="w-24 inline-block">Nom:</strong> 
                  <span>{user?.name || "Non renseigné"}</span>
                </p>
                <p className="flex items-center">
                  <Phone className="h-5 w-5 mr-3 text-gray-500" />
                  <strong className="w-24 inline-block">Téléphone:</strong> 
                  <span>{user?.phone || "Non renseigné"}</span>
                </p>
                <p className="flex items-center">
                  <Briefcase className="h-5 w-5 mr-3 text-gray-500" />
                  <strong className="w-24 inline-block">Rôle:</strong> 
                  <span>{user ? getRoleName(user.role) : "Non renseigné"}</span>
                </p>
              </div>
            </div>
            
            <div className="mt-6 flex justify-end">
              <Link
                to="/settings"
                className="px-4 py-2 bg-fertiloop-green text-white rounded-md hover:bg-fertiloop-green-dark transition-colors"
              >
                Modifier mon profil
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
