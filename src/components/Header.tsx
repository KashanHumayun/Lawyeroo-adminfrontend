import React, { FC } from 'react';
import { FaSearch, FaBell, FaCog } from 'react-icons/fa';

interface HeaderProps {
  adminName: string;
  adminProfilePic: string;
}
const Header: FC<HeaderProps> = ({ adminName, adminProfilePic })=> {
    return (
<div className="bg-gradient-to-br from-purple-600 to-purple-500 p-4 flex items-center justify-between text-gray-800">
        <div className="flex items-center">
            {/* Search Bar */}
            <div className="relative text-gray-600">
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-3 py-2 rounded-full leading-none text-sm bg-white bg-opacity-50 hover:bg-opacity-70 focus:bg-opacity-70 transition-opacity duration-300"
              />
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
    
          <div className="flex items-center">
            {/* Icons */}
            <FaBell className="mx-4 text-xl text-gray-500 hover:text-gray-700 transition-colors duration-300" />
            <FaCog className="mx-4 text-xl text-gray-500 hover:text-gray-700 transition-colors duration-300" />
    
            {/* Admin Name and Profile Picture */}
            <span className="font-semibold text-lg mr-4">{adminName}</span>
            <img src={adminProfilePic} alt="Admin" className="h-10 w-10 rounded-full" />
          </div>
        </div>
      );
};


export default Header;
