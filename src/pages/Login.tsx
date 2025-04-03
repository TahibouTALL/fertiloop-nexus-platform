
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";
import { Loader2, User, Mail, Lock, EyeOff, Eye } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/layout/Navbar";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { signIn, isLoading } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Veuillez remplir tous les champs");
      return;
    }

    setIsSubmitting(true);
    try {
      await signIn(email, password);
    } catch (error) {
      console.error("Login error:", error);
      // Error is already handled in the signIn function
    } finally {
      setIsSubmitting(false);
    }
  };

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.02 },
    tap: { scale: 0.98 },
  };

  const loading = isLoading || isSubmitting;

  return (
    <div className="min-h-screen bg-fertiloop-beige-light">
      <Navbar />
      <div className="max-w-md mx-auto pt-16 pb-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-xl shadow-sm p-8 hover:shadow-md transition-all duration-300"
        >
          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-fertiloop-green rounded-full flex items-center justify-center mb-4">
              <User className="text-white w-8 h-8" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Connexion</h2>
            <p className="mt-2 text-sm text-gray-600">
              Entrez vos identifiants pour accéder à votre compte
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <motion.input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fertiloop-green focus:border-transparent"
                  required
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </div>

            <div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <motion.input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Mot de passe"
                  className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fertiloop-green focus:border-transparent"
                  required
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-gray-600 focus:outline-none"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-fertiloop-green focus:ring-fertiloop-green border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-600"
                >
                  Se souvenir de moi
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-fertiloop-blue hover:text-fertiloop-blue-dark"
                >
                  Mot de passe oublié?
                </a>
              </div>
            </div>

            <motion.button
              variants={buttonVariants}
              initial="initial"
              whileHover="hover"
              whileTap="tap"
              type="submit"
              className="w-full bg-fertiloop-green hover:bg-fertiloop-green-dark text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 flex justify-center items-center"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center">
                  <Loader2 className="animate-spin mr-2 h-4 w-4" />
                  Connexion en cours...
                </span>
              ) : (
                "Se connecter"
              )}
            </motion.button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Vous n'avez pas de compte?{" "}
              <Link
                to="/register"
                className="font-medium text-fertiloop-blue hover:text-fertiloop-blue-dark"
              >
                S'inscrire
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
