import React, { useState } from 'react';
import { FaEdit, FaTrashAlt, FaCalendarAlt, FaUser, FaGavel, FaClock, FaCalendarCheck } from 'react-icons/fa';
import EditAppointmentSection from './EditAppointment';

interface ClientAppointment {
  appointment_id: number;
  client_id: number;
  lawyer_id: number;
  appointment_time: string;
  appointment_date: string;
  created_at: string;
  appointment_status: string;
}

const ManageAppointmentSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentAppointment, setCurrentAppointment] = useState<ClientAppointment | null>(null);
  const [appointments, setAppointments] = useState<ClientAppointment[]>([
    // Sample appointments data
    {
      appointment_id: 1,
      client_id: 101,
      lawyer_id: 201,
      appointment_time: '10:00 AM',
      appointment_date: '2024-01-15',
      created_at: '2023-12-20',
      appointment_status: 'Confirmed'
    },
    {
      appointment_id: 2,
      client_id: 102,
      lawyer_id: 202,
      appointment_time: '02:00 PM',
      appointment_date: '2024-01-20',
      created_at: '2023-12-22',
      appointment_status: 'Pending'
    },
    {
      appointment_id: 3,
      client_id: 103,
      lawyer_id: 203,
      appointment_time: '11:00 AM',
      appointment_date: '2024-01-22',
      created_at: '2023-12-25',
      appointment_status: 'Cancelled'
    },
    {
      appointment_id: 4,
      client_id: 104,
      lawyer_id: 204,
      appointment_time: '03:00 PM',
      appointment_date: '2024-01-25',
      created_at: '2023-12-30',
      appointment_status: 'Confirmed'
    },
    {
      appointment_id: 5,
      client_id: 105,
      lawyer_id: 205,
      appointment_time: '09:00 AM',
      appointment_date: '2024-01-28',
      created_at: '2024-01-02',
      appointment_status: 'Pending'
    },
    {
      appointment_id: 6,
      client_id: 106,
      lawyer_id: 206,
      appointment_time: '04:00 PM',
      appointment_date: '2024-01-30',
      created_at: '2024-01-05',
      appointment_status: 'Confirmed'
    }
  ]);


  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const filteredAppointments = appointments.filter(appointment => 
    appointment.client_id.toString().includes(searchTerm)
  );

  const handleEditAppointment = (appointment: ClientAppointment) => {
    setCurrentAppointment(appointment);
  };

  const handleSaveEditedAppointment = (editedAppointment: ClientAppointment) => {
    const updatedAppointments = appointments.map(app => 
      app.appointment_id === editedAppointment.appointment_id ? editedAppointment : app
    );
    setAppointments(updatedAppointments);
    setCurrentAppointment(null);
  };

  const handleCancelEdit = () => {
    setCurrentAppointment(null);
  };

  const removeAppointment = (appointmentId: number) => {
    setAppointments(appointments.filter(appointment => appointment.appointment_id !== appointmentId));
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      {currentAppointment ? (
        <EditAppointmentSection
          appointment={currentAppointment}
          onSave={handleSaveEditedAppointment}
          onCancel={handleCancelEdit}
        />
      ) : (
        <>
          <h1 className="text-2xl font-semibold mb-4 text-purple-600">Manage Appointments</h1>
          <div className="mb-6 flex items-center bg-white border border-purple-300 rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Search by Client ID"
              value={searchTerm}
              onChange={handleSearchChange}
              className="p-2 w-full focus:outline-none"
            />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-gray-700">
              <thead className="bg-purple-500 text-white">
                <tr>
                  <th className="p-3">ID</th>
                  <th>Client</th>
                  <th>Lawyer</th>
                  <th>Time</th>
                  <th>Date</th>
                  <th>Created</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredAppointments.map(appointment => (
                  <tr key={appointment.appointment_id} className="border-b hover:bg-gray-50">
                    <td className="p-3">{appointment.appointment_id}</td>
                    <td><FaUser className="inline mr-2 text-blue-500" />{appointment.client_id}</td>
                    <td><FaGavel className="inline mr-2 text-green-500" />{appointment.lawyer_id}</td>
                    <td><FaClock className="inline mr-2 text-orange-500" />{appointment.appointment_time}</td>
                    <td><FaCalendarAlt className="inline mr-2 text-teal-500" />{appointment.appointment_date}</td>
                    <td>{appointment.created_at}</td>
                    <td>
                      {appointment.appointment_status === 'Confirmed' ? (
                        <FaCalendarCheck className="text-green-500"/> 
                      ) : (
                        <span className="text-red-500">{appointment.appointment_status}</span>
                      )}
                    </td>
                    <td>
                    <button onClick={() => handleEditAppointment(appointment)} className="text-blue-500 hover:text-blue-700">
                        <FaEdit />
                      </button>
                      <button onClick={() => removeAppointment(appointment.appointment_id)} className="text-red-500 hover:text-red-700">
                        <FaTrashAlt />
                      </button>

                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </>
      )}
    </div>
  );
};

export default ManageAppointmentSection;
