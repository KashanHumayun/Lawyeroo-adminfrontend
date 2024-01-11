import React, { useState } from "react";
import axios from 'axios';

import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaImage, FaLock } from 'react-icons/fa';

interface Admin {
    admin_id?: number;
    first_name: string;
    last_name: string;
    email: string;
    ph_number: string;
    address: string;
    profile_picture: string;
    created_at?: string;
    updated_at?: string;
    account_type: string;
    password: string;
  }
  
  interface AddAdminSectionProps {
    onAdd: (admin: Admin) => void;
    onCancel: () => void;
  }
  
  const AddAdminSection: React.FC<AddAdminSectionProps> = ({ onAdd, onCancel }) => {
    const [newAdmin, setNewAdmin] = useState({
        first_name: '',
        last_name: '',
        email: '',
        ph_number: '',
        address: '',
        profile_picture: '',
        account_type: '',
        password: ''
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
      setNewAdmin({ ...newAdmin, profile_picture: e.target.files[0].name });
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewAdmin({ ...newAdmin, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Set default values if fields are empty
  const updatedAdmin = {
    ...newAdmin,
    account_type: newAdmin.account_type || 'Administrator',
    profile_picture: newAdmin.profile_picture || '/default.jpg'
  };

  try {
    const response = await axios.post('http://localhost:3000/api/register-admin', updatedAdmin);
    console.log(response.data); // Log the response from the server
    onAdd(updatedAdmin); // Update your UI
    alert('Admin added successfully');
  } catch (error) {
    console.error('Error adding admin:', error);
    alert('Error adding admin');
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
        <FieldWithIcon Icon={FaUser} id="first_name" name="first_name" value={newAdmin.first_name} onChange={handleChange} placeholder="First Name" />
        <FieldWithIcon Icon={FaUser} id="last_name" name="last_name" value={newAdmin.last_name} onChange={handleChange} placeholder="Last Name" />
        <FieldWithIcon Icon={FaEnvelope} id="email" type="email" name="email" value={newAdmin.email} onChange={handleChange} placeholder="Email" />
        <FieldWithIcon Icon={FaPhone} id="ph_number" name="ph_number" value={newAdmin.ph_number} onChange={handleChange} placeholder="Phone Number" />
        <FieldWithIcon Icon={FaMapMarkerAlt} id="address" name="address" value={newAdmin.address} onChange={handleChange} placeholder="Address" />
        <FieldWithIcon
        Icon={FaLock}
        id="password"
        name="password"
        type="password"
        value={newAdmin.password}
        onChange={handleChange}
        placeholder="Password"
      />

        {/* Additional Fields if needed */}
      </div>
      {/* Submit and Cancel Buttons */}
      <div className="flex justify-center mt-6">
        <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded shadow">
          Add Admin
        </button>
        <button type="button" onClick={onCancel} className="bg-gray-300 hover:bg-gray-400 text-purple-500 py-2 px-4 rounded shadow ml-4">
          Cancel
        </button>
      </div>
    </form>
  );
};
type FieldWithIconProps = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type?: string;
};

const FieldWithIcon: React.FC<FieldWithIconProps> = ({
  Icon,
  id,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
}) => {
  return (
    <div className="mb-4 flex items-center border-b border-purple-300 py-2">
      <Icon className="text-purple-500 mr-3" />
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
      />
    </div>
  );
};

export default AddAdminSection;
