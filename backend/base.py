from flask import Flask

app = Flask(__name__)

@app.route('/', methods=['GET'])
def my_profile():
    return{
        'name': 'John Doe',
        'about': 'I am a software developer',
    }