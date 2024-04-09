import './index.css'
import Register from './Components/ForgetPassword/Register/Register'
import Home from './Components/ForgetPassword/HomeTest/Home'
import Login from './Components/ForgetPassword/Register/Login'
import ForgetPassword from './Components/ForgetPassword/ForgetPassword'
import {BrowserRouter , Routes , Route } from 'react-router-dom'
function App() {

  return (
    <>
    <div className='body'>
      <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>

      </Routes>
      
      </BrowserRouter>
      
      
      
    </div>

   
   
    </>
  )
}

export default App
