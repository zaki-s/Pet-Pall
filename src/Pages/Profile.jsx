import React, { useEffect, useState } from "react";

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/profiles')
      .then((response) => response.json())
      .then((data) => setProfiles(data))
      .catch((error) => console.error('Error fetching profiles:', error));
  }, []);

  return (
    <div>
      <h1>Profiles</h1>
      <div>
        {profiles.map((profile) => (
          <div key={profile.id}>
            <h2>{profile.name}</h2>
            <p>{profile.email}</p>
            <img src={profile.profile_picture} alt={profile.name} width="150" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profiles;

