import React, { useEffect, useState } from 'react';

function GitHubEmbed() {
  const [userData, setUserData] = useState(null);
  const username = 'SabbirMMS'; // Change to the desired GitHub username

  useEffect(() => {
    // Fetch user data from GitHub API
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUserData(data);
        console.log(response)
        console.log(data)
      } catch (error) {
        console.error('Error fetching GitHub user data:', error);
      }
    };

    fetchUserData();
  }, [username]);

  // Render loading state or error if userData is not yet fetched
  if (!userData) {
    return <div>Loading...</div>; // You can customize this loading message
  }

  return (
    <div style={{ border: '1px solid #e1e4e8', borderRadius: '5px', padding: '10px', width: '350px', height: '150px', display: 'flex', alignItems: 'center' }}>
      <img src={userData.avatar_url} alt={`${userData.login}'s avatar`} style={{ borderRadius: '50%', width: '50px', height: '50px', marginRight: '10px' }} />
      <div>
        <h3 style={{ margin: '0', fontSize: '1.2em' }}>{userData.name || userData.login}</h3>
        <p style={{ margin: '0', color: '#586069', fontSize: '0.9em' }}>Followers: {userData.followers}</p>
        <p style={{ margin: '0', color: '#586069', fontSize: '0.9em' }}>Repos: {userData.public_repos}</p>
        <a href={userData.html_url} target="_blank" rel="noopener noreferrer" style={{ color: '#0366d6' }}>
          View Profile
        </a>
      </div>
    </div>
  );
}

export default GitHubEmbed;
