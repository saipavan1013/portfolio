/**
 * ===================================================================
 * PORTIX - .NET SOFTWARE ENGINEER PORTFOLIO JAVASCRIPT
 * Premium Interactions, Architectural Deep-Dives, Heatmap Generator,
 * Contact Form Validation, Section-Wise Auto-Scroll, & Parallax Physics
 * ===================================================================
 */

// Architectural Deep-Dive Data for Portix Case Studies
const projectArchitectures = {
  'project-1': {
    title: "[Zentix] E-Commerce Core & Distributed Order Engine",
    category: "Backend Microservices • ASP.NET Core 8 & RabbitMQ",
    subtitle: "High-throughput distributed order placement and payment synchronization system modeled on CQRS and Event-Driven Architecture.",
    overview: "A distributed order placement and payment synchronization system modeled on Event-Driven Architecture and CQRS principles. Engineered to handle high-burst checkout traffic during flash sale events without causing lock contention or thread starvation across relational database tables.",
    problemStatement: "Traditional monolithic checkout pipelines suffered from SQL database row deadlocks during high-concurrency checkout bursts and lacked transactional guarantees across third-party payment gateways, causing inventory drift and ghost orders upon transient network drops.",
    solution: "Designed a decoupled microservices architecture with ASP.NET Core 8 and RabbitMQ using the Transactional Outbox pattern. Write commands emit domain events persisted within the same atomic database transaction, while a background publisher guarantees at-least-once message delivery even during network partitions.",
    architectureOverview: [
      "<strong>Clean Architecture & DDD:</strong> Pure domain layer encapsulating business invariants (Money value objects, Order aggregate root) with zero external ORM dependencies.",
      "<strong>CQRS via MediatR:</strong> Command handlers mutate state and validate requests with FluentValidation pipeline behaviors; query handlers bypass domain tracking for high performance.",
      "<strong>Transactional Outbox:</strong> Guarantees at-least-once delivery of order placement events to RabbitMQ message broker with automated Dead-Letter Queue (DLQ) retries.",
      "<strong>Redis Cache-Aside:</strong> Distributed caching with pub/sub cache invalidation for hot product catalogs, reducing recurring SQL queries by 45%."
    ],
    keyFeatures: [
      "Idempotent payment webhook consumers preventing double-billing on transient retries.",
      "Optimistic concurrency control via SQL Server rowversion tokens preventing inventory overselling.",
      "Health check endpoints reporting live database, Redis, and RabbitMQ broker readiness to Docker orchestrator.",
      "Automated unit and integration test suite with xUnit, Moq, and WebApplicationFactory."
    ],
    techStack: ["C# 12", "ASP.NET Core 8", "MediatR (CQRS)", "RabbitMQ", "EF Core", "SQL Server", "Redis", "Docker Compose", "xUnit", "FluentValidation"],
    challengesAndImplementation: "Handling network partitions between the order microservice and third-party payment gateways was solved by implementing an idempotent payment webhook receiver paired with Polly retry policies and exponential backoff.",
    githubUrl: "https://github.com/your-username/zentix-microservices",
    demoUrl: "https://zentix-demo.your-domain.com/swagger"
  },
  'project-2': {
    title: "[Lumio] Multi-Tenant SaaS Financial Analytics API",
    category: "SaaS Architecture • High-Speed Reporting & Dapper",
    subtitle: "Multi-tenant financial analytics and automated balance-sheet reporting API with strict tenant data isolation.",
    overview: "Enterprise SaaS backend catering to multi-tenant accounting and automated balance-sheet generation. Features strict tenant data isolation, role-based security, automated report pipelines, and hybrid ORM database performance.",
    problemStatement: "Enterprise clients required absolute data isolation compliance while reporting engines suffered 3-5 second query bottlenecks when calculating complex balance sheets across multi-million row transaction ledgers.",
    solution: "Implemented dynamic schema resolution and global query filters for multi-tenant isolation, combined with a hybrid ORM architecture: Entity Framework Core for transactional writes and raw Dapper queries for aggregated financial summaries.",
    architectureOverview: [
      "<strong>Tenant Isolation:</strong> Dynamic database schema resolution combined with EF Core global query filters ensuring zero cross-tenant data leakage.",
      "<strong>Hybrid ORM Performance:</strong> EF Core for complex transactional writes and business rules, paired with Dapper for sub-50ms analytical queries.",
      "<strong>Asynchronous Background Jobs:</strong> Hangfire worker instances executing monthly recurring billing tasks and PDF invoice generation without degrading API response times.",
      "<strong>Security & RBAC:</strong> JWT Bearer token authentication containing tenant claim scopes, validated via custom ASP.NET Core authorization policies."
    ],
    keyFeatures: [
      "Dynamic schema resolution and tenant onboarding automation.",
      "Aggregated financial metric calculations achieving 10x faster query speeds over legacy queries.",
      "Automated invoice PDF generation offloaded to background Hangfire worker queues.",
      "Full audit trail logging tracking all sensitive ledger modifications."
    ],
    techStack: ["C# 12", "ASP.NET Core", "PostgreSQL", "Dapper", "EF Core", "Hangfire", "JWT Auth", "FluentValidation", "xUnit"],
    challengesAndImplementation: "Preventing cross-tenant data leaks was validated by building an automated test suite executing concurrent multi-tenant requests and verifying that tenant queries never crossed boundary schemas.",
    githubUrl: "https://github.com/your-username/lumio-financial-saas",
    demoUrl: "https://lumio-demo.your-domain.com"
  },
  'project-3': {
    title: "[Arkeo] Real-Time Logistics & Fleet Telemetry Hub",
    category: "Full Stack & WebSockets • Blazor WASM & SignalR",
    subtitle: "High-throughput telemetry ingestion and live interactive visualization dashboard for commercial vehicle fleets.",
    overview: "High-throughput telemetry ingestion and visualization dashboard designed to monitor commercial vehicle fleet coordinates, engine diagnostic sensors, and driver status in real-time.",
    problemStatement: "Ingesting and streaming over 10,000 GPS coordinate packets per second without causing browser UI freezes, memory leaks, or dropped connections during intermittent mobile carrier outages.",
    solution: "Engineered bidirectional WebSocket pipelines with ASP.NET Core SignalR Hubs connected to an interactive Blazor WebAssembly frontend executing native C# code directly in the client browser with automated reconnection logic.",
    architectureOverview: [
      "<strong>Bi-directional Streaming:</strong> ASP.NET Core SignalR Hubs supporting concurrent WebSocket connections with automated fallback to Server-Sent Events.",
      "<strong>Resilience & Heartbeats:</strong> Client-side auto-reconnection policies using exponential backoff to handle transient cellular drops in transit.",
      "<strong>Blazor WebAssembly Frontend:</strong> Single-page client written in C# executing in the browser via WebAssembly, rendering dynamic map pins and live speed charts.",
      "<strong>Structured Telemetry:</strong> Serilog structured events piped into Seq for instant latency monitoring and alert threshold triggers."
    ],
    keyFeatures: [
      "Real-time GPS coordinate streaming with SignalR Hubs under 50ms latency.",
      "Interactive Leaflet maps rendered with Blazor WebAssembly components.",
      "Client-side connection resilience featuring automated exponential backoff reconnection.",
      "Structured telemetry ingestion pipeline with Serilog and centralized Seq dashboards."
    ],
    techStack: ["SignalR", "Blazor WASM", ".NET 8", "C# 12", "Leaflet Maps", "Serilog / Seq", "CSS3 Dark", "xUnit"],
    challengesAndImplementation: "Preventing browser UI freezes from high message volume was solved by throttling UI render ticks to 60fps using a client-side channel queue and batching coordinate updates.",
    githubUrl: "https://github.com/your-username/arkeo-fleet-telemetry",
    demoUrl: "https://arkeo-demo.your-domain.com"
  },
  'project-4': {
    title: "[Novu] Modular Clean Architecture Starter Template",
    category: "Enterprise Template & Open Source • DDD Baseline",
    subtitle: "Opinionated, production-ready solution starter for .NET 8 Web APIs enforcing Domain-Driven Design.",
    overview: "An opinionated, production-ready solution starter for .NET 8 Web APIs that enforces Domain-Driven Design (DDD) concepts, testability, and enterprise architectural standards out of the box.",
    problemStatement: "New backend projects frequently suffer from architectural drift, business logic bleeding into API controllers, unhandled exceptions, and poor automated testing foundations.",
    solution: "Architected a modular Clean Architecture solution blueprint featuring 4 isolated projects (Domain, Application, Infrastructure, API) configured with MediatR CQRS, RFC 7807 ProblemDetails middleware, and GitHub Actions CI/CD.",
    architectureOverview: [
      "<strong>Strict Layering:</strong> Clean 4-project structure: Domain (pure enterprise entities), Application (MediatR commands/queries/behaviors), Infrastructure (EF Core, email, storage), and API.",
      "<strong>Result / Error Pattern:</strong> Functional Result<T> pattern eliminating throwing exceptions for known business rule violations.",
      "<strong>Pre-configured Cross-Cutting Concerns:</strong> Serilog request logging, Global Exception Handler middleware (RFC 7807 ProblemDetails), and health check endpoints.",
      "<strong>Automated Testing Harness:</strong> xUnit unit tests + WebApplicationFactory integration test suite running on every commit via GitHub Actions."
    ],
    keyFeatures: [
      "100% pure domain model with zero external dependencies.",
      "MediatR validation and logging pipeline behaviors pre-wired.",
      "RFC 7807 ProblemDetails standard error response format.",
      "Pre-configured Dockerfile and GitHub Actions CI/CD workflows."
    ],
    techStack: [".NET 8", "Clean Architecture", "MediatR", "FluentValidation", "EF Core", "Serilog", "xUnit", "Docker", "GitHub Actions"],
    challengesAndImplementation: "Balancing strict architectural decoupling with developer speed was addressed by building reusable generic base command and query handlers along with scaffolding templates.",
    githubUrl: "https://github.com/your-username/novu-clean-architecture",
    demoUrl: "https://github.com/your-username/novu-clean-architecture#readme"
  }
};

