import React from "react";
import {
  FaUser,
  FaUserCircle,
  FaUserPlus,
  FaUsersCog,
  FaGavel,
  FaCalendarCheck,
  FaBriefcase,
  FaFileContract,
  FaHistory,
  FaSignOutAlt,
} from "react-icons/fa";

const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-gradient-to-r from-purple-200 to-pink-200">
      {/* Side Navigation */}
      <div className="w-1/6 bg-white p-6 shadow-xl">
        <h2 className="font-bold text-2xl text-purple-700 mb-6">
          Admin Dashboard
        </h2>
        <ul className="space-y-4 text-lg">
          <li className="group flex items-center text-purple-500 hover:text-purple-700 transition duration-300">
            <FaUserCircle className="mr-3 group-hover:scale-125 text-2xl transition-transform duration-300" />
            <span className="group-hover:inline-block hidden">My Profile</span>
          </li>
          <li className="group flex items-center text-green-500 hover:text-green-700 transition duration-300">
            <FaUserPlus className="mr-3 group-hover:scale-125 text-2xl transition-transform duration-300" />
            <span className="group-hover:inline-block hidden">
              Add New Admin
            </span>
          </li>
          <li className="group flex items-center text-blue-500 hover:text-blue-700 transition duration-300">
            <FaUsersCog className="mr-3 group-hover:scale-125 text-2xl transition-transform duration-300" />
            <span className="group-hover:inline-block hidden">
              Manage Admins
            </span>
          </li>
          <li className="group flex items-center text-red-500 hover:text-red-700 transition duration-300">
            <FaGavel className="mr-3 group-hover:scale-125 text-2xl transition-transform duration-300" />
            <span className="group-hover:inline-block hidden">
              Manage Lawyers
            </span>
          </li>
          <li className="group flex items-center text-orange-500 hover:text-orange-700 transition duration-300">
            <FaUser className="mr-3 group-hover:scale-125 text-2xl transition-transform duration-300" />
            <span className="group-hover:inline-block hidden">
              Manage Clients
            </span>
          </li>
          <li className="group flex items-center text-yellow-500 hover:text-yellow-700 transition duration-300">
            <FaCalendarCheck className="mr-3 group-hover:scale-125 text-2xl transition-transform duration-300" />
            <span className="group-hover:inline-block hidden">
              Manage Appointments
            </span>
          </li>
          <li className="group flex items-center text-indigo-500 hover:text-indigo-700 transition duration-300">
            <FaBriefcase className="mr-3 group-hover:scale-125 text-2xl transition-transform duration-300" />
            <span className="group-hover:inline-block hidden">
              Manage Cases
            </span>
          </li>
          <li className="group flex items-center text-pink-500 hover:text-pink-700 transition duration-300">
            <FaFileContract className="mr-3 group-hover:scale-125 text-2xl transition-transform duration-300" />
            <span className="group-hover:inline-block hidden">
              Manage Reports
            </span>
          </li>
          <li className="group flex items-center text-gray-500 hover:text-gray-700 transition duration-300">
            <FaHistory className="mr-3 group-hover:scale-125 text-2xl transition-transform duration-300" />
            <span className="group-hover:inline-block hidden">View Logs</span>
          </li>
          <li className="group flex items-center text-red-600 hover:text-red-800 transition duration-300">
            <FaSignOutAlt className="mr-3 group-hover:scale-125 text-2xl transition-transform duration-300" />
            <span className="group-hover:inline-block hidden">Logout</span>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="w-5/6 p-6">
        <h3 className="font-bold text-xl text-purple-700">
          Welcome to Your Dashboard
        </h3>
        {/* Content goes here */}
      </div>
    </div>
  );
};

export default AdminDashboard;
