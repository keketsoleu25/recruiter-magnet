<script setup lang="ts">
import RecruiterNav from './components/RecruiterNav.vue'
import HeroSection from './components/HeroSection.vue'
import TechMarquee from './components/TechMarquee.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import EducationSection from './components/EducationSection.vue'
import EarlierJourneySection from './components/EarlierJourneySection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<template>
  <!--
    Recruiter Magnet
    -----------------
    Recruiter-first flow: identity -> proof -> capability -> experience -> contact.
  -->
  <div class="portfolio-shell">
    <RecruiterNav />

    <main>
      <HeroSection />
      <TechMarquee />
      <ProjectsSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <EarlierJourneySection />
      <ContactSection />
    </main>
  </div>
</template>

<style>
/*
 * Global responsive foundation.
 * Components remain self-contained while sharing safe sizing defaults.
 */
:root {
  font-family:
    Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
    sans-serif;
  color: #f7fafc;
  background: #05090d;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  width: 100%;
  max-width: 100%;
  scroll-behavior: smooth;
  overflow-x: hidden;
}

body,
#app {
  width: 100%;
  max-width: 100%;
  min-width: 0;
  min-height: 100vh;
  margin: 0;
  overflow-x: hidden;
}

body {
  background:
    radial-gradient(circle at 70% 15%, rgba(16, 185, 129, 0.08), transparent 30%),
    #05090d;
}

main,
section,
article,
div {
  min-width: 0;
}

img,
svg,
video,
canvas {
  display: block;
  max-width: 100%;
  height: auto;
}

button,
a,
input,
textarea {
  font: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

a:focus-visible,
button:focus-visible,
input:focus-visible,
textarea:focus-visible {
  outline: 2px solid #2dd4bf;
  outline-offset: 3px;
}

section[id] {
  scroll-margin-top: 88px;
}

.portfolio-shell {
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
}
</style>