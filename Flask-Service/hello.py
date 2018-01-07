import os
import sendgrid
from flask import Flask
from flask import request
from sendgrid.helpers.mail import *

app = Flask(__name__)

@app.route('/message', methods=['POST'])
def hello_world():
    if request.method == 'POST':
        data = request.get_json()
        # sg = sendgrid.SendGridAPIClient(apikey=os.environ.get('SENDGRID_API_KEY'))
        # to_email = Email("monkovaslavyana@gmail.com")
        # from_email = Email("test@example.com")
        # subject = "Sending with SendGrid is Fun"
        # content = Content("text/plain", "and easy to do anywhere, even with Python")
        # mail = Mail(from_email, subject, to_email, content)
        # response = sg.client.mail.send.post(request_body=mail.get())
        pass
    return 'Hello, World!'
