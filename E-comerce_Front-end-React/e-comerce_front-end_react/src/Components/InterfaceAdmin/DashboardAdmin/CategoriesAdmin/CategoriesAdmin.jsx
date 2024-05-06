import { useState } from 'react'
import './../DashboardAdmin.css'
import Header from './../Header'
import Sidebar from './../Sidebar'
import Tables from './Tables'

function CategoriesAdmin() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      < Tables/>
    </div>
  )
}

export default CategoriesAdmin