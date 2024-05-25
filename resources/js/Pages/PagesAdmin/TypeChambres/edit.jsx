import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';

function ModifierChambre({ chambre }) {
  const { data, setData, put, processing, errors, reset } = useForm({
    capacite_de_chambre: chambre.capacite_de_chambre || '',
    prix_par_nuit: chambre.prix_par_nuit || '',
    description: chambre.description || '',
    typeChambre: chambre.typeChambre || '',
    image1: null,
    image2: null,
    image3: null,
    image4: null,
  });

  useEffect(() => {
    setData({
      capacite_de_chambre: chambre.capacite_de_chambre || '',
      prix_par_nuit: chambre.prix_par_nuit || '',
      description: chambre.description || '',
      typeChambre: chambre.typeChambre || '',
      image1: null,
      image2: null,
      image3: null,
      image4: null,
    });
  }, [chambre]);

  const handleOnChange = (event) => {
    const { name, value, type, files } = event.target;
    if (type === 'file') {
      setData(name, files[0]);
    } else {
      setData(name, value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    put(route('typechambres.update', chambre.id), {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <div>
      <title>Modifier type de chambre</title>
      <form onSubmit={handleSubmit} className="form_main mt-10 ml-40" encType="multipart/form-data">
        <h2 className="heading">Modifier la chambre</h2>
        <div className="mb-4">
          <InputLabel htmlFor="capacite_de_chambre" value="Capacité de la chambre" />
          <TextInput
            id="capacite_de_chambre"
            name="capacite_de_chambre"
            type="number"
            value={data.capacite_de_chambre}
            onChange={handleOnChange}
            className="mt-1 block w-full"
            error={errors.capacite_de_chambre}
          />
          <InputError message={errors.capacite_de_chambre} className="mt-2 text-red-500" />
        </div>
        <div className="mb-4">
          <InputLabel htmlFor="prix_par_nuit" value="Prix par nuit" />
          <TextInput
            id="prix_par_nuit"
            name="prix_par_nuit"
            type="number"
            value={data.prix_par_nuit}
            onChange={handleOnChange}
            className="mt-1 block w-full"
            error={errors.prix_par_nuit}
          />
          <InputError message={errors.prix_par_nuit} className="mt-2 text-red-500" />
        </div>
        <div className="mb-4">
          <InputLabel htmlFor="description" value="Description" />
          <textarea
            id="description"
            name="description"
            value={data.description}
            onChange={handleOnChange}
            className="mt-1 block w-full"
          />
          <InputError message={errors.description} className="mt-2 text-red-500" />
        </div>
        <div className="mb-4">
          <InputLabel htmlFor="typeChambre" value="Type de chambre" />
          <select
            id="typeChambre"
            name="typeChambre"
            value={data.typeChambre}
            onChange={handleOnChange}
            className="mt-1 block w-full"
          >
            <option value="">Sélectionner un type</option>
            <option value="Chambre standard">Chambre standard</option>
            <option value="Chambre double">Chambre double</option>
            <option value="Chambre twin">Chambre twin</option>
            <option value="Suite">Suite</option>
            <option value="Chambre familiale">Chambre familiale</option>
            <option value="Chambre avec vue">Chambre avec vue</option>
            <option value="Chambre de luxe">Chambre de luxe</option>
            <option value="Chambre exécutive">Chambre exécutive</option>
          </select>
          <InputError message={errors.typeChambre} className="mt-2 text-red-500" />
        </div>
        <div className="mb-4">
          <InputLabel htmlFor="image1" value="Image 1" />
          <input
            id="image1"
            name="image1"
            type="file"
            onChange={handleOnChange}
            className="mt-1 block w-full"
          />
          <InputError message={errors.image1} className="mt-2 text-red-500" />
        </div>
        <div className="mb-4">
          <InputLabel htmlFor="image2" value="Image 2" />
          <input
            id="image2"
            name="image2"
            type="file"
            onChange={handleOnChange}
            className="mt-1 block w-full"
          />
          <InputError message={errors.image2} className="mt-2 text-red-500" />
        </div>
        <div className="mb-4">
          <InputLabel htmlFor="image3" value="Image 3" />
          <input
            id="image3"
            name="image3"
            type="file"
            onChange={handleOnChange}
            className="mt-1 block w-full"
          />
          <InputError message={errors.image3} className="mt-2 text-red-500" />
        </div>
        <div className="mb-4">
          <InputLabel htmlFor="image4" value="Image 4" />
          <input
            id="image4"
            name="image4"
            type="file"
            onChange={handleOnChange}
            className="mt-1 block w-full"
          />
          <InputError message={errors.image4} className="mt-2 text-red-500" />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={processing}
          >
            Modifier Type de chambre
          </button>
        </div>
      </form>
    </div>
  );
}

export default ModifierChambre;
