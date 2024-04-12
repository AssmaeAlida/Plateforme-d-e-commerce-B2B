import './index.css'
<<<<<<< HEAD
import Home from './Components/Home/Home'
=======
import Register from './Components/ForgetPassword/Register/Register'
import Home from './Components/ForgetPassword/HomeTest/Home'
import Login from './Components/ForgetPassword/Register/Login'
import ForgetPassword from './Components/ForgetPassword/ForgetPassword'
import {BrowserRouter , Routes , Route } from 'react-router-dom'
>>>>>>> c68aa26033e68cfef48e09d4d31d537b916bdc38
function App() {

  return (
    <>
    <div className='body'>
<<<<<<< HEAD
 
<Home></Home>
=======
      <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/forgetpassword' element={<ForgetPassword/>}></Route>
        

      </Routes>
      
      </BrowserRouter>
      
      
      
>>>>>>> c68aa26033e68cfef48e09d4d31d537b916bdc38
    </div>

   
   
    </>
  )
}

export default App
