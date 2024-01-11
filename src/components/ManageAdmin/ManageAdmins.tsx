import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  FaEdit, FaTrashAlt, FaPlus, FaSearch, FaUserShield, 
  FaEnvelope, FaPhone, FaSpinner, FaMapMarkerAlt, FaCalendarAlt 
} from 'react-icons/fa';
import AddAdminSection from './AddAdminSection';

interface Admin {
  admin_id: string;
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
  const [showAddAdmin, setShowAddAdmin] = useState(false);
  const [admins, setAdmins] = useState<Admin[]>([]);
  const [isLoading, setIsLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        setIsLoading(true); // Start loading
        const response = await axios.get('http://localhost:3000/api/admins');
        setAdmins(response.data);
        setIsLoading(false); // End loading

      } catch (error) {
        console.error('Error fetching admins:', error);
        setIsLoading(false); // End loading

      }
    };

    fetchAdmins();
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const addAdmin = () => {
    setShowAddAdmin(true);
  };

  const onSaveNewAdmin = (newAdmin: Admin) => {
    console.log('New Admin Added:', newAdmin);
    setShowAddAdmin(false);
  };

  const onCancelAddAdmin = () => {
    setShowAddAdmin(false);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      {showAddAdmin ? (
        <AddAdminSection onAdd={onSaveNewAdmin} onCancel={onCancelAddAdmin} />
      ) : (
        <>
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
            <button onClick={addAdmin} className="bg-purple-500 text-white p-2 rounded hover:bg-purple-700 flex items-center">
              <FaPlus className="mr-2" /> Add Admin
            </button>
          </div>
        <div className="overflow-x-auto">
        {isLoading ? (
              <div className="flex justify-center items-center py-10">
                <FaSpinner className="animate-spin text-purple-500 text-4xl" />
              </div>
            ) : (

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
          )}

        </div>
      </>
      
      )}
    </div>
  );
};

export default ManageAdminsSection;
