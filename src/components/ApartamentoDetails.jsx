import React from "react";
import "../Styles/ApartamentoDetails.css"; // Ruta correcta para los estilos

export function ApartamentoDetails({ nombreApartamento, nombreArrendador,precioApartamento, descripcion }) {
  return (
    <div className="apartamento-details">
      {/* Textos principales */}
      <div >
        <h1 className="name-apartamento">{nombreApartamento}</h1>
        <h2 className="text-precio">${precioApartamento} <div>/mes</div></h2>
      </div>
      
      {/* Imagen fija */}
      <div className="image-container">
        <img src="../public/images/casas.jpg" alt="Apartamento" />
      </div>
      <div>
        <h2>Descripcion</h2>
        <p>{descripcion}</p>
        <h3>Arrendador: {nombreArrendador}</h3>
      </div>

      {/* Información adicional */}
      
    </div>
  );
}
