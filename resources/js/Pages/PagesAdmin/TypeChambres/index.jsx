import React from 'react';
import { motion } from 'framer-motion';
import { FaDollarSign, FaHotel, FaPlus } from 'react-icons/fa';
import Layout from '@/Pages/MyPages/Liens';
import Swal from 'sweetalert2';
import { Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/react';

export default function Index({ typechambres }) {
  const handleDelete = id => {
    Swal.fire({
      title: "Êtes-vous sûr de vouloir supprimer ce type avec ces chambres ?",
      text: "Cette action est irréversible !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimer !",
      cancelButtonText: "Annuler",
    }).then((result) => {
      if (result.isConfirmed) {
        Inertia.delete(`/typechambres/${id}`).then(() => {
          Swal.fire({
            icon: "success",
            title: "Ce type de chambre a été supprimé avec succès",
            showConfirmButton: false,
            timer: 3000,
          });
        });
      }
    });
  };

  return (
    <div>
      <Layout />
      <div className="min-h-screen bg-blue-50 flex flex-col items-center py-10">
        <div className="w-full flex justify-between items-center mb-10 px-6">
          <h1 className="text-4xl font-bold text-blue-700">Types de Chambres</h1>
          <Link 
            href="/typechambres/create" 
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700 focus:outline-none focus:bg-green-700 flex items-center"
          >
            <FaPlus className="mr-2" /> Ajouter un type de chambre
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6">
          {typechambres.map((chambre, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={`/images/${chambre.image1}`}
                alt={`Image de ${chambre.typeChambre}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center">
                  <FaHotel className="mr-2" /> {chambre.typeChambre}
                </h2>
                <p className="text-gray-600 mb-4">{chambre.description}</p>
                <div className="flex items-center text-blue-600">
                  <FaDollarSign className="mr-1" /> {chambre.prix_par_nuit} / nuit
                </div>
                <div className="mt-4">
                  <button
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 focus:outline-none focus:bg-red-700"
                    onClick={() => handleDelete(chambre.id)}
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
