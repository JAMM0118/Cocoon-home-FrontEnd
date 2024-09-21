import { useState } from 'react'
import {propiedadesHechas } from './logic/constans.js'
import { Encabezado } from './components/Encabezado.jsx'
import { Propiedad } from './components/Propiedad.jsx'
import './App.css'
import { PropiedadDetails } from './components/PropiedadDetails.jsx'



let name =  'Perez';

function App() {


  const [propiedades, setPropiedades] = useState(propiedadesHechas)
  
  return (
    <main>

      <Encabezado></Encabezado>

      {/* Mapeo de los apartamentos */}
      <section>
        {propiedades.map((propiedad) => (
          <PropiedadDetails
            key={propiedad.id}
            nombre={propiedad.nombre}
            arrendador={propiedad.arrendador}
            precio={propiedad.precio}
            descripcion={propiedad.descripcion}
            estado={propiedad.estado}
            >
          </PropiedadDetails>
        ))}
      </section>
     
    </main>
  )
}

export default App
