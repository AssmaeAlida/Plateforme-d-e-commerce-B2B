import React from 'react';
import './PageAddProduct.css';
import { useNavigate } from 'react-router-dom';

function PageAddProduct() {
    const navigate = useNavigate();
    function navigation(event){
        event.preventDefault();
        navigate("/MyStore")
    }
    
    return (
        <div className='AddProduct2' >
        <div>
            <div onClick={navigation} className='icon-returrnn'>
                 <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                  <path d="M21.2506 0.208984C9.63565 0.208984 0.208984 9.63565 0.208984 21.2506C0.208984 32.8657 9.63565 42.2923 21.2506 42.2923C32.8657 42.2923 42.2923 32.8657 42.2923 21.2506C42.2923 9.63565 32.8657 0.208984 21.2506 0.208984ZM28.6152 22.8288H17.6946L21.3138 26.4479C21.924 27.0581 21.924 28.0681 21.3138 28.6784C20.9981 28.994 20.5984 29.1413 20.1986 29.1413C19.7988 29.1413 19.399 28.994 19.0834 28.6784L12.7709 22.3659C12.4774 22.0689 12.3128 21.6682 12.3128 21.2506C12.3128 20.8331 12.4774 20.4324 12.7709 20.1354L19.0834 13.8229C19.6936 13.2127 20.7036 13.2127 21.3138 13.8229C21.924 14.4332 21.924 15.4431 21.3138 16.0534L17.6946 19.6725H28.6152C29.4779 19.6725 30.1934 20.3879 30.1934 21.2506C30.1934 22.1134 29.4779 22.8288 28.6152 22.8288Z" fill="#FF5722"/>
                </svg>
            </div>
        <h1 className='tiitle'>Please fill in the fields below!</h1>  
           <h2 className='tiiitle2'>These are the details of your product</h2>
        </div>

         <div className='ajouterProduit'>
                      <div className='icon-ajouterProd'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="97" height="106" viewBox="0 0 97 106" fill="none">
                          <rect y="0.888489" width="97" height="104.502" rx="10" fill="#FF5722" fillOpacity="0.43"/>
                        </svg>
                     <a>+</a>
                      </div>
                      <h4 className='titleAdd'>Add photos to your post</h4>
                        <h6 className='titleAddd2'>For optimal visibility of your post, <br></br>
                        please include photos relevant to your product
                        </h6>
        </div>
        <div>
            <div>
                <div className='LabelnameProduct'>
                      <label >Product name</label>
                </div>
                <input className='inputNameProduct' placeholder='   Please type the name here...'/>
            </div>
            <div>
              <div className='LabelnameProduct'>
                   <label>Product category</label>
              </div>
                <input className='inputNameProduct' placeholder='   Please type the category here...'/>
            </div>
            <div>
            <div className='LabelnameProduct'>
                <label >Product price (Dollars)</label>
           </div>
                <input className='inputNameProduct' placeholder='   Please type the price here...'/>
            </div>
            <div>
            <div className='LabelnameProduct'>
               <label >Product description</label>
           </div>
                <input className='inputDescriptionProduct' placeholder='   Please briefly describe your product...'/>
            </div>
            <button className='publish'>Publish my product</button>
        </div>
        </div>
    );
}

export default PageAddProduct;