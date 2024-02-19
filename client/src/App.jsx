import './App.css'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom'
import { Header, Login, Register, Navigation } from './components/index'
import { useState, useEffect } from 'react'
import { login } from './utils/index'

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isRegister, setIsRegister] = useState(false)
  const [isLogin, setIsLogin] = useState(false)

  const register = () => {
    setIsRegister(true);
  }

  const sesion = (userData) => {
      const userFound = login(userData);
      setIsLogin(userFound);
      isLogin && navigate('/home');                                          
  }

  const logOut = () => {
    setIsLogin(false)
  }

  useEffect(()=>{
    !isLogin && navigate('/')
  }, [isLogin]);

  return (
    <div id="App">
      <Header/>
        {location.pathname !== '/' ? <Navigation logOut={logOut}/> : null}
      <Routes>
      <Route path="/" element={
                !isRegister 
          ? <Login sesion={sesion}
                    register={register}/> 
          : <Register />
      }/>

        {/* <Route path='/home' render={()=>{
          <>
            <ViewOptions />
            <Cards /> 
          </>
        }} /> */}

      </Routes>
    </div>
  )
}

export default App

