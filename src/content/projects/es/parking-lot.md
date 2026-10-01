---
title: 'Parking Lot — Reserva de espacios de parqueadero'
summary: 'Prototipo académico de un sistema de reserva de parqueadero con roles diferenciados para conductores y administradores.'
stack: ['Django', 'Django REST Framework', 'JWT', 'PostgreSQL', 'Angular', 'Ionic']
status: 'Prototipo académico (trabajo final de curso), sin terminar'
repoUrl: 'https://github.com/Socdoc99/PARKING-LOT'
order: 3
---

## El problema

Trabajo final de un curso de la carrera: diseñar un sistema que permita a un conductor consultar y reservar espacios de parqueadero disponibles, mientras un administrador gestiona los parqueaderos y sus espacios.

## La solución

Un conductor puede consultar y reservar espacios filtrando por tipo de vehículo. Un administrador gestiona los parqueaderos y sus espacios desde el mismo backend. La autenticación distingue entre los dos roles (`CONDUCTOR` / `ADMIN`) mediante un modelo de usuario personalizado basado en email.

**Backend:** Django 4.2 + Django REST Framework, autenticación con JWT (`djangorestframework-simplejwt`), PostgreSQL, `django-cors-headers`, `python-decouple` para variables de entorno.
**Frontend:** Angular 17 + Ionic 7.

## Decisiones técnicas

Separar la autenticación por rol a nivel de modelo de usuario (en vez de usar grupos o permisos genéricos de Django) simplificó las reglas de autorización en los endpoints: cada vista puede preguntar directamente por el rol del usuario autenticado.

## Estado actual

En desarrollo, sin terminar. El backend tiene modelos, permisos y lógica de negocio implementados (parqueaderos, espacios, reservas). El frontend está en una etapa más temprana.
