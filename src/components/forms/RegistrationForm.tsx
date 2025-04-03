
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'sonner';
import { MapPin, User, Phone, Mail } from "lucide-react";

const RegistrationForm = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    phone: "",
    email: "",
    location: "",
    userType: "farmer", // farmer, household, restaurant, hotel
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleTypeChange = (type: string) => {
    setFormData((prev) => ({
      ...prev,
      userType: type,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!formData.lastName || !formData.firstName || !formData.phone || !formData.location) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }

    if (formData.phone.length < 8) {
      toast.error("Le numéro de téléphone est trop court");
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Submitting form data:", formData);
    
    // Show success toast and navigate to dashboard
    toast.success("Inscription réussie ! Redirection vers votre tableau de bord.");
    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };

  return (
    <div className="max-w-md w-full mx-auto bg-white rounded-xl shadow-sm p-6 md:p-8">
      <div className="mb-6">
        <div className="flex justify-center mb-2">
          <div className="bg-fertiloop-green text-white p-3 rounded-full">
            {formData.userType === "farmer" ? (
              <Leaf className="h-6 w-6" />
            ) : (
              <User className="h-6 w-6" />
            )}
          </div>
        </div>
        <h2 className="text-center text-2xl font-bold text-gray-900">
          {formData.userType === "farmer" ? "Inscription agriculteur" : "Inscription utilisateur"}
        </h2>
        <p className="text-center text-gray-600 mt-1">
          Remplissez le formulaire pour vous inscrire
        </p>
      </div>

      <div className="flex space-x-2 mb-6">
        <button
          type="button"
          onClick={() => handleTypeChange("farmer")}
          className={`flex-1 py-2 px-3 text-sm font-medium rounded-md ${
            formData.userType === "farmer"
              ? "bg-fertiloop-green text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Agriculteur
        </button>
        <button
          type="button"
          onClick={() => handleTypeChange("household")}
          className={`flex-1 py-2 px-3 text-sm font-medium rounded-md ${
            formData.userType === "household"
              ? "bg-fertiloop-green text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          Particulier
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <div className="relative">
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Nom"
                className="input-field"
                required
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className="relative">
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Prénom"
                className="input-field"
                required
              />
            </div>
          </div>
        </div>
        
        <div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Phone className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Téléphone"
              className="input-field pl-10"
              required
            />
          </div>
        </div>
        
        <div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email (facultatif)"
              className="input-field pl-10"
            />
          </div>
        </div>
        
        <div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MapPin className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              name="location"
              id="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Localisation"
              className="input-field pl-10"
              required
            />
          </div>
        </div>
        
        <div>
          <button
            type="submit"
            className="w-full btn-primary flex justify-center"
          >
            S'inscrire
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;

// Add the Leaf icon which was missing in the import
function Leaf(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  );
}
