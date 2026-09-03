<script setup lang="ts">
/* EducationSection — verified education only. */
const education = [
  {
    institution: 'University of South Africa (UNISA)',
    programme: 'Diploma in Information Technology (98806)',
    period: '2025 — Present',
    status: 'Qualification in progress',
    description: '6 modules completed in 2025, including two distinctions.',
    modules: [
      'BSM1501 · Business Management Fundamentals IA · 67%',
      'ENG1504 · Practising Workplace English · 61%',
      'EUP1501 · Ethical Information and Communication · 81% · Distinction',
      'ICT1511 · Introduction to Programming · 54%',
      'ICT1512 · Introduction to Interactive · 79% · Distinction',
      'ICT1541 · Business Informatics I · 64%',
    ],
  },
  {
    institution: 'CodeSpace Academy',
    programme: 'Software Development / Frontend Programme',
    period: '2022 — 2023',
    description: 'Completed frontend and JavaScript-focused software development training, including Vue.js, web development fundamentals, GitHub, deployment and design principles.',
  },
  {
    institution: 'North-West University (NWU)',
    programme: 'BSc Computer Science & Statistics Studies',
    period: '2019 — 2022',
    status: 'Degree not completed',
    description: 'Completed university-level Computer Science and Statistics coursework.',
    modules: [
      'CMPG 111 · Introduction to Computing and Programming (Python) · 66%',
      'CMPG 121 · Structured Programming (C++) · 70%',
      'STTN 115 · Descriptive Statistics and Inference · 62%',
      'ECON 122 · Introduction to Macro-Economics · 51%',
      'ALDE 111 · Academic Literacy Development I · 51%',
      'ALDE 122 · Academic Literacy Development · 50%',
      'WVNS 211 · Understanding the Natural World · 69%',
      'WVNS 221 · Understanding the Natural Worlds · 85% · Distinction',
    ],
  },
  {
    institution: 'Westcol TVET College — Randfontein Campus',
    programme: 'Engineering Studies',
    period: '2015',
    description: 'Confirmed completed subjects at N2 and N3 level.',
    modules: [
      'Platers Theory · N2',
      'Mathematics · N2',
      'Engineering Science · N2',
      'Mathematics · N3',
      'Mechanotechnology · N3',
    ],
  },
  {
    institution: 'Simunye Secondary School',
    programme: 'National Senior Certificate',
    period: '2014',
    description: 'Completed the National Senior Certificate with admission to bachelor’s degree studies.',
    modules: [
      'Sesotho Home Language · 73% · Level 6',
      'English First Additional Language · 53% · Level 4',
      'Mathematics · 61% · Level 5',
      'Life Orientation · 55% · Level 4',
      'Geography · 59% · Level 4',
      'Life Sciences · 69% · Level 5',
      'Physical Sciences · 71% · Level 6',
    ],
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
      <article v-for="item in education" :key="item.institution" class="education-card">
        <div class="education-top">
          <div>
            <h3>{{ item.institution }}</h3>
            <p class="programme">{{ item.programme }}</p>
          </div>
          <span class="period">{{ item.period }}</span>
        </div>

        <span v-if="item.status" class="status">{{ item.status }}</span>
        <p class="description">{{ item.description }}</p>

        <div v-if="item.modules" class="modules">
          <p class="modules-title">Confirmed completed modules</p>
          <div class="module-grid">
            <div v-for="module in item.modules" :key="module" class="module-chip">
              {{ module }}
            </div>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.education-section { width: 100%; max-width: 900px; margin-inline: auto; padding: 18px 16px 84px; }
.section-heading { margin-bottom: 30px; text-align: center; }
.section-heading p { margin: 0 0 8px; color: #60707e; font-size: .72rem; letter-spacing: .11em; text-transform: uppercase; }
.section-heading h2 { margin: 0; font-size: clamp(1.75rem, 8vw, 2.5rem); line-height: 1.15; }
.section-heading span { display: block; width: 56px; height: 2px; margin: 14px auto 0; background: #2dd4bf; }
.education-grid { display: grid; gap: 14px; }
.education-card { min-width: 0; padding: 20px; background: rgba(255,255,255,.025); border: 1px solid rgba(255,255,255,.07); border-radius: 10px; }
.education-top { display: flex; flex-direction: column; gap: 7px; }
.education-card h3 { margin: 0; color: #f0f4f8; font-size: 1rem; line-height: 1.35; }
.programme { margin: 6px 0 0; color: #2dd4bf; font-size: .82rem; line-height: 1.5; }
.period { color: #788692; font-size: .78rem; }
.status { display: inline-block; margin-top: 12px; padding: 4px 8px; color: #b7c2cb; font-size: .72rem; border: 1px solid rgba(255,255,255,.1); border-radius: 999px; }
.description { margin: 14px 0 0; color: #99a6b1; font-size: .84rem; line-height: 1.7; }
.modules { margin-top: 18px; }
.modules-title { margin: 0 0 10px; color: #dce4ea; font-size: .78rem; font-weight: 600; }
.module-grid { display: grid; gap: 8px; }
.module-chip { padding: 9px 10px; color: #aeb9c2; font-size: .74rem; line-height: 1.45; background: rgba(255,255,255,.02); border: 1px solid rgba(255,255,255,.06); border-radius: 7px; }
@media (min-width: 640px) {
  .education-section { padding-inline: 20px; }
  .education-card { padding: 24px; }
  .education-top { flex-direction: row; justify-content: space-between; gap: 20px; }
  .period { flex: 0 0 auto; white-space: nowrap; }
  .module-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (min-width: 768px) { .education-section { padding: 20px 24px 100px; } }
</style>