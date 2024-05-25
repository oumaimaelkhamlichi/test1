// import React from 'react';
// import { useForm } from '@inertiajs/react';
// import Layout from '@/Pages/MyPages/Liens';
// import InputError from '@/Components/InputError';
// import InputLabel from '@/Components/InputLabel';
// import TextInput from '@/Components/TextInput';

// function AjouterChambre() {
//   const { data, setData, post, processing, errors, reset } = useForm({
//     numero: '',
//     nom_chambre: '',
//     numero_telephone: '',
//     prix_chambre: '',
//     nbr_per: '',
//     description_chambre: '',
//     disponible: '',
//     typeChambre: '',
//     image1: '',
//     image2: '',
//     image3: '',
//     image4: '',
//   });

//   const handleOnChange = (event) => {
//     setData({
//       ...data,
//       [event.target.name]:
//         event.target.type === 'checkbox' ? event.target.checked : event.target.value,
//     });
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     setData({
//       ...data,
//       [event.target.name]: file,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     post(route('chambres.store'), {
//       onSuccess: () => {
//         reset();
//       },
//     });
//   };

//   return (
   
//    <div>
//   <Layout/>
//     <div className="max-w-md mx-auto mt-0">
         
//         <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//           <h2 className="text-2xl font-bold mb-8 text-center">Ajouter une chambre</h2>
//           <div className='parent1 d-flex'>
//   <div className="mb-4" style={{ flex: 1 }}>
//     <InputLabel htmlFor="numero" value="Numéro" />
//     <TextInput
//       id="numero"
//       name="numero"
//       type="text"
//       value={data.numero}
//       onChange={handleOnChange}
//       error={errors.numero}
//     />
//       {errors.numero && <p style={{ color: 'red' }}>{errors.numero}</p>}
//   </div>
//   <div className="mb-4" style={{ flex: 1 }}>
//     <InputLabel htmlFor="nom_chambre" value="Nom de la chambre" />
//     <TextInput
//       id="nom_chambre"
//       name="nom_chambre"
//       type="text"
//       value={data.nom_chambre}
//       onChange={handleOnChange}
//       error={errors.nom_chambre}
//     />
//         {errors.nom_chambre && <p style={{ color: 'red' }}>{errors.nom_chambre}</p>}
//   </div>
// </div>


          
//           <div className="mb-4">
//             <InputLabel htmlFor="nbr_per" value="Nombre de personnes" />
//             <TextInput
//               id="nbr_per"
//               name="nbr_per"
//               type="text"
//               value={data.nbr_per}
//               onChange={handleOnChange}
//               error={errors.nbr_per}
//             />
//              {errors.nbr_per && <p style={{ color: 'red' }}>{errors.nbr_per}</p>}
//           </div>
//           <div className="mb-4">
//             <InputLabel htmlFor="prix_chambre" value="Prix de la chambre" />
//             <TextInput
//               id="prix_chambre"
//               name="prix_chambre"
//               type="text"
//               value={data.prix_chambre}
//               onChange={handleOnChange}
//               error={errors.prix_chambre}
//             />
//              {errors.prix_chambre && <p style={{ color: 'red' }}>{errors.prix_chambre}</p>}
//           </div>
//           <div className="mb-4">
//             <InputLabel htmlFor="description_chambre" value="Description de la chambre" />
//             <textarea
//               id="description_chambre"
//               name="description_chambre"
//               type="text"
//               value={data.description_chambre}
//               onChange={handleOnChange}
//               error={errors.description_chambre}
//               className="h-32 px-3 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
//             />
//              {errors.description_chambre && <p style={{ color: 'red' }}>{errors.description_chambre}</p>}
//           </div>
//           <div className="mb-4">
//             <InputLabel htmlFor="disponible" value="Disponible" />
//             <input
//               id="disponible"
//               name="disponible"
//               type="checkbox"
//               checked={data.disponible}
//               onChange={handleOnChange}
//               className="mr-2 leading-tight"
//             />
//             {errors.disponible && <p style={{ color: 'red' }}>{errors.disponible}</p>}
//             <span className="text-sm">Disponible</span>
//             <InputError message={errors.disponible} className="mt-2 text-red-500" />
//           </div>
//           <div className="mb-4">
//             <InputLabel htmlFor="typeChambre" value="Type de chambre" />
//             <select
//               id="typeChambre"
//               name="typeChambre"
//               value={data.typeChambre}
//               onChange={handleOnChange}
//               className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//             >
//               <option value="">---- Choisissez -----</option>
//               <option value="standard">Standard</option>
//               <option value="avecVue">Avec vue</option>
//               <option value="executive">Executive</option>
//               <option value="familiale">Familiale</option>
//               <option value="luxe">Luxe</option>
//               <option value="twin">Twin</option>
//               <option value="double">Double</option>
//             </select>
//             <InputError message={errors.typeChambre} className="mt-2 text-red-500" />
//             {errors.typeChambre && <p style={{ color: 'red' }}>{errors.typeChambre}</p>}
//           </div>
//           <div className="mb-4">
//             <InputLabel htmlFor="image1" value="Image 1" />
//             <input
//               type="file"
//               id="image1"
//               name="image1"
//               onChange={handleImageChange}
//               className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//             />
//             {/* <InputError message={errors.image1} className="mt-2 text-red-500" /> */}
//             {errors.image1 && <p style={{ color: 'red' }}>{errors.image1}</p>}
//           </div>ss
//           <div className="mb-4">
//             <InputLabel htmlFor="image2" value="Image 2" />
//             <input
//               type="file"
//               id="image2"
//               name="image2"
//               onChange={handleImageChange}
//               className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//             />
//             {errors.image2 && <p style={{ color: 'red' }}>{errors.image2}</p>}
//             <InputError message={errors.image2} className="mt-2 text-red-500" />
//           </div>
//           <div className="mb-4">
//             <InputLabel htmlFor="image3" value="Image 3" />
//             <input
//               type="file"
//               id="image3"
//               name="image3"
//               onChange={handleImageChange}
//               className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//             />
//             {errors.image3 && <p style={{ color: 'red' }}>{errors.image3}</p>}
//             <InputError message={errors.image3} className="mt-2 text-red-500" />
//           </div>
//           <div className="mb-4">
//             <InputLabel htmlFor="image4" value="Image 4" />
//             <input
//               type="file"
//               id="image4"
//               name="image4"
//               onChange={handleImageChange}
//               className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
//             />
//              {errors.image4 && <p style={{ color: 'red' }}>{errors.image4}</p>}
//             <InputError message={errors.image4} className="mt-2 text-red-500" />
//           </div>
//           <div className="flex items-center justify-end mt-6">
//             <button
//               type="submit"
//               className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-500"
//               disabled={processing}
//             >
//               {processing ? 'En cours...' : 'Ajouter'}
//             </button>
//           </div>
//         </form>
//       </div>
   
//    </div>
      
//   );
// }

// export default AjouterChambre;
import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
import Layout from '@/Pages/MyPages/Liens';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';

function AjouterChambre(props) {
  console.log(props.typechambres)
  const { data, setData, post, processing, errors, reset } = useForm({
    numero: '',
    nom_chambre: '',
    numero_telephone: '',
    prix_chambre: '',
    nbr_per: '',
    description_chambre: '',
    disponible: '',
    type_chambre_id:'',
    // typeChambre: '',
    image1: '',
    image2: '',
    image3: '',
    image4: '',
  });

  const [currentTab, setCurrentTab] = useState(1);
  const totalTabs = 3; // Nombre total d'onglets

  const handleOnChange = (event) => {
    setData({
      ...data,
      [event.target.name]:
        event.target.type === 'checkbox' ? event.target.checked : event.target.value,
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

  const changeTab = (tabNumber) => {
    setCurrentTab(tabNumber);
  };

  return (
    <div>
      <Layout />
      <div className="max-w-md mx-auto mt-0">
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Ajouter une chambre</h2>
          {/* Onglets pour naviguer entre les différents groupes de champs */}
          <div className="mb-4">
            <button
              className={`mr-4 px-4 py-2 text-sm font-medium bg-indigo-600 rounded-md hover:bg-indigo-500 ${
                currentTab === 1 ? 'text-white' : 'text-gray-800'
              }`}
              onClick={() => changeTab(1)}
            >
              Général
            </button>
            <button
              className={`mr-4 px-4 py-2 text-sm font-medium bg-indigo-600 rounded-md hover:bg-indigo-500 ${
                currentTab === 2 ? 'text-white' : 'text-gray-800'
              }`}
              onClick={() => changeTab(2)}
            >
              Prix & Disponibilité
            </button>
            <button
              className={`px-4 py-2 text-sm font-medium bg-indigo-600 rounded-md hover:bg-indigo-500 ${
                currentTab === 3 ? 'text-white' : 'text-gray-800'
              }`}
              onClick={() => changeTab(3)}
            >
              Images
            </button>
          </div>
          {/* Afficher les champs en fonction de l'onglet actuel */}
          {currentTab === 1 && (
            <div className='parent1 d-flex'>
              <div className="mb-4" style={{ flex: 1 }}>
                <InputLabel htmlFor="numero" value="Numéro" />
                <TextInput
                  id="numero"
                  name="numero"
                  type="text"
                  value={data.numero}
                  onChange={handleOnChange}
                  error={errors.numero}
                />
                {errors.numero && <p style={{ color: 'red' }}>{errors.numero}</p>}
              </div>
              <div className="mb-4">
            <InputLabel htmlFor="description_chambre" value="Description de la chambre" />
            <textarea
               id="description_chambre"
               name="description_chambre"
               type="text"
              value={data.description_chambre}
              onChange={handleOnChange}
               error={errors.description_chambre}
               className="h-32 px-3 py-2 mt-1 text-sm border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
             />
              {errors.description_chambre && <p style={{ color: 'red' }}>{errors.description_chambre}</p>}
           </div>
              <div className="mb-4" style={{ flex: 1 }}>
                <InputLabel htmlFor="nom_chambre" value="Nom de la chambre" />
                <TextInput
                  id="nom_chambre"
                  name="nom_chambre"
                  type="text"
                  value={data.nom_chambre}
                  onChange={handleOnChange}
                  error={errors.nom_chambre}
                />
                {errors.nom_chambre && <p style={{ color: 'red' }}>{errors.nom_chambre}</p>}
              </div>
              {/* <div className="mb-4">
            <InputLabel htmlFor="typeChambre" value="Type de chambre" />
             <select
              id="typeChambre"
               name="typeChambre"
               value={data.typeChambre}
               onChange={handleOnChange}
               className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
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
            {errors.typeChambre && <p style={{ color: 'red' }}>{errors.typeChambre}</p>}
          </div> */}
          <div className="mb-4">
          <InputLabel htmlFor="type_chambre_id" value="ID Type de la chambre" />
          <select
            id="type_chambre_id"
            name="type_chambre_id"
            value={data.type_chambre_id}
            onChange={handleOnChange}
            className="mt-1 block w-full"
          >
            <option value="">Sélectionner un ID de Type de chambre</option>
            {props.typechambres.map(typechambre => (
              <option key={typechambre.id} value={typechambre.id}>
                {typechambre.typeChambre} (ID: {typechambre.id})
              </option>
            ))}
          </select>
          <InputError message={errors.id_chambre} className="mt-2 text-red-500" />
        </div>
            </div>
          )}
          {currentTab === 2 && (
            <div>
              <div className="mb-4">
                <InputLabel htmlFor="nbr_per" value="Nombre de personnes" />
                <TextInput
                  id="nbr_per"
                  name="nbr_per"
                  type="text"
                  value={data.nbr_per}
                  onChange={handleOnChange}
                  error={errors.nbr_per}
                />
                {errors.nbr_per && <p style={{ color: 'red' }}>{errors.nbr_per}</p>}
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
                {errors.prix_chambre && <p style={{ color: 'red' }}>{errors.prix_chambre}</p>}
              </div>
              <div className="mb-4">
            <InputLabel htmlFor="disponible" value="Disponible" />
            <input
               id="disponible"
               name="disponible"
               type="checkbox"
               checked={data.disponible}
               onChange={handleOnChange}
              className="mr-2 leading-tight"
             />
            {errors.disponible && <p style={{ color: 'red' }}>{errors.disponible}</p>}
             <span className="text-sm">Disponible</span>
             <InputError message={errors.disponible} className="mt-2 text-red-500" />
           </div>
            </div>
          )}
          {currentTab === 3 && (
            <div>
              <div className="mb-4">
                <InputLabel htmlFor="image1" value="Image 1" />
                <input
                  type="file"
                  id="image1"
                  name="image1"
                  onChange={handleImageChange}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.image1 && <p style={{ color: 'red' }}>{errors.image1}</p>}
              </div>
              <div className="mb-4">
                <InputLabel htmlFor="image2" value="Image 2" />
                <input
                  type="file"
                  id="image2"
                  name="image2"
                  onChange={handleImageChange}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.image2 && <p style={{ color: 'red' }}>{errors.image2}</p>}
              </div>
              <div className="mb-4">
                <InputLabel htmlFor="image3" value="Image 3" />
                <input
                  type="file"
                  id="image3"
                  name="image3"
                  onChange={handleImageChange}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.image3 && <p style={{ color: 'red' }}>{errors.image3}</p>}
              </div>
              <div className="mb-4">
                <InputLabel htmlFor="image4" value="Image 4" />
                <input
                  type="file"
                  id="image4"
                  name="image4"
                  onChange={handleImageChange}
                  className="block w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                {errors.image4 && <p style={{ color: 'red' }}>{errors.image4}</p>}
              </div>
            </div>
          )}
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
    </div>
  );
}

export default AjouterChambre;

