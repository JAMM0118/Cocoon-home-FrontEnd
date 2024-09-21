const urlPropiedades = 'https://backend-cocoon-project.onrender.com/api/propiedades/';
const urlArrendadores = 'https://backend-cocoon-project.onrender.com/api/arrendadores/';
export const cargarArrendadores = async () => {
  const array = [];
  // const res = await fetch('data.json');
  const res = await fetch(urlArrendadores, {
    method: 'GET',
    headers: {
      'Authorization': 'Token b2f57cf638b25ddd02390317de5017852342ab97'
    }
  });
  const data = await res.json();

  data.forEach(propiedad => {
    array.push(propiedad);

  });

  return array;
};

export const cargarPropiedades = async () => {
  const array = [];
  // const res = await fetch('data.json');
  const res = await fetch(urlPropiedades, {
    method: 'GET',
    headers: {
      'Authorization': 'Token b2f57cf638b25ddd02390317de5017852342ab97'
    }
  });
  const data = await res.json();

  data.forEach(propiedad => {
    array.push(propiedad);

  });

  return array;
}  

export const propiedadesHechas =[
  {
    id: 1,
    nombre:"Casa de playable",
    arrendador: "Pedro Picapiedra",
    descripcion: "Casa de playa con piscina y vista al mar en la ciudad de Santa Marta con vistas increiblesmentes hermosas bla bla bla bla bla bla bla bla bla bla Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. ",
    direccion: "Calle 15 carrera 10b #20-30",
    estado: "disponible",
    fotos: "linkfotos.com",
    precio: 120000,
    reglas: "No hay",
    servicios: "Ninguno",
    tipo_vivienda: "Casa de playa",
    videos: "linkvideos.com",
  },
  /*
  {
    id: 2,
    nombre: "casa bonita",
    arrendador: 1,
    descripcion: "Casa de playa con piscina y vista al mar",
    direccion: "Calle 15 carrera 10b #20-30",
    estado: "disponible",
    fotos: "linkfotos.com",
    precio: 120000,
    reglas: "No hay",
    servicios: "Ninguno",
    tipo_vivienda: "Casa de playa",
    videos: "linkvideos.com",
  },
  {
    id: 3,
    nombre: "casa lujosa",
    arrendador: 1,
    descripcion: "Casa de playa con piscina y vista al mar",
    direccion: "Calle 15 carrera 10b #20-30",
    estado: "disponible",
    fotos: "linkfotos.com",
    precio: 120000,
    reglas: "No hay",
    servicios: "Ninguno",
    tipo_vivienda: "Casa de playa",
    videos: "linkvideos.com",
  }*/
]