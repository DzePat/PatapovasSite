import './index.css'
import App from './App';
import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter } from 'react-router-dom';

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Auth0Provider 
      domain={domain}
      clientId={clientId}
      authorizationParams={{
          redirect_uri: `${window.location.origin}/dashboard`,
          audience: `${import.meta.env.VITE_AUTH0_AUDIENCE}`
      }}
    >
      <BrowserRouter> 
        <App />
      </BrowserRouter> 
    </Auth0Provider>
  </React.StrictMode>
);
