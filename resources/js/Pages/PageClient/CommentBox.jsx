import React, { useState } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import { FaStar, FaEdit, FaTrashAlt, FaHeart } from 'react-icons/fa';
import { useForm } from '@inertiajs/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './RatingStars.css'; // You can create a CSS file to customize the style

function CommentBox({ comment, onDelete }) {
  // Ensure comment is defined and fallback to an empty object if it's not
  const initialData = comment || { texte: '', jadore: false, rating: 0 };
  const [rating, setRating] = useState(initialData.rating);
  const [hover, setHover] = useState(null);
  const { data, setData, post, processing, errors } = useForm({
    texte: initialData.texte,
    jadore: initialData.jadore,
    rating: initialData.rating
  });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setData(name, value);
  };

  const handleJadoreClick = () => {
    setData('jadore', !data.jadore); // Toggle jadore value on click
  };

  const handleStarClick = (currentRating) => {
    setRating(currentRating); // Update rating value on click
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your submission logic here
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="comment-form">
        <div className="row">
          <div className="col-md-10">
            <InputLabel htmlFor="comment" value="Comment" />
            <textarea
              name="texte"
              id="comment"
              className="form-control"
              value={data.texte}
              onChange={handleOnChange}
            />
            {errors.texte && <InputError>{errors.texte}</InputError>}
          </div>
          <div className="col-md-2">
            <div className="button-group">
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
                onClick={() => setData('texte', data.texte)}
              >
                <FaEdit />
              </button>
              <button
                type="button"
                className="btn btn-sm btn-outline-danger"
                onClick={onDelete} // Pass onDelete function directly
              >
                <FaTrashAlt />
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <InputLabel htmlFor="rating" value="Rating" />
            <div className="App">
              {[...Array(5)].map((_, index) => {
                const currentRating = index + 1;
                return (
                  <label key={index}>
                    <input
                      type="radio"
                      name="rating"
                      value={currentRating}
                      onClick={() => handleStarClick(currentRating)} // Call handleStarClick on click
                    />
                    <FaStar
                      className='star'
                      size={30}
                      color={currentRating <= rating ? "#ffc107" : "#e4e5e9"} // Update based on rating, not hover
                    />
                  </label>
                );
              })}
              {errors.rating && <InputError>{errors.rating}</InputError>}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <InputLabel htmlFor="like" value="Like" />
            <FaHeart
              className='heart' // Add a class for styling if needed
              size={30}
              color={data.jadore ? "#ff0000" : "#e4e5e9"} // Update based on jadore value
              onClick={handleJadoreClick} // Call handleJadoreClick on click
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={processing}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CommentBox;


