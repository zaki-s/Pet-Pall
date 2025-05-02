import React, { useEffect, useState } from "react";
import "./Pet.css"; // <-- Corrected here

const Pet = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/Pets");
        const data = await response.json();
        setPets(data);
      } catch (error) {
        console.error("Error fetching pets:", error);
      }
    };

    fetchPets();
  }, []);

  return (
    <div className="pet-container">
      <h1>Available Pets</h1>
      <div className="pet-grid">
        {pets.map((pet) => (
          <div key={pet.id} className="pet-card">
            <h2>{pet.name}</h2>
            <p>Breed: {pet.breed}</p>
            <p>Age: {pet.age} years</p>
            {pet.photo && <img src={pet.photo} alt={pet.name} className="pet-photo" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pet;
