/* eslint-disable react/prop-types */
import style from '../Register/Register.module.css'
import { emailValidate, passwordValidate, userValidate } from '../../utils/index'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { online, create } from '../../../redux/actionsCreators'
import { chargeGames } from '../../utils/index'

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
        
        setErrorData({
            ...errorData,
            errEmail: emailValidate(userData),
            errName: userValidate(userData),
            errPass: passwordValidate(userData)
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(online(userData))
        chargeGames().then(data => {
            dispatch(create(data))
        })
        sesion(userData, 'register')
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