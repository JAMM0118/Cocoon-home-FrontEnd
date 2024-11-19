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

export const propiedadesHechas = [
  {
    id: 2,
    nombre: "casa bonita",
    arrendador: 1,
    descripcion: "Casa de playa con piscina y vista al mar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    direccion: "Calle 15 carrera 10b #20-30",
    estado: "disponible",
    fotos: "linkfotos.com",
    precio: 120000,
    reglas: "No hay",
    servicios: "Ninguno",
    tipo_vivienda: "Habitacion",
    videos: "linkvideos.com",
  },
  {
    id: 3,
    nombre: "casa lujosa",
    arrendador: 1,
    descripcion: "Casa de playa con piscina y vista al mar. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    direccion: "Calle 15 carrera 10b #20-30",
    estado: "disponible",
    fotos: "linkfotos.com",
    precio: 120000,
    reglas: "No hay",
    servicios: "Ninguno",
    tipo_vivienda: "ApartaEstudio",
    videos: "linkvideos.com",
  },
  {
    id: 4,
    arrendador: 2,
    descripcion: "Apartamento en el centro de la ciudad. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    direccion: "Avenida 7 #45-67",
    estado: "disponible",
    fotos: "linkfotos.com",
    precio: 150000,
    reglas: "No se permiten mascotas",
    servicios: "Internet, Agua, Luz",
    tipo_vivienda: "Apartamento",
    videos: "linkvideos.com",
  },
  {
    id: 5,
    arrendador: 2,
    descripcion: "Apartamento en el centro de la ciudad con excelente vista. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    direccion: "Avenida 7 #45-67",
    estado: "disponible",
    fotos: "linkfotos.com",
    precio: 150000,
    reglas: "No se permiten mascotas",
    servicios: "Internet, Agua, Luz",
    tipo_vivienda: "Apartamento",
    videos: "linkvideos.com",
  },

  {
    id: 6,
    arrendador: 2,
    descripcion: "Apartamento en el centro de la ciudad con excelente vista. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    direccion: "Avenida 7 #45-67",
    estado: "disponible",
    fotos: "linkfotos.com",
    precio: 150000,
    reglas: "No se permiten mascotas",
    servicios: "Internet, Agua, Luz",
    tipo_vivienda: "ApartaEstudio",
    videos: "linkvideos.com",

  },
  {
    id: 7,
    arrendador: 2,
    descripcion: "Apartamento en el centro de la ciudad con excelente vista. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    direccion: "Avenida 7 #45-67",
    estado: "disponible",
    fotos: "linkfotos.com",
    precio: 150000,
    reglas: "No se permiten mascotas",
    servicios: "Internet, Agua, Luz",
    tipo_vivienda: "ApartaEstudio",
    videos: "linkvideos.com",

  },
  {
    id: 8,
    arrendador: 2,
    descripcion: "Apartamento en el centro de la ciudad con excelente vista. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    direccion: "Avenida 7 #45-67",
    estado: "disponible",
    fotos: "linkfotos.com",
    precio: 150000,
    reglas: "No se permiten mascotas",
    servicios: "Internet, Agua, Luz",
    tipo_vivienda: "ApartaEstudio",
    videos: "linkvideos.com",

  }
];
