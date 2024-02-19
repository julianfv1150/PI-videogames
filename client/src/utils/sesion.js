import { login } from './index'

const sesion = (userData, setIsLogin, isLogin, navigate) =>{
    const userFound = login(userData);
    setIsLogin(userFound);
    isLogin && navigate('/');                                          
  }

export default sesion;