---
title: 'Tech Roadmap Curator with RAG'
summary: 'A system that generates personalized learning roadmaps (Frontend, Backend, DevOps or Mobile) by combining semantic retrieval (RAG) over a custom vector store with a Streamlit interface.'
stack: ['Python', 'Streamlit', 'LangChain', 'Sentence-Transformers', 'FAISS']
status: 'Three-person academic team project, finished and submitted'
repoUrl: 'https://github.com/Socdoc99/final-IA-2025'
order: 2
---

## The problem

Final project for the Introduction to Artificial Intelligence course (UTP): learning paths are usually generic and don't adapt to a learner's goal or actual available time. The challenge was to automate the curation of technical content to produce personalized roadmaps from real documents.

## The solution

The user picks a goal (Frontend, Backend, DevOps or Mobile), how many hours per week they can study, and for how many months. The system reads documents from a data folder, splits them into 80-150 word chunks, generates embeddings with `sentence-transformers/all-MiniLM-L6-v2`, indexes them in an in-memory FAISS vector store, and retrieves the most relevant fragments for the goal via cosine similarity. A set of agents (extractor, chunking, indexing, query, planner, response and guardrails) each handle one step of the flow, and Streamlit displays the final roadmap along with the documents used as sources.

## Technical decisions

An important distinction in this project: the semantic retrieval (embeddings + FAISS + cosine similarity) is real ML/AI and works on whatever documents get added. But the final roadmap isn't written by a generative language model — there's no LLM integration. The content comes from a fixed topic template per goal, and the documents retrieved via RAG are used to annotate which sources back each block of the plan, not to generate the text itself. LangChain is used minimally, only to wrap the pipeline in a `RunnableLambda`.

While reviewing the repository to prepare it as a case study, I found that the data folder mixed the real corpus (roadmaps and academic papers) with each agent's specification documents, which meant the system could end up citing its own internal documentation as a roadmap "source." I separated those into their own folder.

## Current status

Finished and submitted as a course project, built as a team with Claudia Castaño Mendoza and Juan José Restrepo Londoño. The RAG pipeline works end to end; a planned improvement is wiring in a generative model to write the roadmap from the retrieved documents, instead of a fixed template.
