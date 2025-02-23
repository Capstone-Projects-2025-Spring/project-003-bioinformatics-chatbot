from flask import jsonify, render_template, redirect, url_for
from app.main import bp
from app.models import User
from app import db

from flask_wtf import FlaskForm
from wtforms.validators import InputRequired, Length
from wtforms import StringField, PasswordField, SubmitField

"""
Places for routes in the backend
"""

#Logging form that is used in the index.html page
class LoginForm(FlaskForm):
    username = StringField(validators=[InputRequired(), Length(min=4, max=20)], render_kw={"placeholder": "Username"})

    password = PasswordField(validators=[InputRequired(), Length(min=5, max=20)], render_kw={"placeholder": "Password"})

    submit = SubmitField('Login')




@bp.route("/", methods=["GET", "POST"])
@bp.route("/index", methods=["GET", "POST"])


def index():
    """
    Author: Troy Witmer 
    Date: 02/06/2025
    Description: Sample route, currently index endpoint.

    Author: Justin Truong 
    Date: 02/12/2025
    Description: Added a admin login.

    """
    #login form
    form = LoginForm()

    #Check for correct password/username
    if form.validate_on_submit():
        if form.username.data == "admin" and form.password.data == "admin":

            # how to make a simple query 
            user = User.query.filter_by(username="admin").first()
            if not user:
                user = User(username="admin")
                user.set_password("password")
                db.session.add(user)
                db.session.commit()

            # Render admin page if login is successful
            return render_template("main/admin.html", user=user)  
        else:
            #return error to index page
            return render_template("main/index.html", form=form, error="Invalid username or password") 


    #Pass the forms here.
    return render_template("main/index.html", form=form)

@bp.route("/test", methods=["GET"])
def test():
    """
    A route to test the flask and react connection and database query for admin.
    """
    # Once I log in as an admin, the user (admin) should be returned
    user = User.query.filter_by(username="admin").first()
    if user:
        return jsonify({"message": f"Hello: {user.username}"}), 200
    else:
        return jsonify({"message": "No one is here :()."}), 200



@bp.route('/logout')
# Redirect to login page
def logout():
    return redirect(url_for('main.index'))  


