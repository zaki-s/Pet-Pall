import React, { useEffect, useState } from 'react';
import './Pets.css'; // if you have a css file

const Pets = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/Pets');
        const data = await response.json();
        setPets(data);
      } catch (error) {
        console.error('Error fetching pets:', error);
      }
    };

    fetchPets();
  }, []);

  return (
    <div className="pets-container">
      <h2 className="pets-title">Our Lovely Pets</h2>
      <div className="pets-grid">
        {pets.length > 0 ? (
          pets.map((pet) => (
            <div key={pet.id} className="pet-card">
              <img 
                src={pet.photo || 'https://via.placeholder.com/100'} 
                alt={pet.name} 
                className="pet-image" 
              />
              <h3>{pet.name}</h3>
              <p><strong>Type:</strong> {pet.type}</p>
              <p><strong>Age:</strong> {pet.age}</p>
            </div>
          ))
        ) : (
          <p>No pets found.</p>
        )}
      </div>
    </div>
  );
};

export default Pets;

