import { useState } from 'react'
import './../DashboardAdmin.css'
import Header from './../Header'
import Sidebar from './../Sidebar'
import TablesAdmins from './TablesAdmins'

function Admins() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      < TablesAdmins/>
    </div>
  )
}

export default Admins