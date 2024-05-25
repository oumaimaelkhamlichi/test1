// import React, { useState, useEffect } from 'react';
// import InputError from '@/Components/InputError';
// import InputLabel from '@/Components/InputLabel';
// import TextInput from '@/Components/TextInput';
// import { Head, Link, useForm } from '@inertiajs/react';
// import Swal from 'sweetalert2';

// function AjouterReserv({ typeChambres }) {
//   const { data, setData, post, processing, errors, reset } = useForm({
//     date_debut: '',
//     date_fin: '',
//     statu: '',
//     date_reservation: '',
//     nbr_personne: '',
//     nbr_children: '',
//     nbr_nuit: '',
//     type_chambre_id: '',
//     id_user: '',
//   });

//   const handleOnChange = (event) => {
//     const { name, value } = event.target;
//     setData(name, value);
//   };

//   useEffect(() => {
//     if (data.date_debut && data.date_fin) {
//       const date1 = new Date(data.date_debut);
//       const date2 = new Date(data.date_fin);
//       const timeDiff = date2 - date1;
//       const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
//       setData('nbr_nuit', dayDiff);
//     }
//   }, [data.date_debut, data.date_fin]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     post(route('reservation.store'), {
//       onSuccess: (response) => {
//         Swal.fire({
//           icon: 'success',
//           title: 'Success',
//           text: `Reservation has been successfully added. Room ID: ${response.props.chambre_id}, Room Number: ${response.props.chambre_numero}`
//         }).then(() => {
//           reset();
//         });
//       },
//       onError: (error) => {
//         Swal.fire({
//           icon: 'error',
//           title: 'Error',
//           text: 'Failed to add reservation. Please try again later.'
//         });
//       }
//     });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div className="inputColumn">
//           <div className="inputContainer">
//             <InputLabel htmlFor="date_debut" value="Date début" />
//             <TextInput
//               id="date_debut"
//               name="date_debut"
//               type="date"
//               value={data.date_debut}
//               onChange={handleOnChange}
//               error={errors.date_debut}
//             />
//             <InputError message={errors.date_debut} />
//           </div>
//           <div className="inputContainer">
//             <InputLabel htmlFor="date_fin" value="Date fin" />
//             <TextInput
//               id="date_fin"
//               name="date_fin"
//               type="date"
//               value={data.date_fin}
//               onChange={handleOnChange}
//               error={errors.date_fin}
//             />
//             <InputError message={errors.date_fin} />
//           </div>
//           <div className="inputContainer">
//             <InputLabel htmlFor="date_reservation" value="Date réservation" />
//             <TextInput
//               id="date_reservation"
//               name="date_reservation"
//               type="date"
//               value={data.date_reservation}
//               onChange={handleOnChange}
//               error={errors.date_reservation}
//             />
//             <InputError message={errors.date_reservation} />
//           </div>
//         </div>
//         <div className="inputColumn">
//           <div className="inputContainer">
//             <InputLabel htmlFor="nbr_personne" value="Nombre de personnes" />
//             <TextInput
//               id="nbr_personne"
//               name="nbr_personne"
//               type="number"
//               value={data.nbr_personne}
//               onChange={handleOnChange}
//               error={errors.nbr_personne}
//             />
//             <InputError message={errors.nbr_personne} />
//           </div>
//           <div className="inputContainer">
//             <InputLabel htmlFor="nbr_children" value="Nombre d'enfants" />
//             <TextInput
//               id="nbr_children"
//               name="nbr_children"
//               type="number"
//               value={data.nbr_children}
//               onChange={handleOnChange}
//               error={errors.nbr_children}
//             />
//             <InputError message={errors.nbr_children} />
//           </div>
//           <div className="inputContainer">
//             <InputLabel htmlFor="nbr_nuit" value="Nombre de nuits" />
//             <TextInput
//               id="nbr_nuit"
//               name="nbr_nuit"
//               type="number"
//               value={data.nbr_nuit}
//               onChange={handleOnChange}
//               error={errors.nbr_nuit}
//             />
//             <InputError message={errors.nbr_nuit} />
//           </div>
//           <div className="inputContainer">
//             <InputLabel htmlFor="type_chambre_id" value="Type de Chambre" />
//             <select
//               id="type_chambre_id"
//               name="type_chambre_id"
//               value={data.type_chambre_id}
//               onChange={handleOnChange}
//               className="form-control"
//               error={errors.type_chambre_id}
//             >
//               <option value="">Select Type de Chambre</option>
//               {typeChambres.map((typeChambre) => (
//                 <option key={typeChambre.id} value={typeChambre.id}>
//                   {typeChambre.typeChambre}
//                 </option>
//               ))}
//             </select>
//             <InputError message={errors.type_chambre_id} />
//           </div>
//           <div className="inputContainer">
//             <InputLabel htmlFor="id_user" value="ID Utilisateur" />
//             <TextInput
//               id="id_user"
//               name="id_user"
//               type="text"
//               value={data.id_user}
//               onChange={handleOnChange}
//               error={errors.id_user}
//             />
//             <InputError message={errors.id_user} />
//           </div>
//         </div>
//         <button type="submit" disabled={processing}>Ajouter</button>
//       </form>
//     </div>
//   );
// }

