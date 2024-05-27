// import React from 'react';
// import { Bar } from 'react-chartjs-2';

// const RoomRevenueChart = ({ reservations }) => {
//     // Créer un objet pour stocker le chiffre d'affaires par année
//     const revenueByYear = {};
    
//     // Parcourir chaque réservation pour calculer le chiffre d'affaires par année
//     reservations.forEach(reservation => {
//         const year = new Date(reservation.date_reservation).getFullYear();
//         const total = reservation.chambre.prix_chambre * reservation.nbr_nuit;
        
//         // Si l'année n'existe pas dans l'objet, l'initialiser à 0
//         if (!revenueByYear[year]) {
//             revenueByYear[year] = 0;
//         }
        
//         // Ajouter le total au chiffre d'affaires de cette année
//         revenueByYear[year] += total;
//     });
    
//     // Extraire les années et les chiffres d'affaires de l'objet
//     const years = Object.keys(revenueByYear);
//     const revenues = Object.values(revenueByYear);

//     // Créer les données pour le graphique
//     const data = {
//         labels: years,
//         datasets: [
//             {
//                 label: 'Chiffre d\'affaires par année',
//                 backgroundColor: 'rgba(54, 162, 235, 0.2)',
//                 borderColor: 'rgba(54, 162, 235, 1)',
//                 borderWidth: 1,
//                 hoverBackgroundColor: 'rgba(54, 162, 235, 0.4)',
//                 hoverBorderColor: 'rgba(54, 162, 235, 1)',
//                 data: revenues,
//             },
//         ],
//     };

//     return (
//         <div style={{ width: '500px', height: '500px' }}>
//             <h2>Chiffre d'affaires par année</h2>
//             <Bar data={data} />
//         </div>
//     );
// };

// export default RoomRevenueChart;
import React from 'react';
import { Bar } from 'react-chartjs-2';

const RoomRevenueChart = ({ reservations, darkMode }) => {
    const revenueByYear = {};
    
    reservations.forEach(reservation => {
        const year = new Date(reservation.date_reservation).getFullYear();
        const total = reservation.chambre.prix_chambre * reservation.nbr_nuit;
        if (!revenueByYear[year]) {
            revenueByYear[year] = 0;
        }
        revenueByYear[year] += total;
    });

    const years = Object.keys(revenueByYear);
    const revenues = Object.values(revenueByYear);

    const data = {
        labels: years,
        datasets: [
            {
                label: 'Chiffre d\'affaires par année',
                backgroundColor: darkMode
                    ? '#d6aa45c7' // Rouge clair pour le mode sombre
                    : '#d6aa45c7', // Vert clair pour le mode clair
                borderColor: darkMode
                    ? '#d6aa45c7'
                    : '#d6aa45c7',
                borderWidth: 1,
                hoverBackgroundColor: darkMode
                    ? '#f6b723c7'
                    : '#f6b723c7',
                hoverBorderColor: darkMode
                    ? '#f6b723c7'
                    : '#f6b723c7',
                data: revenues,
            },
        ],
    };

    const options = {
        plugins: {
            title: {
                display: true,
                text: 'Chiffre d\'affaires par année',
                font: {
                    size: 18,
                    color: darkMode ? '#fff' : '#000',
                },
            },
            legend: {
                display: true,
                position: 'bottom',
                labels: {
                    font: {
                        size: 14,
                        color: darkMode ? '#fff' : '#000',
                    },
                },
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 10,
                    color: darkMode ? '#fff' : '#000',
                },
                grid: {
                    color: darkMode ? '#444' : '#ddd',
                },
            },
            x: {
                ticks: {
                    color: darkMode ? '#fff' : '#000',
                },
                grid: {
                    color: darkMode ? '#444' : '#ddd',
                },
            },
        },
        layout: {
            padding: {
                top: 20,
                bottom: 20,
                left: 20,
                right: 20,
            },
        },
    };

    return (
        <div style={{ width: '500px', height: '500px' }}>
            <Bar data={data} options={options} />
        </div>
    );
};

export default RoomRevenueChart;
