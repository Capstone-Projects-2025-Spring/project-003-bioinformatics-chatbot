from app import vector_db


def query_database(query_text, k=1):
    return vector_db.similarity_search_with_score(query_text, k=k)
