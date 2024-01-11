import React, { useState, useEffect } from 'react';
import { FaRegClock } from 'react-icons/fa';
interface LogEntry {
  log_id: number;
  timestamp: string;
  message: string;
  log_type: string;
  created_at: string;
}
const ViewLogsSection = () => {
    const [logs, setLogs] = useState<LogEntry[]>([
      // Sample logs, replace with actual log data retrieval
      {
        log_id: 1,
        timestamp: '2024-01-01 10:00:00',
        message: 'First log message',
        log_type: 'INFO',
        created_at: '2024-01-01 09:00:00'
      },
      {
        log_id: 2,
        timestamp: '2024-01-02 11:00:00',
        message: 'Second log message',
        log_type: 'ERROR',
        created_at: '2024-01-02 10:00:00'
      },
      // ...more logs
    ]);
  
    // Use useEffect to fetch logs if they are being loaded from a server
    useEffect(() => {
      // Fetch logs here and update state
    }, []);
  
    return (
      <div className="p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-semibold mb-4 text-purple-600">View Logs</h1>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-gray-700">
            <thead className="bg-purple-500 text-white">
              <tr>
                <th className="p-3">Log ID</th>
                <th>Timestamp</th>
                <th>Message</th>
                <th>Type</th>
                <th>Created At</th>
              </tr>
            </thead>
            <tbody>
              {logs.map(log => (
                <tr key={log.log_id} className="border-b hover:bg-gray-50">
                  <td className="p-3">{log.log_id}</td>
                  <td>
                    <FaRegClock className="inline mr-2" />
                    {log.timestamp}
                  </td>
                  <td>{log.message}</td>
                  <td>{log.log_type}</td>
                  <td>{log.created_at}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default ViewLogsSection;
  