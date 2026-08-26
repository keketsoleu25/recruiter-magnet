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

/*
 * Flagship projects
 * -----------------
 * Keep this list focused on the projects that best demonstrate
 * full-stack engineering ability to recruiters.
 */
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
    image: '/images/facilities-toolbox.png',
    imageAlt:
      'Facilities Management Toolbox command centre showing workforce attendance and operational dashboard',
    status: 'In Development',
    githubUrl:
      'https://github.com/keketsoleu25/facilities-toolbox',
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
    liveUrl:
      'https://tech-alchemy-crm.vercel.app',
    githubUrl:
      'https://github.com/keketsoleu25/tech-alchemy-crm',
  },
]
</script>

<template>
  <section
    id="projects"
    class="projects-section"
  >
    <!-- =====================================================
         SECTION HEADING
    ====================================================== -->
    <div class="section-heading">
      <p>Selected engineering work</p>

      <h2>Flagship Projects</h2>

      <span class="heading-line"></span>
    </div>

    <!-- =====================================================
         PROJECT GRID
    ====================================================== -->
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

          <span
            class="status"
            :class="
              project.status === 'Production'
                ? 'production'
                : 'development'
            "
          >
            {{ project.status }}
          </span>
        </div>

        <!-- =================================================
             PROJECT SCREENSHOT
        ================================================== -->
        <div class="project-preview">
          <img
            :src="project.image"
            :alt="project.imageAlt"
            loading="lazy"
          />
        </div>

        <!-- =================================================
             PROJECT INFORMATION
        ================================================== -->
        <div class="project-content">
          <span class="project-label">
            Full-Stack Project
          </span>

          <h3>
            {{ project.title }}
          </h3>

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

          <!-- External links -->
          <div
            v-if="project.liveUrl || project.githubUrl"
            class="project-actions"
          >
            <a
              v-if="project.liveUrl"
              :href="project.liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`Open ${project.title} live demo`"
            >
              Live Demo ↗
            </a>

            <a
              v-if="project.githubUrl"
              :href="project.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="`Open ${project.title} GitHub repository`"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </article>
    </div>

    <!-- =====================================================
         MAIN GITHUB PROFILE
    ====================================================== -->
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
  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 18px;
}

/*
 * =========================================================
 * PROJECT CARD
 * =========================================================
 */

.project-card {
  min-width: 0;
  overflow: hidden;

  display: flex;
  flex-direction: column;

  background:
    linear-gradient(
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

  box-shadow:
    0 18px 45px rgba(0, 0, 0, 0.18);
}

/*
 * =========================================================
 * CARD HEADER
 * =========================================================
 */

.project-top {
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 12px;

  padding: 16px 16px 0;
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

/*
 * =========================================================
 * STATUS
 * =========================================================
 */

.status {
  padding: 6px 10px;

  border-radius: 999px;

  font-size: 0.65rem;
  font-weight: 700;

  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.production {
  color: #5eead4;

  background: rgba(45, 212, 191, 0.1);

  border: 1px solid rgba(45, 212, 191, 0.18);
}

.development {
  color: #facc15;

  background: rgba(250, 204, 21, 0.08);

  border: 1px solid rgba(250, 204, 21, 0.16);
}

/*
 * =========================================================
 * PROJECT SCREENSHOT
 * =========================================================
 */

.project-preview {
  height: 220px;

  margin: 16px;

  overflow: hidden;

  background: #070d12;

  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 8px;
}

.project-preview img {
  display: block;

  width: 100%;
  height: 100%;

  object-fit: cover;
  object-position: top;

  transition: transform 300ms ease;
}

.project-card:hover .project-preview img {
  transform: scale(1.025);
}

/*
 * =========================================================
 * PROJECT CONTENT
 * =========================================================
 */

.project-content {
  flex: 1;

  display: flex;
  flex-direction: column;

  padding: 3px 18px 20px;
}

.project-label {
  display: block;

  margin-bottom: 8px;

  color: #65727e;

  font-size: 0.64rem;

  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.project-content h3 {
  margin: 0 0 12px;

  color: #f1f5f9;

  font-size: 1.1rem;
}

.project-content p {
  margin: 0;

  color: #929eaa;

  font-size: 0.84rem;
  line-height: 1.65;
}

/*
 * =========================================================
 * TECHNOLOGY STACK
 * =========================================================
 */

.technology-list {
  display: flex;
  flex-wrap: wrap;

  gap: 6px;

  margin-top: 18px;
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

/*
 * =========================================================
 * PROJECT ACTIONS
 * =========================================================
 */

.project-actions {
  display: flex;
  flex-wrap: wrap;

  gap: 20px;

  margin-top: auto;
  padding-top: 18px;

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

  transform: translateY(-1px);
}

.project-actions a:focus-visible,
.github-more:focus-visible {
  outline: 2px solid #2dd4bf;
  outline-offset: 4px;
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

  text-align: center;
  text-decoration: none;

  transition:
    color 160ms ease,
    border-color 160ms ease,
    background 160ms ease;
}

.github-more:hover {
  color: #2dd4bf;

  background: rgba(45, 212, 191, 0.04);

  border-color: rgba(45, 212, 191, 0.3);
}

/*
 * =========================================================
 * TABLET / SMALL LAPTOP
 * =========================================================
 */

@media (max-width: 1050px) {
  .projects-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

/*
 * =========================================================
 * TABLET
 * =========================================================
 */

@media (max-width: 760px) {
  .projects-section {
    padding: 40px 0 70px;
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .project-preview {
    height: 240px;
  }
}

/*
 * =========================================================
 * MOBILE
 * =========================================================
 */

@media (max-width: 520px) {
  .projects-section {
    width: min(100% - 28px, 1180px);

    padding: 35px 0 60px;
  }

  .section-heading {
    margin-bottom: 28px;
  }

  .project-top {
    padding: 14px 14px 0;
  }

  .project-preview {
    height: 190px;

    margin: 14px;
  }

  .project-content {
    padding: 3px 14px 18px;
  }

  .project-content h3 {
    font-size: 1rem;
  }

  .project-content p {
    font-size: 0.82rem;
  }

  .technology-list span {
    font-size: 0.64rem;
  }

  .project-actions {
    gap: 18px;
  }
}

/*
 * =========================================================
 * VERY SMALL MOBILE
 * =========================================================
 */

@media (max-width: 380px) {
  .project-preview {
    height: 165px;
  }

  .status {
    padding: 5px 8px;

    font-size: 0.6rem;
  }
}
</style>