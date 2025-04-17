from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain.schema.document import Document
import os


DATA_PATH = os.path.abspath("./tests/test_data/Dna.pdf")


# Parse any file in pdf
def parse_pdf(FILE_PATH):
    """
    Parse a pdf files into chunks

    Args:
        FILE_PATH (_type_): file path for pdf file

    Returns:
        LIST (_type_): A list of chucks
    """
    documents = load_documents(FILE_PATH)
    chunks = split_documents(documents)
    for chunk in chunks:
        chunk.page_content = chunk.page_content.replace("\x00", "")
    return chunks


# load the pdf files
def load_documents(FILE_PATH):
    """
       A function to load the pdf documnet.

    Args:
         FILE_PATH (_type_): file path for pdf file

    Returns:
        LIST (_type_): List of Document object for each page
    """
    document_loader = PyPDFLoader(FILE_PATH)
    return document_loader.load()


# Split the pdf pages into chuck for easier use and clearness
def split_documents(documents: list[Document]):
    """
    Split the pdf pages into chuck for easier use and clearness

    Args:
        documents (list[Document]): List of Pages

    Returns:
        LIST (_type_): List of chunks object for pdf file
    """
    text_splitter = RecursiveCharacterTextSplitter(
        chunk_size=450,  # Larger chunk size for more context
        chunk_overlap=150,  # Increased overlap to retain context between chunks
        length_function=lambda x: len(
            x.split()
        ),  # Using word count instead of character count
        is_separator_regex=True,  # Allowing regex for flexible splitting
    )
    return text_splitter.split_documents(documents)


"""
def main():
    chunks = parse_pdf(FILE_PATH)
    print(chunks[0])

if __name__ == "__main__":
    main()
"""
