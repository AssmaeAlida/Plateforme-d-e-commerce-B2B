import 'typeface-inter';
import './HeroPageClt.css'
import { useNavigate } from 'react-router-dom';
export default function HeroPageClt(){

    const navigate = useNavigate();
    function navigation2(event){
        event.preventDefault();
        navigate("/createStore")
    }
    return (
       
<div style={{width: 1372, height: 491, background: '#F5F5F5', borderRadius: 40, border: '1px #D9D9D9 solid', marginLeft: 62 , marginTop: 31}} >
    <div>
     <h1 className='Title12'>Create Your Own Store And <br></br>
With </h1>
<h1 className='Title13'>YourStore!</h1> 
     <h4 className='Title21'>Easy, Simple and Fast!</h4>
     <button onClick={navigation2} className='btn-CreateStore'>Create My Store!</button>
    </div>
    <div className='image12'></div>
</div>

    );
}

