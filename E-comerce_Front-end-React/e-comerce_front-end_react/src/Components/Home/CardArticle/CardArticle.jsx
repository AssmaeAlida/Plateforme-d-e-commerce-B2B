import 'typeface-inter';
import './CardArticle.css'
import Titre from './../Categories/Titre/Titre';
import CardArticleForm from './CardArticleForm/CardArticleForm';
export default function CardArticle(){
    return (
    <>
       <Titre Titre1='Most visited articles' Titre2='People seem to like this articles below!'/>
       <div className="CardArticle-container">
        <CardArticleForm src='./images/rectangle-9.png' alt='desription' title='Nail Polish' sousTitre='Lorem ipsum dolor sit amet' />
        <CardArticleForm src='./images/rectangle-10.png' alt='desription' title='Clothes holders' sousTitre='Lorem ipsum dolor sit amet' />
        <CardArticleForm src='./images/rectangle-11.png' alt='desription' title='Yoga Leggings' sousTitre='Lorem ipsum dolor sit amet' />
        <CardArticleForm src='./images/rectangle-12.png' alt='desription' title='Smart Watch' sousTitre='Lorem ipsum dolor sit amet' />

        </div>

    </>
    );
}


