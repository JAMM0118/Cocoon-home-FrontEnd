import React from "react";
import "../Styles/PropiedadDetails.css"; 
import CarouselReviews from "./CarouselReviews"; // Ruta al componente
import "../styles/CarouselReviews.css";
import ReviewComment from "./ReviewComment";
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
import { List } from "@mui/material";




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
        <div class="principal-info">
        
          <div class="info-item">
          <h2>Ubicación</h2>
          
          
          <p>Cra 9A #85-76, Barrio Príncipe, Tuluá, Valle del Cauca, Colombia</p>
          </div>
          <div class="title-wrapper">
          <div class="title-divider"></div>
          <h2 >Descripción</h2>
          </div>
          <ReviewComment text={descripcion} maxVisibleChars={300} />
          
          <div class="title-wrapper">
          <div class="title-divider"></div>
          <h2>Reglas</h2>
          </div>
          <div class="rules-section">
            <ul class="rules-list">
              <li>No se permiten mascotas.</li>
              <li>No hacer ruido después de las 10 PM.</li>
              <li>Pagar el alquiler a tiempo.</li>
              <li>Mantener el área limpia.</li>
              <li>No fumar dentro de la propiedad.</li>
              <li>Reportar daños inmediatamente.</li>
            </ul>
          </div>
          <div class="title-wrapper">
          <div class="title-divider"></div>
          <h2>Tipo de vivienda</h2>
          </div>
          <p>Apartaestudio</p>
          <div class="title-wrapper">
          <div class="title-divider"></div>
          <h2>Reservas</h2>
          </div>
          <p>Calendario de reservas</p>
          <div class="title-wrapper">
          <div class="title-divider"></div>
          <h2>Reseñas</h2>
          </div>
          <CarouselReviews/>

          

          <div class="landlord-card">
            <img src="../public/images/revelo.png" alt="Foto del arrendador" class="landlord-image" />
            <div class="landlord-info">
              <h3 class="landlord-name">{arrendador}</h3>
              <p class="landlord-rating">
                <span>Calificación:</span>
                <Rating name="read-only" value={4.5} readOnly precision={0.5} size="small" />
              </p>
              <p class="landlord-registered">Registrado hace 2 años</p>
            
          </div>
          </div>
          <div>
            <h3>Sobre mi</h3>
            <p>Me gusta viajar y conocer nuevas culturas. Soy una persona amigable y me gusta conocer gente nueva.</p>
            <p>Si tienes alguna pregunta sobre la propiedad, no dudes en contactarme.</p>
          <button class="button-contact">Contactar</button>
          </div>
          
          
          
          
          
        </div>
        <h2>Mapa en google</h2>
        <h2>Propiedades similares</h2>

      </div>
      </div>
  );
}



