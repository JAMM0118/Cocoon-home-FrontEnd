import { useState } from 'react'
import {propiedadesHechas } from './logic/constans.js'
import { EncabezadoHome } from './components/EncabezadoHome.jsx'
import { Propiedad } from './components/Propiedad.jsx'
import { MensajesHome } from './components/mensajesHome.jsx'
import './App.css'
import './index.css'

//let propiedades = await cargarPropiedades();
//console.log(propiedades);
// let arrendadores = await cargarArrendadores();
let name =  'Perez';

function App() {


  const [propiedades, setPropiedades] = useState(propiedadesHechas)
  
  return (
    <main className='homePage'>

      <EncabezadoHome></EncabezadoHome>
        {/* Mensajes */}
        <MensajesHome></MensajesHome>
      <h1 className='tituloHome'>Propiedades de interes</h1>
      {/* Mapeo de los apartamentos */}
      <section className='grid'>
        {propiedades.map((propiedad) => (
          <Propiedad
            key={propiedad.id}
            tituloPropiedad={propiedad.tipo_vivienda}
            nombreArrendador={name}
            descripcion={propiedad.descripcion}></Propiedad>
        ))}
      </section>
     
    </main>
  )
}

export default App
