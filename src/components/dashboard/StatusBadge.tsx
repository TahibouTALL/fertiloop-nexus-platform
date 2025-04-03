
import React from "react";

interface StatusBadgeProps {
  status: "completed" | "pending" | "in-progress" | "delivered";
}

const statusConfig = {
  completed: {
    label: "Complété",
    className: "bg-green-100 text-green-800",
  },
  pending: {
    label: "Planifié",
    className: "bg-gray-100 text-gray-800",
  },
  "in-progress": {
    label: "En cours",
    className: "bg-fertiloop-yellow/20 text-fertiloop-yellow-dark",
  },
  delivered: {
    label: "Livré",
    className: "bg-fertiloop-blue/20 text-fertiloop-blue",
  },
};

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const config = statusConfig[status];

  return (
    <span className={`status-badge ${config.className}`}>
      {config.label}
    </span>
  );
};

export default StatusBadge;
