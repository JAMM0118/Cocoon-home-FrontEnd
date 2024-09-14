import { Apartamento } from './components/Apartamento.jsx'
import { useState } from 'react'
import { apartamentosHechos } from './constans.js'
import './App.css'


function App() {
  const [apartamentos, setApartamentos] = useState(apartamentosHechos)
  const createApartamento = () => {
    const newApartamento = {
      id: apartamentos.length + 1,
      nombre: 'Casa de playa',
      arrendador: 'Carlos Hernandez',
    }
    apartamentosHechos.push(newApartamento)
    setApartamentos([...apartamentosHechos])

  }
  return (
    <main>

      <header className='headerLogo'>
        <img className='logo'src="/images/logoCocoon-.png" alt="logo" />
      </header>

      <section className='grid'>
        {apartamentos.map((apartamento) => (
          <Apartamento
            key={apartamento.id}
            nombreApartamento={apartamento.nombre}
            nombreArrendador={apartamento.arrendador} ></Apartamento>
        ))}
      </section>

      <button onClick={createApartamento}> Crear Apartamento</button>
    </main>
  )
}

export default App
