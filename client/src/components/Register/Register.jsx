/* eslint-disable react/prop-types */
import style from '../Register/Register.module.css'
import { emailValidate, passwordValidate, userValidate, registerValidate } from '../../utils/index'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { online } from '../../../redux/actionsCreators'

const Register = ({ changeForm, sesion }) => {
    
    const dispatch = useDispatch()
    
    const [ userData, setUserData ] = useState({
        email: '',
        name: '',
        pass: ''
    })

    const [errorData, setErrorData ] = useState({
        errEmail: '',
        errUser: '',
        errPass: ''
    })

    const handleChange = (event) => {
        (event.target.name === 'email') && setUserData({...userData, email: event.target.value});
        (event.target.name === 'name') && setUserData({...userData, name: event.target.value});
        (event.target.name === 'password') && setUserData({...userData, pass: event.target.value});     

        (event.target.name === 'email') && setErrorData({...errorData, errEmail: emailValidate({...userData, email: event.target.value})});   
        (event.target.name === 'name') && setErrorData({...errorData, errUser: userValidate({...userData, name: event.target.value})});   
        (event.target.name === 'password') && setErrorData({...errorData, errPass: passwordValidate({...userData, pass: event.target.value})}) 
    }

    const handleSubmit = async(event) => {
        event.preventDefault();
        if(registerValidate(userData)){
            const valueSesion = await sesion(userData, 'register')
            console.log(valueSesion);
            if( valueSesion.state === false){
                console.log(valueSesion.message)
            }
            else{
                dispatch(online(userData))
                sesion(userData, 'register')
            }
        }
        else{
            console.log('Los datos ingresados no cumplen con las condiciones');
        }
    }

    return (
        <div className='form'>
            <form className={style.container} onSubmit={handleSubmit}>
                <h2>Alta de usuario</h2>
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
                        className={errorData.errEmail !== 'OK' ? style.errors : style.invisible} 
                        htmlFor="lblerrorEmail">{errorData.errEmail}
                    </label>
                </div>
                <div>
                    <label htmlFor="lblUser">Usuario: </label>
                    <input
                        type="text" 
                        name="name"
                        placeholder="Ingrese su nombre de usuario"
                        autoComplete='off'
                        value={userData.name}
                        onChange={handleChange}
                    />
                    <hr></hr>
                    <label
                        className={errorData.errName !== 'OK' ? style.errors : style.invisible}
                        htmlFor="lblerrorName">{errorData.errName}
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
                        className={errorData.errPass !== 'OK' ? style.errors : style.invisible}
                        htmlFor="lblerrorPass">{errorData.errPass}
                    </label>
                </div>
                <div>
                <input 
                    type="button" 
                    name="register"
                    value="Volver"
                    onClick={()=>changeForm()}
                />
                <input 
                    type="submit" 
                    name="submit" 
                    value="Registrarse"
                />
                </div>
            </form>
        </div>
    )
}

export default Register;