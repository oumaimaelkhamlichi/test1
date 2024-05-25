import React from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
// import Navbar from '@/Pages/MyPages/Navabar';
import Layout from '@/Pages/MyPages/Liens';

function AjouterService() {
  const { data, setData, post, processing, errors, reset } = useForm({
    nom: '',
    description: '',
    image1: '',
  });

  const handleOnChange = (event) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setData({
      ...data,
      [event.target.name]: file,
    });
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   post(route('service.store'), {
  //     onSuccess: () => {
  //       reset();
  //     },
  //   });
  // };
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('nom', data.nom);
    formData.append('description', data.description);
    formData.append('image', data.image);

    post(route('services.store'), {
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
   
      <div>
         <Layout/>
        <Head>
          <title>Ajouter une service </title>
        </Head>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">Ajouter un service</h2>
          <div className="mb-6">
            <InputLabel htmlFor="nom" value="Nom" />
            <TextInput
              id="nom"
              name="nom"
              type="text"
              value={data.nom}
              onChange={handleOnChange}
              error={errors.nom}
              placeholder="Nom du service"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <InputError message={errors.nom} className="mt-2 text-red-500" />
          </div>
          <div className="mb-6">
            <InputLabel htmlFor="description" value="Description" />
            <TextInput
              id="description"
              name="description"
              type="text"
              value={data.description}
              onChange={handleOnChange}
              error={errors.description}
              placeholder="Description du service"
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <InputError message={errors.description} className="mt-2 text-red-500" />
          </div>
          <div className="mb-6">
            <InputLabel htmlFor="image" value="Image" />
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleImageChange}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
            <InputError message={errors.image} className="mt-2 text-red-500" />
          </div>
          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-700"
              disabled={processing}
            >
              {processing ? 'En cours...' : 'Ajouter'}
            </button>
          </div>
        </form>
      </div>
   
  );
}

export default AjouterService;
