import io
from app.models import Document  


def test_content_file(client, app):
    app.config['WTF_CSRF_ENABLED'] = False # In testing envionment, no need for CSRF_TOKEN
    with app.app_context(): 
        
        # Simulation of file upload
        data = {
            "pdf_file": (io.BytesIO(b"I like candy"), "test.pdf"),
            
        }

        # Post request testing the /uplouad route
        response = client.post("/upload", data=data, content_type="multipart/form-data")

        # Making sure that document was moved into database sucessfully
        assert response.status_code == 200 

        # Getting the information of the test.pdf and checking to see if the type is correct and the data

        uploaded_file = Document.query.filter_by(document_name="test").first()
        assert uploaded_file.document_type == "pdf"
        assert uploaded_file.file_contents == b"I like candy"
        
def test_validation(client, app):
    # Disable CSRF for testing purposes
    app.config['WTF_CSRF_ENABLED'] = False
    
    with app.app_context():
        # Testing for no document uploaded
        data = {
           
        }
        response = client.post("/upload", data=data, content_type="multipart/form-data")
        
        #  Making sure the error is being sent
        assert response.status_code == 400
        # Error message
        assert b'Invalid form data. Please ensure all fields are filled correctly.' in response.data