from app import create_app, db
from flask_cors import CORS

"""
app initializtion point
"""

app = create_app()




@app.shell_context_processor
def make_shell_context():
    return {"db": db}

if __name__ == "__main__":
    app.run(debug=True)