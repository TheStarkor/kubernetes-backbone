from flask import Flask
app = Flask(__name__)

@app.route('/')
def inference():
    return 'Inference'

@app.route('/sr')
def sr():
    return 'Super Resolution'

@app.route('/recommendation')
def recommendation():
    return 'Recommandation'

@app.route('/detection')
def detection():
    return 'Detection'

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')