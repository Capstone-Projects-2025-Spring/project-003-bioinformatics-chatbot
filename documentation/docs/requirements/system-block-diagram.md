---
sidebar_position: 2
---

# System Block Diagram

This page explains the system's block diagram and how it functions step-by-step.

## Diagram

![Figure 1: System Block Diagram](../../static/img/Block%20Diagram.png)
*Figure 1: System Block Diagram*

The block diagram, shown in **Figure 1**, illustrates a system designed to answer user questions. Users interact with the **Frontend Application**, which sends their queries to a **Server**. The Server processes the question by querying an **Indexed Documents Database**. If relevant documents are found, they are retrieved and used to construct a prompt for a **Large Language Model (LLM)**, which generates an answer. If no documents are found, the Server responds with “I don’t know.” Once the LLM generates an answer, it is sent back to the Server, which then forwards it to the Frontend Application, presenting the response to the user.