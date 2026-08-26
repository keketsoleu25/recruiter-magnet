<script setup lang="ts">
/*
 * ProjectsSection
 * ----------------
 * Highlights the strongest engineering projects for recruiters.
 *
 * Each card provides:
 * - A real product screenshot
 * - A concise engineering description
 * - Technology stack
 * - Current project status
 * - Live demo and/or GitHub repository
 */

type Project = {
  number: string
  title: string
  description: string
  technologies: string[]
  image: string
  imageAlt: string
  status: 'Production' | 'In Development'
  liveUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Facilities Management Toolbox',
    description:
      'A modular facilities-management platform combining employee management, attendance tracking, operational dashboards and facial-recognition attendance workflows.',
    technologies: [
      'C# / .NET',
      'ASP.NET Core',
      'PostgreSQL',
      'EF Core',
      'Python',
      'OpenCV',
      'PHP',
    ],
  },

  {
    number: '02',
    title: 'Tech Alchemy CRM',
    description:
      'A production-deployed full-stack CRM connecting clients, projects, Kanban tasks, invoicing, analytics, authentication and a client portal.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'Auth.js',
      'Resend',
    ],
    image: '/images/tech-alchemy-crm.png',
    imageAlt:
      'Tech Alchemy CRM interface showing the production client and project management platform',
    status: 'Production',
    liveUrl: 'https://tech-alchemy-crm.vercel.app',
    githubUrl:
      'https://github.com/keketsoleu25/tech-alchemy-crm',
  },

  {
    number: '03',
    title: 'Authentication System',
    description:
      'A standalone authentication system supporting credentials, Google OAuth, email verification and password recovery.',
    technologies: [
      'Next.js',
      'TypeScript',
      'Auth.js',
      'PostgreSQL',
    ],
    liveUrl: 'https://auth-system-cyan-one.vercel.app',
    githubUrl:
      'https://github.com/keketsoleu25/Auth-System',
  },
]
</script>

<template>
  <section
    id="projects"
    class="projects-section"
  >
    <div class="section-heading">
      <p>Selected engineering work</p>

      <h2>Flagship Projects</h2>
      <span class="heading-line"></span>
    </div>

    <!-- Project cards -->
    <div class="projects-grid">
      <article
        v-for="project in projects"
        :key="project.number"
        class="project-card"
      >
        <!-- Card metadata -->
        <div class="project-top">
          <span class="project-number">
            {{ project.number }}
          </span>

          <span class="project-label">
            Full-Stack Project
          </span>
        </div>

        <!--
          Real project screenshot.
          Images are stored inside /public/images.
        -->
        <div class="project-preview">
          <img
            :src="project.image"
            :alt="project.imageAlt"
            loading="lazy"
          />
        </div>

        <!-- Project information -->
        <div class="project-content">
          <h3>{{ project.title }}</h3>

          <p>
            {{ project.description }}
          </p>

          <!-- Technology stack -->
          <div class="technology-list">
            <span
              v-for="technology in project.technologies"
              :key="technology"
            >
              {{ technology }}
            </span>
          </div>

          <!-- External project links -->
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

    <!-- Main GitHub profile -->
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
/*
 * =========================================================
 * PROJECTS SECTION
 * =========================================================
 */

.projects-section {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
  padding: 50px 0 90px;
}

/*
 * =========================================================
 * SECTION HEADING
 * =========================================================
 */

.section-heading {
  margin-bottom: 35px;
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
  font-size: clamp(1.8rem, 4vw, 2.6rem);
}

.heading-line {
  display: block;
  width: 56px;
  height: 2px;
  margin: 16px auto 0;

  background: #2dd4bf;
}

/*
 * =========================================================
 * PROJECT GRID
 * =========================================================
 */

.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
}

/*
 * =========================================================
 * PROJECT CARD
 * =========================================================
 */

.project-card {
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
    border-color 180ms ease,
    box-shadow 180ms ease;
}

.project-card:hover {
  transform: translateY(-5px);
  border-color: rgba(45, 212, 191, 0.35);
}

.project-top {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 16px 18px 0;
}

.project-number {
  width: 34px;
  height: 28px;
  flex: 0 0 auto;

  display: grid;
  place-items: center;

  width: 34px;
  height: 28px;

  color: #06110f;
  background: #2dd4bf;

  border-radius: 5px;
  font-size: 0.72rem;
  font-weight: 800;
}

.project-label {
  color: #65727e;
  font-size: 0.68rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

/*
 * =========================================================
 * PROJECT SCREENSHOT
 * =========================================================
 */

.project-preview {
  height: 190px;
  margin: 16px;

  display: grid;
  place-items: center;

  color: rgba(45, 212, 191, 0.8);

  background:
    radial-gradient(
      circle,
      rgba(45, 212, 191, 0.12),
      transparent 55%
    ),
    #070d12;

  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 8px;
}

.project-preview span {
  font-size: 3rem;
}

/*
 * =========================================================
 * PROJECT CONTENT
 * =========================================================
 */

.project-content {
  padding: 3px 18px 20px;
}

.project-content h3 {
  margin: 0 0 12px;

  color: #f1f5f9;
  font-size: 1.15rem;
}

.project-content p {
  margin: 0;
  color: #929eaa;
  font-size: 0.86rem;
  line-height: 1.65;
}

/*
 * =========================================================
 * TECHNOLOGIES
 * =========================================================
 */

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

  font-size: 0.69rem;
}

/*
 * =========================================================
 * PROJECT ACTIONS
 * =========================================================
 */

.project-actions {
  display: flex;
  gap: 20px;

  margin-top: 20px;
  padding-top: 16px;

  border-top: 1px solid rgba(255, 255, 255, 0.06);
}

.project-actions a {
  color: #2dd4bf;

  font-size: 0.78rem;
  font-weight: 600;

  text-decoration: none;

  transition:
    color 160ms ease,
    transform 160ms ease;
}

.project-actions a:hover {
  color: #5eead4;
}

/*
 * =========================================================
 * GITHUB BUTTON
 * =========================================================
 */

.github-more {
  width: fit-content;
  max-width: 100%;
  display: block;

  margin: 32px auto 0;
  padding: 11px 17px;

  color: #c6d0d9;

  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.09);
  border-radius: 6px;

  font-size: 0.8rem;
}

@media (max-width: 900px) {
  .projects-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .project-preview {
    height: 190px;
  }

  .project-content p {
    min-height: auto;
  }
}

/*
 * =========================================================
 * MOBILE
 * =========================================================
 */

@media (min-width: 1228px) {
  .projects-section {
    width: min(100% - 28px, 1180px);
  }
}
</style>