import { useState } from 'react'
import { apartamentosHechos } from './constans.js'
import { Encabezado } from './components/Encabezado.jsx'
import { Apartamento } from './components/Apartamento.jsx'
import './App.css'


function App() {
  const [apartamentos, setApartamentos] = useState(apartamentosHechos)
  const createApartamento = () => {
    const newApartamento = {
      id: apartamentos.length + 1,
      nombre: 'Casa de playa',
      arrendador: 'Carlos Hernandez',
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
            nombreApartamento={apartamento.nombre}
            nombreArrendador={apartamento.arrendador} ></Apartamento>
        ))}
      </section>

    </main>
  )
}

export default App
