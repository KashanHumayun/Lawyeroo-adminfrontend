import React, { useState } from "react";
import { FaUserEdit,  FaClock, FaCalendarAlt, FaCheck, FaTimes } from 'react-icons/fa';

interface Appointment {
  appointment_id: number;
  client_id: number;
  lawyer_id: number;
  appointment_time: string;
  appointment_date: string;
  created_at: string;
  appointment_status: string;
}

interface EditAppointmentSectionProps {
  appointment: Appointment;
  onSave: (appointment: Appointment) => void;
  onCancel: () => void;
}
interface EditAppointmentSectionProps {
    appointment: Appointment;
    onSave: (appointment: Appointment) => void;
    onCancel: () => void;
  }
  
const EditAppointmentSection: React.FC<EditAppointmentSectionProps> = ({ appointment, onSave, onCancel }) => {
  const [editedAppointment, setEditedAppointment] = useState(appointment);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedAppointment({ ...editedAppointment, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(editedAppointment);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4 text-purple-600 flex items-center">
        <FaUserEdit className="mr-2" />Edit Appointment
      </h2>
      <div className="mb-4">
        <label htmlFor="client_id" className="block mb-2 text-sm font-medium text-gray-700">Client ID:</label>
        <input type="number" id="client_id" name="client_id" value={editedAppointment.client_id} onChange={handleChange} className="border border-gray-300 p-2 rounded w-full"/>
      </div>
      <div className="mb-4">
        <label htmlFor="lawyer_id" className="block mb-2 text-sm font-medium text-gray-700">Lawyer ID:</label>
        <input type="number" id="lawyer_id" name="lawyer_id" value={editedAppointment.lawyer_id} onChange={handleChange} className="border border-gray-300 p-2 rounded w-full"/>
      </div>
      <div className="mb-4">
        <label htmlFor="appointment_time" className="block mb-2 text-sm font-medium text-gray-700">Appointment Time:</label>
        <div className="flex items-center border border-gray-300 p-2 rounded">
          <FaClock className="text-gray-500 mr-2" />
          <input type="text" id="appointment_time" name="appointment_time" value={editedAppointment.appointment_time} onChange={handleChange} className="w-full border-none focus:ring-transparent"/>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="appointment_date" className="block mb-2 text-sm font-medium text-gray-700">Appointment Date:</label>
        <div className="flex items-center border border-gray-300 p-2 rounded">
          <FaCalendarAlt className="text-gray-500 mr-2" />
          <input type="date" id="appointment_date" name="appointment_date" value={editedAppointment.appointment_date} onChange={handleChange} className="w-full border-none focus:ring-transparent"/>
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="appointment_status" className="block mb-2 text-sm font-medium text-gray-700">Status:</label>
        <input type="text" id="appointment_status" name="appointment_status" value={editedAppointment.appointment_status} onChange={handleChange} className="border border-gray-300 p-2 rounded w-full"/>
      </div>
      <div className="flex justify-end space-x-4">
        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded flex items-center">
          <FaCheck className="mr-2" />Save
        </button>
        <button type="button" onClick={onCancel} className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded flex items-center">
          <FaTimes className="mr-2" />Cancel
        </button>
      </div>
    </form>
  );
};

export default EditAppointmentSection;
