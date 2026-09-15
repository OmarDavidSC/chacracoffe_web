<template>
  <section class="ab-values">
    <div class="ab-values-bg"></div>
    <div class="container">
      <div class="ab-values-header" data-aos="fade-up" data-aos-duration="900" data-aos-once="true">
        <span class="eyebrow gold">Mission &amp; Values</span>
        <h2 class="section-title light">
          What drives<br />
          <em>everything we do.</em>
        </h2>
      </div>
      <div class="ab-values-grid">
        <div class="ab-val-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100" data-aos-once="true">
          <div class="ab-val-icon">
            <svg viewBox="0 0 28 28" fill="none" stroke="#C8A85A" stroke-width="1.6" stroke-linecap="round" width="26"
              height="26">
              <path d="M14 3C14 3 5 8 5 15a9 9 0 0018 0C23 8 14 3 14 3z" />
              <path d="M14 3v19" />
            </svg>
          </div>
          <h3>Quality First</h3>
          <p>
            Every lot we sell has been cupped, scored and approved by our
            Q-Graders. We publish honest scores — no inflation, no marketing
            language.
          </p>
        </div>
        <div class="ab-val-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200" data-aos-once="true">
          <div class="ab-val-icon">
            <svg viewBox="0 0 28 28" fill="none" stroke="#C8A85A" stroke-width="1.6" stroke-linecap="round" width="26"
              height="26">
              <circle cx="9" cy="9" r="4" />
              <circle cx="19" cy="9" r="4" />
              <circle cx="14" cy="20" r="4" />
              <path d="M13 9h2M11.5 16.5l-2-3.5M16.5 16.5l2-3.5" />
            </svg>
          </div>
          <h3>Producer Relationships</h3>
          <p>
            We work directly with over 150 smallholder farmers across 50+
            communities. Fair prices and long-term commitment — not spot buying.
          </p>
        </div>
        <div class="ab-val-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="300" data-aos-once="true">
          <div class="ab-val-icon">
            <svg viewBox="0 0 28 28" fill="none" stroke="#C8A85A" stroke-width="1.6" stroke-linecap="round" width="26"
              height="26">
              <path d="M4 14h20M14 4l10 10-10 10" />
            </svg>
          </div>
          <h3>Full Traceability</h3>
          <p>
            Every bag we ship is traceable to its farm, producer and community.
            We provide full cupping reports, harvest data and processing notes
            on request.
          </p>
        </div>
        <div class="ab-val-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400" data-aos-once="true">
          <div class="ab-val-icon">
            <svg viewBox="0 0 28 28" fill="none" stroke="#C8A85A" stroke-width="1.6" stroke-linecap="round" width="26"
              height="26">
              <rect x="4" y="10" width="20" height="14" rx="2" />
              <path d="M9 10V7a5 5 0 0110 0v3" />
            </svg>
          </div>
          <h3>Transparency</h3>
          <p>
            We share farm-gate prices, processing costs and logistics openly
            with our buyers. No hidden margins, no opaque supply chains.
          </p>
        </div>
        <div class="ab-val-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="500" data-aos-once="true">
          <div class="ab-val-icon">
            <svg viewBox="0 0 28 28" fill="none" stroke="#C8A85A" stroke-width="1.6" stroke-linecap="round" width="26"
              height="26">
              <circle cx="14" cy="14" r="10" />
              <path d="M2 14h4M22 14h4M14 2v4M14 22v4" />
            </svg>
          </div>
          <h3>Global Reach</h3>
          <p>
            We export FOB from Callao and hold UK &amp; EU warehouse stock for
            faster, simpler delivery to roasters across Europe.
          </p>
        </div>
        <div class="ab-val-card" data-aos="fade-up" data-aos-duration="800" data-aos-delay="600" data-aos-once="true">
          <div class="ab-val-icon">
            <svg viewBox="0 0 28 28" fill="none" stroke="#C8A85A" stroke-width="1.6" stroke-linecap="round" width="26"
              height="26">
              <path d="M14 4l2.5 5 5.5.8-4 3.9.9 5.5L14 16.7l-4.9 2.5.9-5.5-4-3.9 5.5-.8z" />
            </svg>
          </div>
          <h3>Constant Improvement</h3>
          <p>
            We invest in processing infrastructure, Q-Grader training and
            fermentation research to push quality higher every season.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.ab-values {
  position: relative;
  padding: 100px 0 110px;
  overflow: hidden;
}

.ab-values-bg {
  position: absolute;
  inset: 0;
  background: var(--green);
}

.ab-values-bg::after {
  content: "";
  position: absolute;
  inset: 0;
  background-image: url("../img/Fondo_Web.jpg");
  background-size: cover;
  background-position: center;
  opacity: 0.07;
}

.ab-values-header {
  position: relative;
  z-index: 2;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 500px;
}

.ab-values-grid {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

.ab-val-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: var(--r-md);
  padding: 32px 28px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition:
    background var(--tr),
    border-color var(--tr),
    transform var(--tr);
  will-change: transform, opacity;
}

.ab-val-card:hover {
  background: rgba(255, 255, 255, 0.09);
  border-color: rgba(200, 168, 90, 0.3);
  transform: translateY(-6px);
}

.ab-val-icon {
  width: 52px;
  height: 52px;
  border-radius: var(--r-md);
  background: rgba(200, 168, 90, 0.1);
  border: 1px solid rgba(200, 168, 90, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  transition:
    transform 0.4s ease,
    background 0.4s ease,
    border-color 0.4s ease;
}

.ab-val-card:hover .ab-val-icon {
  transform: scale(1.08);
  background: rgba(200, 168, 90, 0.15);
  border-color: rgba(200, 168, 90, 0.4);
}

.ab-val-card h3 {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--white);
}

.ab-val-card p {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.52);
  line-height: 1.78;
}

/* TABLET */
@media (max-width: 900px) {
  .ab-values {
    padding: 80px 0 90px;
  }

  .ab-values-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .ab-values-header {
    margin-bottom: 45px;
  }
}

/* MOBILE */
@media (max-width: 600px) {
  .ab-values {
    padding: 70px 0 80px;
  }

  .ab-values-grid {
    grid-template-columns: 1fr;
    gap: 16px;
  }

  .ab-values-header {
    margin-bottom: 35px;
  }

  .ab-val-card {
    padding: 28px 24px;
  }
}

/* REDUCE MOTION */
@media (prefers-reduced-motion: reduce) {

  .ab-val-card,
  .ab-val-icon {
    transition: none;
  }
}
</style>
