import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function AfficherChambres({ chambres }) {
  console.log(chambres);
  
  if (chambres.length === 0) {
    return (
      <div className="mt-40 ml-20">
        <h1>Liste des chambres</h1>
        <p>Aucune chambre n'est disponible pour le moment.</p>
      </div>
    );
  }

  return (
    <div className="mt-40 ml-20">
      <h1>Liste des chambres</h1>
       
      <table>
        <thead>
          <tr>
            <th>Numéro</th>
            <th>Nom</th>
            <th>Prix</th>
            <th>Disponible</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {chambres.map((chambre) => (
            <tr key={chambre.id}>
              <td>{chambre.numero}</td>
              <td>{chambre.nom_chambre}</td>
              <td>{chambre.prix_chambre}</td>
              <td>{chambre.disponible ? 'Oui' : 'Non'}</td>
              <td>
                <Link href={route('chambres.edit', chambre.id)}>Modifier</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table> 
    </div>
  );
}