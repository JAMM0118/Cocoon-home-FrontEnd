import { useState, useEffect } from 'react'
import {cargarArrendadores, cargarPropiedades, propiedadesHechas } from '../../logic/constans.js'
import { EncabezadoHome } from './EncabezadoHome.jsx'
import { Propiedad } from '../componentesPropiedades/Propiedad.jsx'
import { MensajesHome } from './MensajesHome.jsx'


let name =  'Perez';

export function HomePage(){
    
  const [propiedades, setPropiedades] = useState([]);
  const [arrendadores, setArrendadores] = useState([]);
 

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
            id={propiedad.id}
            tituloPropiedad={propiedad.tipo_vivienda}
            nombreArrendador={name}
            descripcion={propiedad.descripcion}>
              

            </Propiedad>
        ))}
      </section>
      
    </main>

    )
}