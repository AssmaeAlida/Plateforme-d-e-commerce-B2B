import React, { useState } from 'react';
import './ListProduct.css'


// Composant de la modale
function Modal({ isOpen, onClose, onConfirm }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <div className="modal-content">
                    <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="92" height="88" viewBox="0 0 92 88" fill="none">
                        <path d="M89.0042 61.9503L60.8047 11.1913C57.0154 4.3617 51.7721 0.616455 46 0.616455C40.2279 0.616455 34.9846 4.3617 31.1953 11.1913L2.99583 61.9503C-0.573158 68.4273 -0.969713 74.64 1.89429 79.5309C4.7583 84.4217 10.3982 87.1095 17.8005 87.1095L74.1994 87.1095C81.6018 87.1095 87.2417 84.4217 90.1057 79.5309C92.9697 74.64 92.5732 68.3833 89.0042 61.9503ZM42.6954 31.4596C42.6954 29.6531 44.1935 28.155 46 28.155C47.8065 28.155 49.3046 29.6531 49.3046 31.4596L49.3046 53.4904C49.3046 55.297 47.8065 56.7951 46 56.7951C44.1935 56.7951 42.6954 55.297 42.6954 53.4904L42.6954 31.4596ZM49.1284 69.8373L48.4674 70.366C48.2031 70.5423 47.9387 70.6745 47.6743 70.7626C47.41 70.8948 47.1456 70.9829 46.8372 71.027C46.5728 71.071 46.2644 71.1151 46 71.1151C45.7356 71.1151 45.4272 71.071 45.1188 71.027C44.8427 70.979 44.5753 70.8899 44.3257 70.7626C44.0448 70.6663 43.7781 70.5329 43.5325 70.366L42.8716 69.8373C42.0785 69.0001 41.5938 67.8545 41.5938 66.7089C41.5938 65.5633 42.0785 64.4177 42.8716 63.5806L43.5325 63.0518C43.7969 62.8756 44.0613 62.7434 44.3257 62.6553C44.59 62.5231 44.8544 62.4349 45.1188 62.3909C45.6916 62.2587 46.3084 62.2587 46.8372 62.3909C47.1456 62.4349 47.41 62.5231 47.6743 62.6553C47.9387 62.7434 48.2031 62.8756 48.4674 63.0518L49.1284 63.5806C49.9215 64.4177 50.4062 65.5633 50.4062 66.7089C50.4062 67.8545 49.9215 69.0001 49.1284 69.8373Z" fill="#FF5722"/>
                        </svg>
                    </div>
                    <h2 className='QstDelete'>Are you sure you want to delete this item?</h2>
                    <h6 className='QstDelete2'>You risk losing your deletions permanently</h6>

                    <div className="modal-buttons">
                        <button className='btn-deleteProduct' onClick={onConfirm}>Delete</button>
                        <button className='cancel-popup' onClick={onClose}>Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

// Composant de la modal de modification
function ModifyModal({ isOpen, onClose, onConfirm }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal1">
                <div className="modal-content">
                    <h2 className='QstDelete'>Modify Product</h2>
                    {/* Ajoutez ici vos champs d'entrée pour la modification */}
                    <div className='modifier-image'>  </div>
                    <div className='titlesProduitModifier'>
                        <div className='nameProductMofier1'>
                        <label >Product name</label>

                        </div>
                        <input className='inputModifier' type="text" placeholder="Enter new product name" />

                    </div>
                     <div className='titlesProduitModifier'>
                        <div className='nameProductMofier2'>
                        <label> Product Category</label>

                        </div>
                       <input className='inputModifier' type="text" placeholder="Enter new product category" />

                     </div>
                        
                      <div className='titlesProduitModifier'>

                        <div  className='nameProductMofier4'>
                        <label>Product Price</label>

                        </div>
                            <input className='inputModifier' type="number" placeholder="Enter new product price" />
                    </div> 
                    <div className='titlesProduitModifier'>
                        <div className='nameProductMofier5'>
                           <label>Product Description</label>
                        </div>
                    <input  className='inputModifier'  type="text" placeholder="Enter new product description" />

                    </div>    


                    {/* Ajoutez un bouton pour confirmer la modification */}
                    <button className='btn-ModifierProduct' onClick={onConfirm}>Modify</button>
                    <button className='cancel-popup1' onClick={onClose}>Cancel</button>
                </div>
            </div>
        </div>
    );
}


