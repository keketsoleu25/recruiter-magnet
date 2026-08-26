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
  width: calc(100% - 32px);
  max-width: 1180px;
  margin: 0 auto 58px;
  overflow: hidden;

  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.025);
}

.track {
  display: flex;
  width: max-content;
  will-change: transform;

  /* Slow movement keeps the strip readable rather than decorative noise. */
  animation: marquee 46s linear infinite;
}

.marquee:hover .track,
.marquee:focus-within .track {
  animation-play-state: paused;
}

.technology-group {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  gap: 28px;
  padding: 15px 16px;
}

.technology {
  display: inline-flex;
  align-items: center;
  gap: 8px;

  color: #b8c2cc;
  white-space: nowrap;
  font-size: 0.76rem;
}

.dot {
  width: 6px;
  height: 6px;
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
  width: 42px;
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

@keyframes marquee {
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-50%);
  }
}

@media (min-width: 768px) {
  .marquee {
    width: calc(100% - 48px);
    margin-bottom: 70px;
  }

  .technology-group {
    gap: 42px;
    padding: 18px 21px;
  }

  .technology {
    font-size: 0.83rem;
  }

  .fade {
    width: 90px;
  }
}

@media (min-width: 1228px) {
  .marquee {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .marquee {
    overflow-x: auto;
  }

  .track {
    animation: none;
  }
}
</style>