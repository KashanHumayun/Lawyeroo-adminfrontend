import React from 'react';
import DashboardCard from './DashboardCard';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { FaGavel, FaUsers, FaChartBar, FaServer } from 'react-icons/fa'; // Icons for the cards

const DashboardSection = () => {
  // Example data for graphs
  const monthlyLawyerRegistrations = [
    { month: 'Jan', lawyers: 20 },
    { month: 'Feb', lawyers: 30 },
    // ... more data
  ];

  const monthlyClientRegistrations = [
    { month: 'Jan', clients: 25 },
    { month: 'Feb', clients: 35 },
    // ... more data
  ];

  // Total counts
  const totalLawyers = 200;
  const totalClients = 200;

  

  return (
    <div className="w-5/4 p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
      <div className="grid grid-cols-3 gap-4">
        
        {/* Lawyer Statistics Card */}
        <DashboardCard title="Lawyer Statistics" icon={<FaGavel className="text-purple-500" />}>
          <p>Total Lawyers: {totalLawyers}</p>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={monthlyLawyerRegistrations}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="lawyers" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </DashboardCard>

        {/* Client Statistics Card */}
        <DashboardCard title="Client Statistics" icon={<FaUsers className="text-blue-500" />}>
          <p>Total Clients: {totalClients}</p>
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={monthlyClientRegistrations}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="clients" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </DashboardCard>

        {/* Reports Card */}
        <DashboardCard title="Reports" icon={<FaChartBar className="text-green-500" />}>
          {/* Content for reports */}
        </DashboardCard>

        {/* Logs Card */}
        <DashboardCard title="System Logs" icon={<FaServer className="text-red-500" />}>
          {/* Content for logs */}
        </DashboardCard>

        {/* Additional cards as needed */}
      </div>
    </div>
  );
};

export default DashboardSection;