// Document Ready Initialization
document.addEventListener("DOMContentLoaded", () => {
  initScrollProgressBar();
  initScrollReveal();
  initNumberCounters();
  initHeroParallax();
  initCardSpotlight();
  initMagneticButtons();
  initAmbientCursor();
  initStackingCards();
  initAutoScroll();
  initSmoothAnchorLinks();
  initMobileMenu();
  initScrollSpy();
  initDynamicYear();
  initContactFormValidation();
  initProfileScrollFlight();
});

/* ----------------------------------------------------
   1. Mobile Menu Drawer Navigation
   ---------------------------------------------------- */
function initMobileMenu() {
  const toggleBtn = document.getElementById("menu-toggle");
  const dropdown = document.getElementById("mobile-dropdown");
  const navLinks = document.querySelectorAll(".mobile-nav-link, .mobile-talk");

  if (!toggleBtn || !dropdown) return;

  toggleBtn.addEventListener("click", () => {
    const isExpanded = toggleBtn.getAttribute("aria-expanded") === "true";
    toggleBtn.setAttribute("aria-expanded", !isExpanded);
    dropdown.classList.toggle("open");
  });

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      dropdown.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
    });
  });

  // Close when clicking outside
  document.addEventListener("click", (e) => {
    if (!toggleBtn.contains(e.target) && !dropdown.contains(e.target)) {
      dropdown.classList.remove("open");
      toggleBtn.setAttribute("aria-expanded", "false");
    }
  });
}

