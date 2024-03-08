import React from 'react'
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
function ajouterChambre() {
    const { data, setData, post, processing, errors, reset } = useForm({
        numero: '',
        nom_chambre: '',
        numero_telephone: '',
        prix_chambre: '',
        description_chambre: '',
        image1: '',
        image2: '',
        image3: '',
        image4: '',
        disponible: '',
        typeChambre: '',
      });
      const handleOnChange = (event) => {
        setData(
          event.target.name,
          event.target.type === 'checkbox' ? event.target.checked : event.target.value
        );
      };
  return (
    <div>
      <form action="">
      <div className="mb-4">
            <InputLabel htmlFor="numero" value="Name" />
            <TextInput
              id="numero"
              name="numero"
              value={data.numero}
              onChange={handleOnChange}
              required
            />
            <InputError message={errors.numero} className="mt-2 text-red-500" />
          </div>
          <div className="mb-4">
            <InputLabel htmlFor="nom_chambre" value="nom_chambre" />
            <TextInput
              id="nom_chambre"
              name="nom_chambre"
              value={data.nom_chambre}
              onChange={handleOnChange}
              required
            />
            <InputError message={errors.nom_chambre} className="mt-2 text-red-500" />
          </div>
          <div className="mb-4">
            <InputLabel htmlFor="description_chambre" value="description_chambre" />
            <TextInput
              id="description_chambre"
              name="description_chambre"
              value={data.description_chambre}
              onChange={handleOnChange}
              required
            />
            <InputError message={errors.description_chambre} className="mt-2 text-red-500" />
          </div>
          <div className="mb-4">
            <InputLabel htmlFor="prix_chambre" value="prix_chambre" />
            <TextInput
              id="prix_chambre"
              name="prix_chambre"
              value={data.prix_chambre}
              onChange={handleOnChange}
              required
            />
            <InputError message={errors.prix_chambre} className="mt-2 text-red-500" />
          </div>
          <div className="mb-4">
            <InputLabel htmlFor="image1" value="image1" />
            <TextInput
            type="file"
              id="image1"
              name="image1"
              accept="image/*"
              value={data.image1}
              onChange={handleOnChange}
              required
            />
            <InputError message={errors.image1} className="mt-2 text-red-500" />
          </div>
          <div className="mb-4">
            <InputLabel htmlFor="image2" value="image2" />
            <TextInput
            type="file"
              id="image2"
              accept="image/*"
              name="image2"
              value={data.image2}
              onChange={handleOnChange}
              required
            />
            <InputError message={errors.image2} className="mt-2 text-red-500" />
          </div>
          <div className="mb-4">
            <InputLabel htmlFor="image3" value="image3" />
            <TextInput
            type="file"
              id="image3"
              name="image3"
              accept="image/*"
              value={data.image3}
              onChange={handleOnChange}
              required
            />
            <InputError message={errors.image3} className="mt-2 text-red-500" />
          </div>
          <div className="mb-4">
            <InputLabel htmlFor="image4" value="image4" />
            <TextInput
            type="file"
              id="image4"
              name="image4"
              accept="image/*"
              value={data.image4}
              onChange={handleOnChange}
              required
            />
            <InputError message={errors.image4} className="mt-2 text-red-500" />
          </div>
          <div>
            <label htmlFor="typeChambre">choisir le type de chambre</label>
            <select name="typeChambre" id="typeChambre">
                <option value="0">----choisir-----</option>
                 <option value="standard">Standart</option>
                <option value="avecVue"> avec vue</option>
                <option value="executive"> executive</option>
                <option value="familaile"> familiale</option>
                <option value="luxe">luxe</option>
                <option value="twin">twin</option>
                <option value="double">double</option>
                
            </select>
          </div>

      </form>
    </div>
  )
}

export default ajouterChambre
