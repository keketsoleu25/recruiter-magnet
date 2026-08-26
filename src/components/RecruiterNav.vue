<script setup lang="ts">
/*
 * RecruiterNav
 * Keeps identity and CV access visible at every size while avoiding cramped
 * desktop navigation on narrower laptop and zoomed browser layouts.
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
          <small>Full-Stack Software Developer</small>
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
  background: rgba(5, 9, 13, 0.9);
  backdrop-filter: blur(14px);
}

.nav {
  width: 100%;
  max-width: 1240px;
  min-height: 68px;
  margin-inline: auto;
  padding-inline: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
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
  font-size: 0.94rem;
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
  font-size: 0.68rem;
  white-space: nowrap;
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
    min-height: 76px;
    padding-inline: 28px;
  }

  .brand-mark {
    width: 40px;
    height: 40px;
  }

  .brand strong {
    font-size: 1rem;
  }

  .cv-button {
    padding: 10px 16px;
  }
}

/*
 * Keep the compact header on medium laptops and zoomed layouts.
 * Full navigation appears only when there is genuinely enough width.
 */
@media (min-width: 1180px) {
  .links {
    display: flex;
    align-items: center;
    gap: clamp(18px, 2vw, 28px);
    margin-left: auto;
  }

  .links a {
    color: #aeb7c2;
    font-size: 0.82rem;
    white-space: nowrap;
    transition: color 160ms ease;
  }

  .links a:hover {
    color: #2dd4bf;
  }
}

@media (min-width: 1296px) {
  .nav {
    padding-inline: 0;
  }
}
</style>