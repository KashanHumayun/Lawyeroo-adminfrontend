import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGavel, FaUniversity, FaStar, FaImage, FaDollarSign, FaCalendarAlt } from 'react-icons/fa';

interface Lawyer {
  lawyer_id: number;
  first_name: string;
  last_name: string;
  email: string;
  fees: string;
  ph_number: string;
  address: string;
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

interface EditLawyerSectionProps {
  lawyer: Lawyer;
  onSave: (lawyer: Lawyer) => void;
  onBack: () => void;
}

const EditLawyerSection: React.FC<EditLawyerSectionProps> = ({
  lawyer,
  onSave,
  onBack,
}) => {
  const [editedLawyer, setEditedLawyer] = useState(lawyer);
  const [profileImage, setProfileImage] = useState(lawyer.profile_picture || '/default-lawyer.jpg');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedLawyer({ ...editedLawyer, [e.target.name]: e.target.value });
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

      {/* Edit Fields */}
      <div className="grid md:grid-cols-2 gap-6">
        <FieldWithIcon Icon={FaUser} id="first_name" name="first_name" value={editedLawyer.first_name} onChange={handleChange} placeholder="First Name" />
        <FieldWithIcon Icon={FaUser} id="last_name" name="last_name" value={editedLawyer.last_name} onChange={handleChange} placeholder="Last Name" />
        <FieldWithIcon Icon={FaEnvelope} id="email" type="email" name="email" value={editedLawyer.email} onChange={handleChange} placeholder="Email" />
        <FieldWithIcon Icon={FaPhone} id="ph_number" name="ph_number" value={editedLawyer.ph_number} onChange={handleChange} placeholder="Phone Number" />
        <FieldWithIcon Icon={FaMapMarkerAlt} id="address" name="address" value={editedLawyer.address} onChange={handleChange} placeholder="Address" />
        <FieldWithIcon Icon={FaGavel} id="specializations" name="specializations" value={editedLawyer.specializations} onChange={handleChange} placeholder="Specializations" />
        <FieldWithIcon Icon={FaCalendarAlt} id="years_of_experience" name="years_of_experience" type="number" value={editedLawyer.years_of_experience.toString()} onChange={handleChange} placeholder="Years of Experience" />
        <FieldWithIcon Icon={FaUniversity} id="universities" name="universities" value={editedLawyer.universities} onChange={handleChange} placeholder="Universities" />
        <FieldWithIcon Icon={FaDollarSign} id="fees" name="fees" value={editedLawyer.fees} onChange={handleChange} placeholder="Fees" />
        <FieldWithIcon  Icon={FaStar} id="rating" name="rating" type="number" value={editedLawyer.rating.toString()} onChange={handleChange} placeholder="Rating" />
      </div>

      {/* Save and Back Buttons */}
      <div className="flex justify-between mt-6">
        <button onClick={() => onSave(editedLawyer)} className="bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded shadow">Save Changes</button>
        <button onClick={onBack} className="bg-gray-300 hover:bg-gray-400 text-purple-500 py-2 px-4 rounded shadow">Back to Lawyers</button>
      </div>
    </div>
  );
};

type FieldWithIconProps = {
  Icon: React.ComponentType;
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
}) => (
  <div className="mb-4 flex items-center border-b border-purple-300 py-2">
    <span className="text-purple-500 mr-3">
      <Icon />
    </span>
    <input type={type} id={id} name={name} value={value} onChange={onChange} placeholder={placeholder} className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
  </div>
);

export default EditLawyerSection;
