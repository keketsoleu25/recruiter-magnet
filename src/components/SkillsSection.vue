<script setup lang="ts">
/*
 * SkillsSection
 * Groups technologies by how recruiters typically scan technical capability.
 */

type SkillGroup = {
  title: string
  skills: string[]
}

const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: [
      'Vue.js',
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Tailwind CSS',
      'HTML',
      'CSS',
    ],
  },
  {
    title: 'Backend',
    skills: [
      'C# / .NET',
      'ASP.NET Core',
      'Python',
      'PHP',
      'REST APIs',
    ],
  },
  {
    title: 'Database & ORM',
    skills: [
      'PostgreSQL',
      'Prisma',
      'Entity Framework Core',
      'Neon',
    ],
  },
  {
    title: 'Auth & Security',
    skills: [
      'Auth.js / NextAuth',
      'Google OAuth',
      'Email Verification',
      'Password Recovery',
      'Role-Based Access',
    ],
  },
  {
    title: 'Tools & Deployment',
    skills: [
      'Git',
      'GitHub',
      'Vercel',
      'Resend',
      'PDFKit',
      'OpenCV',
    ],
  },
]
</script>

<template>
  <section id="skills" class="skills-section">
    <div class="section-heading">
      <p>Technical capability</p>
      <h2>Technical Skills</h2>
      <span></span>
    </div>

    <div class="skills-grid">
      <article
        v-for="group in skillGroups"
        :key="group.title"
        class="skill-group"
      >
        <h3>{{ group.title }}</h3>

        <ul>
          <li
            v-for="skill in group.skills"
            :key="skill"
          >
            {{ skill }}
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
  padding: 40px 0 90px;
}

.section-heading {
  text-align: center;
  margin-bottom: 34px;
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
  color: #f4f7fa;
  font-size: clamp(1.8rem, 4vw, 2.5rem);
}

.section-heading span {
  display: block;
  width: 65px;
  height: 2px;
  margin: 16px auto 0;
  background: #2dd4bf;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 12px;
}

.skill-group {
  padding: 25px;
}

.skill-group + .skill-group {
  border-left: 1px solid rgba(255, 255, 255, 0.06);
}

.skill-group h3 {
  margin: 0 0 18px;
  color: #eef3f7;
  font-size: 0.95rem;
}

.skill-group ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

.skill-group li {
  position: relative;
  margin: 10px 0;
  padding-left: 16px;

  color: #9da9b5;
  font-size: 0.8rem;
}

.skill-group li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.55em;

  width: 5px;
  height: 5px;

  background: #2dd4bf;
  border-radius: 50%;
}

@media (max-width: 950px) {
  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .skill-group + .skill-group {
    border-left: none;
  }
}

@media (max-width: 560px) {
  .skills-section {
    width: min(100% - 28px, 1180px);
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }
}
</style>