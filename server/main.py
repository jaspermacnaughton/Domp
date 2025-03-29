from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, origins="*")

@app.route('/api/problem', methods=['GET'])
def get_problem():
    return {
        "title": "Solve the system of equations:",
        "problem": "$$ 2x + 3y = 10 $$\n$$ 5x - 2y = 4 $$"
    }

if __name__ == '__main__':
    app.run(debug=True, port=8080)

