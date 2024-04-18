import 'typeface-inter';
import './CardProduct.css'
import Titre from './../Categories/Titre/Titre';
import CardProductForm from './CardProductForm/CardProductForm';
import React, { useState } from 'react';

export default function CardArticle(){
    const [showMore, setShowMore] = useState(false);

    const products = [
        {src: './images/rectangle-126.png', alt: 'desc', title: 'Clothes holders', sousTitre: 'Product status', prix: '49,99$'},
        // Ajoutez ici tous vos produits...
        {src: './images/rectangle-126.png', alt: 'desc', title: 'Clothes holders', sousTitre: 'Product status', prix: '49,99$'},
        {src: './images/rectangle-126.png', alt: 'desc', title: 'Clothes holders', sousTitre: 'Product status', prix: '49,99$'},
        {src: './images/rectangle-126.png', alt: 'desc', title: 'Clothes holders', sousTitre: 'Product status', prix: '49,99$'},
        {src: './images/rectangle-126.png', alt: 'desc', title: 'Clothes holders', sousTitre: 'Product status', prix: '49,99$'},
        {src: './images/rectangle-126.png', alt: 'desc', title: 'Clothes holders', sousTitre: 'Product status', prix: '49,99$'},
        {src: './images/rectangle-126.png', alt: 'desc', title: 'Clothes holders', sousTitre: 'Product status', prix: '49,99$'},
        {src: './images/rectangle-126.png', alt: 'desc', title: 'Clothes holders', sousTitre: 'Product status', prix: '49,99$'},
        {src: './images/rectangle-126.png', alt: 'desc', title: 'Clothes holders', sousTitre: 'Product status', prix: '49,99$'},

    ];

    const productsToShow = showMore ? products : products.slice(0, 6);

    return (
    <>
       <Titre Titre1='Browse by categories ' Titre2='Easy and simple navigation to feed your desire!'/>
       <div className="product-grid">
           {productsToShow.map((product, index) => (
               <CardProductForm key={index} {...product} />
           ))}
       </div>
       {!showMore && <a className='link-click' onClick={() => setShowMore(true)}>Voir plus</a>}
    </>
    );
}
