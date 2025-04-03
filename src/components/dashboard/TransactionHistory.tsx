
import React from "react";
import { CalendarClock } from "lucide-react";
import StatusBadge from "./StatusBadge";

export interface Transaction {
  id: string;
  type: string;
  date: string;
  status: "completed" | "pending" | "in-progress" | "delivered";
  details?: string;
}

interface TransactionHistoryProps {
  transactions: Transaction[];
  title?: string;
}

const TransactionHistory = ({
  transactions,
  title = "Historique des transactions",
}: TransactionHistoryProps) => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-semibold text-xl text-gray-800">{title}</h2>
        <CalendarClock className="h-5 w-5 text-gray-400" />
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr className="text-left text-sm font-medium text-gray-500">
              <th className="py-3.5 px-4">Type</th>
              <th className="py-3.5 px-4">Date</th>
              <th className="py-3.5 px-4">Statut</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="hover:bg-gray-50">
                <td className="py-4 px-4">
                  <div className="text-sm font-medium text-gray-900">
                    {transaction.type}
                  </div>
                  {transaction.details && (
                    <div className="text-xs text-gray-500 mt-1">
                      {transaction.details}
                    </div>
                  )}
                </td>
                <td className="py-4 px-4 text-sm text-gray-500">{transaction.date}</td>
                <td className="py-4 px-4">
                  <StatusBadge status={transaction.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {transactions.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          Aucune transaction à afficher
        </div>
      )}
    </div>
  );
};

export default TransactionHistory;
