import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill
} from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  // Mettre à jour l'état de l'élément actif lorsque l'emplacement change
  React.useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsCart3 className='icon_header' /> YourStore
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className={`sidebar-list-item ${activeLink === '/dashboard' ? 'active' : ''}`}>
          <Link to="/dashboard">
            <BsGrid1X2Fill className='iconD' /> Dashboard
          </Link>
        </li>
        <li className={`sidebar-list-item ${activeLink === '/products' ? 'active' : ''}`}>
          <Link to="/productsAdmin">
            <BsFillArchiveFill className='iconD' /> Products
          </Link>
        </li>
        <li className={`sidebar-list-item ${activeLink === '/categories' ? 'active' : ''}`}>
          <Link to="/categories">
            <BsFillGrid3X3GapFill className='iconD' /> Categories
          </Link>
        </li>
        <li className={`sidebar-list-item ${activeLink === '/customers' ? 'active' : ''}`}>
          <Link to="/customers">
            <BsPeopleFill className='iconD' /> Customers
          </Link>
        </li>
        <li className={`sidebar-list-item ${activeLink === '/admins' ? 'active' : ''}`}>
          <Link to="/admins">
            <BsListCheck className='iconD' /> Admins
          </Link>
        </li>

        <li className={`sidebar-list-item ${activeLink === '/settings' ? 'active' : ''}`}>
          <Link to="/settings">
            <BsFillGearFill className='iconD' /> Setting
          </Link>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
