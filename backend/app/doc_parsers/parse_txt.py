import os
import re
from langchain.text_splitter import RecursiveCharacterTextSplitter





def parse_txt(FILE_PATH):
    """
    Parse a txt files into chunks

    Args:
        FILE_PATH (_type_): file path for pdf file

    Returns:
        LIST (_type_): A list of chucks
    """
    # Check if the file exists
    if not os.path.isfile(FILE_PATH):
        print(f"Error: The file '{FILE_PATH}' does not exist.")
        return []

    chunks = []

    with open(FILE_PATH, "r", encoding="utf-8") as file:
        # Read entire file and strip extra spaces
        content = file.read().strip()

        # Use a text splitter to break the content into chunks
        text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=1000,               # Larger chunk size for more context
            chunk_overlap=150,             # Increased overlap to retain context between chunks
            length_function=lambda x: len(x.split()),  # Using word count instead of character count
            is_separator_regex=True,       # Allowing regex for flexible splitting
        )
        chunks.extend(text_splitter.split_text(content))

        return chunks


"""
def main():
    chunks = parse_txt(FILE_PATH)
    # Output the list of sentences
    for idx, sentence in enumerate(chunks, 1):
        print(f"Sentence {idx}: {sentence}")

if __name__ == "__main__":
    main()
"""
