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

            <span class="period">
              {{ item.period }}
            </span>
          </div>

          <p class="description">
            {{ item.description }}
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  width: min(900px, calc(100% - 40px));
  margin: 0 auto;
  padding: 30px 0 80px;
}

.section-heading {
  text-align: center;
  margin-bottom: 42px;
}

.section-heading p {
  margin: 0 0 8px;
  color: #60707e;
  font-size: 0.78rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.section-heading h2 {
  margin: 0;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
}

.section-heading span {
  display: block;
  width: 65px;
  height: 2px;
  margin: 16px auto 0;
  background: #2dd4bf;
}

.timeline {
  position: relative;
  margin-left: 10px;
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
  padding-left: 42px;
  margin-bottom: 42px;
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
  justify-content: space-between;
  gap: 20px;
}

.timeline-header h3 {
  margin: 0;
  color: #f1f5f9;
  font-size: 1.05rem;
}

.organisation {
  margin: 5px 0 0;
  color: #2dd4bf;
  font-size: 0.85rem;
}

.period {
  color: #778592;
  font-size: 0.8rem;
  white-space: nowrap;
}

.description {
  margin: 14px 0 0;
  color: #98a5b1;
  font-size: 0.87rem;
  line-height: 1.7;
}

@media (max-width: 600px) {
  .experience-section {
    width: min(100% - 28px, 900px);
  }

  .timeline-header {
    flex-direction: column;
    gap: 7px;
  }
}
</style>