<script setup lang="ts">
import { ref } from 'vue'

/*
 * RecruiterNav
 * Keeps identity and CV access visible while providing a compact navigation
 * menu on phones, tablets and narrower laptop layouts.
 */

const menuOpen = ref(false)

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const closeMenu = () => {
  menuOpen.value = false
}
</script>

<template>
  <header class="nav-shell">
    <div class="nav">
      <a class="brand" href="#" aria-label="Keketso Leu home" @click="closeMenu">
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

      <a
        href="/Keketso_Leu_ATS_Full_Stack_Software_Developer_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        class="cv-button"
      >
        Download CV
      </a>

      <button
        class="menu-button"
        type="button"
        :aria-expanded="menuOpen"
        aria-controls="mobile-menu"
        aria-label="Toggle navigation menu"
        @click="menuOpen = !menuOpen"
      >
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
        <span :class="{ open: menuOpen }"></span>
      </button>
    </div>

    <nav
      id="mobile-menu"
      class="mobile-menu"
      :class="{ open: menuOpen }"
      aria-label="Mobile navigation"
    >
      <a
        v-for="item in navItems"
        :key="item.label"
        :href="item.href"
        @click="closeMenu"
      >
        {{ item.label }}
      </a>

      <a
        class="mobile-cv"
        href="/Keketso_Leu_ATS_Full_Stack_Software_Developer_Resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        @click="closeMenu"
      >
        Download CV
      </a>
    </nav>
  </header>
</template>

<style scoped>
.nav-shell {
  position: relative;
  z-index: 50;
  width: 100%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(5, 9, 13, 0.94);
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

.links,
.desktop-cv {
  display: none;
}
.cv-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 10px 16px;

  color: #06110f;
  background: #2dd4bf;

  border: 1px solid #2dd4bf;
  border-radius: 6px;

  font-size: 0.8rem;
  font-weight: 700;
  text-decoration: none;

  transition:
    background 160ms ease,
    border-color 160ms ease,
    transform 160ms ease;
}

.cv-button:hover {
  background: #5eead4;
  border-color: #5eead4;
  transform: translateY(-1px);
}

.cv-button:focus-visible {
  outline: 2px solid #5eead4;
  outline-offset: 3px;
}

.menu-button {
  width: 42px;
  height: 42px;
  flex: 0 0 auto;

  display: grid;
  place-content: center;
  gap: 5px;

  padding: 0;
  color: inherit;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  cursor: pointer;
}

.menu-button span {
  width: 19px;
  height: 1.5px;
  background: #d8e0e7;
  border-radius: 999px;
  transition: transform 180ms ease, opacity 180ms ease;
}

.menu-button span:nth-child(1).open {
  transform: translateY(6.5px) rotate(45deg);
}

.menu-button span:nth-child(2).open {
  opacity: 0;
}

.menu-button span:nth-child(3).open {
  transform: translateY(-6.5px) rotate(-45deg);
}

.mobile-menu {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;

  max-height: 0;
  overflow: hidden;
  opacity: 0;

  display: grid;
  padding: 0 16px;

  background: rgba(5, 9, 13, 0.98);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 18px 35px rgba(0, 0, 0, 0.35);

  transition: max-height 220ms ease, opacity 180ms ease, padding 220ms ease;
}

.mobile-menu.open {
  max-height: 520px;
  padding-top: 12px;
  padding-bottom: 18px;
  opacity: 1;
}

.mobile-menu a {
  padding: 13px 4px;
  color: #b9c3cc;
  border-bottom: 1px solid rgba(255, 255, 255, 0.055);
  font-size: 0.88rem;
}

.mobile-menu a:hover {
  color: #2dd4bf;
}

.mobile-menu .mobile-cv {
  margin-top: 10px;
  padding: 11px 14px;
  color: #02110f;
  background: #2dd4bf;
  border: 0;
  border-radius: 7px;
  font-weight: 700;
  text-align: center;
}

@media (min-width: 480px) {
  .nav,
  .mobile-menu {
    padding-inline: 20px;
  }

  .brand small {
    display: block;
  }
}

@media (min-width: 768px) {
  .nav {
    min-height: 76px;
    padding-inline: 28px;
  }

  .mobile-menu {
    padding-inline: 28px;
  }

  .brand-mark {
    width: 40px;
    height: 40px;
  }

  .brand strong {
    font-size: 1rem;
  }
}

/*
 * Full navigation appears only when the viewport has enough room to keep the
 * brand, links and CV button on one clean line.
 */
@media (min-width: 1180px) {
  .menu-button,
  .mobile-menu {
    display: none;
  }

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

  .desktop-cv {
    display: inline-flex;
    flex: 0 0 auto;
    padding: 10px 16px;
    color: #2dd4bf;
    border: 1px solid #2dd4bf;
    border-radius: 7px;
    font-size: 0.78rem;
    font-weight: 600;
  }
}

@media (min-width: 1296px) {
  .nav {
    padding-inline: 0;
  }
}
</style>