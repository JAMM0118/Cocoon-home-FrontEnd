import '../App.css'
export function Encabezado({createApartamento}) {
  return (
    <header className='headerLogo'>
      <img className='logo'src="/images/logoCocoon-.png" alt="logo" />
      <div className='welcome-text'>
        <h1> ¡Bienvenido a Cocoon! </h1>
        <h2 className='second-text'> El hogar perfecto para ti</h2>
      </div>
      
      <div className='button-view'>
        <button className='button-create' onClick={createApartamento}> Crear Apartamento</button>

      </div>
    </header>
  )
}