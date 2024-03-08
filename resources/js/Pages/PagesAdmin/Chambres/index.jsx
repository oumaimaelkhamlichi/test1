import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const Index = ({ chambres }) => {
  return (
    <div>
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
};

export default Index;