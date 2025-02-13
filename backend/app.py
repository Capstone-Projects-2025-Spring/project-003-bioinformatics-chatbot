from app import create_app, db

"""
app initializtion point
"""

app = create_app()


@app.shell_context_processor
def make_shell_context():
    return {"db": db}