/* ----------------------------------------------------
   2. ScrollSpy Active Nav Link Tracker
   ---------------------------------------------------- */
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navItems = document.querySelectorAll(".nav-item");
  const mobileNavItems = document.querySelectorAll(".mobile-nav-link");

  if (!sections.length) return;

  function updateActiveNav() {
    let currentId = "";

    sections.forEach(current => {
      const rect = current.getBoundingClientRect();
      if (rect.top <= 180 && rect.bottom >= 80) {
        currentId = current.getAttribute("id");
      }
    });

    if (currentId) {
      navItems.forEach(item => {
        item.classList.toggle("active", item.getAttribute("href") === `#${currentId}`);
      });
      mobileNavItems.forEach(item => {
        item.classList.toggle("active", item.getAttribute("href") === `#${currentId}`);
      });
    }
  }

  window.addEventListener("scroll", updateActiveNav, { passive: true });
  updateActiveNav();
}

/* ----------------------------------------------------
   3. Comprehensive Project Architecture Modal
   ---------------------------------------------------- */
function openProjectModal(projectId) {
  const modal = document.getElementById("project-modal");
  const contentContainer = document.getElementById("modal-body-content");
  const data = projectArchitectures[projectId];

  if (!modal || !contentContainer || !data) return;

  const techBadgesHtml = data.techStack
    .map(tag => `<span class="tech-badge" style="margin-right: 6px; margin-bottom: 6px; display: inline-block;">${tag}</span>`)
    .join("");

  const archPointsHtml = data.architectureOverview
    .map(pt => `<li style="margin-bottom: 8px; line-height: 1.55;">${pt}</li>`)
    .join("");

  const keyFeaturesHtml = data.keyFeatures
    .map(ft => `<li style="margin-bottom: 6px; line-height: 1.5;">${ft}</li>`)
    .join("");

  contentContainer.innerHTML = `
    <div class="modal-deepdive-header">
      <span class="modal-cat-tag">${data.category}</span>
      <h2 id="modal-project-title" class="modal-project-title">${data.title}</h2>
      <p style="font-size: 0.95rem; color: var(--text-muted); margin-top: 6px; line-height: 1.5;">${data.subtitle}</p>
    </div>

    <div class="modal-section">
      <h4 class="modal-section-title">PROJECT OVERVIEW</h4>
      <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.65;">${data.overview}</p>
    </div>

    <div class="modal-grid-2col">
      <div class="modal-box">
        <h5 class="modal-box-title">PROBLEM STATEMENT</h5>
        <p class="modal-box-text">${data.problemStatement}</p>
      </div>
      <div class="modal-box">
        <h5 class="modal-box-title">ENGINEERING SOLUTION</h5>
        <p class="modal-box-text">${data.solution}</p>
      </div>
    </div>

    <div class="modal-section">
      <h4 class="modal-section-title">KEY ARCHITECTURAL DECISIONS &amp; PATTERNS</h4>
      <ul class="modal-bullet-list" style="list-style-type: square; color: var(--accent-orange);">
        ${archPointsHtml}
      </ul>
    </div>

    <div class="modal-section">
      <h4 class="modal-section-title">CORE HIGHLIGHTS &amp; CAPABILITIES</h4>
      <ul class="modal-bullet-list" style="list-style-type: disc; color: var(--accent-orange);">
        ${keyFeaturesHtml}
      </ul>
    </div>

    <div class="modal-section">
      <h4 class="modal-section-title">CHALLENGES &amp; IMPLEMENTATION DETAILS</h4>
      <div class="modal-challenge-box">
        <strong>Implementation Note: </strong>${data.challengesAndImplementation}
      </div>
    </div>

    <div class="modal-section">
      <h4 class="modal-section-title">TECHNOLOGY STACK</h4>
      <div style="display: flex; flex-wrap: wrap;">${techBadgesHtml}</div>
    </div>

    <div class="modal-actions-bar">
      <a href="${data.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-primary magnetic-btn">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
        <span>VIEW REPOSITORY</span>
      </a>
      <a href="${data.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-secondary magnetic-btn">
        <span>LIVE DEMO / SWAGGER</span>
        <span class="arrow">&nearr;</span>
      </a>
      <button type="button" class="btn-card-ghost" onclick="closeProjectModal()">CLOSE</button>
    </div>
  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

// Modal Backdrop Click & Escape Key Listeners
window.addEventListener("click", (e) => {
  const projectModal = document.getElementById("project-modal");
  const resumeModal = document.getElementById("resume-modal");
  if (e.target === projectModal) closeProjectModal();
  if (e.target === resumeModal) closeResumeModal();
});

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeProjectModal();
    closeResumeModal();
  }
});

/* ----------------------------------------------------
   4. Resume Quick-View Modal & Print
   ---------------------------------------------------- */
function openResumeModal() {
  const modal = document.getElementById("resume-modal");
  if (!modal) return;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeResumeModal() {
  const modal = document.getElementById("resume-modal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function printResume() {
  window.print();
}

/* ----------------------------------------------------
   5. One-Click Copy Email to Clipboard
   ---------------------------------------------------- */
function copyEmailToClipboard() {
  const emailEl = document.getElementById("email-address");
  const copyBtnText = document.getElementById("copy-btn-text");
  const email = emailEl ? emailEl.innerText.trim() : "saipavan7536@gmail.com";

  navigator.clipboard.writeText(email).then(() => {
    if (copyBtnText) copyBtnText.innerText = "COPIED!";
    showToast("Email address copied to clipboard!");
    setTimeout(() => {
      if (copyBtnText) copyBtnText.innerText = "COPY";
    }, 2500);
  }).catch(() => {
    showToast("Unable to copy email. Please copy manually: " + email);
  });
}

/* ----------------------------------------------------
   6. Contact Form Validation & Submission
   ---------------------------------------------------- */
function initContactFormValidation() {
  const form = document.getElementById("portfolio-contact-form");
  if (!form) return;

  const nameInput = document.getElementById("contact-name");
  const emailInput = document.getElementById("contact-email");
  const messageInput = document.getElementById("contact-message");

  // Real-time clearance of errors on user input
  [nameInput, emailInput, messageInput].forEach(input => {
    if (!input) return;
    input.addEventListener("input", () => {
      input.classList.remove("invalid");
      const errEl = document.getElementById(input.id.replace("contact-", "") + "-error");
      if (errEl) {
        errEl.innerText = "";
        errEl.classList.remove("visible");
      }
    });
  });
}

function handleContactSubmit(event) {
  event.preventDefault();

  const nameInput = document.getElementById("contact-name");
  const emailInput = document.getElementById("contact-email");
  const messageInput = document.getElementById("contact-message");
  const submitBtn = document.getElementById("form-submit-btn");
  const feedback = document.getElementById("form-feedback");

  const nameError = document.getElementById("name-error");
  const emailError = document.getElementById("email-error");
  const messageError = document.getElementById("message-error");

  let isValid = true;

  // Validate Name
  const nameVal = nameInput ? nameInput.value.trim() : "";
  if (!nameVal || nameVal.length < 2) {
    if (nameInput) nameInput.classList.add("invalid");
    if (nameError) {
      nameError.innerText = "Please enter your name (at least 2 characters).";
      nameError.classList.add("visible");
    }
    isValid = false;
  }

  // Validate Email Regex
  const emailVal = emailInput ? emailInput.value.trim() : "";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailVal || !emailRegex.test(emailVal)) {
    if (emailInput) emailInput.classList.add("invalid");
    if (emailError) {
      emailError.innerText = "Please enter a valid email address (e.g. name@company.com).";
      emailError.classList.add("visible");
    }
    isValid = false;
  }

  // Validate Message
  const messageVal = messageInput ? messageInput.value.trim() : "";
  if (!messageVal || messageVal.length < 10) {
    if (messageInput) messageInput.classList.add("invalid");
    if (messageError) {
      messageError.innerText = "Please share a message with at least 10 characters.";
      messageError.classList.add("visible");
    }
    isValid = false;
  }

  if (!isValid) return;

  // Simulate submission with clear demo-mode feedback
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.innerHTML = `<span>SENDING...</span>`;
  }

  setTimeout(() => {
    if (submitBtn) {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `<span>SEND MESSAGE</span><span class="arrow">&rarr;</span>`;
    }

    const form = document.getElementById("portfolio-contact-form");
    if (form) form.reset();

    if (feedback) {
      feedback.className = "form-feedback success";
      feedback.innerHTML = `
        <strong>Thank you, ${escapeHtml(nameVal)}!</strong> Your message has been received.<br/>
        <span style="font-size: 0.8rem; color: #bbf7d0; display: inline-block; margin-top: 4px;">
          (Client demo mode: To hook up live email delivery via Formspree or EmailJS, see the instructions in README.md).
        </span>
      `;
      feedback.style.display = "block";
    }

    showToast("Message received in demo mode!");

    setTimeout(() => {
      if (feedback) feedback.style.display = "none";
    }, 8000);
  }, 900);
}

function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, tag => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[tag] || tag));
}

/* ----------------------------------------------------
   7. Interactive Stacking Cards on Scroll (Framer Video Effect)
   ---------------------------------------------------- */
function initStackingCards() {
  const cards = document.querySelectorAll(".stack-card");
  if (!cards.length) return;

  let ticking = false;

  function updateCardsOnScroll() {
    const windowHeight = window.innerHeight;

    cards.forEach((card, index) => {
      // Offset calculation matching CSS sticky top
      const targetStickyTop = 96 + (index * 22);

      const nextCard = cards[index + 1];
      if (nextCard) {
        const nextRect = nextCard.getBoundingClientRect();

        // Progress of the next card sliding over this card
        const overlapStart = windowHeight;
        const overlapEnd = targetStickyTop + 50;

        let progress = 0;
        if (nextRect.top < overlapStart) {
          progress = (overlapStart - nextRect.top) / (overlapStart - overlapEnd);
          progress = Math.max(0, Math.min(1, progress));
        }

        // Smoothly scale down and dim as next card covers it
        const scale = 1 - (progress * 0.05); // shrinks from 1.0 to 0.95
        const brightness = 1 - (progress * 0.28); // dims from 1.0 to 0.72
        const translateY = progress * -4;

        card.style.transform = `scale(${scale}) translateY(${translateY}px)`;
        card.style.filter = `brightness(${brightness})`;
      } else {
        // Last card stays at full scale & brightness
        card.style.transform = "scale(1) translateY(0)";
        card.style.filter = "brightness(1)";
      }
    });

    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(updateCardsOnScroll);
      ticking = true;
    }
  }, { passive: true });

  // Initial calculation on load
  updateCardsOnScroll();
}

/* ----------------------------------------------------
   8. Toast Notification System
   ---------------------------------------------------- */
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  clearTimeout(toastTimeout);
  toast.innerText = message;
  toast.classList.add("show");

  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 3500);
}

/* ----------------------------------------------------
   9. Dynamic Year in Footer
   ---------------------------------------------------- */
function initDynamicYear() {
  const yearSpan = document.getElementById("current-year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

/* ----------------------------------------------------
   10. Scroll Progress Bar
   ---------------------------------------------------- */
function initScrollProgressBar() {
  const bar = document.getElementById("scroll-progress-bar");
  if (!bar) return;

  function updateProgress() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = `${progress}%`;
  }

  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);
  updateProgress();
}

/* ----------------------------------------------------
   11. Smooth Staggered Scroll Reveal
   ---------------------------------------------------- */
function initScrollReveal() {
  const revealElements = document.querySelectorAll("[data-reveal]");
  if (!revealElements.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealElements.forEach(el => el.classList.add("revealed"));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: "0px 0px -40px 0px"
  });

  revealElements.forEach(el => observer.observe(el));
}

/* ----------------------------------------------------
   12. Telemetry & Metric Number Counters
   ---------------------------------------------------- */
function initNumberCounters() {
  const counters = document.querySelectorAll("[data-counter]");
  if (!counters.length) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  counters.forEach(counter => observer.observe(counter));

  function animateCounter(el) {
    const target = parseFloat(el.getAttribute("data-counter")) || 0;
    const decimals = parseInt(el.getAttribute("data-counter-decimals") || "0", 10);
    const prefix = el.getAttribute("data-counter-prefix") || "";
    const suffix = el.getAttribute("data-counter-suffix") || "";
    const duration = 1600; // ms
    const startTime = performance.now();

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const currentVal = (target * ease).toFixed(decimals);

      el.textContent = `${prefix}${currentVal}${suffix}`;

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
      }
    }

    requestAnimationFrame(step);
  }
}

/* ----------------------------------------------------
   13. Interactive Hero 3D Parallax
   ---------------------------------------------------- */
function initHeroParallax() {
  const heroSection = document.getElementById("hero");
  const sun = document.getElementById("hero-sun");
  const stage = document.getElementById("person-stage");
  const giantName = document.getElementById("hero-giant-name");

  if (!heroSection || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;
  let isHovering = false;
  let animationFrameId = null;

  heroSection.addEventListener("mousemove", (e) => {
    const rect = heroSection.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    targetX = (e.clientX - centerX) / (rect.width / 2);
    targetY = (e.clientY - centerY) / (rect.height / 2);
    isHovering = true;

    if (!animationFrameId) {
      animationFrameId = requestAnimationFrame(updateParallax);
    }
  });

  heroSection.addEventListener("mouseleave", () => {
    targetX = 0;
    targetY = 0;
    isHovering = false;
  });

  function updateParallax() {
    currentX += (targetX - currentX) * 0.08;
    currentY += (targetY - currentY) * 0.08;

    if (sun) {
      sun.style.transform = `translate(${currentX * -18}px, ${currentY * -14}px)`;
    }
    if (stage) {
      stage.style.transform = `translate(${currentX * 12}px, ${currentY * 8}px)`;
    }
    if (giantName) {
      giantName.style.transform = `translate(${currentX * 6}px, ${currentY * 4}px)`;
    }

    if (Math.abs(targetX - currentX) > 0.001 || Math.abs(targetY - currentY) > 0.001 || isHovering) {
      animationFrameId = requestAnimationFrame(updateParallax);
    } else {
      animationFrameId = null;
    }
  }
}

/* ----------------------------------------------------
   14. Interactive Card Spotlight & 3D Tilt (Corner Movement)
   ---------------------------------------------------- */
function initCardSpotlight() {
  const cards = document.querySelectorAll(".interactive-card");
  if (!cards.length) return;

  const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  cards.forEach(card => {
    // For stacking cards, apply 3D tilt to the inner container so it doesn't conflict with outer sticky scroll
    const tiltTarget = card.classList.contains("stack-card")
      ? (card.querySelector(".stack-card-inner") || card)
      : card;

    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Update dynamic spotlight gradient coordinates
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);

      // 3D Perspective Tilt: moves the corners dynamically based on cursor location
      if (!isReducedMotion && tiltTarget) {
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = -((y - centerY) / centerY) * 4.5;
        const rotateY = ((x - centerX) / centerX) * 4.5;

        tiltTarget.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-2px)`;
      }
    });

    card.addEventListener("mouseleave", () => {
      if (tiltTarget) {
        tiltTarget.style.transform = "";
      }
    });
  });
}

