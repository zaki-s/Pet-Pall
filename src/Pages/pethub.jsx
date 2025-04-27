import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PetHub = () => {
  const [pets, setPets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/pets'); // Replace with your API endpoint
        setPets(response.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPets();
  }, []);

  if (loading) return <div>Loading pets...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Pet Hub</h2>
      <ul className="space-y-2">
        {pets.map(pet => (
          <li key={pet.id} className="p-4 border rounded shadow">
            <h3 className="text-xl font-semibold">{pet.name}</h3>
            <p>Type: {pet.type}</p>
            <p>Age: {pet.age}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PetHub;
