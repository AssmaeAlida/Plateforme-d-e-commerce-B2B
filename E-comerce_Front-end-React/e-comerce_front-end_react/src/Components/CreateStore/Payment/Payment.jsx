import React, { useState } from 'react';
import './Payment.css';
function Payment({ setIsPhoneClicked, address, setAddress, addressError, setAddressError,phoneNumber, setPhoneNumber, phoneNumberError, setPhoneNumberError }) {
    
    const handlePhoneNumberChange = (e) => {
        const value = e.target.value;
        if (value.length !== 10) {
          setPhoneNumberError("The phone number should contain 10 numbers");
        } else {
          setPhoneNumberError('');
        }
        setPhoneNumber(value);
      };

    const handlePhoneNumberFocus = () => {
        setIsPhoneClicked(true);
      };

    const handleAddressChange = (e) => {
        const value = e.target.value;
        if (value.trim() === '') {
          setAddressError("The address shouldn't be void");
        } else {
          setAddressError('');
        }
        setAddress(value);
      };
    
    return (
        <div>
            <h2 className='storeTitle' style={{ fontSize: "36px", fontFamily: "Inter", marginBottom: "50px", fontWeight: "700", lineHeight: "normal", textAlign: "center" }}>Add your address and phone number</h2>

            <div style={{ paddingLeft : "20px",fontSize :"20px" , fontFamily : "Inter" , display: 'flex', justifyContent: 'space-between', marginBottom: '4%', textAlign: "center", alignItems: "center" }}>
                <div style={{ flex: 2 }}>
                    <textarea
                        placeholder="      Enter your address..."
                        style={{ fontFamily: 'Inter',
                        fontSize: '18px',width: "50%",border: addressError ? '2px solid red' : '2px solid #E0E0E0', resize: "none", height: "100px",  borderRadius: "30px", marginTop: "20px", padding: "10px" , color : '#006400',  paddingLeft : '30px', paddingTop : '20px',}}      
                        value={address}
                        onChange={handleAddressChange}
                    />
                </div>
                <div style={{ flex: 1, paddingTop: "20px" }}>
                    <input
                    
                        type="number"
                        textDecoration="none"   
                        placeholder="      Enter your phone number..."
                        onFocus={handlePhoneNumberFocus}
                        style={{ 
                            fontFamily: 'Inter',
                            fontSize: '16px',
                            outline: 'none',
                            WebkitAppearance : 'none' ,
                            border : phoneNumberError ? '2px solid red' : '2px solid #E0E0E0',
                            width: "70%", 
                            marginLeft: "-70%", 
                            height: "50px", 
                            borderRadius: "30px", 
                            padding: "10px",
                            transition: 'all 0.3s ease',
                            fontFamily: 'Inter', paddingLeft : '30px', paddingTop : '10px',
                        fontSize: '18px',color : '#006400',
                            
                        }}
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                        
                        
                    />
                  </div>
            </div>
            <div style={{ display: "flex", marginBottom: "30px" }}>
                <div style={{ flex: 1 }}>
                    <p style={{  marginTop: '-2%', marginBottom: "40px", marginLeft: '34%' ,color: addressError ? 'red' : 'black' }}>*The address shouldn't be void</p>
                </div>
                <div style={{ flex: 1 }}>
                    <p style={{
                        marginTop: '-2%',
                        color: phoneNumberError ? 'red' : 'black',
                        marginBottom: "40px",
                        marginLeft: '20%',
                        
                
                        transition: 'all 0.3s ease',
                        transform: 'scale(1.1)'
                    }}>
                        {"*The phone number should contain 10 numbers"}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Payment;