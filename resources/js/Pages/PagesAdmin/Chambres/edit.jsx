import React, { useState } from 'react';
import { useForm } from '@inertiajs/inertia-react';
import route from 'ziggy';

const EditChambre = ({ chambre }) => {
  const { data, setData, put, processing, errors } = useForm({
    numero: chambre.numero,
    nom_chambre: chambre.nom_chambre,
    prix_chambre: chambre.prix_chambre,
    description_chambre: chambre.description_chambre,
    image1: chambre.image1,
    image2: chambre.image2,
    image3: chambre.image3,
    image4: chambre.image4,
    disponible: chambre.disponible,
    typeChambre: chambre.typeChambre,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    put(route('chambres.update', chambre.id), data);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="numero">Numéro</label>
        <input
          type="text"
          id="numero"
          value={data.numero}
          onChange={(e) => setData('numero', e.target.value)}
        />
        {errors.numero && (
          <div className="error">{errors.numero[0]}</div>
        )}
      </div>

      <div>
        <label htmlFor="nom_chambre">Nom de la chambre</label>
        <input
          type="text"
          id="nom_chambre"
          value={data.nom_chambre}
          onChange={(e) => setData('nom_chambre', e.target.value)}
        />
        {errors.nom_chambre && (
          <div className="error">{errors.nom_chambre[0]}</div>
        )}
      </div>

      <div>
        <label htmlFor="prix_chambre">Prix de la chambre</label>
        <input
          type="text"
          id="prix_chambre"
          value={data.prix_chambre}
          onChange={(e) => setData('prix_chambre', e.target.value)}
        />
        {errors.prix_chambre && (
          <div className="error">{errors.prix_chambre[0]}</div>
        )}
      </div>

      <div>
        <label htmlFor="description_chambre">Description de la chambre</label>
        <textarea
          id="description_chambre"
          value={data.description_chambre}
          onChange={(e) => setData('description_chambre', e.target.value)}
        />
        {errors.description_chambre && (
          <div className="error">{errors.description_chambre[0]}</div>
        )}
      </div>

      <div>
        <label htmlFor="image1">Image 1</label>
        <input
          type="text"
          id="image1"
          value={data.image1}
          onChange={(e) => setData('image1', e.target.value)}
        />
        {errors.image1 && (
          <div className="error">{errors.image1[0]}</div>
        )}
      </div>

      <div>
        <label htmlFor="image2">Image 2</label>
        <input
          type="text"
          id="image2"
          value={data.image2}
          onChange={(e) => setData('image2', e.target.value)}
        />
        {errors.image2 && (
          <div className="error">{errors.image2[0]}</div>
        )}
      </div>

      <div>
        <label htmlFor="image3">Image 3</label>
        <input
          type="text"
          id="image3"
          value={data.image3}
          onChange={(e) => setData('image3', e.target.value)}
        />
        {errors.image3 && (
          <div className="error">{errors.image3[0]}</div>
        )}
      </div>

      <div>
        <label htmlFor="image4">Image 4</label>
        <input
          type="text"
          id="image4"
          value={data.image4}
          onChange={(e) => setData('image4', e.target.value)}
        />
        {errors.image4 && (
          <div className="error">{errors.image4[0]}</div>
        )}
      </div>

      <div>
        <label htmlFor="disponible">Disponible</label>
        <input
          type="checkbox"
          id="disponible"
          checked={data.disponible}
          onChange={(e) => setData('disponible', e.target.checked)}
        />
        {errors.disponible && (
          <div className="error">{errors.disponible[0]}</div>
        )}
      </div>

      <div>
        <label htmlFor="typeChambre">Type de chambre</label>
        <select
          id="typeChambre"
          value={data.typeChambre}
          onChange={(e) => setData('typeChambre', e.target.value)}
        >
          <option value="simple">Simple</option>
          <option value="double">Double</option>
          <option value="suite">Suite</option>
        </select>
        {errors.typeChambre && (
          <div className="error">{errors.typeChambre[0]}</div>
        )}
      </div>

      <button type="submit" disabled={processing}>
        {processing ? 'En cours...' : 'Enregistrer'}
      </button>
    </form>
  );
};

export default EditChambre;