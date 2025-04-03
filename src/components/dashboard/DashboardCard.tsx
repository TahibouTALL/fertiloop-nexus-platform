
import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface DashboardCardProps {
  title: string;
  description?: string;
  icon: ReactNode;
  link?: string;
  children?: ReactNode;
}

const DashboardCard = ({
  title,
  description,
  icon,
  link,
  children,
}: DashboardCardProps) => {
  const content = (
    <div className="dashboard-card">
      <div className="flex items-start">
        <div className="flex-shrink-0 bg-fertiloop-green/10 p-3 rounded-full">
          {icon}
        </div>
        <div className="ml-4 flex-1">
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
          {description && <p className="mt-1 text-sm text-gray-500">{description}</p>}
        </div>
      </div>
      {children && <div className="mt-4">{children}</div>}
      {link && (
        <div className="mt-4 text-right">
          <ArrowRight className="inline-block ml-1 h-4 w-4" />
        </div>
      )}
    </div>
  );

  if (link) {
    return <Link to={link} className="block">{content}</Link>;
  }

  return content;
};

export default DashboardCard;
