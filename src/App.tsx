import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminRegister from './pages/admin/AdminRegister';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/admin/register" element={<AdminRegister />} />
        {/* Other routes can be added here */}
      </Routes>
    </Router>
  );
}

export default App;
