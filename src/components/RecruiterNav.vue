<script setup lang="ts">
/*
 * RecruiterNav
 * Mobile-first navigation that keeps identity and CV access visible at every size.
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
  <header class="nav-shell">
    <div class="nav">
      <a class="brand" href="#" aria-label="Keketso Leu home">
        <span class="brand-mark">&lt;/&gt;</span>

        <span class="brand-copy">
          <strong>Keketso <em>Leu</em></strong>
          <small>Full-Stack Developer</small>
        </span>
      </a>

      <nav class="links" aria-label="Main navigation">
        <a v-for="item in navItems" :key="item.label" :href="item.href">
          {{ item.label }}
        </a>
      </nav>

      <a class="cv-button" href="/Keketso-Leu-CV.pdf" download>
        <span class="cv-full">Download CV</span>
        <span class="cv-short">CV</span>
      </a>
    </div>
  </header>
</template>

<style scoped>
.nav-shell {
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(5, 9, 13, 0.88);
  backdrop-filter: blur(14px);
}

.nav {
  width: 100%;
  max-width: 1180px;
  min-height: 68px;
  margin-inline: auto;
  padding-inline: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.brand {
  min-width: 0;
  display: flex;
  align-items: center;
  gap: 10px;
}

.brand-mark {
  width: 36px;
  height: 36px;
  flex: 0 0 auto;

  display: grid;
  place-items: center;

  color: #2dd4bf;
  border: 1px solid rgba(45, 212, 191, 0.45);
  border-radius: 50%;
  font-size: 0.82rem;
}

.brand-copy {
  min-width: 0;
}

.brand strong,
.brand small {
  display: block;
}

.brand strong {
  overflow: hidden;
  color: #f7fafc;
  font-size: 0.92rem;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.brand strong em {
  color: #2dd4bf;
  font-style: normal;
}

.brand small {
  display: none;
  margin-top: 3px;
  color: #84909d;
  font-size: 0.7rem;
}

.links {
  display: none;
}

.cv-button {
  flex: 0 0 auto;
  padding: 9px 12px;
  color: #2dd4bf;
  border: 1px solid #2dd4bf;
  border-radius: 7px;
  font-size: 0.78rem;
  font-weight: 600;
}

.cv-full {
  display: none;
}

@media (min-width: 480px) {
  .nav {
    padding-inline: 20px;
  }

  .brand small {
    display: block;
  }

  .cv-full {
    display: inline;
  }

  .cv-short {
    display: none;
  }
}

@media (min-width: 768px) {
  .nav {
    min-height: 74px;
    padding-inline: 24px;
  }

  .brand-mark {
    width: 40px;
    height: 40px;
  }

  .brand strong {
    font-size: 1rem;
  }
}

@media (min-width: 960px) {
  .links {
    display: flex;
    align-items: center;
    gap: clamp(14px, 2vw, 26px);
  }

  .links a {
    color: #aeb7c2;
    font-size: 0.8rem;
    transition: color 160ms ease;
  }

  .links a:hover {
    color: #2dd4bf;
  }
}

@media (min-width: 1228px) {
  .nav {
    padding-inline: 0;
  }
}
</style>