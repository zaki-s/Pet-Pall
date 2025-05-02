import React, { useEffect, useState } from "react";
import "./PetsHub.css";

const PetsHub = () => {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/pets");
        const data = await response.json();
        setPets(data);
      } catch (error) {
        console.error("Error fetching pets:", error);
      }
    };

    fetchPets();
  }, []);

  return (
    <div className="petshub-container">
      <h1>Adopt or Buy a New Friend 🐕🐈</h1>
      <div className="pets-grid">
        {pets.map((pet) => (
          <div key={pet.id} className="pet-card">
            <img 
              src={pet.photo || "/default-pet.jpg"} 
              alt={pet.name} 
              className="pet-image"
            />
            <h2>{pet.name}</h2>
            <p>Type: {pet.type}</p>
            <p>Age: {pet.age} years</p>
            <button className="adopt-btn">Adopt / Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetsHub;


