import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'sonner';
import { MapPin, User, Phone, Mail, Loader2, Check, Leaf } from "lucide-react";
import { motion } from "framer-motion";
import "./FormStyles.css";
import { useAuth } from "@/hooks/useAuth";
import type { UserRole } from "@/hooks/useAuth";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const { signUp, isLoading: authLoading } = useAuth();
  
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    phone: "",
    email: "",
    location: "",
    userType: "farmer" as UserRole, // farmer, household, restaurant, hotel
    password: "",
    confirmPassword: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fieldValidation, setFieldValidation] = useState({
    lastName: false,
    firstName: false,
    phone: false,
    email: false,
    location: false,
    password: false,
    confirmPassword: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Visual validation indicators after user types
    if (value.trim() !== "") {
      setFieldValidation(prev => ({
        ...prev,
        [name]: true
      }));
    } else {
      setFieldValidation(prev => ({
        ...prev,
        [name]: false
      }));
    }

    // Special handling for confirm password
    if (name === "confirmPassword" || name === "password") {
      if (name === "confirmPassword" && value !== formData.password) {
        setFieldValidation(prev => ({
          ...prev,
          confirmPassword: false
        }));
      } else if (name === "password" && formData.confirmPassword && value !== formData.confirmPassword) {
        setFieldValidation(prev => ({
          ...prev,
          confirmPassword: false
        }));
      } else if (name === "confirmPassword" && value === formData.password) {
        setFieldValidation(prev => ({
          ...prev,
          confirmPassword: true
        }));
      } else if (name === "password" && formData.confirmPassword && value === formData.confirmPassword) {
        setFieldValidation(prev => ({
          ...prev,
          confirmPassword: true
        }));
      }
    }
  };

  const handleTypeChange = (type: UserRole) => {
    setFormData((prev) => ({
      ...prev,
      userType: type,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Form validation
    if (!formData.lastName || !formData.firstName || !formData.phone || !formData.location || !formData.password || !formData.email) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      setIsSubmitting(false);
      return;
    }

    if (formData.phone.length < 8) {
      toast.error("Le numéro de téléphone est trop court");
      setIsSubmitting(false);
      return;
    }
    
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Veuillez entrer une adresse email valide");
      setIsSubmitting(false);
      return;
    }

    if (formData.password.length < 6) {
      toast.error("Le mot de passe doit contenir au moins 6 caractères");
      setIsSubmitting(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Les mots de passe ne correspondent pas");
      setIsSubmitting(false);
      return;
    }

    try {
      // Construct the user data
      const userData = {
        name: `${formData.firstName} ${formData.lastName}`,
        phone: formData.phone,
        email: formData.email,
        location: formData.location,
        role: formData.userType,
      };

      // Send to Supabase via Auth context
      await signUp(userData, formData.password);
      
      // The redirect is handled in the signUp function
    } catch (error) {
      console.error("Error during registration:", error);
      toast.error("Erreur lors de l'inscription. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.02 },
    tap: { scale: 0.98 },
  };

  const isLoading = isSubmitting || authLoading;

  return (
    <motion.div 
      className="max-w-md w-full mx-auto bg-white rounded-xl shadow-sm p-6 md:p-8 hover:shadow-md transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="mb-6">
        <div className="flex justify-center mb-2">
          <motion.div 
            className="bg-fertiloop-green text-white p-3 rounded-full" 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 400, 
              damping: 10,
              delay: 0.2
            }}
          >
            {formData.userType === "farmer" ? (
              <Leaf className="h-6 w-6" />
            ) : (
              <User className="h-6 w-6" />
            )}
          </motion.div>
        </div>
        <h2 className="text-center text-2xl font-bold text-gray-900">
          {formData.userType === "farmer" ? "Inscription agriculteur" : "Inscription utilisateur"}
        </h2>
        <p className="text-center text-gray-600 mt-1">
          Remplissez le formulaire pour vous inscrire
        </p>
      </div>

      <div className="flex space-x-2 mb-6">
        <motion.button
          type="button"
          onClick={() => handleTypeChange("farmer")}
          className={`flex-1 py-2 px-3 text-sm font-medium rounded-md ${
            formData.userType === "farmer"
              ? "bg-fertiloop-green text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          whileHover={{ y: -1 }}
          whileTap={{ y: 1 }}
          transition={{ duration: 0.2 }}
        >
          Agriculteur
        </motion.button>
        <motion.button
          type="button"
          onClick={() => handleTypeChange("household")}
          className={`flex-1 py-2 px-3 text-sm font-medium rounded-md ${
            formData.userType === "household"
              ? "bg-fertiloop-green text-white"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
          whileHover={{ y: -1 }}
          whileTap={{ y: 1 }}
          transition={{ duration: 0.2 }}
        >
          Particulier
        </motion.button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <div className="relative">
              <motion.input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Nom"
                className={`input-field ${fieldValidation.lastName ? "border-fertiloop-green" : ""}`}
                required
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              />
              {fieldValidation.lastName && (
                <motion.span 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-fertiloop-green"
                >
                  <Check size={16} />
                </motion.span>
              )}
            </div>
          </div>
          <div className="col-span-1">
            <div className="relative">
              <motion.input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Prénom"
                className={`input-field ${fieldValidation.firstName ? "border-fertiloop-green" : ""}`}
                required
                whileFocus={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
              />
              {fieldValidation.firstName && (
                <motion.span 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-fertiloop-green"
                >
                  <Check size={16} />
                </motion.span>
              )}
            </div>
          </div>
        </div>
        
        <div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Mail className="h-5 w-5 text-gray-400" />
            </div>
            <motion.input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              className={`input-field pl-10 ${fieldValidation.email ? "border-fertiloop-green" : ""}`}
              required
              whileFocus={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            />
            {fieldValidation.email && (
              <motion.span 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-fertiloop-green"
              >
                <Check size={16} />
              </motion.span>
            )}
          </div>
        </div>
        
        <div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Phone className="h-5 w-5 text-gray-400" />
            </div>
            <motion.input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Téléphone"
              className={`input-field pl-10 ${fieldValidation.phone ? "border-fertiloop-green" : ""}`}
              required
              whileFocus={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            />
            {fieldValidation.phone && (
              <motion.span 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-fertiloop-green"
              >
                <Check size={16} />
              </motion.span>
            )}
          </div>
        </div>
        
        <div>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <MapPin className="h-5 w-5 text-gray-400" />
            </div>
            <motion.input
              type="text"
              name="location"
              id="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Localisation"
              className={`input-field pl-10 ${fieldValidation.location ? "border-fertiloop-green" : ""}`}
              required
              whileFocus={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            />
            {fieldValidation.location && (
              <motion.span 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-fertiloop-green"
              >
                <Check size={16} />
              </motion.span>
            )}
          </div>
        </div>
        
        <div>
          <div className="relative">
            <motion.input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Mot de passe"
              className={`input-field ${fieldValidation.password ? "border-fertiloop-green" : ""}`}
              required
              whileFocus={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            />
            {fieldValidation.password && (
              <motion.span 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-fertiloop-green"
              >
                <Check size={16} />
              </motion.span>
            )}
          </div>
        </div>
        
        <div>
          <div className="relative">
            <motion.input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirmer le mot de passe"
              className={`input-field ${fieldValidation.confirmPassword ? "border-fertiloop-green" : ""}`}
              required
              whileFocus={{ scale: 1.01 }}
              transition={{ duration: 0.2 }}
            />
            {fieldValidation.confirmPassword && (
              <motion.span 
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-fertiloop-green"
              >
                <Check size={16} />
              </motion.span>
            )}
          </div>
        </div>
        
        <div>
          <motion.button
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            type="submit"
            className="w-full btn-primary flex justify-center items-center"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center">
                <Loader2 className="animate-spin mr-2 h-4 w-4" /> 
                Inscription en cours...
              </span>
            ) : (
              "S'inscrire"
            )}
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default RegistrationForm;
