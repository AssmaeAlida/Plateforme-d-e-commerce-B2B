import "./ButtonEnregistrer.css"


export default function ButtonEnregistrer({onClick}){
    return (
        <div >
         <button className="btn-enregister" type="submit" onClick={onClick} >Register</button>

        </div>
    );
}