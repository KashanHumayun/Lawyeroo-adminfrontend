import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUser, FaCalendarAlt } from 'react-icons/fa';

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
    password: string; // Added password field
  }

interface EditAdminSectionProps {
  admin: Admin;
  onSave: (admin: Admin) => void;
  onBack: () => void;
}

const EditAdminSection: React.FC<EditAdminSectionProps> = ({
  admin,
  onSave,
  onBack,
}) => {
  const [editedAdmin, setEditedAdmin] = useState(admin);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedAdmin({ ...editedAdmin, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        <FieldWithIcon
          Icon={FaUser}
          id="first_name"
          name="first_name"
          value={editedAdmin.first_name}
          onChange={handleChange}
          placeholder="First Name"
        />
        <FieldWithIcon
          Icon={FaUser}
          id="last_name"
          name="last_name"
          value={editedAdmin.last_name}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <FieldWithIcon
          Icon={FaEnvelope}
          id="email"
          type="email"
          name="email"
          value={editedAdmin.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <FieldWithIcon
          Icon={FaPhone}
          id="ph_number"
          name="ph_number"
          value={editedAdmin.ph_number}
          onChange={handleChange}
          placeholder="Phone Number"
        />
        <FieldWithIcon
          Icon={FaMapMarkerAlt}
          id="address"
          name="address"
          value={editedAdmin.address}
          onChange={handleChange}
          placeholder="Address"
        />
        <FieldWithIcon
          Icon={FaCalendarAlt}
          id="account_type"
          name="account_type"
          value={editedAdmin.account_type}
          onChange={handleChange}
          placeholder="Account Type"
        />
      </div>
      {/* Save and Back Buttons */}
      <div className="flex justify-between mt-6">
        <button
          onClick={() => onSave(editedAdmin)}
          className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded shadow"
        >
          Save Changes
        </button>
        <button
          onClick={onBack}
          className="bg-gray-300 hover:bg-gray-400 text-purple-500 py-2 px-4 rounded shadow"
        >
          Back to Admin List
        </button>
      </div>
    </div>
  );
};

interface FieldWithIconProps {
    Icon: React.ComponentType;
    id: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
    type?: string;
  }
  
  const FieldWithIcon: React.FC<FieldWithIconProps> = ({
    Icon,
    id,
    name,
    value,
    onChange,
    placeholder,
    type = "text",
  }) => (
    <div className="mb-4 flex items-center border-b border-purple-300 py-2">
      <span className="text-purple-500 mr-3">
        <Icon />
      </span>
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
  
// Reuse FieldWithIcon component from your EditProfileSection
// ...

export default EditAdminSection;
