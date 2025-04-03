
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Home, ArrowLeft } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import { Button } from '@/components/ui/button';

const AccessDenied = () => {
  return (
    <div className="min-h-screen bg-fertiloop-beige-light">
      <Navbar />
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 10,
              delay: 0.2
            }}
            className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-red-100"
          >
            <Shield className="h-12 w-12 text-red-600" />
          </motion.div>

          <h1 className="mt-6 text-3xl font-extrabold text-gray-900">
            Accès refusé
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500">
            Vous n'avez pas les autorisations nécessaires pour accéder à cette page.
          </p>

          <div className="mt-10 flex justify-center space-x-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild>
                <Link to="/dashboard" className="flex items-center">
                  <Home className="mr-2 h-4 w-4" />
                  Tableau de bord
                </Link>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" asChild>
                <Link to="/" className="flex items-center">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Retour à l'accueil
                </Link>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AccessDenied;
