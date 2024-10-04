// Stats.js
// Stats component that displays various statistics about the players and teams in the game.
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { rankValues, getRankValue, getRankString } from './utils';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Stats = () => {
  // Sample data for demonstration purposes
  const data = {
    labels: ['Agent 1', 'Agent 2', 'Agent 3', 'Agent 4', 'Agent 5'],
    datasets: [
      {
        label: 'Win Rate (%)',
        data: [55, 60, 70, 65, 50],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const teamA = [
    { name: 'Unc', rank: 'Gold 2', topAgents: ['Agent 1', 'Agent 2', 'Agent 3', 'Agent 4', 'Agent 5'], sub: 'Gabe' },
    { name: 'Mag', rank: 'Platinum 1', topAgents: ['Agent 1', 'Agent 2', 'Agent 3', 'Agent 4', 'Agent 5'], sub: 'Jeff' },
    { name: 'Ben', rank: 'Silver 3', topAgents: ['Agent 1', 'Agent 2', 'Agent 3', 'Agent 4', 'Agent 5'], sub: 'Gabe' },
    { name: 'Alex', rank: 'Gold 1', topAgents: ['Agent 1', 'Agent 2', 'Agent 3', 'Agent 4', 'Agent 5'], sub: 'Jeff' },
    { name: 'Gabe (Sub)', rank: 'Silver 2', topAgents: ['Agent 1', 'Agent 2', 'Agent 3', 'Agent 4', 'Agent 5'], sub: 'Jeff' },
    { name: 'Jeff (Sub)', rank: 'Silver 1', topAgents: ['Agent 1', 'Agent 2', 'Agent 3', 'Agent 4', 'Agent 5'], sub: 'Gabe' },
  ];

  const teamB = [
    { name: 'Dom', rank: 'Gold 3', topAgents: ['Agent 1', 'Agent 2', 'Agent 3', 'Agent 4', 'Agent 5'], sub: 'Joe' },
    { name: 'Jake', rank: 'Platinum 2', topAgents: ['Agent 1', 'Agent 2', 'Agent 3', 'Agent 4', 'Agent 5'], sub: 'Joe' },
    { name: 'Blin', rank: 'Silver 1', topAgents: ['Agent 1', 'Agent 2', 'Agent 3', 'Agent 4', 'Agent 5'], sub: 'Joe' },
    { name: 'Austin', rank: 'Gold 1', topAgents: ['Agent 1', 'Agent 2', 'Agent 3', 'Agent 4', 'Agent 5'], sub: 'Joe' },
    { name: 'Jackie', rank: 'Silver 3', topAgents: ['Agent 1', 'Agent 2', 'Agent 3', 'Agent 4', 'Agent 5'], sub: 'Joe' },
    { name: 'Joe (Sub)', rank: 'Silver 2', topAgents: ['Agent 1', 'Agent 2', 'Agent 3', 'Agent 4', 'Agent 5'], sub: 'Joe' },
  ];

  const calculateAverageRank = (team) => {
    const totalRank = team.reduce((sum, player) => sum + getRankValue(player.rank), 0);
    return totalRank / team.length;
  };

  const averageRankA = calculateAverageRank(teamA);
  const averageRankB = calculateAverageRank(teamB);

  const rankData = {
    labels: teamA.map(player => player.name).concat(teamB.map(player => player.name)),
    datasets: [
      {
        label: 'Rank Value',
        data: teamA.map(player => getRankValue(player.rank)).concat(teamB.map(player => getRankValue(player.rank))),
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  const averageRankData = {
    labels: ['Team A', 'Team B'],
    datasets: [
      {
        label: 'Average Rank Value',
        data: [averageRankA, averageRankB],
        backgroundColor: 'rgba(255, 159, 64, 0.6)',
      },
    ],
  };

  return (
    <div>
      <h2 className="center-text">Team Statistics</h2>
      <div className="chart-container">
        <Bar data={data} options={options} />
      </div>
      <div className="table-container">
        <h3>Player Statistics</h3>
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>Agent</th>
              <th>Win Rate (%)</th>
              <th>Playstyle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Player 1</td>
              <td>Agent 1</td>
              <td>55</td>
              <td>Aggressive</td>
            </tr>
            <tr>
              <td>Player 2</td>
              <td>Agent 2</td>
              <td>60</td>
              <td>Defensive</td>
            </tr>
            <tr>
              <td>Player 3</td>
              <td>Agent 3</td>
              <td>70</td>
              <td>Support</td>
            </tr>
            <tr>
              <td>Player 4</td>
              <td>Agent 4</td>
              <td>65</td>
              <td>Balanced</td>
            </tr>
            <tr>
              <td>Player 5</td>
              <td>Agent 5</td>
              <td>50</td>
              <td>Aggressive</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="roster-container">
        <h3>Team A Roster</h3>
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>Top 5 Agents</th>
              <th>Substitute</th>
            </tr>
          </thead>
          <tbody>
            {teamA.map((player, index) => (
              <tr key={index}>
                <td>{player.name}</td>
                <td>{player.topAgents.join(', ')}</td>
                <td>{player.sub}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3>Team B Roster</h3>
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>Top 5 Agents</th>
              <th>Substitute</th>
            </tr>
          </thead>
          <tbody>
            {teamB.map((player, index) => (
              <tr key={index}>
                <td>{player.name}</td>
                <td>{player.topAgents.join(', ')}</td>
                <td>{player.sub}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="rank-container">
        <h3>Player Ranks</h3>
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>Rank</th>
            </tr>
          </thead>
          <tbody>
            {teamA.map((player, index) => (
              <tr key={index}>
                <td>{player.name}</td>
                <td>{player.rank}</td>
              </tr>
            ))}
            {teamB.map((player, index) => (
              <tr key={index}>
                <td>{player.name}</td>
                <td>{player.rank}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h3>Average Ranks</h3>
        <table>
          <thead>
            <tr>
              <th>Team</th>
              <th>Average Rank</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Team A</td>
              <td>{getRankString(Math.round(averageRankA))}</td>
            </tr>
            <tr>
              <td>Team B</td>
              <td>{getRankString(Math.round(averageRankB))}</td>
            </tr>
          </tbody>
        </table>
        <div className="chart-container">
          <Bar data={rankData} options={options} />
        </div>
        <div className="chart-container">
          <Bar data={averageRankData} options={options} />
        </div>
        </div>
      </div>
  );
};

export default Stats;

