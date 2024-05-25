import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, BarElement, Title, Tooltip, Legend, LinearScale);

const ReservationChart = ({ reservations }) => {
  const monthReservations = {};

  // Group reservations by month and count total reservations
  reservations.forEach((reservation) => {
    const month = new Date(reservation.date_reservation).getMonth(); // Obtenir le mois (de 0 à 11)
    if (!monthReservations[month]) {
      monthReservations[month] = 0;
    }
    monthReservations[month]++;
  });

  // Calculate percentage of reservations made for each month
  const totalReservations = Object.values(monthReservations).reduce((a, b) => a + b, 0);
  const monthPercentages = Object.keys(monthReservations).map((month) => (monthReservations[month] / totalReservations) * 100);

  // Sort months in order from earliest to latest
  const sortedMonths = Object.keys(monthReservations).sort((a, b) => a - b);

  // Prepare data for the chart
  const labels = sortedMonths.map((month) => {
    const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return monthNames[month];
  });
  const datasets = [
    {
      label: 'Percentage of Reservations Made',
      data: monthPercentages,
      backgroundColor: [
        'rgba(0, 123, 255, 0.5)',
        'rgba(100, 149, 237, 0.5)',
        'rgba(135, 206, 250, 0.5)',
        'rgba(170, 226, 243, 0.5)',
        'rgba(202, 245, 255, 0.5)',
        'rgba(231, 242, 255, 0.5)',
        'rgba(255, 239, 239, 0.5)',
        'rgba(255, 222, 200, 0.5)',
        'rgba(255, 204, 153, 0.5)',
        'rgba(255, 179, 102, 0.5)',
        'rgba(255, 144, 20, 0.5)',
        'rgba(255, 105, 89, 0.5)',
      ],
      borderColor: [
        'rgba(0, 123, 255, 1)',
        'rgba(100, 149, 237, 1)',
        'rgba(135, 206, 250, 1)',
        'rgba(170, 226, 243, 1)',
        'rgba(202, 245, 255, 1)',
        'rgba(231, 242, 255, 1)',
        'rgba(255, 239, 239, 1)',
        'rgba(255, 222, 200, 1)',
        'rgba(255, 204, 153, 1)',
        'rgba(255, 179, 102, 1)',  
        'rgba(255, 144, 20, 1)',
        'rgba(255, 105, 89, 1)',
      ],  
      borderWidth: 2, // Augmenter l'épaisseur des barres
    },
  ];
  const options = {
    plugins: {
      title: {
        display: true,
        text: 'Monthly Reservation Distribution', // Titre du graphique
        font: {
          size: 18,
        },
      },
      legend: {
        display: true,
        position: 'bottom', // Position de la légende
        labels: {
          font: {
            size: 14,
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          stepSize: 10, // Échelle de l'axe y
        },
      },
    },
    layout: {
      padding: {
        top: 20, // Ajouter un espace en haut
        bottom: 20, // Ajouter un espace en bas
        left: 20,
        right: 20,
      },
    },
  };
  return (
    <div style={{ width: '500px', height: '500px' }}>
      <Bar data={{ labels, datasets }} options={options} />
    </div>
  );
};
export default ReservationChart;

