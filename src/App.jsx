import { useState, useEffect } from 'react'
import {cargarArrendadores, cargarPropiedades, propiedadesHechas } from './logic/constans.js'
import { EncabezadoHome } from './components/EncabezadoHome.jsx'
import { Propiedad } from './components/Propiedad.jsx'
import { MensajesHome } from './components/mensajesHome.jsx'
import {FormularioLogin} from './ComponentesLogin/FormularioLogin.jsx'
import {FormularioRegistro} from './ComponentesLogin/FormularioRegistro.jsx'
import './ComponentesLogin/FormularioLogin.css'
import './ComponentesLogin/FormularioRegistro.css'
import './App.css'
import './index.css'
 



let name =  'Perez';

function App() {

  const [propiedades, setPropiedades] = useState([]);
  const [arrendadores, setArrendadores] = useState([]);
  // const cargarDatos = async () => {
  //   const getPropiedades = await cargarPropiedades();
  //   const getArrendadores = await cargarArrendadores();
  //   console.log(getPropiedades);
  //   console.log(getArrendadores);
  //   // setArrendadores([...getArrendadores]);
  // };
 

  useEffect(() => setPropiedades([...propiedadesHechas]), []);
  
  
  return (
    
    <main className='homePage'>
        
      <EncabezadoHome></EncabezadoHome>
        
        <MensajesHome></MensajesHome>
      <h1 className='tituloHome'>Propiedades de interes</h1>
    
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
