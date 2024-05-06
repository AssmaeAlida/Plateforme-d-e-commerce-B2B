import React, { useState } from 'react';
import './../CategoriesAdmin/Tables.css'
import { FaEdit, FaTrash, FaEye, FaPlus } from 'react-icons/fa';

const CrudPage = () => {
    const [data, setData] = useState([
        { id: 1, UserName: 'UserName 1', Password: 'pssd1' },
        { id: 2, UserName: 'UserName 2', Password: 'pssd2' },
        // Ajoutez plus de données initiales ici si nécessaire
    ]);
    const [viewingItem, setViewingItem] = useState(null);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editFormData, setEditFormData] = useState({
        id: null,
        UserName: '',
        Password: ''
    });
    const [deleteItemId, setDeleteItemId] = useState(null);
    const [isDeleteConfirmationOpen, setIsDeleteConfirmationOpen] = useState(false);

    const handleCreate = () => {
        setIsCreateModalOpen(true);
    };

    const handleUpdate = (id) => {
        const itemToEdit = data.find(item => item.id === id);
        setEditFormData({ id: itemToEdit.id, UserName: itemToEdit.UserName, Password: itemToEdit.Password });
        setIsEditModalOpen(true);
    };

    const handleDelete = (id) => {
        setDeleteItemId(id);
        setIsDeleteConfirmationOpen(true);
    };

    const confirmDelete = () => {
        const newData = data.filter(item => item.id !== deleteItemId);
        setData(newData);
        setIsDeleteConfirmationOpen(false);
    };

    const handleView = (item) => {
        setViewingItem(item);
        setIsViewModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsViewModalOpen(false);
        setIsCreateModalOpen(false);
        setIsEditModalOpen(false);
        setIsDeleteConfirmationOpen(false);
        setEditFormData({ id: null, UserName: '', Password: '' });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newAdmin = {
            id: data.length + 1,
            UserName: event.target.UserName.value,
            Password: event.target.Password.value
        };
        setData([...data, newAdmin]);
        setIsCreateModalOpen(false);
    };

    const handleEditSubmit = (event) => {
        event.preventDefault();
        const updatedItem = { id: editFormData.id, UserName: editFormData.UserName, Password: editFormData.Password };
        const updatedData = data.map(item => (item.id === updatedItem.id ? updatedItem : item));
        setData(updatedData);
        setIsEditModalOpen(false);
    };

    return (
        <main className='main-container'>
            <div className='main-title'>
                <h3>ADMINS</h3>
            </div>
            <div>
                <button className='btnAddCategorie' onClick={handleCreate}><FaPlus /> Add Admin</button>
                <table className='TableCategories'>
                    <thead>
                        <tr>
                            <th className='Attibut'>ID</th>
                            <th className='Attibut'>UserName</th>
                            <th className='Attibut'>Password</th>
                            <th className='Attibut'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td  className='AttibutCategory'>{item.id}</td>
                                <td className='AttibutCategory'>{item.UserName}</td>
                                <td className='AttibutCategory'>{item.Password}</td>
                                <td className='AttibutCategory'>
                                    <button className='btn' onClick={() => handleView(item)}><FaEye /></button>
                                    <button className='btn' onClick={() => handleUpdate(item.id)}><FaEdit /></button>
                                    <button className='btn' onClick={() => handleDelete(item.id)}><FaTrash /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {isViewModalOpen && (
                    <div className="modal111">
                        <h2 className='titleModalCreate'>Viewing Item</h2>
                        <p>ID: {viewingItem.id}</p>
                        <p>UserName: {viewingItem.UserName}</p>
                        <p>Password: {viewingItem.Password}</p>
                        <button className='btn-modaleClose2' onClick={handleCloseModal}>Close</button>
                    </div>
                )}
                {isCreateModalOpen && (
                    <div className="modal111">
                        <h2 className='titleModalCreate'>Create New Admin</h2>
                        <form onSubmit={handleSubmit}>
                            <div className='Create-title'>
                                <label>UserName:</label>
                            </div>
                            <input className='input-create' type="text" name="UserName" placeholder='Enter UserName' />

                            <div className='Create-title'>
                                <label>Password:</label>
                            </div>
                            <input className='input-create' type="password" name="Password" placeholder='Enter Password' />

                            <button className='btn-modaleCreate' type="submit">Create</button>
                        </form>
                        <button className='btn-modaleClose' onClick={handleCloseModal}>Close</button>
                    </div>
                )}
                {isEditModalOpen && (
                    <div className="modal111">
                        <h2 className='titleModalCreate'>Edit Admin</h2>
                        <form onSubmit={handleEditSubmit}>
                            <div className='Create-title'>
                                <label>UserName</label>
                                </div>    
                                <input className='input-create' type="text" name="UserName" value={editFormData.UserName} onChange={(e) => setEditFormData({ ...editFormData, UserName: e.target.value })} />
                            
                            <div className='Create-title'>
                                <label>Password</label>
                                </div>
                                <input className='input-create' type="password" name="Password" value={editFormData.Password} onChange={(e) => setEditFormData({ ...editFormData, Password: e.target.value })} />
                           
                            <button className='btn-modaleCreate' type="submit">Save</button>
                        </form>
                        <button className='btn-modaleClose' onClick={handleCloseModal}>Cancel</button>
                    </div>
                )}
                {isDeleteConfirmationOpen && (
                    <div className="modal111">
                        <h2 className='titleModalCreate'>Confirm Delete</h2>
                        <div className='icon-AlterDelete'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="92" height="88" viewBox="0 0 92 88" fill="none">
                        <path d="M89.0042 61.9503L60.8047 11.1913C57.0154 4.3617 51.7721 0.616455 46 0.616455C40.2279 0.616455 34.9846 4.3617 31.1953 11.1913L2.99583 61.9503C-0.573158 68.4273 -0.969713 74.64 1.89429 79.5309C4.7583 84.4217 10.3982 87.1095 17.8005 87.1095L74.1994 87.1095C81.6018 87.1095 87.2417 84.4217 90.1057 79.5309C92.9697 74.64 92.5732 68.3833 89.0042 61.9503ZM42.6954 31.4596C42.6954 29.6531 44.1935 28.155 46 28.155C47.8065 28.155 49.3046 29.6531 49.3046 31.4596L49.3046 53.4904C49.3046 55.297 47.8065 56.7951 46 56.7951C44.1935 56.7951 42.6954 55.297 42.6954 53.4904L42.6954 31.4596ZM49.1284 69.8373L48.4674 70.366C48.2031 70.5423 47.9387 70.6745 47.6743 70.7626C47.41 70.8948 47.1456 70.9829 46.8372 71.027C46.5728 71.071 46.2644 71.1151 46 71.1151C45.7356 71.1151 45.4272 71.071 45.1188 71.027C44.8427 70.979 44.5753 70.8899 44.3257 70.7626C44.0448 70.6663 43.7781 70.5329 43.5325 70.366L42.8716 69.8373C42.0785 69.0001 41.5938 67.8545 41.5938 66.7089C41.5938 65.5633 42.0785 64.4177 42.8716 63.5806L43.5325 63.0518C43.7969 62.8756 44.0613 62.7434 44.3257 62.6553C44.59 62.5231 44.8544 62.4349 45.1188 62.3909C45.6916 62.2587 46.3084 62.2587 46.8372 62.3909C47.1456 62.4349 47.41 62.5231 47.6743 62.6553C47.9387 62.7434 48.2031 62.8756 48.4674 63.0518L49.1284 63.5806C49.9215 64.4177 50.4062 65.5633 50.4062 66.7089C50.4062 67.8545 49.9215 69.0001 49.1284 69.8373Z" fill="#FF5722"/>
                        </svg>
                    </div>
                        <label className='titleModalCreate2'>Are you sure you want to delete this admin?</label>
                        <button className='btn-modaleCreate' onClick={confirmDelete}>Yes</button>
                        <button className='btn-modaleClose' onClick={() => setIsDeleteConfirmationOpen(false)}>No</button>
                    </div>
                )}
            </div>
        </main>
    );
};

export default CrudPage;
