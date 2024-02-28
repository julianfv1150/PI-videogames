/* eslint-disable react/prop-types */
import style from './Login.module.css'
import { emailValidate, passwordValidate, loginValidate, showModal } from '../../utils/index'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { online } from '../../../redux/actionsCreators'


const Login = ({sesion, changeForm}) => {

    const dispatch = useDispatch();

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
        
        (event.target.name === 'email') && setErrorCred({...errorCred, email: emailValidate({...userData, email: event.target.value})});   
        (event.target.name === 'password') && setErrorCred({...errorCred, pass: passwordValidate({...userData, pass: event.target.value})})
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(loginValidate(userData)){
            const valueSesion = await sesion(userData, 'login')
            if( valueSesion.state === false){
                showModal(valueSesion.message)
            }
            else{
                dispatch(online(userData))
                sesion(userData, 'login')
            }
        }
        else{
            showModal('Los datos ingresados no cumplen con las condiciones')
        }
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
                    <label 
                        className={errorCred.email !== 'OK' ? style.errors : style.invisible} 
                        htmlFor="lblerrorEmail">{errorCred.email}
                    </label>
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
                        type="button" 
                        name="register" 
                        value="Registrarse"
                        onClick={()=>changeForm()}
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