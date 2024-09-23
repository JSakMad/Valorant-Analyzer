// Test.js
import React, { useState, useEffect } from 'react';

const Test = () => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`https://na.api.riotgames.com/val/content/v1/contents?api_key=${process.env.REACT_APP_RIOT_API_KEY}`);
        const data = await response.json();
        setContent(data);
      } catch (error) {
        console.error('Failed to fetch:', error);
      }
    };

    fetchContent();
  }, []);

  if (!content) return <div>Loading...</div>;

  return (
    <div>
      <h2>Game Content</h2>
      <ul>
        {content.characters.map((character, index) => (
          <li key={index}>
            <p>Character: {character.name || 'Unknown Character'}</p>
          </li>
        ))}
        {content.maps.map((map, index) => (
          <li key={index}>
            <p>Map: {map.name || 'Unknown Map'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Test;
