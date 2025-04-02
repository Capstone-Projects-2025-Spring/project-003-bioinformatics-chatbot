import sys

sys.path.insert(0, "/app")

from app import create_app, db
from app.models import User

app = create_app()
ctx = app.test_request_context()
ctx.push()

print("RUNNING SETUP.PY")
test = User.query.filter_by(username="admin").first()

if test is None:
    print("NEW INSTANCE DECTECTED")
    admin = User(username="admin")
    admin.set_password("admin")
    db.session.add(admin)
    db.session.commit()
