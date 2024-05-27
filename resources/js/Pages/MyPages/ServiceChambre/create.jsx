import React, { useState } from 'react';
// import { useForm } from '@inertiajs/react';
import { useForm } from '@inertiajs/inertia-react';
import Layout from '@/Pages/MyPages/Liens';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import Swal from 'sweetalert2';

export default function AjouterService({ typechambres }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3; // Nombre total de pages du formulaire
  const { data, setData, post, processing, errors, reset } = useForm({
    type_chambre_id: '',
    // numero: '',
    vuePlage: '',
    wifi: '',
    nbrlit: '',
    ch_Rideaux: false,
    ch_climat: false,
    ch_menage: false,
    ch_bureaux: false,
    ch_armoire: false,
    ch_poubelle: false,
    ch_cuisine: false,
    nour_service: false,
    nour_eauMiniral: false,
    nour_ftour: false,
    nour_rda: false,
    nour_acha: false,
    bain_peignoire: false,
    bain_serviete: false,
    bain_douche: false,
    bain_articleToiette: false,
    bain_salleBainPrivee: false,
    bain_lavabo: false,
    telephone: false,
    tv: false,
  });

  const handleChangeNumero = (event) => {
    const typechambre= typechambres.find((typechambre) => typechambre.typechambre === event.target.value);
    if (typechambre) {
      setData({
        ...data,
        type_chambre_id: typechambre.id,
        // numero: chambre.numero,
      });
    }
  };

  const handleOnChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    post(route('serchambre.store'), {
      data,
      onSuccess: () => {
        reset();
        Swal.fire({
          icon: 'success',
          title: 'Le service de cette chambre a été ajouté avec succès',
          showConfirmButton: false,
          timer: 3000,
        });
      },
    });
  };
 
  
  
  
  
  
  
  
  
  

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
    <Layout /> 

      <div className="max-w-md mx-auto mt-0">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Ajouter un service de chambre</h2>
          {currentPage === 1 && (
            <>
              <div className="mb-4">
                <InputLabel htmlFor="type_chambre_id" value="type_chambre_id" />
                <select name="type_chambre_id" id="type_chambre_id" onChange={handleOnChange} className="block w-full mt-1">
                  <option value="">---choisir---</option>
                  {typechambres.map((typechambre) => (
                    <option key={typechambre.id} value={typechambre.id}>{typechambre.id} (ID: {typechambre.typeChambre})</option>
                  ))}
                </select>
                <InputError message={errors.type_chambre_id} className="mt-2 text-red-500" />
              </div>
              <div className="mb-4">
                <InputLabel htmlFor="vuePlage" value="Vue sur la plage" />
                <TextInput
                  id="vuePlage"
                  name="vuePlage"
                  type="text"
                  value={data.vuePlage}
                  onChange={handleOnChange}
                  error={errors.vuePlage}
                />
              </div>
              <div className="mb-4">
                <InputLabel htmlFor="wifi" value="Wifi" />
                <TextInput
                  id="wifi"
                  name="wifi"
                  type="text"
                  value={data.wifi}
                  onChange={handleOnChange}
                  error={errors.wifi}
                />
              </div>
              <div className="mb-4">
                <InputLabel htmlFor="nbrlit" value="Nombre de lits" />
                <TextInput
                  id="nbrlit"
                  name="nbrlit"
                  type="text"
                  value={data.nbrlit}
                  onChange={handleOnChange}
                  error={errors.nbrlit}
                />
              </div>
              <div className="mb-4">
                <InputLabel htmlFor="ch_Rideaux" value="Rideaux" />
                <input
                  id="ch_Rideaux"
                  name="ch_Rideaux"
                  type="checkbox"
                  checked={data.ch_Rideaux}
                  onChange={handleOnChange}
                  className="mr-2 leading-tight"
                />
                <span className="text-sm">Rideaux</span>
                <InputError message={errors.ch_Rideaux} className="mt-2 text-red-500" />
              </div>
              <div className="mb-4">
                <InputLabel htmlFor="ch_climat" value="Climatisation" />
                <input
                  id="ch_climat"
                  name="ch_climat"
                  type="checkbox"
                  checked={data.ch_climat}
                  onChange={handleOnChange}
                  className="mr-2 leading-tight"
                />
                <span className="text-sm">Climatisation</span>
                <InputError message={errors.ch_climat} className="mt-2 text-red-500" />
              </div>
              <div className="mb-4">
                <InputLabel htmlFor="ch_menage" value="Service de ménage" />
                <input
                  id="ch_menage"
                  name="ch_menage"
                  type="checkbox"
                  checked={data.ch_menage}
                  onChange={handleOnChange}
                  className="mr-2 leading-tight"
                />
                <span className="text-sm">Service de ménage</span>
                <InputError message={errors.ch_menage} className="mt-2 text-red-500" />
              </div>
            </>
          )}

          {currentPage === 2 && (
            <>
              <div className="mb-4">
                <InputLabel htmlFor="ch_bureaux" value="Bureaux" />
                <input
                  id="ch_bureaux"
                  name="ch_bureaux"
                  type="checkbox"
                  checked={data.ch_bureaux}
                  onChange={handleOnChange}
                  className="mr-2 leading-tight"
                />
                <span className="text-sm">Bureaux</span>
                <InputError message={errors.ch_bureaux} className="mt-2 text-red-500" />
              </div>
              <div className="mb-4">
                <InputLabel htmlFor="ch_armoire" value="Armoire" />
                <input
                  id="ch_armoire"
                  name="ch_armoire"
                  type="checkbox"
                  checked={data.ch_armoire}
                  onChange={handleOnChange}
                  className="mr-2 leading-tight"
                />
                <span className="text-sm">Armoire</span>
                <InputError message={errors.ch_armoire} className="mt-2 text-red-500" />
              </div>
              <div className="mb-4">
                <InputLabel htmlFor="ch_poubelle" value="Poubelle" />
                <input
                  id="ch_poubelle"
                  name="ch_poubelle"
                  type="checkbox"
                  checked={data.ch_poubelle}
                  onChange={handleOnChange}
                  className="mr-2 leading-tight"
                />
                <span className="text-sm">Poubelle</span>
                <InputError message={errors.ch_poubelle} className="mt-2 text-red-500" />
              </div>
              <div className="mb-4">
                <InputLabel htmlFor="ch_cuisine" value="Cuisine" />
                <input
                  id="ch_cuisine"
                  name="ch_cuisine"
                  type="checkbox"
                  checked={data.ch_cuisine}
                  onChange={handleOnChange}
                  className="mr-2 leading-tight"
                />
                <span className="text-sm">Cuisine</span>
                <InputError message={errors.ch_cuisine} className="mt-2 text-red-500" />
              </div>
              <div className="mb-4">
                <InputLabel htmlFor="nour_service" value="Service de nourriture" />
                <input
                  id="nour_service"
                  name="nour_service"
                  type="checkbox"
                  checked={data.nour_service}
                  onChange={handleOnChange}
                  className="mr-2 leading-tight"
                />
                <span className="text-sm">Service de nourriture</span>
                <InputError message={errors.nour_service} className="mt-2 text-red-500" />
              </div>
              <div className="mb-4">
                <InputLabel htmlFor="nour_eauMiniral" value="Eau minérale" />
                <input
                  id="nour_eauMiniral"
                  name="nour_eauMiniral"
                  type="checkbox"
                  checked={data.nour_eauMiniral}
                  onChange={handleOnChange}
                  className="mr-2 leading-tight"
                />
                <span className="text-sm">Eau minérale</span>
                <InputError message={errors.nour_eauMiniral} className="mt-2 text-red-500" />
              </div>
              <div className="mb-4">
                <InputLabel htmlFor="nour_ftour" value="Ftour" />
                <input
                  id="nour_ftour"
                  name="nour_ftour"
                  type="checkbox"
                  checked={data.nour_ftour}
                  onChange={handleOnChange}
                  className="mr-2 leading-tight"
                />
                <span className="text-sm">Ftour</span>
                <InputError message={errors.nour_ftour} className="mt-2 text-red-500" />
              </div>
              <div className="mb-4">
                <InputLabel htmlFor="nour_rda" value="Rda" />
                <input
                  id="nour_rda"
                  name="nour_rda"
                  type="checkbox"
                  checked={data.nour_rda}
                  onChange={handleOnChange}
                  className="mr-2 leading-tight"
                />
                <span className="text-sm">Rda</span>
                <InputError message={errors.nour_rda} className="mt-2 text-red-500" />
              </div>
              <div className="mb-4">
                <InputLabel htmlFor="nour_acha" value="Acha" />
                <input
                  id="nour_acha"
                  name="nour_acha"
                  type="checkbox"
                  checked={data.nour_acha}
                  onChange={handleOnChange}
                  className="mr-2 leading-tight"
                />
                <span className="text-sm">Acha</span>
                <InputError message={errors.nour_acha} className="mt-2 text-red-500" />
              </div>
            </>
          )}

          {currentPage === 3 && (
            <>
              <div className="mb-4">
                <InputLabel htmlFor="bain_peignoire" value="Peignoire" />
                <input
                  id="bain_peignoire"
                  name="bain_peignoire"
                  type="checkbox"
                  checked={data.bain_peignoire}
                  onChange={handleOnChange}
                  className="mr-2 leading-tight"
                />
                <span className="text-sm">Peignoire</span>
                <InputError message={errors.bain_peignoire} className="mt-2 text-red-500" />
              </div>
              <div className="mb-4">
                <InputLabel htmlFor="bain_serviete" value="Serviette" />
                <input
                  id="bain_serviete"
                  name="bain_serviete"
                  type="checkbox"
                  checked={data.bain_serviete}
                  onChange={handleOnChange}
                  className="mr-2 leading-tight"
                />
                <span className="text-sm">Serviette</span>
                <InputError message={errors.bain_serviete} className="mt-2 text-red-500" />
              </div>
              <div className="mb-4">
                <InputLabel htmlFor="bain_douche" value="Douche" />
                <input
                  id="bain_douche"
                  name="bain_douche"
                  type="checkbox"
                  checked={data.bain_douche}
                  onChange={handleOnChange}
                  className="mr-2 leading-tight"
                />
                <span className="text-sm">Douche</span>
                <InputError message={errors.bain_douche} className="mt-2 text-red-500" />
              </div>
              <div className="mb-4">
                <InputLabel htmlFor="bain_articleToiette" value="Articles de toilette" />
                <input
                  id="bain_articleToiette"
                  name="bain_articleToiette"
                  type="checkbox"
                  checked={data.bain_articleToiette}
                  onChange={handleOnChange}
                  className="mr-2 leading-tight"
                />
                <span className="text-sm">Articles de toilette</span>
                <InputError message={errors.bain_articleToiette} className="mt-2 text-red-500" />
              </div>
              <div className="mb-4">
                <InputLabel htmlFor="bain_salleBainPrivee" value="Salle de bain privée" />
                <input
                  id="bain_salleBainPrivee"
                  name="bain_salleBainPrivee"
                  type="checkbox"
                  checked={data.bain_salleBainPrivee}
                  onChange={handleOnChange}
                  className="mr-2 leading-tight"
                />
                <span className="text-sm">Salle de bain privée</span>
                <InputError message={errors.bain_salleBainPrivee} className="mt-2 text-red-500" />
              </div>
              <div className="mb-4">
                <InputLabel htmlFor="bain_lavabo" value="Lavabo" />
                <input
                  id="bain_lavabo"
                  name="bain_lavabo"
                  type="checkbox"
                  checked={data.bain_lavabo}
                  onChange={handleOnChange}
                  className="mr-2 leading-tight"
                />
                <span className="text-sm">Lavabo</span>
                <InputError message={errors.bain_lavabo} className="mt-2 text-red-500" />
              </div>
              <div className="mb-4">
                <InputLabel htmlFor="telephone" value="Téléphone" />
                <input
                  id="telephone"
                  name="telephone"
                  type="checkbox"
                  checked={data.telephone}
                  onChange={handleOnChange}
                  className="mr-2 leading-tight"
                />
                <span className="text-sm">Téléphone</span>
                <InputError message={errors.telephone} className="mt-2 text-red-500" />
              </div>
              <div className="mb-4">
                <InputLabel htmlFor="tv" value="Télévision" />
                <input
                  id="tv"
                  name="tv"
                  type="checkbox"
                  checked={data.tv}
                  onChange={handleOnChange}
                  className="mr-2 leading-tight"
                />
                <span className="text-sm">Télévision</span>
                <InputError message={errors.tv} className="mt-2 text-red-500" />
              </div>
            </>
          )}

          <div className="flex items-center justify-between">
            {currentPage > 1 && (
              <button
                type="button"
                onClick={prevPage}
                className="bg-gray-200 text-gray-800 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Précédent
              </button>
            )}
            {currentPage < totalPages && (
              <button
                type="button"
                onClick={nextPage}
                className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Suivant
              </button>
            )}
            {currentPage === totalPages && (
              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                disabled={processing}
              >
                Ajouter
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}