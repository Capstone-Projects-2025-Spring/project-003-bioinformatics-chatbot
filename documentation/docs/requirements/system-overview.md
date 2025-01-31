---
sidebar_position: 1
---

# System Overview

## Project Abstract

This document proposes a web application that leverages the massive leaps in learning technology and human-mimicking behavior to help Bioinformatics researchers narrow down approaches to problems more easily. This application will allow users to ask questions about solving in-depth bioinformatics problems and be given accurate and detailed step-by-step tutorials on how to approach their problem with a method chosen specifically for the problem presented. The chatbot application should be able to help students and researchers further their studies in a method that is both more accurate and more time-effective.

## Conceptual Design

The frontend user interface of this app will be built using React.js, JavaScript, HTML, and CSS. This will allow for the creation of a clean and lightweight application for UI components, a satisfying user interface, and one that can handle user interactions well. It will also be responsible for sending user queries to the AI system, holding the chat history for context, and allowing users to download their conversation so that the method tutorial can be saved. The backend will be built using Python and Flask. The chatbot will be powered by Retrieval-Augmented Generation (RAG) to retrieve the correct method for the problem given by the user, and an LLM to use the provided method from the RAG to create a tutorial for the user.

## Background

Bioinformatics is a rapidly growing field that is using breakthroughs in Computer Science and Machine Learning to study and solve biological problems. Multiple Nobel Prizes in the past few years have been won in the fields of Biology and Chemistry by computer scientists. However, given the differences between both the content and the people in the respective fields, clear and effective communication can be a challenge. With the breakthroughs in the AI field and the rise of Large Language Models, the ability to bridge this gap has never been easier, allowing researchers on both sides of the academic 'fence' to easily learn about and work in the field of Bioinformatics. With that in mind, this Chatbot is meant to help bridge that communication gap, with the ability to customize answers and answer specific questions surrounding bioinformatics.
