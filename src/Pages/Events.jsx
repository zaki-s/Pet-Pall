import React, { useEffect, useState } from "react";
import "./Events.css";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/Events");
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div className="events-container">
      <h1>Pet Events</h1>
      <div className="events-list">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <h2>{event.title}</h2>
            <p>Date: {event.date}</p>
            <p>Location: {event.location}</p>
            <p>{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
