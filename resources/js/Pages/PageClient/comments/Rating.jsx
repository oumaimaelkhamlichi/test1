import { FaStar } from 'react-icons/fa';
import React from 'react';
import './RatingStars.css';
export default function Rating(){


const [rating, setRating] = useState(null); I
return (
<div className="App">
{[...Array(5)].map((star, index) => { const currentRating = index + 1;
return(
<label>
<input
type="radio"
name="rating"
value={currentRating}
onClick={()=> setRating (currentRating)}
/>

<FaStar
className='star'
size={50}
color={currentRating <= (hover || rating) ? "#ffc107": "#e4e5e9"}
onMouseEnter={() => setHover (currentRating)}
onMouseLeave={() => setHover (null)}
/>
</label>
);
})}
</div>
)
}