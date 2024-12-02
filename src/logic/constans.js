import Swal from "sweetalert2";

const urlPropiedades = 'https://backend-cocoon-project.onrender.com/api/propiedades/';
const urlArrendadores = 'https://backend-cocoon-project.onrender.com/api/arrendadores/';
const urlRegisterUser = 'https://backend-cocoon-project.onrender.com/auth/register';
const urlLoginUser = 'https://backend-cocoon-project.onrender.com/auth/login';
export const cargarArrendadores = async () => {
  const array = [];
  // const res = await fetch('data.json');
  const res = await fetch(urlArrendadores, {
    method: 'GET',
    headers: {
      'Authorization': `Token ${localStorage.getItem('token')}`
    }
  });
  const data = await res.json();

  data.forEach(propiedad => {
    array.push(propiedad);

  });

  return array;
};

export const registerUser = async (user) => {
  const respose = await fetch(urlRegisterUser, {
    method: 'POST',  
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user),
  });

  if (!respose.ok) {
    alert('Error al registrar el usuario');
    throw new Error('Error al registrar el usuario');
    
  }

  const data = await respose.json();
  alert('Usuario registrado correctamente');
  console.log(data);
  return [data,true];
}

export const loginUser = async (user) => {

  const respose = await fetch(urlLoginUser, {
    method: 'POST',  
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user),
  });

  if (!respose.ok) {
    Swal.fire({
      title: 'Error al iniciar sesion',
      icon: 'error',
      confirmButtonText: 'Cerrar'

    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = '/login'
      }});
    throw new Error('Error al iniciar sesion');
    
  }

  const data = await respose.json();


  console.log(data);
  localStorage.setItem('token', data.token);

  return [data,true];
}


export const cargarPropiedades = async () => {
  const array = [];
  // const res = await fetch('data.json');
  const res = await fetch(urlPropiedades, {
    method: 'GET',
    headers: {
      'Authorization': `Token ${localStorage.getItem('token')}`
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
    id: 1,
    arrendador: 1,
    descripcion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    direccion: "Calle 15 carrera 10b #20-30",
    estado: "disponible",
    fotos: "linkfotos.com",
    precio: 120000,
    reglas: "No hay",
    servicios: "Ninguno",
    tipo_vivienda: "Casa",
    videos: "linkvideos.com",
  },
  {
    id: 2,
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

  }
];