import io
from app.models import Document  


def test_upload_file(client, app):
    
    with app.app_context(): 
        
        data = {
            "myfile": (io.BytesIO(b"I like candy"), "test.txt")
        }

     
        response = client.post("/upload", data=data, content_type="multipart/form-data")

      
        assert response.status_code == 302  

       
        uploaded_file = Document.query.filter_by(document_name="test.txt").first()
        assert uploaded_file is not None
        assert uploaded_file.document_type == "txt"
        assert uploaded_file.file_contents == b"I like candy"