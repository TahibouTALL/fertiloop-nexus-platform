
import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth, UserRole } from '@/hooks/useAuth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
}

const ProtectedRoute = ({ children, allowedRoles }: ProtectedRouteProps) => {
  const { isAuthenticated, hasRole, isLoading } = useAuth();
  const location = useLocation();

  // Afficher un indicateur de chargement si l'authentification est en cours
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-fertiloop-green"></div>
      </div>
    );
  }

  // Rediriger vers la connexion si l'utilisateur n'est pas authentifié
  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Vérifier les autorisations de rôle si spécifiées
  if (allowedRoles && allowedRoles.length > 0) {
    const hasPermission = allowedRoles.some(role => hasRole(role));
    
    if (!hasPermission) {
      // Rediriger vers une page d'accès refusé ou le tableau de bord
      return <Navigate to="/access-denied" replace />;
    }
  }

  return <>{children}</>;
};

export default ProtectedRoute;
