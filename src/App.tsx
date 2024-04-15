import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/Login';
import AdminDashboardPage from './pages/admin/AdminDashboard';
import ProtectedRoute from './pages/protectedRoutes'; // Import the ProtectedRoute component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/admin/dashboard" element={<AdminDashboardPage />} />

        {/* Protected Route for Admin Dashboard */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute component={AdminDashboardPage} path="/admin/dashboard" />
          } 
        />

        {/* Other routes can be added here */}
      </Routes>
    </Router>
  );
}

export default App;
