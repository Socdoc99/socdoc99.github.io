---
title: 'LOVE — Plataforma de aprendizaje de LSC'
summary: 'Se desarrolló una aplicación web para aprender Lengua de Señas Colombiana (LSC) de forma interactiva y entretenida. La plataforma enseña cada seña junto con su significado, a través de un diccionario en video, lecciones por temas y dinámicas de juego como la racha diaria. Además, cada producto de la marca LOVE (camisetas, mugs, gorras y llaveros) incluye un código que conecta la prenda con su lección, uniendo el mundo físico y el digital. El contenido está diseñado para ser validado por personas sordas, intérpretes y profesionales del área.'
stack: ['Django', 'Django REST Framework', 'PostgreSQL', 'Firebase Admin SDK', 'Ionic', 'React', 'TypeScript', 'Vite', 'Capacitor']
status: 'Proyecto de grado en equipo de tres personas, en fase de MVP'
repoUrl: 'https://github.com/Socdoc99/01-LSC-APP-0.1'
order: 1
---

## El problema

Es el componente tecnológico de una marca de productos personalizados inspirados en la Lengua de Señas Colombiana (LSC) y la cultura sorda. El objetivo es enseñar LSC mediante una plataforma web y vincularla a los productos físicos de la marca a través de una "experiencia phygital": cada producto incluye un código de canje que da acceso a contenido digital.

## La solución

Una plataforma de estilo similar a Duolingo, organizada en módulos de aprendizaje con señas en video. El proyecto está dividido en fases documentadas (`plan/`), y la fase actual es la Fase 1 (MVP): un módulo piloto de aprendizaje, todavía sin tienda ni funciones sociales.

**Backend:** Django 6 + Django REST Framework + PostgreSQL, con autenticación gestionada por Firebase Admin SDK.
**Frontend:** Ionic + React 19 + TypeScript + Vite, con Firebase Auth en el cliente y Capacitor para un futuro empaquetado nativo (Android/iOS).
**Despliegue:** Render (backend con Gunicorn + Whitenoise).

## Decisiones técnicas

Un principio de diseño del proyecto: ninguna funcionalidad puede depender únicamente de una señal sonora, ya que el público principal incluye personas sordas. Y ningún contenido en LSC se publica sin haber sido grabado o validado por una persona sorda o un intérprete certificado.

El uso de Firebase para autenticación (en vez de manejarla completamente en Django) permitió compartir el mismo mecanismo de login entre el frontend web/móvil (Ionic) y el backend, simplificando el flujo de sesión en los dos lados.

## Estado actual

En desarrollo activo. Los modelos principales (Usuario, Módulo, Seña, Ejercicio, ProgresoUsuario) ya están definidos; la lógica de vistas y endpoints se sigue construyendo módulo por módulo. Trabajo en equipo con Sandra Patricia Montoya Martínez y Cristian David Guayabo Vizcaya.
