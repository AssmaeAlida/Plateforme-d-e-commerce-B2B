import { useState } from 'react'
import './../DashboardAdmin.css'
import Header from './../Header'
import Sidebar from './../Sidebar'
import TablesProduct from './TablesProduct'

function ViewProduct() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <TablesProduct/>
    </div>
  )
}

export default ViewProduct