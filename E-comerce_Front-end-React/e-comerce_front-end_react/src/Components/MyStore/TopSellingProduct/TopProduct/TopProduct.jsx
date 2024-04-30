import React from 'react';
import './TopProduct.css';

function TopProduct({src , alt,nameProduct, sales}) {
    return (
        <div className='TopArticle'>
        <div className='image-product'>
        <img  src={src} alt={alt}/>

        </div>
          <h4 className='NameTopProduct'>{nameProduct}</h4>
            <h6 className='Sales'>{sales} Sales</h6>
              <div className='icon-available'>
              <svg xmlns="http://www.w3.org/2000/svg" width="4" height="5" viewBox="0 0 4 5" fill="none">
                <ellipse cx="2" cy="2.5" rx="2" ry="2.5" fill="#35813C"/>
                </svg>
                <h6 className='available'>Available</h6>
              </div>

        </div>
    );
}

export default TopProduct;
