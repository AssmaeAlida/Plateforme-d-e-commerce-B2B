import React, { useState } from 'react';
import './../CategoriesAdmin/Tables.css'
import { FaCheck, FaTimes } from 'react-icons/fa';

const ProductsPage = () => {
    const [data, setData] = useState([
        { id: 1, productName: 'Product 1', quantity: 10, price: 50, isValid: true, isButtonVisible: true },
        { id: 2, productName: 'Product 2', quantity: 5, price: 30, isValid: false, isButtonVisible: true },
        // Ajoutez plus de données initiales ici si nécessaire
    ]);

    const handleValidation = (id, isValid) => {
        const newData = data.map(item => {
            if (item.id === id) {
                return { ...item, isValid: isValid, isButtonVisible: false };
            }
            return item;
        });
        setData(newData);
    };

    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>PRODUCTS</h3>
            </div>
            <div>
                <table className='Tableproductss'>
                    <thead>
                        <tr>
                            <th className='Attibut'>ID</th>
                            <th className='Attibut'>Image</th>
                            <th className='Attibut'>Product Name</th>
                            <th className='Attibut'>Quantity</th>
                            <th className='Attibut'>Price</th>
                            <th className='Attibut'>Validation</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td className='AttibutCategory'>{item.id}</td>
                                <td className='AttibutCategory'>
                                    <img src="/images/spadrilles.png" alt="Product" style={{ width: '50px', height: '50px' }} />
                                </td>
                                <td className='AttibutCategory'>{item.productName}</td>
                                <td className='AttibutCategory'>{item.quantity}</td>
                                <td className='AttibutCategory'>{item.price}</td>
                                <td className='AttibutCategory'>
                                    {item.isButtonVisible && (
                                        <>
                                            <button className='btn' onClick={() => handleValidation(item.id, true)} style={{ backgroundColor: 'green' }}>
                                                <FaCheck color="white" />
                                            </button>
                                            <button className='btn' onClick={() => handleValidation(item.id, false)} style={{ backgroundColor: 'red' }}>
                                                <FaTimes color="white" />
                                            </button>
                                        </>
                                    )}
                                    {!item.isValid && !item.isButtonVisible && (
                                        <span style={{ color: 'red' }}>Not Valid</span>
                                    )}
                                    {item.isValid && !item.isButtonVisible && (
                                        <span style={{ color: 'green' }}>Valid</span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default ProductsPage;
