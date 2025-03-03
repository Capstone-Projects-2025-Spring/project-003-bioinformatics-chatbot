import io
from werkzeug.datastructures import FileStorage

def test_upload_pdf_valid(client, app):
    app.config['WTF_CSRF_ENABLED'] = False;
    # Prepare the test PDF content and create a FileStorage object
    pdf_content = b"%PDF-1.7\nTest PDF content"
    pdf_file = FileStorage(
        stream=io.BytesIO(pdf_content),
        filename="test.pdf",
        content_type="application/pdf",
    )

    # Send the file upload request with the FileStorage object
    data = {
        'pdf_file': pdf_file
    }
    
    # Make the POST request to the upload route
    upload_response = client.post("/upload", data=data, follow_redirects=True)

    # Get the JSON response using get_json()
    response_data = upload_response.get_json()
    
    # Ensure the response data is not None before accessing
    assert response_data is not None  # Ensure the response is valid JSON
    
    # Check the JSON message
    assert upload_response.status_code == 200
    assert response_data["message"] == "File 'test.pdf' uploaded successfully!"