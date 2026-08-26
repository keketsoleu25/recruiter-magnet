<script setup lang="ts">
import RecruiterNav from './components/RecruiterNav.vue'
import HeroSection from './components/HeroSection.vue'
import TechMarquee from './components/TechMarquee.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import EducationSection from './components/EducationSection.vue'
import ContactSection from './components/ContactSection.vue'
</script>

<template>
  <!--
    Recruiter Magnet
    -----------------
    The page is intentionally recruiter-first:
    identity -> availability -> proof -> technical breadth.
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
      <ContactSection />
    </main>
  </div>
</template>

<style>
/*
 * Global foundation.
 * Individual components will own their component-specific styles.
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

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-width: 320px;
  min-height: 100vh;
  background:
    radial-gradient(circle at 70% 15%, rgba(16, 185, 129, 0.08), transparent 30%),
    #05090d;
}

button,
a {
  font: inherit;
}

a {
  color: inherit;
  text-decoration: none;
}

.portfolio-shell {
  min-height: 100vh;
}
</style>