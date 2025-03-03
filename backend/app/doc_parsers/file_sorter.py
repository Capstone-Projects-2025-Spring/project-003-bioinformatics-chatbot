import os

from parse_txt import parse_txt
from parse_pdf import parse_pdf

# Data Directory
DIRECTORY = "./data"


def file_sorter(DIRECTORY):
    """
    Args:DIRECTORY (_type_): DIRECTORY path for data

    Sort the file by their file type and call the right parser

    """

    ##Go through Directory data
    for filename in os.listdir(DIRECTORY):
        filepath = os.path.join(DIRECTORY, filename)

        # Get the file extension
        ext = os.path.splitext(filename)[1].lower()  # Extract file extension

        if ext == ".pdf":
            print(f"\n\n {os.path.basename(filename)} \n\n")
            chunks = parse_pdf(filepath)
            # Output the list of sentences
            print(chunks[0])
        elif ext == ".txt":
            print(f"\n\n {os.path.basename(filename)} \n\n")
            chunks = parse_txt(filepath)
            # Output the list of sentences
            print(chunks[0])
        else:
            print("Can't Process that file type")


file_sorter(DIRECTORY)

