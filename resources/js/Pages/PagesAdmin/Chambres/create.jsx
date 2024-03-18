import React, { useState } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';



function AjouterChambre() {
  const { data, setData, post, processing, errors, reset } = useForm({
    numero: '',
    nom_chambre: '',
    numero_telephone: '',
    prix_chambre: '',
    nbr_per:'',
    description_chambre: '',
    disponible: '',
    typeChambre: '',
    image1: '',
    image2: '',
    image3: '',
    image4: '',
  });

  const handleOnChange = (event) => {
    setData({
      ...data,
      [event.target.name]:
        event.target.type === 'checkbox'
          ? event.target.checked
          : event.target.value,
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setData({
      ...data,
      [event.target.name]: file,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    post(route('chambres.store'), {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <div>
      <Head>
        <title>Ajouter une chambre</title>
      </Head>
      <form onSubmit={handleSubmit} className="form_main mt-10 ml-40" encType="multipart/form-data">
      <h2 className="heading">Ajouter une chambre</h2>
        <div className="mb-4">
          <InputLabel htmlFor="numero" value="Numéro" />
          <TextInput
            id="numero"
            name="numero"
            type="text"
            value={data.numero}
            onChange={handleOnChange}
            error={errors.numero}
          />
        </div>
        <div className="mb-4">
          <InputLabel htmlFor="nom_chambre" value="Nom de la chambre" />
          <TextInput
            id="nom_chambre"
            name="nom_chambre"
            type="text"
            value={data.nom_chambre}
            onChange={handleOnChange}
            error={errors.nom_chambre}
          />
        </div>
        <div className="mb-4">
          <InputLabel htmlFor="nbr_per" value="nombre de personnes" />
          <TextInput
            id="nbr_per"
            name="nbr_per"
            type="text"
            value={data.nbr_per}
            onChange={handleOnChange}
            error={errors.nbr_per}
          />
        </div>
      
        <div className="mb-4">
          <InputLabel htmlFor="prix_chambre" value="Prix de la chambre" />
          <TextInput
            id="prix_chambre"
            name="prix_chambre"
            type="text"
            value={data.prix_chambre}
            onChange={handleOnChange}
            error={errors.prix_chambre}
          />
        </div>
        <div className="mb-4">
          <InputLabel htmlFor="description_chambre" value="Description de la chambre" />
          <textarea
            id="description_chambre"
            name="description_chambre"
            type="texteteria"
            value={data.description_chambre}
            onChange={handleOnChange}
            error={errors.description_chambre}
          />
        </div>
        <div className="mb-4">
          <InputLabel htmlFor="disponible" value="Disponible" />
          <input
            id="disponible"
            name="disponible"
            type="checkbox"
            checked={data.disponible}
            onChange={handleOnChange}
          />
          <InputError message={errors.disponible} className="mt-2 text-red-500" />
        </div>
        <div className="mb-4">
          <InputLabel htmlFor="typeChambre" value="Type de chambre" />
          <select
            id="typeChambre"
            name="typeChambre"
            value={data.typeChambre}
            onChange={handleOnChange}
          >
           <option value="">---- Choisissez -----</option>
        <option value="standard">Standard</option>
        <option value="avecVue">Avec vue</option>
        <option value="executive">Executive</option>
        <option value="familiale">Familiale</option>
        <option value="luxe">Luxe</option>
        <option value="twin">Twin</option>
        <option value="double">Double</option>
          </select>
          <InputError message={errors.typeChambre} className="mt-2 text-red-500" />
        </div>
        <div className="mb-4">
          <InputLabel htmlFor="image1" value="Image 1" />
          <input
            type="file"
            id="image1"
            name="image1"
            onChange={handleImageChange}
          />
          <InputError message={errors.image1} className="mt-2 text-red-500" />
        </div>
        <div className="mb-4">
          <img src="images\upload-svgrepo-com.svg" alt="" />
          <InputLabel htmlFor="image2" value="Image 2" />
          <input
            type="file"
            id="image2"
            name="image2"
            onChange={handleImageChange}
          />
          <InputError message={errors.image2} className="mt-2 text-red-500" />
        </div>
        <div className="mb-4">
          <InputLabel htmlFor="image3" value="Image 3" />
          <input
            type="file"
            id="image3"
            name="image3"
            onChange={handleImageChange}
          />
          <InputError message={errors.image3} className="mt-2 text-red-500" />
        </div>
        <div className="mb-4">
          <InputLabel htmlFor="image4" value="Image 4" />
          <input
            type="file"
            id="image4"
            name="image4"
            onChange={handleImageChange}
          />
          <InputError message={errors.image4} className="mt-2 text-red-500" />
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

export default AjouterChambre;