import React, { useState } from 'react';
import { FormularioLogin } from './components/ComponentesLogin/FormularioLogin.jsx'
import { FormularioRegistro } from './components/ComponentesLogin/FormularioRegistro.jsx'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {FormularioPropiedades} from './components/componentesFormulario/FormularioPropiedades.jsx'
import { HomePage } from './components/componentesHome/HomePage.jsx';
import { PropiedadDetails } from './components/componentesPropiedades/PropiedadDetails.jsx'
import {propiedadesHechas } from './logic/constans.js'
import './styles/App.css'
import './styles/index.css'

function App() {
  const [propiedades, setPropiedades] = useState(propiedadesHechas)

  return (

    <main className='homePage'>
      
      <BrowserRouter>
        <Switch>
          {/* <Route path='/formulario' component={FormularioPropiedades} /> */}
          <Route path='/login' component={FormularioLogin} />
          <Route path='/registro' component={FormularioRegistro} />
          <Route exact path='/' component={HomePage} />
          <Route path='/propiedad/:id' component={PropiedadDetails} />
        </Switch>
      </BrowserRouter>

    </main>
  )
}

export default App