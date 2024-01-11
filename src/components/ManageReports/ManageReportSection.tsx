import React, { useState } from 'react';
import { FaEdit,FaUser,FaCalendarCheck,FaTrashAlt, FaFileAlt, FaCalendar, FaSearch } from 'react-icons/fa';

interface Report {
  report_id: number;
  reporter_id:number;
  report_text: string;
  status: string;
  reported_at: string;
}
const ManageReportsSection = () => {
    const [reports, setReports] = useState<Report[]>([
        // Sample reports
        {
          report_id: 1,
          reporter_id: 1,
          report_text: "Report text 1",
          status: "Open",
          reported_at: "2024-01-01"
        },
        {
          report_id: 2,
          reporter_id: 2,
          report_text: "Report text 2",
          status: "Open",
          reported_at: "2024-01-02"
        },
        {
          report_id: 3,
          reporter_id: 3,
          report_text: "Report text 3",
          status: "Open",
          reported_at: "2024-01-03"
        },
        {
          report_id: 4,
          reporter_id: 4,
          report_text: "Report text 4",
          status: "Open",
          reported_at: "2024-01-04"
        },
        {
          report_id: 5,
          reporter_id: 5,
          report_text: "Report text 5",
          status: "Open",
          reported_at: "2024-01-05"
        },
        {
          report_id: 6,
          reporter_id: 6,
          report_text: "Report text 6",
          status: "Open",
          reported_at: "2024-01-06"
        },
        {
          report_id: 7,
          reporter_id: 7,
          report_text: "Report text 7",
          status: "Open",
          reported_at: "2024-01-07"
        }
        // Add more reports as needed
      ]);
      
  
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    };
  
    const filteredReports = reports.filter(report => 
        report.report_text.toLowerCase().includes(searchTerm.toLowerCase()) ||
        report.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
        report.reporter_id.toString().includes(searchTerm)
      );
      
  
    const removeReport = (reportId: number) => {
      setReports(reports.filter(report => report.report_id !== reportId));
    };
  
    return (
        <div className="p-6 bg-white shadow-md rounded-lg">
          <h1 className="text-2xl font-semibold mb-4 text-purple-600 flex items-center">
            <FaFileAlt className="mr-2" /> Manage Reports
          </h1>
          <div className="mb-6 flex items-center bg-white border border-purple-300 rounded-md overflow-hidden">
            <FaSearch className="ml-4 text-purple-500" />
            <input
              type="text"
              placeholder="Search Clients"
              value={searchTerm}
              onChange={handleSearchChange}
              className="p-2 w-full focus:outline-none"
            />
          </div>
          <div className="overflow-x-auto">
          <table className="w-full text-left text-gray-700">
  <thead className="bg-purple-500 text-white">
    <tr>
      <th className="p-3">Report ID</th>
      <th>Reporter ID</th>
      <th>Report Text</th>
      <th>Status</th>
      <th>Reported At</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {filteredReports.map(report => (
      <tr key={report.report_id} className="border-b hover:bg-gray-100">
        <td className="p-3"><FaFileAlt className="inline mr-2 text-brown-500" />{report.report_id}</td>
        <td><FaUser className="inline mr-2 text-blue-500" />{report.reporter_id}</td>
        <td><FaEdit className="inline mr-2 text-green-500" />{report.report_text}</td>
        <td className={`font-bold ${report.status === 'Open' ? 'text-green-500' : 'text-red-500'}`}>
          <FaCalendarCheck className="inline mr-2" />{report.status}
        </td>
        <td><FaCalendar className="inline mr-2 text-purple-950" />{report.reported_at}</td>
        <td>

          <button onClick={() => removeReport(report.report_id)} className="text-red-500 hover:text-red-700">
            <FaTrashAlt />
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

          </div>
        </div>
      );
      
  };
  
  export default ManageReportsSection;
  