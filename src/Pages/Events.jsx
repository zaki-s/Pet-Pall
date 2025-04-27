import React, { useEffect, useState } from 'react';

const Events = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await fetch('/api/events'); // Adjust the API endpoint as needed
                const data = await response.json();
                setEvents(data);
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div className="text-center">
            <h2 className="text-2xl font-semibold">Events</h2>
            <ul className="mt-4">
                {events.map((event) => (
                    <li key={event.id} className="mb-2">
                        <h3 className="font-bold">{event.title}</h3>
                        <p>{event.date}</p>
                        <p>{event.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Events;
