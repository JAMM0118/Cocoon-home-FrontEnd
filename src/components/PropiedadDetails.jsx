import React from "react";
import "../Styles/PropiedadDetails.css"; 
import Chip from '@mui/material/Chip';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import WifiIcon from '@mui/icons-material/Wifi';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ShowerIcon from '@mui/icons-material/Shower';
import CropFreeIcon from '@mui/icons-material/CropFree';
import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import Divider from '@mui/material/Divider';

export function PropiedadDetails({ nombre,arrendador,precio, descripcion,estado }) {
  console.log(nombre);
  console.log(arrendador);
  console.log(precio);
  console.log(estado);
  console.log(descripcion);

  const maxLength = 500;
  return (
      <div className="layout">
      <aside>
      <div className="image-container">
        <img src="../public/images/casas.jpg" alt="Propiedad" />
      </div>
      </aside>

      <div>
        <main>
        <h1 className="name-propiedad-details">{nombre}</h1>
        <Chip sx={{bgcolor:"#9ed23b;" ,color:"#0f4d1a" , blockSize:20,fontSize:12}} label={estado} />
        <h2 className="text-precio">${precio} <p className="text-precio-mes">/mes</p></h2>
        <h3 className="texto-subtitulo">Calificación</h3>
        <Rating name="read-only" value={2.5} readOnly precision={0.5} size="large"  />
        <p className="texto-subtitulo"></p>
        <button className="button-reserva">Reservar</button>
        <h3 className="texto-subtitulo">Propietario</h3>
        <Stack direction="row" >
          <Avatar sx={{ width: 70, height: 70 }} alt="Remy Sharp" src="../public/images/revelo.png" />
          <p className="name-propietario" >{arrendador}</p>
        </Stack>
        </main>
      </div>

      <div className="additional-info">
        <div className="box-servicios">
          <button className="button-servicios"> <WifiIcon fontSize="large" color="primary"/>Conexion Wifi</button>
          <button className="button-servicios"> <CropFreeIcon fontSize="large" color="primary"/>Metros Cuadrados</button>
          <button className="button-servicios"> <DirectionsCarIcon fontSize="large" color="primary"/>Estacionamiento</button>
          <button className="button-servicios"> <ShowerIcon fontSize="large" color="primary"/>Baño</button>
          <button className="button-servicios"> <ElectricalServicesIcon fontSize="large" color="primary"/>Servicios publicos</button>
        </div>
        <Divider variant="middle"/>
        <div className="texto-subtitulo">
          <h2 >Ubicacion</h2>
          <p>Cra 9A #85-76 barrio principe, tulua, valle del cauca, colombia.</p>
          <p>Ir al mapa</p>
        </div>
        <Divider variant="middle"/>
        <h2 >Descripcion</h2>
        <p>{maxText(descripcion,maxLength)}</p>
        <Divider variant="middle"/>
        <h2>Reglas</h2>
        <p>Aqui van las reglas</p>
        <Divider variant="middle"/>
        <h2>Tipo de vivienda</h2>
        <p>Aqui va el tipo de vivienda</p>
        <Divider variant="middle"/>
        <h2>Reservas</h2>
        <p>Calendario de reservas</p>
        <Divider variant="middle"/>
        <h2>Reseñas</h2>
        <p>opiniones de usuarios</p>
        <Divider variant="middle"/>
        <h2>Reglas</h2>
        <p>Aqui van las reglas</p>
        <Divider variant="middle"/>
        <h3>Arrendador: {arrendador}</h3>
        <Divider variant="middle"/>
        <h2>Mapa en google</h2>
        <Divider variant="middle"/>
        <h2>Propiedades similares</h2>
        <Divider variant="middle"/>

      </div>
      </div>
  );
}

const maxText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};