/* ----------------------------------------------------
   15. Magnetic Buttons Physics
   ---------------------------------------------------- */
function initMagneticButtons() {
  const magneticBtns = document.querySelectorAll(".magnetic-btn");
  if (!magneticBtns.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  magneticBtns.forEach(btn => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (e.clientX - centerX) * 0.25;
      const deltaY = (e.clientY - centerY) * 0.25;

      btn.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    });

    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translate(0px, 0px)";
    });
  });
}

/* ----------------------------------------------------
   16. Ambient Cursor Light Follower
   ---------------------------------------------------- */
function initAmbientCursor() {
  const follower = document.getElementById("ambient-cursor-glow");
  if (!follower || window.matchMedia("(hover: none) or (prefers-reduced-motion: reduce)").matches) return;

  let mouseX = -500, mouseY = -500;
  let currentX = -500, currentY = -500;
  let isMoving = false;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (!isMoving) {
      isMoving = true;
      follower.classList.add("active");
      requestAnimationFrame(render);
    }
  }, { passive: true });

  document.addEventListener("mouseleave", () => {
    follower.classList.remove("active");
    isMoving = false;
  });

  function render() {
    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;
    follower.style.transform = `translate(${currentX}px, ${currentY}px)`;

    if (isMoving) {
      requestAnimationFrame(render);
    }
  }
}

