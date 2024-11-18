import React, { useState } from 'react';
import { FormularioLogin } from './ComponentesLogin/FormularioLogin.jsx'
import { FormularioRegistro } from './ComponentesLogin/FormularioRegistro.jsx'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {FormularioPropiedades} from './components/FormularioPropiedades.jsx'
import { HomePage } from './components/HomePage.jsx';
import './ComponentesLogin/FormularioLogin.css'
import './ComponentesLogin/FormularioRegistro.css'
import './App.css'
import './index.css'
import { PropiedadDetails } from './components/PropiedadDetails.jsx'



let name =  'Perez';

function App() {

  return (
    <main>

      <Encabezado></Encabezado>

      {/* Mapeo de los apartamentos */}
      <section className='grid'>
        {propiedades.map((propiedad) => (
          <Propiedad
            key={propiedad.id}
            nombreApartamento={propiedad.tipo_vivienda}
            nombreArrendador={name}
            estado={propiedad.estado}></Propiedad>
        ))}
      </section>
     
    </main>
  )
}

export default App
