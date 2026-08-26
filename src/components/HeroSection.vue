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
  width: 100%;
  max-width: 1240px;
  margin-inline: auto;
  padding: 64px 16px 52px;

  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 36px;
}

.hero-content {
  min-width: 0;
  max-width: 760px;
}

.status {
  width: fit-content;
  max-width: 100%;

  display: inline-flex;
  align-items: center;
  gap: 8px;

  padding: 7px 10px;

  color: #5eead4;
  background: rgba(45, 212, 191, 0.09);
  border: 1px solid rgba(45, 212, 191, 0.14);
  border-radius: 5px;

  font-size: 0.66rem;
  line-height: 1.3;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.status-dot {
  width: 7px;
  height: 7px;
  flex: 0 0 auto;
  background: #2dd4bf;
  border-radius: 50%;
}

.eyebrow {
  margin: 28px 0 7px;
  color: #81909d;
  font-size: 0.9rem;
}

h1 {
  margin: 0;
  color: #f7fafc;
  font-size: clamp(2.7rem, 11vw, 4.8rem);
  line-height: 0.98;
  letter-spacing: -0.05em;
  text-wrap: balance;
}

h2 {
  max-width: 720px;
  margin: 16px 0 0;
  color: #2dd4bf;
  font-size: clamp(1.55rem, 6.5vw, 2.65rem);
  line-height: 1.08;
  letter-spacing: -0.02em;
  text-wrap: balance;
}

.intro {
  max-width: 660px;
  margin: 24px 0;

  color: #adb7c2;
  font-size: 0.98rem;
  line-height: 1.72;
}

.availability {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.availability span {
  max-width: 100%;
  padding: 8px 10px;

  color: #c7d0d9;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 6px;

  font-size: 0.72rem;
  line-height: 1.35;
}

.actions {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-top: 28px;
}

.actions a {
  width: 100%;
  padding: 12px 16px;
  border-radius: 6px;
  font-size: 0.83rem;
  font-weight: 600;
  text-align: center;
}

.primary {
  color: #02110f;
  background: #2dd4bf;
}

.secondary {
  border: 1px solid rgba(255, 255, 255, 0.16);
}

.hero-visual {
  display: none;
}

@media (min-width: 520px) {
  .hero {
    padding-inline: 20px;
  }

  .actions {
    grid-template-columns: repeat(3, max-content);
  }

  .actions a {
    width: auto;
  }
}

@media (min-width: 768px) {
  .hero {
    padding: 84px 28px 64px;
  }

  .hero-content {
    max-width: 820px;
  }

  .status {
    font-size: 0.72rem;
  }

  .intro {
    font-size: 1.05rem;
  }
}

/*
 * The decorative code visual only joins once there is enough horizontal room.
 * This prevents the text column becoming unnaturally narrow on laptops,
 * zoomed browsers and intermediate monitor widths.
 */
@media (min-width: 1180px) {
  .hero {
    min-height: 590px;
    grid-template-columns: minmax(0, 1.12fr) minmax(330px, 0.88fr);
    align-items: center;
    gap: clamp(56px, 6vw, 88px);
    padding-top: 56px;
    padding-bottom: 56px;
  }

  .hero-content {
    max-width: 700px;
  }

  .hero-visual {
    position: relative;
    min-height: 380px;
    display: grid;
    place-items: center;
  }

  .code-orbit {
    width: 240px;
    aspect-ratio: 1;
    display: grid;
    place-items: center;

    border: 1px solid rgba(45, 212, 191, 0.35);
    border-radius: 50%;
    box-shadow:
      0 0 90px rgba(45, 212, 191, 0.12),
      inset 0 0 50px rgba(45, 212, 191, 0.04);
  }

  .code-orbit span {
    color: #2dd4bf;
    font-size: 3.2rem;
  }

  pre {
    position: absolute;
    right: 0;
    top: 86px;
    max-width: 100%;
    overflow: hidden;

    color: rgba(45, 212, 191, 0.35);
    font-size: 0.7rem;
    line-height: 1.7;
    pointer-events: none;
  }
}

@media (min-width: 1296px) {
  .hero {
    padding-inline: 0;
  }
}
</style>