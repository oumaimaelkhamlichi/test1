import React, { useEffect, useState } from 'react';
import Layout from '@/Pages/MyPages/Liens';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Inertia } from '@inertiajs/inertia';
import { Link } from '@inertiajs/react';
import { FaEdit, FaIdCard, FaPlus, FaSearchPlus, FaTrashAlt } from 'react-icons/fa';

const Index = ({ reservations }) => {
  const [selectedClient, setSelectedClient] = useState(null);
  const [localReservations, setLocalReservations] = useState(reservations);
  const [showCancelled, setShowCancelled] = useState(false);
  const [clientCin, setClientCin] = useState('');
  const [reservationDate, setReservationDate] = useState('');
  useEffect(() => {
    if (selectedClient) {
      const timer = setTimeout(() => {
        setSelectedClient(null);
      }, 5000); // 5000ms = 5 seconds
      return () => clearTimeout(timer);
    }
  }, [selectedClient]);
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
      {selectedClient && (
        <div style={{ width:'300px' }}
         className="client-info-tooltip bg-blue-100 border border-blue-200 shadow-lg rounded-lg p-6 ml-80">
        <p className="text-lg font-semibold">Informations du client</p>
        {/* <hr className="my-3 border-t border-gray-300"> */}
        <p><strong>Nom:</strong> {selectedClient.name}</p>
        <p><strong>CIN:</strong> {selectedClient.cin}</p>
        <p><strong>Numéro de téléphone:</strong> {selectedClient.numero_telephone}</p>
        <p><strong>Nationalité:</strong> {selectedClient.nationalite}</p>
      </div>
        )}
      <Layout />
      <div>
      <div className="container mx-auto px-6 py-8 ml-70" style={{ width:'77%',marginLeft:'280px' }}>
        <div className="bg-white shadow-md rounded-md p-6 mb-8">
          <h1 className="text-3xl font-bold mb-6">Liste des réservations</h1>
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={toggleShowCancelled}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md shadow-md transition duration-300 ease-in-out flex items-center justify-center space-x-2"
            >
              <FaSearchPlus className="text-xl animate-bounce" />
              <span>{showCancelled ? 'Afficher toutes les réservations' : 'Afficher les réservations annulées'}</span>
            </button>
            <div className="flex space-x-4">
              <div className="flex items-center">
                <FaIdCard className="text-gray-500 mr-2" />
                <input
                  type="text"
                  placeholder="Filtrer par CIN du client"
                  value={clientCin}
                  onChange={(e) => setClientCin(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <button
                onClick={handleFilterByCin}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-black rounded-md shadow-md transition duration-300 ease-in-out"
              >
                Filtrer par CIN
              </button>
             
              </div>
              <div className="flex items-center">
                <FaIdCard className="text-gray-500 mr-2" />
                <input
                  type="date"
                  placeholder="Filtrer par date de réservation"
                  value={reservationDate}
                  onChange={(e) => setReservationDate(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <button
                onClick={handleFilterByDate}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-black rounded-md shadow-md transition duration-300 ease-in-out"
              >
                Filtrer par date
              </button>
            </div>
            <button
              onClick={handleResetFilters}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md shadow-md transition duration-300 ease-in-out"
            >
              Réinitialiser les filtres
            </button>
          </div>
        </div>
        <div className="table-container bg-white shadow-md rounded-md overflow-x-auto ml-80">
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
                  <td className="px-6 py-2 whitespace-nowrap" >
                    <Link href={route('reservation.edit', reservation.id)}
                     className="ml-6 text-red-600 hover:text-red-900">
                      <FaEdit className="mr-1" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
      </div>
    </div>
  
  );
};

export default Index;
