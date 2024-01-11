import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaImage } from 'react-icons/fa';

interface Client {
  client_id: number;
  first_name: string;
  last_name: string;
  email: string;
  ph_number: string;
  address: string;
  password: string; // Note: It's unusual and unsafe to handle passwords this way
  created_at: string;
  updated_at: string;
  profile_picture: string;
  verified: boolean;
  account_type: string;
  preferences: string;
}

interface EditClientSectionProps {
  client: Client;
  onSave: (client: Client) => void;
  onBack: () => void;
}

const EditClientSection: React.FC<EditClientSectionProps> = ({ client, onSave, onBack }) => {
  const [editedClient, setEditedClient] = useState(client);
  const [profileImage, setProfileImage] = useState(client.profile_picture || '/default-profile.jpg');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedClient({ ...editedClient, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (event: ProgressEvent<FileReader>) => {
        if (event.target) {
          setProfileImage(event.target.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      {/* Profile Picture Section */}
      <div className="flex flex-col items-center mb-6">
        <img src={profileImage} alt="Profile" className="w-32 h-32 rounded-full object-cover border-4 border-purple-500" />
        <div className="flex items-center mt-3">
          <FaImage className="text-purple-500 mr-2" />
          <input type="file" id="profile_picture" name="profile_picture" onChange={handleImageChange} className="text-sm text-gray-700" />
        </div>
      </div>
      {/* Form Fields */}
      <div className="grid md:grid-cols-2 gap-6">
        <FieldWithIcon Icon={FaUser} id="first_name" name="first_name" value={editedClient.first_name} onChange={handleChange} placeholder="First Name" />
        <FieldWithIcon Icon={FaUser} id="last_name" name="last_name" value={editedClient.last_name} onChange={handleChange} placeholder="Last Name" />
        <FieldWithIcon Icon={FaEnvelope} id="email" type="email" name="email" value={editedClient.email} onChange={handleChange} placeholder="Email" />
        <FieldWithIcon Icon={FaPhone} id="ph_number" name="ph_number" value={editedClient.ph_number} onChange={handleChange} placeholder="Phone Number" />
        <FieldWithIcon Icon={FaMapMarkerAlt} id="address" name="address" value={editedClient.address} onChange={handleChange} placeholder="Address" />
        {/* Additional Fields */}
        <input type="text" id="preferences" name="preferences" value={editedClient.preferences} onChange={handleChange} placeholder="Preferences" className="col-span-2 border-b border-purple-300 py-2 px-2" />
      </div>
      {/* Save and Back Buttons */}
      <div className="flex justify-between mt-6">
        <button onClick={() => onSave(editedClient)} className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded shadow">
          Save Changes
        </button>
        <button onClick={onBack} className="bg-gray-300 hover:bg-gray-400 text-purple-500 py-2 px-4 rounded shadow">
          Back to Clients List
        </button>
      </div>
    </div>
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
  
export default EditClientSection;
