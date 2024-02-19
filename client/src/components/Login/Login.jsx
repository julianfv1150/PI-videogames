/* eslint-disable react/prop-types */

import style from './Login.module.css'
import { emailValidate, passwordValidate } from '../../utils/index'
import { useState } from 'react'

const Login = ({sesion, register}) => {
    
    const [ userData, setUserData ] = useState({
        email: '',
        pass: ''
    })
    
    const [ errorCred, setErrorCred ] = useState({
        email: '',
        pass: ''
    })
    
    const handleChange = (event) => {
        (event.target.name === 'email') && setUserData({...userData, email: event.target.value});
        (event.target.name === 'password') && setUserData({...userData, pass: event.target.value});
        
        setErrorCred({
            ...errorCred, 
            email: emailValidate(userData), 
            pass: passwordValidate(userData)
        });   
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        sesion(userData);
    }

    return (
        <div className='form'>
            <form className={style.container} onSubmit={handleSubmit}>
                <h2>Inicio de sesión</h2>
                <div>
                    <label htmlFor="lblEmail">Email: </label>
                    <input
                        type="text" 
                        name="email"
                        placeholder="Ingrese su email"
                        autoComplete='off'
                        value={userData.email}
                        onChange={handleChange}
                    />
                <hr></hr>
                </div>
                <div>
                    <label htmlFor="lblPassword">Contraseña: </label>
                    <input
                        type="password" 
                        name="password"
                        placeholder="Ingrese su contraseña" 
                        value={userData.password}
                        onChange={handleChange}
                    />
                <hr></hr>
                </div>
                    {/* GESTIÓN DE ERRORES DEL LOGIN */}
                <div>
                    <label 
                        className={errorCred.email !== 'OK' ? style.errors : style.invisible} 
                        htmlFor="lblerrorEmail">{errorCred.email}
                    </label>
                    <br></br>
                    <label 
                        className={errorCred.pass !== 'OK' ? style.errors : style.invisible}
                        htmlFor="lblerrorPass">{errorCred.pass}
                    </label>
                </div>
                <div>
                    <input 
                        type="submit" 
                        name="Submit"
                        value="Ingresar"
                    />
                    <input 
                        type="submit" 
                        name="Submit" 
                        value="Registrarse"
                        onClick={register}
                    />
                </div>
                <div className={style.defaultData}>
                    <p>Credenciales:</p>
                    <hr></hr>
                    <p>Usr: user@videogames.com</p>
                    <p>Pass: userVideogames</p>
                </div>
            </form>
        </div>
    )
}

export default Login;