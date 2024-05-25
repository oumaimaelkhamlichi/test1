import React, { useState, useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm, usePage } from '@inertiajs/react';
import Swal from 'sweetalert2';
import Layout from '@/Pages/MyPages/Liens';
// import '../../../../css/formReserv.css';

function AjouterReserv(props) {
  const [currentPage, setCurrentPage] = useState(0);
  const { data, setData, post, processing, errors, reset } = useForm({
    date_debut: '',
    date_fin: '',
    statu: '',
    date_reservation: '',
    nbr_personne: '',
    nbr_children: '',
    nbr_nuit: '',
    id_chambre: '',
    type_chambre_id: '',
    id_user: props.defaultUserId,
  });

  useEffect(() => {
    if (data.date_debut && data.date_fin) {
      const date1 = new Date(data.date_debut);
      const date2 = new Date(data.date_fin);
      const timeDiff = date2 - date1;
      const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      setData({ ...data, nbr_nuit: dayDiff });
    }
  }, [data.date_debut, data.date_fin]);

  const handleOnChange = (event) => {
    setData({
      ...data,
      [event.target.name]:
        event.target.type === 'checkbox' ? event.target.checked : event.target.value,
    });
  };

  const handleChangeNumero = (event) => {
    const chambre = props.chambres.find((chambre) => chambre.numero === event.target.value);
    if (chambre) {
        setData({
            ...data,
            id_chambre: chambre.id,
            type_chambre_id: chambre.type_chambre_id
        });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    post(route('reservation.store'), {
      onSuccess: () => {
        reset();
        Swal.fire({
          icon: 'success',
          title: 'Réservation ajoutée avec succès',
          showConfirmButton: false,
          timer: 3000,
        });
      },
      onError: (errors) => {
        if (errors.id_chambre) {
          Swal.fire({
            icon: 'error',
            title: 'Erreur',
            text: errors.id_chambre,
          });
        }
      },
    });
  };

  const nextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const prevPage = () => setCurrentPage((prevPage) => prevPage - 1);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <Layout />
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg mt-8"
        encType="multipart/form-data"
      >
        <h1 className="text-3xl font-bold mb-6 text-gray-700">Formulaire de Réservation</h1>
        {currentPage === 0 && (
          <>
            <div className="mb-6">
              <InputLabel htmlFor="date_debut" value="Date de début" />
              <TextInput
                id="date_debut"
                name="date_debut"
                type="date"
                value={data.date_debut}
                onChange={handleOnChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.date_debut && <InputError message={errors.date_debut} className="mt-2 text-red-500" />}
            </div>
            <div className="mb-6">
              <InputLabel htmlFor="date_fin" value="Date de fin" />
              <TextInput
                id="date_fin"
                name="date_fin"
                type="date"
                value={data.date_fin}
                onChange={handleOnChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.date_fin && <InputError message={errors.date_fin} className="mt-2 text-red-500" />}
            </div>
            <div className="mb-6">
              <InputLabel htmlFor="statu" value="Statut" />
              <select
                id="statu"
                name="statu"
                value={data.statu}
                onChange={handleOnChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="">--- Choisissez ---</option>
                <option value="valider">Valider</option>
                <option value="annuler">Annuler</option>
              </select>
              {errors.statu && <InputError message={errors.statu} className="mt-2 text-red-500" />}
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-700 transition duration-200"
                onClick={nextPage}
              >
                Suivant
              </button>
            </div>
          </>
        )}

        {currentPage === 1 && (
          <>
            <div className="mb-6">
              <InputLabel htmlFor="date_reservation" value="Date de réservation" />
              <TextInput
                id="date_reservation"
                name="date_reservation"
                type="date"
                value={data.date_reservation}
                onChange={handleOnChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.date_reservation && <InputError message={errors.date_reservation} className="mt-2 text-red-500" />}
            </div>
            <div className="mb-6">
              <InputLabel htmlFor="nbr_personne" value="Nombre de personnes" />
              <TextInput
                id="nbr_personne"
                name="nbr_personne"
                type="number"
                value={data.nbr_personne}
                onChange={handleOnChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.nbr_personne && <InputError message={errors.nbr_personne} className="mt-2 text-red-500" />}
            </div>
            <div className="mb-6">
              <InputLabel htmlFor="nbr_children" value="Nombre d'enfants" />
              <TextInput
                id="nbr_children"
                name="nbr_children"
                type="number"
                value={data.nbr_children}
                onChange={handleOnChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
              {errors.nbr_children && <InputError message={errors.nbr_children} className="mt-2 text-red-500" />}
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-700 transition duration-200"
                onClick={prevPage}
              >
                Précédent
              </button>
              <button
                type="button"
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-700 transition duration-200"
                onClick={nextPage}
              >
                Suivant
              </button>
            </div>
          </>
        )}

        {currentPage === 2 && (
          <>
            <div className="mb-6">
              <InputLabel htmlFor="nbr_nuit" value="Nombre de nuits" />
              <TextInput
                id="nbr_nuit"
                name="nbr_nuit"
                type="number"
                value={data.nbr_nuit}
                onChange={handleOnChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                disabled
              />
              {errors.nbr_nuit && <InputError message={errors.nbr_nuit} className="mt-2 text-red-500" />}
            </div>
            <div className="hidden">
              <InputLabel htmlFor="id_chambre" value="ID de la chambre" />
              <TextInput
                id="id_chambre"
                name="id_chambre"
                type="text"
                value={data.id_chambre}
                onChange={handleOnChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-6">
              <InputLabel htmlFor="numero" value="Numéro de la chambre" />
              <select
                id="numero"
                name="numero"
                onChange={handleChangeNumero}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              >
                <option value="">--- Choisir ---</option>
                {props.chambres.map((chambre) => (
                  <option key={chambre.numero} value={chambre.numero}>{chambre.numero}</option>
                ))}
              </select>
              {errors.numero && <InputError message={errors.numero} className="mt-2 text-red-500" />}
            </div>
            <div className="flex justify-between">
              <button
                type="button"
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500 focus:outline-none focus:bg-gray-700 transition duration-200"
                onClick={prevPage}
              >
                Précédent
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 focus:outline-none focus:bg-green-700 transition duration-200"
                disabled={processing}
              >
                {processing ? 'En cours...' : 'Ajouter'}
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}

export default AjouterReserv;
