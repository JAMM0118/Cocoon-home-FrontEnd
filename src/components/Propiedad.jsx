export function Propiedad({tituloPropiedad, nombreArrendador,descripcion}) {
  const maxLength = 30;
  return (
    <main className='propiedad'>
      <section className="contenedorImagenes">
        <img className='imagenes' src="/images/casas.jpg" alt="" />
      </section>
      <section className='textos' >
        <h1 className='tituloPropiedad'>{tituloPropiedad}</h1>
        <p className="propietario">Arrendador:  <span className='propietarioPropiedad'>{nombreArrendador}</span></p>
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
