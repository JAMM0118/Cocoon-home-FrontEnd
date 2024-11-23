import { useState } from "react"
import logo from "/images/CocoonIcon.png"
import "../styles/FormularioRegistro.css"

export function FormularioRegistro(){  

    const[usuario,setUsuario] = useState("");
    const [rol, setRol] = useState('');
    const [esEstudiante, setEsEstudiante] = useState('');  
    const[password,setPassword] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [ocupacion, setOcupacion] = useState("");
    const[error,setError] = useState(false)

    const handleSubmit = (evento) => {
        evento.preventDefault()
   
        //Validacion de que los campos han sido llenados
        if (usuario == "" || password == "" || correo == ""
        || telefono == "" || nombre == "" || apellido == ""
        || ocupacion == "" || rol == "" || esEstudiante == ""
        ){
            setError(true)
            return 
        }
        setError(false)
        console.log(usuario)
        console.log(password)
        console.log(correo)
        console.log(telefono)
        console.log(nombre)
        console.log(apellido)
        console.log(ocupacion)
        console.log(rol)
        console.log(esEstudiante)

    }

    return (
        <section className="login-containers">
      <div className="logo-containers">
        <img src={logo} alt="Logo de la empresa" className="logo" />
      </div>
      <div className="login-contents">
        <h1>Registrarse</h1>

            <form
             className = "formularios"
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
                <input 
                type = "text" 
                value = {nombre}
                //Captura lo que se ingresa en la caja de texto
                onChange = {evento => setNombre(evento.target.value)}
                placeholder = "Nombre"//Muestra dentro de la caja de texto "Nombre"
                aria-label = "Nombre"//->Ofrece accesibilidad para aquellas personas que no tienen vision y usan programas de lectura
                />
                <input 
                type = "text" 
                value = {apellido}
                //Captura lo que se ingresa en la caja de texto
                onChange = {evento => setApellido(evento.target.value)}
                placeholder = "Apellido"//Muestra dentro de la caja de texto "Contraseña"
                aria-label = "Apellido"//->Ofrece accesibilidad para aquellas personas que no tienen vision y usan programas de lectura
                />
                <input 
                type = "text" 
                value = {telefono}
                //Captura lo que se ingresa en la caja de texto
                onChange = {evento => setTelefono(evento.target.value)}
                placeholder = "Telefono"//Muestra dentro de la caja de texto "Contraseña"
                aria-label = "Telefono"//->Ofrece accesibilidad para aquellas personas que no tienen vision y usan programas de lectura
                />
                <input 
                type = "text" 
                value = {ocupacion}
                //Captura lo que se ingresa en la caja de texto
                onChange = {evento => setOcupacion(evento.target.value)}
                placeholder = "Ocupacion"//Muestra dentro de la caja de texto "Contraseña"
                aria-label = "Ocupacion"//->Ofrece accesibilidad para aquellas personas que no tienen vision y usan programas de lectura
                />
                <select value={rol} onChange={evento => setRol(evento.target.value)}>
                    <option value="" disabled>Seleccione una opcion</option>
                    <option value="Arrendador"> Arrendador</option>
                    <option value="Arrendatario">Arrendatario</option>
                </select>
                <select value={esEstudiante} onChange={evento => setEsEstudiante(evento.target.value)}>
                    <option value="" disabled>¿Eres estudiante?</option>
                    <option value="true"> Si</option>
                    <option value="false">No</option>
                </select>
            </form>
                <button  onClick={handleSubmit} className="button-register">Registrarse</button>
            
            {error && <p className="error-message">Todos los campos son obligatorios</p>}

            {/* Hipervínculo de ¿Ya tienes una cuenta? Inicia Sesión */}
            <div className="forgot-password">
                    <a href="/login">¿Ya tienes una cuenta? Inicia Sesión</a> {/*En # va el link hacia la pagina login */}
                </div>


            </div>
        </section>
    )
}