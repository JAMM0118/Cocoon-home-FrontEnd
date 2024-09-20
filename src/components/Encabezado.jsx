import { FormularioPropiedades} from "./FormularioPropiedades";
export function Encabezado() {
  return (
    <header className='headerLogo'>
      <img className='logo'src="/images/CocoonIcon.png" alt="logo" />
      <div className='welcome-text'>
        Cocoon Home
      </div>
      
      <div className='button-view'>
       <FormularioPropiedades/>

      </div>
    </header>
  )
}