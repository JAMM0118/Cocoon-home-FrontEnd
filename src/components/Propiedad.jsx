export function Propiedad({tituloPropiedad, nombreArrendador,descripcion}) {
  const maxLength = 100;
  return (
    <main className='propiedad'>
      <section className="contenedorImagenes">

        <img className='imagenes' src="/images/casas.jpg" alt="" />
      </section>
      <section className='textos' >
        <h1 className='tituloPropiedad'>{tituloPropiedad}</h1>
        <p>Descripcion: <span className="descripcionPropiedad">{maxText(descripcion,maxLength)}</span></p>
        <p>Arrendador: <span className='descripcionPropiedad'>{nombreArrendador}</span></p>
        <button className="button-create">Ver detalles</button>
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
