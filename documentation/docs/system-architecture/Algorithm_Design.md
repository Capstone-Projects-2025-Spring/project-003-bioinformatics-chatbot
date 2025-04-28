---
sidebar_position: 4
---

# Algorithm Description

This document is a summary of the algorithms used in the project

## Indexing

In order to turn the documents from stakeholders into useable information for
answering questions and creating tutorials, there needs to be a way to properly parse these documents.

One of the most popular, and powerful, methods of transforming documents
into searchable objects by content is known as *Semantic Embedding*.

Semantic Embedding is achieved by chunking documents, tokenizing words and placing
them into a vector-space. In order to transform the chunk of tokens into a vector space
an embedding model is used, i our case the pre trained embedding model used is mxbai-embed-large.
Once the chunks of data are send through the embedding model and vectorized the vectors are  saved
and stored in Langchain's created PGVector table on our database. Semantic embedding allows for 
useful searches as each document has a unique space on the vector-space, allowing for complex queries 
containing synonyms to retrieve documents.


## Query Translation

In order to meaningfully map a user's input to the indexed documents, 
or knowledge base, some form of query translation has to occur. The general
steps for this include tokenization and vectorization. 

In a similar fashion to document tokenization, 
the user's query has to be tokenized and then ran through the embedding model which will
vectorize the query much like the documents.

Once the query is translated, it will be used to retrieve the most relevant documents. 

## Retrieval Augmented Generation (RAG)

### Retrieval

Retrieval uses the indexed documents described previously as a knowledge base.
The translated query will then be compared against the indexed documents using a retrieval method.

### Augmentation

Once the correct documents are chosen out of the indexed knowledge base,
they need to be prepared for the generation phase.

Augmentation is done during the indexing phase of the document as it is split into chunks which are
stored in the database.


### Generation

The last step of the RAG process and algorithms is generation via LLM.
The retrieved and augmented documents, as well as any other context 
(In this case, the initial user query) are passed to a language model
such as ChatGPT, Gemini, or something else.

This last step translates the given context, and items from the knowledge
base, into useable answers and context for users.
