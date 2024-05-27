import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './serv.css';
import { Inertia } from '@inertiajs/inertia';
import Layout from '@/Pages/MyPages/Liens';

const ServicesComponent = (props) => {
  const [editingService, setEditingService] = useState(null);
  const [editedValue, setEditedValue] = useState({ nom: '', description: '', image: null });
  const [imagePreview, setImagePreview] = useState(null);

  const handleDelete = id => {
    Swal.fire({
      title: "Êtes-vous sûr de vouloir supprimer ce Service  ?",
      text: "Cette action est irréversible !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimer !",
      cancelButtonText: "Annuler",
    }).then((result) => {
      if (result.isConfirmed) {
        Inertia.delete(`services/${id}`).then(() => {
          Swal.fire({
            icon: "success",
            title: "Le service a été supprimé avec succès",
            showConfirmButton: false,
            timer: 3000,
          });
        });
      }
    });
  };

  const handleEdit = service => {
    setEditingService(service.id);
    setEditedValue({ nom: service.nom, description: service.description, image: null });
    setImagePreview(`/images/${service.image}`);
  };

  const handleChange = (e) => {
    setEditedValue({ ...editedValue, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setEditedValue({ ...editedValue, image: file });

    // Generate a preview of the image
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSave = id => {
    const formData = new FormData();
    formData.append('_method', 'PUT');
    formData.append('nom', editedValue.nom);
    formData.append('description', editedValue.description);
    if (editedValue.image) {
      formData.append('image', editedValue.image);
    }

    Inertia.post(`services/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    }).then(() => {
      Swal.fire({
        icon: "success",
        title: "Le service a été modifié avec succès",
        showConfirmButton: false,
        timer: 3000,
      });
      setEditingService(null);
    });
  };

  return (
    <div className='dd'>
      <Layout />
    
      <div className='services-container'>
       
        {props.services.map(service => (
          
          <div key={service.id} className="card">
            <img src={`/${service.image}`} alt={service.nom} className="service-image" />
            <div className="card-content">
              {editingService === service.id ? (
                <div className="edit-form">
                  <input 
                    type="text" 
                    name="nom" 
                    value={editedValue.nom} 
                    onChange={handleChange} 
                    className="input" 
                  />
                  <textarea 
                    name="description" 
                    value={editedValue.description} 
                    onChange={handleChange} 
                    className="textarea" 
                  />
                  <input 
                    type="file" 
                    name="image" 
                    onChange={handleImageChange} 
                    className="input-file" 
                  />
                  {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" />}
                  <button className="button save-button" onClick={() => handleSave(service.id)}>
                    Save
                  </button>
                </div>
              ) : (
                <div>
                  <p className='nom'>{service.nom}</p>
                  <p className='description'>{service.description}</p>
                  <button className="button edit-button" onClick={() => handleEdit(service)}>
                    Edit
                  </button>
                  <button className="button delete-button" onClick={() => handleDelete(service.id)}>
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesComponent;
