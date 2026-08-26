<script setup lang="ts">
import ContactForm from './ContactForm.vue'
/*
 * ContactSection
 * Final recruiter conversion point.
 * Uses direct contact actions instead of a client-style project enquiry form.
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
        <a
          class="primary"
          href="mailto:keketsoleu25@gmail.com"
        >
          Email Me
        </a>

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


    <!--
      Recruiter contact form.
      Kept separate from the quick email / LinkedIn / GitHub actions above.
    -->
    <div class="form-wrapper">
      <div class="form-heading">
        <p>Prefer to send a message here?</p>
        <span>I’ll receive it directly and can reply by email.</span>
      </div>

      <ContactForm />
    </div>



    <footer class="footer">
      <div>
        <strong>Keketso Leu</strong>
        <span>Full-Stack Software Developer</span>
      </div>

      <div class="footer-contact">
        <a href="mailto:keketsoleu25@gmail.com">
          keketsoleu25@gmail.com
        </a>

        <a href="tel:+27692602709">
          069 260 2709
        </a>
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

      <p class="copyright">
        © {{ currentYear }} Keketso Leu
      </p>
    </footer>
  </section>
</template>

<style scoped>
.contact-section {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
  padding: 20px 0 35px;
}

.contact-card {
  display: grid;
  grid-template-columns: 1.5fr 0.5fr;
  gap: 50px;

  padding: clamp(30px, 5vw, 55px);

  background:
    radial-gradient(
      circle at 80% 50%,
      rgba(45, 212, 191, 0.1),
      transparent 35%
    ),
    rgba(255, 255, 255, 0.025);

  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 14px;
}

.eyebrow {
  margin: 0 0 12px;

  color: #2dd4bf;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

h2 {
  margin: 0;

  color: #f4f7fa;
  font-size: clamp(2rem, 5vw, 3.2rem);
  letter-spacing: -0.035em;
}

.intro {
  max-width: 680px;
  margin: 20px 0 0;

  color: #9da9b5;
  font-size: 0.95rem;
  line-height: 1.75;
}

.availability {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;

  margin-top: 25px;
}

.availability span {
  padding: 7px 10px;

  color: #b7c1ca;
  background: rgba(255, 255, 255, 0.035);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 5px;

  font-size: 0.73rem;
}

.contact-actions {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}

.contact-actions a {
  padding: 12px 18px;

  text-align: center;

  color: #c7d0d9;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 6px;

  font-size: 0.82rem;

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

.footer {
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: 35px;

  padding: 35px 5px 0;

  color: #687581;
  font-size: 0.75rem;
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
  gap: 20px;
}

.footer-contact a:hover,
.footer-business a:hover {
  color: #2dd4bf;
}

.footer-business {
  text-align: right;
}

.footer-business a {
  display: inline-block;
  margin-top: 4px;
  color: #a9b4be;
}

.copyright {
  grid-column: 1 / -1;

  margin: 5px 0 0;
  padding-top: 18px;

  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.form-wrapper {
  max-width: 820px;
  margin: 30px auto 0;
}

.form-heading {
  margin-bottom: 15px;
}

.form-heading p {
  margin: 0 0 5px;
  color: #f1f5f9;
  font-size: 1rem;
  font-weight: 600;
}

.form-heading span {
  color: #7f8c98;
  font-size: 0.8rem;
}

@media (max-width: 760px) {
  .contact-card {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .footer {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .footer-contact {
    flex-direction: column;
    gap: 7px;
  }

  .footer-business {
    text-align: left;
  }
}

@media (max-width: 520px) {
  .contact-section {
    width: min(100% - 28px, 1180px);
  }
}
</style>