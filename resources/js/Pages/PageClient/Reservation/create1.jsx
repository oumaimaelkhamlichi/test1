import React, { useState, useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';
// import './custom.css'; // Assurez-vous de lier votre fichier CSS personnalisé
// import Header from '@/Layouts/header';

function AjouterReserv({ typeChambres }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    date_debut: '',
    date_fin: '',
    statu: '',
    date_reservation: '',
    nbr_personne: '',
    nbr_children: '',
    nbr_nuit: '',
    type_chambre_id: '',
    id_user: '',
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setData(name, value);
  };

  useEffect(() => {
    if (data.date_debut && data.date_fin) {
      const date1 = new Date(data.date_debut);
      const date2 = new Date(data.date_fin);
      const timeDiff = date2 - date1;
      const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      setData('nbr_nuit', dayDiff);
    }
  }, [data.date_debut, data.date_fin]);

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    post(route('reservation.store1'), {
      onSuccess: (response) => {
        Swal.fire({
          icon: 'success',
          title: 'Réservation réussie',
          html: `
            <p>La réservation a été ajoutée avec succès.</p>
            <p><strong>Numéro de chambre :</strong> ${response.props.chambre_numero}</p>
            <p><strong>Description :</strong> ${response.props.description}</p>
            <p><strong>Prix total :</strong> ${response.props.prix_total} DH</p>
          `
        }).then(() => {
          reset();
        });
      },
      onError: (error) => {
        const errorMessage = error?.response?.data?.error || 'Une erreur est survenue.';
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'error dans la reservation '
        });
      }
    });
  };

  return (
    <div className="container mt-5">
     
      <div className="relative">
      <img 
        src="images/create1.jpg" 
        alt="Description de l'image" 
        className="w-full h-80 border-2 border-gray-300 rounded-lg shadow-lg object-cover" 
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
        <h1 className="text-white text-lg font-bold">
          Réserver votre chambre tous simplement  en Cuzy suite ! .
        </h1>
      </div>
    </div>
      {/* <Header/> */}
      {typeChambres && typeChambres.length > 0 && (
        <form onSubmit={handleSubmit} className="card p-4 shadow">
          <div className="inputColumn row">
            <div className="inputContainer col-md-6">
              <InputLabel htmlFor="date_debut" value="Date début" />
              <TextInput
                id="date_debut"
                name="date_debut"
                type="date"
                value={data.date_debut}
                onChange={handleOnChange}
                className="form-control"
                error={errors.date_debut}
              />
              <InputError message={errors.date_debut} />
            </div>
            <div className="inputContainer col-md-6">
              <InputLabel htmlFor="date_fin" value="Date fin" />
              <TextInput
                id="date_fin"
                name="date_fin"
                type="date"
                value={data.date_fin}
                onChange={handleOnChange}
                className="form-control"
                error={errors.date_fin}
              />
              <InputError message={errors.date_fin} />
            </div>
            <div className="inputContainer col-md-6">
              <InputLabel htmlFor="date_reservation" value="Date réservation" />
              <TextInput
                id="date_reservation"
                name="date_reservation"
                type="date"
                value={data.date_reservation}
                onChange={handleOnChange}
                className="form-control"
                error={errors.date_reservation}
              />
              <InputError message={errors.date_reservation} />
            </div>
          </div>
          <div className="inputColumn row">
            <div className="inputContainer col-md-6">
              <InputLabel htmlFor="nbr_personne" value="Nombre de personnes" />
              <TextInput
                id="nbr_personne"
                name="nbr_personne"
                type="number"
                value={data.nbr_personne}
                onChange={handleOnChange}
                className="form-control"
                error={errors.nbr_personne}
              />
              <InputError message={errors.nbr_personne} />
            </div>
            <div className="inputContainer col-md-6">
              <InputLabel htmlFor="nbr_children" value="Nombre d'enfants" />
              <TextInput
                id="nbr_children"
                name="nbr_children"
                type="number"
                value={data.nbr_children}
                onChange={handleOnChange}
                className="form-control"
                error={errors.nbr_children}
              />
              <InputError message={errors.nbr_children} />
            </div>
            <div className="inputContainer col-md-6 disabled">
              <InputLabel htmlFor="nbr_nuit" value="Nombre de nuits"  />
              <TextInput
                id="nbr_nuit"
                name="nbr_nuit"
                type="number"
                value={data.nbr_nuit}
                onChange={handleOnChange}
                className="form-control"
                error={errors.nbr_nuit}
              />
              <InputError message={errors.nbr_nuit} />
            </div>
            <div className="inputContainer col-md-6">
              <InputLabel htmlFor="type_chambre_id" value="Type de Chambre" />
              <select
                id="type_chambre_id"
                name="type_chambre_id"
                value={data.type_chambre_id}
                onChange={handleOnChange}
                className="form-control"
              >
                <option value="">Sélectionnez un type de chambre</option>
                {typeChambres.map((typeChambre) => (
                  <option key={typeChambre.id} value={typeChambre.id}>
                    {typeChambre.typeChambre}
                  </option>
                ))}
              </select>
              <InputError message={errors.type_chambre_id} />
            </div>
            <div className="inputContainer col-md-6">
              <InputLabel htmlFor="id_user" value="ID Utilisateur" />
              <TextInput
                id="id_user"
                name="id_user"
                type="text"
                value={data.id_user}
                onChange={handleOnChange}
                className="form-control"
                error={errors.id_user}
              />
              <InputError message={errors.id_user} />
            </div>
          </div>
          <div className="text-center mt-4">
            <button type="submit" disabled={processing} className="btn btn-primary">
              Ajouter
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

export default AjouterReserv;


