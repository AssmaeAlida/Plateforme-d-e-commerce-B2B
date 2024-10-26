import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import './Cart.css';

function Cart() {
  const [products, setProducts] = useState([
    { id: 1, name: 'LCD Monitor', price: 650, quantity: 1, image: '/images/g-922500-x-5001.png' },
    { id: 2, name: 'M1 Gamepad', price: 550, quantity: 2, image: '/images/g-922500-x-5001.png' }
  ]);

  const increaseQuantity = (id) => {
    const updatedProducts = [...products];
    const index = updatedProducts.findIndex(product => product.id === id);
    updatedProducts[index].quantity += 1;
    setProducts(updatedProducts);
  };

  const decreaseQuantity = (id) => {
    const updatedProducts = [...products];
    const index = updatedProducts.findIndex(product => product.id === id);
    if (updatedProducts[index].quantity > 1) {
      updatedProducts[index].quantity -= 1;
      setProducts(updatedProducts);
    }
  };

  const removeProduct = (id) => {
    const updatedProducts = products.filter(product => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div className='yourCart'>
           <div className="icooooon-retour">
            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                <path d="M25.2504 4.20886C13.6354 4.20886 4.20874 13.6355 4.20874 25.2505C4.20874 36.8655 13.6354 46.2922 25.2504 46.2922C36.8654 46.2922 46.2921 36.8655 46.2921 25.2505C46.2921 13.6355 36.8654 4.20886 25.2504 4.20886ZM32.615 26.8287H21.6944L25.3135 30.4478C25.9237 31.058 25.9237 32.068 25.3135 32.6782C24.9979 32.9939 24.5981 33.1412 24.1983 33.1412C23.7985 33.1412 23.3987 32.9939 23.0831 32.6782L16.7706 26.3657C16.4771 26.0688 16.3125 25.6681 16.3125 25.2505C16.3125 24.833 16.4771 24.4323 16.7706 24.1353L23.0831 17.8228C23.6933 17.2126 24.7033 17.2126 25.3135 17.8228C25.9237 18.433 25.9237 19.443 25.3135 20.0532L21.6944 23.6724H32.615C33.4777 23.6724 34.1931 24.3878 34.1931 25.2505C34.1931 26.1132 33.4777 26.8287 32.615 26.8287Z" fill="#FF5722"/>
            </svg>
          </div>
      <h2>
      Your Cart 
      </h2>

    <table>
      <thead>
        <tr>
          <th>Image</th>
          <th>Product name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Subtotal</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <tr key={index}>
            <td><img src={product.image} alt={product.name} /></td>
            <td>{product.name}</td>
            <td>${product.price}</td>
            <td>
              <button onClick={() => decreaseQuantity(product.id)}>-</button>
              <span>{product.quantity}</span>
              <button onClick={() => increaseQuantity(product.id)}>+</button>
            </td>
            <td>${product.price * product.quantity}</td>
            <td><button className='btn' onClick={() => removeProduct(product.id)}><FaTrash /></button></td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className='CartTotal'>
          <p>Cart Total</p>
          <div>
              <h4> Subtotal:</h4>
              <h3>$1750</h3>
          </div>
          <div className="hr-container2">
             <hr />
           </div>
           <div>
              <h4> Shipping:</h4>
              <h3>Free</h3>
          </div>
          <div className="hr-container2">
             <hr />
           </div>
           <div>
              <h4> Total:</h4>
              <h3>$1750</h3>
          </div>
          <div>
              <btn className="Btn-CheckOut">Procees to checkout</btn>
          </div>
        
    </div>
  </div>

  );
}

export default Cart;
