import React, { useState } from "react";
import axios from 'axios';
import { FaUserCircle, FaEnvelope, FaPhone, FaMapMarkerAlt, FaImage, FaCalendarAlt } from 'react-icons/fa';

interface Client {
  client_id?: number;
  first_name: string;
  last_name: string;
  email: string;
  ph_number: string;
  address: string;
  created_at?: string;
  updated_at?: string;
  profile_picture: string;
  verified?: boolean;
  account_type: string;
  preferences: string;
}

interface AddClientSectionProps {
  onAdd: (client: Client) => void;
  onCancel: () => void;
}

const AddClientSection: React.FC<AddClientSectionProps> = ({ onAdd, onCancel }) => {
  const [newClient, setNewClient] = useState<Client>({
    first_name: '',
    last_name: '',
    email: '',
    ph_number: '',
    address: '',
    profile_picture: '',
    account_type: '',
    preferences: ''
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
      setNewClient({ ...newClient, profile_picture: e.target.files[0].name });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewClient({ ...newClient, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Additional fields set by default
      const clientData = {
        ...newClient,
        account_type: "Client",
        verified: false,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      };

      const response = await axios.post('http://localhost:3000/api/add-client', clientData);
      console.log(response.data); // Log the response
      alert('Client added successfully');
      onAdd(clientData); // Update your UI accordingly
    } catch (error) {
      console.error('Error adding client:', error);
      alert('Error adding client');
    }
  };



  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      {/* Profile Picture Upload */}
      <div className="flex flex-col items-center mb-6">
        <img src={profileImage} alt="Profile" className="w-32 h-32 rounded-full object-cover border-4 border-purple-500" />
        <div className="flex items-center mt-3">
          <FaImage className="text-purple-500 mr-2" />
          <input type="file" id="profile_picture" name="profile_picture" onChange={handleImageChange} className="text-sm text-gray-700" />
        </div>
      </div>
      {/* Form Fields */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* First Name */}
        <FieldWithIcon Icon={FaUserCircle} id="first_name" name="first_name" value={newClient.first_name} onChange={handleChange} placeholder="First Name" />
        {/* Last Name */}
        <FieldWithIcon Icon={FaUserCircle} id="last_name" name="last_name" value={newClient.last_name} onChange={handleChange} placeholder="Last Name" />
        {/* Email */}
        <FieldWithIcon Icon={FaEnvelope} id="email" type="email" name="email" value={newClient.email} onChange={handleChange} placeholder="Email" />
        {/* Phone Number */}
        <FieldWithIcon Icon={FaPhone} id="ph_number" name="ph_number" value={newClient.ph_number} onChange={handleChange} placeholder="Phone Number" />
        {/* Address */}
        <FieldWithIcon Icon={FaMapMarkerAlt} id="address" name="address" value={newClient.address} onChange={handleChange} placeholder="Address" />
        {/* Preferences */}
        <FieldWithIcon Icon={FaCalendarAlt} id="preferences" name="preferences" value={newClient.preferences} onChange={handleChange} placeholder="Preferences" />
      </div>
      {/* Submit and Cancel Buttons */}
      <div className="flex justify-center mt-6">
        <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded shadow">
          Add Client
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

export default AddClientSection;
