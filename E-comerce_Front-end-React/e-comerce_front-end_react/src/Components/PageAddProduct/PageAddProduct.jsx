import React, { useState, useEffect } from 'react';
import './PageAddProduct.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function PageAddProduct() {
    const navigate = useNavigate();
    const [productName, setProductName] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productQuantity, setProductQuantity] = useState('');
    const [categories, setCategories] = useState([]);
    const [uploadedImage, setUploadedImage] = useState(null);
    
    useEffect(() => {
        // Fetch categories data from your API
        axios.get('http://localhost:8089/ecomerce-backend/Categorie/all')
            .then(response => {
                // Assuming your API returns an array of category objects with a 'label' field
                setCategories(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });
    }, []);
    console.log('Idggg',sessionStorage.getItem('IdUser'));

    async function handleSubmit(event) {
        event.preventDefault();
        
        
        // Create an object with the data to be sent
        const newProductData = {
            utilisateur: {
                id : sessionStorage.getItem('IdUser')},
            titre: productName,
            description: productDescription,
            prix: parseFloat(productPrice),
            qteProduit: parseInt(productQuantity),
            categorie: {
                libelle: productCategory
            },
            // Add the uploaded image data
            image: uploadedImage
        };
    
        try {
            // Make the POST request using Axios to add the product
            const productResponse = await axios.post('http://localhost:8089/ecomerce-backend/Produit/addProduct', newProductData);
            
            // If the product is successfully added, save the image separately
            if(productResponse.status === 200){
                console.log('Product added successfully:', productResponse.data);
                navigate('/MyStore');
                
                // Now, make a separate request to save the image
                const imageResponse = await axios.post('http://localhost:8089/ecomerce-backend/Produit/uploadImage', {
                    productName: productName,
                    image: uploadedImage
                });

                if(imageResponse.status === 200){
                    console.log('Image uploaded successfully:', imageResponse.data);
                }
                
                // Redirect to MyStore page after successful addition
                navigate('/MyStore');
            }
            
        } catch (error) {
            console.error('Error adding product:', error);
        }
    }
    
    function navigation() {
        navigate("/MyStore");
    }
    
    function handleImageUpload(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setUploadedImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    }
    
    return (
        <div className='AddProduct2'>
            <div>
                <div onClick={navigation} className='icon-returrnn'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none" > 
                        <path d="M21.2506 0.208984C9.63565 0.208984 0.208984 9.63565 0.208984 21.2506C0.208984 32.8657 9.63565 42.2923 21.2506 42.2923C32.8657 42.2923 42.2923 32.8657 42.2923 21.2506C42.2923 9.63565 32.8657 0.208984 21.2506 0.208984ZM28.6152 22.8288H17.6946L21.3138 26.4479C21.924 27.0581 21.924 28.0681 21.3138 28.6784C20.9981 28.994 20.5984 29.1413 20.1986 29.1413C19.7988 29.1413 19.399 28.994 19.0834 28.6784L12.7709 22.3659C12.4774 22.0689 12.3128 21.6682 12.3128 21.2506C12.3128 20.8331 12.4774 20.4324 12.7709 20.1354L19.0834 13.8229C19.6936 13.2127 20.7036 13.2127 21.3138 13.8229C21.924 14.4332 21.924 15.4431 21.3138 16.0534L17.6946 19.6725H28.6152C29.4779 19.6725 30.1934 20.3879 30.1934 21.2506C30.1934 22.1134 29.4779 22.8288 28.6152 22.8288Z" fill="#FF5722"/>
                    </svg>
                </div>
                <h1 className='tiitle'>Please fill in the fields below!</h1>  
                <h2 className='tiiitle2'>These are the details of your product</h2>
            </div>

            <div className='ajouterProduit'>
                <label htmlFor="fileUpload" className='icon-ajouterProd'>
                    <input id="fileUpload" type="file" accept="image/*" style={{  display: "none",  marginTop : "10px"}} onChange={handleImageUpload} />
                    {uploadedImage ? (
                        <div style={{marginLeft : "210px"}} >
                            <img src={uploadedImage} alt="Uploaded" className="uploadedImageIcon" style={{width : "200px",height : "220px"}} />
                        </div>
                    ) : (
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="97" height="203" viewBox="0 -51 97 106" fill="none" style={{marginLeft : "260px"}}>
                            <rect y="0.888489" width="97" height="104.502" rx="10" fill="#FF5722" fillOpacity="0.43"/>
                        </svg>
                        <a style={{marginLeft : "276px"}}>+</a>

                        </div>
                        
                    )}
                </label>
                <h4 className='titleAdd'>Add photos to your post</h4>
                <h6 className='titleAddd2'>For optimal visibility of your post, <br></br>
                please include photos relevant to your product
                </h6>
            </div>

            
            
            <form onSubmit={handleSubmit}>
                <div className='LabelnameProduct'>
                    <label>Product name</label>
                </div>
                <input
                    className='inputNameProduct'
                    placeholder='Please type the name here...'
                    value={productName}
                    onChange={e => setProductName(e.target.value)}
                />

                <div className='LabelnameProduct'>
                    <label>Product category</label>
                </div>
                <select
                    className='inputNameProduct'
                    value={productCategory}
                    onChange={e => setProductCategory(e.target.value)}
                >
                    <option value="">Select category...</option>
                    {categories.map(category => (
                        <option key={category.id} value={category.libelle}>{category.libelle}</option>
                    ))}
                </select>

                <div className='LabelnameProduct'>
                    <label>Product price (Dollars)</label>
                </div>
                <input
                    className='inputNameProduct'
                    placeholder='Please type the price here...'
                    value={productPrice}
                    onChange={e => setProductPrice(e.target.value)}
                />
                
                <div className='LabelnameProduct'>
                    <label>Quantity</label>
                </div>
                <input
                    className='inputNameProduct'
                    placeholder='Please type the quantity here...'
                    value={productQuantity}
                    onChange={e => setProductQuantity(e.target.value)}
                />

                <div className='LabelnameProduct'>
                    <label>Product description</label>
                </div>
                <input
                    className='inputDescriptionProduct'
                    placeholder='Please briefly describe your product...'
                    value={productDescription}
                    onChange={e => setProductDescription(e.target.value)}
                />
                
                <button type="submit" className='publish'>Publish my product</button>
            </form>

        </div>
    );
}

export default PageAddProduct;