import React, { useState } from "react";
import {
  FaSearch,
  FaEdit,
  FaTrashAlt,
  FaBriefcase,
  FaUser,
  FaGavel,
  FaCalendar,
  FaCalendarAlt,
  FaInfoCircle,
} from "react-icons/fa";
import EditCaseSection from "./EditCaseSection";
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

const ManageCasesSection = () => {
  const [cases, setCases] = useState<Case[]>([
    {
      case_id: 1,
      client_id: 1001,
      lawyer_id: 2001,
      case_name: "Case 1",
      case_details: "Details of Case 1",
      created_at: "2023-01-01",
      updated_at: "2023-02-01",
      case_status: "Open",
    },
    {
      case_id: 2,
      client_id: 1002,
      lawyer_id: 2002,
      case_name: "Case 2",
      case_details: "Details of Case 2",
      created_at: "2023-02-15",
      updated_at: "2023-03-15",
      case_status: "Closed",
    },
    {
      case_id: 3,
      client_id: 1003,
      lawyer_id: 2003,
      case_name: "Case 3",
      case_details: "Details of Case 3",
      created_at: "2023-03-05",
      updated_at: "2023-04-05",
      case_status: "Pending",
    },
    // ... You can add more cases here
  ]);

  const [editingCase, setEditingCase] = useState<Case | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const editCase = (caseId: number) => {
    const selectedCase = cases.find((c) => c.case_id === caseId);
    if (selectedCase) {
      setEditingCase(selectedCase);
    }
  };

  const saveEditedCase = (updatedCase: Case) => {
    setCases(
      cases.map((c) => (c.case_id === updatedCase.case_id ? updatedCase : c))
    );
    setEditingCase(null);
  };

  const cancelEdit = () => {
    setEditingCase(null);
  };

  const removeCase = (caseId: number) => {
    setCases(cases.filter((c) => c.case_id !== caseId));
    // Implement the logic to remove a case
  };

  const filteredCases = cases.filter(
    (c) =>
      c.case_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.case_details.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.case_status.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      {editingCase ? (
        <EditCaseSection
          caseData={editingCase}
          onSave={saveEditedCase}
          onCancel={cancelEdit}
        />
      ) : (
        <>
          <h1 className="text-2xl font-semibold mb-4 text-purple-600 flex items-center">
            <FaBriefcase className="mr-2" /> Manage Cases
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
                  <th className="p-3">ID</th>
                  <th>Client ID</th>
                  <th>Lawyer ID</th>
                  <th>Case Name</th>
                  <th>Details</th>
                  <th>Created</th>
                  <th>Updated</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredCases.map((c) => (
                  <tr key={c.case_id} className="border-b hover:bg-gray-100">
                    <td className="p-3">{c.case_id}</td>
                    <td>
                      <FaUser className="inline mr-2 text-blue-500" />
                      {c.client_id}
                    </td>
                    <td>
                      <FaGavel className="inline mr-2 text-green-500" />
                      {c.lawyer_id}
                    </td>
                    <td>
                      <FaInfoCircle className="inline mr-2 text-teal-500" />
                      {c.case_name}
                    </td>
                    <td>{c.case_details}</td>
                    <td>
                      <FaCalendar className="inline mr-2 text-orange-500" />
                      {c.created_at}
                    </td>
                    <td>
                      <FaCalendarAlt className="inline mr-2 text-purple-500" />
                      {c.updated_at}
                    </td>
                    <td
                      className={`font-bold ${
                        c.case_status === "Open"
                          ? "text-green-500"
                          : c.case_status === "Closed"
                          ? "text-red-500"
                          : "text-yellow-500"
                      }`}
                    >
                      {c.case_status}
                    </td>
                    <td>
                      <button
                        onClick={() => editCase(c.case_id)}
                        className="mr-2 text-blue-500 hover:text-blue-700"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => removeCase(c.case_id)}
                        className="text-red-500 hover:text-red-700"
                      >
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

export default ManageCasesSection;
