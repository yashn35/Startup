from flask import Flask, request, jsonify
from mail import read_email

app = Flask(__name__)

@app.route('/incoming', methods=['POST'])
def incoming():
    data = request.json
    email_id = data['emailId']
    print(data)
    read_email(email_id)
    return jsonify({"message": "Data received successfully"}), 200

if __name__ == '__main__':
    app.run(debug=True, port=6002)

