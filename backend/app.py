from flask import Flask, request, jsonify, redirect, session
import requests
import base64
import os
from dotenv import load_dotenv
from flask_cors import CORS

# Load environment variables from .env file
load_dotenv()

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes
app.secret_key = os.getenv('SECRET_KEY')  # Set the secret key from the environment variable

client_id = os.getenv('RIOT_CLIENT_ID')
client_secret = os.getenv('RIOT_CLIENT_SECRET')
callback_uri = os.getenv('CALLBACK_URI')  # Use the new ngrok URL for callback
authorize_url = 'https://auth.riotgames.com/authorize'
token_url = 'https://auth.riotgames.com/token'

if not all([client_id, client_secret, callback_uri]):
    raise Exception('Missing necessary environment variables. Please check your .env file.')

@app.route('/favicon.ico')
def favicon():
    return '', 204  # No Content response

@app.route('/')
def home():
    return '<a href="/login">Sign In with Riot</a>'

@app.route('/login')
def login():
    print(f"Redirecting to Riot for authorization: {authorize_url}?response_type=code&client_id={client_id}&redirect_uri={callback_uri}&scope=openid")
    return redirect(f'{authorize_url}?response_type=code&client_id={client_id}&redirect_uri={callback_uri}&scope=openid')

@app.route('/callback')
def callback():
    code = request.args.get('code')
    if not code:
        return 'No authorization code found', 400

    # Exchange authorization code for tokens
    auth_header = base64.b64encode(f'{client_id}:{client_secret}'.encode()).decode()
    token_response = requests.post(token_url, headers={
        'Authorization': f'Basic {auth_header}',
        'Content-Type': 'application/x-www-form-urlencoded'
    }, data={
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': callback_uri
    })

    if token_response.status_code != 200:
        print(f'Token exchange failed: {token_response.text}')
        return 'Token exchange failed. Please try again later.', 500

    tokens = token_response.json()
    access_token = tokens.get('access_token')
    refresh_token = tokens.get('refresh_token')


    # After token exchange, redirect to frontend (GitHub Pages)
    frontend_redirect_url = f'https://jsakmad.github.io/Valorant-Analyzer/callback?access_token={access_token}'
    return redirect(frontend_redirect_url)


if __name__ == '__main__':
    app.run(debug=True)
