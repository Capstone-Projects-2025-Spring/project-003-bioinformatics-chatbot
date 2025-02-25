import os
import re

#path to the data_txt folder
folder_path = './data_txt'

#Store sentences from the data_txt 
sentences = []

#Loop through each file in data_txt's folder and read
for filename in os.listdir(folder_path):
    file_path = os.path.join(folder_path, filename)

    # Check if it's a file (not a directory)
    if os.path.isfile(file_path):

        # Open and read the content of the file
        with open(file_path, 'r') as file:
            content = file.read()

            #add the file name into sentences for clarity
            sentences.append(filename)

            # Split content into sentences (simple sentence split based on periods, question marks, etc.)
            sentence = re.split(r'(?<=[.!?])\s+', content.strip())

            # Add the sentences from this file to the list
            sentences.extend(sentence)

# Output the list of sentences
for idx, sentence in enumerate(sentences, 1):
    print(f"Sentence {idx}: {sentence}")
