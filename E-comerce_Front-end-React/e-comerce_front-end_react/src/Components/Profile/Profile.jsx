import InfoPassword from "./InfoPassword/InfoPassword";
import InfosPersonnelles from "./InfosPersonnelles/InfosPersonnelles";
import "./Profile.css"
import Titre from "./Title/Title"

export default function Profile(){
    return (
        <>
          <Titre></Titre>
           <InfosPersonnelles></InfosPersonnelles>
           <InfoPassword></InfoPassword>

        </>
    );
}