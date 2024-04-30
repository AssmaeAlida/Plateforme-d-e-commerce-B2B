import "./InfoPassword.css"
import TextField from "./../InfosPersonnelles/TextField/TextField";
import ButtonEnregistrer from "./../InfosPersonnelles/ButtonEnregistrer/ButtonEnregistrer";
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import CryptoJS from 'crypto-js';

export default function InfoPassword(){

    const navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const email = sessionStorage.getItem('email');

    const updatePassword = async (e) => {
        e.preventDefault();
        if (newPassword.length < 5) {
            setErrorMessage('Password must be at least 5 characters long');
            return;
        }
        if (newPassword !== confirmPassword) {
            setErrorMessage('Password and confirmation don\'t  match');
            return;
        }else{
            setErrorMessage("");}

        const user = {email , password: newPassword };
        try {
            const response = await axios.post('http://localhost:8089/ecomerce-backend/Utilisateur/updateUser', user);
            if (response.status === 200) {
                console.log('Update successful');
                const bytes  = CryptoJS.AES.decrypt(response.data.password, 'secret key');
                const originalPassword = bytes.toString(CryptoJS.enc.Utf8);
                console.log(bytes);
                setPassword(originalPassword);
                setShowAlert(true);
                setErrorMessage(" ");
                navigate("/Profile");

                // Scroll to the top of the page
                scrollToTop(800);
            } else {
                console.log('Update failed');
            }
        } catch (error) {
            console.log('An error occurred while updating the user');
            console.error(error);
        }
    }

    return (
        <div className="InfoPassword">
            <div className="titre4">
            <h4 >Password</h4>
            </div>
            <div className="Passwd-Form">
            <TextField title="New password" name="newPassword"  text="Your new password here..." type="text" onChange={e => setNewPassword(e.target.value)}/>
            <TextField title="Confirm password" name="confirmPassword"  text="Your confirm password here..." type="text" onChange={e => setConfirmPassword(e.target.value)} />
            <ButtonEnregistrer onClick={updatePassword}/>
            </div>
            {errorMessage && <div className="error-message lenth">{errorMessage}</div>}            {showAlert && 
                <div className={`alert-top-right ${showAlert ? 'alert-show' : ''}`}>
                    Account updated successfully
                    <button className="close-button" onClick={() => setShowAlert(false)}>X</button>
                </div>
            }
        </div>
    );
}
function scrollToTop(duration) {
    const start = performance.now();
    const startY = window.scrollY;
    const endY = 0;

    if (startY === endY) return;

    const totalDistance = endY - startY;
    const easingFunction = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // quadratic easing in/out

    const step = (timestamp) => {
        const elapsed = timestamp - start;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easingFunction(progress);

        window.scrollTo(0, startY + totalDistance * easedProgress);

        if (elapsed < duration) {
            window.requestAnimationFrame(step);
        }
    };

    window.requestAnimationFrame(step);
}