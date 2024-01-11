import React, { useState, useEffect } from 'react';
import axios from 'axios';

import {
  FaEdit, FaTrashAlt, FaCheck, FaTimes, FaSearch, FaUserCircle,
  FaEnvelope, FaPhone, FaHome, FaBalanceScale, FaCalendarAlt, FaCalendarCheck, FaPlus, FaSpinner
} from 'react-icons/fa';
import AddClientSection from './AddClientSection';



// Assuming Client interface is defined elsewhere in your project
interface Client {
  client_id: number;
  first_name: string;
  last_name: string;
  email: string;
  ph_number: string;
  address: string;
  password: string; // Note: It's unusual and unsafe to handle passwords in this way
  created_at: string;
  updated_at: string;
  profile_picture: string;
  verified: boolean;
  account_type: string;
  preferences: string;
}
interface ManageClientsSectionProps {
  onEditClient: (client: Client) => void;
}


const ManageClientsSection: React.FC<ManageClientsSectionProps> = ({ onEditClient }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddClient, setShowAddClient] = useState(false);
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('http://localhost:3000/api/clients');
        setClients(response.data);
      } catch (error) {
        console.error('Error fetching clients:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchClients();
  }, []);

  

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };


  const removeClient = (clientId: number): void => {
    // Implement the logic to remove a client
    console.log('Removing client with ID:', clientId);
  };
  const addClient = () => {
    setShowAddClient(true); // Show the Add Client form
  };

  const onSaveNewClient = (newClient: Client) => {
    console.log('New Client Added:', newClient);
    setShowAddClient(false); // Hide the Add Client form after saving
  };

  const onCancelAddClient = () => {
    setShowAddClient(false); // Hide the Add Client form without saving
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
    {showAddClient ? (
      <AddClientSection onAdd={onSaveNewClient} onCancel={onCancelAddClient} />
    ) : (
      <>
        <h1 className="text-2xl font-semibold mb-4 text-purple-600">Manage Clients</h1>
        <div className="mb-6 flex items-center justify-between">
          <div className="flex items-center bg-white border border-purple-300 rounded-md overflow-hidden">
            <FaSearch className="ml-4 text-purple-500" />
            <input
              type="text"
              placeholder="Search Clients"
              value={searchTerm}
              onChange={handleSearchChange}
              className="p-2 w-full focus:outline-none"
            />
          </div>
          <button onClick={addClient} className="bg-purple-500 text-white p-2 rounded hover:bg-purple-700 flex items-center">
            <FaPlus className="mr-2" /> Add Client
          </button>
        </div>
        <div className="overflow-x-auto">
            {isLoading ? (
              <div className="flex justify-center items-center py-10">
                <FaSpinner className="animate-spin text-purple-500 text-4xl" />
              </div>
            ) : (        <table className="w-full text-left text-gray-700">
          <thead className="bg-purple-500 text-white">
            <tr>
              <th className="p-3">Profile</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Preferences</th>
              <th>Joined</th>
              <th>Updated</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.filter(client => `${client.first_name} ${client.last_name}`.toLowerCase().includes(searchTerm.toLowerCase()))
              .map(client => (
                <tr key={client.client_id} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <img src={client.profile_picture} alt={`${client.first_name} ${client.last_name}`} className="w-10 h-10 rounded-full" />
                  </td>
                  <td>
                    <FaUserCircle className="inline mr-2 text-purple-500" />
                    {`${client.first_name} ${client.last_name}`}
                  </td>
                  <td>
                    <FaEnvelope className="inline mr-2 text-green-500" />
                    {client.email}
                  </td>
                  <td>
                    <FaPhone className="inline mr-2 text-blue-500" />
                    {client.ph_number}
                  </td>
                  <td>
                    <FaHome className="inline mr-2 text-red-500" />
                    {client.address}
                  </td>
                  <td>
                  <FaBalanceScale className="inline mr-2 text-orange-500" />

                    {client.preferences}
                  </td>
                  <td>
                    <FaCalendarAlt className="inline mr-2 text-yellow-500" />
                    {client.created_at}
                  </td>
                  <td>
                    <FaCalendarCheck className="inline mr-2 text-orange-500" />
                    {client.updated_at}
                  </td>
                  <td>
                    {client.verified ? <FaCheck className="text-green-500" /> : <FaTimes className="text-red-500" />}
                  </td>
                  <td>
                  <button onClick={() => onEditClient(client)} className="mr-2 text-blue-500 hover:text-blue-700">
                      <FaEdit />
                    </button>

                    <button onClick={() => removeClient(client.client_id)} className="text-red-500 hover:text-red-700">
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
                            )}

      </div>
      </>)}
    </div>
  );
};

export default ManageClientsSection;
