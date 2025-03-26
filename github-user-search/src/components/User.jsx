import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const { username } = useParams();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => setUserData(data));
  }, [username]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>User: {userData.login}</h1>
      <p>Location: {userData.location || 'N/A'}</p>
      <p>Repositories: {userData.public_repos}</p>
      <a href={userData.html_url} target="_blank" rel="noopener noreferrer">View Profile</a>
    </div>
  );
}

export default User;
