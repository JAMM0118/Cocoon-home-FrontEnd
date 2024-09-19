export function Propiedad({nombreApartamento, nombreArrendador, estado}) {
  return (
    <div className='apartamento'>
      <img className='imagenes' src="/images/casas.jpg" alt="" />
      <div className='textos' >
        <p className='nombreApartamento'>{nombreApartamento}</p>
        <p>Arrendador: <span className='arrendador'>{nombreArrendador}</span></p>
        <p>Estado: <span className="arrendador">{estado}</span></p>
      </div>
    </div>
  )
}
