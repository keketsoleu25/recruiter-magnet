<script setup lang="ts">
/*
 * EducationSection
 * Education is presented accurately and concisely.
 * The NWU entry clearly states studies rather than implying degree completion.
 */

const education = [
  {
    institution: 'CodeSpace Academy',
    programme: 'Software Development / Frontend Programme',
    period: '2022 — 2023',
    description:
      'Completed frontend and JavaScript-focused software development training, including Vue.js, web development fundamentals, GitHub, deployment and design principles.',
  },
  {
    institution: 'North-West University',
    programme: 'BSc Computer Science & Statistics Studies',
    period: '2019 — 2022',
    description:
      'Completed university-level studies in Computer Science and Statistics. Degree not completed.',
  },
  {
    institution: 'Simunye Secondary School',
    programme: 'National Senior Certificate',
    period: '2014',
    description:
      'Completed National Senior Certificate',
  },
]
</script>

<template>
  <section id="education" class="education-section">
    <div class="section-heading">
      <p>Learning foundation</p>
      <h2>Education & Training</h2>
      <span></span>
    </div>

    <div class="education-grid">
      <article
        v-for="item in education"
        :key="item.institution"
        class="education-card"
      >
        <div class="education-top">
          <div>
            <h3>{{ item.institution }}</h3>
            <p class="programme">
              {{ item.programme }}
            </p>
          </div>

          <span class="period">
            {{ item.period }}
          </span>
        </div>

        <p class="description">
          {{ item.description }}
        </p>
      </article>
    </div>
  </section>
</template>

<style scoped>
.education-section {
  width: min(900px, calc(100% - 40px));
  margin: 0 auto;
  padding: 20px 0 100px;
}

.section-heading {
  text-align: center;
  margin-bottom: 35px;
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

.education-grid {
  display: grid;
  gap: 15px;
}

.education-card {
  padding: 24px;

  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 10px;
}

.education-top {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.education-card h3 {
  margin: 0;
  color: #f0f4f8;
  font-size: 1.05rem;
}

.programme {
  margin: 6px 0 0;
  color: #2dd4bf;
  font-size: 0.84rem;
}

.period {
  color: #788692;
  font-size: 0.8rem;
  white-space: nowrap;
}

.description {
  margin: 16px 0 0;
  color: #99a6b1;
  font-size: 0.86rem;
  line-height: 1.7;
}

@media (max-width: 600px) {
  .education-section {
    width: min(100% - 28px, 900px);
  }

  .education-top {
    flex-direction: column;
    gap: 7px;
  }
}
</style>