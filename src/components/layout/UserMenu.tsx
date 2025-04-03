
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LogOut, 
  User, 
  Settings, 
  Phone,
  Shield
} from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';

export const UserMenu = () => {
  const { user, isAuthenticated, signOut, hasRole } = useAuth();

  // Fonction pour obtenir les initiales de l'utilisateur
  const getUserInitials = () => {
    if (!user?.name) return 'U';
    
    const names = user.name.split(' ');
    if (names.length === 1) return names[0].charAt(0).toUpperCase();
    return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase();
  };

  // Fonction pour obtenir la couleur de l'avatar en fonction du rôle
  const getRoleColor = () => {
    if (!user) return 'bg-gray-300';
    
    switch (user.role) {
      case 'admin':
        return 'bg-red-500';
      case 'farmer':
        return 'bg-fertiloop-green';
      case 'logistics':
        return 'bg-blue-500';
      case 'household':
        return 'bg-amber-500';
      default:
        return 'bg-gray-300';
    }
  };

  // Fonction pour obtenir le libellé du rôle
  const getRoleLabel = () => {
    if (!user) return '';
    
    switch (user.role) {
      case 'admin':
        return 'Administrateur';
      case 'farmer':
        return 'Agriculteur';
      case 'logistics':
        return 'Logistique';
      case 'household':
        return 'Ménage';
      default:
        return '';
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="flex items-center space-x-2">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button asChild variant="ghost">
            <Link to="/register" className="text-sm">
              S'inscrire
            </Link>
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button asChild className="bg-fertiloop-green hover:bg-fertiloop-green-dark">
            <Link to="/login" className="text-sm flex items-center">
              <Phone className="mr-2 h-4 w-4" />
              Se connecter
            </Link>
          </Button>
        </motion.div>
      </div>
    );
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2 rounded-full p-1 transition-colors hover:bg-accent/20 focus-visible:outline-none"
        >
          <Avatar>
            <AvatarFallback className={getRoleColor()}>{getUserInitials()}</AvatarFallback>
          </Avatar>
        </motion.button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium">{user?.name}</p>
            <div className="flex items-center">
              <Phone className="h-3.5 w-3.5 text-muted-foreground mr-1" />
              <p className="text-xs text-muted-foreground">{user?.phone}</p>
            </div>
          </div>
          <Badge 
            variant="outline" 
            className="mt-2 flex items-center gap-1 bg-muted/50"
          >
            <Shield className="h-3 w-3" />
            <span className="text-xs">
              {getRoleLabel()}
            </span>
          </Badge>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to="/dashboard" className="flex w-full cursor-pointer items-center">
            <User className="mr-2 h-4 w-4" />
            <span>Mon compte</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link to="/settings" className="flex w-full cursor-pointer items-center">
            <Settings className="mr-2 h-4 w-4" />
            <span>Paramètres</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem 
          className="flex w-full cursor-pointer items-center text-destructive focus:text-destructive"
          onClick={signOut}
        >
          <LogOut className="mr-2 h-4 w-4" />
          <span>Déconnexion</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserMenu;
