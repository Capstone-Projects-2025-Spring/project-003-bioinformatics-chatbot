import os
from werkzeug.datastructures import FileStorage

# Getting the parse function from the py files
from app.doc_parsers.parse_pdf import parse_pdf
from app.doc_parsers.parse_txt import parse_txt

from app.doc_indexer.index_doc import index_and_add_to_db




def process_uploaded_file(uploaded_file: FileStorage):
    """
    Args:uploaded_file:  (FileStorage): file that is going be sorted 

    Process the uploaded file and parse and index to the vector db

    """

    if uploaded_file:

        # Get original filename
        filename = uploaded_file.filename  

        # Get the file extension
        ext = os.path.splitext(filename)[1].lower()  
        
        #Save the file into folder 'data'
        file_path = os.path.join('./app/data', filename)
        uploaded_file.save(file_path)

        if ext == ".pdf":

            # Pass the file path to parsing and indexing
            chunks = parse_pdf(file_path)  
            index_and_add_to_db(chunks)

        elif ext == ".txt":
            # Pass the file path to parsing and indexing
            chunks = parse_txt(file_path)  
            index_and_add_to_db(chunks)


        else:
            print("Can't Process that file type")
    else:
        print("No file uploaded")






