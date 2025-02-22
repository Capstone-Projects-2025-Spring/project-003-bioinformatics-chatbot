from flask import render_template, redirect, url_for
from app.main import bp
from app.models import User
from app import db

from flask_wtf import FlaskForm
from wtforms.validators import InputRequired, Length
from wtforms import StringField, PasswordField, SubmitField

import ollama
from ollama import chat
from ollama import ChatResponse
from flask import request, jsonify
from ollama import Client

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



@bp.route('/logout')
# Redirect to login page
def logout():
    return redirect(url_for('main.index'))  

@bp.route("/chat_response", methods=["POST"])
def chat_response():
    # WHEN TESTING, THERE STILL NEEDS TO BE A JSON OBJECT PASSED IN, EVEN WITH THE DEFAULT MESSAGE
    """
        {
            "message": "Why is the sky blue?"
        }
    """
    try:
        # Use the service name 'ollama' as the host
        client = Client(host='http://ollama:11434')
        
        data = request.get_json()
        if not data or "message" not in data:
            return jsonify({"error": "Missing 'message' field in request body"}), 400

        user_message = data["message"]
        # user_message = data.get("message", "Why is the sky blue? Please give a short") # Hard-coded message for testing

        # Get response from Ollama
        response = client.chat(model="deepseek-r1:7b", messages=[
            {"role": "user", "content": user_message}
        ])

        # Extract the response message
        llm_response = response.message['content']
        print(llm_response, flush=True)
        
        return jsonify({"response": llm_response})

    except Exception as e:
        print(f"Error: {str(e)}", flush=True)
        return jsonify({
            "error": f"An error occurred: {str(e)}"
        }), 500