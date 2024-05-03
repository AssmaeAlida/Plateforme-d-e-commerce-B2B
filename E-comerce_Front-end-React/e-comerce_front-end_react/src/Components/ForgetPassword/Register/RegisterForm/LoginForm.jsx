import "./LoginForm.css";
import { useState , useEffect } from "react";
import RegisterTitle from "./RegisterTitle/RegisterTitle";
import Textfield from "./Textfield/Textfield";
import SignUp from "./SignUp/SignUp";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('password', password);

    // Retrieve email from sessionStorage
    

    const navigate = useNavigate();
    const handleLogin = async (event) => {
        event.preventDefault(); // Prevent form submission
    
        try {
            const response = await axios.post(`http://localhost:8089/ecomerce-backend/Utilisateur/signIn/email/${email}/password/${password}`);
    
            if (response.data) {
                navigate('/home');
                console.log("User exists");
                // User exists, you can proceed with further actions (e.g., redirect to another page)
            } else {
                console.log("User does not exist");
                // User does not exist, you can show an error message or take appropriate action
                setErrorMessage("Invalid email or password. Please try again.");
            }
        } catch (error) {
            console.error("Error occurred:", error);
            // Handle API call errors, such as network issues or server errors
            setErrorMessage("An error occurred. Please try again later.");
        }
    };
    
    



    return (
        <>
            <div className="register_form">
                <div className="back">
                    <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                        <path d="M25.2504 4.20886C13.6354 4.20886 4.20874 13.6355 4.20874 25.2505C4.20874 36.8655 13.6354 46.2922 25.2504 46.2922C36.8654 46.2922 46.2921 36.8655 46.2921 25.2505C46.2921 13.6355 36.8654 4.20886 25.2504 4.20886ZM32.615 26.8287H21.6944L25.3135 30.4478C25.9237 31.058 25.9237 32.068 25.3135 32.6782C24.9979 32.9939 24.5981 33.1412 24.1983 33.1412C23.7985 33.1412 23.3987 32.9939 23.0831 32.6782L16.7706 26.3657C16.4771 26.0688 16.3125 25.6681 16.3125 25.2505C16.3125 24.833 16.4771 24.4323 16.7706 24.1353L23.0831 17.8228C23.6933 17.2126 24.7033 17.2126 25.3135 17.8228C25.9237 18.433 25.9237 19.443 25.3135 20.0532L21.6944 23.6724H32.615C33.4777 23.6724 34.1931 24.3878 34.1931 25.2505C34.1931 26.1132 33.4777 26.8287 32.615 26.8287Z" fill="#FF5722"/>
                    </svg>
                </div>
                <form onSubmit={handleLogin}>
                    <RegisterTitle title="Login"/>
                    <Textfield title="Email Address" icon={<Icon1 />} text="Enter Your Email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    <Textfield title="Password" icon={<Icon2 />} text="Enter Your Password" type="text" value={password} onChange={(event) => setPassword(event.target.value)} />
                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    <div className="flex">
                        <div className="checkbox">
                            <input type="checkbox" id="radio1" name="radios" />
                            <label htmlFor="radio1">Remember Me</label>
                        </div>
                        <div style={{marginLeft: "43%", color: "red"}} className="forgetpasswd">
                            <a href="/forgetpassword">Forgot Password</a>
                        </div>
                    </div>
                    <div>
                        <SignUp title={"Sign In"}/>
                        <br />
                    </div>
                </form>
                <div style={{alignContent: 'center'}} >
                    <h2 className="divider line one-line">Or</h2>
                </div>
                <div className="socialmedia flex">
                    <div className="google">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="59" viewBox="0 0 100 59" fill="none">
                            <rect x="0.5" y="0.5" width="99" height="58" rx="29" fill="white" stroke="#C1C1C1"/>
                            <path d="M39.3029 23.7469C40.3216 21.7183 41.8845 20.0129 43.8169 18.8214C45.7492 17.6299 47.9748 16.9993 50.2449 17C53.5449 17 56.3171 18.2135 58.4367 20.1898L54.9261 23.7016C53.6563 22.4882 52.0424 21.8698 50.2449 21.8698C47.0551 21.8698 44.3551 24.0249 43.3939 26.9184C43.149 27.6531 43.0094 28.4367 43.0094 29.2449C43.0094 30.0531 43.149 30.8367 43.3939 31.5714C44.3563 34.4661 47.0551 36.62 50.2449 36.62C51.8918 36.62 53.2939 36.1853 54.391 35.4506C55.0271 35.0318 55.5716 34.4884 55.9917 33.8533C56.4118 33.2181 56.6987 32.5043 56.8351 31.7551H50.2449V27.0188H61.7771C61.9216 27.8196 62 28.6547 62 29.5229C62 33.2527 60.6653 36.3922 58.3486 38.5229C56.3233 40.3939 53.551 41.4898 50.2449 41.4898C48.6367 41.4904 47.0441 41.1742 45.5582 40.559C44.0723 39.9439 42.7222 39.042 41.585 37.9048C40.4478 36.7676 39.5459 35.4175 38.9308 33.9316C38.3156 32.4457 37.9994 30.8531 38 29.2449C38 27.2686 38.4727 25.4 39.3029 23.7469Z" fill="black"/>
                        </svg>
                    </div>
                    <div className="facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="59" viewBox="0 0 100 59" fill="none">
                            <rect x="0.5" y="0.5" width="99" height="58" rx="29" fill="white" stroke="#C1C1C1"/>
                            <path d="M63 30C63 22.824 57.176 17 50 17C42.824 17 37 22.824 37 30C37 36.292 41.472 41.531 47.4 42.74V33.9H44.8V30H47.4V26.75C47.4 24.241 49.441 22.2 51.95 22.2H55.2V26.1H52.6C51.885 26.1 51.3 26.685 51.3 27.4V30H55.2V33.9H51.3V42.935C57.865 42.285 63 36.747 63 30Z" fill="black"/>
                        </svg>
                    </div>
                    <div className="tiktok">
                        <svg xmlns="http://www.w3.org/2000/svg" width="100" height="59" viewBox="0 0 100 59" fill="none">
                            <rect x="0.5" y="0.5" width="99" height="58" rx="29" fill="white" stroke="#C1C1C1"/>
                            <path d="M56.5867 21.76C55.6752 20.7195 55.173 19.3832 55.1733 18H51.0533V34.5333C51.0216 35.428 50.6438 36.2755 49.9997 36.8973C49.3555 37.519 48.4953 37.8665 47.6 37.8667C45.7067 37.8667 44.1333 36.32 44.1333 34.4C44.1333 32.1067 46.3467 30.3867 48.6267 31.0933V26.88C44.0267 26.2667 40 29.84 40 34.4C40 38.84 43.68 42 47.5867 42C51.7733 42 55.1733 38.6 55.1733 34.4V26.0133C56.844 27.2131 58.8498 27.8569 60.9067 27.8533V23.7333C60.9067 23.7333 58.4 23.8533 56.5867 21.76Z" fill="black"/>
                        </svg>
                    </div>
                </div>
                <div className="haveaccount">
                    <p>Don't have an account? <a href="/register">Click Here</a></p>
                </div>
            </div>
        </>
    );
}

