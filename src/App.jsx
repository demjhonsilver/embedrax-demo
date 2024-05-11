import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './router/AppRoutes'; // Import AppRoutes
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <BrowserRouter>

        <AppRoutes />

  
    
    </BrowserRouter>
  );
}

export default App;

