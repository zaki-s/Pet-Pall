import React, { useEffect, useState } from "react";
import "./Routine.css";

const Routine = () => {
  const [routines, setRoutines] = useState([]);

  useEffect(() => {
    const fetchRoutines = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/routines");
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
      <h1 className="routine-title">Daily Pet Care Routines 🐾</h1>
      <div className="routine-grid">
        {routines.map((routine) => (
          <div key={routine.id} className="routine-card">
            <img
              src={routine.routine_image || "/default-routine.jpg"}
              alt={routine.title}
              className="routine-image"
            />
            <div className="routine-content">
              <h2>{routine.title}</h2>
              <p>{routine.description}</p>
              <p className="routine-time">🕒 {routine.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Routine;







 
