import React from 'react';
import './OrderValue.css';

function OrderValue() {
    return (
        <>
    
      
             <div className='OrderValue'>
                <svg xmlns="http://www.w3.org/2000/svg" width="360" height="176" viewBox="0 0 360 176" fill="none">
                    <g filter="url(#filter0_d_95_1070)">
                      <path d="M16 12C16 6.47715 20.4772 2 26 2H342C347.523 2 352 6.47715 352 12V144C352 149.523 347.523 154 342 154H26C20.4772 154 16 149.523 16 144V12Z" fill="#FF5722"/>
                    </g>
                    <defs>
                      <filter id="filter0_d_95_1070" x="0.1" y="0.1" width="359.8" height="175.8" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dx="-4" dy="10"/>
                        <feGaussianBlur stdDeviation="5.95"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_95_1070"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_95_1070" result="shape"/>
                      </filter>
                    </defs>
                  </svg>
                  
                  <h4 className='OrderValueTitle'>AVG . Order Value</h4>
                  <h3 className='OrderValueEEE'>$ 77.21</h3>
                  <h6 className='OrderValue2'>+ 3.16%   From last month</h6>
              </div> 
              
        </>
    );
}

export default OrderValue;
