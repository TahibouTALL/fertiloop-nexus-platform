
import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, User } from "lucide-react";

const Profile = () => {
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
            <div className="h-16 w-16 rounded-full bg-fertiloop-green text-white flex items-center justify-center mr-4">
              <User className="h-8 w-8" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">Amadou Bamba</h2>
              <p className="text-gray-600">amadou@example.com</p>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Informations personnelles</h3>
              <div className="bg-gray-50 p-4 rounded-md">
                <p><strong>Nom:</strong> Amadou Bamba</p>
                <p><strong>Email:</strong> amadou@example.com</p>
                <p><strong>Téléphone:</strong> +221 77 123 45 67</p>
                <p><strong>Rôle:</strong> Agriculteur</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
