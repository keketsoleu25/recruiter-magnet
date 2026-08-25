<script setup lang="ts">
/*
 * HeroSection
 * Answers the recruiter's first questions immediately:
 * who, what, where, availability and where to verify the work.
 */
</script>

<template>
  <section id="about" class="hero">
    <div class="hero-content">
      <div class="status">
        <span class="status-dot"></span>
        Open to full-time opportunities
      </div>

      <p class="eyebrow">Hello, I'm</p>

      <h1>Keketso Leu</h1>

      <h2>Full-Stack Software Developer</h2>

      <p class="intro">
        I build production-ready software across frontend, backend,
        authentication, databases and deployment — turning practical
        requirements into working digital systems.
      </p>

      <div class="availability">
        <span>📍 Johannesburg, South Africa</span>
        <span>💻 Remote preferred</span>
        <span>✈ Available to travel nationwide</span>
      </div>

      <div class="actions">
        <a class="primary" href="/Keketso-Leu-CV.pdf" download>
          Download CV
        </a>

        <a
          class="secondary"
          href="https://github.com/keketsoleu25"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          class="secondary"
          href="https://www.linkedin.com/in/keketso-leu"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </div>
    </div>

    <div class="hero-visual" aria-hidden="true">
      <div class="code-orbit">
        <span>&lt;/&gt;</span>
      </div>

      <pre>
const developer = {
  code: "passion",
  build: "solutions",
  ship: "impact"
}

while (problem) {
  think()
  build()
  solve()
}
      </pre>
    </div>
  </section>
</template>

<style scoped>
.hero {
  width: min(1180px, calc(100% - 40px));
  min-height: 560px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  align-items: center;
  gap: 70px;
}

.status {
  display: inline-flex;
  align-items: center;
  gap: 8px;

  padding: 7px 11px;

  color: #5eead4;
  background: rgba(45, 212, 191, 0.09);
  border: 1px solid rgba(45, 212, 191, 0.14);
  border-radius: 5px;

  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}

.status-dot {
  width: 7px;
  height: 7px;
  background: #2dd4bf;
  border-radius: 50%;
}

.eyebrow {
  margin: 32px 0 5px;
  color: #81909d;
}

h1 {
  margin: 0;
  font-size: clamp(3rem, 7vw, 5.4rem);
  line-height: 0.98;
  letter-spacing: -0.055em;
}

h2 {
  margin: 16px 0 0;
  color: #2dd4bf;
  font-size: clamp(1.6rem, 4vw, 2.7rem);
  line-height: 1.05;
}

.intro {
  max-width: 650px;
  margin: 25px 0;

  color: #adb7c2;
  font-size: 1.05rem;
  line-height: 1.75;
}

.availability {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.availability span {
  padding: 8px 11px;

  color: #c7d0d9;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 6px;

  font-size: 0.78rem;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 28px;
}

.actions a {
  padding: 11px 18px;
  border-radius: 6px;
  font-size: 0.85rem;
  font-weight: 600;
}

.primary {
  color: #02110f;
  background: #2dd4bf;
}

.secondary {
  border: 1px solid rgba(255, 255, 255, 0.16);
}

.hero-visual {
  position: relative;

  min-height: 350px;

  display: grid;
  place-items: center;
}

.code-orbit {
  width: 220px;
  height: 220px;

  display: grid;
  place-items: center;

  border: 1px solid rgba(45, 212, 191, 0.35);
  border-radius: 50%;

  box-shadow:
    0 0 80px rgba(45, 212, 191, 0.12),
    inset 0 0 50px rgba(45, 212, 191, 0.04);
}

.code-orbit span {
  color: #2dd4bf;
  font-size: 3rem;
}

pre {
  position: absolute;
  right: 0;
  top: 80px;

  color: rgba(45, 212, 191, 0.35);
  font-size: 0.7rem;
  line-height: 1.7;

  pointer-events: none;
}

@media (max-width: 850px) {
  .hero {
    grid-template-columns: 1fr;
    padding: 70px 0 40px;
  }

  .hero-visual {
    display: none;
  }
}

@media (max-width: 520px) {
  .hero {
    width: min(100% - 28px, 1180px);
    min-height: auto;
  }

  .actions a {
    flex: 1;
    text-align: center;
  }
}
</style>