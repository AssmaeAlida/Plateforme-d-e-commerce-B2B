import "./RegisterForm.css";
import RegisterTitle from "./RegisterTitle/RegisterTitle";
import Textfield from "./Textfield/Textfield";
import SignUp from "./SignUp/SignUp";
import axios from 'axios';
import { useState  } from "react";
import { useNavigate } from "react-router-dom";

import {  } from "react-router-dom";

export default function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmationPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [acceptTerms, setAcceptTerms] = useState(false); // State to track acceptance of terms

    const navigate = useNavigate();
    

    
    function register(event) {
        event.preventDefault(); // Prevent form submission

        if (password.length < 5) {
            setErrorMessage("The number of characters must be greater than 5");
            setPasswordError(true);
            return; // Exit the function early
        }
        if (password === confirmationPassword) {
            if (!acceptTerms) {
                setErrorMessage("Please accept the terms and conditions");
                return; // Exit the function early
            }
            try {
                const response = axios.post(`http://localhost:8089/ecomerce-backend/Utilisateur/signUp/email/${email}/password/${password}`)
                navigate('/login');
                console.log(response)
                
            } catch (error) {
                // Handle error response
                console.error("Registration error:", error.response.data);
                alert("Registration failed: " + error.response.data.message);
            }
        } else {
            setErrorMessage("Passwords do not match");
        }
        

        
    }

    // Clear error message and border color when password changes
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setPasswordError(false);
        setErrorMessage('');
    }

    // Clear error message when confirm password changes
    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
        setErrorMessage('');
    }
    const handleCheckboxChange = (event) => {
        setAcceptTerms(event.target.checked);
        setErrorMessage(''); // Clear any error message related to terms acceptance
    }

    return (
        <div className="register_form">
            <div className="back">
                <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                    <path d="M25.2504 4.20886C13.6354 4.20886 4.20874 13.6355 4.20874 25.2505C4.20874 36.8655 13.6354 46.2922 25.2504 46.2922C36.8654 46.2922 46.2921 36.8655 46.2921 25.2505C46.2921 13.6355 36.8654 4.20886 25.2504 4.20886ZM32.615 26.8287H21.6944L25.3135 30.4478C25.9237 31.058 25.9237 32.068 25.3135 32.6782C24.9979 32.9939 24.5981 33.1412 24.1983 33.1412C23.7985 33.1412 23.3987 32.9939 23.0831 32.6782L16.7706 26.3657C16.4771 26.0688 16.3125 25.6681 16.3125 25.2505C16.3125 24.833 16.4771 24.4323 16.7706 24.1353L23.0831 17.8228C23.6933 17.2126 24.7033 17.2126 25.3135 17.8228C25.9237 18.433 25.9237 19.443 25.3135 20.0532L21.6944 23.6724H32.615C33.4777 23.6724 34.1931 24.3878 34.1931 25.2505C34.1931 26.1132 33.4777 26.8287 32.615 26.8287Z" fill="#FF5722"/>
                </svg>
            </div>

            <form onSubmit={register}>
                <RegisterTitle title="Register"/>
                <Textfield title="Email Address" name="email" icon={<Icon1 />} text="Enter Your Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                <Textfield title="Password" name="password" icon={<Icon2 />} text="Enter Your Password" type="password" value={password}  onChange={handlePasswordChange} error={passwordError} />
                
                <Textfield title="Confirm Password" name="confirmPassword" icon={<Icon2 />} text="Confirm Your Password" type="password" value={confirmationPassword} onChange={handleConfirmPasswordChange} />
                {errorMessage && <div className="error-message">{errorMessage}  </div> }
                <div className="checkbox">
                    <input type="checkbox" id="radio1" name="radios" onChange={handleCheckboxChange} />
                    <label htmlFor="radio1">You confirm your acceptance of the terms and conditions</label>
                </div>
                <div>
                  <SignUp title={"Sign Up"} />
                   
                </div>
            </form>

            

            <div className="haveaccount">
                <p>Already have an account <a   href="/login">Click Here</a></p>
            </div>
        </div>
    );
}

