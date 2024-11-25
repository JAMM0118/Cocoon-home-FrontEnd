import React, { useState } from 'react';
import { FormularioLogin } from './components/ComponentesLogin/FormularioLogin.jsx'
import { FormularioRegistro } from './components/ComponentesLogin/FormularioRegistro.jsx'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {FormularioPropiedades} from './components/componentesFormulario/FormularioPropiedades.jsx'
import { HomePage } from './components/componentesHome/HomePage.jsx';
import './styles/App.css'
import './styles/index.css'

function App() {

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
  )
}

export default App