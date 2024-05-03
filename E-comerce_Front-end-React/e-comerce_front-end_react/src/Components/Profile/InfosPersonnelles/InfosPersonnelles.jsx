import  { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./InfosPersonnelles.css";
import TextField from "./TextField/TextField";
import ButtonEnregistrer from "./ButtonEnregistrer/ButtonEnregistrer";

export default function InfosPersonnelles() {
    const [nomComplet, setNomComplet] = useState("");
    const [telephone, setTelephone] = useState("");
    const [adresse, setAdresse] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);
    const [imageUploader, setImageUploader] = useState("");
    const email = sessionStorage.getItem("email");
    const navigate = useNavigate();
    const fileInput = useRef(null);

    useEffect(() => {
        fetchUserData();
    }, [email]);

    useEffect(() => {
        const storedImage = sessionStorage.getItem("imageUploader");
        if (storedImage) {
            setImageUploader(storedImage);
        }
    }, []);

    const fetchUserData = async () => {
        try {
            const response = await axios.get(
                `http://localhost:8089/ecomerce-backend/Utilisateur/email/${email}`
            );

            if (response.status === 200) {
                const userData = response.data;
                setNomComplet(userData.nomComplet);
                setTelephone(userData.telephone);
                setAdresse(userData.adresse);
                console.log("imùage", userData.image)
                const image = userData.image || ""; // Handle case where image is not available
                setImageUploader(image);
                sessionStorage.setItem("imageUploader", image); // Store image URL in session storage
            } else {
                console.log("Failed to fetch user data");
            }
        } catch (error) {
            console.error("An error occurred while fetching user data:", error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedUser = { nomComplet, telephone, adresse, email };

        try {
            setShowAlert(false);
            const response = await axios.post(
                "http://localhost:8089/ecomerce-backend/Utilisateur/updateUser",
                updatedUser
            );

            if (response.status === 200) {
                console.log("Update successful");
                setShowAlert(true);

                sessionStorage.setItem("nomComplet", response.data.nomComplet);
                sessionStorage.setItem("adresse", response.data.adresse);
                sessionStorage.setItem("telephone", response.data.telephone);

                navigate("/Profile");
                scrollToTop(800);
            } else {
                console.log("Update failed");
            }

            if (selectedFile) {
                uploadImage();
            }
        } catch (error) {
            console.log("An error occurred while updating the user");
            console.error(error);
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const url = URL.createObjectURL(file);
            setImageUploader(url);
            setSelectedFile(file);
        }
    };

    const uploadImage = async () => {
        const formData = new FormData();
        formData.append("email", email);
        formData.append("image", selectedFile);

        try {
            const response = await axios.post(
                "http://localhost:8089/ecomerce-backend/Utilisateur/uploadImage",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    },
                }
            );

            if (response.status === 200) {
                console.log("Image upload successful");
                setImageUploader(response.data); // Update imageUploader with the returned URL
                sessionStorage.setItem("imageUploader", response.data); // Store updated image URL in session storage
                scrollToTop(800);
                setTimeout(() => {
                    window.location.reload();
                }, 1000);
            } else {
                console.log("Image upload failed");
            }
        } catch (error) {
            console.log("An error occurred while uploading the image");
            console.error(error);
        }
    };

    return (
        <div className="InfoPerso">
            <form onSubmit={handleSubmit}>
                <div className="titre2">
                    <h4>Personal information</h4>
                </div>
                <h6 className="titre3">Update your information quickly!</h6>
                {showAlert && (
                    <div className={`alert-top-right ${showAlert ? "alert-show" : ""}`}>
                        Account updated successfully
                        <button className="close-button" onClick={() => setShowAlert(false)}>
                            X
                        </button>
                    </div>
                )}
                <div className="img-profile">
                    <img
                        src={imageUploader}
                        alt="Profile"
                        style={{
                            width: "90px",
                            height: "90px",
                            flexShrink: 0,
                            borderRadius: "100px",
                        }}
                    />
                    <input
                        type="file"
                        accept="image/*"
                        style={{ display: "none" }}
                        ref={fileInput}
                        onChange={handleFileChange}
                    />
                    <div className="icon-camera" onClick={() => fileInput.current.click()}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="75"
                            height="30"
                            viewBox="20 0 2 24"
                            fill="none"
                        >
                            <circle cx="12" cy="12" r="11.5" fill="white" stroke="#E7E7E7" />
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                x="5"
                                y="4"
                                width="13"
                                height="14"
                                style={{ margin: "3px" }}
                                viewBox="0 0 10 9"
                                fill="none"
                            >
                                <path
                                    d="M1 1H2.5L3.20711 0.292893C3.39464 0.105356 3.649 0 3.91421 0H6.08579C6.351 0 6.60536 0.105357 6.79289 0.292893L7.5 1H9C9.26522 1 9.51957 1.10536 9.70711 1.29289C9.89464 1.48043 10 1.73478 10 2V8C10 8.26522 9.89464 8.51957 9.70711 8.70711C9.51957 8.89464 9.26522 9 9 9H1C0.734784 9 0.48043 8.89464 0.292893 8.70711C0.105357 8.51957 0 8.26522 0 8V2C0 1.73478 0.105357 1.48043 0.292893 1.29289C0.48043 1.10536 0.734784 1 1 1ZM5 2.5C4.33696 2.5 3.70107 2.76339 3.23223 3.23223C2.76339 3.70107 2.5 4.33696 2.5 5C2.5 5.66304 2.76339 6.29893 3.23223 6.76777C3.70107 7.23661 4.33696 7.5 5 7.5C5.66304 7.5 6.29893 7.23661 6.76777 6.76777C7.23661 6.29893 7.5 5.66304 7.5 5C7.5 4.33696 7.23661 3.70107 6.76777 3.23223C6.29893 2.76339 5.66304 2.5 5 2.5ZM5 3.5C5.39782 3.5 5.77936 3.65804 6.06066 3.93934C6.34196 4.22064 6.5 4.60218 6.5 5C6.5 5.39782 6.34196 5.77936 6.06066 6.06066C5.77936 6.34196 5.39782 6.5 5 6.5C4.60218 6.5 4.22064 6.34196 3.93934 6.06066C3.65804 5.77936 3.5 5.39782 3.5 5C3.5 4.60218 3.65804 4.22064 3.93934 3.93934C4.22064 3.65804 4.60218 3.5 5 3.5Z"
                                    fill="#FD6C6B"
                                />
                            </svg>
                        </svg>
                    </div>
                </div>

                <div className="info-form">
                    <TextField
                        title="UserName"
                        name="name"
                        text="Your name here..."
                        type="name"
                        value={nomComplet}
                        onChange={(e) => setNomComplet(e.target.value)}
                    />
                    <TextField
                        title="Email Address"
                        name="email"
                        value={email}
                        type="email"
                        disabled
                    />
                    <TextField
                        title="Phone number"
                        name="phone"
                        text="Your phone number here..."
                        type="text"
                        value={telephone}
                        onChange={(e) => setTelephone(e.target.value)}
                    />
                    <TextField
                        title="Address"
                        name="address"
                        text="Your address here..."
                        type="text"
                        value={adresse}
                        onChange={(e) => setAdresse(e.target.value)}
                    />

                    <ButtonEnregistrer />
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
    const easingFunction = (t) =>
        t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // quadratic easing in/out

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
