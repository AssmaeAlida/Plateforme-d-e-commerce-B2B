import 'typeface-inter';
import './CardArticleForm.css';
import React from 'react';

// Composant pour l'icône
function Icone() {
    return (
      <div className='icon'>
        <svg xmlns="http://www.w3.org/2000/svg" width="67" height="66" viewBox="0 0 67 66" fill="none">
            <g filter="url(#filter0_d_3_74)">
                <ellipse cx="33.5" cy="26.2173" rx="19.5" ry="19.3849" fill="white"/>
                <path d="M52.5761 26.2173C52.5761 36.6868 44.0378 45.1783 33.5 45.1783C22.9622 45.1783 14.4239 36.6868 14.4239 26.2173C14.4239 15.7478 22.9622 7.25631 33.5 7.25631C44.0378 7.25631 52.5761 15.7478 52.5761 26.2173Z" stroke="#D9D9D9" strokeWidth="0.847826"/>
            </g>
            <path d="M37.1803 18.6319C35.6062 18.6319 34.2092 19.2495 33.2627 20.3112C32.3162 19.2495 30.9192 18.6319 29.3451 18.6319C27.9741 18.6335 26.6597 19.1757 25.6903 20.1394C24.7208 21.1031 24.1755 22.4097 24.1738 23.7726C24.1738 29.4072 32.4643 33.9092 32.8169 34.0985C32.9539 34.1718 33.1071 34.2102 33.2627 34.2102C33.4183 34.2102 33.5715 34.1718 33.7085 34.0985C34.0611 33.9092 42.3516 29.4072 42.3516 23.7726C42.3499 22.4097 41.8046 21.1031 40.8351 20.1394C39.8657 19.1757 38.5513 18.6335 37.1803 18.6319ZM36.7502 29.7203C35.6589 30.6408 34.4924 31.4693 33.2627 32.1972C32.033 31.4693 30.8665 30.6408 29.7752 29.7203C28.0773 28.2723 26.0543 26.0641 26.0543 23.7726C26.0543 22.905 26.401 22.0729 27.0181 21.4594C27.6353 20.8459 28.4723 20.5012 29.3451 20.5012C30.7398 20.5012 31.9072 21.2334 32.3922 22.4126C32.4628 22.5846 32.5833 22.7317 32.7383 22.8352C32.8934 22.9388 33.0759 22.9941 33.2627 22.9941C33.4495 22.9941 33.632 22.9388 33.7871 22.8352C33.9421 22.7317 34.0626 22.5846 34.1332 22.4126C34.6182 21.2334 35.7857 20.5012 37.1803 20.5012C38.0531 20.5012 38.8901 20.8459 39.5073 21.4594C40.1244 22.0729 40.4711 22.905 40.4711 23.7726C40.4711 26.0641 38.4481 28.2723 36.7502 29.7203Z" fill="#717171"/>
            <defs>
                <filter id="filter0_d_3_74" x="0.434783" y="0.049789" width="66.1304" height="65.9003" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="6.78261"/>
                <feGaussianBlur stdDeviation="6.78261"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3_74"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3_74" result="shape"/>
                </filter>
            </defs>
        </svg>
        </div>
    );
}

// Composant pour la carte d'article
export default function CardArticleForm({src , alt, title , sousTitre}) {
    return (
        <div className="card-container">
            <div className='Card-Article'>
                <img src={src} alt={alt} /> 
                <div className="overlay"></div>
                <h2>{title}</h2>
                <h5 className='sousTitre12'>{sousTitre}</h5>
                <Icone /> {/* Appel du composant de l'icône */}
            </div>
        </div>
    );
}
