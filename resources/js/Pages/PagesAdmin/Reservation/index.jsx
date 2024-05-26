import React, { useState } from 'react';
import Layout from '@/Pages/MyPages/Liens';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';

const Index = ({ reservations }) => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [localReservations, setLocalReservations] = useState(reservations);
  const [showCancelled, setShowCancelled] = useState(false);
  const [clientCin, setClientCin] = useState('');
  const [reservationDate, setReservationDate] = useState('');

  const handleClientClick = (client) => {
    setSelectedClient(client);
  };

  const handleCancelReservation = (reservationId) => {
    axios.put(`/reservations/cancel/${reservationId}`)
      .then(response => {
        Swal.fire({
          icon: 'success',
          title: 'Réservation annulée avec succès',
          showConfirmButton: false,
          timer: 2000,
        });
        setLocalReservations(localReservations.map(reservation =>
          reservation.id === reservationId ? { ...reservation, statu: 'annuler' } : reservation
        ));
      })
      .catch(error => {
        console.error('Error:', error);
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Une erreur est survenue lors de l\'annulation de la réservation.',
        });
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Êtes-vous sûr de vouloir supprimer cette réservation ?",
      text: "Cette action est irréversible !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Oui, supprimer !",
      cancelButtonText: "Annuler",
    }).then((result) => {
      if (result.isConfirmed) {
        Inertia.delete(`reservation/${id}`).then(() => {
          Swal.fire({
            icon: "success",
            title: "La réservation a été supprimée avec succès",
            showConfirmButton: false,
            timer: 3000,
          });
          setLocalReservations(localReservations.filter(reservation => reservation.id !== id));
        });
      }
    });
  };

  const toggleShowCancelled = () => {
    setShowCancelled(!showCancelled);
  };

  const handleFilterByCin = () => {
    const filteredReservations = reservations.filter(reservation =>
      reservation.user.cin.toLowerCase().includes(clientCin.toLowerCase())
    );
    setLocalReservations(filteredReservations);
  };

  const handleFilterByDate = () => {
    const filteredReservations = reservations.filter(reservation =>
      reservation.date_reservation === reservationDate
    );
    setLocalReservations(filteredReservations);
  };

  const handleResetFilters = () => {
    setClientCin('');
    setReservationDate('');
    setLocalReservations(reservations);
  };

  const filteredReservations = localReservations.filter(reservation => 
    showCancelled ? reservation.statu === 'annuler' : reservation.statu !== 'annuler'
  );

  return (
    <div>
      <Layout />
      <div className="index-container ml-80">
        <h1 className="text-3xl font-bold mb-6">Liste des réservations</h1>
        <button
          onClick={toggleShowCancelled}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md shadow-md transition duration-300 ease-in-out mb-4"
        >
          {showCancelled ? 'Afficher toutes les réservations' : 'Afficher les réservations annulées'}
        </button>
        <div className="filters mb-4">
          <input
            type="text"
            placeholder="Filtrer par CIN du client"
            value={clientCin}
            onChange={(e) => setClientCin(e.target.value)}
            className="mr-2 px-2 py-1 border rounded input"
          />
          <button onClick={handleFilterByCin} className="px-2 py-1 bg-green-500 text-white rounded mr-2">
            Filtrer par CIN
          </button>
          <input
            type="date"
            placeholder="Filtrer par date de réservation"
            value={reservationDate}
            onChange={(e) => setReservationDate(e.target.value)}
            className="mr-2 px-2 py-1 border rounded input"
          />
          <button onClick={handleFilterByDate} className="px-2 py-1 bg-green-500 text-white rounded mr-2">
            Filtrer par date
          </button>
          <button onClick={handleResetFilters} className="px-2 py-1 bg-gray-500 text-white rounded">
            Réinitialiser les filtres
          </button>
        </div>
        <div className="table-container overflow-x-auto">
          <table className="table-auto min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Réservation</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Chambre réservée</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date de réservation</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Client</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Annuler réservation</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Supprimer réservation</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Modifier réservation</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredReservations.map((reservation) => (
                <tr key={reservation.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{reservation.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {reservation.chambre ? reservation.chambre.nom_chambre : 'Chambre non assignée'}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{reservation.date_reservation}</td>
                  <td
                    onClick={() => handleClientClick(reservation.user)}
                    className="px-6 py-4 whitespace-nowrap cursor-pointer underline text-blue-500"
                  >
                    {reservation.user.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {reservation.statu !== 'annuler' && (
                      <button
                        onClick={() => handleCancelReservation(reservation.id)}
                        className="flex items-center px-3 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        title="Annuler Réservation"
                      >
                        <FaTrashAlt className="mr-1" />
                        Annuler Réservation
                      </button>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleDelete(reservation.id)}
                      className="ml-6 text-red-600 hover:text-red-900"
                      title="Supprimer réservation"
                    >
                      <FaTrashAlt className="mr-1" />
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <Link href={route('reservation.edit', reservation.id)} className="ml-6 text-red-600 hover:text-red-900">
                      <FaEdit className="mr-1" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {selectedClient && (
          <div className="client-info-tooltip">
            <p><img className='img' src="images/client.png" alt="Client" /></p>
            <p><strong>Nom:</strong> {selectedClient.name}</p>
            <p><strong>CIN:</strong> {selectedClient.cin}</p>
            <p><strong>Numéro de téléphone:</strong> {selectedClient.numero_telephone}</p>
            <p><strong>Nationalité:</strong> {selectedClient.nationalite}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
