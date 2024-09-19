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
    id: 2,
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
  }
]