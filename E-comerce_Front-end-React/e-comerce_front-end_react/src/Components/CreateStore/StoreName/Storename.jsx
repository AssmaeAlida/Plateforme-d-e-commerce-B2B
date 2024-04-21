import React, { useState, useEffect } from 'react';
import "./Storename.css";

function StoreName({ storeName, setStoreName, lengthError, setIsClicked, isClicked, setLengthError, spaceError, setSpaceError, voidError, setVoidError, isNextClicked }) {

    const handleInputChange = (e) => {
        const value = e.target.value;
        setStoreName(value);
        setIsClicked(true); // Set isClicked to true when the input field is clicked


        // Check if the input is empty
        if(value.length === 0){
            setVoidError('Store name cannot be empty');
        } else {
            setVoidError('');
        }

        // Check if the length of the input value is between 4 and 20 characters
        if (value.length < 4 || value.length > 20) {
            setLengthError('Store name must be between 4 and 20 characters');
        } else {
            setLengthError('');
        }

        // Check if the input value contains spaces
        if (/\s(?=\S)/.test(value)) {
            setSpaceError('Store name cannot contain spaces, except at the end');
        } else {
            setSpaceError('');
        }
    };

    return (
        <div className="storeName" >
            <div className="storeTitle">
                <p style={{fontSize :"36px" , fontFamily : "Inter" ,marginBottom:"30px", fontWeight:"700" ,lineHeight:"normal" , textAlign:"center"}}>Give your shop a name</p>
            </div>
            <div style={{textAlign :" center" , marginBottom : "80px"}}>
                <div >
                    <input 
                    
                        type="text" 
                        placeholder="      Provide the name of your shop..." 
                        style={voidError ||  isNextClicked ? {width:"70%", height:"50px", border:"2px solid red", borderRadius:"30px", marginTop:"20px", padding:"10px", color: 'red' ,paddingLeft : "20px",fontSize :"18px"} : {color : '#006400',fontSize :"18px" , fontFamily : "Inter", alignContent :"center",alignItems : "center" ,width:"70%", height:"40px", border:"1px solid #E0E0E0", borderRadius:"30px", marginTop:"20px", padding:"10px" ,paddingLeft : "30px"}}
                        value={storeName}
                        onChange={handleInputChange}
                        
                    />
                </div>
                <div style={{paddingTop :"20px " , textAlign : "left" , paddingLeft : "15%"}}>
                    <p style={lengthError   ? {color: 'red', transform: 'scale(1.1)', marginLeft: '20px', transition: '0.5s', transformOrigin: 'left'} : {marginLeft: '20px', transition: '0.5s'}}>*Between 4 and 20 characters</p>
                    <p style={spaceError  ? {color: 'red', transform: 'scale(1.1)', marginLeft: '20px', transition: '0.5s', transformOrigin: 'left'} : {marginLeft: '20px', transition: '0.5s'}}>*Without spaces or special characters</p>
                    <p style={voidError ? {color: 'red', transform: 'scale(1.1)', marginLeft: '20px', transition: '0.5s', transformOrigin: 'left'} : {marginLeft: '20px', transition: '0.5s'}}>*Store name cannot be empty</p>
                </div>
           
            </div>
            
        </div>
    );
};

export default StoreName;