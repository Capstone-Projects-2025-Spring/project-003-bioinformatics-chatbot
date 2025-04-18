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
    FILE_PATH = "./tests/test_data/Dna.pdf"

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

    FILE_PATH = "./tests/test_data/Dna.txt"

    # Call the function you want to test
    result = parse_txt(FILE_PATH)

    # Example test assertion - check if result is not empty
    assert len(result) > 0, "No txts were parsed."

    # Example test assertion - check if result is a list
    assert isinstance(result, list), "Result is not a list."



# Testing for Formatted Pdfloader


import fitz  # PyMuPDF

#Extract the formatted info like front size, bold, table
def extract_text_spans(file_path):
    doc = fitz.open(file_path)
    all_spans = []
    for page in doc:
        text_dict = page.get_text("dict")
        for block in text_dict["blocks"]:
            if block["type"] == 0:  # Text block
                for line in block["lines"]:
                    for span in line["spans"]:
                        text = span["text"].strip()
                        if text:
                            all_spans.append({
                                "text": text,
                                "font": span["font"],
                                "size": span["size"],
                                "bold": "Bold" in span["font"]
                            })
    return all_spans

#Get the formatted_test_pdf
@pytest.fixture(scope="module")
def pdf_spans():

    FILE_PATH = "./tests/test_data/formatted_test_pdf.pdf"

    return extract_text_spans(FILE_PATH)

# Test for bold 
def test_title_present_and_bold(pdf_spans):
    title = next((s for s in pdf_spans if s["text"] == "Sample Formatted PDF"), None)
    assert title is not None, "Title text not found"
    assert title["bold"], "Title is not bold"
    assert title["size"] >= 16.0, "Title font size is too small"

# Test for bullet points
def test_bullet_point_present(pdf_spans):
    bullet = next((s for s in pdf_spans if s["text"] == "- First bullet point"), None)
    assert bullet is not None, "Bullet point not found"
    assert not bullet["bold"], "Bullet point should not be bold"
    assert bullet["size"] == 12.0, "Bullet point font size incorrect"

# Test for tables info
def test_table_header_bold(pdf_spans):
    header = next((s for s in pdf_spans if s["text"] == "Name"), None)
    assert header is not None, "Table header 'Name' not found"
    assert header["bold"], "'Name' should be bold"
    assert header["size"] == 12.0, "Header font size incorrect"