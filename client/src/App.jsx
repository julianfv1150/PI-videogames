import './App.css'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
//import Navigation from './components/Navigation/Navigation'
import Form from './components/Form/Form'
//import Cards from './components/Cards/Cards'
//import ViewOptions from './components/ViewOptions/ViewOptions'


function App() {
  //const location = useLocation();
  //const navigate = useNavigate();

  return (
    <div id="App">
      <Header/>
      {/* {location.pathname !== '/' ? <Navigation /> : null} */}
      <Routes>
        <Route path="/" element={<Form/>}></Route>
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

