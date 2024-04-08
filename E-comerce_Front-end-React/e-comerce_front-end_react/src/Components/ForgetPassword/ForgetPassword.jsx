import "./ForgetPassword.css"
import ForgetPasswordForm from "./ForgetPasswordForm/ForgetPasswordForm";
import PartOrange from "./PartOrange/PartOrange";
export default function RegisterForm(){
    return (
        <>
        <div className="register_form">
        <PartOrange/>
        <ForgetPasswordForm></ForgetPasswordForm>


        </div>
        </>
    );
}