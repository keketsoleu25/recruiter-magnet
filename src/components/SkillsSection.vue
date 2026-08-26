<script setup lang="ts">
/*
 * SkillsSection
 * Groups technologies by how recruiters typically scan technical capability,
 * while keeping active learning clearly separate from production experience.
 */

type SkillGroup = {
  title: string
  skills: string[]
}

const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    skills: ['Vue.js', 'React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    title: 'Backend',
    skills: ['C# / .NET', 'ASP.NET Core', 'Python', 'PHP', 'REST APIs'],
  },
  {
    title: 'Database & ORM',
    skills: ['PostgreSQL', 'Prisma', 'Entity Framework Core', 'Neon'],
  },
  {
    title: 'Auth & Security',
    skills: ['Auth.js / NextAuth', 'Google OAuth', 'Email Verification', 'Password Recovery', 'Role-Based Access'],
  },
  {
    title: 'Tools & Deployment',
    skills: ['Git', 'GitHub', 'Vercel', 'Resend', 'PDFKit', 'OpenCV'],
  },
]

const learningStack = ['Docker', 'Containers', 'CI/CD Pipelines', 'Deployment Automation']
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
          <li v-for="skill in group.skills" :key="skill">
            {{ skill }}
          </li>
        </ul>
      </article>
    </div>

    <div class="learning-panel">
      <div class="learning-copy">
        <p>Currently learning</p>
        <h3>DevOps & Delivery</h3>
        <span>
          Expanding my deployment workflow beyond application hosting into
          containers, repeatable delivery and automated pipelines.
        </span>
      </div>

      <div class="learning-tags" aria-label="Technologies currently learning">
        <span v-for="skill in learningStack" :key="skill">
          {{ skill }}
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills-section {
  width: 100%;
  max-width: 1180px;
  margin-inline: auto;
  padding: 36px 16px 76px;
}

.section-heading {
  margin-bottom: 30px;
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
  color: #f4f7fa;
  font-size: clamp(1.75rem, 8vw, 2.5rem);
}

.section-heading span {
  display: block;
  width: 56px;
  height: 2px;
  margin: 14px auto 0;
  background: #2dd4bf;
}

.skills-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  overflow: hidden;

  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 12px;
}

.skill-group {
  min-width: 0;
  padding: 20px;
}

.skill-group + .skill-group {
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.skill-group h3 {
  margin: 0 0 16px;
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
  margin: 9px 0;
  padding-left: 16px;
  overflow-wrap: anywhere;

  color: #9da9b5;
  font-size: 0.8rem;
  line-height: 1.45;
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

.learning-panel {
  display: grid;
  gap: 22px;
  margin-top: 18px;
  padding: 22px;

  background:
    linear-gradient(135deg, rgba(45, 212, 191, 0.07), transparent 55%),
    rgba(255, 255, 255, 0.018);
  border: 1px solid rgba(45, 212, 191, 0.14);
  border-radius: 12px;
}

.learning-copy p {
  margin: 0 0 6px;
  color: #2dd4bf;
  font-size: 0.68rem;
  letter-spacing: 0.11em;
  text-transform: uppercase;
}

.learning-copy h3 {
  margin: 0;
  color: #eef3f7;
  font-size: 1.05rem;
}

.learning-copy span {
  display: block;
  max-width: 650px;
  margin-top: 9px;
  color: #84929e;
  font-size: 0.78rem;
  line-height: 1.6;
}

.learning-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-content: center;
}

.learning-tags span {
  padding: 8px 10px;
  color: #bfece5;
  background: rgba(45, 212, 191, 0.055);
  border: 1px solid rgba(45, 212, 191, 0.15);
  border-radius: 6px;
  font-size: 0.73rem;
}

@media (min-width: 640px) {
  .skills-section {
    padding-inline: 20px;
  }

  .skills-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .skill-group + .skill-group {
    border-top: none;
  }

  .skill-group:nth-child(even) {
    border-left: 1px solid rgba(255, 255, 255, 0.06);
  }

  .skill-group:nth-child(n + 3) {
    border-top: 1px solid rgba(255, 255, 255, 0.06);
  }
}

@media (min-width: 900px) {
  .skills-section {
    padding: 40px 24px 90px;
  }

  .skills-grid {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }

  .skill-group {
    padding: 22px 18px;
  }

  .skill-group:nth-child(even),
  .skill-group:nth-child(n + 3) {
    border-top: none;
  }

  .skill-group + .skill-group {
    border-left: 1px solid rgba(255, 255, 255, 0.06);
  }

  .learning-panel {
    grid-template-columns: minmax(0, 1.35fr) minmax(300px, 0.65fr);
    align-items: center;
    padding: 24px 26px;
  }

  .learning-tags {
    justify-content: flex-end;
  }
}

@media (min-width: 1228px) {
  .skills-section {
    padding-inline: 0;
  }
}
</style>