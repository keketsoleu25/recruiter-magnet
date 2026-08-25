<script setup lang="ts">
/*
 * TechMarquee
 * The list is intentionally duplicated in the template to produce
 * a seamless CSS-only infinite loop without JavaScript timers.
 */

const technologies = [
  'Vue.js',
  'TypeScript',
  'JavaScript',
  'React',
  'Next.js',
  'C# / .NET',
  'Python',
  'PostgreSQL',
  'Prisma',
  'Tailwind CSS',
  'Git',
  'Vercel',
]
</script>

<template>
  <section class="marquee" aria-label="Technology stack">
    <div class="fade fade-left"></div>

    <div class="track">
      <div
        v-for="group in 2"
        :key="group"
        class="technology-group"
        :aria-hidden="group === 2"
      >
        <span
          v-for="technology in technologies"
          :key="`${group}-${technology}`"
          class="technology"
        >
          <span class="dot"></span>
          {{ technology }}
        </span>
      </div>
    </div>

    <div class="fade fade-right"></div>
  </section>
</template>

<style scoped>
.marquee {
  position: relative;
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto 70px;

  overflow: hidden;

  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.025);
}

.track {
  display: flex;
  width: max-content;

  /*
   * 46 seconds keeps the movement deliberately subtle.
   * The animation pauses when a recruiter wants to inspect an item.
   */
  animation: marquee 46s linear infinite;
}

.marquee:hover .track {
  animation-play-state: paused;
}

.technology-group {
  display: flex;
  align-items: center;
  flex-shrink: 0;

  gap: 42px;
  padding: 18px 21px;
}

.technology {
  display: inline-flex;
  align-items: center;
  gap: 9px;

  color: #b8c2cc;
  white-space: nowrap;
  font-size: 0.83rem;
}

.dot {
  width: 7px;
  height: 7px;

  flex-shrink: 0;

  background: #2dd4bf;
  border-radius: 50%;
  box-shadow: 0 0 9px rgba(45, 212, 191, 0.7);
}

.fade {
  position: absolute;
  z-index: 2;
  top: 0;
  bottom: 0;

  width: 90px;

  pointer-events: none;
}

.fade-left {
  left: 0;
  background: linear-gradient(to right, #05090d, transparent);
}

.fade-right {
  right: 0;
  background: linear-gradient(to left, #05090d, transparent);
}

/*
 * Moving exactly half the complete track works because both groups
 * contain identical content.
 */
@keyframes marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

/*
 * Accessibility: users who request reduced motion still see the
 * complete stack without continuous animation.
 */
@media (prefers-reduced-motion: reduce) {
  .track {
    animation: none;
  }
}

@media (max-width: 520px) {
  .marquee {
    width: min(100% - 28px, 1180px);
  }

  .technology-group {
    gap: 30px;
  }
}
</style>