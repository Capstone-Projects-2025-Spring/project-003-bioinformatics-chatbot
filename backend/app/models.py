from werkzeug.security import generate_password_hash, check_password_hash
from app import db

# File where we will store all database models which get turned into database tables


class User(db.Model):
    # base user table
    # column id: Integer, and primary key of this table
    id = db.Column(db.Integer, primary_key=True)
    # column username, a string max length 64, index and each must be unique
    username = db.Column(db.String(64), index=True, unique=True)
    # column password hash, string unknown length
    password_hash = db.Column(db.String())

    # methods that operate on the User class
    # set password which takes a string and creates its hash and stores it in the database for that user
    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    # check password to check if a hash matches with an inputes password
    def check_password(self, password):
        return check_password_hash(self.password_hash, password)
