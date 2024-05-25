import React, { useState } from 'react';

export default function ChambreServiceComponent({ typesChambres, serviceType }) {
  const [selectedType, setSelectedType] = useState(null);

  const handleShowServices = (typeId) => {
    setSelectedType(typeId);
  };

  return (
    <div>
      <h1>Liste des types de chambre</h1>
      {typesChambres.map((typeChambre) => (
        <Card key={typeChambre.id} style={{ width: '18rem', margin: '10px' }}>
          <Card.Body>
            <Card.Title>{typeChambre.typeChambre}</Card.Title>
            <Card.Text>{typeChambre.description}</Card.Text>
            <Button onClick={() => handleShowServices(typeChambre.id)}>Afficher les services</Button>
          </Card.Body>
        </Card>
      ))}

      {selectedType && (
        <div>
          <h2>Services associés</h2>
          <ul>
            {serviceType
              .filter((service) => service.type_chambre_id === selectedType)
              .map((service) => (
                <li key={service.id}>
                  {/* Affichez ici les détails du service */}
                  {service.vuePlage}, {service.wifi}, {service.nbrlit}, ...
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
}
