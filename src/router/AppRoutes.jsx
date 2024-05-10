// router/AppRoutes.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ExampleComponent } from '../components/ExampleComponent'
import { AngularComponent } from '../components/AngularComponent';


const AppRoutes = () => {


  return (
    <Routes>
      <Route path="/embedrax-demo" element={<ExampleComponent />} />
      <Route path="/embedrax-demo/angular" element={<AngularComponent />} />


    </Routes>
  );
};

export default AppRoutes;
