import React from 'react';
import './TopSellingProduct.css';
import TopProduct from './TopProduct/TopProduct';

function TopSellingProduct() {
    return (
        <>
    
            <div className='TopSellingProduct'> 
            <div>
                 <h2 className='TitleTopProduct'>Top Selling Product</h2> 
                 <a className='SeeAllProduct'>See All Product</a>
             </div>
             <TopProduct src='images/spadrilles.png' alt='spaa' nameProduct='Red Tape Sports Shoes for Men' sales='429'/>  
             <TopProduct src='images/spadrilles.png' alt='spaa' nameProduct='Red Tape Sports Shoes for Men' sales='429'/>  
             <TopProduct src='images/spadrilles.png' alt='spaa' nameProduct='Red Tape Sports Shoes for Men' sales='429'/>  

             </div>

   

        </>
    );
}

export default TopSellingProduct;
