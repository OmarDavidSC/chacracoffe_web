<template>
<section class="mv-section">
  <div class="mv-bg"></div>
  <div class="container mv-inner">
    <div class="mv-card">
      <div class="mv-icon">
        <svg viewBox="0 0 50 50" width="32" height="32"><path d="M25 8L31 20L44 22L35 31L37 44L25 38L13 44L15 31L6 22L19 20Z" fill="none" stroke="#C8A85A" stroke-width="2" stroke-linejoin="round"/></svg>
      </div>
      <span class="mv-label">Our Mission</span>
      <p class="mv-text">To connect Northern Peru's coffee-growing communities with the global specialty market — delivering exceptional, traceable coffee while ensuring fair, sustainable income for every producer we work with.</p>
    </div>
    <div class="mv-card">
      <div class="mv-icon">
        <svg viewBox="0 0 50 50" width="32" height="32"><circle cx="25" cy="25" r="8" fill="none" stroke="#C8A85A" stroke-width="2"/><path d="M5 25C5 25 12 12 25 12C38 12 45 25 45 25C45 25 38 38 25 38C12 38 5 25 5 25Z" fill="none" stroke="#C8A85A" stroke-width="2"/></svg>
      </div>
      <span class="mv-label">Our Vision</span>
      <p class="mv-text">To become the most trusted name for Peruvian specialty coffee in Europe — recognised not only for cup quality, but for transparency, environmental stewardship and the wellbeing of the farming communities behind every bag.</p>
    </div>
  </div>
</section>
</template>

<style>
.mv-section {
  position: relative;
  padding: 90px 0;
  overflow: hidden;
}

.mv-bg {
  position: absolute;
  inset: 0;
  background-image: url('../../../public/img/coffee/Fondo_2.jpg');
  background-size: cover;
  background-position: center;
  filter: brightness(.2) saturate(.6);
}

.mv-inner {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
}

.mv-card {
  background: rgba(255, 255, 255, .04);
  border: 1px solid rgba(255, 255, 255, .1);
  border-radius: var(--r-lg);
  padding: 44px 38px;
  backdrop-filter: blur(6px);
}

.mv-icon {
  width: 56px;
  height: 56px;
  border-radius: 14px;
  background: rgba(200, 168, 90, .1);
  border: 1px solid rgba(200, 168, 90, .22);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 22px;
}

.mv-label {
  display: block;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 14px;
}

.mv-text {
  font-size: 14px;
  color: rgba(255, 255, 255, .7);
  line-height: 1.85;
}
</style>