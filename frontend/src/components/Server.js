// Server.js
// Server-side code that exchanges the authorization code for an access token and makes authenticated requests to Riot's API.
const express = require('express');
const axios = require('axios');
const app = express();
require('dotenv').config();

app.get('/callback', async (req, res) => {
  const code = req.query.code;
  const clientId = process.env.CLIENT_ID;
  const clientSecret = process.env.CLIENT_SECRET;
  const redirectUri = 'http://localhost:3000/callback';

  try {
    const response = await axios.post('https://auth.riotgames.com/token', {
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: redirectUri,
      client_id: clientId,
      client_secret: clientSecret,
    });

    const accessToken = response.data.access_token;
    // Use the access token to make authenticated requests to Riot's API
    res.send('Login successful!');
  } catch (error) {
    console.error('Failed to exchange token:', error);
    res.status(500).send('Authentication failed');
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
