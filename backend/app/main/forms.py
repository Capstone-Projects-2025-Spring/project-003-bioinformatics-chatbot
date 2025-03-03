from flask_wtf import FlaskForm
from wtforms.validators import InputRequired, Length
from wtforms import StringField, PasswordField, SubmitField, FileField

#Logging form that is used in the index.html page
class LoginForm(FlaskForm):
    username = StringField(validators=[InputRequired(), Length(min=4, max=20)], render_kw={"placeholder": "Username"})

    password = PasswordField(validators=[InputRequired(), Length(min=5, max=20)], render_kw={"placeholder": "Password"})

    submit = SubmitField('Login')

#PDF upload form
class PDFUploadForm(FlaskForm):
    pdf_file = FileField("Upload PDF", validators=[InputRequired()])
    submit = SubmitField("Upload")
