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