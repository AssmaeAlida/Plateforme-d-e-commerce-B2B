import "./ForgetPasswordForm.css";
import 'typeface-inter';
<<<<<<< HEAD

export default function ForgetPasswordForm(){
    return(
            <div style={{width: 401, height: 201, left: 73, top: 187, position: 'absolute'}}>
                <div style={{left: 720, top: 239, position: 'absolute', color: '#FF5722', fontSize: 40, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', width: 579 , marginTop: -300}}>
                  Please provide your email 
                  </div>
                  <div style={{marginLeft: 612 , marginTop: -117 }}>
                     <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                      <path d="M21.2506 0.208984C9.63565 0.208984 0.208984 9.63565 0.208984 21.2506C0.208984 32.8657 9.63565 42.2923 21.2506 42.2923C32.8657 42.2923 42.2923 32.8657 42.2923 21.2506C42.2923 9.63565 32.8657 0.208984 21.2506 0.208984ZM28.6152 22.8288H17.6946L21.3138 26.4479C21.924 27.0581 21.924 28.0681 21.3138 28.6784C20.9981 28.994 20.5984 29.1413 20.1986 29.1413C19.7988 29.1413 19.399 28.994 19.0834 28.6784L12.7709 22.3659C12.4774 22.0689 12.3128 21.6682 12.3128 21.2506C12.3128 20.8331 12.4774 20.4324 12.7709 20.1354L19.0834 13.8229C19.6936 13.2127 20.7036 13.2127 21.3138 13.8229C21.924 14.4332 21.924 15.4431 21.3138 16.0534L17.6946 19.6725H28.6152C29.4779 19.6725 30.1934 20.3879 30.1934 21.2506C30.1934 22.1134 29.4779 22.8288 28.6152 22.8288Z" fill="#FF5722"/>
                     </svg>
                  </div>
                  <div style={{left: 751.03, top: 343, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', width: 205, marginTop: -270}}>Email Address</div>
                      <input type="text" style={{width: 610, height: 47, left: 726, top: 367, position: 'absolute', background: '#F5F5F5', borderRadius: 10, paddingLeft: 10 , marginTop: -260}} placeholder="Type your email here..." />
                      <div style={{width: 610, height: 47, left: 727, top: 444, position: 'absolute'}}>
                         <button style={{width: 623, height: 47, color:'white',left: 0, top: 0, position: 'absolute', background: '#FF5722', borderRadius: 8, border: 'none', cursor: 'pointer', marginTop: -241}} onClick={handleConfirm}>Confirm</button>
                      </div>
            </div>
       
    );
}

function handleConfirm() {
    // Logique de confirmation du formulaire de réinitialisation de mot de passe ici
}
=======
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import "./ForgetPasswordForm.css";

export default function ForgetPasswordForm(){

    const [email, setEmail] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false); // Add this line

    

    async function handleConfirm(event) {
        event.preventDefault();
    
        setIsLoading(true); // Set isLoading to true when the email starts sending
    
        try {
            const response = await axios.post(`http://localhost:8089/ecomerce-backend/Utilisateur/forgotPassword/email/${email}`);
            
            if(response.data) {
                const token = response.data.token;

                sessionStorage.setItem('token', token); // Store the token in sessionStorage
                console.log("token iis" , token);
                await navigate('/insertCode');
                setErrorMessage("");
            } else {
                setErrorMessage("User does not exist with this email. Please try again.");
                console.log("User does not exist");
            }
        } catch (error) {
            setErrorMessage("An error occurred. Please try again.");
        } finally {
            setIsLoading(false); // Set isLoading to false when the email has been sent or an error occurs
        }
    }

    return(
        <div style={{width: 401, height: 201, left: 73, top: 187, position: 'absolute'}}>
            <div style={{left: 720, top: 239, position: 'absolute', color: '#FF5722', fontSize: 40, fontFamily: 'Inter', fontWeight: '700', wordWrap: 'break-word', width: 579 , marginTop: -300}}>
                Please provide your email 
            </div>
            <div style={{marginLeft: 612 , marginTop: -117 }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                    <path d="M21.2506 0.208984C9.63565 0.208984 0.208984 9.63565 0.208984 21.2506C0.208984 32.8657 9.63565 42.2923 21.2506 42.2923C32.8657 42.2923 42.2923 32.8657 42.2923 21.2506C42.2923 9.63565 32.8657 0.208984 21.2506 0.208984ZM28.6152 22.8288H17.6946L21.3138 26.4479C21.924 27.0581 21.924 28.0681 21.3138 28.6784C20.9981 28.994 20.5984 29.1413 20.1986 29.1413C19.7988 29.1413 19.399 28.994 19.0834 28.6784L12.7709 22.3659C12.4774 22.0689 12.3128 21.6682 12.3128 21.2506C12.3128 20.8331 12.4774 20.4324 12.7709 20.1354L19.0834 13.8229C19.6936 13.2127 20.7036 13.2127 21.3138 13.8229C21.924 14.4332 21.924 15.4431 21.3138 16.0534L17.6946 19.6725H28.6152C29.4779 19.6725 30.1934 20.3879 30.1934 21.2506C30.1934 22.1134 29.4779 22.8288 28.6152 22.8288Z" fill="#FF5722"/>
                </svg>
            </div>
            <div style={{left: 751.03, top: 343, position: 'absolute', color: 'black', fontSize: 14, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word', width: 205, marginTop: -270}}>Email Address</div>
                        {errorMessage && <div style={{color: 'red', marginTop: 10, marginLeft: 612}}></div>}

            <input type="email" style={{width: 610, height: 47, left: 726, top: 367, position: 'absolute', background: '#F5F5F5', borderRadius: 10, paddingLeft: 10 , marginTop: -260}} placeholder="Type your email here..."  onChange={(event) => setEmail(event.target.value)}  />

            
            <div style={{width: 610, height: 47, left: 727, top: 444, position: 'absolute'}}>
            {errorMessage && <div style={{color: 'red', marginTop: "-44%", marginLeft: "15%" ,height : "12px"}}>{errorMessage}</div>}

                <button type={"submit"} onClick={handleConfirm} style={{width: 623, height: 47, color:'white',left: 0, top: 0, position: 'absolute', background: '#FF5722', borderRadius: 8, border: 'none', cursor: 'pointer', marginTop: -241}} >Confirm</button>
                <div style={{color: 'black', marginTop: "-30%", marginLeft: "8%" ,height : "12px"}}>
                {isLoading ? (
                        <div className="loading flex">
                            Sending email
                            <span className="dot">.</span>
                            <span className="dot">.</span>
                            <span className="dot">.</span>
                        </div>
                    ) : null}
                </div>
            </div>
            
        </div>
    );
}
>>>>>>> 06b772a22b2a2808bb75a01eaa8318fc30773cea
