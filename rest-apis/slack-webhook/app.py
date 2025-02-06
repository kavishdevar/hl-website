from flask import Flask, request, jsonify
import requests
import os 
from flask_cors import CORS
from dotenv import load_dotenv
load_dotenv()   
app = Flask(__name__)

botToken = os.getenv('BOT_TOKEN')
channelID = os.getenv('CHANNEL_ID')
CORS(app)
@app.route('/send', methods=['POST'])
def send_message():
    try:
        data = request.get_json()
        
        if not data:
            return jsonify({'error': 'No data provided'}), 400

        name = data.get('name')
        email = data.get('email')
        msg = data.get('msg')
        
        if not name or not email or not msg:
            return jsonify({'error': 'Please provide all the details'}), 400
        

        group_id = os.getenv('GROUP_ID')

        print(data)

        message = {
            "channel": channelID,
            "text": f"Heads Up Team! You've got a new message from {name} ({email})\nMessage : {msg}\n\n<!subteam^{group_id}>"  # Ping the group
        }
        

        response = requests.post(
            'https://slack.com/api/chat.postMessage',
            headers={
                'Authorization': f'Bearer {botToken}',
                'Content-Type': 'application/json'
            },
            json=message
        )
        

        print("Slack API Response:", response.json())
 
        if response.status_code == 200 and response.json().get('ok'):
            return jsonify({'message': 'Message sent successfully'}), 200
        else:
            return jsonify({'error': 'Failed to send message to Slack', 'slack_response': response.json()}), 500
    
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({'error': 'server error'}), 500

if __name__ == '__main__':
    app.run(debug=False)
