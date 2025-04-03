import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Trash2, Truck, Leaf, Cylinder, BarChart3, Calendar } from "lucide-react";
import TransactionHistory from "../components/dashboard/TransactionHistory";
import DashboardCard from "../components/dashboard/DashboardCard";

const userTransactions = [
  {
    id: "txn1",
    type: "Collecte d'engrais",
    date: "Aujourd'hui",
    status: "completed" as const,
  },
  {
    id: "txn2",
    type: "Collecte d'engrais",
    date: "22/04/2024",
    status: "completed" as const,
  },
  {
    id: "txn3",
    type: "Achat de biogaz",
    date: "21/04/2024",
    status: "completed" as const,
  },
  {
    id: "txn4",
    type: "Commande d'engrais",
    date: "19/04/2024",
    status: "delivered" as const,
  },
  {
    id: "txn5",
    type: "Commande d'engrais",
    date: "16/04/2024",
    status: "in-progress" as const,
  },
];

const Dashboard = () => {
  const [userRole, setUserRole] = useState<"farmer" | "household" | "restaurant" | "hotel" | "admin">("farmer");

  const handleRoleChange = (role: "farmer" | "household" | "restaurant" | "hotel" | "admin") => {
    setUserRole(role);
  };

  return (
    <div className="min-h-screen bg-fertiloop-gray">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <div>
            <Link to="/" className="flex items-center">
              <span className="text-fertiloop-green text-2xl font-bold">Fertiloop</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-4">
              <Link to="/notifications" className="nav-link">
                Notifications
              </Link>
              <Link to="/settings" className="nav-link">
                Paramètres
              </Link>
            </div>
            <div>
              <Link to="/profile" className="flex items-center">
                <div className="h-8 w-8 rounded-full bg-fertiloop-green text-white flex items-center justify-center">
                  <span className="font-medium text-sm">AB</span>
                </div>
                <span className="ml-2 text-sm font-medium text-gray-700 hidden md:block">
                  Amadou Bamba
                </span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
        </div>

        {/* Demo mode selector */}
        <div className="mb-8 bg-white p-4 rounded-lg shadow-sm">
          <h3 className="font-medium text-gray-700 mb-2">Mode de démonstration</h3>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => handleRoleChange("farmer")}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                userRole === "farmer"
                  ? "bg-fertiloop-green text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Agriculteur
            </button>
            <button
              onClick={() => handleRoleChange("household")}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                userRole === "household"
                  ? "bg-fertiloop-green text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Ménage
            </button>
            <button
              onClick={() => handleRoleChange("restaurant")}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                userRole === "restaurant"
                  ? "bg-fertiloop-green text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Restaurant
            </button>
            <button
              onClick={() => handleRoleChange("hotel")}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                userRole === "hotel"
                  ? "bg-fertiloop-green text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Hôtel
            </button>
            <button
              onClick={() => handleRoleChange("admin")}
              className={`px-3 py-2 rounded-md text-sm font-medium ${
                userRole === "admin"
                  ? "bg-fertiloop-green text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Admin
            </button>
          </div>
        </div>

        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Services disponibles
        </h2>

        {userRole === "farmer" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <DashboardCard
              title="Signalement"
              description="Demander une collecte d'engrais"
              icon={<Trash2 className="h-6 w-6 text-fertiloop-green" />}
              link="/waste-collection"
            />
            <DashboardCard
              title="Engrais"
              description="Commander de l'engrais"
              icon={<Leaf className="h-6 w-6 text-fertiloop-green" />}
              link="/fertilizer-orders"
            />
            <DashboardCard
              title="Biogaz"
              description="Commander du biogaz"
              icon={<Cylinder className="h-6 w-6 text-fertiloop-green" />}
              link="/biogas-management"
            />
          </div>
        )}

        {(userRole === "household" || userRole === "restaurant" || userRole === "hotel") && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <DashboardCard
              title="Signaler un bocal plein"
              description="Demande de collecte"
              icon={<Trash2 className="h-6 w-6 text-fertiloop-green" />}
              link="/waste-collection"
            />
            <DashboardCard
              title="Suivi des collectes"
              description=""
              icon={<Calendar className="h-6 w-6 text-fertiloop-green" />}
              link="/collection-tracking"
            >
              <div className="mt-2">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">03/12/2024</span>
                    <span className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-green-500 mr-1"></span>
                      Effectuée
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">28/11/2024</span>
                    <span className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-green-500 mr-1"></span>
                      Effectuée
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">22/11/2024</span>
                    <span className="flex items-center">
                      <span className="h-2 w-2 rounded-full bg-gray-300 mr-1"></span>
                      Planifiée
                    </span>
                  </div>
                </div>
              </div>
            </DashboardCard>
            <DashboardCard
              title="Gestion du biodigesteur"
              description=""
              icon={<BarChart3 className="h-6 w-6 text-fertiloop-green" />}
              link="/biodigester-status"
            >
              <div className="mt-4">
                <div className="flex items-end space-x-1">
                  <div className="bg-fertiloop-green h-4 w-4"></div>
                  <div className="bg-fertiloop-green h-5 w-4"></div>
                  <div className="bg-fertiloop-green h-6 w-4"></div>
                  <div className="bg-fertiloop-green h-8 w-4"></div>
                  <div className="bg-fertiloop-green h-10 w-4"></div>
                </div>
              </div>
            </DashboardCard>
          </div>
        )}

        {userRole === "admin" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <DashboardCard
              title="Utilisateurs"
              description="Gestion des utilisateurs"
              icon={<User className="h-6 w-6 text-fertiloop-green" />}
              link="/admin/users"
            />
            <DashboardCard
              title="Commandes"
              description="Gestion des commandes"
              icon={<ShoppingBag className="h-6 w-6 text-fertiloop-green" />}
              link="/admin/orders"
            />
            <DashboardCard
              title="Statistiques"
              description="Suivi des performances"
              icon={<BarChart3 className="h-6 w-6 text-fertiloop-green" />}
              link="/admin/stats"
            >
              <div className="mt-4 text-center">
                <span className="text-2xl font-bold text-fertiloop-green">+12,5%</span>
                <div className="text-xs text-gray-500 mt-1">Cette semaine</div>
              </div>
            </DashboardCard>
          </div>
        )}

        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Historique des transactions
        </h2>
        <TransactionHistory transactions={userTransactions} />
      </main>
    </div>
  );
};

export default Dashboard;

function User(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function ShoppingBag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}
