from flask import render_template, redirect, url_for
from app.main import bp
from app.models import User
from app import db

from flask_wtf import FlaskForm
from wtforms.validators import InputRequired, Length
from wtforms import StringField, PasswordField, SubmitField

from ollama import chat
from ollama import ChatResponse
from flask import request, jsonify

import ollama
# from flask import jsonify

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

# def chat_response():
#     # data = request.get_json() # For when we're dynamically requesting data
#     # user_message = data.get('message', "") #For when we're dynamically getting messages
#     response: ChatResponse = chat(model='deepseek-r1:7b', messages=[
#         {
#             'role': 'user',
#             'content': 'Why is the sky blue?'
#             # 'content': user_message #For when we're dynamically getting messages
#         },
#     ])
#     print(response.messages[-1]["content"])

#     # llm_response = response.messages[-1]["content"]
#     # return jsonify({"response": llm_response})

@bp.route("/chat_response", methods=["POST"])
def chat_response():
    data = request.get_json()
    user_message = data.get("message", "Why is the sky blue?")

    response: ChatResponse = chat(model="deepseek-r1:7b", messages=[
        {"role": "user", "content": user_message}
    ])

    llm_response = response.messages[-1]["content"]
    
    print(llm_response, flush=True)  # <-- Forces immediate log output

    return jsonify({"response": llm_response})

    # response = ollama.chat(
    #     model='deepseek-r1:7b',
    #     messages=[
    #     {
    #         'role': 'user',
    #         'content': 'Why is the sky blue?'
    #     },
    #     ],
    #     stream = True
    # )

    # full_response = ""

    # for chunk in response:
    #     print(chunk['message']['content'], end='', flush=True)
    #     full_response += chunk['message']['content']

    #     if chunk['done']:
    #         break

    # return jsonify({"response": full_response})
    # print("Received POST request to /chat_response")
    # return jsonify({"message": "Hello, world!"})

