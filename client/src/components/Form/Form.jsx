import style from './Form.module.css'
import { login, emailValidate, passwordValidate } from '../../utils/index'
import { useState } from 'react'

const Form = () => {
    
    let errorEmail;
    let errorPassword;
    const [ userData, setUserData ] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        if(event.target.name === 'email')setUserData({...userData, email: event.target.value})
        if(event.target.name === 'password')setUserData({...userData, password: event.target.value})
    }

    if(emailValidate(userData.email).state === false){
        errorEmail = emailValidate(userData.email);
    }
    if(emailValidate(userData.password).state === false){
        errorPassword = passwordValidate(userData.password);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData);
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
                        className={errorEmail.state === false ? style.errors : style.invisible} 
                        htmlFor="lblerrorEmail">
                        {errorEmail.message}
                    </label>
                    <br></br>
                    <label 
                        className={errorPassword.state === false ? style.errors : style.invisible}
                        htmlFor="lblerrorPass">
                        {errorPassword.message}
                    </label>
                </div>
                <div>
                    <input 
                        type="submit" 
                        name="Submit"
                        value="Ingresar"
                    />
                    <input 
                        //className={style}
                        type="submit" 
                        name="Submit" 
                        value="Registrarse"
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

export default Form;