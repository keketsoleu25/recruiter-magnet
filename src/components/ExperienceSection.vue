<script setup lang="ts">
/*
 * ExperienceSection
 * Keeps the agency experience framed as hands-on software delivery,
 * while preserving formal workplace experience from the YES Programme.
 */

const experience = [
  {
    role: 'Founder & Full-Stack Developer',
    organisation: 'The Tech Alchemy Lab',
    period: '2023 — Present',
    description:
      'Design, develop and deploy web applications and digital systems for practical business requirements. Own the software lifecycle from requirements and UI implementation through backend integration, databases, testing, debugging and production deployment.',
  },
  {
    role: 'Digital Associate',
    organisation: 'YES Programme — UVU Africa / Schauenburg',
    period: '2024 — 2025',
    description:
      'Completed a 12-month professional placement focused on digital technology, workplace experience and technical development, including exposure to cybersecurity and professional technology environments.',
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
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  width: 100%;
  max-width: 900px;
  margin-inline: auto;
  padding: 28px 16px 72px;
}

.section-heading {
  margin-bottom: 34px;
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
  margin-bottom: 36px;
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
  color: #98a5b1;
  font-size: 0.85rem;
  line-height: 1.7;
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
}

@media (min-width: 768px) {
  .experience-section {
    padding: 30px 24px 80px;
  }
}
</style>