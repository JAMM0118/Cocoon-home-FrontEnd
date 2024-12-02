import { TextField } from '@mui/material';
import { Search } from '@mui/icons-material';
import { Encabezado } from '../Encabezado.jsx';
import React, { useState } from 'react';
import './EncabezadoHome.css';
import { propiedadesHechas } from '../../logic/constans.js';

export function EncabezadoHome() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filteredItems, setFilteredItems] = useState([]);

  const items = [];
  

  // Manejar la tecla Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      const results = propiedadesHechas.filter(item =>
        item.tipo_vivienda.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredItems(results);  // Guardar los resultados
      setIsModalOpen(true);       // Abrir el modal
    }
  };
  return (
    <header className='header'>
      <section className="sombraHeader">
        <Encabezado></Encabezado>

        <section className="textoEncabezado">

          <h1 >Tu hogar temporal, tu espacio de crecimiento.</h1>
          <TextField value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleKeyPress} style={
              { width: '50%', border: '1px solid var(--black)', backgroundColor: 'var(--white)', borderRadius: '10px' }}
            InputProps={{
              startAdornment: (
                <Search />
              )
            }}

            placeholder='Descubre apartaestudios, casas, habitaciones...'
            variant='outlined' ></TextField>
          {isModalOpen && (
            <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={() => setIsModalOpen(false)}>
                  x
                </button>
                <h3 className='h3-modal'>Resultados de la Búsqueda</h3>
                <ul className='ul-modal'>
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item, index) => (
                      <li className='li-modal' key={index}>
                        <strong>Tipo:</strong> {item.tipo_vivienda}<br />
                        <strong>Estado:</strong> {item.estado}<br />
                        <strong>Precio:</strong> ${item.precio}

                      </li>
                    ))
                  ) : (
                    <li className='li-modal'>No se encontraron resultados</li>
                  )}
                </ul>
              </div>
            </div>
          )}
          <h3 className="texto-h3">Descubre habitaciones, apartamentos y más, donde te sentirás en casa mientras alcanzas tus metas.</h3>
        </section>
      </section>

    </header>
  )
}