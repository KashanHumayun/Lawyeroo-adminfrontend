import React, { useState } from 'react';
import axios from 'axios';
import { FaUser, FaGavel, FaHourglassStart, FaEnvelope, FaPhone, FaMapMarkerAlt, FaUniversity, FaStar, FaDollarSign, FaImage } from 'react-icons/fa';

interface Lawyer {
  first_name: string;
  last_name: string;
  email: string;
  fees: string;
  ph_number: string;
  address: string;
  password:string;
  specializations: string;
  universities: string;
  years_of_experience: number;
  rating: number;
  profile_picture: string;
  account_type: string;
  verified: boolean;
}

interface AddLawyerSectionProps {
  onAdd: (lawyer: Lawyer) => void;
  onCancel: () => void;
}

const AddLawyerSection: React.FC<AddLawyerSectionProps> = ({ onAdd, onCancel }) => {
  const [newLawyer, setNewLawyer] = useState<Lawyer>({
    first_name: '',
    last_name: '',
    email: '',
    fees: '',
    ph_number: '',
    password: 'password@123',
    address: '',
    specializations: '',
    universities: '',
    years_of_experience: 0,
    rating: 0,
    profile_picture: '',
    account_type: 'Lawyer', // Default value
    verified: false,        // Default value

  });
  const [profileImage, setProfileImage] = useState('/default-profile.jpg');

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        if (event.target) {
          setProfileImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
      setNewLawyer({ ...newLawyer, profile_picture: e.target.files[0].name });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewLawyer({ ...newLawyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/add-lawyer', newLawyer);
      console.log(response.data); // Log the response
      alert('Lawyer added successfully');
      onAdd(newLawyer); // Update your UI accordingly
    } catch (error) {
      console.error('Error adding lawyer:', error);
      alert('Error adding lawyer');
    }
  };


  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="flex flex-col items-center mb-6">
        <img src={profileImage} alt="Profile" className="w-32 h-32 rounded-full object-cover border-4 border-purple-500" />
        <div className="flex items-center mt-3">
          <FaImage className="text-purple-500 mr-2" />
          <input type="file" id="profile_picture" name="profile_picture" onChange={handleImageChange} className="text-sm text-gray-700" />
        </div>
      </div>
      {/* Form Fields */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="mb-4 flex items-center border-b border-purple-300 py-2">
          <FaUser className="text-purple-500 mr-3" />
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={newLawyer.first_name}
            onChange={handleChange}
            placeholder="First Name"
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
          />
        </div>
        {/* Last Name Field */}
  <div className="mb-4 flex items-center border-b border-purple-300 py-2">
    <FaUser className="text-purple-500 mr-3" />
    <input
      type="text"
      id="last_name"
      name="last_name"
      value={newLawyer.last_name}
      onChange={handleChange}
      placeholder="Last Name"
      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
    />
  </div>

  {/* Email Field */}
  <div className="mb-4 flex items-center border-b border-purple-300 py-2">
    <FaEnvelope className="text-blue-500 mr-3" />
    <input
      type="email"
      id="email"
      name="email"
      value={newLawyer.email}
      onChange={handleChange}
      placeholder="Email"
      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
    />
  </div>

  {/* Phone Number Field */}
  <div className="mb-4 flex items-center border-b border-purple-300 py-2">
    <FaPhone className="text-green-500 mr-3" />
    <input
      type="text"
      id="ph_number"
      name="ph_number"
      value={newLawyer.ph_number}
      onChange={handleChange}
      placeholder="Phone Number"
      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
    />
  </div>

  {/* Address Field */}
  <div className="mb-4 flex items-center border-b border-purple-300 py-2">
    <FaMapMarkerAlt className="text-red-500 mr-3" />
    <input
      type="text"
      id="address"
      name="address"
      value={newLawyer.address}
      onChange={handleChange}
      placeholder="Address"
      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
    />
  </div>
 {/* Fees Field */}
 <div className="mb-4 flex items-center border-b border-purple-300 py-2">
    <FaDollarSign className="text-green-500 mr-3" />
    <input
      type="text"
      id="fees"
      name="fees"
      value={newLawyer.fees}
      onChange={handleChange}
      placeholder="Fees (e.g., $100/hr)"
      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
    />
  </div>

  {/* Specializations Field */}
  <div className="mb-4 flex items-center border-b border-purple-300 py-2">
    <FaGavel className="text-orange-500 mr-3" />
    <input
      type="text"
      id="specializations"
      name="specializations"
      value={newLawyer.specializations}
      onChange={handleChange}
      placeholder="Specializations"
      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
    />
  </div>

  {/* Universities Field */}
  <div className="mb-4 flex items-center border-b border-purple-300 py-2">
    <FaUniversity className="text-teal-500 mr-3" />
    <input
      type="text"
      id="universities"
      name="universities"
      value={newLawyer.universities}
      onChange={handleChange}
      placeholder="Universities Attended"
      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
    />
  </div>

  {/* Years of Experience Field */}
  <div className="mb-4 flex items-center border-b border-purple-300 py-2">
    <FaHourglassStart className="text-blue-500 mr-3" />
    <input
      type="number"
      id="years_of_experience"
      name="years_of_experience"
      value={newLawyer.years_of_experience}
      onChange={handleChange}
      placeholder="Years of Experience"
      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
    />
  </div>

  {/* Rating Field */}
  <div className="mb-4 flex items-center border-b border-purple-300 py-2">
    <FaStar className="text-yellow-400 mr-3" />
    <input
      type="number"
      step="0.1"
      id="rating"
      name="rating"
      value={newLawyer.rating}
      onChange={handleChange}
      placeholder="Rating (1-5)"
      className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
    />
  </div>

        {/* Repeat the above structure for last name, email, phone number, etc. */}
      </div>
      {/* Submit and Cancel Buttons */}
      <div className="flex justify-center mt-6">
        <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded shadow">
          Add Lawyer
        </button>
        <button type="button" onClick={onCancel} className="bg-gray-300 hover:bg-gray-400 text-purple-500 py-2 px-4 rounded shadow ml-4">
          Cancel
        </button>
      </div>

    </form>
  );
};

export default AddLawyerSection;
