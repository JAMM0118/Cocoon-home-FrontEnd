import { Apartamento } from './components/Apartamento.jsx'
import { useState } from 'react'
import { apartamentosHechos } from './constans.js'
import { Encabezado } from './components/Encabezado.jsx'
import './App.css'
import { ApartamentoDetails } from './components/ApartamentoDetails.jsx'


function App() {
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

  }
  return (
    <main>

      <Encabezado></Encabezado>
      {/* Mapeo de los apartamentos */}
      <section >
        {apartamentos.map((apartamento) => (
          <ApartamentoDetails
            key={apartamento.id}
            nombreApartamento={apartamento.nombre}
            nombreArrendador={apartamento.arrendador}
            precioApartamento={apartamento.precioApartamento}
            descripcion={apartamento.descripcion} ></ApartamentoDetails>
        ))}
      </section>

    </main>
  )
}

export default App
