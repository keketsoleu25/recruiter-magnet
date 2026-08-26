<script setup lang="ts">
/*
 * EarlierJourneySection
 * ---------------------
 * Provides concise context for the years before university.
 *
 * The purpose is not to present these years as software experience,
 * but to show the path that eventually led into higher education
 * and software development.
 */

type JourneyItem = {
  period: string
  title: string
  description: string
}

const journey: JourneyItem[] = [
  {
    period: '2015',
    title: 'Engineering Studies — Westcol TVET College',
    description:
      'Studied at Westcol TVET College, Randfontein Campus, completing N2 Mathematics, Engineering Science and Mechanotechnology, and progressing to N3 Mathematics.',
  },
  {
    period: '2016',
    title: 'SAAF Pilot Selection',
    description:
      'Shortlisted and progressed through the South African Air Force pilot selection process.',
  },
  {
    period: '2017 — 2018',
    title: 'Construction Work',
    description:
      'Worked in physically demanding construction roles before deciding to return to education and pursue a technical career.',
  },
]
</script>

<template>
  <section class="earlier-journey">
    <div class="section-heading">
      <p>Before software</p>
      <h2>Earlier Journey</h2>
      <span></span>
    </div>

    <p class="journey-intro">
      The route into software was not linear. These experiences shaped the
      decision to return to education and eventually pursue computer science
      and software development.
    </p>

    <div class="journey-items">
      <article
        v-for="item in journey"
        :key="item.period"
        class="journey-item"
      >
        <span class="period">
          {{ item.period }}
        </span>

        <div class="journey-content">
          <h3>{{ item.title }}</h3>

          <p>
            {{ item.description }}
          </p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.earlier-journey {
  width: 100%;
  max-width: 900px;
  margin-inline: auto;
  padding: 10px 16px 84px;
}

/*
 * Section heading
 */

.section-heading {
  margin-bottom: 20px;
  text-align: center;
}

.section-heading > p {
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
  line-height: 1.15;
}

.section-heading span {
  display: block;

  width: 56px;
  height: 2px;

  margin: 14px auto 0;

  background: #2dd4bf;
}

/*
 * Intro
 */

.journey-intro {
  max-width: 680px;

  margin: 0 auto 32px;

  color: #82909d;
  font-size: 0.86rem;
  line-height: 1.7;

  text-align: center;
}

/*
 * Journey list
 */

.journey-items {
  display: grid;
  gap: 12px;
}

.journey-item {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;

  padding: 18px;

  background: rgba(255, 255, 255, 0.022);

  border: 1px solid rgba(255, 255, 255, 0.065);
  border-radius: 10px;
}

.period {
  width: fit-content;

  color: #2dd4bf;

  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.journey-content h3 {
  margin: 0 0 7px;

  color: #f1f5f9;

  font-size: 0.95rem;
  line-height: 1.4;
}

.journey-content p {
  margin: 0;

  color: #8f9ba7;

  font-size: 0.82rem;
  line-height: 1.65;
}

/*
 * Tablet / desktop
 */

@media (min-width: 640px) {
  .earlier-journey {
    padding-inline: 20px;
  }

  .journey-item {
    grid-template-columns: 110px 1fr;
    gap: 20px;

    padding: 20px 22px;
  }

  .period {
    padding-top: 2px;
  }
}

@media (min-width: 768px) {
  .earlier-journey {
    padding: 10px 24px 90px;
  }
}
</style>