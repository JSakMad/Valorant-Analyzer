// MatchHistory.js
// Component that displays a list of matches played by a player.

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Create function to call Riot API to retrieve match information for a player
// Display match history in a clear and concise manner with relvant information pertaining to the each match.  Wins, Losses, KDA, etc.

const MatchHistory = () => {
    const { username } = useParams();
    const [matches, setMatches] = useState([]);
    
    useEffect(() => {
        const fetchMatches = async () => {
        const response = await fetch(`https://api.example.com/match-history/${username}`);
        const data = await response.json();
    
        setMatches(data);
        };
    
        fetchMatches();
    }, [username]);
    
    return (
        <div>
        <h2>Match History for {username}</h2>
        <ul>
            {matches.map((match) => (
            <li key={match.id}>
                <p>{match.result}</p>
                <p>{match.kda}</p>
                <p>{match.map}</p>
                <p>{match.date}</p>
            </li>
            ))}
        </ul>
        </div>
    );
    };

export default MatchHistory;