# Nexus Identity — Enterprise Registration Wizard

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-EC5990?style=for-the-badge&logo=reacthookform&logoColor=white)
![Zod](https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

### [View Live Demo (Vercel)](https://nexus-identity-app.vercel.app)

A multi-step, production-grade SaaS onboarding wizard built with **React**, **React Hook Form**, **Zod Schema Validation**, and **Tailwind CSS**.

Modern enterprise applications avoid overwhelming users with monolithic 20-field forms. This project segments data collection into clean, localized views while using uncontrolled form references to maintain high performance and type-safe schema validation.

---

## Executive Summary & Architectural Overview

This project was engineered to satisfy a multi-phase technical specification, advancing from a basic controlled state model to an **Enterprise Form Architecture**:

- **Zero Re-Render Keystroke Performance:** Migrated away from standard controlled `useState` form bindings to **React Hook Form (`useForm`)** uncontrolled registration, drastically reducing DOM re-renders.
- **Single Source of Truth Schema Validation:** Integrated **Zod** to define strict validation rules, cross-field refinements (e.g., password matching), and custom formatting messages in a centralized utility file.
- **Step-by-Step Stepwise Execution:** Leveraged RHF's asynchronous `.trigger()` method to validate localized field groups before advancing views, preventing incomplete payloads from progressing.
- **Modern Dark-Mode SaaS UI:** Designed an accessible, FinTech-inspired dark interface complete with focus-glow rings, custom SVG iconography, and responsive grid layouts.

---

## Features & Sprint Deliverables

### Phase 1: Core Wizard & State Architecture

- **UI Segmentation:** Conditionally renders 3 distinct views within a single route:
  - **Step 1:** Personal Information (`firstName`, `lastName`, `dob`)
  - **Step 2:** Account Credentials (`email`, `password`, `confirmPassword`)
  - **Step 3:** Review & Submit (Summary receipt table with password masking)
- **State Lifting:** Form payload is lifted to the controller (`App.jsx`) so data persists when users navigate back and forth between steps.
- **Submission Handlers:** Prevents native `<form>` hard-refreshes (`e.preventDefault()` / `type="button"`) and logs the clean JSON payload upon final submission.

### Phase 2: Real-Time Validation & UX Polish

- **Instant Input Feedback:** `onChange` validation catches missing `@` symbols, short passwords (< 8 characters), and mismatched password confirmations in real time.
- **Conditional Button Disabling:** The **Next** action trigger remains disabled until all local fields in the current view clear schema validation.
- **UX Password Eyeball Toggle:** Built-in custom SVG toggle allowing users to dynamically reveal or obscure their password without triggering form submissions.
- **Dynamic Visual Progress Bar:** A smooth, animated progress bar displays completion percentage (`33%`, `66%`, `100%`) alongside step titles.

### Phase 3: Enterprise Form Architecture

- **React Hook Form Migration:** Fully deprecated manual `useState` field tracking in favor of `.register()` bindings.
- **Zod Schema Integration:** Implemented `.refine()` cross-field validation for strict confirmation matching and clean error messaging.

---

## Tech Stack

- **Frontend Framework:** [React 18](https://react.dev/) (Functional Components + Hooks)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling & Theme:** [Tailwind CSS](https://tailwindcss.com/) (Custom Slate/Sky Palette)
- **Form State Manager:** [React Hook Form](https://react-hook-form.com/)
- **Schema Validation:** [Zod](https://zod.dev/) + `@hookform/resolvers`

---
