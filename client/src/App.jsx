import './App.css'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { Header, Login, Register, Navigation, Cards, ViewOptions, NewGame, CardDetail } from './components/index'
import { useState, useEffect } from 'react'
import { login, userCreate } from './utils/index'


function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isChangeForm, setIsChangeForm] = useState(false)
  const [isLogin, setIsLogin] = useState(false)
  
  const changeForm = () => {
    setIsChangeForm(!isChangeForm);
  }
 
  const sesion = async (userData, ubi) => {
    try {
      if(ubi === 'login'){
        const data = await login(userData)
        setIsLogin(data.state);
        return data;
      }
      if(ubi === 'register'){
        const { isCreated } = await userCreate(userData)
        setIsLogin(isCreated)
      }
    } catch (error) {
      console.log(error.message);
    }    
  };
  
  const logOut = () => {
    setIsLogin(false)
  }
  
  useEffect(()=>{
    isLogin && navigate('/home')
    !isLogin && navigate('/')
  }, [isLogin]);
  
  return (
    <div id="App">      
      <Header/>
      {location.pathname !== '/' ? <Navigation logOut={logOut}/> : null}
      <Routes>   
        <Route path="/" element={
          !isChangeForm 
          ? <Login  
            sesion={sesion}                  
            changeForm={changeForm}/> 
          : <Register 
            sesion={sesion}
            changeForm={changeForm}/>
        }/>
        <Route path="/home" 
          element={<><Cards /> <ViewOptions /></>}/>
        <Route path="/newGame" 
          element={<NewGame />}/>
        <Route path="/videogamesDetail/:id" element={<CardDetail />}/>
      </Routes>
    </div>
  )
}

export default App

