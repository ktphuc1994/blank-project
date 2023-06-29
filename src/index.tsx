import React from 'react';
import ReactDOM from 'react-dom/client';
import '@assets/styles/app.css';

// import app routes
import AppRoutes from './routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
