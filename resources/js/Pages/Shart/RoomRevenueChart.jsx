import React from 'react';
import { Bar } from 'react-chartjs-2';

const RoomRevenueChart = ({ reservations }) => {
    // Créer un objet pour stocker le chiffre d'affaires par année
    const revenueByYear = {};
    
    // Parcourir chaque réservation pour calculer le chiffre d'affaires par année
    reservations.forEach(reservation => {
        const year = new Date(reservation.date_reservation).getFullYear();
        const total = reservation.chambre.prix_chambre * reservation.nbr_nuit;
        
        // Si l'année n'existe pas dans l'objet, l'initialiser à 0
        if (!revenueByYear[year]) {
            revenueByYear[year] = 0;
        }
        
        // Ajouter le total au chiffre d'affaires de cette année
        revenueByYear[year] += total;
    });
    
    // Extraire les années et les chiffres d'affaires de l'objet
    const years = Object.keys(revenueByYear);
    const revenues = Object.values(revenueByYear);

    // Créer les données pour le graphique
    const data = {
        labels: years,
        datasets: [
            {
                label: 'Chiffre d\'affaires par année',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(54, 162, 235, 0.4)',
                hoverBorderColor: 'rgba(54, 162, 235, 1)',
                data: revenues,
            },
        ],
    };

    return (
        <div style={{ width: '500px', height: '500px' }}>
            <h2>Chiffre d'affaires par année</h2>
            <Bar data={data} />
        </div>
    );
};

export default RoomRevenueChart;
