// import React, { useState, useEffect, useRef } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import DetailTypeChambre from "./DetailTypeChambre";
// import CardList from "./CardList"; // Importez votre composant CardList
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// const Card = ({ id, typeChambre, description, image, prix_par_nuit, onDetailsClick }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       style={{
//         flex: "0 0 auto",
//         width: "375px",
//         height: "450px",
//         margin: "0 10px",
//         padding: "20px",
//         border: "1px solid #ccc",
//         borderRadius: "10px",
//         boxShadow: isHovered ? "0px 0px 30px rgba(0, 0, 0, 0.1)" : "none",
//         transition: "box-shadow 0.3s ease"
//       }}
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <img src={`images/${image}`} alt="Chambre" style={{ marginBottom: "10px", width: "100%", height: "200px", objectFit: "cover", borderRadius:'15px' }} />
//       <h3 style={{ fontWeight: 'bold' }}>{typeChambre}</h3>
//       <p style={{ maxHeight: "calc(100% - 250px)", overflow: "hidden", textOverflow: "ellipsis" }}>{description}</p>
//       <h3 style={{ fontWeight: 'bold' }}>{prix_par_nuit} DH</h3>
//       <p style={{ fontSize: '12px' }}>par nuit</p>
//       <button
//         style={{
//           color: "white",
//           padding: "5px 20px",
//           borderRadius: "5px",
//           cursor: "pointer",
//           backgroundColor: isHovered ? "yellowgreen" : "rgb(195, 234, 124)"
//         }}
//         onClick={() => onDetailsClick(id)}
//       >
//         details
//       </button>
//     </div>
//   );
// };

// const CardSlider = () => {
//   const [chambres, setChambres] = useState([]);
//   const [selectedCard, setSelectedCard] = useState(null);
//   const sliderRef = useRef(null);

//   useEffect(() => {
//     fetch("http://127.0.0.1:8000/typeChambres")
//       .then(response => response.json())
//       .then(data => setChambres(data))
//       .catch(error => console.error("Erreur lors de la récupération des chambres:", error));
//   }, []);

//   const handleClickPrev = () => {
//     sliderRef.current.slickPrev();
//   };

//   const handleClickNext = () => {
//     sliderRef.current.slickNext();
//   };

//   const handleDetailsClick = id => {
//     setSelectedCard(chambres.find(typeChambre => typeChambre.id === id));
//   };

//   const handleCloseModal = () => {
//     setSelectedCard(null);
//   };

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     ref: sliderRef
//   };

//   return (
//     <div style={{ margin: "25px", position: "relative" }}>
//       {selectedCard && (
//         <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 1000 }}></div>
//       )}
//       <div style={{ display: "flex",marginBottom: "10px", filter: selectedCard ? "blur(5px)" : "none" }}>
//         <h1 style={{ fontSize: "23px", fontWeight: "bold" }}>TYPES DES CHAMBRE</h1>
//         <button style={{ backgroundColor: "yellowgreen", color: "white", padding: "5px 10px", marginLeft:'800px' }} onClick={handleClickPrev}>
//           <FaArrowLeft />
//         </button>
//         <button style={{ backgroundColor: "yellowgreen", color: "white", padding: "5px 10px", marginLeft:'25px' }} onClick={handleClickNext}>
//           <FaArrowRight />
//         </button>
//       </div>
//       <Slider {...settings}>
//         {chambres.map(typeChambre => (
//           <Card
//             key={typeChambre.id}
//             id={typeChambre.id}
//             typeChambre={typeChambre.typeChambre}
//             description={typeChambre.description}
//             image={typeChambre.image1}
//             prix_par_nuit={typeChambre.prix_par_nuit}
//             onDetailsClick={handleDetailsClick}
//           />
//         ))}
//       </Slider>
//       {selectedCard && (
//         <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "white", padding: '10px 0px 0px 10px', borderRadius: "10px", boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.2)", height: "500px", width: "830px", zIndex: 1001 }}>
//           <div style={{ position: "absolute", top: "10px", right: "10px", cursor: "pointer", borderRadius: "50%", width: "30px", height: "30px", display: "flex", justifyContent: "center", alignItems: "center", border: "2px yellowgreen solid" }} onClick={handleCloseModal}>
//             X
//           </div>
//           <h2>La liste des {selectedCard.typeChambre}</h2>
//           <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxHeight: "calc(100% - 70px)", overflowY: "auto" }}>
//             <CardList selectedCard={selectedCard} />
//             {/* <DetailsChambre selectedCard={selectedCard} /> */}

