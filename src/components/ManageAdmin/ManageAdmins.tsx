import React, { useState } from 'react';
import { 
    FaEdit, FaTrashAlt, FaPlus, FaSearch, FaUserShield, 
    FaEnvelope, FaPhone, FaMapMarkerAlt, FaCalendarAlt 
  } from 'react-icons/fa';
  
interface Admin {
  admin_id: number;
  first_name: string;
  last_name: string;
  email: string;
  ph_number: string;
  address: string;
  profile_picture: string;
  created_at: string;
  updated_at: string;
  account_type: string;
}
interface ManageAdminsSectionProps {
    onEditAdmin: (admin: Admin) => void;
  }

  const ManageAdminsSection: React.FC<ManageAdminsSectionProps> = ({ onEditAdmin }) => {
    const [searchTerm, setSearchTerm] = useState('');
  const admins: Admin[] = [
    {
      admin_id: 1,
      first_name: "Laura",
      last_name: "Wilson",
      email: "laura.wilson@example.com",
      ph_number: "+11234567890",
      address: "123 Elm Street, Metropolis",
      profile_picture: "/images/laura.jpg",
      created_at: "2020-06-15",
      updated_at: "2021-04-20",
      account_type: "Super Admin"
    },
    {
      admin_id: 2,
      first_name: "James",
      last_name: "Smith",
      email: "james.smith@example.com",
      ph_number: "+19876543210",
      address: "789 Pine Street, Gotham",
      profile_picture: "/images/james.jpg",
      created_at: "2019-09-10",
      updated_at: "2021-01-15",
      account_type: "Admin"
    }
    // ... more admin objects ...
  ];
  

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };



  const removeAdmin = (adminId: number): void => {
    // Implement the logic to remove an admin
    console.log('Removing admin with ID:', adminId);
  };

  const addAdmin = (): void => {
    // Implement the logic to add a new admin
    console.log('Adding a new admin');
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold mb-4 text-purple-600">Manage Admins</h1>
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center bg-white border border-purple-300 rounded-md overflow-hidden">
          <FaSearch className="ml-4 text-purple-500" />
          <input
            type="text"
            placeholder="Search Admins"
            value={searchTerm}
            onChange={handleSearchChange}
            className="p-2 w-full focus:outline-none"
          />
        </div>
        <button 
          onClick={addAdmin} 
          className="bg-purple-500 text-white p-2 rounded hover:bg-purple-700 flex items-center">
          <FaPlus className="mr-2" /> Add Admin
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-gray-700">
          <thead className="bg-purple-500 text-white">
            <tr>
              <th className="p-3">Profile</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Joined</th>
              <th>Updated</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {admins.filter(admin => `${admin.first_name} ${admin.last_name}`.toLowerCase().includes(searchTerm.toLowerCase()))
              .map(admin => (
                <tr key={admin.admin_id} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <img src={admin.profile_picture} alt={`${admin.first_name} ${admin.last_name}`} className="w-10 h-10 rounded-full" />
                  </td>
                  <td>
                    <FaUserShield className="inline mr-2 text-purple-500" />
                    {`${admin.first_name} ${admin.last_name}`}
                  </td>
                  <td>
                    <FaEnvelope className="inline mr-2 text-blue-500" />
                    {admin.email}
                  </td>
                  <td>
                    <FaPhone className="inline mr-2 text-green-500" />
                    {admin.ph_number}
                  </td>
                  <td>
                    <FaMapMarkerAlt className="inline mr-2 text-red-500" />
                    {admin.address}
                  </td>
                  <td>
                    <FaCalendarAlt className="inline mr-2 text-orange-500" />
                    {admin.created_at}
                  </td>
                  <td>
                    <FaCalendarAlt className="inline mr-2 text-teal-500" />
                    {admin.updated_at}
                  </td>
                  <td>
                  <button onClick={() => onEditAdmin(admin)} className="mr-2 text-blue-500 hover:text-blue-700">
                      <FaEdit />
                    </button>
                    <button onClick={() => removeAdmin(admin.admin_id)} className="text-red-500 hover:text-red-700">
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageAdminsSection;

