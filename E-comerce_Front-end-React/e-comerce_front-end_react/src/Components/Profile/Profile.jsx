import InfoPassword from "./InfoPassword/InfoPassword";
import InfosPersonnelles from "./InfosPersonnelles/InfosPersonnelles";
import "./Profile.css"
import Titre from "./Title/Title"
import { useNavigate } from 'react-router-dom';


export default function Profile(){
    const navigate = useNavigate();
    function navigation1(event){
        event.preventDefault();
        navigate("/home")
    }
    return (
        <>
            <div   onClick={navigation1} className="icon-retour">
            <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                <path d="M25.2504 4.20886C13.6354 4.20886 4.20874 13.6355 4.20874 25.2505C4.20874 36.8655 13.6354 46.2922 25.2504 46.2922C36.8654 46.2922 46.2921 36.8655 46.2921 25.2505C46.2921 13.6355 36.8654 4.20886 25.2504 4.20886ZM32.615 26.8287H21.6944L25.3135 30.4478C25.9237 31.058 25.9237 32.068 25.3135 32.6782C24.9979 32.9939 24.5981 33.1412 24.1983 33.1412C23.7985 33.1412 23.3987 32.9939 23.0831 32.6782L16.7706 26.3657C16.4771 26.0688 16.3125 25.6681 16.3125 25.2505C16.3125 24.833 16.4771 24.4323 16.7706 24.1353L23.0831 17.8228C23.6933 17.2126 24.7033 17.2126 25.3135 17.8228C25.9237 18.433 25.9237 19.443 25.3135 20.0532L21.6944 23.6724H32.615C33.4777 23.6724 34.1931 24.3878 34.1931 25.2505C34.1931 26.1132 33.4777 26.8287 32.615 26.8287Z" fill="#FF5722"/>
            </svg>
            </div>
          <Titre></Titre>
           <InfosPersonnelles></InfosPersonnelles>
           <InfoPassword></InfoPassword>
        </>
    );
}