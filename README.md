# 🔥 PORTIX — Premium .NET Software Engineer Portfolio

A premium, recruiter-optimized software developer portfolio for an **Associate / Mid-level .NET Backend Engineer (1.5+ Years Experience)**. Built with modern semantic **HTML5**, **CSS3 (Custom Properties & Flex/Grid)**, and vanilla **JavaScript (ES6+)** — zero framework bloat, lightning fast, and 100% responsive.

---

## 🎨 Visual System & Signature Design Language

- **Obsidian Dark Canvas**: Deep obsidian and rich charcoal background palette (`#121212`, `#0D0D0D`, `#1C1C1C`).
- **Terracotta Orange Brand Accents**: Vibrant electric terracotta highlights (`#E85D36`, `#FF7443`, glow `rgba(232, 93, 54, 0.4)`).
- **Proportional Typography**: Clean modern typography using **Plus Jakarta Sans**, **Inter**, and **Fira Code** with strict vertical rhythm.
- **Hero Stage**:
  - Glowing radial sun circle (`#E85D36` &rarr; `#FF7443`) with subtle breathing animation.
  - Minimalist photo upload placeholder stage (`assets/hero-person.png`).
  - Floating software development badges (`<C# 12 />`, `Azure Cloud`, `Clean CQRS`).
  - Rotating/floating circular orange badge (`HIRE ME NOW`) linking directly to contact.
  - Giant watermark background typography (`SAI PAVAN`) positioned behind content with zero text collisions.
  - Quick production metrics strip (*1.5+ Years Exp*, *15+ APIs*, *Sub-100ms Latency*, *99.9% Clean Code*).
- **Interactive Micro-Interactions**:
  - Top scroll progress bar indicator.
  - Ambient cursor glow follower on desktop.
  - Spotlight border reflections on interactive cards.
  - Magnetic physics buttons.
  - Interactive 3D parallax on hero hover.
  - Tabular numeric counter animations.
  - Respects `prefers-reduced-motion` for full accessibility.

---

## 📁 File Structure

```text
Portfolio/
├── index.html        # Semantic HTML5 markup with OpenGraph, Twitter, SEO metadata & skip-link
├── styles.css        # Pure CSS3 design system, stacking cards, vertical timeline, print stylesheet
├── script.js         # Modal controllers, Framer stacking cards engine, contact validation & auto-scroll
└── README.md         # Comprehensive setup, API integration, and customization documentation
```

---

## 🚀 Sections Overview

### 1. Header Navigation (`#hero`)
- `PAVAN` logo with the signature terracotta dot.
- Desktop navigation links (`WORKS`, `SKILLS`, `ABOUT`, `EXPERIENCE`, `EDUCATION`, `CONTACT`).
- `[->] LET'S TALK` action pill.
- Mobile drawer menu with smooth transition toggling.

### 2. Selected Works Showcase (`#works`)
- **Framer / Apple-Style Stacking Cards on Scroll**: Case studies stack like a physical deck of cards as you scroll down, with smooth scaling, dimming, and elevation transitions.
- 4 production-grade case studies:
  1. **[Zentix] E-Commerce Core & Distributed Order Engine** (ASP.NET Core 8, MediatR CQRS, RabbitMQ Outbox, Redis, Docker).
  2. **[Lumio] Multi-Tenant SaaS Financial Analytics API** (PostgreSQL, Dapper Micro-ORM, EF Core, Hangfire Jobs, JWT).
  3. **[Arkeo] Real-Time Logistics & Fleet Telemetry Hub** (SignalR Hubs, Blazor WebAssembly, WebSockets, Leaflet).
  4. **[Novu] Modular Clean Architecture Starter Template** (Clean Architecture, DDD, Result Pattern, xUnit, CI/CD).
- Live telemetry badges with pulsing radar rings (`@keyframes radar-pulse`) and animated metrics counters.
- Action buttons on each card: **Architecture Details**, **GitHub Repo**, and **Live Demo**.

### 3. Comprehensive Project Architecture Modal
- Detailed modal popup displaying:
  - Project Overview
  - Problem Statement & Engineering Solution 2-column comparison
  - Key Architectural Decisions & Patterns
  - Core Highlights & Capabilities
  - Challenges & Implementation Details callout
  - Technology Stack badges
  - Direct links to repository and Swagger/Live Demo

### 4. Technical Skills Section (`#skills`)
- 8 visually distinct skill categories (no arbitrary or meaningless percentage bars):
  1. **Programming Languages**: C# 12/11, SQL (T-SQL, PL/pgSQL), JavaScript, TypeScript, HTML5 & CSS3.
  2. **Backend Development**: ASP.NET Core 8, RESTful Web APIs, Minimal APIs, EF Core, Dapper, SignalR, Hangfire.
  3. **Architecture & Design**: Clean Architecture, CQRS (MediatR), SOLID, Domain-Driven Design (DDD), Result Pattern, Transactional Outbox.
  4. **Databases & Caching**: Microsoft SQL Server, PostgreSQL, Redis, Query Profiling, Indexing Strategies.
  5. **Cloud & DevOps**: Microsoft Azure (App Services, Azure SQL), Docker Multi-Stage, GitHub Actions CI/CD, Azure Blob Storage.
  6. **Frontend Development**: Blazor WebAssembly, Razor Components, Vanilla JavaScript (ES6+), Semantic HTML5, CSS Flex/Grid.
  7. **Testing & QA**: xUnit, Moq, FluentAssertions, WebApplicationFactory, Integration Testing, TDD Mindset.
  8. **Development Tools**: Visual Studio 2022, VS Code, Git, Postman, Swagger/OpenAPI, Docker Desktop, Serilog/Seq.

