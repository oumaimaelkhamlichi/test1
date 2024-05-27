// // import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
// // import { Head } from '@inertiajs/react';
// // import Navabar from './MyPages/Navabar';
// // export default function Dashboard(props) {
// //     console.log(props.clients)
// //     return (
        
// //         <AuthenticatedLayout
        
// //              auth={props.auth}
// //             errors={props.errors}
// //             //  header={<h2 className="font-semibold text-xl ">Dashboard</h2>}
// //             //  text-gray-800 leading-tight
        
// //         >
// //             <Head title="Dashboard" />
// // <div>hello</div>
// //             {/* <div className="py-12">
// //                 <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
// //                     <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
// //                         <div className="p-6 text-gray-900">You're logged in!</div>
// //                     </div>
// //                 </div>
// //             </div> */}
// //         </AuthenticatedLayout>
// //     );
// // }




// import Layout from './MyPages/Liens';
// import ReservationChart from './Shart/ReservationChart';
// import RoomRevenueChart from './Shart/RoomRevenueChart';
// import { FaUsers, FaClipboardList, FaBed, FaMoneyBillWave } from 'react-icons/fa';
// import './dashboard.css';

// export default function Dashboard({ clients, comment, Chambres, reservations,types }) {
//     console.log(reservations)
//     console.log(clients)

//     const total = reservations.reduce((acc, reservation) => {
//         return acc + (reservation.chambre.prix_chambre * reservation.nbr_nuit);
//     }, 0);

//     console.log("Somme totale des prix des chambres : ", total);

//     return (
//         <div className="min-h-screen bg-gray-100 p-4">
//             <Layout />
//             <div className="Dashboard ml-80 flex flex-col space-y-4">
//                 <div className="flex space-x-4">
//                     <div className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg rounded-lg p-6 flex-1 transition-transform transform hover:scale-105 text-white">
//                         <h2 className="text-xl font-bold flex items-center">
//                             Clients <FaUsers className="ml-2 w-6 h-6" />
//                         </h2>
//                         <p className="text-3xl mt-2">{clients.length}</p>
//                     </div>
//                     {/* <div className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg rounded-lg p-6 flex-1 transition-transform transform hover:scale-105 text-white">
//                         <h2 className="text-xl font-bold flex items-center">
//                             Type chambres<FaUsers className="ml-2 w-6 h-6" />
//                         </h2>
//                         <p className="text-3xl mt-2">{types.length}</p>
//                     </div> */}
//                     <div className="bg-gradient-to-r from-green-400 to-teal-500 shadow-lg rounded-lg p-6 flex-1 transition-transform transform hover:scale-105 text-white">
//                         <h2 className="text-xl font-bold flex items-center">
//                             Réservations <FaClipboardList className="ml-2 w-6 h-6" />
//                         </h2>
//                         <p className="text-3xl mt-2">{reservations.length}</p>
//                     </div>
//                     <div className="bg-gradient-to-r from-pink-500 to-red-500 shadow-lg rounded-lg p-6 flex-1 transition-transform transform hover:scale-105 text-white">
//                         <h2 className="text-xl font-bold flex items-center">
//                             Chambres <FaBed className="ml-2 w-6 h-6" />
//                         </h2>
//                         <p className="text-3xl mt-2">{Chambres.length}</p>
//                     </div>
//                     <div className="bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg rounded-lg p-6 flex-1 transition-transform transform hover:scale-105 text-white">
//                         <h2 className="text-xl font-bold flex items-center">
//                             Total <FaMoneyBillWave className="ml-2 w-6 h-6" />
//                         </h2>
//                         <p className="text-3xl mt-2">{total} DH</p>
//                     </div>
//                 </div>
//                 <div className="flex space-x-4">
//                     <div className="bg-white shadow-lg rounded-lg p-6 flex-1">
//                         <ReservationChart reservations={reservations} />
//                     </div>
//                     <div className="bg-white shadow-lg rounded-lg p-6 flex-1">
//                         <RoomRevenueChart reservations={reservations} />
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
import React, { useState } from 'react';
import Layout from './MyPages/Liens';
import ReservationChart from './Shart/ReservationChart';
import RoomRevenueChart from './Shart/RoomRevenueChart';
// import OccupancyByRoomTypeChart from './Shart/OccupancyByRoomTypeChart';

import { FaUsers, FaClipboardList, FaBed, FaMoneyBillWave } from 'react-icons/fa';
import './dashboard.css';

export default function Dashboard({ clients, comment, Chambres, reservations, types }) {
    const [darkMode, setDarkMode] = useState(false);
    const total = reservations.reduce((acc, reservation) => {
        return acc + (reservation.chambre.prix_chambre * reservation.nbr_nuit);
    }, 0);

    return (
        <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} p-4`}>
            <Layout />
            <div className="Dashboard ml-80 flex flex-col space-y-4">
                <button
                    className={`${
                        darkMode
                            ? 'bg-gray-800 text-white'
                            : 'bg-gray-200 text-gray-800'
                    } px-4 py-2 rounded-md`}
                    onClick={() => setDarkMode(!darkMode)}
                >
                    {darkMode ? 'Mode clair' : 'Mode sombre'}
                </button>
                <div className="flex space-x-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg rounded-lg p-6 flex-1 transition-transform transform hover:scale-105 text-white">
                        <h2 className="text-xl font-bold flex items-center">
                            Clients <FaUsers className="ml-2 w-6 h-6" />
                        </h2>
                        <p className="text-3xl mt-2">{clients.length}</p>
                    </div>
                    <div className="bg-gradient-to-r from-green-400 to-teal-500 shadow-lg rounded-lg p-6 flex-1 transition-transform transform hover:scale-105 text-white">
                        <h2 className="text-xl font-bold flex items-center">
                            Réservations <FaClipboardList className="ml-2 w-6 h-6" />
                        </h2>
                        <p className="text-3xl mt-2">{reservations.length}</p>
                    </div>
                    <div className="bg-gradient-to-r from-pink-500 to-red-500 shadow-lg rounded-lg p-6 flex-1 transition-transform transform hover:scale-105 text-white">
                        <h2 className="text-xl font-bold flex items-center">
                            Chambres <FaBed className="ml-2 w-6 h-6" />
                        </h2>
                        <p className="text-3xl mt-2">{Chambres.length}</p>
                    </div>
                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 shadow-lg rounded-lg p-6 flex-1 transition-transform transform hover:scale-105 text-white">
                        <h2 className="text-xl font-bold flex items-center">
                            Total <FaMoneyBillWave className="ml-2 w-6 h-6" />
                        </h2>
                        <p className="text-3xl mt-2">{total} DH</p>
                    </div>
                </div>
                <div className="flex space-x-4">
                    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg rounded-lg p-6 flex-1`}>
                        <ReservationChart reservations={reservations} darkMode={darkMode} />
                    </div>
                    <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg rounded-lg p-6 flex-1`}>
                        <RoomRevenueChart reservations={reservations} darkMode={darkMode} />
                    </div>
                </div>
            </div>
        </div>
    );
}
