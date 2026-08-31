<template>
  <section id="credentials" class="credentials-section">
    <div class="credentials-inner">
      <p class="eyebrow">VERIFIED CREDENTIAL</p>
      <h2>Hackathon Participation</h2>

      <article class="credential-card">
        <img
          class="credential-badge"
          src="https://app.credlify.me/badge-image/234b3396-445d-45be-b88c-2b96b8462ddb.png"
          alt="BET Software Hackathon 2025 Participation badge"
          loading="lazy"
        />

        <div class="credential-copy">
          <p class="year">2025</p>
          <h3>BET Software Hackathon 2025 — Participation</h3>
          <p>
            Completed the BET Software Hackathon 2025, including a 36-hour collaborative FinTech build focused on rapid problem-solving, teamwork and software delivery.
          </p>
          <a
            class="credential-link"
            href="https://app.credlify.me/certificate/8930a13d-eefe-41ef-8a38-c35751ca86f3/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View verified credential ↗
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.credentials-section {
  padding: 88px 24px;
}

.credentials-inner {
  width: min(1080px, 100%);
  margin: 0 auto;
}

.eyebrow {
  margin: 0 0 10px;
  color: #2dd4bf;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.16em;
}

h2 {
  margin: 0 0 30px;
  font-size: clamp(2rem, 5vw, 3.25rem);
}

.credential-card {
  display: grid;
  grid-template-columns: 190px 1fr;
  gap: 32px;
  align-items: center;
  padding: 28px;
  border: 1px solid rgba(45, 212, 191, 0.22);
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.035);
}

.credential-badge {
  width: 190px;
  aspect-ratio: 1;
  object-fit: contain;
  border-radius: 16px;
}

.year {
  margin: 0 0 8px;
  color: #94a3b8;
  font-weight: 700;
}

h3 {
  margin: 0 0 12px;
  font-size: clamp(1.25rem, 3vw, 1.7rem);
}

.credential-copy > p:not(.year) {
  max-width: 700px;
  margin: 0 0 20px;
  color: #cbd5e1;
  line-height: 1.7;
}

.credential-link {
  display: inline-flex;
  padding: 11px 16px;
  border: 1px solid #2dd4bf;
  border-radius: 10px;
  color: #5eead4;
  font-weight: 800;
}

.credential-link:hover {
  background: rgba(45, 212, 191, 0.1);
}

@media (max-width: 640px) {
  .credentials-section {
    padding: 64px 18px;
  }

  .credential-card {
    grid-template-columns: 1fr;
    padding: 22px;
  }

  .credential-badge {
    width: min(170px, 60vw);
  }
}
</style>
