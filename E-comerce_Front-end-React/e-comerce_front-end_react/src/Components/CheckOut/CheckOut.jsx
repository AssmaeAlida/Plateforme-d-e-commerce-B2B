import React, { useState, useEffect } from 'react';
import './CheckOut.css';
import jsPDF from 'jspdf';
import logo from '/images/your-store-2-x.png';

function CheckOut() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [streetAddress, setStreetAddress] = useState('');
    const [city, setCity] = useState('');
    const [postalCode, setPostalCode] = useState('');
    const [creditCard, setCreditCard] = useState('');
    const [cvv, setCvv] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [saveInfo, setSaveInfo] = useState(false);



        // Fonction pour remplir automatiquement les champs si les informations sont déjà stockées
        useEffect(() => {
            const storedName = localStorage.getItem('name');
            const storedEmail = localStorage.getItem('email');
            const storedPhoneNumber = localStorage.getItem('phoneNumber');
            const storedStreetAddress = localStorage.getItem('streetAddress');
            const storedCity = localStorage.getItem('city');
            const storedPostalCode = localStorage.getItem('postalCode');
            const storedCreditCard = localStorage.getItem('creditCard');
            const storedCvv = localStorage.getItem('cvv');
            const storedExpiryDate = localStorage.getItem('expiryDate');
    
            if (storedName) setName(storedName);
            if (storedEmail) setEmail(storedEmail);
            if (storedPhoneNumber) setPhoneNumber(storedPhoneNumber);
            if (storedStreetAddress) setStreetAddress(storedStreetAddress);
            if (storedCity) setCity(storedCity);
            if (storedPostalCode) setPostalCode(storedPostalCode);
            if (storedCreditCard) setCreditCard(storedCreditCard);
            if (storedCvv) setCvv(storedCvv);
            if (storedExpiryDate) setExpiryDate(storedExpiryDate);
        }, []);

        const handleNameChange = (e) => {
            setName(e.target.value);
        };
        
        const handleEmailChange = (e) => {
            setEmail(e.target.value);
        };
        
        const handlePhoneNumberChange = (e) => {
            setPhoneNumber(e.target.value);
        };
        
        const handleStreetAddressChange = (e) => {
            setStreetAddress(e.target.value);
        };
        
        const handleCityChange = (e) => {
            setCity(e.target.value);
        };
        
        const handlePostalCodeChange = (e) => {
            setPostalCode(e.target.value);
        };
        

    const handleCreditCardChange = (e) => {
        if (/^\d*$/.test(e.target.value)) {
            setCreditCard(e.target.value.slice(0, 24));
        }
    };

    const handleCvvChange = (e) => {
        if (/^\d*$/.test(e.target.value)) {
            setCvv(e.target.value.slice(0, 3));
        }
    };

    const handleExpiryDateChange = (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove non-digit characters
        if (value.length <= 4) {
            if (value.length > 2) {
                value = value.slice(0, 2) + '/' + value.slice(2);
            }
            setExpiryDate(value);
        }
    };

    const handleSaveInfoChange = () => {
        setSaveInfo(!saveInfo);
    };

    const handlePlaceOrder = () => {
        // Vérification de tous les champs requis
        if (!name || !email || !phoneNumber || !streetAddress || !city || !postalCode || !creditCard || !cvv || !expiryDate) {
          alert('Please fill in all required fields before placing the order.');
          return;
        }
      
        // Création du PDF
        const doc = new jsPDF();
    
        // Ajouter le logo au centre et en haut de la page
        const logoWidth = 50; // Largeur du logo
        const logoHeight = 20; // Hauteur du logo
        const pageWidth = doc.internal.pageSize.getWidth();
        const centerX = (pageWidth - logoWidth) / 2;
        doc.addImage(logo, 'PNG', centerX, 10, logoWidth, logoHeight);
        
        // Ajouter les détails de la commande
        doc.text('Order Details', 10, 70);
        doc.text(`Name: ${name}`, 10, 80);
        doc.text(`Email: ${email}`, 10, 90);
        doc.text(`Phone Number: ${phoneNumber}`, 10, 100);
        doc.text(`Street Address: ${streetAddress}`, 10, 110);
        doc.text(`City: ${city}`, 10, 120);
        doc.text(`Postal Code: ${postalCode}`, 10, 130);
        doc.text(`Credit Card Number: ${creditCard}`, 10, 140);
        doc.text(`CVV: ${cvv}`, 10, 150);
        doc.text(`Expiry Date: ${expiryDate}`, 10, 160);
      
        // Sauvegarde du PDF
        doc.save('order_details.pdf');
    };
    

  return (
    <>
      <div className="Billing-Details">
        <div className="icooooon-retour">
          <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
            <path d="M25.2504 4.20886C13.6354 4.20886 4.20874 13.6355 4.20874 25.2505C4.20874 36.8655 13.6354 46.2922 25.2504 46.2922C36.8654 46.2922 46.2921 36.8655 46.2921 25.2505C46.2921 13.6355 36.8654 4.20886 25.2504 4.20886ZM32.615 26.8287H21.6944L25.3135 30.4478C25.9237 31.058 25.9237 32.068 25.3135 32.6782C24.9979 32.9939 24.5981 33.1412 24.1983 33.1412C23.7985 33.1412 23.3987 32.9939 23.0831 32.6782L16.7706 26.3657C16.4771 26.0688 16.3125 25.6681 16.3125 25.2505C16.3125 24.833 16.4771 24.4323 16.7706 24.1353L23.0831 17.8228C23.6933 17.2126 24.7033 17.2126 25.3135 17.8228C25.9237 18.433 25.9237 19.443 25.3135 20.0532L21.6944 23.6724H32.615C33.4777 23.6724 34.1931 24.3878 34.1931 25.2505C34.1931 26.1132 33.4777 26.8287 32.615 26.8287Z" fill="#FF5722"/>
          </svg>
        </div>
        <h2>Billing Details</h2>
        <div className="Details">
          <label className="Details-label">Your Name<span className="required">*</span></label>
          <input className="input-Details" placeholder="Type your name here..." value={name} onChange={handleNameChange} />
        </div>
        <div className="Details">
          <label className="Details-label">Email Address<span className="required">*</span></label>
          <input className="input-Details" placeholder="Type your email address here..." value={email} onChange={handleEmailChange} />
        </div>
        <div className="Details">
          <label className="Details-label">Phone Number<span className="required">*</span></label>
          <input className="input-Details" placeholder="Type your phone number here..." value={phoneNumber} onChange={handlePhoneNumberChange} />
        </div>
        <div className="Details">
          <label className="Details-label">Street Address<span className="required">*</span></label>
          <input className="input-Details" placeholder="Type your street address here..." value={streetAddress} onChange={handleStreetAddressChange} />
        </div>
        <div className="Details">
          <label className="Details-label">City<span className="required">*</span></label>
          <input className="input-Details" placeholder="Type your city here..." value={city} onChange={handleCityChange} />
        </div>
        <div className="Details">
          <label className="Details-label">Postal Code<span className="required">*</span></label>
          <input className="input-Details" placeholder="Type your postal code here..." value={postalCode} onChange={handlePostalCodeChange} />
        </div>
        <div className="Details">
          <label className="Details-label">Credit Card Number<span className="required">*</span></label>
          <input
            className="input-Details"
            placeholder="Type your credit card number here..."
            value={creditCard}
            onChange={handleCreditCardChange}
            maxLength={24}
          />
        </div>
        <div className="Details">
          <label className="Details-label">CVV<span className="required">*</span></label>
          <input
            className="input-Details"
            placeholder="Type your CVV here..."
            value={cvv}
            onChange={handleCvvChange}
            maxLength={3}
          />
        </div>
        <div className="Details">
          <label className="Details-label">MM/YY<span className="required">*</span></label>
          <input
            className="input-Details"
            placeholder="MM/YY"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            maxLength={5}
          />
        </div>
        <div className="Details save-info">
          <label>
            <input type="checkbox" checked={saveInfo} onChange={handleSaveInfoChange} />
            Save this information for faster check-out next time
          </label>
        </div>
        <div className="Details">
          <button className="place-order-btn" onClick={handlePlaceOrder}>Place Order</button>
        </div>
      </div>
    </>
  );
}

export default CheckOut;
