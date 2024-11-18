import { useState, useEffect } from 'react'
import {cargarArrendadores, cargarPropiedades, propiedadesHechas } from '../logic/constans.js'
import { EncabezadoHome } from './EncabezadoHome.jsx'
import { Propiedad } from './Propiedad.jsx'
import { MensajesHome } from './mensajesHome.jsx'


let name =  'Perez';

export function HomePage(){
    
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
  
  
    return(
    <main>
    
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