### 5. About Me (`#about`)
- Engineering philosophy and background narrative.
- Personal approach quote callout.
- Core technical focus chips.
- **Developer Snapshot Card**: Role focus, years of experience, primary languages/frameworks, and live availability status pill (*Open to Full-Time • Hybrid / Remote*).

### 6. Career Progression (`#experience`)
- Modern vertical timeline with connected gradient line and glowing nodes:
  - **Associate Software Engineer (.NET)** &bull; TechCorp Solutions (2024 &mdash; Present)
  - **Junior .NET Developer / Intern** &bull; CloudInnovate Labs (Earlier &bull; 6 Months)
- Architect Endorsement Testimonial Card with 5-star rating (★★★★★).

### 7. Education & Certifications (`#education`)
- **Academic Degree Card**: B.Tech in Computer Science & Engineering (First Class Honors).
- **Professional Certifications**:
  - *Microsoft Certified: Azure Fundamentals (AZ-900)*
  - *Clean Architecture & Domain-Driven Design in .NET (Enterprise .NET Academy)*
  - *Event-Driven Microservices & RabbitMQ Messaging (Distributed Systems Institute)*

### 8. Currently Exploring Section (`#exploring`)
- Compact modern cards highlighting technologies being actively researched:
  - *.NET 9 & C# 13* (Native AOT, collection expressions, LINQ performance)
  - *.NET Aspire* (Cloud-native service discovery & telemetry)
  - *MassTransit & Sagas* (State machines & event-driven orchestrations)
  - *AI via Semantic Kernel* (RAG pipelines & LLM backend integration)

### 9. Contact Section (`#contact`)
- One-click copy email button with animated toast feedback.
- Quick pills for LinkedIn, GitHub, and Resume.
- Accessible form with field-by-field validation (name, email regex, message).
- Interactive card spotlight following cursor movement.
- Glowing focus states, animated submit arrow, and safe demo-mode feedback notifying the user without false backend promises.

### 10. Resume Quick-View & Print Modal
- Executive summary, core proficiencies, work experience bullets, and education.
- **Download PDF** button linked to `assets/Sai_Pavan_Resume.pdf`.
- **Print / Save as PDF** button with dedicated `@media print` CSS styling for a clean, professional, printer-friendly one-pager.

### 11. Multi-Tier Architectural Footer (`#footer`)
- **Brand & Engineering Bio**: `PAVAN` logo with pulsing dot, developer focus tagline, live availability radar pill, and SVG social connectivity badges.
- **In-Page Navigation**: Clean column of section targets with animated slide-in arrows on hover.
- **Direct Action Card & Back-to-Top**: Quick CTA block with "LET'S TALK" and "VIEW RESUME" actions, plus an elevated magnetic Back to Top button.
- **Precision Colophon Bar**: Hairline gradient divider, dynamic copyright year, `.NET 8` Clean Architecture mindset badge, and tech footprint metadata.

---

## 🛠️ Customization Guide

### 1. Upload Your Photo
1. Place your PNG/JPG photo in `assets/` (e.g. `assets/hero-person.png`).
2. In `index.html` (inside `#hero`), set the `src` attribute of `#hero-person-img`:
   ```html
   <img src="assets/hero-person.png" alt="Your Name" class="person-image" id="hero-person-img" />
   ```
3. Remove `style="display: none;"` from the `<img>` and hide or remove `.empty-placeholder-frame`.

### 2. Add Your Resume PDF
Place your resume file at `assets/Sai_Pavan_Resume.pdf` (or update the `href` in `#resume-download-btn` in `index.html`).

### 3. Connect Live Email Delivery (Formspree)
1. Sign up for free at [formspree.io](https://formspree.io).
2. Create a form and copy your Form ID (e.g., `xpzvbkoe`).
3. In `index.html`, set the action:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" id="portfolio-contact-form" class="portix-form">
   ```
4. In `script.js`, you can submit the form directly using `fetch()` to your Formspree endpoint if desired.

---

## 🌐 Free 1-Click Deployment

- **GitHub Pages**:
  1. Push this folder to a GitHub repository.
  2. Go to **Repository Settings &rarr; Pages**.
  3. Under **Branch**, select `main` and `/root`.
  4. Click **Save** — your site will be live at `https://<username>.github.io/<repo>/`.
- **Netlify**:
  1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
  2. Drag and drop the `Portfolio` directory.
- **Vercel**:
  1. Run `npx vercel` in this folder or link via GitHub.
