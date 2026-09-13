<template>
<section class="mag-feature" id="featured">

  <!-- Columna imagen -->
  <div class="mag-feature-img-col">
    <div class="mag-feature-img" style="background-image:url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=900&q=80')"></div>
    <div class="mag-feature-img-caption">
      Raised-bed honey processing · Colasay, San Ignacio · 1,850 masl
    </div>
  </div>

  <!-- Columna texto -->
  <div class="mag-feature-text">

    <div class="mag-section-header">
      <span class="mag-section-rule"></span>
      <span class="mag-section-num">01</span>
      <span class="mag-section-title">Editor's Pick</span>
    </div>

    <div class="mag-feature-kicker">★ Lot of the Season</div>
    <h2 class="mag-feature-title">San Ignacio<br><em>Geisha Honey</em><br>2026 Crop</h2>

    <p class="mag-feature-intro">There are lots that score well and lots that stop a cupping room. This Geisha from Colasay, honey-processed for twenty-two days on raised beds at 1,850 masl, is firmly the second kind.</p>

    <!-- Cupping scores -->
    <div class="mag-scores">
      <div class="mag-score-main">
        <span class="mag-score-big">87.5</span>
        <span class="mag-score-sub">SCA Cup Score</span>
      </div>
      <div class="mag-score-bars">
        <div class="mag-bar-row">
          <span>Fragrance / Aroma</span>
          <div class="mag-bar"><div class="mag-bar-fill" style="--w:92%"></div></div>
          <span>9.2</span>
        </div>
        <div class="mag-bar-row">
          <span>Flavour</span>
          <div class="mag-bar"><div class="mag-bar-fill" style="--w:89%"></div></div>
          <span>8.9</span>
        </div>
        <div class="mag-bar-row">
          <span>Acidity</span>
          <div class="mag-bar"><div class="mag-bar-fill" style="--w:88%"></div></div>
          <span>8.8</span>
        </div>
        <div class="mag-bar-row">
          <span>Body</span>
          <div class="mag-bar"><div class="mag-bar-fill" style="--w:84%"></div></div>
          <span>8.4</span>
        </div>
        <div class="mag-bar-row">
          <span>Aftertaste</span>
          <div class="mag-bar"><div class="mag-bar-fill" style="--w:88%"></div></div>
          <span>8.8</span>
        </div>
        <div class="mag-bar-row">
          <span>Balance</span>
          <div class="mag-bar"><div class="mag-bar-fill" style="--w:87%"></div></div>
          <span>8.7</span>
        </div>
      </div>
    </div>

    <blockquote class="mag-pullquote">
      "Red fruit aromatics, a silky floral mid-palate, and a bergamot finish that lingers for minutes — this is what high-altitude honey processing looks like at its best."
      <cite>— Q Grader, Chacra Coffee Cupping Lab</cite>
    </blockquote>

    <p class="mag-feature-body">Grown by a small collective of Geisha producers in Colasay, San Ignacio, this lot was hand-selected cherry by cherry during the April 2026 harvest. After de-pulping, the parchment was dried on elevated African beds for 22 days — turning daily to ensure an even, controlled fermentation. The result is a cup of extraordinary clarity and transparency, with a sweetness that builds rather than fades.</p>

    <!-- Specs -->
    <div class="mag-specs-grid">
      <div class="mag-spec"><span class="mag-sk">Origin</span><span class="mag-sv">Colasay, San Ignacio</span></div>
      <div class="mag-spec"><span class="mag-sk">Altitude</span><span class="mag-sv">1,850 masl</span></div>
      <div class="mag-spec"><span class="mag-sk">Variety</span><span class="mag-sv">Geisha</span></div>
      <div class="mag-spec"><span class="mag-sk">Process</span><span class="mag-sv">Honey — 22 days</span></div>
      <div class="mag-spec"><span class="mag-sk">Harvest</span><span class="mag-sv">April 2026</span></div>
      <div class="mag-spec"><span class="mag-sk">Availability</span><span class="mag-sv">Limited — 12 bags</span></div>
    </div>

    <div class="mag-feature-foot">
      <div class="mag-cup-notes">
        <span class="mag-cup-label">Cup Profile</span>
        <div class="mag-cup-tags">
          <span>Red Fruits</span><span>Floral</span><span>Bergamot</span><span>Black Tea</span><span>Caramel</span>
        </div>
      </div>
      <a href="Contact.html" class="mag-request-btn">Request This Lot →</a>
    </div>

  </div>
