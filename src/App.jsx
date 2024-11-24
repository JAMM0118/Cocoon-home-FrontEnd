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