
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import { DataProvider } from "./context/DataContext";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
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
              
              {/* Routes protégées */}
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
              <Route path="*" element={<NotFound />} />
            </Routes>
          </DataProvider>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
