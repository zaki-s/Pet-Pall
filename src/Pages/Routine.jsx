import React, { useEffect, useState } from "react";
import "./Routine.css";

const Routine = () => {
  const [routines, setRoutines] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRoutine, setSelectedRoutine] = useState(null);
  const [paymentDetails, setPaymentDetails] = useState({
    method: "Mpesa",
    phoneOrCard: "",
  });

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

  const openModal = (routine) => {
    setSelectedRoutine(routine);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPaymentDetails({ method: "Mpesa", phoneOrCard: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handlePayment = (e) => {
    e.preventDefault();
    console.log("Payment submitted:", {
      routine: selectedRoutine.title,
      ...paymentDetails,
    });
    alert("Payment submitted successfully!");
    closeModal();
  };

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
              <button className="book-button" onClick={() => openModal(routine)}>
                Book Session
              </button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Book Session - {selectedRoutine.title}</h2>
            <form onSubmit={handlePayment}>
              <label>
                Payment Method:
                <select
                  name="method"
                  value={paymentDetails.method}
                  onChange={handleInputChange}
                >
                  <option value="Mpesa">Mpesa</option>
                  <option value="Airtel Money">Airtel Money</option>
                  <option value="Visa">Visa</option>
                </select>
              </label>
              <label>
                Phone/Card Number:
                <input
                  type="text"
                  name="phoneOrCard"
                  value={paymentDetails.phoneOrCard}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <button type="submit" className="pay-button">Pay Now</button>
            </form>
            <button className="close-button" onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Routine;








 