const Icon1 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M1.3478 1.33985C-1.56675e-07 2.67855 0 4.83465 0 9.14571C0 13.4568 -1.56675e-07 15.6129 1.3478 16.9516C2.69445 18.2914 4.86335 18.2914 9.2 18.2914H13.8C18.1367 18.2914 20.3055 18.2914 21.6522 16.9516C23 15.6129 23 13.4568 23 9.14571C23 4.83465 23 2.67855 21.6522 1.33985C20.3055 -1.56675e-07 18.1367 0 13.8 0H9.2C4.86335 0 2.69445 -1.56675e-07 1.3478 1.33985ZM19.0624 4.02411C19.2087 4.19878 19.2793 4.42407 19.2586 4.65045C19.2379 4.87683 19.1276 5.08577 18.952 5.23134L16.4266 7.32342C15.4066 8.1694 14.5809 8.85304 13.8506 9.31948C13.0916 9.80534 12.3521 10.1117 11.5 10.1117C10.6479 10.1117 9.9084 9.8042 9.14825 9.31948C8.41915 8.85304 7.59345 8.16826 6.5734 7.32457L4.048 5.23249C3.87217 5.08695 3.76169 4.87794 3.74088 4.65143C3.72007 4.42493 3.79063 4.19948 3.93703 4.02468C4.08342 3.84989 4.29368 3.74007 4.52153 3.71938C4.74938 3.69869 4.97617 3.76883 5.152 3.91436L7.636 5.971C8.70895 6.85928 9.453 7.47433 10.0832 7.87674C10.6916 8.26543 11.1044 8.3969 11.5012 8.3969C11.8979 8.3969 12.3108 8.26657 12.9191 7.87674C13.5482 7.47433 14.2934 6.85928 15.3663 5.971L17.8492 3.91322C18.025 3.76788 18.2517 3.69792 18.4794 3.71871C18.7072 3.73951 18.9161 3.84936 19.0624 4.02411Z" fill="#616161"/>
  </svg>
);

const Icon2 = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 20 25" fill="none">
    <path d="M2.47619 26C1.79524 26 1.21251 25.7577 0.728 25.2732C0.243492 24.7887 0.000825397 24.2056 0 23.5238V11.1429C0 10.4619 0.242666 9.87917 0.728 9.39467C1.21333 8.91016 1.79606 8.66749 2.47619 8.66667H3.71429V6.19048C3.71429 4.47778 4.31806 3.01806 5.52562 1.81133C6.73317 0.604603 8.19289 0.000825397 9.90476 0C11.6175 0 13.0776 0.603778 14.2851 1.81133C15.4927 3.01889 16.0961 4.4786 16.0952 6.19048V8.66667H17.3333C18.0143 8.66667 18.5974 8.90933 19.0828 9.39467C19.5681 9.88 19.8103 10.4627 19.8095 11.1429V23.5238C19.8095 24.2048 19.5673 24.7879 19.0828 25.2732C18.5983 25.7586 18.0151 26.0008 17.3333 26H2.47619ZM9.90476 19.8095C10.5857 19.8095 11.1689 19.5673 11.6542 19.0828C12.1395 18.5983 12.3818 18.0151 12.381 17.3333C12.381 16.6524 12.1387 16.0697 11.6542 15.5851C11.1697 15.1006 10.5865 14.858 9.90476 14.8571C9.22381 14.8571 8.64108 15.0998 8.15657 15.5851C7.67206 16.0705 7.4294 16.6532 7.42857 17.3333C7.42857 18.0143 7.67124 18.5974 8.15657 19.0828C8.6419 19.5681 9.22463 19.8103 9.90476 19.8095ZM6.19048 8.66667H13.619V6.19048C13.619 5.15873 13.2579 4.28175 12.5357 3.55952C11.8135 2.8373 10.9365 2.47619 9.90476 2.47619C8.87302 2.47619 7.99603 2.8373 7.27381 3.55952C6.55159 4.28175 6.19048 5.15873 6.19048 6.19048V8.66667Z" fill="#616161"/>
  </svg>);