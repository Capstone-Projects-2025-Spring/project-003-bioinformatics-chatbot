import os


# Getting the parse function from the py files
from app.doc_parsers.parse_pdf import parse_pdf
from app.doc_parsers.parse_txt import parse_txt

from app.doc_indexer.index_doc import index_and_add_to_db
from app.models import Document



def process_doc(new_document: Document):
    """
    Args:new_document:  (Document): document that is going be sorted 

    create a temp file of that document and parse and index the contexts to the vector db

    """

    if new_document:

        # Ensure the 'data' folder exists
        data_folder = './app/data'
        if not os.path.exists(data_folder):
            os.makedirs(data_folder)

        # Make a temp filename and filepath 
        file_name = f"{new_document.document_name}.{new_document.document_type}"
        file_path = os.path.join(data_folder, file_name)

        
        # Save the file contents into the file_path (new_document.file_contents contains the binary data)
        with open(file_path, 'wb') as f:
            f.write(new_document.file_contents)
        

        # Extract the file extension (using the document's type)
        ext = new_document.document_type.lower()  # Ensure extension is lowercase
        

        if ext == "pdf":

            # Pass the file path to parsing and indexing
            chunks = parse_pdf(file_path)  
            index_and_add_to_db(chunks)

        elif ext == "txt":
            # Pass the file path to parsing and indexing
            chunks = parse_txt(file_path)  
            index_and_add_to_db(chunks)


        else:
            print(f"Cannont process this document {new_document.document_name}")


        # Delete the file after processing
        if os.path.exists(file_path):
            os.remove(file_path)
            print(f"File {file_name} has processed")
            print("-" * 30)


    else:
        print("No document to process")






