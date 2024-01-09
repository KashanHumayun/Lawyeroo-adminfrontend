import React, { useState } from 'react';
import { 
    FaEdit, FaTrashAlt, FaCheck, FaTimes, FaSearch, FaUserTie, 
    FaUniversity, FaStar, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBalanceScale 
  } from 'react-icons/fa';
  
// Assuming Lawyer interface is defined elsewhere in your project
interface Lawyer {
  lawyer_id: number;
  first_name: string;
  last_name: string;
  email: string;
  fees:string;
  ph_number: string;
  address: string;
  password: string; // Note: It's unusual and unsafe to handle passwords in such a way
  specializations: string;
  years_of_experience: number;
  universities: string;
  rating: number;
  created_at: string;
  updated_at: string;
  profile_picture: string;
  verified: boolean;
  account_type: string;
}
interface ManageLawyersSectionProps {
  onEditLawyer: (lawyer: Lawyer) => void;
}

const ManageLawyersSection: React.FC<ManageLawyersSectionProps> = ({ onEditLawyer }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const lawyers: Lawyer[] = [
    {
      lawyer_id: 1,
      first_name: "Alice",
      last_name: "Johnson",
      email: "alice.johnson@example.com",
      fees:'20$',
      ph_number: "+123456789",
      address: "123 Main St, Townsville",
      password: "alicepassword", // Note: Storing passwords like this is not recommended for security reasons
      specializations: "Criminal Law",
      years_of_experience: 5,
      universities: "University A",
      rating: 4.5,
      created_at: "2020-01-01",
      updated_at: "2021-01-01",
      profile_picture: "/images/alice.jpg",
      verified: true,
      account_type: "Lawyer"
    },
    {
      lawyer_id: 2,
      first_name: "Bob",
      last_name: "Smith",
      email: "bob.smith@example.com",
      fees:'25$',
      ph_number: "+987654321",
      address: "456 Side St, Villagetown",
      password: "bobpassword", // Note: Storing passwords like this is not recommended for security reasons
      specializations: "Family Law",
      years_of_experience: 7,
      universities: "University B",
      rating: 4.7,
      created_at: "2019-05-15",
      updated_at: "2021-06-20",
      profile_picture: "/images/bob.jpg",
      verified: false,
      account_type: "Lawyer"
    }
    // ... more lawyer objects ...
  ];
  

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  const removeLawyer = (lawyerId: number): void => {
    // Implement the logic to remove a lawyer
    console.log('Removing lawyer with ID:', lawyerId);
    // This typically involves calling an API to delete the lawyer from the database
  };
 
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold mb-4 text-purple-600">Manage Lawyers</h1>
      <div className="mb-6 flex items-center bg-white border border-purple-300 rounded-md overflow-hidden">
        <FaSearch className="ml-4 text-purple-500" />
        <input
          type="text"
          placeholder="Search Lawyers"
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
              <th>Specializations</th>
              <th>Experience</th>
              <th>Education</th>
              <th>Rating</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {lawyers.filter(lawyer => `${lawyer.first_name} ${lawyer.last_name}`.toLowerCase().includes(searchTerm.toLowerCase()))
              .map(lawyer => (
                <tr key={lawyer.lawyer_id} className="border-b hover:bg-gray-50">
                  <td className="p-3">
                    <img src={lawyer.profile_picture} alt={`${lawyer.first_name} ${lawyer.last_name}`} className="w-10 h-10 rounded-full" />
                  </td>
                  <td>
                    <FaUserTie className="inline mr-2 text-purple-500" />
                    {`${lawyer.first_name} ${lawyer.last_name}`}
                  </td>
                  <td>
                    <FaEnvelope className="inline mr-2 text-blue-500" />
                    {lawyer.email}
                  </td>
                  <td>
                    <FaPhone className="inline mr-2 text-green-500" />
                    {lawyer.ph_number}
                  </td>
                  <td>
                    <FaMapMarkerAlt className="inline mr-2 text-red-500" />
                    {lawyer.address}
                  </td>
                  <td>
                    <FaBalanceScale className="inline mr-2 text-orange-500" />
                    {lawyer.specializations}
                  </td>
                  <td>
                    {lawyer.years_of_experience} years
                  </td>
                  <td>
                    <FaUniversity className="inline mr-2 text-teal-500" />
                    {lawyer.universities}
                  </td>
                  <td>
                  <FaStar className="inline mr-2 text-yellow-400" />
{lawyer.rating}</td>
                  <td>
                    {lawyer.verified ? <FaCheck className="text-green-500" /> : <FaTimes className="text-red-500" />}
                  </td>
                  <td>
                  <button onClick={() => onEditLawyer(lawyer)} className="text-blue-500 hover:text-blue-700">
                      <FaEdit />
                    </button>
                    <button onClick={() => removeLawyer(lawyer.lawyer_id)} className="text-red-500 hover:text-red-700">
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

export default ManageLawyersSection;

