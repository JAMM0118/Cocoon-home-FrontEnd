import FormularioPropiedades from './FormularioPropiedades.jsx';

const BotonAbrirFormulario = () => {
  const abrirFormulario = () => {
    const ventana = window.open('', '_blank', 'width=600,height=800');
    ventana.document.write(`
      <!DOCTYPE html>
      <html lang="es">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Formulario de Propiedades</title>
        <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
        <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
        <script src="https://cdn.tailwindcss.com"></script>
      </head>
      <body>
        <div id="root"></div>
        <script type="text/babel">
          const FormularioPropiedades = () => {
            const [formData, setFormData] = React.useState({
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
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    Enviar
                  </button>
                </form>
              </div>
            );
          };

          ReactDOM.render(<FormularioPropiedades />, document.getElementById('root'));
        </script>
      </body>
      </html>
    `);
    ventana.document.close();
  };

  return (
    <button
  onClick={abrirFormulario}
  style={{
    position: 'fixed',
    top: '35px',
    right: '150px',
    backgroundColor: '#d88628', // bg-orange-500
    color: 'white',
    fontWeight: 'bold',
    padding: '16px 32px', // Tamaño más grande
    borderRadius: '16px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    border: 'none' // Sin contorno
  }}
>
  Abrir Formulario
</button>

  );
};

export default BotonAbrirFormulario;

