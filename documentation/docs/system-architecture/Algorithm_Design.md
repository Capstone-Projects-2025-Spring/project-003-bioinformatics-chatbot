---
sidebar_position: 4
---


# Algorithm Description

This document is a summary of the algorithms used in the project

## Indexing

In order to turn the documents from stakeholders into useable information for answering questions and creating tutorials, there needs to be a way to properly parse these documents.

One of the most popular, and powerful, methods of transforming documents into searchable objects by content is known as *Bag of Words*.

Bag of Words is achieved by tokenizing words, and then removing common words & transforming important content words into their roots. From this, a form of context vocabulary can be created, and each document is then able to be seen as a vector of word frequency. Multiple ways of representing them is possible, including Term Frequency, Term Frequency - Inverse Document Frequency (TF-IDF is notably the most poular), and binary representations.

This is the method we intend on using to index documents for usage.

## Query Translation

In order to meaningfully map a user's input to the indexed documents, or knowledge base, some form of query translation has to occur. The general steps for this include tokenization and stemmining. 

In a similar fashion to document tokenization, the user's query has to be tokenized into individual words of significance, and filler words such as "is" and "a" can be removed. Stemming involves reducing words to their most basic form. 

Once the query is translated, it will be used to retrieve the most relevant documents. 

## Retreival Augmented Generation (RAG)

### Retreival

Retrieval uses the indexed documents described previously as a knowledge base. The translated query will then be compared against the indexed documents using a retrieval method.

### Augmentation

Once the correct documents are chosen out of the indexed knowledge base, they need to be prepared for the generation phase.

This can be done by splitting the documents into chunks, and there are specific algorithms that can do this, such as sentence or paragraph splitting as a type of tokenization. Other options include splitting in fixed lengths, or by context of the given content.

### Generation

The last step of the RAG process and algorithms is generation via LLM. The retrieved and augmented documents, as well as any other context (In this case, the initial user query) are passed to a language model such as ChatGPT, Gemini, or something else.

This last step translates the given context, and items from the knowledge base, into useable answers and context for users.
