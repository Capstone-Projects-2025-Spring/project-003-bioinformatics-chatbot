---
sidebar_position: 5
---

# Database Design

This Document is a summary of the database design for the project

## Entity-Relation Diagram

```mermaid
erDiagram
    USER ||--|{ ROLE: has
    USER {
        int id PK
        string username
        string password_hash
    }
    ROLE
    ROLE {
        int id PK
        int user_id FK
        string role
    }

    DOCUMENT ||--|{ BAG-OF-WORDS : contains
    DOCUMENT {
        int id PK
        string document_name
        string file_type
        BLOB file_contents
    }
    BAG-OF-WORDS {
        int id PK
        int document_id FK
        string word
        int count
    }
```
*Figure: Entity-Relation diagram*

### User Table
Used to store admin users which will be able to upload documents
- id: int - primary key
- username: string : unique username for user
- password_hash: string : password stored as a hash

### Role Table
Used to store roles of Users
- id: int - primary key
- user_id: int - foreign key (User: id) : contains a relation to a user
- role: string : the role of a user which brings permissions

### Document Table
Stores uploaded documents
- id: int - primary key
- document_name: string: name of uploaded document
- document_type: string: file extension of the document
- file_contents: BLOB: the uploaded file

### Bag of Words Table
Holds the bag of words for document searching
- id: int - primary key
- document_id: int - foreign key (Document: id) : contains a relation to an uploaded document
- word: string: one of the words in the related documents bag
- count: int: the number of times word shows up in the related document

