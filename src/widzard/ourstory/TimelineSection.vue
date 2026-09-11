<template>
<section class="timeline-section">
  <div class="container">
    <div class="timeline-header">
      <span class="eyebrow gold">Our Journey</span>
      <h2 class="section-title">A decade of <em>growth.</em></h2>
    </div>

    <div class="timeline">
      <div class="tl-line"></div>

      <div class="tl-item" data-aos="fade-up">
        <div class="tl-dot"></div>
        <div class="tl-content">
          <span class="tl-year">2014</span>
          <h3 class="tl-title">The First Hectare</h3>
          <p class="tl-text">A single family farm in Jaén begins processing washed Typica and Bourbon for the local market, focused on quality over volume from day one.</p>
        </div>
      </div>

      <div class="tl-item" data-aos="fade-up">
        <div class="tl-dot"></div>
        <div class="tl-content">
          <span class="tl-year">2017</span>
          <h3 class="tl-title">First Export Container</h3>
          <p class="tl-text">Chacra Coffee ships its first container of green coffee to a roaster in the UK, marking the start of direct relationships with European buyers.</p>
        </div>
      </div>

      <div class="tl-item" data-aos="fade-up">
        <div class="tl-dot"></div>
        <div class="tl-content">
          <span class="tl-year">2019</span>
          <h3 class="tl-title">Expanding to New Origins</h3>
          <p class="tl-text">Partnerships extend into San Ignacio and Cutervo, bringing the total network to over 40 producers and introducing the first honey-processed lots.</p>
        </div>
      </div>

      <div class="tl-item" data-aos="fade-up">
        <div class="tl-dot"></div>
        <div class="tl-content">
          <span class="tl-year">2021</span>
          <h3 class="tl-title">Quality Lab &amp; Cupping Room</h3>
          <p class="tl-text">A dedicated cupping lab opens in Jaén, allowing every lot to be scored and verified before export — the foundation of today's 83–88+ cup score guarantee.</p>
        </div>
      </div>

      <div class="tl-item" data-aos="fade-up">
        <div class="tl-dot"></div>
        <div class="tl-content">
          <span class="tl-year">2023</span>
          <h3 class="tl-title">Experimental Processing Program</h3>
          <p class="tl-text">Anaerobic fermentation and carbonic maceration trials begin with producers in Callayuc and Queromarca, leading to Chacra's first 88+ point lots.</p>
        </div>
      </div>

      <div class="tl-item" data-aos="fade-up">
        <div class="tl-dot tl-dot-active"></div>
        <div class="tl-content">
          <span class="tl-year">2026</span>
          <h3 class="tl-title">100+ Producers, 6 Origins</h3>
          <p class="tl-text">Chacra Coffee now works with over 100 producers across six origin zones in Cajamarca, exporting to roasters across the UK and Europe with full traceability.</p>
        </div>
      </div>

    </div>
  </div>
</section>
</template>

<style>
.timeline-section {
  background: var(--ivory);
  padding: 100px 0;
}

.timeline-header {
  max-width: 480px;
  margin-bottom: 64px;
}

.timeline {
  position: relative;
  max-width: 760px;
  margin: 0 auto;
  padding-left: 8px;
}

.tl-line {
  position: absolute;
  left: 7px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: linear-gradient(to bottom, var(--gold) 0%, var(--ivory-d) 100%);
}

.tl-item {
  position: relative;
  padding-left: 44px;
  padding-bottom: 48px;
}

.tl-item:last-child {
  padding-bottom: 0;
}

.tl-dot {
  position: absolute;
  left: 0;
  top: 4px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--white);
  border: 3px solid var(--gold);
  z-index: 2;
}

.tl-dot-active {
  background: var(--gold);
  box-shadow: 0 0 0 5px rgba(200, 168, 90, .18);
}

.tl-content {
  background: var(--white);
  border-radius: var(--r-md);
  padding: 24px 26px;
  box-shadow: var(--sh-sm);
  transition: transform var(--tr), box-shadow var(--tr);
}

.tl-content:hover {
  transform: translateX(6px);
  box-shadow: var(--sh-md);
}

.tl-year {
  display: inline-block;
  font-family: var(--ff-d);
  font-size: 22px;
  color: var(--gold);
  margin-bottom: 8px;
}

.tl-title {
  font-size: 16px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 8px;
}

.tl-text {
  font-size: 13px;
  color: var(--text-m);
  line-height: 1.7;
}
</style>