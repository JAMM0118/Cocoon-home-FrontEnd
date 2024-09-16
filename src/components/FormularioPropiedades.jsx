import { useState } from 'react';

const FormularioPropiedades = () => {
  const [formData, setFormData] = useState({
    direccion: '',
    habitaciones: '',
    banos: '',
    precio: '',
    fotos: [],
    video: null
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      if (name === 'fotos') {
        setFormData(prevData => ({
          ...prevData,
          [name]: [...prevData.fotos, ...files]
        }));
      } else {
        setFormData(prevData => ({
          ...prevData,
          [name]: files[0]
        }));
      }
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos del formulario:', formData);
    // Aquí puedes agregar la lógica para enviar los datos
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Formulario de Propiedades</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="direccion" className="block text-sm font-medium text-gray-700">Dirección</label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="habitaciones" className="block text-sm font-medium text-gray-700">Habitaciones</label>
          <input
            type="number"
            id="habitaciones"
            name="habitaciones"
            value={formData.habitaciones}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="banos" className="block text-sm font-medium text-gray-700">Baños</label>
          <input
            type="number"
            id="banos"
            name="banos"
            value={formData.banos}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="precio" className="block text-sm font-medium text-gray-700">Precio</label>
          <input
            type="number"
            id="precio"
            name="precio"
            value={formData.precio}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            required
          />
        </div>
        <div>
          <label htmlFor="fotos" className="block text-sm font-medium text-gray-700">Fotos</label>
          <input
            type="file"
            id="fotos"
            name="fotos"
            onChange={handleChange}
            className="mt-1 block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-indigo-50 file:text-indigo-700
              hover:file:bg-indigo-100"
            multiple
            accept="image/*"
          />
          {formData.fotos.length > 0 && (
            <p className="mt-2 text-sm text-gray-500">{formData.fotos.length} foto(s) seleccionada(s)</p>
          )}
        </div>
        <div>
          <label htmlFor="video" className="block text-sm font-medium text-gray-700">Video</label>
          <input
            type="file"
            id="video"
            name="video"
            onChange={handleChange}
            className="mt-1 block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-indigo-50 file:text-indigo-700
              hover:file:bg-indigo-100"
            accept="video/*"
          />
          {formData.video && (
            <p className="mt-2 text-sm text-gray-500">Video seleccionado: {formData.video.name}</p>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormularioPropiedades;
