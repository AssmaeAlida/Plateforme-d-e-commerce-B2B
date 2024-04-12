import './index.css'
import Register from './Components/ForgetPassword/Register/Register'
import Home from './Components/Home/Home'
import Login from './Components/ForgetPassword/Register/Login'
import ForgetPassword from './Components/ForgetPassword/ForgetPassword'
import RetrievePassword from './Components/RetrievePassword/RetrievePassword'
import InsertCode from './Components/ForgetPassword/InsertCode'
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
        <Route path='/forgetpassword' element={<ForgetPassword/>}></Route>
        <Route path ="/recievePassword" element={<RetrievePassword/>}></Route>
        <Route path='/insertCode' element={<InsertCode/>}></Route>

        

      </Routes>
      
      </BrowserRouter>
      
      
      
    </div>

   
   
    </>
  )
}

export default App
