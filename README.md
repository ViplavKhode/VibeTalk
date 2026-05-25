<div align="center">
  <h1>🎙️ VibeTalk</h1>
  <p>An AI-powered voice tutoring platform where you can learn anything through real-time conversations with intelligent voice agents.</p>

  <div>
    <img src="https://img.shields.io/badge/-Next.JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=black" alt="next.js" />
    <img src="https://img.shields.io/badge/-Vapi-black?style=for-the-badge&logoColor=white&logo=vapi.com&color=green" alt="vapi" />
    <img src="https://img.shields.io/badge/-Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="supabase" />
    <img src="https://img.shields.io/badge/-Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white" alt="clerk" />
    <img src="https://img.shields.io/badge/-Tailwind-00BCFF?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="tailwind" />
    <img src="https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="typescript" />
  </div>
</div>

---

## 📋 Table of Contents

1. [Introduction](#introduction)
2. [Tech Stack](#tech-stack)
3. [Features](#features)
4. [Environment Variables](#environment-variables)

---

## 🤖 Introduction <a name="introduction"></a>

VibeTalk is a full-stack LMS SaaS application that lets users learn through AI-powered voice agents. Whether you want to practice a language, explore a new subject, or get tutored on a complex topic, VibeTalk connects you with customizable AI tutors for real-time, voice-driven learning sessions. Built with a scalable, modern stack including Next.js, Supabase, and Clerk — and powered by Vapi for live voice AI interactions.

---

## ⚙️ Tech Stack <a name="tech-stack"></a>

- **[Next.js](https://nextjs.org/)** — React framework powering server-side rendering, routing, and the full-stack architecture.
- **[Vapi](https://vapi.ai/)** — Voice AI platform enabling real-time, low-latency conversations with AI tutors, including speech-to-text and text-to-speech.
- **[Supabase](https://supabase.com/)** — Open-source backend providing a PostgreSQL database, real-time subscriptions, and storage.
- **[Clerk](https://clerk.com/)** — Authentication and user management platform with support for Google login, billing, and subscription tiers.
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first CSS framework for building a responsive and modern UI.
- **[shadcn/ui](https://ui.shadcn.com/)** — Accessible, customizable component library built on Radix UI and Tailwind CSS.
- **[TypeScript](https://www.typescriptlang.org/)** — Typed superset of JavaScript for safer, more maintainable code.
- **[Zod](https://zod.dev/)** — TypeScript-first schema validation for reliable data handling.
- **[Sentry](https://sentry.io/)** — Real-time error tracking and performance monitoring.

---

## 🔋 Features <a name="features"></a>

- **AI Voice Agents** — Start live tutoring sessions with voice AI that specializes in any subject you choose.
- **Authentication** — Secure sign-up and sign-in powered by Clerk, including Google OAuth.
- **Billing & Subscriptions** — Manage plans, upgrades, and payment details directly within the app.
- **Create a Tutor** — Build your own custom AI tutor by selecting a subject, topic, and conversation style.
- **Bookmarks & Session History** — Bookmark favorite tutors and revisit past learning sessions anytime.
- **Search & Filters** — Quickly find the right tutor using the search bar and topic filters.
- **Real-time Database** — Supabase integration for live data updates and storage.
- **Responsive Design** — Fully optimized across desktop, tablet, and mobile devices.
- **Modern UI/UX** — Clean interface built with Tailwind CSS and shadcn/ui components.
- **Scalable Architecture** — Modular codebase with reusable components, designed to scale.

---

## 🔐 Environment Variables <a name="environment-variables"></a>

Create a `.env` file in the root of your project and add the following:

```env
# Sentry
SENTRY_AUTH_TOKEN=

# Vapi
NEXT_PUBLIC_VAPI_WEB_TOKEN=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

# Supabase
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

You can obtain your credentials from:
- [Supabase Dashboard](https://supabase.com/dashboard)
- [Clerk](https://clerk.com/)
- [Sentry](https://sentry.io/)
- [Vapi](https://vapi.ai/)
