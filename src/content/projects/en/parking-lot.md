---
title: 'Parking Lot — Parking space reservations'
summary: 'An academic prototype of a parking space reservation system with separate roles for drivers and administrators.'
stack: ['Django', 'Django REST Framework', 'JWT', 'PostgreSQL', 'Angular', 'Ionic']
status: 'Academic prototype (final course project), unfinished'
repoUrl: 'https://github.com/Socdoc99/PARKING-LOT'
order: 3
---

## The problem

A final project for a university course: design a system that lets a driver look up and reserve available parking spaces, while an administrator manages parking lots and their spaces.

## The solution

A driver can look up and reserve spaces, filtering by vehicle type. An administrator manages parking lots and their spaces from the same backend. Authentication distinguishes between the two roles (`DRIVER` / `ADMIN`) through a custom, email-based user model.

**Backend:** Django 4.2 + Django REST Framework, JWT authentication (`djangorestframework-simplejwt`), PostgreSQL, `django-cors-headers`, `python-decouple` for environment variables.
**Frontend:** Angular 17 + Ionic 7.

## Technical decisions

Splitting authentication by role at the user-model level (instead of using Django's generic groups/permissions) kept authorization rules simple at the endpoint level: each view can ask directly for the authenticated user's role.

## Current status

In development, unfinished. The backend has models, permissions and business logic implemented (parking lots, spaces, reservations). The frontend is at an earlier stage.
