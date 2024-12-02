
import TenantProfile from './ComponentesProfile/TenantProfile.jsx'; // Importa el componente TenantProfile
import OwnerProfile from './ComponentesProfile/OwnerProfile.jsx';   // Importa el componente OwnerProfile
// import './App.css';
// import './index.css';
import React, { useState } from 'react';
import { FormularioLogin } from './components/ComponentesLogin/FormularioLogin.jsx'
import { FormularioRegistro } from './components/ComponentesLogin/FormularioRegistro.jsx'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {FormularioPropiedades} from './components/componentesFormulario/FormularioPropiedades.jsx'
import { HomePage } from './components/componentesHome/HomePage.jsx';
import './styles/App.css'
import './styles/index.css'

function App() {
  // Datos de ejemplo para OwnerProfile
  const ownerExampleData = {
    name: 'Juan Pérez',
    profilePic: '/example-profile.jpg',
    bio: 'Arrendador con experiencia en propiedades urbanas.',
    email: 'juan.perez@example.com',
    phone: '+52 55 9876 5432',
    properties: [
      {
        id: 1,
        name: 'Departamento en Condesa',
        photos: ['/condesa1.jpg', '/condesa2.jpg'],
        location: 'Condesa, CDMX',
        monthlyPrice: 12000,
        details: {
          rooms: 2,
          bathrooms: 2,
          size: '100m²',
          services: ['Agua', 'Gas', 'Internet'],
        },
        rules: ['No mascotas', 'No fiestas'],
      },
    ],
    verifications: {
      idVerified: true,
      propertyOwnership: true,
    },
  };

  // Datos de ejemplo para TenantProfile
  const tenantExampleData = {
    name: 'Ana García',
    profilePic: '/example-tenant-profile.jpg',
    bio: 'Estudiante de ingeniería en busca de un apartamento cerca de la universidad.',
    email: 'ana.garcia@example.com',
    phone: '+57 123 456 7890',
    rentalHistory: [
      {
        comment: 'Muy buena inquilina.',
        previousRentals: 2,
      },
    ],
    preferences: {
      propertyTypes: ['Estudio', 'Departamento compartido', 'Casa'],
      monthlyBudget: '$500 - $1000',
      preferredLocation: 'Cerca de la universidad',
    },
    verifications: {
      idVerified: true,
      incomeProof: true,
      socialMedia: true,
    },
  };

//   return (
//     <main className="homePage">
//       {/* Componente OwnerProfile */}

//       <OwnerProfile userData={ownerExampleData} />
  return (

    <main className='homePage'>
      
      <BrowserRouter>
        
          <Route path='/formulario'>
            <FormularioPropiedades></FormularioPropiedades>
          </Route>
        <Switch>
        <Route path='/login'>
            <FormularioLogin></FormularioLogin>
            
          </Route>
          <Route path='/registro'>
            <FormularioRegistro></FormularioRegistro>
          </Route>
        
          <Route path='/'>
            <HomePage></HomePage>
          </Route>
          
        </Switch>

      </BrowserRouter>

    </main>
  );
}

export default App;
