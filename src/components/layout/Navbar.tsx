
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, ShoppingBag, CreditCard, Truck, Bell, User } from "lucide-react";
import { 
  NavigationMenu, 
  NavigationMenuContent, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  NavigationMenuTrigger 
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

const mainNavItems = [
  {
    title: "Tableau de bord",
    href: "/dashboard",
    icon: Home
  },
  {
    title: "Commandes",
    href: "/fertilizer-orders",
    icon: ShoppingBag,
    badge: 2
  },
  {
    title: "Paiements",
    href: "/payments",
    icon: CreditCard
  },
  {
    title: "Suivi",
    href: "/waste-collection",
    icon: Truck,
    badge: 1
  }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-fertiloop-green text-2xl font-bold">Fertiloop</span>
            </Link>
            
            <div className="hidden md:ml-10 md:flex md:space-x-6">
              {/* Desktop Navigation */}
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors relative group",
                    isActive(item.href)
                      ? "text-fertiloop-green bg-fertiloop-green/10"
                      : "text-gray-600 hover:text-fertiloop-green hover:bg-fertiloop-green/5"
                  )}
                >
                  <item.icon className="w-5 h-5 mr-2" />
                  <span>{item.title}</span>
                  {item.badge && (
                    <Badge 
                      variant="default" 
                      className="ml-2 bg-fertiloop-green text-white"
                    >
                      {item.badge}
                    </Badge>
                  )}
                  {/* Animated underline effect */}
                  <span className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-fertiloop-green transform origin-left transition-transform duration-300 scale-x-0",
                    isActive(item.href) ? "scale-x-100" : "group-hover:scale-x-100"
                  )}></span>
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            {/* Notifications */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                  <span className="sr-only">Notifications</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-72">
                <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">Commande confirmée</p>
                    <p className="text-xs text-gray-500">Votre commande d'engrais a été confirmée</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">Collecte planifiée</p>
                    <p className="text-xs text-gray-500">Une collecte est prévue pour demain</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium">Paiement reçu</p>
                    <p className="text-xs text-gray-500">Nous avons bien reçu votre paiement</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="justify-center">
                  <Link to="/notifications" className="text-fertiloop-green font-medium text-sm">
                    Voir toutes les notifications
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            {/* User account */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-2">
                  <div className="h-8 w-8 rounded-full bg-fertiloop-green text-white flex items-center justify-center">
                    <span className="font-medium text-sm">AB</span>
                  </div>
                  <span className="ml-1 text-sm font-medium text-gray-700 hidden lg:block">
                    Amadou Bamba
                  </span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Mon compte</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profil</span>
                </DropdownMenuItem>
                <DropdownMenuItem>Paramètres</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Se déconnecter</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-fertiloop-green"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="pt-2 pb-4 space-y-1">
            {mainNavItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center px-4 py-3 text-base font-medium border-l-4 transition-colors",
                  isActive(item.href)
                    ? "border-fertiloop-green text-fertiloop-green bg-fertiloop-green/5"
                    : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300"
                )}
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="mr-4 h-5 w-5" />
                <span>{item.title}</span>
                {item.badge && (
                  <Badge 
                    variant="default" 
                    className="ml-auto bg-fertiloop-green text-white"
                  >
                    {item.badge}
                  </Badge>
                )}
              </Link>
            ))}
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-fertiloop-green text-white flex items-center justify-center">
                    <span className="font-medium text-sm">AB</span>
                  </div>
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium text-gray-800">Amadou Bamba</div>
                  <div className="text-sm font-medium text-gray-500">amadou@example.com</div>
                </div>
                <Button variant="ghost" size="icon" className="ml-auto relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-0 right-0 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white"></span>
                </Button>
              </div>
              <div className="mt-3 space-y-1 px-2">
                <Link
                  to="/profile"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  Profil
                </Link>
                <Link
                  to="/settings"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  Paramètres
                </Link>
                <Link
                  to="/logout"
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  onClick={() => setIsOpen(false)}
                >
                  Se déconnecter
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
