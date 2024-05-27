import React, { useState, useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';
import Footer from '@/Pages/PageClient/Footer';
import Swal from 'sweetalert2';
import Nnavbar from '@/Layouts/Nnavbar';

function AjouterReserv({ typeChambres, defaultUserId }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    date_debut: '',
    date_fin: '',
    statu: '',
    date_reservation: '',
    nbr_personne: '',
    nbr_children: '',
    nbr_nuit: '',
    type_chambre_id: '',
    id_user: defaultUserId,
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
        let chambreInfo = `
          <p><strong>Numéro de chambre :</strong> ${response.data.chambre_numero}</p>
          <p><strong>Description :</strong> ${response.data.description}</p>
          <p><strong>Prix total :</strong> ${response.data.prix_total} DH</p>
        `;
        Swal.fire({
          icon: 'success',
          title: 'Réservation réussie',
          html: `
            <p>La réservation a été ajoutée avec succès.</p>
            ${chambreInfo}
          `
        }).then(() => {
          reset();
        });
      },
      onError: (errors) => {
        if (errors) {
          Swal.fire({
            icon: 'error',
            title: 'Erreur',
            text: errors.error,
          });
        }
      }
    });

  };

  return (
    <div>
      <div className="ml-2"> <Nnavbar /></div>

      <div className="container mx-auto mt-5">
        <div className="relative">
          <img 
            src="images/create1.jpg" 
            alt="Description de l'image" 
            className="w-full h-80 border-2 border-gray-300 rounded-lg shadow-lg object-cover" 
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
            <h1 className="text-white text-lg font-bold">
              Réserver votre chambre tous simplement en Cuzy suite !
            </h1>
          </div>
        </div>
        {typeChambres && typeChambres.length > 0 && (
          <div className="flex justify-center mt-8">
           
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg transform transition-transform duration-500 hover:scale-105">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              
                <div className="inputContainer">
                  <InputLabel htmlFor="date_debut" value="Date début" />
                  <TextInput
                    id="date_debut"
                    name="date_debut"
                    type="date"
                    value={data.date_debut}
                    onChange={handleOnChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    error={errors.date_debut}
                  />
                  <InputError message={errors.date_debut} />
                </div>
                <div className="inputContainer">
                  <InputLabel htmlFor="date_fin" value="Date fin" />
                  <TextInput
                    id="date_fin"
                    name="date_fin"
                    type="date"
                    value={data.date_fin}
                    onChange={handleOnChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    error={errors.date_fin}
                  />
                  <InputError message={errors.date_fin} />
                </div>
                <div className="inputContainer">
                  <InputLabel htmlFor="date_reservation" value="Date réservation" />
                  <TextInput
                    id="date_reservation"
                    name="date_reservation"
                    type="date"
                    value={data.date_reservation}
                    onChange={handleOnChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    error={errors.date_reservation}
                  />
                  <InputError message={errors.date_reservation} />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div className="inputContainer">
                  <InputLabel htmlFor="nbr_personne" value="Nombre de personnes" />
                  <TextInput
                    id="nbr_personne"
                    name="nbr_personne"
                    type="number"
                    value={data.nbr_personne}
                    onChange={handleOnChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    error={errors.nbr_personne}
                  />
                  <InputError message={errors.nbr_personne} />
                </div>
                <div className="inputContainer">
                  <InputLabel htmlFor="nbr_children" value="Nombre d'enfants" />
                  <TextInput
                    id="nbr_children"
                    name="nbr_children"
                    type="number"
                    value={data.nbr_children}
                    onChange={handleOnChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    error={errors.nbr_children}
                  />
                  <InputError message={errors.nbr_children} />
                </div>
                <div className="inputContainer">
                  <InputLabel htmlFor="nbr_nuit" value="Nombre de nuits" />
                  <TextInput
                    id="nbr_nuit"
                    name="nbr_nuit"
                    type="number"
                    value={data.nbr_nuit}
                    onChange={handleOnChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    error={errors.nbr_nuit}
                    disabled
                  />
                  <InputError message={errors.nbr_nuit} />
                </div>
                <div className="inputContainer">
                  <InputLabel htmlFor="type_chambre_id" value="Type de Chambre" />
                  <select
                    id="type_chambre_id"
                    name="type_chambre_id"
                    value={data.type_chambre_id}
                    onChange={handleOnChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
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
              </div>
              <div className="text-center mt-4">
                <button type="submit" disabled={processing} className="w-full bg-yellow-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-yellow-600 transform transition-transform duration-300 hover:scale-105">
                  Ajouter
                </button>
              </div>
            </form>
          </div>
        )}
        <div className="mt-4"><Footer /></div>
      </div>
    </div>
  );
}

export default AjouterReserv;
