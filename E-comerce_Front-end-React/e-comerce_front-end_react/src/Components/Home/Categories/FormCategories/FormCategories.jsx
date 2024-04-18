import 'typeface-inter';
import './FormCategories.css'
export default function FormCategories({src , alt , title , sousTitre }){
    return (
    <div className='form-categories'>
        <div className='img-categorie'>
            <img  src={src}  alt={alt} />
        </div>
        <div className='Titres'>
            <h3 className='Title11'>{title}</h3>
            <h4 className='sousTitre11'>{sousTitre}</h4>
         </div>
    </div>
    );
}


