import React, { useEffect, useState } from "react";
import "./Events.css";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("http://localhost:3000/api/events");
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };

    fetchEvents();
  }, []);

  const handleBookClick = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  return (
    <div className="events-container">
      <h1>Upcoming Events 🐶</h1>
      <div className="events-grid">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <img
              src={event.event_image}
              alt={event.title}
              className="event-image"
            />
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p className="event-date">
              📅 {new Date(event.date).toLocaleString()}
            </p>
            <button className="book-button" onClick={() => handleBookClick(event)}>
              🎟️ Book Ticket
            </button>
            <button
              className="share-button"
              onClick={() => {
                const text = `I'm attending "${event.title}"! Join me! 🐾`;
                const url = window.location.href;
                window.open(
                  `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    text
                  )}&url=${encodeURIComponent(url)}`
                );
              }}
            >
              📣 Share Experience
            </button>
          </div>
        ))}
      </div>

      {showModal && selectedEvent && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Book Ticket for {selectedEvent.title}</h2>
            <form className="payment-form">
              <label>Name:</label>
              <input type="text" required />
              <label>Email:</label>
              <input type="email" required />
              <label>Payment Method:</label>
              <select required>
                <option value="">Select</option>
                <option value="mpesa">Mpesa</option>
                <option value="airtel">Airtel Money</option>
                <option value="visa">Visa</option>
              </select>
              <label>Transaction ID / Card Number:</label>
              <input type="text" required />
              <button type="submit" className="pay-button">
                Pay Now
              </button>
            </form>
            <button className="close-button" onClick={closeModal}>
              ❌ Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;



