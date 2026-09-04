<script setup lang="ts">
/*
 * ProjectsSection
 * ----------------
 * Highlights the strongest engineering projects for recruiters.
 */

type Project = {
  number: string
  title: string
  description: string
  technologies: string[]
  image?: string
  imageAlt?: string
  previewLabel?: string
  status: 'Production' | 'In Development'
  liveUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Facilities Management Toolbox',
    description:
      'A modular facilities-management platform combining employee management, attendance tracking, operational dashboards and facial-recognition attendance workflows. Containerized with Docker and Docker Compose, integrating the PHP portal, ASP.NET Core API and PostgreSQL as a multi-service application.',
    technologies: [
      'C# / .NET',
      'ASP.NET Core',
      'PostgreSQL',
      'EF Core',
      'Python',
      'OpenCV',
      'PHP',
      'Docker',
      'Docker Compose',
    ],
    image: '/images/facilities-toolbox.png',
    imageAlt:
      'Facilities Management Toolbox command centre showing workforce attendance and operational dashboard',
    status: 'In Development',
    githubUrl: 'https://github.com/keketsoleu25/facilities-toolbox',
  },
  {
    number: '02',
    title: 'Tech Alchemy CRM',
    description:
      'Built to run my own studio — Tech Alchemy Lab — end to end: client intake, project tracking, task management, and invoicing in one place, replacing five disconnected tools.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Prisma', 'PostgreSQL', 'Auth.js', 'Resend'],
    image: '/images/tech-alchemy-crm.png',
    imageAlt: 'Tech Alchemy CRM interface showing the production client and project management platform',
    status: 'Production',
    liveUrl: 'https://tech-alchemy-crm.vercel.app',
    githubUrl: 'https://github.com/keketsoleu25/tech-alchemy-crm',
  },
  {
    number: '03',
    title: 'Alchemy Job Finder',
    description:
      'A South Africa-focused job intelligence platform that discovers roles, normalises source data and helps evaluate whether an opportunity is worth applying for.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Prisma', 'PostgreSQL', 'Zod', 'Vercel'],
    image: '/images/job-finder.png',
    imageAlt: 'Alchemy Job Finder interface showing job opportunities in South Africa',
    status: 'In Development',
    liveUrl: 'https://alchemy-job-finder.vercel.app',
    githubUrl: 'https://github.com/keketsoleu25/alchemy-job-finder',
  },
]
</script>

<template>
  <section id="projects" class="projects-section">
    <div class="section-heading"><p>Selected engineering work</p><h2>Flagship Projects</h2><span class="heading-line"></span></div>
    <div class="projects-grid">
      <article v-for="project in projects" :key="project.number" class="project-card">
        <div class="project-top"><span class="project-number">{{ project.number }}</span><span class="status" :class="project.status === 'Production' ? 'production' : 'development'">{{ project.status }}</span></div>
        <div class="project-preview">
          <img v-if="project.image" :src="project.image" :alt="project.imageAlt" loading="lazy" />
          <div v-else class="project-placeholder" aria-hidden="true"><span>03</span><strong>Alchemy Job Finder</strong><small>{{ project.imageAlt }}</small></div>
        </div>
        <div class="project-content">
          <span class="project-label">Full-Stack Project</span><h3>{{ project.title }}</h3><p>{{ project.description }}</p>
          <div class="technology-list"><span v-for="technology in project.technologies" :key="technology">{{ technology }}</span></div>
          <div v-if="project.liveUrl || project.githubUrl" class="project-actions">
            <a v-if="project.liveUrl" :href="project.liveUrl" target="_blank" rel="noopener noreferrer" :aria-label="`Open ${project.title} live demo`">Live Demo ↗</a>
            <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" rel="noopener noreferrer" :aria-label="`Open ${project.title} GitHub repository`">GitHub ↗</a>
          </div>
        </div>
      </article>
    </div>
    <a class="github-more" href="https://github.com/keketsoleu25" target="_blank" rel="noopener noreferrer">View more projects on GitHub →</a>
  </section>
</template>

