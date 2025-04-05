
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import UserMenu from "./UserMenu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, Home, ShoppingBag, CreditCard, Truck } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import NotificationBell from "../notifications/NotificationBell";

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
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <motion.div
                className="flex items-center bg-white shadow-sm rounded-lg p-2 border border-gray-50"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  className="h-6 w-6 sm:h-7 sm:w-7 mr-1.5 sm:mr-2"
                  src="/lovable-uploads/feb1c2b3-ac7e-4e36-8d99-075a7106d0fb.png"
                  alt="Fertiloop Logo"
                />
                <div className="flex flex-col leading-none">
                  <span className="text-fertiloop-green font-bold text-sm sm:text-base">Fertiloop</span>
                  <span className="text-fertiloop-green/70 text-[0.6rem] hidden sm:inline">Closing the loop</span>
                </div>
              </motion.div>
            </Link>
            
            <nav className="hidden md:ml-6 md:flex md:space-x-4 lg:space-x-8">
              {mainNavItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className={cn(
                    "flex items-center px-2 lg:px-3 py-2 rounded-md text-sm font-medium transition-colors relative group",
                    isActive(item.href)
                      ? "text-fertiloop-green bg-fertiloop-green/10"
                      : "text-gray-600 hover:text-fertiloop-green hover:bg-fertiloop-green/5"
                  )}
                >
                  <item.icon className="w-4 h-4 mr-1.5 sm:w-5 sm:h-5 sm:mr-2" />
                  <span>{item.title}</span>
                  {item.badge && (
                    <Badge 
                      variant="default" 
                      className="ml-1.5 sm:ml-2 bg-fertiloop-green text-white text-xs"
                    >
                      {item.badge}
                    </Badge>
                  )}
                  <span className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-fertiloop-green transform origin-left transition-transform duration-300 scale-x-0",
                    isActive(item.href) ? "scale-x-100" : "group-hover:scale-x-100"
                  )}></span>
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="relative">
              <NotificationBell />
            </div>
            <div className="relative">
              <UserMenu />
            </div>
            
            <div className="flex md:hidden">
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-10 w-10 ml-1">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="p-0 w-[280px] sm:w-[350px]">
                  <nav className="flex flex-col gap-2 mt-4">
                    <div className="flex items-center mb-4 border-b pb-4 px-4">
                      <div className="bg-white p-2 rounded-lg shadow-sm mr-2">
                        <img
                          className="h-8 w-8"
                          src="/lovable-uploads/feb1c2b3-ac7e-4e36-8d99-075a7106d0fb.png"
                          alt="Fertiloop Logo"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-fertiloop-green font-bold text-lg">Fertiloop</span>
                        <span className="text-fertiloop-green/70 text-xs">Closing the loop</span>
                      </div>
                    </div>
                    
                    {mainNavItems.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className={cn(
                          "flex items-center py-3 text-base font-medium border-l-4 transition-colors",
                          isActive(item.href)
                            ? "border-fertiloop-green text-fertiloop-green bg-fertiloop-green/5"
                            : "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300"
                        )}
                        onClick={() => setIsOpen(false)}
                      >
                        <item.icon className="ml-3 mr-3 h-5 w-5" />
                        <span>{item.title}</span>
                        {item.badge && (
                          <Badge 
                            variant="default" 
                            className="ml-auto mr-4 bg-fertiloop-green text-white"
                          >
                            {item.badge}
                          </Badge>
                        )}
                      </Link>
                    ))}
                    <div className="pt-4 pb-3 border-t border-gray-200 mt-2">
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
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
