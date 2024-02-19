import style from '../Form/Form.module.css'
import { useState } from 'react'

const Form = () => {
    
    let loginValue;
    const [ userData, setUserData ] = useState({
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        if(event.target.name === 'email')setUserData({...userData, email: event.target.value})
        if(event.target.name === 'password')setUserData({...userData, password: event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }
    console.log(loginValue);
    return (
        <div className='form'>
            <form className={style.container} onSubmit={handleSubmit}>
                <h2>Alta de usuario</h2>
                <div>
                    <label htmlFor="lblEmail">Email: </label>
                    <input
                        //className={style}
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
                        //className={style}
                        type="password" 
                        name="password"
                        placeholder="Ingrese su contraseña" 
                        value={userData.password}
                        onChange={handleChange}
                    />
                <hr></hr>
                </div>
                {/* ACÁ DEBO AGREGAR LA RESPUESTA PARA LOGINS FAILS con hover */}
                <div></div>
                <div>
                    <input 
                        //className={style}
                        type="submit" 
                        name="Submit"
                        value="Ingresar"
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