// export default AjouterReserv;



import React, { useState, useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import Swal from 'sweetalert2';

function AjouterReserv({ typeChambres }) {
  const { data, setData, post, processing, errors, reset } = useForm({
    date_debut: '',
    date_fin: '',
    statu: '',
    date_reservation: '',
    nbr_personne: '',
    nbr_children: '',
    nbr_nuit: '',
    type_chambre_id: '',
    id_user: '',
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setData(name, value);
  };

  useEffect(() => {
    if (data.date_debut && data.date_fin) {
      const date1 = new Date(data.date_debut);
      const date2 = new Date(data.date_fin);
      const timeDiff = date2 - date1;
      const dayDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
      setData('nbr_nuit', dayDiff);
    }
  }, [data.date_debut, data.date_fin]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    post(route('reservation.store'), {
      onSuccess: (response) => {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: `Reservation has been successfully added. Room ID: ${response.props.chambre_id}, Room Number: ${response.props.chambre_numero}`
        }).then(() => {
          reset();
        });
      },
      onError: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Failed to add reservation. Please try again later.'
        });
      }
    });
  };

  return (
    <div>
      {typeChambres && typeChambres.length > 0 && (
         <form onSubmit={handleSubmit}>
         <div className="inputColumn">
           <div className="inputContainer">
             <InputLabel htmlFor="date_debut" value="Date début" />
             <TextInput
               id="date_debut"
               name="date_debut"
               type="date"
               value={data.date_debut}
               onChange={handleOnChange}
               error={errors.date_debut}
             />
             <InputError message={errors.date_debut} />
           </div>
           <div className="inputContainer">
             <InputLabel htmlFor="date_fin" value="Date fin" />
             <TextInput
               id="date_fin"
               name="date_fin"
               type="date"
               value={data.date_fin}
               onChange={handleOnChange}
               error={errors.date_fin}
             />
             <InputError message={errors.date_fin} />
           </div>
           <div className="inputContainer">
             <InputLabel htmlFor="date_reservation" value="Date réservation" />
             <TextInput
               id="date_reservation"
               name="date_reservation"
               type="date"
               value={data.date_reservation}
               onChange={handleOnChange}
               error={errors.date_reservation}
             />
             <InputError message={errors.date_reservation} />
           </div>
         </div>
         <div className="inputColumn">
           <div className="inputContainer">
             <InputLabel htmlFor="nbr_personne" value="Nombre de personnes" />
             <TextInput
               id="nbr_personne"
               name="nbr_personne"
               type="number"
               value={data.nbr_personne}
               onChange={handleOnChange}
               error={errors.nbr_personne}
             />
             <InputError message={errors.nbr_personne} />
           </div>
           <div className="inputContainer">
             <InputLabel htmlFor="nbr_children" value="Nombre d'enfants" />
             <TextInput
               id="nbr_children"
               name="nbr_children"
               type="number"
               value={data.nbr_children}
               onChange={handleOnChange}
               error={errors.nbr_children}
             />
             <InputError message={errors.nbr_children} />
           </div>
           <div className="inputContainer">
             <InputLabel htmlFor="nbr_nuit" value="Nombre de nuits" />
             <TextInput
               id="nbr_nuit"
               name="nbr_nuit"
               type="number"
               value={data.nbr_nuit}
               onChange={handleOnChange}
               error={errors.nbr_nuit}
             />
             <InputError message={errors.nbr_nuit} />
           </div>
           <div className="inputContainer">
             <InputLabel htmlFor="type_chambre_id" value="Type de Chambre" />
             <select
               id="type_chambre_id"
               name="type_chambre_id"
               value={data.type_chambre_id}
               onChange={handleOnChange}
               className="form-control"
               error={errors.type_chambre_id}
             >
               <option value="">Select Type de Chambre</option>
               {typeChambres.map((typeChambre) => (
                 <option key={typeChambre.id} value={typeChambre.id}>
                   {typeChambre.typeChambre}
                 </option>
               ))}
             </select>
             <InputError message={errors.type_chambre_id} />
           </div>
           <div className="inputContainer">
             <InputLabel htmlFor="id_user" value="ID Utilisateur" />
             <TextInput
               id="id_user"
               name="id_user"
               type="text"
               value={data.id_user}
               onChange={handleOnChange}
               error={errors.id_user}
             />
             <InputError message={errors.id_user} />
           </div>
         </div>
         <button type="submit" disabled={processing}>Ajouter</button>
       </form>
      )}
    </div>
  );
}

export default AjouterReserv;

