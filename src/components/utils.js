// utils.js
// Utility functions for the Stats component.
export const rankValues = {
    'Iron 1': 1,
    'Iron 2': 2,
    'Iron 3': 3,
    'Bronze 1': 4,
    'Bronze 2': 5,
    'Bronze 3': 6,
    'Silver 1': 7,
    'Silver 2': 8,
    'Silver 3': 9,
    'Gold 1': 10,
    'Gold 2': 11,
    'Gold 3': 12,
    'Platinum 1': 13,
    'Platinum 2': 14,
    'Platinum 3': 15,
    'Diamond 1': 16,
    'Diamond 2': 17,
    'Diamond 3': 18,
    'Ascendant 1': 19,
    'Ascendant 2': 20,
    'Ascendant 3': 21,
    'Immortal 1': 22,
    'Immortal 2': 23,
    'Immortal 3': 24,
    'Radiant': 25,
  };
  
  export const getRankValue = (rank) => rankValues[rank] || 0;
  
  export const getRankString = (value) => {
    const rank = Object.keys(rankValues).find(key => rankValues[key] === value);
    return rank || 'Unknown';
  };
  