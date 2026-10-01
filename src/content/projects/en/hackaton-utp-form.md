---
title: 'Hackathon UTP registration form'
summary: 'A registration form with validation, reCAPTCHA and automatic confirmation emails for the UTP Hackathon.'
stack: ['Next.js', 'TypeScript', 'React Hook Form', 'Zod', 'Nodemailer']
status: 'Finished and used for the real event'
repoUrl: 'https://github.com/Socdoc99/hackaton-utp-form'
order: 4
---

## The problem

The UTP Hackathon 2025/2 (Universidad Tecnológica de Pereira) needed an online registration form that validated each participant's data and automatically confirmed their registration by email.

## The solution

A form built with Next.js 14 (App Router) that validates data on the client with React Hook Form and Zod. On submit, it triggers a confirmation email to the participant via Nodemailer (SMTP), with a custom HTML template (neon aesthetic) that includes the event's date, time and location.

**Frontend:** Next.js 14, React, TypeScript, Tailwind CSS.
**Backend:** Node.js, Nodemailer.

## Technical decisions

The form includes an invisible reCAPTCHA v2 and generates a token before submitting the data. Reviewing the code, I found that this verification isn't actually wired into the flow the form uses: verification logic against Google's API exists elsewhere in the codebase, built for a different purpose. This is a review finding, not a feature that works today.

## Current status

Finished as the final project for a web development course, and used for the event's real registration.
