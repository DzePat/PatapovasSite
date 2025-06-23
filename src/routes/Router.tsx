import { Routes, Route , Navigate} from 'react-router-dom';
import React from 'react';
import MainPage from '../pages/MainPage';
import Dashboard from "../pages/Dashboard"
import { useAuth0 } from '@auth0/auth0-react';
import CollectionPage from '../pages/Collection';

const Router: React.FC = () => {
  const {isAuthenticated} = useAuth0();
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/Projects" element={<CollectionPage />} />
      <Route path="/dashboard" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" replace />
} />
    </Routes>
  );
}

export default Router;