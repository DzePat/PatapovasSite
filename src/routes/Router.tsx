import { Routes, Route } from 'react-router-dom';
import React from 'react';
import MainPage from '../pages/MainPage';
import Dashboard from "../pages/Dashboard"
import CurrentProject from '../pages/Current';
import { useAuth0 } from '@auth0/auth0-react';

const Router: React.FC = () => {
  const {isAuthenticated} = useAuth0();
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/current" element={<CurrentProject />} />
      {isAuthenticated && (
        <Route path="/dashboard" element={<Dashboard />} />
      )}
    </Routes>
  );
}

export default Router;