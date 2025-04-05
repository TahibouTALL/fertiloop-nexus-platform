
import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from "@/components/ui/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, TruckIcon, Leaf, DollarSign, Droplet, LifeBuoy, MapPin } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMobile = useIsMobile();
  
  const menuItems = [
    { icon: Home, label: "Tableau de bord", path: "/dashboard" },
    { icon: Droplet, label: "Gestion Biogaz", path: "/biogas-management" },
    { icon: Leaf, label: "Commandes Engrais", path: "/fertilizer-orders" },
    { icon: TruckIcon, label: "Collecte Déchets", path: "/waste-collection" },
    { icon: MapPin, label: "Logistique", path: "/logistics" },
    { icon: DollarSign, label: "Paiements", path: "/payments" },
    { icon: LifeBuoy, label: "Support", path: "/support" },
  ];
  
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar>
          <SidebarHeader className="border-b px-4 py-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-white shadow-sm border border-gray-100 flex items-center justify-center">
                <Leaf className="h-4 w-4 text-fertiloop-green" />
              </div>
              <span className="font-semibold text-lg">Fertiloop</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <div className="space-y-1 py-2">
              {menuItems.map((item) => (
                <Button
                  key={item.path}
                  variant={location.pathname === item.path ? "default" : "ghost"}
                  className={`w-full justify-start gap-2 h-auto py-2.5 ${
                    location.pathname === item.path
                      ? ""
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => navigate(item.path)}
                >
                  <item.icon className="h-4 w-4 flex-shrink-0" />
                  <span className="truncate">{item.label}</span>
                </Button>
              ))}
            </div>
          </SidebarContent>
          <SidebarFooter className="border-t p-4">
            <div className="text-xs text-center text-muted-foreground">
              © {new Date().getFullYear()} Fertiloop
            </div>
          </SidebarFooter>
        </Sidebar>
        
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="flex-1 p-3 sm:p-6 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
