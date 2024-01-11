import React, { ElementType } from 'react';
import { Navigate, Route } from 'react-router-dom';

interface ProtectedRouteProps {
  component: ElementType;
  path: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component, path }) => {
  const isAuthenticated = localStorage.getItem('authToken') !== null;

  return (
    <Route 
      path={path}
      element={isAuthenticated ? <Component /> : <Navigate to="/login" />}
    />
  );
};

export default ProtectedRoute;