<style scoped>
.projects-section { width:min(1180px,calc(100% - 40px)); margin:0 auto; padding:50px 0 90px; }
.section-heading { margin-bottom:35px; text-align:center; }
.section-heading p { margin:0 0 8px; color:#60707e; font-size:.72rem; letter-spacing:.11em; text-transform:uppercase; }
.section-heading h2 { margin:0; color:#f4f7fa; font-size:clamp(1.8rem,4vw,2.6rem); }
.heading-line { display:block; width:56px; height:2px; margin:16px auto 0; background:#2dd4bf; }
.projects-grid { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:18px; }
.project-card { min-width:0; overflow:hidden; display:flex; flex-direction:column; background:linear-gradient(145deg,rgba(255,255,255,.045),rgba(255,255,255,.015)); border:1px solid rgba(255,255,255,.07); border-radius:12px; transition:transform 180ms ease,border-color 180ms ease,box-shadow 180ms ease; }
.project-card:hover { transform:translateY(-5px); border-color:rgba(45,212,191,.35); box-shadow:0 18px 45px rgba(0,0,0,.18); }
.project-top { display:flex; align-items:center; justify-content:space-between; gap:12px; padding:16px 16px 0; }
.project-number { width:34px; height:28px; flex:0 0 auto; display:grid; place-items:center; color:#06110f; background:#2dd4bf; border-radius:5px; font-size:.72rem; font-weight:800; }
.status { padding:6px 10px; border-radius:999px; font-size:.65rem; font-weight:700; letter-spacing:.04em; text-transform:uppercase; }
.production { color:#5eead4; background:rgba(45,212,191,.1); border:1px solid rgba(45,212,191,.18); }
.development { color:#facc15; background:rgba(250,204,21,.08); border:1px solid rgba(250,204,21,.16); }
.project-preview { height:220px; margin:16px; overflow:hidden; background:#070d12; border:1px solid rgba(255,255,255,.06); border-radius:8px; }
.project-preview img { display:block; width:100%; height:100%; object-fit:cover; object-position:top; transition:transform 300ms ease; }
.project-placeholder { width:100%; height:100%; display:grid; place-content:center; gap:8px; padding:24px; text-align:center; background:radial-gradient(circle at 50% 25%,rgba(45,212,191,.14),transparent 38%),linear-gradient(145deg,#081219,#05090d); }
.project-placeholder span { color:#2dd4bf; font-size:.72rem; font-weight:800; letter-spacing:.16em; }
.project-placeholder strong { color:#f1f5f9; font-size:1.1rem; }
.project-placeholder small { color:#7f8c98; font-size:.7rem; letter-spacing:.05em; text-transform:uppercase; }
.project-card:hover .project-preview img { transform:scale(1.025); }
.project-content { flex:1; display:flex; flex-direction:column; padding:3px 18px 20px; }
.project-label { display:block; margin-bottom:8px; color:#65727e; font-size:.64rem; letter-spacing:.08em; text-transform:uppercase; }
.project-content h3 { margin:0 0 12px; color:#f1f5f9; font-size:1.1rem; }
.project-content p { margin:0; color:#929eaa; font-size:.84rem; line-height:1.65; }
.technology-list { display:flex; flex-wrap:wrap; gap:6px; margin-top:18px; }
.technology-list span { max-width:100%; padding:5px 7px; overflow-wrap:anywhere; color:#aeb9c3; background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.07); border-radius:4px; font-size:.67rem; }
.project-actions { display:flex; flex-wrap:wrap; gap:20px; margin-top:auto; padding-top:18px; border-top:1px solid rgba(255,255,255,.06); }
.project-actions a { color:#2dd4bf; font-size:.78rem; font-weight:600; text-decoration:none; transition:color 160ms ease,transform 160ms ease; }
.project-actions a:hover { color:#5eead4; transform:translateY(-1px); }
.project-actions a:focus-visible,.github-more:focus-visible { outline:2px solid #2dd4bf; outline-offset:4px; }
.github-more { width:fit-content; max-width:100%; display:block; margin:32px auto 0; padding:11px 17px; color:#c6d0d9; background:rgba(255,255,255,.025); border:1px solid rgba(255,255,255,.09); border-radius:6px; font-size:.8rem; text-align:center; text-decoration:none; transition:color 160ms ease,border-color 160ms ease,background 160ms ease; }
.github-more:hover { color:#2dd4bf; background:rgba(45,212,191,.04); border-color:rgba(45,212,191,.3); }
@media (max-width:1050px) { .projects-grid { grid-template-columns:repeat(2,minmax(0,1fr)); } }
@media (max-width:760px) { .projects-section { padding:40px 0 70px; } .projects-grid { grid-template-columns:1fr; } .project-preview { height:240px; } }
@media (max-width:520px) { .projects-section { width:min(100% - 28px,1180px); padding:35px 0 60px; } .section-heading { margin-bottom:28px; } .project-top { padding:14px 14px 0; } .project-preview { height:190px; margin:14px; } .project-content { padding:3px 14px 18px; } .project-content h3 { font-size:1rem; } .project-content p { font-size:.82rem; } .technology-list span { font-size:.64rem; } .project-actions { gap:18px; } }
@media (max-width:380px) { .project-preview { height:165px; } .status { padding:5px 8px; font-size:.6rem; } }
</style>
