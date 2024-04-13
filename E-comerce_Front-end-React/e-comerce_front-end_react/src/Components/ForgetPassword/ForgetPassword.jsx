import "./ForgetPassword.css"
<<<<<<< HEAD
import ForgetPasswordForm from "./ForgetPasswordForm/ForgetPasswordForm";
import PartOrange from "./PartOrange/PartOrange";
export default function RegisterForm(){
    return (
        <>
        <PartOrange/>
        <ForgetPasswordForm></ForgetPasswordForm>
=======
import PartOrange from "./PartOrange/PartOrange"
import ForgetPasswordForm from "./ForgetPasswordForm/ForgetPasswordForm";
export default function RegisterForm(){
    return (
        <>
        <div className="register_form flex"  >
        <PartOrange/>
        <ForgetPasswordForm/>
        
>>>>>>> 06b772a22b2a2808bb75a01eaa8318fc30773cea


        </>
    );
}