import 'typeface-inter';
import './Categories.css'
import FormCategories from './FormCategories/FormCategories';
import Titre from './Titre/Titre';
export default function Categories(){
    return (
    <>
       <Titre Titre1='Categories' Titre2='Here you can find all categories!'/>
            <div className="categories-container">
                <FormCategories src='./images/ellipse-2.png' alt='img-categorie' title='Health' sousTitre='Lorem Ipsum' />
                <FormCategories src='./images/ellipse-3.png' alt='img-categorie' title='Sports' sousTitre='Lorem Ipsum' />
                <FormCategories src='./images/ellipse-4.png' alt='img-categorie' title='Cosmetics' sousTitre='Lorem Ipsum' />
                <FormCategories src='./images/ellipse-5.png' alt='img-categorie' title='Gaming' sousTitre='Lorem Ipsum' />
                <FormCategories src='./images/ellipse-6.png' alt='img-categorie' title='Clothing' sousTitre='Lorem Ipsum' />
                <FormCategories src='./images/ellipse-7.png' alt='img-categorie' title='Decoration' sousTitre='Lorem Ipsum' />

            </div>

    </>
    );
}