/* ----------------------------------------------------
   17. Section-Wise Auto-Scroll Engine (Showcase Mode)
   ---------------------------------------------------- */
function initAutoScroll() {
  const PAUSE_PER_SECTION = 3600; // ms to pause at each section
  const TRANSITION_DURATION = 1400; // ms for the gliding transition
  const BOTTOM_LOOP_PAUSE = 4000; // ms at contact before looping to top
  const USER_IDLE_RESUME = 3500; // ms to wait after user finishes manual scrolling

  let currentStopIndex = 0;
  let isAnimating = false;
  let userInteracting = false;
  let advanceTimer = null;
  let userIdleTimer = null;
  let scrollAnimId = null;

  document.documentElement.style.scrollBehavior = "auto";
  document.body.style.scrollBehavior = "auto";

  function isModalOpen() {
    const projectModal = document.getElementById("project-modal");
    const resumeModal = document.getElementById("resume-modal");
    return (projectModal && projectModal.classList.contains("open")) ||
           (resumeModal && resumeModal.classList.contains("open"));
  }

  function easeInOutCubic(t) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function getElementDocumentTop(element) {
    if (!element) return 0;
    const rect = element.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
    return rect.top + scrollTop;
  }

  function getSectionStops() {
    const stops = [];
    const headerOffset = 70;
    const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);

    // Stop 0: Hero top
    const heroEl = document.getElementById("hero");
    if (heroEl) {
      stops.push({ id: "hero", targetY: 0 });
    }

    // Stops 1-4: Works Case Study Stacking Cards (showcase each project!)
    const worksEl = document.getElementById("works");
    if (worksEl) {
      const worksTop = Math.max(0, getElementDocumentTop(worksEl) - 60);
      stops.push({ id: "work-card-0", targetY: Math.min(worksTop, maxScroll) });

      for (let i = 1; i <= 3; i++) {
        const cardEl = document.getElementById(`work-card-${i}`);
        if (cardEl) {
          const cardTargetY = Math.max(0, getElementDocumentTop(cardEl) - (96 + (i * 22)));
          const prevY = stops[stops.length - 1].targetY;
          stops.push({ id: `work-card-${i}`, targetY: Math.min(Math.max(cardTargetY, prevY + 120), maxScroll) });
        }
      }
    }

    // Remaining sections in order: Skills, About, Experience, Education, Exploring, Contact
    const remainingSections = ["skills", "about", "experience", "education", "exploring", "contact"];
    remainingSections.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        const secTop = Math.max(0, getElementDocumentTop(el) - headerOffset);
        const prevY = stops.length ? stops[stops.length - 1].targetY : 0;
        stops.push({ id, targetY: Math.min(Math.max(secTop, prevY + 80), maxScroll) });
      }
    });

    return stops;
  }

  function smoothScrollTo(targetY, duration, callback) {
    if (scrollAnimId) cancelAnimationFrame(scrollAnimId);

    const startY = window.pageYOffset || document.documentElement.scrollTop || 0;
    const distance = targetY - startY;
    if (Math.abs(distance) < 2) {
      if (callback) callback();
      return;
    }

    isAnimating = true;
    const startTime = performance.now();

    function step(currentTime) {
      if (userInteracting) {
        isAnimating = false;
        return;
      }

      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, startY + (distance * ease));

      if (progress < 1) {
        scrollAnimId = requestAnimationFrame(step);
      } else {
        window.scrollTo(0, targetY);
        isAnimating = false;
        if (callback) callback();
      }
    }

    scrollAnimId = requestAnimationFrame(step);
  }

  function findClosestStopIndex(stops) {
    const currentY = window.pageYOffset || document.documentElement.scrollTop || 0;
    let closestIndex = 0;
    let closestDist = Infinity;

    stops.forEach((stop, index) => {
      const dist = Math.abs(stop.targetY - currentY);
      if (dist < closestDist) {
        closestDist = dist;
        closestIndex = index;
      }
    });

    return closestIndex;
  }

  function scheduleNextSection(delay) {
    clearTimeout(advanceTimer);
    advanceTimer = setTimeout(() => {
      if (userInteracting || isModalOpen()) return;

      const stops = getSectionStops();
      if (!stops.length) return;

      currentStopIndex++;
      if (currentStopIndex >= stops.length) {
        // Reached end: glide smoothly back to Hero
        currentStopIndex = 0;
        smoothScrollTo(stops[0].targetY, 1800, () => {
          scheduleNextSection(PAUSE_PER_SECTION);
        });
      } else {
        const nextStop = stops[currentStopIndex];
        const isLastSection = currentStopIndex === stops.length - 1;
        const dwellTime = isLastSection ? BOTTOM_LOOP_PAUSE : PAUSE_PER_SECTION;

        smoothScrollTo(nextStop.targetY, TRANSITION_DURATION, () => {
          scheduleNextSection(dwellTime);
        });
      }
    }, delay);
  }

  const onManualInteraction = () => {
    userInteracting = true;
    if (scrollAnimId) {
      cancelAnimationFrame(scrollAnimId);
      isAnimating = false;
    }
    clearTimeout(advanceTimer);
    clearTimeout(userIdleTimer);

    userIdleTimer = setTimeout(() => {
      userInteracting = false;
      if (!isModalOpen()) {
        const stops = getSectionStops();
        currentStopIndex = findClosestStopIndex(stops);
        scheduleNextSection(PAUSE_PER_SECTION);
      }
    }, USER_IDLE_RESUME);
  };

  window.addEventListener("wheel", onManualInteraction, { passive: true });
  window.addEventListener("touchstart", onManualInteraction, { passive: true });
  window.addEventListener("touchmove", onManualInteraction, { passive: true });
  window.addEventListener("keydown", (e) => {
    if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End"].includes(e.key)) {
      onManualInteraction();
    }
  });

  scheduleNextSection(PAUSE_PER_SECTION);
}

