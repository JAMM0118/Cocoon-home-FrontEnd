import { useState } from 'react'
import {propiedadesHechas } from './logic/constans.js'
import { Encabezado } from './components/Encabezado.jsx'
import { Propiedad } from './components/Propiedad.jsx'
import './App.css'

//let propiedades = await cargarPropiedades();
//console.log(propiedades);
// let arrendadores = await cargarArrendadores();
let name =  'Perez';

function App() {


  const [propiedades, setPropiedades] = useState(propiedadesHechas)
  
  return (
    <main>

      <Encabezado></Encabezado>

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
