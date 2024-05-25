// import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
// import { Head } from '@inertiajs/react';
// import Navabar from './MyPages/Navabar';
// export default function Dashboard(props) {
//     console.log(props.clients)
//     return (
        
//         <AuthenticatedLayout
        
//              auth={props.auth}
//             errors={props.errors}
//             //  header={<h2 className="font-semibold text-xl ">Dashboard</h2>}
//             //  text-gray-800 leading-tight
        
//         >
//             <Head title="Dashboard" />
// <div>hello</div>
//             {/* <div className="py-12">
//                 <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
//                     <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
//                         <div className="p-6 text-gray-900">You're logged in!</div>
//                     </div>
//                 </div>
//             </div> */}
//         </AuthenticatedLayout>
//     );
// }




import Layout from './MyPages/Liens';
 import ReservationChart from './Shart/ReservationChart';
import RoomRevenueChart from './Shart/RoomRevenueChart';
import './dashboard.css';

export default function Dashboard({clients,comment,Chambres,reservations}) {
    console.log(reservations)
    console.log(clients)
   
    const total = reservations.reduce((acc, reservation) => {
        return acc + (reservation.chambre.prix_chambre * reservation.nbr_nuit);
    }, 0);
    
    
    console.log("Somme totale des prix des chambres : ", total);
    return (
        <div>
             <Layout />
             <div className="Dashboard ml-80" style={{ display: 'flex' }}>
        


           
            <div>
                <div className="Total">
                <div className="FS">
                    <h2>client <img src="image/review.png" alt="" /></h2>
                    {clients.length > 0 && (
                        <p> {clients.length}</p>
                    )}
                </div>
                <div className="TC">
                    <h2>Reservation <img src="" alt="" /></h2>
                    {reservations.length > 0 && (
                        <p> {reservations.length}</p>
                    )}
                </div>
                <div className="TC">
                    <h2>chambres <img src="image/review.png" alt="" /></h2>
                    {Chambres.length > 0 && (
                        <p> {clients.length}</p>
                    )}
                </div>
                <div className="TC">
                    <h2>Total: <img src="" alt="" /></h2>
                    {/* Ajoutez votre logique de calcul ici */}
                      <p>{total}DH</p>
                        </div>
                </div>
                <div  style={{ display: 'flex' }}>
                <ReservationChart reservations={reservations}/>
                <RoomRevenueChart reservations={reservations}/> 
                </div>
            </div>
        </div>
        </div>
        
    );
}