/* ----------------------------------------------------
   18. Smooth In-Page Anchor Navigation
   ---------------------------------------------------- */
function initSmoothAnchorLinks() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
      const targetId = this.getAttribute("href");
      if (targetId && targetId.length > 1) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    });
  });
}

/* ----------------------------------------------------
   19. Scroll-Driven Profile Avatar Flight to Navbar
       (FLIP transition inspired by Veera Bharath portfolio)
   ---------------------------------------------------- */
function initProfileScrollFlight() {
  const heroAvatar = document.getElementById("hero-profile-avatar");
  const navSlot = document.getElementById("nav-profile-slot");
  const navAvatar = document.getElementById("nav-profile-avatar");
  const navPhoto = document.getElementById("nav-avatar-photo");
  const heroImg = document.getElementById("hero-person-img");
  const clone = document.getElementById("flying-profile-clone");

  if (!heroAvatar || !navSlot || !navAvatar || !clone) return;

  // Sync image source if provided
  function syncAvatarImages() {
    if (heroImg && heroImg.getAttribute("src") && heroImg.getAttribute("src").trim() !== "") {
      const src = heroImg.getAttribute("src");
      heroImg.style.display = "block";
      const fallback = document.getElementById("hero-avatar-fallback");
      if (fallback) fallback.style.display = "none";

      if (navPhoto) {
        navPhoto.src = src;
        navPhoto.style.display = "block";
        const navFallback = document.getElementById("nav-avatar-fallback");
        if (navFallback) navFallback.style.display = "none";
      }
    }
  }

  syncAvatarImages();

  if (heroImg) {
    heroImg.addEventListener("load", syncAvatarImages);
  }

  // Populate clone's inner HTML based on whether image is loaded
  function updateCloneContent() {
    const hasImage = heroImg && heroImg.style.display !== "none" && heroImg.src;
    if (hasImage) {
      clone.innerHTML = `<img src="${heroImg.src}" alt="Sai Pavan" />`;
    } else {
      clone.innerHTML = `<div class="clone-fallback"><span class="clone-fallback-letter">P</span></div>`;
    }
  }

  // State tracker: 'hero' | 'flying-to-nav' | 'nav' | 'flying-to-hero'
  let state = "hero";
  let flightTimeout = null;
  const isReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Threshold: when scroll passes 95px (hero begins scrolling out of primary viewport)
  const SCROLL_THRESHOLD = 95;

  function handleFlightScroll() {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;

    if (scrollY > SCROLL_THRESHOLD && (state === "hero" || state === "flying-to-hero")) {
      flyToNavbar();
    } else if (scrollY <= SCROLL_THRESHOLD && (state === "nav" || state === "flying-to-nav")) {
      flyToHero();
    }
  }

  function flyToNavbar() {
    clearTimeout(flightTimeout);

    if (isReducedMotion) {
      state = "nav";
      heroAvatar.style.opacity = "0";
      heroAvatar.style.visibility = "hidden";
      navSlot.classList.add("active");
      navAvatar.style.opacity = "1";
      clone.style.display = "none";
      return;
    }

    state = "flying-to-nav";
    updateCloneContent();

    // 1. First (Hero Rect)
    const heroRect = heroAvatar.getBoundingClientRect();

    // 2. Expand navbar slot to reserve its space & get Last rect
    navSlot.classList.add("active");
    const navRect = navAvatar.getBoundingClientRect();

    // Hide destination avatar while in-flight
    navAvatar.style.opacity = "0";
    heroAvatar.style.opacity = "0";

    // 3. Set clone at First position
    clone.style.transition = "none";
    clone.style.top = `${heroRect.top}px`;
    clone.style.left = `${heroRect.left}px`;
    clone.style.width = `${heroRect.width}px`;
    clone.style.height = `${heroRect.height}px`;
    clone.style.borderWidth = "3px";
    clone.style.display = "block";
    clone.style.opacity = "1";

    // Force reflow
    void clone.offsetWidth;

    // 4. Animate to Last position
    clone.style.transition = "all 0.62s cubic-bezier(0.16, 1, 0.3, 1)";
    clone.style.top = `${navRect.top}px`;
    clone.style.left = `${navRect.left}px`;
    clone.style.width = `${navRect.width}px`;
    clone.style.height = `${navRect.height}px`;
    clone.style.borderWidth = "2px";

    flightTimeout = setTimeout(() => {
      clone.style.display = "none";
      navAvatar.style.opacity = "1";
      heroAvatar.style.visibility = "hidden";
      state = "nav";
    }, 620);
  }

  function flyToHero() {
    clearTimeout(flightTimeout);

    if (isReducedMotion) {
      state = "hero";
      navSlot.classList.remove("active");
      heroAvatar.style.opacity = "1";
      heroAvatar.style.visibility = "visible";
      clone.style.display = "none";
      return;
    }

    state = "flying-to-hero";
    updateCloneContent();

    // 1. First (Nav Rect)
    const navRect = navAvatar.getBoundingClientRect();

    // 2. Measure Hero Rect
    heroAvatar.style.visibility = "visible";
    const heroRect = heroAvatar.getBoundingClientRect();

    // Hide both while in flight
    navAvatar.style.opacity = "0";
    heroAvatar.style.opacity = "0";

    // 3. Set clone at Nav position
    clone.style.transition = "none";
    clone.style.top = `${navRect.top}px`;
    clone.style.left = `${navRect.left}px`;
    clone.style.width = `${navRect.width}px`;
    clone.style.height = `${navRect.height}px`;
    clone.style.borderWidth = "2px";
    clone.style.display = "block";
    clone.style.opacity = "1";

    // Collapse nav slot smoothly
    navSlot.classList.remove("active");

    // Force reflow
    void clone.offsetWidth;

    // 4. Animate to Hero position
    clone.style.transition = "all 0.62s cubic-bezier(0.16, 1, 0.3, 1)";
    clone.style.top = `${heroRect.top}px`;
    clone.style.left = `${heroRect.left}px`;
    clone.style.width = `${heroRect.width}px`;
    clone.style.height = `${heroRect.height}px`;
    clone.style.borderWidth = "3px";

    flightTimeout = setTimeout(() => {
      clone.style.display = "none";
      heroAvatar.style.opacity = "1";
      navAvatar.style.opacity = "1";
      state = "hero";
    }, 620);
  }

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        handleFlightScroll();
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // Handle browser window resize to ensure correct docked coordinates
  window.addEventListener("resize", () => {
    if (state === "nav") {
      navSlot.classList.add("active");
      navAvatar.style.opacity = "1";
      heroAvatar.style.opacity = "0";
      heroAvatar.style.visibility = "hidden";
      clone.style.display = "none";
    } else if (state === "hero") {
      navSlot.classList.remove("active");
      heroAvatar.style.opacity = "1";
      heroAvatar.style.visibility = "visible";
      clone.style.display = "none";
    }
  });

  // Initial check on load
  handleFlightScroll();
}
