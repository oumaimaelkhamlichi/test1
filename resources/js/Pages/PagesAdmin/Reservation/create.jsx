import React, { useState } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import '../../../../css/formReserv.css';

function AjouterReserv() {
  const { data, setData, post, processing, errors, reset } = useForm({
    date_debut: '',
    date_fin: '',
    statu: '',
    etoile: '',
    date_reservation: '',
    nbr_personne: '',
    nbr_children: '',
    nbr_nuit: '',
    numero_chambre: '',
    id_chambre: '',
    id_user: '',
  });

  // const handleOnChange = (event) => {
  //   setData({
  //     ...data,
  //     [event.target.name]:
  //       event.target.type === 'checkbox'
  //         ? event.target.checked
  //         : event.target.value,
  //   });
  // };
  const handleOnChange = (event, nextRef) => {
    if (event.target.value.length >= event.target.maxLength) {
      nextRef.current.focus();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    post(route('reservation.store'), {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='ml-40 mt-20' encType="multipart/form-data">
        <p>Formaulaire de reservation</p>
        <div className="inputRow">
          <div className="inputContainer">
            <InputLabel htmlFor="date_debut" value="Date de début" />
            <TextInput
              id="date_debut"
              name="date_debut"
              type="text"
              value={data.date_debut}
              onChange={handleOnChange}
              error={errors.date_debut}
              maxLength={10}
              className="textInput"
            />
          </div>
          <div className="inputContainer">
            <InputLabel htmlFor="date_fin" value="Date de fin" />
            <TextInput
              id="date_fin"
              name="date_fin"
              type="text"
              maxLength={10}
              value={data.date_fin}
              onChange={handleOnChange}
              error={errors.date_fin}
              className="textInput"
            />
          </div>
        </div>
        <div className="inputRow">
          <div className="inputContainer">
            <InputLabel htmlFor="statu" value="Statut" />
            <TextInput
              id="statu"
              name="statu"
              type="text"
              maxLength={10}
              value={data.statu}
              onChange={handleOnChange}
              error={errors.statu}
              className="textInput"
            />
          </div>
          <div className="inputContainer">
            <InputLabel htmlFor="etoile" value="Étoile" />
            <TextInput
              id="etoile"
              name="etoile"
              type="text"
              value={data.etoile}
              onChange={handleOnChange}
              error={errors.etoile}
              className="textInput"
              maxLength={10}
            />
          </div>
        </div>
        <div className="inputRow">
          <div className="inputContainer">
            <InputLabel htmlFor="date_reservation" value="Date de réservation" />
            <TextInput
              id="date_reservation"
              name="date_reservation"
              type="text"
              maxLength={10}
              value={data.date_reservation}
              onChange={handleOnChange}
              error={errors.date_reservation}
              className="textInput"
            />
          </div>
          <div className="inputContainer">
            <InputLabel htmlFor="nbr_personne" value="Nombre de personnes" />
            <TextInput
              id="nbr_personne"
              maxLength={10}
              name="nbr_personne"
              type="text"
              value={data.nbr_personne}
              onChange={handleOnChange}
              error={errors.nbr_personne}
              className="textInput"
            />
          </div>
        </div>
        <div className="inputRow">
          <div className="inputContainer">
            <InputLabel htmlFor="nbr_children" value="Nombre d'enfants" />
            <TextInput
              id="nbr_children"
              name="nbr_children"
              type="text"
              maxLength={10}
              value={data.nbr_children}
              onChange={handleOnChange}
              error={errors.nbr_children}
              className="textInput"
            />
          </div>
          <div className="inputContainer">
            <InputLabel htmlFor="nbr_nuit" value="Nombre de nuits" />
            <TextInput
              id="nbr_nuit"
              name="nbr_nuit"
              type="text"
              maxLength={10}
              value={data.nbr_nuit}
              onChange={handleOnChange}
              error={errors.nbr_nuit}
              className="textInput"
            />
          </div>
        </div>
        <div className="inputRow">
          <div className="inputContainer">
            <InputLabel htmlFor="numero_chambre" value="Numéro de chambre" />
          < TextInput
              id="numero_chambre"
              name="numero_chambre"
              maxLength={10}
              type="text"
              value={data.numero_chambre}
              onChange={handleOnChange}
              error={errors.numero_chambre}
              className="textInput"
            />
          </div>
          <div className="inputContainer">
            <InputLabel htmlFor="id_chambre" value="ID de la chambre" />
            <TextInput
              id="id_chambre"
              name="id_chambre"
              maxLength={10}
              type="text"
              value={data.id_chambre}
              onChange={handleOnChange}
              error={errors.id_chambre}
              className="textInput"
            />
          </div>
        </div>
        <div className="inputRow">
          <div className="inputContainer">
            <InputLabel htmlFor="id_user" value="ID de l'utilisateur" />
            <TextInput
              id="id_user"
              maxLength={10}
              name="id_user"
              type="text"
              value={data.id_user}
              onChange={handleOnChange}
              error={errors.id_user}
              className="textInput"
            />
          </div>
        </div>
        <div className="flex items-center justify-end mt-6">
          <button
            type="submit"
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500"
            disabled={processing}
          >
            {processing ? 'En cours...' : 'Ajouter'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AjouterReserv;