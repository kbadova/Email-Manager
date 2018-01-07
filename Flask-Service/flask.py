from flask import Flask
from flask import request
app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def hello_world():
    if request.method == 'POST':
        //TODO: sending emails here
        pass
    return 'Hello, World!'
