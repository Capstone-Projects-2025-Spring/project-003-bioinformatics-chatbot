from app import create_app, db
from app.models import User
from flask_cors import CORS

"""
app initializtion point
"""

app = create_app()


@app.shell_context_processor
def make_shell_context():
    return {"db": db}


with app.app_context():
    db.create_all()
    if not User.query.first():
        admin = User(username="admin")
        admin.set_password("admin")
        db.session.add(admin)
        db.session.commit()


if __name__ == "__main__":
    app.run(debug=True)

