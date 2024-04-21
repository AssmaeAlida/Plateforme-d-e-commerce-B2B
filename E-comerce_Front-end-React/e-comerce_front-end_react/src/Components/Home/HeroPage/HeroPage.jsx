import 'typeface-inter';
import './HeroPage.css'
import { useNavigate } from 'react-router-dom';
export default function HeroPage(){

    const navigate = useNavigate();
    function navigation1(event){
        event.preventDefault();
        navigate("/login")
    }
    return (
       
<div style={{width: 1372, height: 491, background: '#F5F5F5', borderRadius: 40, border: '1px #D9D9D9 solid', marginLeft: 62 , marginTop: 31}} >
    <div>
     <h1 className='Title12'>The Best Quality Store You <br></br>
        Will Ever Know!</h1>
     <h4 className='Title21'>Celebrate Your Unique Style with Our Unforgettable Finds!</h4>
     <button onClick={navigation1} className='btn-SignIn12'>Sign In</button>
     <a className='LinkCreateStore'>Create YourOwn Store!</a>
    </div>
    <div className='image1'></div>
</div>

    );
}

