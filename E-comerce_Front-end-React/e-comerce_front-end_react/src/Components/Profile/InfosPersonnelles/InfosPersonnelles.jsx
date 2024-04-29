import "./InfosPersonnelles.css"
import TextField from "./TextField/TextField";
import ButtonEnregistrer from "./ButtonEnregistrer/ButtonEnregistrer";
import Avatar from "./Avatar/Avatar"
import axios from 'axios';
import { useState, useEffect  } from "react";
import { useNavigate } from "react-router-dom";

export default function InfosPersonnelles(){
    const [nomComplet, setNomComplet] = useState("");
    const [telephone, setTelephone] = useState("");
    const [adresse, setAdresse] = useState("");
    const [showAlert, setShowAlert] = useState(false); // State variable to control the visibility of the alert
    const email = sessionStorage.getItem('email');

    const navigate = useNavigate();

    useEffect(() => {
        setNomComplet(sessionStorage.getItem("nomComplet"));
        setTelephone(sessionStorage.getItem("telephone"));
        setAdresse(sessionStorage.getItem("adresse"));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {nomComplet , telephone, adresse , email};
        try {
            setShowAlert(false);
            const response = await axios.post('http://localhost:8089/ecomerce-backend/Utilisateur/updateUser', user);
            if (response.status === 200) {
                console.log('Update successful');
                setShowAlert(true);

                console.log(response.data);

                sessionStorage.setItem('nomComplet', response.data.nomComplet);
                sessionStorage.setItem('adresse', response.data.adresse);
                sessionStorage.setItem('telephone', response.data.telephone);

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
        <div className="InfoPerso">
            {showAlert && 
                <div className={`alert-top-right ${showAlert ? 'alert-show' : ''}`}>
                    Account updated successfully
                    <button className="close-button" onClick={() => setShowAlert(false)}>X</button>
                </div>
            }            
        <form >

            <div className="titre2">
            <h4 >Personal information</h4>
            </div>
            <h6 className="titre3">Update your information quickly!</h6>
            {/** la partie image */}
            <div>
            <Avatar src="./images/rectangle-4777.png" alt="Description de l'image" />

            </div>
            <div className="info-form">
           <TextField title="UserName" name="name" text="Your name here..." type="name" value={nomComplet}  onChange={e => setNomComplet(e.target.value)} />
            <TextField title="Email Address" name="email" text="Your email here..." type="email" value={email} />
            <TextField title="Phone number" name="phone" text="Your phone number here..." type="text" value={telephone} onChange={e => setTelephone(e.target.value)} />
            <TextField title="Address" name="address" text="Your address here..." type="text" value={adresse} onChange={e => setAdresse(e.target.value)} />

            <ButtonEnregistrer onClick={handleSubmit} />           

            </div>
            </form>
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