<script setup lang="ts">
/*
 * ExperienceSection
 * Frames the user's recent years as a continuous software-development path:
 * formal study -> applied training -> independent product/client delivery ->
 * structured workplace experience.
 */

type ExperienceItem = {
  role: string
  organisation: string
  period: string
  description: string
  highlights?: string[]
}

const experience: ExperienceItem[] = [
  {
    role: 'Founder & Full-Stack Developer',
    organisation: 'The Tech Alchemy Lab',
    period: '2023 — Present',
    description:
      'Run a one-person digital studio focused on building and shipping practical software for small businesses while developing deeper full-stack engineering capability through production work.',
    highlights: [
      'Built and deployed full-stack products including Tech Alchemy CRM, a standalone Authentication System and the Facilities Management Toolbox.',
      'Delivered live client websites and digital systems from requirements and interface design through implementation, debugging and deployment.',
      'Own the complete delivery lifecycle: frontend, backend integration, authentication, databases, production releases, maintenance and client handover.',
    ],
  },
  {
    role: 'Digital Associate',
    organisation: 'YES Programme — UVU Africa / Schauenburg',
    period: '2024 — 2025',
    description:
      'Completed a 12-month professional placement focused on digital technology, workplace experience and technical development, including exposure to cybersecurity and professional technology environments.',
    highlights: [
      'Worked in a structured professional environment while continuing hands-on software development outside the placement.',
      'Strengthened workplace communication, digital operations and cybersecurity awareness alongside technical growth.',
    ],
  },
]
</script>

<template>
  <section id="experience" class="experience-section">
    <div class="section-heading">
      <p>Professional journey</p>
      <h2>Experience</h2>
      <span></span>
    </div>

    <p class="journey-note">
      My recent path combines formal computer-science study, focused software
      training, independent product delivery and professional workplace
      experience — with continuous hands-on development throughout.
    </p>

    <div class="timeline">
      <article
        v-for="item in experience"
        :key="item.role"
        class="timeline-item"
      >
        <div class="timeline-dot"></div>

        <div class="timeline-content">
          <div class="timeline-header">
            <div>
              <h3>{{ item.role }}</h3>
              <p class="organisation">{{ item.organisation }}</p>
            </div>

            <span class="period">{{ item.period }}</span>
          </div>

          <p class="description">{{ item.description }}</p>

          <ul v-if="item.highlights?.length" class="highlights">
            <li v-for="highlight in item.highlights" :key="highlight">
              {{ highlight }}
            </li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  width: 100%;
  max-width: 960px;
  margin-inline: auto;
  padding: 28px 16px 72px;
}

.section-heading {
  margin-bottom: 20px;
  text-align: center;
}

.section-heading p {
  margin: 0 0 8px;
  color: #60707e;
  font-size: 0.72rem;
  letter-spacing: 0.11em;
  text-transform: uppercase;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(1.75rem, 8vw, 2.5rem);
}

.section-heading span {
  display: block;
  width: 56px;
  height: 2px;
  margin: 14px auto 0;
  background: #2dd4bf;
}

.journey-note {
  max-width: 760px;
  margin: 0 auto 38px;
  color: #82909d;
  font-size: 0.86rem;
  line-height: 1.7;
  text-align: center;
}

.timeline {
  position: relative;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 5px;
  top: 7px;
  bottom: 10px;
  width: 1px;
  background: rgba(45, 212, 191, 0.25);
}

.timeline-item {
  position: relative;
  margin-bottom: 42px;
  padding-left: 32px;
}

.timeline-item:last-child {
  margin-bottom: 0;
}

.timeline-dot {
  position: absolute;
  left: 0;
  top: 7px;
  width: 11px;
  height: 11px;

  background: #2dd4bf;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(45, 212, 191, 0.6);
}

.timeline-content {
  padding: 20px;
  background: rgba(255, 255, 255, 0.022);
  border: 1px solid rgba(255, 255, 255, 0.065);
  border-radius: 10px;
}

.timeline-header {
  display: flex;
  flex-direction: column;
  gap: 7px;
}

.timeline-header h3 {
  margin: 0;
  color: #f1f5f9;
  font-size: 1rem;
  line-height: 1.35;
}

.organisation {
  margin: 5px 0 0;
  color: #2dd4bf;
  font-size: 0.82rem;
  line-height: 1.5;
}

.period {
  color: #778592;
  font-size: 0.78rem;
}

.description {
  margin: 13px 0 0;
  color: #a0abb6;
  font-size: 0.85rem;
  line-height: 1.7;
}

.highlights {
  margin: 16px 0 0;
  padding: 0;
  list-style: none;
}

.highlights li {
  position: relative;
  margin: 10px 0;
  padding-left: 17px;
  color: #8f9ba7;
  font-size: 0.8rem;
  line-height: 1.6;
}

.highlights li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.62em;
  width: 5px;
  height: 5px;
  background: #2dd4bf;
  border-radius: 50%;
}

@media (min-width: 640px) {
  .experience-section {
    padding-inline: 20px;
  }

  .timeline-item {
    padding-left: 42px;
  }

  .timeline-header {
    flex-direction: row;
    justify-content: space-between;
    gap: 20px;
  }

  .period {
    flex: 0 0 auto;
    white-space: nowrap;
  }

  .timeline-content {
    padding: 24px;
  }
}

@media (min-width: 768px) {
  .experience-section {
    padding: 30px 24px 80px;
  }
}
</style>