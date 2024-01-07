import React, { ReactNode } from 'react';

interface IDashboardCardProps {
    title: string;
    children: ReactNode;
}

const DashboardCard: React.FC<IDashboardCardProps> = ({ title, children }) => (
  <div className="bg-white rounded-lg shadow p-4">
    <h3 className="font-bold text-lg">{title}</h3>
    {children}
  </div>
);

export default DashboardCard;
