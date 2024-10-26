
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header'
import MainStyle from './Component/MainStyle'
import Checkout from './Component/Checkout'
import {BrowserRouter as Router, Routes,Route } from 'react-router-dom'

// import Home from './Component/Home'

   

function App() {
 
  return (
    <>
    <Router>

<Routes>

<Route path='/Checkout' element={<><Header/><Checkout/></>}></Route>
<Route path='/' element={<><Header/><MainStyle/></>}></Route>

</Routes>

    </Router>
    </>
  )
}


export default App


