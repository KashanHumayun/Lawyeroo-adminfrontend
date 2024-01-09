import React, { ReactElement } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaRegCalendarAlt, FaImage } from 'react-icons/fa';
interface Admin {
    profile_picture: string;
    first_name: string;
    last_name: string;
    account_type: string;
    email: string;
    ph_number: string;
    address: string;
    created_at: string;
    updated_at: string;
  }
  
  interface MyProfileSectionProps {
    admin: Admin;
    onEditProfile: () => void;
  }
  
  const MyProfileSection: React.FC<MyProfileSectionProps> = ({ admin, onEditProfile }) => {
  
  return (
    <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      <div className="flex flex-col items-center mb-6">
        <img src={admin.profile_picture || '/public/ch_kashan.jpg'} alt="Admin" className="w-32 h-32 rounded-full object-cover border-4 border-purple-500" />
        <h2 className="text-2xl font-bold mt-4">{admin.first_name} {admin.last_name}</h2>
        <p className="text-purple-600">{admin.account_type}</p>
      </div>

      <div className="space-y-4">
        <ProfileInfo icon={<FaEnvelope />} info={admin.email} />
        <ProfileInfo icon={<FaPhone />} info={admin.ph_number} />
        <ProfileInfo icon={<FaMapMarkerAlt />} info={admin.address} />
        <ProfileInfo icon={<FaRegCalendarAlt />} info={`Joined: ${admin.created_at}`} />
        <ProfileInfo icon={<FaImage />} info={`Last Updated: ${admin.updated_at}`} />
      </div>
      <button 
        onClick={onEditProfile} 
        className="mt-4 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600"
      >
        Edit Profile
      </button>

    </div>
  );
};

type ProfileInfoProps = {
    icon: ReactElement;
    info: string;
  };
  
  const ProfileInfo: React.FC<ProfileInfoProps> = ({ icon, info }) => (
    <div className="flex items-center text-gray-700">
      <div className="text-lg text-purple-500 mr-3">{icon}</div>
      <p>{info}</p>
    </div>
  );
  

export default MyProfileSection;
