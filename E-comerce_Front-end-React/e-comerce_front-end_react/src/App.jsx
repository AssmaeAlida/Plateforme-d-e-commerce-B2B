
import LoginAdmin from './Components/InterfaceAdmin/LoginAdmin/LoginAdmin'
import './index.css'
<<<<<<< HEAD
import Profile from './Components/Profile/Profile'
=======
import Register from './Components/ForgetPassword/Register/Register'
import Home from './Components/Home/Home'
import Login from './Components/ForgetPassword/Register/Login'
import ForgetPassword from './Components/ForgetPassword/ForgetPassword'
import RetrievePassword from './Components/RetrievePassword/RetrievePassword'
import InsertCode from './Components/ForgetPassword/InsertCode'
import {BrowserRouter , Routes , Route } from 'react-router-dom'
>>>>>>> 06b772a22b2a2808bb75a01eaa8318fc30773cea
function App() {

  return (
    <>
    <div className='body'>
<<<<<<< HEAD
      <Profile></Profile>
=======
      <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/forgetpassword' element={<ForgetPassword/>}></Route>
        <Route path ="/recievePassword" element={<RetrievePassword/>}></Route>
        <Route path='/insertCode' element={<InsertCode/>}></Route>

        

      </Routes>
      
      </BrowserRouter>
      
      
      
>>>>>>> 06b772a22b2a2808bb75a01eaa8318fc30773cea
    </div>

   
   
    </>
  )
}

export default App