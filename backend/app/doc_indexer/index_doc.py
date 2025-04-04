from langchain.schema.document import Document
from app import db
from flask import current_app


def index_and_add_to_db(chunks: list[Document]):
    """
    Index and add new document chunks to the vector database.
    
    This function performs the following tasks:
      1. Calculates a unique ID for each chunk based on its source, page number, and chunk index.
      2. Queries the vector database for existing document IDs.
      3. Filters out chunks that are already in the database.
      4. Adds only new chunks to the vector database.
      
    Args:
        chunks (list[Document]): A list of Document objects that need to be indexed.
    """
    # Calculate unique IDs for each chunk
    chunks_with_ids = calculate_chunk_ids(chunks)
    
    # Access the vector database from the current Flask application context.
    vector_db = current_app.vector_db

    # Query the vector database to get a set of all existing document IDs.
    existing_ids = set(
        [
            id_tuple[0]
            for id_tuple in db.session.query(vector_db.EmbeddingStore.id).all()
        ]
    )

    # Create a list to hold chunks that are not already in the database.
    new_chunks = []
    
    # Iterate over each chunk with an assigned ID.
    for chunk in chunks_with_ids:
        # Check if the chunk's ID (from metadata) is not already present in the vector database.
        if chunk.metadata["id"] not in existing_ids:
            new_chunks.append(chunk)

    # If there are any new chunks, add them to the vector database.
    if len(new_chunks):
        # Collect the IDs of the new chunks for reference during insertion.
        new_chunk_ids = [chunk.metadata["id"] for chunk in new_chunks]
        # Add the new document chunks to the vector database.
        vector_db.add_documents(new_chunks, ids=new_chunk_ids)


def calculate_chunk_ids(chunks):
    """
    Calculate and assign unique IDs to each document chunk.
    
    Each chunk ID is composed of:
      - The source of the document (e.g., file path).
      - The page number.
      - The index of the chunk on that page.
      
    For example, an ID could look like "data/monopoly.pdf:6:2" which means:
      - Source: data/monopoly.pdf
      - Page: 6
      - Chunk Index: 2
      
    The function updates each chunk's metadata with the calculated ID.
    
    Args:
        chunks (list[Document]): A list of Document objects to process.
    
    Returns:
        list[Document]: The list of Document objects with updated metadata including the 'id' key.
    """
    # Initialize tracking variables for the last processed page and the chunk index on that page.
    last_page_id = None
    current_chunk_index = 0

    # Loop through each document chunk in the list.
    for chunk in chunks:
        # Extract the 'source' (e.g., file name or path) and 'page' number from the chunk metadata.
        source = chunk.metadata.get("source")
        page = chunk.metadata.get("page")
        
        # Form the current page identifier by combining the source and page number.
        current_page_id = f"{source}:{page}"

        # If this chunk is from the same page as the previous one, increment the chunk index.
        if current_page_id == last_page_id:
            current_chunk_index += 1
        else:
            # Otherwise, reset the chunk index for a new page.
            current_chunk_index = 0

        # Construct the unique chunk ID using the page identifier and the current chunk index.
        chunk_id = f"{current_page_id}:{current_chunk_index}"
        
        # Update the last_page_id tracker.
        last_page_id = current_page_id

        # Save the generated chunk ID in the chunk's metadata.
        chunk.metadata["id"] = chunk_id

    # Return the updated list of chunks.
    return chunks