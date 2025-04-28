import React, { useEffect, useState } from 'react';
import './Profiles.css';

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/Profiles');
        const data = await response.json();
        setProfiles(data);
      } catch (error) {
        console.error('Error fetching profiles:', error);
      }
    };

    fetchProfiles();
  }, []);

  return (
    <div className="profiles-container">
      <h2 className="profiles-title">Pet Owner Profiles</h2>
      <div className="profiles-grid">
        {profiles.length > 0 ? (
          profiles.map((profile) => (
            <div key={profile.id} className="profile-card">
              <img 
                src={profile.profile_photo || 'https://via.placeholder.com/100'} 
                alt={profile.name} 
                className="profile-image" 
              />
              <h3>{profile.name}</h3>
              <p><strong>Email:</strong> {profile.email}</p>
              <p><strong>Phone:</strong> {profile.phone}</p>
              <p><strong>Address:</strong> {profile.address}</p>
            </div>
          ))
        ) : (
          <p>No profiles found.</p>
        )}
      </div>
    </div>
  );
};

export default Profiles;


