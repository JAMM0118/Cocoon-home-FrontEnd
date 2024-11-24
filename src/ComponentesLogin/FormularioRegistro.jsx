import "./FormularioRegistro.css"
import { useState } from "react"
import logo from "/images/CocoonIcon.png"

export function FormularioRegistro(){  

    const[usuario,setUsuario] = useState("")
    const[password,setPassword] = useState("")
    const [correo, setCorreo] = useState("");
    const[error,setError] = useState(false)

    const handleSubmit = (evento) => {
        evento.preventDefault()

        //Validacion de que los campos han sido llenados
        if (usuario == "" || password == "" || correo == ""){
            setError(true)
            return 
        }
        setError(false)
    }

    return (
        <section className="login-container">
      <div className="logo-container">
        <img src={logo} alt="Logo de la empresa" className="logo" />
      </div>
      <div className="login-content">
        <h1>Registrarse</h1>

            <form
             className = "formulario"
             onSubmit={handleSubmit}
             >
                <input 
                type = "text" 
                value = {usuario}
                //Captura lo que se ingresa en la caja de texto
                onChange = {evento => setUsuario(evento.target.value)}
                placeholder = "Nombre de Usuario"//Muestra una descripcion dentro de la caja de texto
                aria-label = "Usuario" //->Ofrece accesibilidad para aquellas personas que no tienen vision y usan programas de lectura
                />

                <input
                type="email"
                value={correo}
                onChange={(evento) => setCorreo(evento.target.value)}
                placeholder="Correo Electrónico"
                aria-label="Correo Electrónico"
                />

                <input 
                type = "password" 
                value = {password}
                //Captura lo que se ingresa en la caja de texto
                onChange = {evento => setPassword(evento.target.value)}
                placeholder = "Contraseña"//Muestra dentro de la caja de texto "Contraseña"
                aria-label = "Contraseña"//->Ofrece accesibilidad para aquellas personas que no tienen vision y usan programas de lectura
                />
                <button>Registrarse</button>

            </form>
            
            {error && <p className="error-message">Todos los campos son obligatorios</p>}

            {/* Hipervínculo de ¿Ya tienes una cuenta? Inicia Sesión */}
            <div className="forgot-password">
                    <a href="/login">¿Ya tienes una cuenta? Inicia Sesión</a> {/*En # va el link hacia la pagina login */}
                </div>


            </div>
        </section>
    )
}