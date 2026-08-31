<script setup lang="ts">
/*
 * HeroSection
 * Recruiter-first introduction with evidence-led positioning.
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
        I build business software across frontend, APIs, databases and deployment.
        Recent work includes a Dockerized ASP.NET Core facilities platform, a
        full-stack CRM and production websites delivered for real clients.
      </p>

      <div class="availability">
        <span>📍 Johannesburg, South Africa</span>
        <span>💻 Remote preferred</span>
        <span>✈ Available to travel nationwide</span>
      </div>

      <div class="actions">
        <a
          class="primary"
          href="/Keketso_Leu_ATS_Full_Stack_Software_Developer_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Resume
        </a>

        <a class="secondary" href="#projects">Engineering Work</a>

        <a
          class="secondary"
          href="https://github.com/keketsoleu25"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>

    <figure class="hero-visual">
      <div class="portrait-frame">
        <img
          src="https://the-tech-alchemy-lab.vercel.app/images/profile_photo.jpg"
          alt="Keketso Leu"
          class="portrait"
          loading="eager"
        />

        <div class="portrait-badge">
          <span>&lt;/&gt;</span>
          <div>
            <strong>Production client work</strong>
            <small>Full-stack · Multi-service · Deployed</small>
          </div>
        </div>
      </div>
    </figure>
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
.hero-content { min-width: 0; max-width: 760px; }
.status { width: fit-content; max-width: 100%; display: inline-flex; align-items: center; gap: 8px; padding: 7px 10px; color: #5eead4; background: rgba(45,212,191,.09); border: 1px solid rgba(45,212,191,.14); border-radius: 5px; font-size: .66rem; line-height: 1.3; text-transform: uppercase; letter-spacing: .05em; }
.status-dot { width: 7px; height: 7px; flex: 0 0 auto; background: #2dd4bf; border-radius: 50%; }
.eyebrow { margin: 28px 0 7px; color: #81909d; font-size: .9rem; }
h1 { margin: 0; color: #f7fafc; font-size: clamp(2.7rem,11vw,4.8rem); line-height: .98; letter-spacing: -.05em; text-wrap: balance; }
h2 { max-width: 720px; margin: 16px 0 0; color: #2dd4bf; font-size: clamp(1.55rem,6.5vw,2.65rem); line-height: 1.08; letter-spacing: -.02em; text-wrap: balance; }
.intro { max-width: 660px; margin: 24px 0; color: #adb7c2; font-size: .98rem; line-height: 1.72; }
.availability { display: flex; flex-wrap: wrap; gap: 8px; }
.availability span { max-width: 100%; padding: 8px 10px; color: #c7d0d9; background: rgba(255,255,255,.035); border: 1px solid rgba(255,255,255,.07); border-radius: 6px; font-size: .72rem; line-height: 1.35; }
.actions { display: grid; grid-template-columns: 1fr; gap: 10px; margin-top: 28px; }
.actions a { width: 100%; padding: 12px 16px; border-radius: 6px; font-size: .83rem; font-weight: 600; text-align: center; text-decoration: none; }
.primary { color: #02110f; background: #2dd4bf; }
.secondary { border: 1px solid rgba(255,255,255,.16); }
.hero-visual { display: block; width: 100%; margin: 0; }
.portrait-frame { position: relative; width: min(82vw,320px); margin-inline: auto; }
.portrait { display: block; width: 100%; aspect-ratio: 4/5; object-fit: cover; object-position: center top; border: 1px solid rgba(45,212,191,.28); border-radius: 18px; box-shadow: 0 30px 80px rgba(0,0,0,.35),0 0 70px rgba(45,212,191,.08); }
.portrait-frame::before { content: ''; position: absolute; inset: -10px 12px 16px -10px; z-index: -1; border: 1px solid rgba(45,212,191,.16); border-radius: 22px; }
.portrait-badge { position: relative; display: flex; align-items: center; gap: 10px; width: calc(100% - 24px); max-width: 290px; margin: -24px auto 0; padding: 12px 13px; background: rgba(7,13,18,.94); border: 1px solid rgba(255,255,255,.09); border-radius: 10px; backdrop-filter: blur(10px); }
.portrait-badge > span { color: #2dd4bf; font-size: 1.2rem; font-weight: 700; }
.portrait-badge strong,.portrait-badge small { display: block; }
.portrait-badge strong { color: #eef3f7; font-size: .75rem; }
.portrait-badge small { margin-top: 3px; color: #7f8c98; font-size: .62rem; }
@media (min-width:520px) { .hero { padding-inline:20px; } .actions { grid-template-columns:repeat(3,max-content); } .actions a { width:auto; } .portrait-frame { width:min(70vw,360px); } }
@media (min-width:768px) { .hero { padding:84px 28px 64px; } .hero-content { max-width:820px; } .status { font-size:.72rem; } .intro { font-size:1.05rem; } }
@media (min-width:960px) { .hero { min-height:620px; grid-template-columns:minmax(0,1.08fr) minmax(320px,.92fr); align-items:center; gap:clamp(44px,5vw,76px); padding-top:64px; padding-bottom:64px; } .hero-content { max-width:680px; } .portrait-frame { width:min(100%,430px); } .portrait-frame::before { inset:-14px 18px 22px -14px; } .portrait-badge { position:absolute; left:-26px; bottom:28px; width:auto; margin:0; padding:13px 15px; } .portrait-badge > span { font-size:1.35rem; } .portrait-badge strong { font-size:.78rem; } .portrait-badge small { font-size:.66rem; } h1 { font-size:clamp(4rem,6vw,5.2rem); } h2 { font-size:clamp(2rem,3.3vw,2.8rem); } }
@media (min-width:1440px) { .hero { max-width:1320px; min-height:680px; grid-template-columns:minmax(0,1.12fr) minmax(380px,.88fr); gap:96px; } .hero-content { max-width:720px; } .portrait-frame { width:min(100%,470px); } }
@media (min-width:1380px) { .hero { padding-inline:0; } }
</style>
