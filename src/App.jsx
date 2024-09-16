import { useState } from 'react'
import { cargarPropiedades, cargarArrendadores } from './constans.js'
import { Encabezado } from './components/Encabezado.jsx'
import { Apartamento } from './components/Apartamento.jsx'
import './App.css'

let propiedades = await cargarPropiedades();
console.log(propiedades);
let arrendadores = await cargarArrendadores();
let name = arrendadores[0].first_name + ' ' + 'Perez';

function App() {


  const [apartamentos, setApartamentos] = useState(propiedades)
  const createApartamento = () => {
    const newApartamento = {
      id: apartamentos.length + 1,
      arrendador: 2,
      descripcion: "Casa de playa con piscina y vista al mar",
      direccion: "Calle 15 carrera 10b #20-30",
      estado: "disponible",
      fotos: "linkfotos.com",
      precio: 120000,
      reglas: "No hay",
      servicios: "Ninguno",
      tipo_vivienda: "Casa de playa",
      videos: "linkvideos.com",
    }

    const apartamentosNuevos = [...apartamentos]
    apartamentosNuevos.push(newApartamento)
    setApartamentos([...apartamentosNuevos])

  }
  return (
    <main>

      <Encabezado createApartamento={createApartamento}></Encabezado>

      {/* Mapeo de los apartamentos */}
      <section className='grid'>
        {apartamentos.map((apartamento) => (
          <Apartamento
            key={apartamento.id}
            nombreApartamento={apartamento.tipo_vivienda}
            nombreArrendador={name}
            estado={apartamento.estado}></Apartamento>
        ))}
      </section>

    </main>
  )
}

export default App
