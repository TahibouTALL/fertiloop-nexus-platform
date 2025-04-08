
import React from "react";

interface StatusBadgeProps {
  status: "completed" | "pending" | "in-progress" | "delivered";
}

const statusConfig = {
  completed: {
    label: "Complété",
    className: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300",
  },
  pending: {
    label: "Planifié",
    className: "bg-gray-100 text-gray-800 dark:bg-gray-800/50 dark:text-gray-300",
  },
  "in-progress": {
    label: "En cours",
    className: "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
  },
  delivered: {
    label: "Livré",
    className: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  },
};

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const config = statusConfig[status];

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.className}`}>
      {config.label}
    </span>
  );
};

export default StatusBadge;
