import React, { ReactNode } from 'react';

interface IDashboardCardProps {
    title: string;
    children?: ReactNode; // Make children optional
    icon?: ReactNode; // Optional icon
}

const DashboardCard: React.FC<IDashboardCardProps> = ({ title, children, icon }) => (
  <div className="bg-white rounded-lg shadow p-4 flex flex-col items-start">
    <div className="flex items-center mb-2">
      {icon && <span className="mr-2 text-2xl">{icon}</span>} {/* Display icon if provided */}
      <h3 className="font-bold text-lg">{title}</h3>
    </div>
    {children && <div>{children}</div>} {/* Render children if provided */}
  </div>
);

export default DashboardCard;