const Icon1 = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 23 19" fill="none">
      <path fillRule="evenodd" clipRule="evenodd" d="M1.3478 1.33985C-1.56675e-07 2.67855 0 4.83465 0 9.14571C0 13.4568 -1.56675e-07 15.6129 1.3478 16.9516C2.69445 18.2914 4.86335 18.2914 9.2 18.2914H13.8C18.1367 18.2914 20.3055 18.2914 21.6522 16.9516C23 15.6129 23 13.4568 23 9.14571C23 4.83465 23 2.67855 21.6522 1.33985C20.3055 -1.56675e-07 18.1367 0 13.8 0H9.2C4.86335 0 2.69445 -1.56675e-07 1.3478 1.33985ZM19.0624 4.02411C19.2087 4.19878 19.2793 4.42407 19.2586 4.65045C19.2379 4.87683 19.1276 5.08577 18.952 5.23134L16.4266 7.32342C15.4066 8.1694 14.5809 8.85304 13.8506 9.31948C13.0916 9.80534 12.3521 10.1117 11.5 10.1117C10.6479 10.1117 9.9084 9.8042 9.14825 9.31948C8.41915 8.85304 7.59345 8.16826 6.5734 7.32457L4.048 5.23249C3.87217 5.08695 3.76169 4.87794 3.74088 4.65143C3.72007 4.42493 3.79063 4.19948 3.93703 4.02468C4.08342 3.84989 4.29368 3.74007 4.52153 3.71938C4.74938 3.69869 4.97617 3.76883 5.152 3.91436L7.636 5.971C8.70895 6.85928 9.453 7.47433 10.0832 7.87674C10.6916 8.26543 11.1044 8.3969 11.5012 8.3969C11.8979 8.3969 12.3108 8.26657 12.9191 7.87674C13.5482 7.47433 14.2934 6.85928 15.3663 5.971L17.8492 3.91322C18.025 3.76788 18.2517 3.69792 18.4794 3.71871C18.7072 3.73951 18.9161 3.84936 19.0624 4.02411Z" fill="#616161"/>
    </svg>
  );
  const Icon2 = ()=>(
    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="19" viewBox="0 0 20 25" fill="none">
<path d="M2.47619 26C1.79524 26 1.21251 25.7577 0.728 25.2732C0.243492 24.7887 0.000825397 24.2056 0 23.5238V11.1429C0 10.4619 0.242666 9.87917 0.728 9.39467C1.21333 8.91016 1.79606 8.66749 2.47619 8.66667H3.71429V6.19048C3.71429 4.47778 4.31806 3.01806 5.52562 1.81133C6.73317 0.604603 8.19289 0.000825397 9.90476 0C11.6175 0 13.0776 0.603778 14.2851 1.81133C15.4927 3.01889 16.0961 4.4786 16.0952 6.19048V8.66667H17.3333C18.0143 8.66667 18.5974 8.90933 19.0828 9.39467C19.5681 9.88 19.8103 10.4627 19.8095 11.1429V23.5238C19.8095 24.2048 19.5673 24.7879 19.0828 25.2732C18.5983 25.7586 18.0151 26.0008 17.3333 26H2.47619ZM9.90476 19.8095C10.5857 19.8095 11.1689 19.5673 11.6542 19.0828C12.1395 18.5983 12.3818 18.0151 12.381 17.3333C12.381 16.6524 12.1387 16.0697 11.6542 15.5851C11.1697 15.1006 10.5865 14.858 9.90476 14.8571C9.22381 14.8571 8.64108 15.0998 8.15657 15.5851C7.67206 16.0705 7.4294 16.6532 7.42857 17.3333C7.42857 18.0143 7.67124 18.5974 8.15657 19.0828C8.6419 19.5681 9.22463 19.8103 9.90476 19.8095ZM6.19048 8.66667H13.619V6.19048C13.619 5.15873 13.2579 4.28175 12.5357 3.55952C11.8135 2.8373 10.9365 2.47619 9.90476 2.47619C8.87302 2.47619 7.99603 2.8373 7.27381 3.55952C6.55159 4.28175 6.19048 5.15873 6.19048 6.19048V8.66667Z" fill="#616161"/>
</svg>
  );