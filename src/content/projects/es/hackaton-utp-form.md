---
title: 'Formulario Hackatón UTP'
summary: 'Formulario de inscripción con validación, reCAPTCHA y envío automático de correos de confirmación para la Hackatón UTP.'
stack: ['Next.js', 'TypeScript', 'React Hook Form', 'Zod', 'Nodemailer']
status: 'Finalizado y usado en el evento real'
repoUrl: 'https://github.com/Socdoc99/hackaton-utp-form'
order: 4
---

## El problema

La Hackatón UTP 2025/2 (Universidad Tecnológica de Pereira) necesitaba un formulario de inscripción en línea que validara los datos de cada participante y confirmara su registro automáticamente por correo.

## La solución

Un formulario construido con Next.js 14 (App Router) que valida los datos en el cliente con React Hook Form y Zod. Al enviarse, dispara el envío de un correo de confirmación al participante mediante Nodemailer (SMTP), con una plantilla HTML propia (estética neón) que incluye fecha, hora y lugar del evento.

**Frontend:** Next.js 14, React, TypeScript, Tailwind CSS.
**Backend:** Node.js, Nodemailer.

## Decisiones técnicas

El formulario incluye un reCAPTCHA v2 invisible y genera un token antes de enviar los datos. Al revisar el código encontré que esa verificación no queda conectada en el flujo que el formulario usa realmente: existe lógica de verificación contra la API de Google, pero en otra parte del código, pensada para un propósito distinto. Es un hallazgo de la revisión, no una función que esté funcionando hoy.

## Estado actual

Terminado como proyecto final de un curso de desarrollo web, y usado para la inscripción real al evento.
