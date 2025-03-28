from app import db, create_app
from app.models import User

app = create_app()
ctx = app.test_request_context()
ctx.push()

admin = User(username="admin")
admin.set_password("admin")
db.session.add(admin)
db.session.commit()
