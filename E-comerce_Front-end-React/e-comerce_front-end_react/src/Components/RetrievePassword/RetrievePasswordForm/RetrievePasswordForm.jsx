// Remove the unused import statement for React
 import React, { useState } from 'react';
import './RetrievePasswordForm.css'; // Assurez-vous d'importer votre fichier CSS de style
import 'typeface-inter';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function RetrievePasswordForm() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');

    const navigate = useNavigate();

    async function handleSignIN(event) {
        event.preventDefault();
    
        // Check if password length is greater than 5
        if (password.length <= 5) {
            setErrorMessage('Password should be more than 5 characters');
            return;
        }else setErrorMessage('');
    
        // Check if password and confirmation password match
        if (password !== confirmPassword) {
            setErrorMessage('Password and confirmation password do not match');
            return;
        }else setErrorMessage('');
    
        try {
            const token = sessionStorage.getItem('token');
            const response = await axios.post(`http://localhost:8089/ecomerce-backend/Utilisateur/changePassword/token/${token}/password/${password}`);
            
            if(response.data) {
                console.log("ready to update password")
                navigate('/login');
            } else {
                console.log("User does not exist");
            }
        } catch (error) {
            setErrorMessage(error.response.data.message);
        }
    }

    return (
        <div style={{ width: 401, height: 201, left: 73, top: 187, position: 'absolute' }}>
            <div style={{ left: 703, top: 227, position: 'absolute', color: '#FF5722', fontSize: 40, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', width: 579, marginTop: -300 }}>
                Retrieve your password
            </div>
            <div style={{ marginLeft: 612, marginTop: -117 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                    {/* Placeholder pour l'icône */}
                </svg>
            </div>
            <div style={{ left: 718.03, top: 331, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', width: 205, marginTop: -270, marginLeft: 11 }}>
                New password
            </div>
            <input
                type={showPassword ? 'text' : 'password'}
                style={{ width: 610, height: 47, left: 726, top: 367, position: 'absolute', background: '#F5F5F5', borderRadius: 10, paddingLeft: 10, marginTop: -270 }}
                placeholder="Create a new password..."
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                style={{ position: 'absolute', left: 1345, top: 370, cursor: 'pointer', border: 'none', background: 'none', outline: 'none',    marginLeft: -41,
                marginTop: -263, }}
                onClick={() => setShowPassword(!showPassword)}
            >
                {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M21.25 9.69107C18.94 6.06107 15.56 3.97107 12 3.97107C10.22 3.97107 8.49 4.49107 6.91 5.46107C5.33 6.44107 3.91 7.87107 2.75 9.69107C1.75 11.2611 1.75 13.8111 2.75 15.3811C5.06 19.0211 8.44 21.1011 12 21.1011C13.78 21.1011 15.51 20.5811 17.09 19.6111C18.67 18.6311 20.09 17.2011 21.25 15.3811C22.25 13.8211 22.25 11.2611 21.25 9.69107ZM12 16.5811C9.76 16.5811 7.96 14.7711 7.96 12.5411C7.96 10.3111 9.76 8.50107 12 8.50107C14.24 8.50107 16.04 10.3111 16.04 12.5411C16.04 14.7711 14.24 16.5811 12 16.5811Z" fill="#9A9A9A"/>
                        <path d="M11.9976 9.68103C11.2404 9.68103 10.5142 9.98182 9.97879 10.5172C9.44337 11.0527 9.14258 11.7788 9.14258 12.536C9.14258 13.2932 9.44337 14.0194 9.97879 14.5548C10.5142 15.0902 11.2404 15.391 11.9976 15.391C13.5676 15.391 14.8576 14.111 14.8576 12.541C14.8576 10.971 13.5676 9.68103 11.9976 9.68103Z" fill="#9A9A9A"/>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M21.2714 9.42408C20.9814 8.96408 20.6714 8.53408 20.3514 8.13408C20.2641 8.02342 20.1544 7.93246 20.0295 7.86717C19.9046 7.80188 19.7673 7.76374 19.6266 7.75524C19.4859 7.74674 19.345 7.76808 19.2131 7.81786C19.0813 7.86764 18.9614 7.94473 18.8614 8.04408L15.8614 11.0441C16.0814 11.7041 16.1214 12.4641 15.9214 13.2541C15.7427 13.9532 15.3792 14.5914 14.8689 15.1016C14.3587 15.6119 13.7205 15.9754 13.0214 16.1541C12.2314 16.3541 11.4714 16.3141 10.8114 16.0941L8.35141 18.5541C7.85141 19.0541 8.01141 19.9341 8.68141 20.1941C9.75141 20.6041 10.8614 20.8141 12.0014 20.8141C13.7814 20.8141 15.5114 20.2941 17.0914 19.3241C18.7014 18.3241 20.1514 16.8541 21.3214 14.9841C22.2714 13.4741 22.2214 10.9341 21.2714 9.42408ZM14.0204 10.2261L9.98041 14.2661C9.47041 13.7461 9.14041 13.0261 9.14041 12.2461C9.14041 10.6761 10.4204 9.38608 12.0004 9.38608C12.7804 9.38608 13.5004 9.71608 14.0204 10.2261Z" fill="#9A9A9A"/>
                        <path d="M18.25 5.99615L14.86 9.38615C14.486 9.00878 14.0403 8.70999 13.5492 8.50734C13.058 8.3047 12.5313 8.2023 12 8.20615C9.76 8.20615 7.96 10.0161 7.96 12.2461C7.96 13.3661 8.41 14.3761 9.14 15.1061L5.76 18.4961H5.75C4.64 17.5961 3.62 16.4461 2.75 15.0861C1.75 13.5161 1.75 10.9661 2.75 9.39615C3.91 7.57615 5.33 6.14615 6.91 5.16615C8.49 4.20615 10.22 3.67615 12 3.67615C14.23 3.67615 16.39 4.49615 18.25 5.99615ZM14.858 12.2441C14.858 13.8141 13.578 15.1041 11.998 15.1041C11.938 15.1041 11.888 15.1041 11.828 15.0841L14.838 12.0741C14.858 12.1341 14.858 12.1841 14.858 12.2441Z" fill="#9A9A9A"/>
                        <path d="M21.7689 2.47512C21.4689 2.17512 20.9789 2.17512 20.6789 2.47512L2.22891 20.9351C1.92891 21.2351 1.92891 21.7251 2.22891 22.0251C2.3001 22.0961 2.38468 22.1522 2.47775 22.1901C2.57081 22.2281 2.6705 22.2471 2.771 22.2462C2.8715 22.2453 2.97081 22.2244 3.06316 22.1847C3.15551 22.145 3.23904 22.0874 3.30891 22.0151L21.7689 3.55512C22.0789 3.25512 22.0789 2.77512 21.7689 2.47512Z" fill="#9A9A9A"/>
                    </svg>
                )}
            </button>
            <div style={{ color: 'red' ,marginTop :'60%', marginLeft : '187%' , width :'600px'}}>{errorMessage}</div>
            <div style={{ left: 718.03, top: 439.25, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', width: 205, marginTop: -223, marginLeft: 11 }}>Confirm the new password</div>
            <input
                type={showConfirmPassword ? 'text' : 'password'}
                style={{ width: 610, height: 47, left: 726, top: 367, position: 'absolute', background: '#F5F5F5', borderRadius: 10, paddingLeft: 10, marginTop: -120 }}
                placeholder="Confirm your new password..."
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
                style={{ position: 'absolute', left: 1345, top: 466, cursor: 'pointer', border: 'none', background: 'none', outline: 'none',    marginLeft: -41,
                marginTop: -206, }}
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
                {showConfirmPassword ?  (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M21.25 9.69107C18.94 6.06107 15.56 3.97107 12 3.97107C10.22 3.97107 8.49 4.49107 6.91 5.46107C5.33 6.44107 3.91 7.87107 2.75 9.69107C1.75 11.2611 1.75 13.8111 2.75 15.3811C5.06 19.0211 8.44 21.1011 12 21.1011C13.78 21.1011 15.51 20.5811 17.09 19.6111C18.67 18.6311 20.09 17.2011 21.25 15.3811C22.25 13.8211 22.25 11.2611 21.25 9.69107ZM12 16.5811C9.76 16.5811 7.96 14.7711 7.96 12.5411C7.96 10.3111 9.76 8.50107 12 8.50107C14.24 8.50107 16.04 10.3111 16.04 12.5411C16.04 14.7711 14.24 16.5811 12 16.5811Z" fill="#9A9A9A"/>
                        <path d="M11.9976 9.68103C11.2404 9.68103 10.5142 9.98182 9.97879 10.5172C9.44337 11.0527 9.14258 11.7788 9.14258 12.536C9.14258 13.2932 9.44337 14.0194 9.97879 14.5548C10.5142 15.0902 11.2404 15.391 11.9976 15.391C13.5676 15.391 14.8576 14.111 14.8576 12.541C14.8576 10.971 13.5676 9.68103 11.9976 9.68103Z" fill="#9A9A9A"/>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M21.2714 9.42408C20.9814 8.96408 20.6714 8.53408 20.3514 8.13408C20.2641 8.02342 20.1544 7.93246 20.0295 7.86717C19.9046 7.80188 19.7673 7.76374 19.6266 7.75524C19.4859 7.74674 19.345 7.76808 19.2131 7.81786C19.0813 7.86764 18.9614 7.94473 18.8614 8.04408L15.8614 11.0441C16.0814 11.7041 16.1214 12.4641 15.9214 13.2541C15.7427 13.9532 15.3792 14.5914 14.8689 15.1016C14.3587 15.6119 13.7205 15.9754 13.0214 16.1541C12.2314 16.3541 11.4714 16.3141 10.8114 16.0941L8.35141 18.5541C7.85141 19.0541 8.01141 19.9341 8.68141 20.1941C9.75141 20.6041 10.8614 20.8141 12.0014 20.8141C13.7814 20.8141 15.5114 20.2941 17.0914 19.3241C18.7014 18.3241 20.1514 16.8541 21.3214 14.9841C22.2714 13.4741 22.2214 10.9341 21.2714 9.42408ZM14.0204 10.2261L9.98041 14.2661C9.47041 13.7461 9.14041 13.0261 9.14041 12.2461C9.14041 10.6761 10.4204 9.38608 12.0004 9.38608C12.7804 9.38608 13.5004 9.71608 14.0204 10.2261Z" fill="#9A9A9A"/>
                        <path d="M18.25 5.99615L14.86 9.38615C14.486 9.00878 14.0403 8.70999 13.5492 8.50734C13.058 8.3047 12.5313 8.2023 12 8.20615C9.76 8.20615 7.96 10.0161 7.96 12.2461C7.96 13.3661 8.41 14.3761 9.14 15.1061L5.76 18.4961H5.75C4.64 17.5961 3.62 16.4461 2.75 15.0861C1.75 13.5161 1.75 10.9661 2.75 9.39615C3.91 7.57615 5.33 6.14615 6.91 5.16615C8.49 4.20615 10.22 3.67615 12 3.67615C14.23 3.67615 16.39 4.49615 18.25 5.99615ZM14.858 12.2441C14.858 13.8141 13.578 15.1041 11.998 15.1041C11.938 15.1041 11.888 15.1041 11.828 15.0841L14.838 12.0741C14.858 12.1341 14.858 12.1841 14.858 12.2441Z" fill="#9A9A9A"/>
                        <path d="M21.7689 2.47512C21.4689 2.17512 20.9789 2.17512 20.6789 2.47512L2.22891 20.9351C1.92891 21.2351 1.92891 21.7251 2.22891 22.0251C2.3001 22.0961 2.38468 22.1522 2.47775 22.1901C2.57081 22.2281 2.6705 22.2471 2.771 22.2462C2.8715 22.2453 2.97081 22.2244 3.06316 22.1847C3.15551 22.145 3.23904 22.0874 3.30891 22.0151L21.7689 3.55512C22.0789 3.25512 22.0789 2.77512 21.7689 2.47512Z" fill="#9A9A9A"/>
                    </svg>
                )}
            </button>
            <div style={{ width: 610, height: 47, left: 727, top: 444, position: 'absolute' }}>
                <button onClick={handleSignIN} style={{ width: 623, height: 47, color: 'white', left: 0, top: 0, position: 'absolute', background: '#FF5722', borderRadius: 8, border: 'none', cursor: 'pointer', marginTop: -73, fontWeight: '700' }}>Sign in</button>
<<<<<<< HEAD
=======
                <button onClick={handleSignIN} style={{ width: 623, height: 47, color: 'white', left: 0, top: 0, position: 'absolute', background: '#FF5722', borderRadius: 8, border: 'none', cursor: 'pointer', marginTop: -73, fontWeight: '700' }} >Sign in</button>
>>>>>>> 428d20fee83de3aad0f424ac5f077d95886d602d
            </div>
        </div>
    );
}