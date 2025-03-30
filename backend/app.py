from app import create_app, db
from flask_cors import CORS
from config import Config

"""
app initializtion point
"""

app = create_app(config_class=Config)

@app.shell_context_processor
def make_shell_context():
    return {"db": db}

'''
if __name__ == "__main__":
    app.run(host=app.config["HOST"], port=app.config["PORT"])'
'''