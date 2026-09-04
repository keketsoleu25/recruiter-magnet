<script setup lang="ts">
/*
 * TrustedByCarousel
 * Client proof strip. Uses supplied client artwork where available and falls
 * back to compact initials for clients without a logo asset in /public.
 */

const clients = [
  {
    name: 'Bambanani Daycare',
    image: '/images/bambanani_logo.jpeg',
    note: 'Early Childhood Development',
    href: 'https://bambananidaycare.co.za'
  },
  {
    name: 'Ailwei Devine',
    image: '/images/ailwei-devine-logo.png',
    note: 'Business Website',
    href: 'https://ail-devine.vercel.app/'
  },
  {
    name: 'ITH Academic Foundation',
    image: '/images/ith-academic-logo.png',
    note: 'Student Foundation',
    href: 'https://ithacademic.co.za'
  },
  {
    name: 'Afromillionial',
    image: '/images/afromillionial-logo.png',
    note: 'Business Website',
    href: 'https://afromillionial.co.za'
  },
  {
    name: 'Tech Alchemy CRM',
    image: '/images/tech-alchemy-crm.png',
    note: 'Business Management Platform',
    href: 'https://tech-alchemy-crm.vercel.app'
  }
]
</script>

<template>
  <section class="trusted" aria-labelledby="trusted-title">
    <div class="trusted-header">
      <p class="eyebrow">Trusted by</p>
      <h2 id="trusted-title">Trusted by businesses across South Africa</h2>
      <p class="tagline">Production software, websites and digital solutions delivered for real clients.</p>
    </div>

    <div class="carousel" aria-label="Trusted clients and delivered projects">
      <div class="fade fade-left"></div>

      <div class="track">
        <div
          v-for="group in 2"
          :key="group"
          class="client-group"
          :aria-hidden="group === 2"
        >
          <a
            v-for="client in clients"
            :key="`${group}-${client.name}`"
            class="client-logo"
            :href="client.href"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span class="client-mark">
              <img
                :src="client.image"
                :alt="`${client.name} logo`"
                loading="lazy"
              />
            </span>
            <span class="client-copy">
              <strong>{{ client.name }}</strong>
              <small>{{ client.note }}</small>
            </span>
          </a>
        </div>
      </div>

      <div class="fade fade-right"></div>
    </div>
  </section>
</template>

<style scoped>
.trusted {
  width: calc(100% - 32px);
  max-width: 1180px;
  margin: 0 auto 58px;
}

.trusted-header {
  margin-bottom: 18px;
}

.eyebrow {
  margin: 0 0 8px;
  color: #2dd4bf;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

h2 {
  max-width: 620px;
  margin: 0 0 8px 0;
  color: #eef3f7;
  font-size: clamp(1.35rem, 5vw, 2rem);
  line-height: 1.12;
}

.tagline {
  max-width: 620px;
  margin: 0;
  color: #8794a1;
  font-size: 0.95rem;
  line-height: 1.5;
}

.carousel {
  position: relative;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 8px;
  background:
    linear-gradient(135deg, rgba(45, 212, 191, 0.045), transparent 40%),
    rgba(255, 255, 255, 0.025);
}

.track {
  display: flex;
  width: max-content;
  will-change: transform;
  animation: client-marquee-reverse 42s linear infinite;
}

.carousel:hover .track,
.carousel:focus-within .track {
  animation-play-state: paused;
}

.client-group {
  display: flex;
  align-items: stretch;
  flex-shrink: 0;
  gap: 14px;
  padding: 14px;
}

.client-logo {
  display: flex;
  align-items: center;
  gap: 11px;
  min-width: 230px;
  padding: 13px 15px;
  color: inherit;
  text-decoration: none;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  background: rgba(5, 9, 13, 0.72);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
  transition: all 0.3s ease;
  cursor: pointer;
}

.client-logo:hover {
  transform: translateY(-4px);
  border-color: #2dd4bf;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04), 0 12px 24px rgba(45, 212, 191, 0.15);
}

.client-mark {
  display: grid;
  width: 72px;
  height: 72px;
  flex: 0 0 auto;
  overflow: hidden;
  place-items: center;
  padding: 6px;
  background: white;
  border-radius: 10px;
}

.client-mark img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.client-copy {
  min-width: 0;
}

.client-copy strong,
.client-copy small {
  display: block;
}

.client-copy strong {
  color: #eef3f7;
  font-size: 0.83rem;
  line-height: 1.25;
}

.client-copy small {
  margin-top: 4px;
  color: #8794a1;
  font-size: 0.68rem;
  line-height: 1.3;
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

@keyframes client-marquee-reverse {
  from {
    transform: translateX(-50%);
  }

  to {
    transform: translateX(0);
  }
}

@media (min-width: 768px) {
  .trusted {
    width: calc(100% - 48px);
    margin-bottom: 70px;
  }

  .trusted-header {
    margin-bottom: 22px;
  }

  .client-group {
    gap: 18px;
    padding: 18px;
  }

  .client-logo {
    min-width: 270px;
    padding: 15px 18px;
  }

  .fade {
    width: 90px;
  }
}

@media (min-width: 1228px) {
  .trusted {
    width: 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .carousel {
    overflow-x: auto;
  }

  .track {
    animation: none;
  }
}
</style>
