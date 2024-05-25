import React from 'react';
import { FaHeart } from 'react-icons/fa';


function Jadore({ value, onClick }) {
  return (
    <div className="col-md-12">
    
    <FaHeart
  className="heart-icon"
  size={30}
  color={value ? "#c11818" : "#e4e5e9"}
  onClick={onClick}
/>
</div>
  );
}

export default Jadore;

