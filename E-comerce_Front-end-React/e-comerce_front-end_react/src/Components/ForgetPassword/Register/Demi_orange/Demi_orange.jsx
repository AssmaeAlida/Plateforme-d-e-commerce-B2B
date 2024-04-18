import "./demi_orange.css"

import 'typeface-inter';

export default function Demi_orange({grandtitle , smalltitle}){
    
    return(
        <>
        
        <div className="Demi_orange">
            <div className="welcome">
            <h3 >{grandtitle}</h3>
            <p> {smalltitle}</p>

            </div>
        </div>
        </>
    );
}