import { useState } from 'react';
import DashboardCard from '../../components/dashboard';
import SidebarItem from '../../components/sidebar';
import {
  FaUser,
  FaUserCircle,
  FaUsersCog,
  FaGavel,
  FaCalendarCheck,
  FaBriefcase,
  FaFileContract,
  FaHistory,
  FaSignOutAlt,
} from 'react-icons/fa';
const AdminDashboard = () => {
  const [selectedItem, setSelectedItem] = useState('profile');
  return (
    <div className="flex h-screen text-gray-700">
      {/* Sidebar */}
      {/* Sidebar */}
      <div className="w-1/6 bg-gradient-to-br from-purple-500 to-pink-500 p-6 text-white">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-white rounded-full mb-2 overflow-hidden">
            {/* Replace with actual logo */}
            <img src="dummy-logo.png" alt="Logo" className="object-cover object-center w-full h-full" />
          </div>
          <h2 className="text-xl font-semibold">Admin Panel</h2>
        </div>
        <SidebarItem 
          icon={<FaUserCircle className="text-3xl" />} 
          title="My Profile" 
          isSelected={selectedItem === 'profile'} 
          onClick={() => setSelectedItem('profile')}
        />
        <SidebarItem 
          icon={<FaUsersCog className="text-3xl" />} 
          title="Manage Admins" 
          isSelected={selectedItem === 'manageAdmins'} 
          onClick={() => setSelectedItem('manageAdmins')}
        />
        <SidebarItem 
          icon={<FaGavel className="text-3xl" />} 
          title="Manage Lawyers" 
          isSelected={selectedItem === 'manageLawyers'} 
          onClick={() => setSelectedItem('manageLawyers')}
        />
        <SidebarItem 
          icon={<FaCalendarCheck className="text-3xl" />} 
          title="Manage Appointments" 
          isSelected={selectedItem === 'manageAppointments'} 
          onClick={() => setSelectedItem('manageAppointments')}
        />
        <SidebarItem 
          icon={<FaBriefcase className="text-3xl" />} 
          title="Manage Cases" 
          isSelected={selectedItem === 'manageCases'} 
          onClick={() => setSelectedItem('manageCases')}
        />
        <SidebarItem 
          icon={<FaFileContract className="text-3xl" />} 
          title="Manage Reports" 
          isSelected={selectedItem === 'manageReports'} 
          onClick={() => setSelectedItem('manageReports')}
        />
        <SidebarItem 
          icon={<FaHistory className="text-3xl" />} 
          title="View Logs" 
          isSelected={selectedItem === 'viewLogs'} 
          onClick={() => setSelectedItem('viewLogs')}
        />
        <SidebarItem 
          icon={<FaUser className="text-3xl" />} 
          title="Manage Clients" 
          isSelected={selectedItem === 'manageClients'} 
          onClick={() => setSelectedItem('manageClients')}
        />
        <SidebarItem 
          icon={<FaSignOutAlt className="text-3xl" />} 
          title="Logout" 
          isSelected={selectedItem === 'logout'} 
          onClick={() => setSelectedItem('logout')}
        />
      </div>



      {/* Main Content */}
      <div className="w-5/6 p-6 bg-gray-100">
        <h2 className="text-2xl font-bold mb-6">Admin Dashboard</h2>
        <div className="grid grid-cols-3 gap-4">
          <DashboardCard title="Manage Lawyers">
            {/* Dummy Data for 'Manage Lawyers' */}
            <p>Number of Lawyers: 10</p>
            <p>Pending Approvals: 2</p>
          </DashboardCard>
          <DashboardCard title="Manage Appointments">
            {/* Dummy Data for 'Manage Appointments' */}
            <p>Upcoming Appointments: 5</p>
            <p>Rescheduled: 1</p>
          </DashboardCard>
          <DashboardCard title="Manage Clients">
            {/* Dummy Data for 'Manage Clients' */}
            <p>Active Clients: 20</p>
            <p>New Registrations: 3</p>
          </DashboardCard>
          {/* Add more cards as needed */}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
