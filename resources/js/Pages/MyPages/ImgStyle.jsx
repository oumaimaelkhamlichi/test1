import React from 'react';
import './img.css';

const Event = () => {
  return (
    <div className="gallery">
      
      <span style={{ '--i': 1 }}>
        <img src="image/hot8.jpeg" alt="" />
      </span>
      <span style={{ '--i': 2 }}>
        <img src="image/hot1.jpeg" alt="" />
      </span>
      <span style={{ '--i': 3 }}>
        <img src="image/hot2.jpeg" alt="" />
      </span>
      <span style={{ '--i': 4 }}>
        <img src="image/hot1.jpeg" alt="" />
      </span>
      <span style={{ '--i': 5 }}>
        <img src="image/hot4.jpeg" alt="" />
      </span>
      <span style={{ '--i': 6 }}>
        <img src="image/hot5.jpeg" alt="" />
      </span>
      <span style={{ '--i': 7 }}>
        <img src="image/hot6.jpg" alt="" />
      </span>
      <span style={{ '--i': 8 }}>
        <img src="image/hot7.webp" alt="" />
      </span>
    </div>
  );
};

export default Event;
