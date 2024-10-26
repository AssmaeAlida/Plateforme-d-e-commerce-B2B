import React, { useState } from 'react';
import './DescriptionProduit.css'

function DescriptionProduit() {
  const [quantity, setQuantity] = useState(2);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  }

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  return (
    <>
     <div className="icooooon-retour">
            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                <path d="M25.2504 4.20886C13.6354 4.20886 4.20874 13.6355 4.20874 25.2505C4.20874 36.8655 13.6354 46.2922 25.2504 46.2922C36.8654 46.2922 46.2921 36.8655 46.2921 25.2505C46.2921 13.6355 36.8654 4.20886 25.2504 4.20886ZM32.615 26.8287H21.6944L25.3135 30.4478C25.9237 31.058 25.9237 32.068 25.3135 32.6782C24.9979 32.9939 24.5981 33.1412 24.1983 33.1412C23.7985 33.1412 23.3987 32.9939 23.0831 32.6782L16.7706 26.3657C16.4771 26.0688 16.3125 25.6681 16.3125 25.2505C16.3125 24.833 16.4771 24.4323 16.7706 24.1353L23.0831 17.8228C23.6933 17.2126 24.7033 17.2126 25.3135 17.8228C25.9237 18.433 25.9237 19.443 25.3135 20.0532L21.6944 23.6724H32.615C33.4777 23.6724 34.1931 24.3878 34.1931 25.2505C34.1931 26.1132 33.4777 26.8287 32.615 26.8287Z" fill="#FF5722"/>
            </svg>
          </div>
   <div className="image_DecProduct">
        <img src='./images/image-63.png'/>
   </div>
   <div className="Description">
    <h1 className='NameProdDesc'>Havic HV G-92 Gamepad</h1>
    <h3 className='SatatusProduct'>In Stock</h3>
    <p className='Desc'>
         PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
    </p>
    <div className="hr-container">
    <hr />
  </div>
    <div class="quantity">
        <button class="minus-btn" type="button" name="button" onClick={decreaseQuantity}>-</button>
        <input type="text" name="name" value={quantity} readOnly />
        <button class="plus-btn" type="button" name="button" onClick={increaseQuantity}>+</button>
    </div>
    <div className='Button_BuyNow'>
    Buy Now
    </div>
    <div>
             <div className='iconDelivery'>
             <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <g clip-path="url(#clip0_95_545)">
              <path d="M11.6654 31.6667C13.5063 31.6667 14.9987 30.1743 14.9987 28.3333C14.9987 26.4924 13.5063 25 11.6654 25C9.82442 25 8.33203 26.4924 8.33203 28.3333C8.33203 30.1743 9.82442 31.6667 11.6654 31.6667Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M28.3333 31.6667C30.1743 31.6667 31.6667 30.1743 31.6667 28.3333C31.6667 26.4924 30.1743 25 28.3333 25C26.4924 25 25 26.4924 25 28.3333C25 30.1743 26.4924 31.6667 28.3333 31.6667Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8.33203 28.3335H6.9987C5.89413 28.3335 4.9987 27.4381 4.9987 26.3335V21.6668M3.33203 8.3335H19.6654C20.7699 8.3335 21.6654 9.22893 21.6654 10.3335V28.3335M14.9987 28.3335H24.9987M31.6654 28.3335H32.9987C34.1033 28.3335 34.9987 27.4381 34.9987 26.3335V18.3335M34.9987 18.3335H21.6654M34.9987 18.3335L30.5813 10.9712C30.2199 10.3688 29.5688 10.0002 28.8663 10.0002H21.6654" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M8 28H6.66667C5.5621 28 4.66667 27.1046 4.66667 26V21.3333M3 8H19.3333C20.4379 8 21.3333 8.89543 21.3333 10V28M15 28H24.6667M32 28H32.6667C33.7712 28 34.6667 27.1046 34.6667 26V18M34.6667 18H21.3333M34.6667 18L30.2493 10.6377C29.8878 10.0353 29.2368 9.66667 28.5343 9.66667H21.3333" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5 11.8182H11.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M1.81641 15.4545H8.48307" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5 19.0909H11.6667" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
              <clipPath id="clip0_95_545">
                <rect width="40" height="40" fill="white"/>
              </clipPath>
            </defs>
          </svg>
             </div>
      <div className="freeDilivery">
      <h3>Free Delivery</h3>
             <h6>Enter your postal code for Delivery Availability</h6>
      </div>

    </div>
    <div>
     <div className='IconReturnDelivery'>
     <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
          <g clip-path="url(#clip0_95_540)">
            <path d="M33.3346 18.3334C32.927 15.4004 31.5664 12.6828 29.4624 10.5992C27.3583 8.51557 24.6276 7.18155 21.6908 6.80261C18.7539 6.42366 15.774 7.02082 13.21 8.5021C10.6459 9.98337 8.64005 12.2666 7.5013 15M6.66797 8.33335V15H13.3346" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.66797 21.6667C7.07557 24.5997 8.43619 27.3173 10.5402 29.4009C12.6443 31.4845 15.375 32.8185 18.3119 33.1974C21.2487 33.5764 24.2286 32.9792 26.7926 31.4979C29.3567 30.0167 31.3626 27.7335 32.5013 25M33.3346 31.6667V25H26.668" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_95_540">
              <rect width="40" height="40" fill="white"/>
            </clipPath>
          </defs>
        </svg>
     </div>
      <div className="freeDilivery">
      <h3>Return Delivery</h3>
             <h6>Free 30 Days Delivery Returns. Details</h6>
      </div>

    </div>
   </div>

      

   
   
    </>
  )
}

export default DescriptionProduit
