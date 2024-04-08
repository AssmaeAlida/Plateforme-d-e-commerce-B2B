import Demi_orange from "./Demi_orange/Demi_orange";
import RegisterForm from "./RegisterForm/RegisterForm";
import "./Register.css"
export default function Register(){

   
        
        return (
            <div style={{ display: 'flex', width: '100%', height: '100%' }}>
              <div style={{ flex: '40%' }}>
                
                <Demi_orange/>
              </div>
              <div style={{ flex: '60%'}}>
                {/* Content of the second component */}
                <RegisterForm/>
              </div>
            </div>
          );
        
        
    
}