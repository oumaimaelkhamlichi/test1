import React from 'react';
import { FaStar } from 'react-icons/fa';
import InputError from '@/Components/InputError';

function Rating({ value, onClick, errors }) {
  return (
    <div className="col-md-12">
      <div className="rating-container">
        {[...Array(5)].map((_, index) => {
          const currentRating = index + 1;
          return (
            <label key={index} className="star-label">
              <input
                type="radio"
                name="rating"
                value={currentRating}
                onClick={() => onClick(currentRating)}
                className="star-input"
              />
              <FaStar
                className='star'
                size={25}
                color={currentRating <= value ? "#ffc107" : "#e4e5e9"}
              />
            </label>
          );
        })}
        {errors && <InputError>{errors}</InputError>}
      </div>
    </div>
  );
}

export default Rating;


