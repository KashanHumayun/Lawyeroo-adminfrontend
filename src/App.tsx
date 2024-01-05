import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminRegisterPage from './pages/admin/AdminRegister';
import LoginPage  from './pages/login';
import AdminDashboardPage from './pages/admin/AdminDashboard';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/register" element={<AdminRegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<AdminDashboardPage />} />

        {/* Other routes can be added here */}
      </Routes>
    </Router>
  );
}

export default App;
