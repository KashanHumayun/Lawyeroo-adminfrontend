import React, { useState } from 'react';
import { FaSave, FaTimes, FaBriefcase, FaUser, FaGavel, FaCalendar, FaInfoCircle, FaCalendarAlt, FaListAlt } from 'react-icons/fa';
import { IconType } from 'react-icons/lib'; // Import IconType from react-icons

interface Case {
  case_id: number;
  client_id: number;
  lawyer_id: number;
  case_name: string;
  case_details: string;
  created_at: string;
  updated_at: string;
  case_status: string;
}

interface EditCaseSectionProps {
  caseData: Case;
  onSave: (updatedCase: Case) => void;
  onCancel: () => void;
}

const EditCaseSection: React.FC<EditCaseSectionProps> = ({ caseData, onSave, onCancel }) => {
  const [editedCase, setEditedCase] = useState(caseData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setEditedCase({ ...editedCase, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    onSave(editedCase); // Call onSave with the edited case data
  };
  
  return (
    <form onSubmit={handleSubmit} className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">

    <div className="bg-gray-100 p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
      <FieldWithIcon Icon={FaBriefcase} id="case_id" name="case_id" value={editedCase.case_id.toString()} onChange={handleChange} placeholder="Case ID" disabled color="#136edd" />
<FieldWithIcon Icon={FaUser} id="client_id" name="client_id" value={editedCase.client_id.toString()} onChange={handleChange} placeholder="Client ID" color="#0d0d4a" />
<FieldWithIcon Icon={FaGavel} id="lawyer_id" name="lawyer_id" value={editedCase.lawyer_id.toString()} onChange={handleChange} placeholder="Lawyer ID" color="#d518b9" />
<FieldWithIcon Icon={FaInfoCircle} id="case_name" name="case_name" value={editedCase.case_name} onChange={handleChange} placeholder="Case Name" color="#f03005" />
<FieldWithIcon Icon={FaCalendar} id="created_at" name="created_at" value={editedCase.created_at} onChange={handleChange} placeholder="Created At" color="#c54500" />
<FieldWithIcon Icon={FaCalendarAlt} id="updated_at" name="updated_at" value={editedCase.updated_at} onChange={handleChange} placeholder="Updated At" color="#00834e" />
        <div className="col-span-2">
          <label htmlFor="case_details" className="block text-gray-700 text-sm font-bold mb-2">Case Details:</label>
          <textarea id="case_details" name="case_details" value={editedCase.case_details} onChange={handleChange} rows={4} className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="col-span-2">
          <label htmlFor="case_status" className="block text-gray-700 text-sm font-bold mb-2">Case Status:</label>
          <div className="flex items-center border-b border-purple-300 py-2">
            <FaListAlt className="text-purple-500 mr-3" />
            <select id="case_status" name="case_status" value={editedCase.case_status} onChange={handleChange} className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none">
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex justify-between mt-6">
        <button type="submit" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          <FaSave className="inline mr-2" />Save
        </button>
        <button type="button" onClick={onCancel} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          <FaTimes className="inline mr-2" />Cancel
        </button>
      </div>
    </div>
    </form>
  );
};

interface FieldWithIconProps {
    Icon: IconType;
    id: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    placeholder?: string;
    disabled?: boolean;
    color?: string; // Add this line
  }
  
  
  const FieldWithIcon: React.FC<FieldWithIconProps> = ({ Icon, id, name, value, onChange, placeholder, disabled, color }) => {
    return (
      <div className="flex items-center border-b border-gray-300 py-2">
        <Icon className="mr-3" style={{ color: color || 'inherit' }} /> {/* Use color prop here */}
        <input
          id={id}
          name={name}
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className="appearance-none bg-transparent border-none w-full text-gray-700 leading-tight focus:outline-none"
        />
      </div>
    );
  };
  
  
export default EditCaseSection;
