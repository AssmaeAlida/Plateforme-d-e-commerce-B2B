import 'typeface-inter';
import './Titre.css'
export default function Titre({Titre1,Titre2}){
    return (
    <div>
       <h1 className='Titre1'>{Titre1}</h1>
       <h2 className='Titre2'>{Titre2}</h2>
   </div>
    );
}
