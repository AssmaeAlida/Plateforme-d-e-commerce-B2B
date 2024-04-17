import "./InfoPassword.css"
import TextField from "./../InfosPersonnelles/TextField/TextField";
import ButtonEnregistrer from "./../InfosPersonnelles/ButtonEnregistrer/ButtonEnregistrer";


export default function InfoPassword(){
    return (
        <div className="InfoPassword">
            <div className="titre4">
            <h4 >Password</h4>

            </div>
            <div className="Passwd-Form">
            <TextField title="Current password" name="password"  text="Your password here..." type="password" />
            <TextField title="New password" name="passwird"  text="Your new password here..." type="newpassword" />
            <ButtonEnregistrer/>
              
            </div>
<<<<<<< HEAD
=======
            
>>>>>>> bf853e4e768438ccfec2df4ad2923dd4fde8789f

        </div>
    );
}