import React from 'react';
import InputLabel from '@/Components/InputLabel';
import InputError from '@/Components/InputError';

function Texte({ value, onChange, errors }) {
  return (
    <div className="col-md-10">
      <h4 className='text-yellow-600'>Ajouter un commentaire</h4>
      <InputLabel htmlFor="comment" value="Comment" />
      <textarea
        name="texte"
        id="comment"
        className="form-control"
        value={value}
        onChange={onChange}
      />
      {errors && <InputError>{errors}</InputError>}
    </div>
  );
}

export default Texte;

