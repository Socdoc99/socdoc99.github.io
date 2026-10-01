---
title: 'Curador Multiagente de Roadmaps Tech'
summary: 'Sistema que genera rutas de aprendizaje personalizadas (Frontend, Backend, DevOps o Mobile) combinando recuperación semántica (RAG) sobre una base vectorial propia con una interfaz en Streamlit.'
stack: ['Python', 'Streamlit', 'LangChain', 'Sentence-Transformers', 'FAISS']
status: 'Proyecto académico en equipo de tres personas, finalizado y entregado'
repoUrl: 'https://github.com/Socdoc99/final-IA-2025'
order: 2
---

## El problema

Proyecto final del curso de Introducción a la Inteligencia Artificial (UTP): las rutas de aprendizaje suelen ser genéricas y no se adaptan al objetivo ni a la disponibilidad real de quien estudia. El reto era automatizar la curaduría de contenido técnico para producir roadmaps personalizados a partir de documentos reales.

## La solución

El usuario elige un objetivo (Frontend, Backend, DevOps o Mobile), cuántas horas por semana puede estudiar y durante cuántos meses. El sistema lee los documentos de una carpeta de datos, los fragmenta en chunks de 80-150 palabras, genera embeddings con `sentence-transformers/all-MiniLM-L6-v2`, los indexa en una base vectorial FAISS en memoria, y recupera por similitud coseno los fragmentos más relevantes para el objetivo. Un conjunto de agentes (extractor, chunking, indexación, consulta, planificador, redactor y guardrails) se reparte cada paso del flujo, y Streamlit muestra el roadmap final junto con los documentos usados como fuente.

## Decisiones técnicas

Una distinción importante del proyecto: la recuperación semántica (embeddings + FAISS + similitud coseno) es IA real y funciona sobre cualquier documento que se agregue. Pero el roadmap final no lo redacta un modelo de lenguaje generativo — no hay integración con ningún LLM. El contenido sale de una plantilla de temas fija por objetivo, y los documentos recuperados por RAG se usan para anotar qué fuentes respaldan cada bloque del plan, no para generar el texto en sí. LangChain se usa de forma mínima, solo para envolver el pipeline en un `RunnableLambda`.

Al revisar el repositorio para prepararlo como caso de estudio encontré que la carpeta de datos mezclaba el corpus real (roadmaps y papers académicos) con los documentos de especificación de cada agente, lo que hacía que el sistema a veces citara su propia documentación interna como si fuera una fuente del roadmap. Los separé en una carpeta aparte.

## Estado actual

Finalizado y entregado como proyecto de curso, en equipo con Claudia Castaño Mendoza y Juan José Restrepo Londoño. El pipeline de RAG funciona de principio a fin; queda como mejora futura conectar un modelo generativo para redactar el roadmap a partir de los documentos recuperados, en vez de una plantilla fija.
