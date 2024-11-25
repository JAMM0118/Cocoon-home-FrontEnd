
import ReactDOM from "react-dom/client";
import React  from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme();

export function Propiedad({id,tituloPropiedad, nombreArrendador,descripcion}) {
  const maxLength = 30;

  //funcion que hace muestra el details
  const openDetails = ()=>{
    const newWindow = window.open("", "_blank", "width=800,height=600");
    if (!newWindow) {
      alert("Permite ventanas emergentes para usar esta funcionalidad.");
      return;
    }

    // Crear un contenedor React
    const container = newWindow.document.createElement("div");
    newWindow.document.body.appendChild(container);

    // Copiar estilos personalizados (CSS)
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "../Styles/PropiedadDetails.css"; // Ruta al archivo CSS
    newWindow.document.head.appendChild(link);

    // Copiar estilos de MUI
    const muiStyles = document.querySelectorAll("style[data-emotion]");
    muiStyles.forEach((style) => {
      newWindow.document.head.appendChild(style.cloneNode(true));
    });

    // Usar ReactDOM.createRoot para renderizar el componente
    const root = ReactDOM.createRoot(container);
    root.render(
      <ThemeProvider theme={theme}>
         <PropiedadDetails
        arrendador={nombreArrendador}
        descripcion={descripcion}
        estado={"disponible"}
        nombre={tituloPropiedad}
        precio={12000}
        key={id}
        
        ></PropiedadDetails>
      </ThemeProvider>
    );

    // Limpiar al cerrar la ventana
    newWindow.onbeforeunload = () => {
      root.unmount();
    };
   
   
  }



  return (
    <main className='propiedad' onClick={openDetails}>
      <section className="contenedorImagenes">
        <img className='imagenes' src="/images/casas.jpg" alt="" />
      </section>
      <section className='textos' >
        <h1>{tituloPropiedad}</h1>
        <p>Arrendador:  <span className='propietarioPropiedad'>{nombreArrendador}</span></p>
       </section>

    </main>
  )
}

const maxText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};
