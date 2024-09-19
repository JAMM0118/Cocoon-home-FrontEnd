import { useState } from 'react'
import {propiedadesHechas } from './logic/constans.js'
import { Encabezado } from './components/Encabezado.jsx'
import { Propiedad } from './components/Propiedad.jsx'
import './App.css'
import { ApartamentoDetails } from './components/ApartamentoDetails.jsx'

//let propiedades = await cargarPropiedades();
//console.log(propiedades);
// let arrendadores = await cargarArrendadores();
let name =  'Perez';

function App() {
<<<<<<< HEAD
  const [apartamentos, setApartamentos] = useState(apartamentosHechos)
  const createApartamento = () => {
    const newApartamento = {
      id: apartamentos.length + 1,
      nombre: 'Casa de playa',
      arrendador: 'Carlos Hernandez',
      precioApartamento: '5000',
      descripcion: 'Casa lujosa en la playa',
      
    }
    apartamentosHechos.push(newApartamento)
    setApartamentos([...apartamentosHechos])
=======
>>>>>>> origin/main


  const [propiedades, setPropiedades] = useState(propiedadesHechas)
  
  return (
    <main>

      <Encabezado></Encabezado>
<<<<<<< HEAD
      {/* Mapeo de los apartamentos */}
      <section >
        {apartamentos.map((apartamento) => (
          <ApartamentoDetails
            key={apartamento.id}
            nombreApartamento={apartamento.nombre}
            nombreArrendador={apartamento.arrendador}
            precioApartamento={apartamento.precioApartamento}
            descripcion={apartamento.descripcion} ></ApartamentoDetails>
=======

      {/* Mapeo de los apartamentos */}
      <section className='grid'>
        {propiedades.map((propiedad) => (
          <Propiedad
            key={propiedad.id}
            nombreApartamento={propiedad.tipo_vivienda}
            nombreArrendador={name}
            estado={propiedad.estado}></Propiedad>
>>>>>>> origin/main
        ))}
      </section>
     
    </main>
  )
}

export default App
