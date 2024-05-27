import React, { useState, useEffect } from 'react';
// import Navbar from '@/Layouts/Navbar';
import Nnavbar from '@/Layouts/Nnavbar';
const EventsList = () => {

  const [selectedEvent, setSelectedEvent] = useState(null);



  const events = [
    {
      images: 'images/im4.jpg',
      title: "Happy Hour",
      description: "Offrez des boissons et des apéritifs à prix réduit dans le bar de l'hôtel.",
      category: "Événements réguliers",
    },
    {
      images: 'images/im3.jpg',
      title: "Brunch du Dimanche",
      description: "Organisez un brunch spécial chaque dimanche avec un menu varié et des boissons.",
      category: "Événements réguliers",
    },
    {
      images: 'images/im2.jpg',
      title: "Soirée Cinéma en Plein Air",
      description: "Projetez des films dans un espace extérieur de l'hôtel pour une expérience cinématographique unique.",
      category: "Événements réguliers",
    },
    {
      images: 'images/yoga.jpg',
      title: "Cours de Yoga",
      description: "Proposez des cours de yoga matinal pour aider les clients à se détendre et à rester en forme pendant leur séjour.",
      category: "Événements réguliers",
    },
    {
      images: 'images/eid.jpeg',
      title: "Fête marocaine de l'Aïd al-Fitr",
      description: "Célébrez l'Aïd al-Fitr avec des repas traditionnels, des prières en famille et des échanges de cadeaux.",
      category: "Événements culturels",
    },
    {
      images: 'images/im1.jpg',
      title: "Événement de Mariage",
      description: "Planifiez et organisez des mariages inoubliables dans notre hôtel, avec des forfaits complets sur mesure.",
      category: "Événements spéciaux",
    }
  ];

  const handleEventClick = (index) => {
    setSelectedEvent(index === selectedEvent ? null : index);
  };

  return (
    <div>
      <Nnavbar/>
      <div className="container mx-auto p-6">
        <div className="relative">
          <img src="images/events.jpg" alt="" className="w-full" style={{ height: '400px' }} />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black bg-opacity-50">
            <h1 className="text-4xl font-bold mb-4">Bonjour et bienvenue à Cuzy Suite !</h1>
            <p className="text-lg text-center px-4">Nous sommes ravis de vous accueillir dans notre hôtel exclusif où le confort, le luxe et le service exceptionnel sont notre priorité.Que vous soyez ici pour affaires ou pour le plaisir, nous nous engageons à rendre votre séjour inoubliable.</p>
          </div>
        </div>
        <h1 className="text-3xl font-bold mb-6 text-center"></h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              description={event.description}
              category={event.category}
              images={event.images}
              onClick={() => handleEventClick(index)}
            />
          ))}
        </div>
        {selectedEvent !== null && (
          <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-10">
            <img src={events[selectedEvent].images} alt={events[selectedEvent].title} className="max-w-3xl max-h-full" />
            <button onClick={() => setSelectedEvent(null)} className="absolute top-2 right-2 text-white hover:text-red-500 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const EventCard = ({ title, description, category, images, onClick }) => {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="max-w-xs mx-auto bg-white shadow-md rounded-lg overflow-hidden mb-6 transform hover:scale-105 transition-transform duration-300 ease-in-out" onClick={onClick}>
      <img src={images} alt={title} className="w-full h-32 object-cover object-center" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-2">{description}</p>
        <span className="inline-block px-3 py-1 text-sm font-semibold text-white bg-blue-500 rounded-full">
          {category}
        </span>
        {/* <button onClick={toggleLike} className={`mt-4 px-4 py-2 bg-gray-200 text-gray-800 rounded-full flex items-center ${liked ? 'bg-red-500 text-white' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
          </svg>
          J'adore
        </button> */}
      </div>
    </div>
  );
};

export default EventsList;
