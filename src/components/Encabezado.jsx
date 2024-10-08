import React, {useState} from 'react';
export function Encabezado() {
  
  const [openProfileOptions, setOpenProfileOptions] = useState(false);
  const [openMenuOptions, setOpenMenuOptions] = useState(false);
  return (
    <header className='headerPrincipal'>
        <img className='logo' src="/images/CocoonIcon.png" alt="logo" />
        <h2 className='nombreApp'> Cocoon</h2>
        <section className="contenedorMenu">
          <div className="iconos">
            <div className="icono"  onClick={()=>{setOpenMenuOptions(((prev)=> !prev))
            setOpenProfileOptions(false)
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path d="M18.75 12.75h1.5a.75.75 0 0 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM12 6a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 6ZM12 18a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 12 18ZM3.75 6.75h1.5a.75.75 0 1 0 0-1.5h-1.5a.75.75 0 0 0 0 1.5ZM5.25 18.75h-1.5a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5ZM3 12a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 3 12ZM9 3.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM12.75 12a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0ZM9 15.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
            </svg>
           
            </div>
            <div className="icono" onClick={()=>{setOpenProfileOptions((prev)=> !prev)
              setOpenMenuOptions(false)
            }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="siz</svg>e-6">
              <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
            </svg>

            </div>
            
          </div>

          {
            
            openMenuOptions && 
            <div className="dropDownMenu">
              <ul>
                <li>Agrega tu hogar</li>
                <li>Contactanos</li>
                <li>Ajustar texto</li>
              </ul>
            </div>
          }

          { 
          
            openProfileOptions && 
            <div className="dropDownProfile" >
              <ul>
                <li>Iniciar Sesion</li>
                <li>Registrarse</li>
              </ul>
            </div>
  
          }
        </section >

    </header>
  )
}