import "./ForgetPassword.css"
import PartOrange from "./PartOrange/PartOrange"
import InsertCodeForm from "./ForgetPasswordForm/InsertCodeForm";
export default function RegisterForm(){
    return (
        <>
        <div className="register_form flex"  >
        <PartOrange/>
        <InsertCodeForm/>
        


        </div>
        </>
    );
}