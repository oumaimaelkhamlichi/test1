import React, { useState, useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';
import Swal from 'sweetalert2';

const Edit = ({ reservation, chambres, defaultUserId }) => {
  const [formData, setFormData] = useState({
    date_debut: '',
    date_fin: '',
    statu: '',
    date_reservation: '',
    nbr_personne: '',
    nbr_children: '',
    nbr_nuit: '',
    id_chambre: '',
    id_user: defaultUserId,
  });

  useEffect(() => {
    if (reservation) {
      setFormData({
        date_debut: reservation.date_debut,
        date_fin: reservation.date_fin,
        statu: reservation.statu,
        date_reservation: reservation.date_reservation,
        nbr_personne: reservation.nbr_personne,
        nbr_children: reservation.nbr_children,
        nbr_nuit: reservation.nbr_nuit,
        id_chambre: reservation.id_chambre,
      });
    }
  }, [reservation]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await Inertia.put(route('reservation.update', reservation.id), formData);
      Swal.fire({
        icon: 'success',
        title: 'Succès',
        text: 'Réservation modifiée avec succès.',
      });
    } catch (error) {
      console.error('Erreur lors de la modification de la réservation:', error);
      Swal.fire({
        icon: 'error',
        title: 'Erreur',
        text: 'Échec de la modification de la réservation. Veuillez réessayer plus tard.',
      });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Modifier Réservation</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col space-y-2">
            date de debut
            <input
              type="date"
              name="date_debut"
              value={formData.date_debut}
              onChange={handleChange}
              className="p-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none"
              placeholder="Date de début"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <input
              type="date"
              name="date_fin"
              value={formData.date_fin}
              onChange={handleChange}
              className="p-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none"
              placeholder="Date de fin"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <input
              type="text"
              name="statu"
              value={formData.statu}
              onChange={handleChange}
              className="p-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none"
              placeholder="Statut"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <input
              type="date"
              name="date_reservation"
              value={formData.date_reservation}
              onChange={handleChange}
              className="p-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none"
              placeholder="Date de réservation"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <input
              type="number"
              name="nbr_personne"
              value={formData.nbr_personne}
              onChange={handleChange}
              className="p-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none"
              placeholder="Nombre de personnes"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <input
              type="number"
              name="nbr_children"
              value={formData.nbr_children}
              onChange={handleChange}
              className="p-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none"
              placeholder="Nombre d'enfants"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <input
              type="number"
              name="nbr_nuit"
              value={formData.nbr_nuit}
              onChange={handleChange}
              className="p-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none"
              placeholder="Nombre de nuits"
            />
          </div>
          <div className="flex flex-col space-y-2">
            <select
              name="id_chambre"
              value={formData.id_chambre}
              onChange={handleChange}
              className="p-3 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none"
            >
              {chambres.map((chambre) => (
                <option key={chambre.id} value={chambre.id}>
                  {chambre.nom_chambre}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="w-full py-3 bg-purple-500 text-white font-semibold rounded-lg shadow-md hover:bg-purple-600 focus:outline-none">
            Enregistrer les modifications
          </button>
        </form>
      </div>
    </div>
  );
};

export default Edit;
