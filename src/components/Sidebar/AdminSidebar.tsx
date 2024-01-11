// AdminSidebar.jsx
import React from "react";
import SidebarItem from "./Sidebar";
import FullLogo from "../../assets/images/full_logo.png";
import {
  FaUserCircle,
  FaUsersCog,
  FaGavel,
  FaCalendarCheck,
  FaBriefcase,
  FaFileContract,
  FaHistory,
  FaUser,
  FaSignOutAlt,
  FaTachometerAlt,
} from "react-icons/fa";
interface AdminSidebarProps {
  selectedItem: string;
  setSelectedItem: (item: string) => void;
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({
  selectedItem,
  setSelectedItem,
}) => {
  return (
<div className="w-1/6 h-full bg-gradient-to-br from-purple-600 to-purple-500 p-6 text-white sticky top-0 ">
      <div className="flex flex-col items-center mb-5">
        <img
          src={FullLogo}
          alt="Logo"
          className="w-15 h-15 mb-5 transition duration-300 ease-in-out hover:scale-110"
        />
        <h2 className="text-xl font-semibold">Admin Panel</h2>
      </div>
      <SidebarItem
        icon={<FaTachometerAlt className="text-3xl" />} // Dashboard icon
        title="Dashboard"
        isSelected={selectedItem === "dashboard"}
        onClick={() => setSelectedItem("dashboard")}
      />
      <SidebarItem
        icon={<FaUserCircle className="text-3xl" />}
        title="My Profile"
        isSelected={selectedItem === "profile"}
        onClick={() => setSelectedItem("profile")}
      />
      <SidebarItem
        icon={<FaUsersCog className="text-3xl" />}
        title="Manage Admins"
        isSelected={selectedItem === "manageAdmins"}
        onClick={() => setSelectedItem("manageAdmins")}
      />
      <SidebarItem
        icon={<FaGavel className="text-3xl" />}
        title="Manage Lawyers"
        isSelected={selectedItem === "manageLawyers"}
        onClick={() => setSelectedItem("manageLawyers")}
      />
      <SidebarItem
        icon={<FaUser className="text-3xl" />}
        title="Manage Clients"
        isSelected={selectedItem === "manageClients"}
        onClick={() => setSelectedItem("manageClients")}
      />
      <SidebarItem
        icon={<FaCalendarCheck className="text-3xl" />}
        title="Manage Appointments"
        isSelected={selectedItem === "manageAppointments"}
        onClick={() => setSelectedItem("manageAppointments")}
      />
      <SidebarItem
        icon={<FaBriefcase className="text-3xl" />}
        title="Manage Cases"
        isSelected={selectedItem === "manageCases"}
        onClick={() => setSelectedItem("manageCases")}
      />
      <SidebarItem
        icon={<FaFileContract className="text-3xl" />}
        title="Manage Reports"
        isSelected={selectedItem === "manageReports"}
        onClick={() => setSelectedItem("manageReports")}
      />
      <SidebarItem
        icon={<FaHistory className="text-3xl" />}
        title="View Logs"
        isSelected={selectedItem === "viewLogs"}
        onClick={() => setSelectedItem("viewLogs")}
      />
      <SidebarItem
        icon={<FaSignOutAlt className="text-3xl" />}
        title="Logout"
        isSelected={selectedItem === "logout"}
        onClick={() => setSelectedItem("logout")}
      />
    </div>
  );
};

export default AdminSidebar;
