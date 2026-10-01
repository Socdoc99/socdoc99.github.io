---
title: 'LOVE — Colombian Sign Language learning platform'
summary: 'A web application was developed to learn Colombian Sign Language (LSC) in an interactive and engaging way. The platform teaches each sign along with its meaning through a video dictionary, topic-based lessons, and game-like features such as a daily streak. In addition, every product from the LOVE brand (t-shirts, mugs, caps, and keychains) includes a code that links the item to its lesson, bridging the physical and digital worlds. The content is designed to be validated by Deaf people, interpreters, and professionals in the field.'
stack: ['Django', 'Django REST Framework', 'PostgreSQL', 'Firebase Admin SDK', 'Ionic', 'React', 'TypeScript', 'Vite', 'Capacitor']
status: 'Three-person thesis project, currently in MVP phase'
repoUrl: 'https://github.com/Socdoc99/01-LSC-APP-0.1'
order: 1
---

## The problem

This is the technology component of a brand of customized products inspired by Colombian Sign Language (LSC) and Deaf culture. The goal is to teach LSC through a web platform and connect it to the brand's physical products through a "phygital" experience: every product ships with a redeem code that unlocks digital content.

## The solution

A Duolingo-style platform organized into learning modules with video-recorded signs. The project is split into documented phases (`plan/`), and the current phase is Phase 1 (MVP): a pilot learning module, with no store or social features yet.

**Backend:** Django 6 + Django REST Framework + PostgreSQL, with authentication handled by the Firebase Admin SDK.
**Frontend:** Ionic + React 19 + TypeScript + Vite, with Firebase Auth on the client and Capacitor for a future native build (Android/iOS).
**Deployment:** Render (backend with Gunicorn + Whitenoise).

## Technical decisions

A core design principle: no feature can depend solely on an audio cue, since the primary audience includes Deaf people. And no LSC content is published without being recorded or validated by a Deaf person or a certified interpreter.

Using Firebase for authentication (instead of handling it entirely in Django) let the web/mobile frontend (Ionic) and the backend share the same login mechanism, simplifying the session flow on both sides.

## Current status

Actively in development. The core models (User, Module, Sign, Exercise, UserProgress) are already defined; view and endpoint logic is still being built module by module. Built as a team with Sandra Patricia Montoya Martínez and Cristian David Guayabo Vizcaya.
