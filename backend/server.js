const express = require('express');
const fetch = require('node-fetch');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const clientID = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const callbackUri = process.env.CALLBACK_URI;
const provider = "https://auth.riotgames.com";
const authorizeUrl = `${provider}/authorize`;
const tokenUrl = `${provider}/token`;

// Check for missing environment variables
if (!clientID || !clientSecret || !callbackUri) {
    throw new Error('Missing environment variables. Please check your .env file.');
}

// Route to display sign-in link
app.get('/', (req, res) => {
    const signInLink = `${authorizeUrl}?redirect_uri=${encodeURIComponent(callbackUri)}&client_id=${clientID}&response_type=code&scope=openid`;
    res.send(`<a href="${signInLink}">Sign In with Riot</a>`);
});

// Login route for callback handling
app.get('/login', (req, res) => {
    res.redirect(`${authorizeUrl}?client_id=${clientID}&response_type=code&redirect_uri=${encodeURIComponent(callbackUri)}&scope=openid`);
});

// Callback route to handle authorization code and get tokens
app.get('/callback', async (req, res) => {
    const accessCode = req.query.code;
    if (!accessCode) {
        return res.status(400).send('Authorization code missing');
    }

    try {
        const authHeader = Buffer.from(`${clientID}:${clientSecret}`).toString('base64');
        const tokenResponse = await fetch(tokenUrl, {
            method: 'POST',
            headers: {
                'Authorization': `Basic ${authHeader}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `grant_type=authorization_code&code=${accessCode}&redirect_uri=${callbackUri}`
        });

        const tokens = await tokenResponse.json();
        if (!tokenResponse.ok) throw new Error(`Token exchange error: ${JSON.stringify(tokens)}`);
        
        res.json(tokens);  // Send tokens as JSON
    } catch (error) {
        console.error(`Error during token exchange: ${error.message}`);
        res.status(500).send('Token exchange failed. Please try again later.');
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
