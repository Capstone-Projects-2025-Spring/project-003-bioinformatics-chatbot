import pytest
from flask import current_app
from app.doc_parsers.parse_pdf import parse_pdf
from app.doc_indexer.index_doc import index_and_add_to_db
from app.doc_indexer.retrieve_document import query_database
from app import db
from sqlalchemy import delete


def test_query_vector_db_with_doc(client, app, clean_vector_db):
    """
    Tests to make sure query database fuction returns a document when document exists
    """
    FILE_PATH = "./tests/test_data/Dna.pdf"

    # Parse the PDF into document chunks
    chunks = parse_pdf(FILE_PATH)
    assert len(chunks) > 0, "Parsing failed, no chunks extracted"

    with app.app_context():
        # Index chunks into the vector database
        index_and_add_to_db(chunks)
        vector_db = current_app.vector_db
        indexed_chunks = db.session.query(vector_db.EmbeddingStore.id).all()

    assert len(indexed_chunks) == len(
        chunks
    ), "Not all chunks were indexed successfully"

    with app.app_context():
        documents = query_database("dna")

    assert documents
    doc, score = documents[0]
    assert doc
    assert score >= 0
    assert score <= 1


def test_query_vector_db_no_doc(client, app, clean_vector_db):
    """
    Tests to make sure query database fuction returns a does not return a document when one doesnt exist
    """

    with app.app_context():
        documents = query_database("dna")

    assert not documents


def test_embedding_model(app):
    with app.app_context():
        assert current_app.vector_db.embeddings.model == "mxbai-embed-large"