function ListProduct({src , alt , nameProduct , QTe, pricee, dateDelancement }) {

   
    const [price, setPrice] = useState(0);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleDateChange = (event) => {
        console.log(event.target.value); // Affiche la date sélectionnée
    };

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };
  
    const handleDeleteConfirmation = () => {
        setModalOpen(true);
    };

    const handleConfirmDelete = () => {
        // Ajoutez ici la logique pour supprimer l'élément
        console.log("Item deleted successfully!");
        setModalOpen(false);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const [isModifyModalOpen, setModifyModalOpen] = useState(false);

    // Fonction pour ouvrir la modal de modification
    const handleOpenModifyModal = () => {
        setModifyModalOpen(true);
    };

    // Fonction pour fermer la modal de modification
    const handleCloseModifyModal = () => {
        setModifyModalOpen(false);
    };

    // Fonction pour confirmer la modification
    const handleConfirmModify = () => {
        // Ajoutez ici la logique pour modifier l'élément
        console.log("Item modified successfully!");
        setModifyModalOpen(false);
    };
    return (
        <>
        <div>
            <h3 className='TitleList'>Lists of your products</h3>
            <input className='SearchProduct' placeholder='  Search...'/>
            <div className='icon-searchhh' >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M15 15.026L13.6 13.6597M7.65 14.3429C8.52329 14.3429 9.38803 14.175 10.1948 13.8489C11.0017 13.5227 11.7348 13.0447 12.3523 12.442C12.9698 11.8394 13.4596 11.1239 13.7938 10.3365C14.128 9.54914 14.3 8.70522 14.3 7.85295C14.3 7.00069 14.128 6.15676 13.7938 5.36937C13.4596 4.58198 12.9698 3.86653 12.3523 3.26389C11.7348 2.66125 11.0017 2.1832 10.1948 1.85705C9.38803 1.5309 8.52329 1.36304 7.65 1.36304C5.88631 1.36304 4.19486 2.04679 2.94774 3.26389C1.70062 4.48098 1 6.13172 1 7.85295C1 9.57419 1.70062 11.2249 2.94774 12.442C4.19486 13.6591 5.88631 14.3429 7.65 14.3429Z" stroke="#9A9A9A" stroke-width="1.05" stroke-linecap="round" stroke-linejoin="round"/>
           </svg>
            </div>
           <div className='sDate'>
           <input className='sortDate' type="date" onChange={handleDateChange} />

           </div>
            <div className="price-filter">
                <input type="range" id="price" name="price" min="0" max="1000" onChange={handlePriceChange} />
                <label htmlFor="price">Price: <span id="price-label">{price}</span></label>
            </div>
        </div>
    <div>
     <table className="table-auto">
      <thead>
        <tr>
          <th className='coll' scope="col">image</th>
          <th scope="col">Product</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
          <th scope="col">Launch date</th>
           <th scope="col">Actions</th>
         </tr>
      </thead>
  
      <tbody className="table-line">
      
        
        <tr >     
          <td className='ligneTable'>
            <img src={src} alt={alt} />
          </td>
          <td className='ligneTable'>{nameProduct}</td>
          <td className='ligneTable'>{QTe}</td>
          <td className='ligneTable'>{pricee} $</td>
          <td className='ligneTable'>{dateDelancement}</td>
          <td >
            <div className='icon-modifier' onClick={handleOpenModifyModal}>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
              <path d="M14.9069 0H6.10354C2.27964 0 0 2.2785 0 6.1005V14.889C0 18.7215 2.27964 21 6.10354 21H14.8964C18.7203 21 21 18.7215 21 14.8995V6.1005C21.0105 2.2785 18.7308 0 14.9069 0ZM9.40219 16.2855C9.09753 16.59 8.51975 16.884 8.09954 16.947L5.51525 17.3145C5.4207 17.325 5.32615 17.3355 5.23161 17.3355C4.80089 17.3355 4.40169 17.1885 4.11805 16.905C3.77138 16.5585 3.62431 16.0545 3.70835 15.498L4.07603 12.915C4.13906 12.4845 4.4227 11.9175 4.73786 11.613L9.4232 6.93C9.59015 7.40033 9.8012 7.85385 10.0535 8.2845C10.1586 8.463 10.2741 8.631 10.3687 8.757C10.4842 8.9355 10.6208 9.1035 10.7048 9.198C10.7574 9.2715 10.7994 9.324 10.8204 9.345C11.083 9.66 11.3877 9.954 11.6503 10.1745C11.7238 10.248 11.7659 10.29 11.7869 10.3005C11.9445 10.4265 12.102 10.5525 12.2386 10.647C12.4067 10.773 12.5748 10.8885 12.7534 10.983C12.9635 11.109 13.1946 11.2245 13.4257 11.34C13.6673 11.445 13.8879 11.5395 14.1085 11.613L9.40219 16.2855ZM16.1465 9.5445L15.1801 10.521C15.1497 10.5512 15.1136 10.5751 15.0739 10.5913C15.0343 10.6075 14.9918 10.6157 14.9489 10.6155C14.9174 10.6155 14.8754 10.6155 14.8544 10.605C13.7991 10.2992 12.8383 9.73169 12.0614 8.95514C11.2844 8.1786 10.7166 7.21828 10.4107 6.1635C10.3792 6.048 10.4107 5.922 10.4947 5.8485L11.4717 4.872C13.0685 3.276 14.5918 3.3075 16.1571 4.872C16.9554 5.67 17.3441 6.4365 17.3441 7.2345C17.3336 7.9905 16.9449 8.7465 16.1465 9.5445Z" fill="#FD6C6B"/>
            </svg>
            </div>
           <div className='icon-delete'  onClick={handleDeleteConfirmation}> 
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="24" viewBox="0 0 19 24" fill="none">
                    <path d="M1.30159 20.8254C1.30159 22.2571 2.47302 23.4286 3.90476 23.4286H14.3175C15.7492 23.4286 16.9206 22.2571 16.9206 20.8254V7.80952C16.9206 6.37778 15.7492 5.20635 14.3175 5.20635H3.90476C2.47302 5.20635 1.30159 6.37778 1.30159 7.80952V20.8254ZM16.9206 1.30159H13.6667L12.7425 0.37746C12.5083 0.143175 12.1698 0 11.8314 0H6.39079C6.05238 0 5.71397 0.143175 5.47968 0.37746L4.55556 1.30159H1.30159C0.585714 1.30159 0 1.8873 0 2.60317C0 3.31905 0.585714 3.90476 1.30159 3.90476H16.9206C17.6365 3.90476 18.2222 3.31905 18.2222 2.60317C18.2222 1.8873 17.6365 1.30159 16.9206 1.30159Z" fill="#FD6C6B"/>
                </svg>
           </div>
          </td>
        </tr>
        
     </tbody>
    </table>
</div>
            {/* Modale de confirmation */}
            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onConfirm={handleConfirmDelete}
            />
             {/* Modale de modification */}
             <ModifyModal
                isOpen={isModifyModalOpen}
                onClose={handleCloseModifyModal}
                onConfirm={handleConfirmModify}
            />
        </>
    );
}

export default ListProduct;
