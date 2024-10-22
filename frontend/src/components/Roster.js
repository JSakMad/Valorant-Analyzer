// Roster.js
// Test data right now, will be replaced with actual data from the Riot API.
import React from 'react';

const Roster = () => {
  const teamA = [
    { name: 'Unc', topAgents: ['Agent 1', 'Agent 2', 'Agent 3', 'Agent 4', 'Agent 5'], sub: 'Gabe' },
    { name: 'Mag', topAgents: ['Agent 1', 'Agent 2', 'Agent 3', 'Agent 4', 'Agent 5'], sub: 'Jeff' },
    { name: 'Ben', topAgents: ['Agent 1', 'Agent 2', 'Agent 3', 'Agent 4', 'Agent 5'], sub: 'Gabe' },
    { name: 'Alex', topAgents: ['Agent 1', 'Agent 2', 'Agent 3', 'Agent 4', 'Agent 5'], sub: 'Jeff' },
    { name: 'Gabe (Sub)', topAgents: ['Agent 1', 'Agent 2', 'Agent 3', 'Agent 4', 'Agent 5'], sub: 'Jeff' },
    { name: 'Jeff (Sub)', topAgents: ['Agent 1', 'Agent 2', 'Agent 3', 'Agent 4', 'Agent 5'], sub: 'Gabe' },
  ];

  const teamB = [
    { name: 'Dom', topAgents: ['Agent 1', 'Agent 2', 'Agent 3', 'Agent 4', 'Agent 5'], sub: 'Joe' },
    { name: 'Jake', topAgents: ['Agent 1', 'Agent 2', 'Agent 3', 'Agent 4', 'Agent 5'], sub: 'Joe' },
    { name: 'Blin', topAgents: ['Agent 1', 'Agent 2', 'Agent 3', 'Agent 4', 'Agent 5'], sub: 'Joe' },
    { name: 'Austin', topAgents: ['Agent 1', 'Agent 2', 'Agent 3', 'Agent 4', 'Agent 5'], sub: 'Joe' },
    { name: 'Jackie', topAgents: ['Agent 1', 'Agent 2', 'Agent 3', 'Agent 4', 'Agent 5'], sub: 'Joe' },
    { name: 'Joe (Sub)', topAgents: ['Agent 1', 'Agent 2', 'Agent 3', 'Agent 4', 'Agent 5'], sub: 'Joe' },
  ];

  return (
    <div>
      <h2 className="center-text">Rosters</h2>
      <div className="roster">
        <div className="team">
          <h3>A Team</h3>
          <table>
            <thead>
              <tr>
                <th style={{ padding: '12px' }}>Name</th>
                <th style={{ padding: '12px' }}>Username</th>
              </tr>
            </thead>
            <tbody>
              {teamA.map((player, index) => (
                <tr key={index}>
                  <td style={{ padding: '12px' }}>{player.name}</td>
                  <td style={{ padding: '12px' }}>Placeholder</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="team">
          <h3>B Team</h3>
          <table>
            <thead>
              <tr>
                <th style={{ padding: '12px' }}>Name</th>
                <th style={{ padding: '12px' }}>Username</th>
              </tr>
            </thead>
            <tbody>
              {teamB.map((player, index) => (
                <tr key={index}>
                  <td style={{ padding: '12px' }}>{player.name}</td>
                  <td style={{ padding: '12px' }}>Placeholder</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Roster;
