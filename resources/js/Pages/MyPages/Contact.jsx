import React from "react";
import './cont.css';

const events = [
  {
    id: 2,
    name: "Dîner gastronomique",
    description: "Un dîner spécial préparé par notre chef étoilé.",
    date: "22 Juin 2024",
    imgUrl: "image/food2.jpg"
  },
  {
    id: 3,
    name: "Cours de yoga",
    description: "Des cours de yoga au lever du soleil sur la plage.",
    date: "Tous les matins de Juillet",
    imgUrl: "images/yoga.jpg"
  },
  {
    id: 4,
    name: "Atelier de cuisine",
    description: "Apprenez à cuisiner des plats locaux avec notre chef.",
    date: "5 Juillet 2024",
    imgUrl: "image/food1.jpg"
  },
  {
    id: 5,
    name: "Soirée cinéma en plein air",
    description: "Profitez de films classiques sous les étoiles.",
    date: "12 Juillet 2024",
    imgUrl: "images/im4.jpg"
  },
  {
    id: 6,
    name: "Tournoi de tennis",
    description: "Participez à notre tournoi de tennis annuel.",
    date: "18 Juillet 2024",
    imgUrl: "images/im1.jpg"
  },
  {
    id: 7,
    name: "Exposition d'art",
    description: "Découvrez des œuvres d'artistes locaux et internationaux.",
    date: "25 Juillet 2024",
    imgUrl: "images/im2.jpg"
  },
  {
    id: 8,
    name: "Randonnée guidée",
    description: "Explorez les environs avec un guide expérimenté.",
    date: "Tous les samedis de Juillet et Août",
    imgUrl: "images/im3.jpg"
  }
];

const Contact = () => {
  return (
    <div>
      <div class="gallery">
  <img src="https://picsum.photos/id/1040/300/300" alt="a house on a mountain"/>
  <img src="https://picsum.photos/id/106/300/300" alt="sime pink flowersn"/>
  <img src="https://picsum.photos/id/136/300/300" alt="big rocks with some trees"/>
  <img src="https://picsum.photos/id/1039/300/300" alt="a waterfall, a lot of tree and a great view from the sky"/>
  <img src="https://picsum.photos/id/110/300/300" alt="a cool landscape"/>
  <img src="https://picsum.photos/id/1047/300/300" alt="inside a town between two big buildings"/>
  <img src="https://picsum.photos/id/1057/300/300" alt="a great view of the sea above the mountain"/>
</div>
    </div>
  );
}

export default Contact;
