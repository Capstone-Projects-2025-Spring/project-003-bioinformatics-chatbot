import sys
import os
import pytest

# Add the project root to Python's module path
sys.path.insert(0, os.path.abspath(os.path.join(os.path.dirname(__file__), "..")))

# Getting the parse function from the py files
from app.doc_parsers.parse_pdf import parse_pdf
from app.doc_parsers.parse_txt import parse_txt


def test_parse_pdf():
    """

    test the parse_pdf

    """
    FILE_PATH = "./app/doc_parsers/data/Dna.pdf"

    # Call the function you want to test
    result = parse_pdf(FILE_PATH)

    # Example test assertion - check if result is not empty
    assert len(result) > 0, "No PDFs were parsed."

    # Example test assertion - check if result is a list
    assert isinstance(result, list), "Result is not a list."


def test_parse_txt():
    """

    test the parse_txt

    """

    FILE_PATH = "./app/doc_parsers/data/Dna.txt"

    # Call the function you want to test
    result = parse_txt(FILE_PATH)

    # Example test assertion - check if result is not empty
    assert len(result) > 0, "No txts were parsed."

    # Example test assertion - check if result is a list
    assert isinstance(result, list), "Result is not a list."

