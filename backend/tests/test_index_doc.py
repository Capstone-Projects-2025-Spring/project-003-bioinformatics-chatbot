import sys
import os
import pytest
from flask import current_app
from app.doc_parsers.parse_pdf import parse_pdf
from app.doc_indexer.index_doc import index_and_add_to_db
from app import db


def test_index_doc(client, app, clean_vector_db):
    """
    ✅ Tests that parsed document chunks are correctly indexed in the vector database.
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


def test_duplicate_chunks_ignored(client, app, clean_vector_db):
    """
    ❌ Ensures duplicate document chunks are not reindexed.
    """
    FILE_PATH = "./tests/test_data/Dna.pdf"

    chunks = parse_pdf(FILE_PATH)
    with app.app_context():
        index_and_add_to_db(chunks)  # First indexing
        vector_db = current_app.vector_db
        initial_count = db.session.query(vector_db.EmbeddingStore.id).count()
        index_and_add_to_db(chunks)  # Attempt re-indexing
        final_count = db.session.query(vector_db.EmbeddingStore.id).count()

    assert initial_count == final_count, "Duplicate chunks should not be indexed again"


def test_empty_file(client, app, clean_vector_db):
    """
    ❌ Tests that no chunks are indexed for an empty PDF.
    """

    chunks = []

    with app.app_context():
        index_and_add_to_db(chunks)
        vector_db = current_app.vector_db
        indexed_chunks = db.session.query(vector_db.EmbeddingStore.id).all()

    assert len(indexed_chunks) == 0, "No chunks should be indexed for an empty file"
