import React, { useEffect, useState } from "react";
import "./PetsHub.css";

const PetsHub = () => {
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
    <div className="petshub-container">
      <h1>Adopt or Buy a New Friend 🐕🐈</h1>
      <div className="pets-grid">
        {pets.map((pet) => (
          <div key={pet.id} className="pet-card">
            <img src={pet.image_url || "/default-pet.jpg"} alt={pet.name} />
            <h2>{pet.name}</h2>
            <p>Breed: {pet.breed}</p>
            <p>Age: {pet.age} years</p>
            <p>Price: ${pet.price || "Contact for adoption"}</p>
            <button className="adopt-btn">Adopt / Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetsHub;
