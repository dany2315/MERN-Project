import React from 'react';
import { useSelector} from 'react-redux';

import { ThemeProvider } from '@mui/material';
import themes from 'themes';


import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';

import MainLayout from './layout/MainLayout/index.js';
import Login from './pages/Login/Login.js';
import Dashbord from './pages/Dashbord.js';
import Acceuil from './pages/Acceuil.js';
import Admin from './pages/Admin.js';
import Produits from './pages/Produits';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Profil from './pages/Profil';

const App = () => {
  const connect = false;
  const customization = useSelector((state) => state.customization);

  return (
    <ThemeProvider theme={themes(customization)}>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<Acceuil />} />
          <Route path='produits' element={<Produits />} />
          <Route path='services' element={<Services />} />
          <Route path='contact' element={<Contact />} />

          <Route
            path='profil'
            element={connect ? <Profil /> : <Navigate to='/login' />}
          />

          <Route
            path='dashbord'
            element={connect ? <Dashbord /> : <Navigate to='/login' />}
          />
          <Route path='admin' element={<Admin />} />
          <Route
            path='login'
            element={connect ? <Navigate to='/' /> : <Login />}
          />
        </Route>
      </Routes>
   </ThemeProvider>
   
  );
}

export default App;
