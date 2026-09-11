<template>
<section class="why-section">
  <div class="why-bg"></div>
  <div class="container why-inner">
    <div class="why-header">
      <span class="eyebrow gold">What Drives Us</span>
      <h2 class="section-title light">Values we<br>don't <em>compromise.</em></h2>
    </div>
    <div class="why-pillars">
      <div class="pillar">
        <div class="pillar-icon"><svg viewBox="0 0 50 50" width="26" height="26"><path d="M25 10C20 10 12 15 12 25C12 30 15 32 18 33C17 36 17 40 17 40H33C33 40 33 36 32 33C35 32 38 30 38 25C38 15 30 10 25 10Z" fill="none" stroke="#C8A85A" stroke-width="2"/></svg></div>
        <h3>Sustainable</h3><p>We work directly with farming communities, promoting sustainable practices and environmental care.</p>
      </div>
      <div class="pillar">
        <div class="pillar-icon"><svg viewBox="0 0 50 50" width="26" height="26"><circle cx="25" cy="18" r="8" fill="none" stroke="#C8A85A" stroke-width="2"/><path d="M10 40C10 32 17 26 25 26C33 26 40 32 40 40" fill="none" stroke="#C8A85A" stroke-width="2"/></svg></div>
        <h3>Transparent</h3><p>Full traceability and direct relationships ensure fairness and trust in every step of the process.</p>
      </div>
      <div class="pillar">
        <div class="pillar-icon"><svg viewBox="0 0 50 50" width="26" height="26"><path d="M10 28C10 22 14 16 25 16C30 16 38 18 38 28C38 32 35 38 35 38H15C15 38 10 34 10 28Z" fill="none" stroke="#C8A85A" stroke-width="2"/><path d="M18 38V42M32 38V42" stroke="#C8A85A" stroke-width="2" stroke-linecap="round"/></svg></div>
        <h3>Exceptional</h3><p>Rigorous selection and quality control to deliver outstanding coffees with unique profiles.</p>
      </div>
    </div>
  </div>
</section>
</template>

<style>
.why-section {
  position: relative;
  padding: 100px 0;
  overflow: hidden;
}

.why-bg {
  position: absolute;
  inset: 0;
  background-image: url('/img/coffeestory/Fondo_Web.jpg');
  background-size: cover;
  background-position: center;
  filter: brightness(.17) saturate(.5);
}

.why-inner {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 60px;
}

.why-header {
  max-width: 480px;
}

.why-pillars {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  max-width: 860px;
  border: 1px solid rgba(255, 255, 255, .09);
  border-radius: var(--r-md);
  overflow: hidden;
}

.pillar {
  padding: 40px 30px;
  background: rgba(255, 255, 255, .03);
  border-right: 1px solid rgba(255, 255, 255, .07);
  display: flex;
  flex-direction: column;
  gap: 12px;
  text-align: left;
  transition: background var(--tr);
}

.pillar:last-child {
  border-right: none;
}

.pillar:hover {
  background: rgba(255, 255, 255, .07);
}

.pillar-icon {
  width: 46px;
  height: 46px;
  border-radius: 12px;
  background: rgba(200, 168, 90, .1);
  border: 1px solid rgba(200, 168, 90, .2);
  display: flex;
  align-items: center;
  justify-content: center;
}

.pillar h3 {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .16em;
  text-transform: uppercase;
  color: var(--white);
}

.pillar p {
  font-size: 13px;
  color: rgba(255, 255, 255, .52);
  line-height: 1.75;
}
</style>