//             <DetailTypeChambre selectedCard={selectedCard} />
//             <div>





//     </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CardSlider;





// CardSlider.jsx

import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import DetailTypeChambre from "./DetailTypeChambre";
import CardList from "./CardList"; // Importez votre composant CardList
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Card = ({ id, typeChambre, description, image, prix_par_nuit, onDetailsClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        flex: "0 0 auto",
        width: "375px",
        height: "450px",
        margin: "0 10px",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        boxShadow: isHovered ? "0px 0px 30px rgba(0, 0, 0, 0.1)" : "none",
        transition: "box-shadow 0.3s ease"
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={`images/${image}`} alt="Chambre" style={{ marginBottom: "10px", width: "100%", height: "200px", objectFit: "cover", borderRadius:'15px' }} />
      <h3 style={{ fontWeight: 'bold' }}>{typeChambre}</h3>
      <p style={{ maxHeight: "calc(100% - 250px)", overflow: "hidden", textOverflow: "ellipsis" }}>{description}</p>
      <h3 style={{ fontWeight: 'bold' }}>{prix_par_nuit} DH</h3>
      <p style={{ fontSize: '12px' }}>par nuit</p>
      <button
        style={{
          color: "white",
          padding: "5px 20px",
          borderRadius: "5px",
          cursor: "pointer",
          backgroundColor: isHovered ? "#A67B5B" : "#D8AE7E"
        }}
        onClick={() => onDetailsClick(id)}
      >
        details
      </button>
    </div>
  );
};

const CardSlider = () => {
  const [chambres, setChambres] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const sliderRef = useRef(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/typeChambres")
      .then(response => response.json())
      .then(data => setChambres(data))
      .catch(error => console.error("Erreur lors de la récupération des chambres:", error));
  }, []);

  const handleClickPrev = () => {
    sliderRef.current.slickPrev();
  };

  const handleClickNext = () => {
    sliderRef.current.slickNext();
  };

  const handleDetailsClick = id => {
    setSelectedCard(chambres.find(typeChambre => typeChambre.id === id));
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    ref: sliderRef
  };

  return (
    <div style={{ margin: "25px", position: "relative" }}>
      {selectedCard && (
        <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: 1000 }}></div>
      )}
      <div style={{ display: "flex",marginBottom: "10px", filter: selectedCard ? "blur(5px)" : "none" }}>
        <h1 style={{ fontSize: "23px", fontWeight: "bold" }}>TYPES DES CHAMBRE</h1>
        <button style={{ backgroundColor: "yellowgreen", color: "white", padding: "5px 10px", marginLeft:'800px' }} onClick={handleClickPrev}>
          <FaArrowLeft />
        </button>
        <button style={{ backgroundColor: "yellowgreen", color: "white", padding: "5px 10px", marginLeft:'25px' }} onClick={handleClickNext}>
          <FaArrowRight />
        </button>
      </div>
      <Slider {...settings}>
        {chambres.map(typeChambre => (
          <Card
            key={typeChambre.id}
            id={typeChambre.id}
            typeChambre={typeChambre.typeChambre}
            description={typeChambre.description}
            image={typeChambre.image1}
            prix_par_nuit={typeChambre.prix_par_nuit}
            onDetailsClick={handleDetailsClick}
          />
        ))}
      </Slider>
      {selectedCard && (
        <div style={{ position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)", backgroundColor: "white", padding: '10px 0px 0px 10px', borderRadius: "10px", boxShadow: "0px 10px 50px rgba(0, 0, 0, 0.2)", height: "500px", width: "830px", zIndex: 1001, }}>
          <div style={{ position: "absolute", top: "10px", right: "10px", cursor: "pointer", borderRadius: "50%", width: "30px", height: "30px", display: "flex", justifyContent: "center", alignItems: "center", border: "2px #A67B5B solid" }} onClick={handleCloseModal}>
            X
          </div>
          <h2>La liste des {selectedCard.typeChambre}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px", maxHeight: "calc(100% - 70px)", overflowY: "auto" }}>
             <CardList selectedCard={selectedCard} />
             <DetailTypeChambre selectedCard={selectedCard} />


          </div>
          <button style={{ backgroundColor: "#A67B5B", color: "white", padding: "5px 10px", marginLeft:'700px' }}>
            Reserver</button>

            {/* <button style={{ backgroundColor: "#A67B5B", color: "white", padding: "5px 10px", marginLeft:'700px' }}>
          <Link href={route('MyPages.FormReservation')}>Reserver</Link>
          </button> */}
        </div>
      )}
    </div>
  );
};

export default CardSlider;

