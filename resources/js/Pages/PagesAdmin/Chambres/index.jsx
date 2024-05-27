import React, { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import Layout from '@/Pages/MyPages/Liens';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { FaEdit, FaHotel, FaPlus, FaSearch, FaTrash, FaUserShield } from 'react-icons/fa';
import { Link } from '@inertiajs/react';

export default function AfficherChambres(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('');
  const [filterNumero, setFilterNumero] = useState('');
  const [filterDisponible, setFilterDisponible] = useState('');

  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  const handleFilterTypeChange = event => {
    setFilterType(event.target.value);
  };

  const handleFilterNumeroChange = event => {
    setFilterNumero(event.target.value);
  };

  const handleFilterDisponibleChange = event => {
    setFilterDisponible(event.target.value);
  };

  const handleDelete = id => {
    Swal.fire({
      title: "Êtes-vous sûr de vouloir supprimer cette chambre ?",
      text: "Cette action est irréversible !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimer !",
      cancelButtonText: "Annuler",
    }).then((result) => {
      if (result.isConfirmed) {
        Inertia.delete(`/chambres/${id}`).then(() => {
          Swal.fire({
            icon: "success",
            title: "La chambre a été supprimée avec succès",
            showConfirmButton: false,
            timer: 3000,
          });
        });
      }
    });
  };

  const filteredChambres = props.chambres.filter(chambre => {
    return chambre.nom_chambre.toLowerCase().includes(searchTerm.toLowerCase()) &&
           (filterType === '' || chambre.id_type_chambre === parseInt(filterType)) &&
           (filterNumero === '' || chambre.numero.toString() === filterNumero) &&
           (filterDisponible === '' || chambre.disponible.toString() === filterDisponible);
  });

  return (
    <div>
      <Layout />
      <div className="mx-auto max-w-6xl p-8 mt-8 bg-white shadow-md rounded-lg ml-80">
        <div className="flex items-center mb-6">
          <FaHotel size={50} className="text-blue-500 mr-3" />
          <h1 className="text-3xl font-bold text-gray-800">Liste des chambres</h1>
        </div>
        <Link 
  href={route('chambres.create')} 
  className="mb-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
>
  <FaPlus className="mr-2" />
  Ajouter Chambre
</Link>
        <div className="flex mb-4 space-x-4">
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Rechercher par nom..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="pl-10 pr-4 py-2 w-64 rounded-md bg-gray-100 focus:bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          {/* <div className="relative">
            <select
              value={filterType}
              onChange={handleFilterTypeChange}
              className="pl-4 pr-10 py-2 w-64 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Tous les types</option>
              {props.types.map(type => (
                <option key={type.id} value={type.id}>{type.typeChambre}</option>
              ))}
            </select>
          </div> */}
          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            <input
              type="text"
              placeholder="Filtrer par numéro..."
              value={filterNumero}
              onChange={handleFilterNumeroChange}
              className="pl-10 pr-4 py-2 w-64 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div className="relative">
            <select
              value={filterDisponible}
              onChange={handleFilterDisponibleChange}
              className="pl-4 pr-10 py-2 w-64 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              <option value="">Toutes les chambres</option>
              <option value="1">Disponibles</option>
              <option value="0">Non disponibles</option>
            </select>
          </div>
        </div>
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Numéro</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nom</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Prix</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Disponible</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Modifier</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supprimer</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredChambres.map((chambre) => (
              <tr key={chambre.id} className="hover:bg-gray-100">
                <td className="px-6 py-4 whitespace-nowrap">{chambre.numero}</td>
                <td className="px-6 py-4 whitespace-nowrap">{chambre.nom_chambre}</td>
                <td className="px-6 py-4 whitespace-nowrap">{chambre.prix_chambre}</td>
                <td className="px-6 py-4 whitespace-nowrap">{chambre.disponible ? 'Oui' : 'Non'}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link href={route('chambres.edit', chambre.id)} className="text-indigo-600 hover:text-indigo-900">
                    <FaEdit />
                  </Link>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => handleDelete(chambre.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
