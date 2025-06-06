
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import { DataProvider } from "./context/DataContext";
import { ThemeProvider } from "./context/ThemeContext";
import Index from "./pages/Index";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import BiogasManagement from "./pages/BiogasManagement";
import FertilizerOrders from "./pages/FertilizerOrders";
import Support from "./pages/Support";
import NotFound from "./pages/NotFound";
import PagePayments from "./pages/PagePayments";
import WasteCollection from "./pages/WasteCollection";
import AccessDenied from "./pages/AccessDenied";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import Logistics from "./pages/Logistics";
import DemoNotifications from "./pages/DemoNotifications";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import Logout from "./pages/Logout";
import Services from "./pages/Services";
import FertilizerGuides from "./pages/FertilizerGuides";
import CollectionTracking from "./pages/CollectionTracking";
import BiodigesterStatus from "./pages/BiodigesterStatus";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark">
      <div className="dark">
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AuthProvider>
              <DataProvider>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/access-denied" element={<AccessDenied />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/mission" element={<Index />} /> {/* Redirige vers la section mission sur la page d'accueil */}
                  <Route path="/produit" element={<Index />} /> {/* Redirige vers la section produit sur la page d'accueil */}
                  <Route path="/faq" element={<Index />} /> {/* Redirige vers la section FAQ sur la page d'accueil */}
                  <Route path="/contact" element={<Index />} /> {/* Redirige vers la section contact sur la page d'accueil */}
                  <Route path="/get-started" element={<Register />} /> {/* Redirige vers la page d'inscription */}
                  
                  <Route path="/dashboard" element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  } />
                  <Route path="/biogas-management" element={
                    <ProtectedRoute allowedRoles={["admin", "logistics"]}>
                      <BiogasManagement />
                    </ProtectedRoute>
                  } />
                  <Route path="/fertilizer-orders" element={
                    <ProtectedRoute allowedRoles={["farmer", "admin"]}>
                      <FertilizerOrders />
                    </ProtectedRoute>
                  } />
                  <Route path="/payments" element={
                    <ProtectedRoute>
                      <PagePayments />
                    </ProtectedRoute>
                  } />
                  <Route path="/waste-collection" element={
                    <ProtectedRoute allowedRoles={["household", "logistics", "admin"]}>
                      <WasteCollection />
                    </ProtectedRoute>
                  } />
                  <Route path="/logistics" element={
                    <ProtectedRoute allowedRoles={["logistics", "admin"]}>
                      <Logistics />
                    </ProtectedRoute>
                  } />
                  <Route path="/support" element={
                    <ProtectedRoute>
                      <Support />
                    </ProtectedRoute>
                  } />
                  <Route path="/demo-notifications" element={
                    <ProtectedRoute>
                      <DemoNotifications />
                    </ProtectedRoute>
                  } />
                  
                  <Route path="/profile" element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  } />
                  <Route path="/settings" element={
                    <ProtectedRoute>
                      <Settings />
                    </ProtectedRoute>
                  } />
                  <Route path="/logout" element={
                    <ProtectedRoute>
                      <Logout />
                    </ProtectedRoute>
                  } />
                  
                  <Route path="/fertilizer-guides" element={
                    <ProtectedRoute allowedRoles={["farmer", "admin"]}>
                      <FertilizerGuides />
                    </ProtectedRoute>
                  } />
                  <Route path="/collection-tracking" element={
                    <ProtectedRoute allowedRoles={["household", "restaurant", "hotel", "admin"]}>
                      <CollectionTracking />
                    </ProtectedRoute>
                  } />
                  <Route path="/biodigester-status" element={
                    <ProtectedRoute allowedRoles={["household", "restaurant", "hotel", "admin"]}>
                      <BiodigesterStatus />
                    </ProtectedRoute>
                  } />

                  <Route path="*" element={<NotFound />} />
                </Routes>
              </DataProvider>
            </AuthProvider>
          </BrowserRouter>
        </TooltipProvider>
      </div>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
