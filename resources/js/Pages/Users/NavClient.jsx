import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import Layout from '@/Pages/MyPages/Liens';

export default function AfficherChambres(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterNumero, setFilterNumero] = useState('');
  const [editingChambre, setEditingChambre] = useState(null);
  const [values, setValues] = useState({
    nom_chambre: '',
    prix_chambre: '',
    disponible: false,
  });

  const filteredChambres = props.chambres.filter(chambre => {
    return chambre.nom_chambre.toLowerCase().includes(searchTerm.toLowerCase()) &&
           (filterType === '' || chambre.typeChambre === filterType) &&
           (filterNumero === '' || chambre.numero === parseInt(filterNumero));
  });

  const nombreChambresDisponibles = props.chambres.reduce((total, chambre) => {
    return chambre.disponible ? total + 1 : total;
  }, 0);

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleFilterTypeChange = event => {
    setFilterType(event.target.value);
  };

  const handleFilterNumeroChange = event => {
    setFilterNumero(event.target.value);
  };

  const handleEdit = chambre => {
    setEditingChambre(chambre);
    setValues({
      nom_chambre: chambre.nom_chambre,
      prix_chambre: chambre.prix_chambre,
      disponible: chambre.disponible,
    });
  };

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    Inertia.put(`/chambres/${editingChambre.id}`, values);
    setEditingChambre(null);
    // Vous pouvez également ajouter un callback ici pour gérer les données actualisées si nécessaire
  };

  const handleDelete = id => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette chambre ?")) {
      Inertia.delete(`/chambres/${id}`);
      alert('La chambre a été supprimée avec succès.');
    }
  };

  return (
    <Layout>
      <div>
        <div className="mx-auto max-w-6xl ml-40">
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img style={{ width: '64px', height: '64px', marginRight: '10px' }} src="/images/icons8-liste-64.png" alt="" />
            <h1 className="text-3xl font-bold mb-6 mb-4" style={{ margin: 0 }}>Liste des chambres</h1>
          </div>
          <h1 className="mr-700"> Nombre de chambres disponibles : {nombreChambresDisponibles}</h1>
          <hr className='mb-4 ' />
          {/* Champ de recherche par nom */}
          <input
            type="text"
            placeholder="Rechercher par nom..."
            value={searchTerm}
            onChange={handleSearchChange}
            className=" w-200 mr-4 px-4 py-2 mb-4 border border-purple-300 rounded-md"
          />
          {/* Sélecteur de filtrage par type de chambre */}
          <select
            value={filterType}
            onChange={handleFilterTypeChange}
            className=" w-300 px-4 py-2 mb-4 border border-purple-300 rounded-md"
          >
            <option className=" w-300" value="">Tous les types</option>
            {props.chambres.map((e, index) => <option key={index} value={e.typeChambre}>{e.typeChambre}</option>)}
          </select>
          <input
            type="text"
            placeholder="Filtrer par numéro..."
            value={filterNumero}
            onChange={handleFilterNumeroChange}
            className=" w-200 px-4 py-2 ml-4 border border-purple-300 rounded-md"
          />
          <table className="w-full border border-gray-200">
            <thead>
              <tr>
                <th className="px-4 py-2">Numéro</th>
                <th className="px-4 py-2">Nom</th>
                <th className="px-4 py-2">Prix</th>
                <th className="px-4 py-2">Disponible</th>
                <th className="px-4 py-2">Modifier</th>
                <th className="px-4 py-2">Supprimer</th>
              </tr>
            </thead>
            <tbody>
              {filteredChambres.map((chambre) => (
                <tr key={chambre.id} className="hover:bg-gray-100">
                  <td className="border px-4 py-2">{chambre.numero}</td>
                  <td className="border px-4 py-2">
                    {editingChambre && editingChambre.id === chambre.id ? (
                      <form onSubmit={handleSubmit}>
                        <input
                          type="text"
                          name="nom_chambre"
                          value={values.nom_chambre}
                          onChange={handleChange}
                        />
                      </form>
                    ) : (
                      <span>{chambre.nom_chambre}</span>
                    )}
                  </td>
                  <td className="border px-4 py-2">
                    {editingChambre && editingChambre.id === chambre.id ? (
                      <form onSubmit={handleSubmit}>
                        <input
                          type="number"
                          name="prix_chambre"
                          value={values.prix_chambre}
                          onChange={handleChange}
                        />
                      </form>
                    ) : (
                      <span>{chambre.prix_chambre}</span>
                    )}
                  </td>
                  <td className="border px-4 py-2">
                    {editingChambre && editingChambre.id === chambre.id ? (
                      <input
                        type="checkbox"
                        name="disponible"
                        checked={values.disponible}
                        onChange={handleChange}
                      />
                    ) : (
                      <span>{chambre.disponible ? 'Oui' : 'Non'}</span>
                    )}
                  </td>
                  <td className="border px-4 py-2">
                    {editingChambre && editingChambre.id === chambre.id ? (
                      <>
                        <button className='mr-4 bg-yellow-400 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded' type="submit" onClick={handleSubmit}>Enregistrer</button>
                        <button className='bg-gray-400 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded' onClick={() => setEditingChambre(null)}>Annuler</button>
                      </>
                    ) : (
                      <button
  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
  onClick={() => handleEdit(chambre)}
>


  Modifier
  <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
  <path fill-rule="evenodd" d="M11.32 6.176H5c-1.105 0-2 .949-2 2.118v10.588C3 20.052 3.895 21 5 21h11c1.105 0 2-.948 2-2.118v-7.75l-3.914 4.144A2.46 2.46 0 0 1 12.81 16l-2.681.568c-1.75.37-3.292-1.263-2.942-3.115l.536-2.839c.097-.512.335-.983.684-1.352l2.914-3.086Z" clip-rule="evenodd"/>
  <path fill-rule="evenodd" d="M19.846 4.318a2.148 2.148 0 0 0-.437-.692 2.014 2.014 0 0 0-.654-.463 1.92 1.92 0 0 0-1.544 0 2.014 2.014 0 0 0-.654.463l-.546.578 2.852 3.02.546-.579a2.14 2.14 0 0 0 .437-.692 2.244 2.244 0 0 0 0-1.635ZM17.45 8.721 14.597 5.7 9.82 10.76a.54.54 0 0 0-.137.27l-.536 2.84c-.07.37.239.696.588.622l2.682-.567a.492.492 0 0 0 .255-.145l4.778-5.06Z" clip-rule="evenodd"/>
</svg>
</button>

                    )}
                  </td>
                  <td className="border px-4 py-2">
                  <button
  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
  onClick={() => handleDelete(chambre.id)}
>
<svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
</svg>

  Supprimer
</button>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}
