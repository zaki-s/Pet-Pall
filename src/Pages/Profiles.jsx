import React, { useEffect, useState } from "react";
import "./Profiles.css";

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/profiles")
      .then((response) => response.json())
      .then((data) => setProfiles(data))
      .catch((error) => console.error("Error fetching profiles:", error));
  }, []);

  const handleContactClick = (profile) => {
    setSelectedProfile(profile);
    setMessage("");
  };

  const handleSendMessage = () => {
    console.log("Message sent to:", selectedProfile.name);
    console.log("Message content:", message);
    setSelectedProfile(null); // close popup
  };

  return (
    <div className="profiles-container">
      <h1>Pet Owner Profiles</h1>
      <div className="profile-grid">
        {profiles.map((profile, index) => {
          const isOnline = index % 2 === 0; // simulate online/offline
          return (
            <div key={profile.id} className="profile-card">
              <img
                src={profile.profile_photo}
                alt={profile.name}
                className="profile-photo"
              />
              <h2>{profile.name}</h2>
              <p><strong>Email:</strong> {profile.email}</p>
              <p><strong>Phone:</strong> {profile.phone}</p>
              <p><strong>Address:</strong> {profile.address}</p>
              <span className={`status-badge ${isOnline ? "online" : "offline"}`}>
                {isOnline ? "Online" : "Offline"}
              </span>
              <button
                className="contact-button"
                onClick={() => handleContactClick(profile)}
              >
                📬 Contact
              </button>
            </div>
          );
        })}
      </div>

      {/* Popup Form */}
      {selectedProfile && (
        <div className="popup-overlay">
          <div className="popup-form">
            <h2>Message {selectedProfile.name}</h2>
            <textarea
              placeholder="Type your message or feedback here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="popup-actions">
              <button onClick={handleSendMessage}>Send</button>
              <button onClick={() => setSelectedProfile(null)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profiles;




