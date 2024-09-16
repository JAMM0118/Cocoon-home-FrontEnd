import { useState } from 'react';
import { apartamentosHechos } from './constans.js';
import { Apartamento } from './components/Apartamento.jsx';
import { Encabezado } from './components/Encabezado.jsx';
import BotonAbrirFormulario from './components/botonFormulario';
import './App.css';

function App() {
  const [apartamentos, setApartamentos] = useState(apartamentosHechos);

  const createApartamento = () => {
    const newApartamento = {
      id: apartamentos.length + 1,
      nombre: 'Casa de playa',
      arrendador: 'Carlos Hernandez',
    };
    apartamentosHechos.push(newApartamento);
    setApartamentos([...apartamentosHechos]);
  };

  return (
    <main>
      <Encabezado createApartamento={createApartamento} />
      {/* Aquí es donde mostramos el botón que abrirá el formulario */}
      <BotonAbrirFormulario />


      <section className="grid">
        {apartamentos.map((apartamento) => (
          <Apartamento
            key={apartamento.id}
            nombreApartamento={apartamento.nombre}
            nombreArrendador={apartamento.arrendador}
          />
        ))}
      </section>
    </main>
  );
}

export default App;
