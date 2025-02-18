
import './index.css'
import Register from './Components/ForgetPassword/Register/Register'
import Home from './Components/Home/Home'
import Login from './Components/ForgetPassword/Register/Login'
import ForgetPassword from './Components/ForgetPassword/ForgetPassword'
import RetrievePassword from './Components/RetrievePassword/RetrievePassword'
import InsertCode from './Components/ForgetPassword/InsertCode'
import {BrowserRouter , Routes , Route } from 'react-router-dom'
import LoginAdmin from './Components/InterfaceAdmin/LoginAdmin/LoginAdmin'
import Steeper from './Components/CreateStore/Stepper'

import Homevend from './Components/Home/HomeVend/HomeVend'
import Profile from './Components/Profile/Profile'
import MyStore from './Components/MyStore/MyStore'
import PageAddProduct from './Components/PageAddProduct/PageAddProduct'
import DashboardAdmin from './Components/InterfaceAdmin/DashboardAdmin/DashbordAdmin'
import CategoriesAdmin from './Components/InterfaceAdmin/DashboardAdmin/CategoriesAdmin/CategoriesAdmin'
import Admins from './Components/InterfaceAdmin/DashboardAdmin/Admins/Admins'
import ViewProduct from './Components/InterfaceAdmin/DashboardAdmin/ViewProducts/ViewProduct'
import DescriptionProduit from './Components/DescriptionProduit/DescriptionProduit'
import Cart from './Components/Cart/Cart'
import CheckOut from './Components/CheckOut/CheckOut'
function App() {

  return (
    <>
    <div className='body'>
      <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/forgetpassword' element={<ForgetPassword/>}></Route>
        <Route path ="/recievePassword" element={<RetrievePassword/>}></Route>
        <Route path='/insertCode' element={<InsertCode/>}></Route>
        <Route path='/loginAdmin' element={<LoginAdmin/>}></Route>

        <Route path='/createStore' element={<Steeper/>}></Route>

        <Route path='/homeVend' element={<Homevend/>}></Route>
        <Route path='/Profile' element={<Profile/>}></Route>
        <Route path='/MyStore' element={<MyStore/>}></Route>
        <Route path='/AddProduct' element={<PageAddProduct/>}></Route>
        <Route path='/categories' element={<CategoriesAdmin/>}></Route>
        <Route path='/admins' element={<Admins/>}></Route>
        <Route path='/productsAdmin' element={<ViewProduct/>}></Route>

        <Route path='/dashboard' element={<DashboardAdmin/>}></Route>

        <Route path='/description' element={<DescriptionProduit/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/CheckOut' element={<CheckOut/>}></Route>
      </Routes>
      
      </BrowserRouter>
      


      
    </div>

   
   
    </>
  )
}

export default App
