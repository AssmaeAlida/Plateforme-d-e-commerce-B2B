import"./Login.css"
import Demi_orange from "./Demi_orange/Demi_orange";
import LoginForm from "./RegisterForm/LoginForm";

export default function Login(){
return(
    <>
<div className="flex">
              <div className="demiorange" >
                
                <Demi_orange  grandtitle={"Welcome Back!"} smalltitle={"YourStore Hopes Your Are Doing Well!"}/>
              </div>
              <div className="registerform">
                {/* Content of the second component */}
                <LoginForm/>
              </div>
            </div>

    </>
)

}