import React, { useEffect, useState } from 'react';

import axios from 'axios';


const Routine = () => {

  const [routines, setRoutines] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);


  useEffect(() => {

    const fetchRoutines = async () => {

      setLoading(true);  // Ensures loading is set at the start of fetch

      try {

        const response = await axios.get('http://localhost:5000/api/routines'); // Replace with your API endpoint

        setRoutines(response.data);

      } catch (err) {

        setError(err.response?.data?.message || err.message); // More robust error handling

      } finally {

        setLoading(false);

      }

    };


    fetchRoutines();

  }, []);


  if (loading) {

    return <div>Loading routines...</div>;

  }


  if (error) {

    return <div>Error: {error}</div>;

  }


  return (

    <div>

      <h1>Your Routines</h1>

      <ul>

        {routines.map((routine) => (

          <li key={routine.id}>{routine.name}</li> // Assuming 'id' and 'name' are part of the routine object

        ))}

      </ul>

    </div>

  );

};


export default Routine;

