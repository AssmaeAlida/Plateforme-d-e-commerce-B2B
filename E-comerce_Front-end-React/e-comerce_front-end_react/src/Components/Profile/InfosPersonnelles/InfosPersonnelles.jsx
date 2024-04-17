import "./InfosPersonnelles.css"
import TextField from "./TextField/TextField";
import ButtonEnregistrer from "./ButtonEnregistrer/ButtonEnregistrer";
import Avatar from "./Avatar/Avatar"

export default function InfosPersonnelles(){
    return (
        <div className="InfoPerso">
            <div className="titre2">
            <h4 >Personal information</h4>
            </div>
            <h6 className="titre3">Update your information quickly!</h6>
            {/** la partie image */}
            <div>
            <Avatar src="./images/rectangle-4777.png" alt="Description de l'image" />

            </div>
            <div className="info-form">
            <TextField title=" UserName" name="name"  text="Your name here..." type="name" />
            <TextField title="Email Address" name="email"  text="Your email here..." type="email" />
            <ButtonEnregistrer/>           
            </div>
            

        </div>
    );
}