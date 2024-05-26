import React from 'react';
import { FaDollarSign, FaFileAlt, FaImage, FaBed, FaHotel } from 'react-icons/fa';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { useForm } from '@inertiajs/react';

function AjouterTypeChambre() {
  const { data, setData, post, processing, errors, reset } = useForm({
    prix_par_nuit: '',
    description: '',
    typeChambre: '',
    image1: null,
    image2: null,
    image3: null,
    image4: null,
    id_chambre: '',
  });

  const handleOnChange = (event) => {
    const { name, value, type, checked, files } = event.target;
    if (type === 'file') {
      setData(name, files[0]);
    } else {
      setData(name, type === 'checkbox' ? checked : value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!data.prix_par_nuit.trim() || !data.description.trim() || !data.typeChambre.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Champs obligatoires',
        text: 'Veuillez remplir tous les champs obligatoires.',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
      });
      return;
    }
 if (!data.prix_par_nuit.trim() || !data.description.trim() || !data.typeChambre.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Champs obligatoires',
        text: 'Veuillez remplir tous les champs obligatoires.',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
      });
      return;
    }
    if (!data.image1 || !data.image2 || !data.image3 || !data.image4) {
      Swal.fire({
        icon: 'error',
        title: 'Champs obligatoires',
        text: 'Veuillez télécharger toutes les images.',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
      });
      return;
    }
     if (!data.prix_par_nuit.trim() || !data.description.trim() || !data.typeChambre.trim()) {
      Swal.fire({
        icon: 'error',
        title: 'Champs obligatoires',
        text: 'Veuillez remplir tous les champs obligatoires.',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
      });
      return;
    }
    if (!data.image1 || !data.image2 || !data.image3 || !data.image4) {
      Swal.fire({
        icon: 'error',
        title: 'Champs obligatoires',
        text: 'Veuillez télécharger toutes les images.',
        confirmButtonColor: '#3085d6',
        confirmButtonText: 'OK',
      });
      return;
    }
    post(route('typechambres.store'), {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-blue-50 rounded-lg shadow-lg mt-10">
      <h2 className="text-3xl font-bold mb-6 text-center flex items-center justify-center text-blue-700">
        <FaBed className="mr-2" /> Ajouter une chambre
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white p-6 rounded-lg shadow-md" encType="multipart/form-data">
        <div className="mb-4">
          <InputLabel htmlFor="prix_par_nuit" value="Prix par nuit" />
          <div className="relative">
            <FaDollarSign className="absolute left-3 top-3 text-gray-400" />
            <TextInput
              id="prix_par_nuit"
              name="prix_par_nuit"
              type="text"
              value={data.prix_par_nuit}
              onChange={handleOnChange}
              error={errors.prix_par_nuit}
              className="pl-10 bg-gray-100 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>

        <div className="mb-4">
          <InputLabel htmlFor="description" value="Description" />
          <div className="relative">
            <FaFileAlt className="absolute left-3 top-3 text-gray-400" />
            <textarea
              id="description"
              name="description"
              value={data.description}
              onChange={handleOnChange}
              className="mt-1 block w-full pl-10 p-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <InputError message={errors.description} className="mt-2 text-red-500" />
          </div>
        </div>

        <div className="mb-4">
          <InputLabel htmlFor="typeChambre" value="Type de chambre" />
          <div className="relative">
            <FaHotel className="absolute left-3 top-3 text-gray-400" />
            <select
              id="typeChambre"
              name="typeChambre"
              value={data.typeChambre}
              onChange={handleOnChange}
              className="mt-1 block w-full pl-10 p-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">Sélectionner un type</option>
              <option value="Chambre standard">Chambre standard</option>
              <option value="Chambre double">Chambre double</option>
              <option value="Chambre twin">Chambre twin</option>
              <option value="Suite">Suite</option>
              <option value="Chambre familiale">Chambre familiale</option>
              <option value="Chambre avec vue">Chambre avec vue</option>
              <option value="Chambre de luxe">Chambre de luxe</option>
              <option value="Chambre exécutive">Chambre exécutive</option>
            </select>
            <InputError message={errors.typeChambre} className="mt-2 text-red-500" />
          </div>
        </div>

        {['image1', 'image2', 'image3', 'image4'].map((image, index) => (
          <div className="mb-4" key={index}>
            <InputLabel htmlFor={image} value={`Image ${index + 1}`} />
            <div className="relative">
              <FaImage className="absolute left-3 top-3 text-gray-400" />
              <input
                type="file"
                id={image}
                name={image}
                onChange={handleOnChange}
                className="mt-1 block w-full pl-10 p-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              <InputError message={errors[image]} className="mt-2 text-red-500" />
            </div>
          </div>
        ))}

        <div className="flex items-center justify-end mt-4">
          <button
            type="submit"
            className="ml-4 bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:bg-blue-700"
            disabled={processing}
          >
            {processing ? 'En cours...' : 'Ajouter'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default AjouterTypeChambre;
