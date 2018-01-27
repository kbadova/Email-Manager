import os
import sendgrid
from flask import Flask, Response
from flask import request
from flask import json
from sendgrid.helpers.mail import *

app = Flask(__name__)


@app.route('/send-message/', methods=['POST'])
def hello_world():
    data = json.loads(request.data.decode('utf-8'))

    sg = sendgrid.SendGridAPIClient(apikey=os.environ.get('SENDGRID_API_KEY'))
    to = Email(data['students'][0]['email'])

    from_email = Email(data['send_from']['email'])
    subject = data['subject']
    content = Content("text/plain", data['content'])
    mail = Mail(from_email, subject, to, content)

    for student in data['students'][1:]:
        mail.personalizations[0].add_to(Email(student['email']))

    response = sg.client.mail.send.post(request_body=mail.get())
    if response.status_code == 202:
        return Response(status=202)
    else:
        return Response(status=400)