</section>
</template>

<style>
.mag-feature {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 88vh;
  background: #0e1a12;
}

.mag-feature-img-col {
  position: relative;
  overflow: hidden;
}

.mag-feature-img {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  transition: transform .7s ease;
}

.mag-feature-img-col:hover .mag-feature-img {
  transform: scale(1.03);
}

.mag-feature-img-caption {
  position: absolute;
  bottom: 20px;
  left: 24px;
  right: 24px;
  z-index: 2;
  font-size: 10px;
  color: rgba(255, 255, 255, .45);
  letter-spacing: .08em;
  font-style: italic;
}

.mag-feature-text {
  background: #111d14;
  padding: 72px 56px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  overflow-y: auto;
}

.mag-feature-kicker {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .2em;
  text-transform: uppercase;
  color: var(--gold);
}

.mag-feature-title {
  font-family: var(--ff-d);
  font-size: clamp(28px, 3.2vw, 44px);
  font-weight: 400;
  color: var(--white);
  line-height: 1.1;
}

.mag-feature-title em {
  font-style: italic;
  color: var(--gold);
}

.mag-feature-intro {
  font-size: 14px;
  color: rgba(255, 255, 255, .65);
  line-height: 1.82;
  font-style: italic;
  border-left: 2px solid var(--gold);
  padding-left: 16px;
}

/* Cupping scores */
.mag-scores {
  display: flex;
  gap: 22px;
  align-items: flex-start;
}

.mag-score-main {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  gap: 4px;
}

.mag-score-big {
  font-family: var(--ff-d);
  font-size: 58px;
  color: var(--gold);
  line-height: 1;
}

.mag-score-sub {
  font-size: 8px;
  font-weight: 700;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, .3);
  white-space: nowrap;
}

.mag-score-bars {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 9px;
  padding-top: 4px;
}

.mag-bar-row {
  display: grid;
  grid-template-columns: 110px 1fr 26px;
  align-items: center;
  gap: 10px;
  font-size: 10px;
  color: rgba(255, 255, 255, .4);
  font-weight: 600;
}

.mag-bar {
  height: 3px;
  background: rgba(255, 255, 255, .07);
  border-radius: 2px;
  overflow: hidden;
}

.mag-bar-fill {
  height: 100%;
  width: var(--w);
  background: linear-gradient(90deg, var(--gold), #e0c97a);
  border-radius: 2px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform .9s cubic-bezier(.22, 1, .36, 1);
}

.mag-bar-fill.animate {
  transform: scaleX(1);
}

/* Pullquote */
.mag-pullquote {
  border-left: 3px solid var(--gold);
  padding: 12px 20px;
  background: rgba(200, 168, 90, .05);
  border-radius: 0 8px 8px 0;
  margin: 4px 0;
}

.mag-pullquote p,
.mag-pullquote {
  font-family: var(--ff-d);
  font-size: 15px;
  color: rgba(255, 255, 255, .75);
  line-height: 1.7;
  font-style: italic;
}

.mag-pullquote cite {
  display: block;
  margin-top: 8px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--gold);
  font-style: normal;
}

.mag-feature-body {
  font-size: 13px;
  color: rgba(255, 255, 255, .52);
  line-height: 1.85;
}

/* Specs */
.mag-specs-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px 28px;
  padding: 20px 0;
  border-top: 1px solid rgba(255, 255, 255, .07);
  border-bottom: 1px solid rgba(255, 255, 255, .07);
}

.mag-spec {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.mag-sk {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, .28);
}

.mag-sv {
  font-size: 12px;
  font-weight: 600;
  color: rgba(255, 255, 255, .72);
}

/* Feature footer */
.mag-feature-foot {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.mag-cup-label {
  display: block;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, .3);
  margin-bottom: 8px;
}

.mag-cup-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.mag-cup-tags span {
  font-size: 10px;
  font-weight: 700;
  padding: 4px 10px;
  border-radius: 20px;
  background: rgba(200, 168, 90, .1);
  border: 1px solid rgba(200, 168, 90, .25);
  color: var(--gold);
}

.mag-request-btn {
  display: inline-block;
  white-space: nowrap;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: var(--gold);
  border-bottom: 1px solid rgba(200, 168, 90, .4);
  padding-bottom: 2px;
  transition: all var(--tr);
}

.mag-request-btn:hover {
  color: var(--white);
  border-color: var(--white);
}
</style>