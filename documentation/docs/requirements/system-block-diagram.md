---
sidebar_position: 2
---

# System Block Diagram

The block diagram illustrates a system designed to answer user questions. The system consists of four main components: **Frontend Application**, **Server**, **Indexed Documents Database**, and **Large Language Model (LLM)**.

## Diagram

![Figure 1: System Block Diagram](../../static/img/Block%20Diagram.png)
*Figure 1: System Block Diagram*

## Frontend Application
The **Frontend Application** serves as the user interface for interacting with the system. Users submit their queries through this interface, which then forwards the requests to the **Server**. Once a response is generated, the Frontend Application displays the answer to the user.

## Server
The **Server** acts as the central processing unit of the system. It receives queries from the Frontend Application and determines how to handle them.

- The Server first checks the **Indexed Documents Database** for relevant documents.
  - If relevant documents are found, they are retrieved and used to construct a prompt for the **Large Language Model (LLM)**.
  - If no relevant documents are found, the Server responds with “I don’t know.”
- After the LLM generates an answer, the Server forwards the response to the Frontend Application.

## Indexed Documents Database
The **Indexed Documents Database** stores and organizes documents in a way that allows efficient retrieval. When a query is received, the Server searches this database to find relevant documents. These documents are then used to enrich the LLM’s prompt, improving the quality and accuracy of the generated response.

## Large Language Model (LLM)
The **Large Language Model (LLM)** is responsible for generating answers based on the retrieved documents. When prompted by the Server, the LLM processes the input and produces a response. The generated answer is then sent back to the Server for delivery to the user via the Frontend Application. If no relevant documents are available, the LLM is not prompted.
