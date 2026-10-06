<template>
  <section id="published-work" class="book-section">
    <div class="book-card">
      <div class="book-art" aria-hidden="true">
        <span class="book-kicker">PUBLISHED</span>
        <strong>Little African<br />Explorers</strong>
        <span class="book-subtitle">My First African Animals Coloring Book</span>
        <span class="book-author">by Keketso Leu</span>
      </div>

      <div class="book-content">
        <p class="eyebrow">Beyond software</p>
        <h2>Published Author</h2>
        <p class="intro">
          I also turn ideas into finished products. <em>Little African Explorers</em>
          is my first published children's activity book, now available as a
          paperback on Amazon.
        </p>

        <div class="proof-grid">
          <div><span>Format</span><strong>Paperback</strong></div>
          <div><span>ISBN-13</span><strong>979-8173834614</strong></div>
          <div><span>Pages</span><strong>40</strong></div>
          <div><span>Age</span><strong>4–7 years</strong></div>
        </div>

        <a
          class="book-link"
          href="https://www.amazon.com/dp/B0HLFSJ134"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on Amazon ↗
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.book-section {
  width: min(1180px, calc(100% - 40px));
  margin: 0 auto;
  padding: 10px 0 90px;
}

.book-card {
  display: grid;
  grid-template-columns: minmax(230px, .72fr) minmax(0, 1.28fr);
  gap: 0;
  overflow: hidden;
  border: 1px solid rgba(45, 212, 191, .16);
  border-radius: 14px;
  background: linear-gradient(135deg, rgba(45, 212, 191, .07), rgba(255,255,255,.025));
  box-shadow: 0 22px 55px rgba(0,0,0,.16);
}

.book-art {
  min-height: 330px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 34px;
  background:
    radial-gradient(circle at 30% 25%, rgba(45,212,191,.22), transparent 35%),
    linear-gradient(145deg, #0a171a, #071016 65%, #05090d);
  border-right: 1px solid rgba(255,255,255,.07);
}

.book-kicker {
  margin-bottom: 22px;
  color: #2dd4bf;
  font-size: .66rem;
  font-weight: 800;
  letter-spacing: .18em;
}

.book-art strong {
  color: #f5faf9;
  font-size: clamp(2rem, 5vw, 3.2rem);
  line-height: .96;
  letter-spacing: -.045em;
}

.book-subtitle {
  max-width: 260px;
  margin-top: 18px;
  color: #a9b9b8;
  font-size: .78rem;
  line-height: 1.5;
}

.book-author {
  margin-top: 28px;
  color: #5eead4;
  font-size: .72rem;
  font-weight: 700;
}

.book-content {
  padding: clamp(28px, 5vw, 52px);
}

.eyebrow {
  margin: 0 0 8px;
  color: #60707e;
  font-size: .7rem;
  letter-spacing: .11em;
  text-transform: uppercase;
}

.book-content h2 {
  margin: 0;
  color: #f4f7fa;
  font-size: clamp(1.8rem, 4vw, 2.6rem);
}

.intro {
  max-width: 640px;
  margin: 18px 0 26px;
  color: #aeb9c3;
  font-size: .92rem;
  line-height: 1.72;
}

.intro em {
  color: #dce8e7;
  font-style: normal;
}

.proof-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
  margin-bottom: 26px;
}

.proof-grid div {
  padding: 12px;
  background: rgba(255,255,255,.035);
  border: 1px solid rgba(255,255,255,.07);
  border-radius: 7px;
}

.proof-grid span,
.proof-grid strong {
  display: block;
}

.proof-grid span {
  color: #687681;
  font-size: .6rem;
  letter-spacing: .07em;
  text-transform: uppercase;
}

.proof-grid strong {
  margin-top: 5px;
  color: #dce4ea;
  font-size: .72rem;
  overflow-wrap: anywhere;
}

.book-link {
  display: inline-flex;
  align-items: center;
  padding: 12px 17px;
  color: #06110f;
  background: #2dd4bf;
  border-radius: 6px;
  font-size: .8rem;
  font-weight: 700;
  transition: transform 160ms ease, background 160ms ease;
}

.book-link:hover {
  background: #5eead4;
  transform: translateY(-1px);
}

.book-link:focus-visible {
  outline: 2px solid #5eead4;
  outline-offset: 4px;
}

@media (max-width: 760px) {
  .book-section {
    width: min(100% - 28px, 1180px);
    padding-bottom: 70px;
  }

  .book-card {
    grid-template-columns: 1fr;
  }

  .book-art {
    min-height: 250px;
    border-right: 0;
    border-bottom: 1px solid rgba(255,255,255,.07);
  }

  .proof-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
