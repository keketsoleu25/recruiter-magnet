<script setup lang="ts">
import ContactForm from './ContactForm.vue'

/*
 * ContactSection
 * Final recruiter conversion point with direct contact actions and a form.
 */

const currentYear = new Date().getFullYear()
</script>

<template>
  <section id="contact" class="contact-section">
    <div class="contact-card">
      <div class="contact-copy">
        <p class="eyebrow">Let's connect</p>

        <h2>Interested in working together?</h2>

        <p class="intro">
          I'm open to full-time software development opportunities where I can
          contribute to real products, collaborate with a strong team and
          continue growing as an engineer.
        </p>

        <div class="availability">
          <span>Johannesburg, South Africa</span>
          <span>Remote preferred</span>
          <span>Available to travel nationwide</span>
        </div>
      </div>

      <div class="contact-actions">
        <a class="primary" href="mailto:keketsoleu25@gmail.com">Email Me</a>

        <a
          href="https://www.linkedin.com/in/keketso-leu"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn ↗
        </a>

        <a
          href="https://github.com/keketsoleu25"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub ↗
        </a>
      </div>
    </div>

    <div class="form-wrapper">
      <div class="form-heading">
        <p>Prefer to send a message here?</p>
        <span>I’ll receive it directly and can reply by email.</span>
      </div>

      <ContactForm />
    </div>

    <footer class="footer">
      <div class="footer-identity">
        <strong>Keketso Leu</strong>
        <span>Full-Stack Software Developer</span>
      </div>

      <div class="footer-contact">
        <a href="mailto:keketsoleu25@gmail.com">keketsoleu25@gmail.com</a>
        <a href="tel:+27692602709">069 260 2709</a>
      </div>

      <div class="footer-business">
        <span>Looking for digital services?</span>

        <a
          href="https://the-tech-alchemy-lab.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Tech Alchemy Lab ↗
        </a>
      </div>

      <p class="copyright">© {{ currentYear }} Keketso Leu</p>
    </footer>
  </section>
</template>

<style scoped>
.contact-section {
  width: 100%;
  max-width: 1180px;
  margin-inline: auto;
  padding: 18px 16px 30px;
}

.contact-card {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 28px;
  padding: 24px;

  background:
    radial-gradient(circle at 80% 50%, rgba(45, 212, 191, 0.1), transparent 35%),
    rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
}

.contact-copy {
  min-width: 0;
}

.eyebrow {
  margin: 0 0 10px;
  color: #2dd4bf;
  font-size: 0.72rem;
  text-transform: uppercase;
  letter-spacing: 0.11em;
}

h2 {
  margin: 0;
  color: #f4f7fa;
  font-size: clamp(1.85rem, 9vw, 3.2rem);
  line-height: 1.08;
  letter-spacing: -0.035em;
  overflow-wrap: anywhere;
}

.intro {
  max-width: 680px;
  margin: 18px 0 0;
  color: #9da9b5;
  font-size: 0.9rem;
  line-height: 1.7;
}

.availability {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 22px;
}

.availability span {
  max-width: 100%;
  padding: 7px 9px;

  color: #b7c1ca;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 5px;
  font-size: 0.7rem;
  line-height: 1.4;
}

.contact-actions {
  display: grid;
  grid-template-columns: 1fr;
  gap: 9px;
}

.contact-actions a {
  width: 100%;
  padding: 12px 16px;
  text-align: center;

  color: #c7d0d9;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 6px;
  font-size: 0.8rem;

  transition:
    border-color 160ms ease,
    color 160ms ease;
}

.contact-actions a:hover {
  color: #2dd4bf;
  border-color: rgba(45, 212, 191, 0.5);
}

.contact-actions .primary {
  color: #03110f;
  background: #2dd4bf;
  border-color: #2dd4bf;
  font-weight: 700;
}

.contact-actions .primary:hover {
  color: #03110f;
}

.form-wrapper {
  width: 100%;
  max-width: 820px;
  margin: 28px auto 0;
}

.form-heading {
  margin-bottom: 14px;
}

.form-heading p {
  margin: 0 0 5px;
  color: #f1f5f9;
  font-size: 0.95rem;
  font-weight: 600;
}

.form-heading span {
  color: #7f8c98;
  font-size: 0.78rem;
  line-height: 1.5;
}

.footer {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 18px;
  padding: 30px 4px 0;

  color: #687581;
  font-size: 0.72rem;
}

.footer strong,
.footer span {
  display: block;
}

.footer strong {
  margin-bottom: 4px;
  color: #d6dde3;
}

.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.footer-contact a,
.footer-business a {
  overflow-wrap: anywhere;
}

.footer-contact a:hover,
.footer-business a:hover {
  color: #2dd4bf;
}

.footer-business a {
  display: inline-block;
  margin-top: 4px;
  color: #a9b4be;
}

.copyright {
  margin: 4px 0 0;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

@media (min-width: 640px) {
  .contact-section {
    padding-inline: 20px;
  }

  .contact-card {
    padding: 32px;
  }

  .contact-actions {
    grid-template-columns: repeat(3, 1fr);
  }

  .footer {
    grid-template-columns: 1fr 1fr;
  }

  .copyright {
    grid-column: 1 / -1;
  }
}

@media (min-width: 768px) {
  .contact-section {
    padding: 20px 24px 35px;
  }

  .contact-card {
    grid-template-columns: minmax(0, 1.5fr) minmax(180px, 0.5fr);
    align-items: center;
    gap: 42px;
    padding: clamp(34px, 5vw, 55px);
  }

  .contact-actions {
    grid-template-columns: 1fr;
  }

  .footer {
    grid-template-columns: minmax(0, 1fr) auto auto;
    align-items: center;
    gap: 28px;
  }

  .footer-contact {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
  }

  .footer-business {
    text-align: right;
  }
}

@media (min-width: 1228px) {
  .contact-section {
    padding-inline: 0;
  }
}
</style>