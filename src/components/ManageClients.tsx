import React, { useState } from 'react';
import {
    FaEdit, FaTrashAlt, FaCheck, FaTimes, FaSearch, FaUserCircle,
    FaEnvelope, FaBalanceScale,FaPhone, FaHome, FaCalendarAlt, FaCalendarCheck
  } from 'react-icons/fa';

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

const ManageClientsSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const clients: Client[] = [
    {
      client_id: 1,
      first_name: "Emily",
      last_name: "Davis",
      email: "emily.davis@example.com",
      ph_number: "+11234567890",
      address: "456 Hill St, Springfield",
      password: "emilypassword", // Reminder: Handling passwords like this is not secure
      created_at: "2020-02-15",
      updated_at: "2021-05-20",
      profile_picture: "/images/emily.jpg",
      verified: true,
      account_type: "Standard",
      preferences: "Family Law, Real Estate"
    },
    {
      client_id: 2,
      first_name: "Michael",
      last_name: "Brown",
      email: "michael.brown@example.com",
      ph_number: "+19876543210",
      address: "789 Ocean Ave, Rivercity",
      password: "michaelPassword", // Reminder: Handling passwords like this is not secure
      created_at: "2019-11-10",
      updated_at: "2021-03-22",
      profile_picture: "/images/michael.jpg",
      verified: false,
      account_type: "Premium",
      preferences: "Corporate Law, Tax Law"
    }
    // ... more client objects ...
  ];
  

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  const editClient = (clientId: number): void => {
    // Implement the logic to edit a client
    console.log('Editing client with ID:', clientId);
  };

  const removeClient = (clientId: number): void => {
    // Implement the logic to remove a client
    console.log('Removing client with ID:', clientId);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold mb-4 text-purple-600">Manage Clients</h1>
      <div className="mb-6 flex items-center bg-white border border-purple-300 rounded-md overflow-hidden">
        <FaSearch className="ml-4 text-purple-500" />
        <input
          type="text"
          placeholder="Search Clients"
          value={searchTerm}
          onChange={handleSearchChange}
          className="p-2 w-full focus:outline-none"
        />
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
                    <button onClick={() => editClient(client.client_id)} className="mr-2 text-blue-500 hover:text-blue-700">
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
      </div>
    </div>
  );
};

export default ManageClientsSection;
