// router/AppRoutes.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ExampleComponent } from '../components/ExampleComponent'



const AppRoutes = () => {


  return (
    <Routes>
      <Route path="/embedrax-demo" element={<ExampleComponent />} />


    </Routes>
  );
};

export default AppRoutes;
