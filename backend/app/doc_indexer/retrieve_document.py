from flask import current_app


def query_database(query_text, k=3):
    vector_db = current_app.vector_db
    return vector_db.similarity_search_with_score(query_text, k=k)
