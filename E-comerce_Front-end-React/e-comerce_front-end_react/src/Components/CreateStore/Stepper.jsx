import { useState } from "react";
import StoreName from './StoreName/Storename';
import Payment from './Payment/Payment';
import { TiTick } from "react-icons/ti";
import Finish from './Finish/Finish';
import './stepper.css';
import { useNavigate } from "react-router-dom";

const Stepper = () => {
  const steps = ["Store name", "Store location" , "Finish"];
  const [currentStep, setCurrentStep] = useState(1);
  const [complete, setComplete] = useState(false);
  const [storeName, setStoreName] = useState('');
  const [lengthError, setLengthError] = useState('');
  const [spaceError, setSpaceError] = useState('');
  const [voidError, setVoidError] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  const [isNextClicked, setIsNextClicked] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('');
  const [isPhoneClicked, setIsPhoneClicked] = useState(false);
  const [address, setAddress] = useState('');
  const [addressError, setAddressError] = useState('');
  const navigate = useNavigate();

  
  return (
    <>
      <div className="flex justify-between" style={{marginTop : "2%",justifyContent : "center",width : "100%" , height:"50%"}}>
        {steps?.map((step, i) => (
          <div
            key={i}
            className={`step-item ${currentStep === i + 1 && "active"} ${(i + 1 < currentStep || complete) && "complete"}`}
          >
            <div className="step">
              {i + 1 < currentStep || complete ? <TiTick size={24} /> : i + 1}
            </div>
            <p className="text-gray-400">{step}</p>
          </div>
        ))}
      </div>
      <div style={{marginTop : "5%",width : "100%" , height:"50%"}}>
        {currentStep === 1 && <StoreName
            storeName={storeName}
            setStoreName={setStoreName}
            lengthError={lengthError.toString()}
            setLengthError={setLengthError}
            spaceError={spaceError.toString()}
            setSpaceError={setSpaceError}
            voidError={voidError.toString()}
            setVoidError={setVoidError}
            setIsClicked={setIsClicked}
            isNextClicked={isNextClicked}
            
        />}
         {currentStep === 2 && <Payment 
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          phoneNumberError={phoneNumberError}
          setPhoneNumberError={setPhoneNumberError}
          setIsPhoneClicked={setIsPhoneClicked}
          address={address}
          setAddress={setAddress}
          addressError={addressError}
          setAddressError={setAddressError}
      />}
      <div style={{alignContent : 'center' , justifyContent :'center' , textAlign : 'center'}}>
        {currentStep === 3 && <Finish />}
      </div>
      
      
      </div>
      <div className="flex justify-between" style={{alignContent : "center" , alignItems : "center" , textAlign: "center" ,display : "flex" , justifyContent : "center" }}>
        {currentStep > 1 && (
          <button
            className="btn1"
            style={{  backgroundColor: 'white' , color:"#FF5722" , marginRight :"50px", border:"2px solid #FF5722" , width:"100px"}}
            onClick={() => setCurrentStep((prev) => prev - 1)}
          >
            Back
          </button>
        )}
          {!complete && (
          <button
          className="btn1"
          disabled={
            lengthError || spaceError || voidError || phoneNumberError || addressError ||
            (currentStep === 1 && !isClicked) ||
            (currentStep === 2 && !isPhoneClicked)
          }
          onClick={() => {
            if (
              !(lengthError || spaceError || voidError || phoneNumberError || addressError) &&
              (currentStep !== 1 || isClicked) &&
              (currentStep !== 2 || isPhoneClicked)
            ) {
              if (currentStep === steps.length) {
                setComplete(true);
                navigate('/');
                 // Add this line
              } else {
                setCurrentStep((prev) => prev + 1);
              }
            }
          }}
        >
          {currentStep === steps.length ? "Finish" : "Save and continue"}
        </button>
      )}

      </div>
    </>
  );
};

export default Stepper;