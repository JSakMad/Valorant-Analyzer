import requests
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os

app = Flask(__name__, static_folder='build')
CORS(app)

@app.route('/exchange_code', methods=['POST'])
def exchange_code():
    data = request.get_json()
    code = data['code']
    redirect_uri = data['redirect_uri']

    # Exchange the authorization code for an access token
    token_url = "https://auth.riotgames.com/token"
    payload = {
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': redirect_uri,
        'client_id': os.getenv('RIOT_CLIENT_ID'),
        'client_secret': os.getenv('RIOT_CLIENT_SECRET'),
    }

    headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }

    response = requests.post(token_url, data=payload, headers=headers)

    if response.status_code == 200:
        token_data = response.json()
        access_token = token_data.get('access_token')
        return jsonify({'access_token': access_token})
    else:
        return jsonify({'error': 'Failed to exchange code for tokens'}), 400

@app.route('/')
def serve():
    return send_from_directory(app.static_folder, 'index.html')

@app.route('/<path:path>')
def static_proxy(path):
    if path.startswith('static/') or path in ['favicon.ico', 'manifest.json']:
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)
