<script setup lang="ts">
/*
 * RecruiterNav
 * Keeps recruiter actions visible without competing with the portfolio content.
 */

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]
</script>

<template>
  <header class="nav">
    <a class="brand" href="#">
      <span class="brand-mark">&lt;/&gt;</span>

      <span>
        <strong>Keketso <em>Leu</em></strong>
        <small>Full-Stack Developer</small>
      </span>
    </a>

    <nav class="links" aria-label="Main navigation">
      <a
        v-for="item in navItems"
        :key="item.label"
        :href="item.href"
      >
        {{ item.label }}
      </a>
    </nav>

    <a class="cv-button" href="/Keketso-Leu-CV.pdf" download>
      Download CV
    </a>
  </header>
</template>

<style scoped>
.nav {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
  min-height: 76px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  display: grid;
  place-items: center;

  width: 40px;
  height: 40px;

  color: #2dd4bf;
  border: 1px solid rgba(45, 212, 191, 0.45);
  border-radius: 50%;
}

.brand strong,
.brand small {
  display: block;
}

.brand strong {
  font-size: 1rem;
}

.brand strong em {
  color: #2dd4bf;
  font-style: normal;
}

.brand small {
  margin-top: 3px;
  color: #84909d;
  font-size: 0.72rem;
}

.links {
  display: flex;
  gap: 26px;
}

.links a {
  color: #aeb7c2;
  font-size: 0.85rem;
  transition: color 160ms ease;
}

.links a:hover {
  color: #2dd4bf;
}

.cv-button {
  padding: 10px 16px;
  color: #2dd4bf;
  border: 1px solid #2dd4bf;
  border-radius: 7px;
  font-size: 0.82rem;
}

@media (max-width: 900px) {
  .links {
    display: none;
  }
}

@media (max-width: 520px) {
  .nav {
    width: min(100% - 28px, 1180px);
  }

  .brand small {
    display: none;
  }

  .cv-button {
    padding: 9px 11px;
  }
}
</style>