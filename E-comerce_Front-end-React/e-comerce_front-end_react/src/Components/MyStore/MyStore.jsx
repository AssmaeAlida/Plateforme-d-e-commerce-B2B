import React from 'react';
import NavBarVend from "../Home/NavBar/NavBarVend";
import Pagination from '../Home/Pagination/Pagination';
import './MyStore.css';
import OrderValue from './OrderValue/OrderValue';
import TotalOrders from './TotalOrders/TotalOrders';
import ValueProduct from './ValueProduct/ValueProduct';
import AddProduct from './AddProduct/AddProduct';
import TopSellingProduct from './TopSellingProduct/TopSellingProduct';
import ListProduct from './ListProduct/ListProduct'
function MyStore() {
    return (
        <>
    ,      <NavBarVend   src='./images/ellipse-31.png' alt='image profile'/>
             <Pagination/>
            <div>
               <OrderValue/>
               <TotalOrders/>
                <ValueProduct/>
            
            </div>   

            <div>
               <AddProduct/>
                <TopSellingProduct/>
            </div>
            <div>
              <ListProduct src='/images/t-shirt.png' alt='t-shirt' nameProduct='t-shirt' QTe='12'  pricee='100' dateDelancement='08/08/2023' />

            </div>

        </>
    );
}

export default MyStore;
