
import React, { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from 'sonner';
import { Session, User as SupabaseUser } from "@supabase/supabase-js";

// Définition des rôles disponibles
export type UserRole = "farmer" | "household" | "logistics" | "admin" | "restaurant" | "hotel";

// Interface utilisateur
export interface User {
  id: string;
  phone: string;
  role: UserRole;
  name: string;
  email?: string;
  location?: string;
}

// Interface du contexte d'authentification
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (userData: Omit<User, "id">, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  hasRole: (roles: UserRole | UserRole[]) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [session, setSession] = useState<Session | null>(null);
  const navigate = useNavigate();

  // Function to validate user role
  const validateUserRole = (role: string): UserRole => {
    const validRoles: UserRole[] = ["farmer", "household", "logistics", "admin", "restaurant", "hotel"];
    return validRoles.includes(role as UserRole) ? (role as UserRole) : "household";
  };

  // Fetch user profile data
  const fetchUserProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single();

      if (error) {
        console.error("Error fetching user profile:", error);
        return null;
      }

      return data;
    } catch (error) {
      console.error("Exception fetching user profile:", error);
      return null;
    }
  };

  // Initialize auth state
  useEffect(() => {
    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, currentSession) => {
        setSession(currentSession);
        
        if (currentSession && currentSession.user) {
          // Use setTimeout to prevent potential deadlock with Supabase auth state
          setTimeout(async () => {
            const profile = await fetchUserProfile(currentSession.user.id);
            
            if (profile) {
              setUser({
                id: currentSession.user.id,
                name: profile.name,
                phone: profile.phone,
                role: validateUserRole(profile.role),
                email: profile.email,
                location: profile.location
              });
            } else {
              // Fallback if profile is not found
              setUser(null);
            }
            
            setIsLoading(false);
          }, 0);
        } else {
          setUser(null);
          setIsLoading(false);
        }
      }
    );

    // THEN check for existing session
    supabase.auth.getSession().then(async ({ data: { session: currentSession } }) => {
      setSession(currentSession);
      
      if (currentSession && currentSession.user) {
        const profile = await fetchUserProfile(currentSession.user.id);
        
        if (profile) {
          setUser({
            id: currentSession.user.id,
            name: profile.name,
            phone: profile.phone,
            role: validateUserRole(profile.role),
            email: profile.email,
            location: profile.location
          });
        }
      }
      
      setIsLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      if (data.user) {
        const profile = await fetchUserProfile(data.user.id);
        
        if (profile) {
          setUser({
            id: data.user.id,
            name: profile.name,
            phone: profile.phone,
            role: validateUserRole(profile.role),
            email: profile.email,
            location: profile.location
          });
        }
      }
      
      navigate('/dashboard');
    } catch (error: any) {
      console.error("Login error:", error);
      toast.error(error.message || "Échec de la connexion. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  const signUp = async (userData: Omit<User, "id">, password: string) => {
    try {
      setIsLoading(true);
      
      // Make sure email is provided and use it for authentication
      if (!userData.email) {
        throw new Error("L'email est requis pour l'inscription");
      }
      
      // Create the user in Supabase auth using email
      const { data, error } = await supabase.auth.signUp({
        email: userData.email,
        password,
        options: {
          data: {
            name: userData.name,
            phone: userData.phone,
            role: userData.role,
            location: userData.location || null
          }
        }
      });

      if (error) {
        throw error;
      }

      if (data.user) {
        // The profile is created automatically using the database trigger
        toast.success("Inscription réussie ! Redirection vers votre tableau de bord.");
        
        // Wait briefly before redirecting to ensure the trigger completes
        setTimeout(() => {
          navigate('/dashboard');
        }, 1000);
      }
    } catch (error: any) {
      console.error("Signup error:", error);
      toast.error(error.message || "Échec de l'inscription. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setIsLoading(true);
      await supabase.auth.signOut();
      setUser(null);
      navigate('/login');
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const hasRole = (roles: UserRole | UserRole[]): boolean => {
    if (!user) return false;
    
    if (Array.isArray(roles)) {
      return roles.includes(user.role);
    }
    
    return user.role === roles;
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        signIn,
        signUp,
        signOut,
        hasRole
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
