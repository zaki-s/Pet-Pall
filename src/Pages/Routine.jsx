import React, { useEffect, useState } from "react";

const Routine = () => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    const fetchRoutines = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/routines");
        const data = await response.json();
        setRoutines(data);
      } catch (error) {
        console.error("Error fetching routines:", error);
      }
    };

    fetchRoutines();
  }, []);

  return (
    <div className="routine-container">
      <h1>Pet Routines</h1>
      <div className="routine-list">
        {routines.map((routine) => (
          <div key={routine.id} className="routine-card">
            <h2>{routine.activity}</h2>
            <p>Time: {routine.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Routine; 
