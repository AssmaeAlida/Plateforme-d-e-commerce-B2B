import Demi_orange from "./Demi_orange/Demi_orange";
import RegisterForm from "./RegisterForm/RegisterForm";
import "./Register.css"
export default function Register(){

   
        
        return (
            <div className="flex" >
              <div className="demiorange" style={{height:970}}>
                
                <Demi_orange   grandtitle={"Welcome to Your Store!"} smalltitle="We're glad to have you join us !"/>
              </div>
              <div className="registerform">
                {/* Content of the second component */}
                <RegisterForm/>
              </div>
            </div>
          );
        
        
    
}