<script setup lang="ts">
/*
 * ProjectsSection
 * Recruiters should be able to understand the engineering value of each
 * project without opening GitHub first.
 */

type Project = {
  number: string
  title: string
  description: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Facilities Management Toolbox',
    description:
      'A modular facilities-management platform covering employee management, attendance tracking, operational dashboards and facial-recognition attendance workflows.',
    technologies: [
      'C# / .NET',
      'ASP.NET Core',
      'PostgreSQL',
      'EF Core',
      'Python',
      'OpenCV',
      'PHP',
    ],
    githubUrl: 'https://github.com/keketsoleu25/facilities-toolbox',
  },
  {
    number: '02',
    title: 'Tech Alchemy CRM',
    description:
      'A production-deployed full-stack CRM with clients, projects, Kanban tasks, invoicing, analytics, authentication and a client portal.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Auth.js',
      'Resend',
    ],
    liveUrl: 'https://tech-alchemy-crm.vercel.app',
    githubUrl: 'https://github.com/keketsoleu25/tech-alchemy-crm',
  },
  {
    number: '03',
    title: 'Authentication System',
    description:
      'A standalone authentication system supporting credentials, Google OAuth, email verification and password recovery.',
    technologies: ['Next.js', 'TypeScript', 'Auth.js', 'PostgreSQL'],
    liveUrl: 'https://auth-system-cyan-one.vercel.app',
    githubUrl: 'https://github.com/keketsoleu25/Auth-System',
  },
]
</script>

<template>
  <section id="projects" class="projects-section">
    <div class="section-heading">
      <p>Selected engineering work</p>
      <h2>Flagship Projects</h2>
      <span class="heading-line"></span>
    </div>

    <div class="projects-grid">
      <article
        v-for="project in projects"
        :key="project.number"
        class="project-card"
      >
        <div class="project-top">
          <span class="project-number">{{ project.number }}</span>
          <span class="project-label">Full-Stack Project</span>
        </div>

        <div class="project-preview">
          <span>&lt;/&gt;</span>
        </div>

        <div class="project-content">
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>

          <div class="technology-list">
            <span
              v-for="technology in project.technologies"
              :key="technology"
            >
              {{ technology }}
            </span>
          </div>

          <div
            v-if="project.liveUrl || project.githubUrl"
            class="project-actions"
          >
            <a
              v-if="project.liveUrl"
              :href="project.liveUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo ↗
            </a>

            <a
              v-if="project.githubUrl"
              :href="project.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </article>
    </div>

    <a
      class="github-more"
      href="https://github.com/keketsoleu25"
      target="_blank"
      rel="noopener noreferrer"
    >
      View more projects on GitHub →
    </a>
  </section>
</template>

<style scoped>
.projects-section {
  width: 100%;
  max-width: 1180px;
  margin-inline: auto;
  padding: 44px 16px 76px;
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
  font-size: clamp(1.75rem, 8vw, 2.6rem);
}

.heading-line {
  display: block;
  width: 56px;
  height: 2px;
  margin: 14px auto 0;
  background: #2dd4bf;
}

.projects-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: 16px;
}

.project-card {
  min-width: 0;
  overflow: hidden;

  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.045),
    rgba(255, 255, 255, 0.015)
  );
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 12px;

  transition:
    transform 180ms ease,
    border-color 180ms ease;
}

.project-card:hover {
  transform: translateY(-4px);
  border-color: rgba(45, 212, 191, 0.35);
}

.project-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 15px 15px 0;
}

.project-number {
  width: 34px;
  height: 28px;
  flex: 0 0 auto;

  display: grid;
  place-items: center;

  color: #06110f;
  background: #2dd4bf;
  border-radius: 5px;
  font-size: 0.72rem;
  font-weight: 800;
}

.project-label {
  color: #65727e;
  font-size: 0.62rem;
  text-align: right;
  text-transform: uppercase;
  letter-spacing: 0.07em;
}

.project-preview {
  height: 150px;
  margin: 14px 15px;

  display: grid;
  place-items: center;

  color: rgba(45, 212, 191, 0.8);
  background:
    radial-gradient(circle, rgba(45, 212, 191, 0.12), transparent 55%),
    #070d12;
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 8px;
}

.project-preview span {
  font-size: 2.5rem;
}

.project-content {
  padding: 3px 15px 18px;
}

.project-content h3 {
  margin: 0 0 10px;
  color: #f1f5f9;
  font-size: 1.08rem;
  line-height: 1.3;
}

.project-content p {
  margin: 0;
  color: #929eaa;
  font-size: 0.84rem;
  line-height: 1.65;
}

.technology-list {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 16px;
}

.technology-list span {
  max-width: 100%;
  padding: 5px 7px;
  overflow-wrap: anywhere;

  color: #aeb9c3;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 4px;
  font-size: 0.67rem;
}

.project-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 18px;

  margin-top: 18px;
  padding-top: 15px;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.project-actions a {
  color: #2dd4bf;
  font-size: 0.78rem;
  font-weight: 600;
}

.github-more {
  width: fit-content;
  max-width: 100%;
  display: block;

  margin: 28px auto 0;
  padding: 11px 15px;

  color: #c6d0d9;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 6px;
  font-size: 0.78rem;
  text-align: center;
}

@media (min-width: 640px) {
  .projects-section {
    padding-inline: 20px;
  }

  .project-preview {
    height: 175px;
  }
}

@media (min-width: 768px) {
  .projects-section {
    padding: 50px 24px 90px;
  }

  .projects-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 18px;
  }
}

@media (min-width: 1100px) {
  .projects-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .project-preview {
    height: 190px;
  }

  .project-content p {
    min-height: 92px;
  }
}

@media (min-width: 1228px) {
  .projects-section {
    padding-inline: 0;
  }
}
</style>