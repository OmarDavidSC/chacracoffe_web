<template>
<section class="mag-cover">
  <div class="mag-cover-bg" style="background-image:url('Fondo_Web.jpg')"></div>
  <div class="mag-cover-overlay"></div>

  <!-- Ticker -->
  <div class="mag-ticker">
    <div class="mag-ticker-inner">
      <span>Harvest 2025–26</span><span class="td">·</span>
      <span>Cajamarca · Peru</span><span class="td">·</span>
      <span>83–88+ Cup Score</span><span class="td">·</span>
      <span>UK &amp; EU Stock</span><span class="td">·</span>
      <span>8 New Lots Available</span><span class="td">·</span>
      <span>Harvest 2025–26</span><span class="td">·</span>
      <span>Cajamarca · Peru</span><span class="td">·</span>
      <span>83–88+ Cup Score</span><span class="td">·</span>
      <span>UK &amp; EU Stock</span><span class="td">·</span>
      <span>8 New Lots Available</span><span class="td">·</span>
    </div>
  </div>

  <div class="mag-cover-inner">
    <!-- Masthead -->
    <div class="mag-masthead">
      <div class="mag-masthead-left">
        <span class="mag-issue">Issue № 04 — June 2026</span>
      </div>
      <div class="mag-masthead-logo">CHACRA</div>
      <div class="mag-masthead-right">
        <span class="mag-issue">Northern Peru · Specialty Coffee</span>
      </div>
    </div>

    <!-- Cover headline -->
    <div class="mag-cover-body">
      <div class="mag-cover-kicker">
        <span class="mag-live-dot"></span>
        New Season Arrivals
      </div>
      <h1 class="mag-cover-title">
        New<br>Releases.
      </h1>
      <p class="mag-cover-deck">Eight extraordinary lots from the mountains of Cajamarca — anaerobics, honeys, geishas and highland naturals, all scored and ready for export.</p>

      <div class="mag-cover-toc">
        <a href="#featured" class="mag-toc-item">
          <span class="mag-toc-num">01</span>
          <span class="mag-toc-label">Editor's Pick — Geisha Honey 87.5</span>
        </a>
        <a href="#grid" class="mag-toc-item">
          <span class="mag-toc-num">02</span>
          <span class="mag-toc-label">All 8 Lots — Full Release Grid</span>
        </a>
        <a href="#calendar" class="mag-toc-item">
          <span class="mag-toc-num">03</span>
          <span class="mag-toc-label">Harvest Calendar by Origin</span>
        </a>
        <a href="#notify" class="mag-toc-item">
          <span class="mag-toc-num">04</span>
          <span class="mag-toc-label">Get Notified — Monthly Drops</span>
        </a>
      </div>
    </div>

    <!-- Cover stats bar -->
    <div class="mag-cover-stats">
      <div class="mag-cstat">
        <span class="mag-cstat-n">8</span>
        <span class="mag-cstat-l">New Lots</span>
      </div>
      <div class="mag-cstat-div"></div>
      <div class="mag-cstat">
        <span class="mag-cstat-n">85–88+</span>
        <span class="mag-cstat-l">Cup Score Range</span>
      </div>
      <div class="mag-cstat-div"></div>
      <div class="mag-cstat">
        <span class="mag-cstat-n">6</span>
        <span class="mag-cstat-l">Origin Zones</span>
      </div>
      <div class="mag-cstat-div"></div>
      <div class="mag-cstat">
        <span class="mag-cstat-n">2026</span>
        <span class="mag-cstat-l">Crop Year</span>
      </div>
    </div>
  </div>
</section>
</template>

<style>
.mag-cover {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  padding-top: 32px;
}

.mag-cover-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
}

.mag-cover-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(160deg,
      rgba(8, 20, 12, .97) 0%,
      rgba(14, 28, 18, .90) 40%,
      rgba(20, 40, 26, .70) 100%);
}

.mag-cover-inner {
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding: 0 48px 0;
}

/* Masthead */
.mag-masthead {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 20px;
  padding: 60px 0 32px;
  border-bottom: 1px solid rgba(255, 255, 255, .08);
}

.mag-masthead-left {
  display: flex;
  align-items: center;
}

.mag-masthead-right {
  display: flex;
  justify-content: flex-end;
}

.mag-issue {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .22em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, .35);
}

.mag-masthead-logo {
  font-family: var(--ff-d);
  font-size: clamp(36px, 5vw, 56px);
  letter-spacing: .14em;
  color: var(--white);
  text-align: center;
}

/* Cover body */
.mag-cover-body {
  padding: 52px 0 40px;
  max-width: 780px;
}

.mag-cover-kicker {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 18px;
}

.mag-live-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--gold);
  animation: livepulse 1.8s ease-in-out infinite;
}

@keyframes livepulse {

  0%,
  100% {
    opacity: 1;
    transform: scale(1)
  }

  50% {
    opacity: .4;
    transform: scale(.65)
  }
}

.mag-cover-title {
  font-family: var(--ff-d);
  font-size: clamp(64px, 11vw, 128px);
  font-weight: 400;
  color: var(--white);
  line-height: .88;
  margin-bottom: 24px;
}

.mag-cover-deck {
  font-size: 15px;
  color: rgba(255, 255, 255, .55);
  line-height: 1.78;
  max-width: 560px;
  margin-bottom: 40px;
}

/* Table of contents */
.mag-cover-toc {
  display: flex;
  flex-direction: column;
  gap: 0;
  border-top: 1px solid rgba(255, 255, 255, .08);
  border-bottom: 1px solid rgba(255, 255, 255, .08);
}

.mag-toc-item {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 14px 0;
  border-bottom: 1px solid rgba(255, 255, 255, .05);
  transition: padding-left var(--tr);
}

.mag-toc-item:last-child {
  border-bottom: none;
}

.mag-toc-item:hover {
  padding-left: 8px;
}

.mag-toc-num {
  font-family: var(--ff-d);
  font-size: 13px;
  color: var(--gold);
  flex-shrink: 0;
  width: 24px;
}

.mag-toc-label {
  font-size: 12px;
  font-weight: 500;
  color: rgba(255, 255, 255, .55);
  letter-spacing: .03em;
  transition: color var(--tr);
}

.mag-toc-item:hover .mag-toc-label {
  color: var(--white);
}

/* Cover stats */
.mag-cover-stats {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  gap: 32px;
  border-top: 1px solid rgba(255, 255, 255, .08);
  padding: 24px 48px;
}

.mag-cstat {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.mag-cstat-n {
  font-family: var(--ff-d);
  font-size: 24px;
  color: var(--white);
  line-height: 1;
}

.mag-cstat-l {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, .3);
}

.mag-cstat-div {
  width: 1px;
  height: 32px;
  background: rgba(255, 255, 255, .1);
}
</style>