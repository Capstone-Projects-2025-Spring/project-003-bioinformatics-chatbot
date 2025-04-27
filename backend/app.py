from app import create_app, db, socketio
from app.models import User
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

with app.app_context():
    db.create_all()
    if not User.query.first():
        admin = User(username="admin")
        admin.set_password("admin")
        db.session.add(admin)
        db.session.commit()


if __name__ == "__main__":
    socketio.run(app, debug=True)

