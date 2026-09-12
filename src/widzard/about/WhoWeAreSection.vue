<template>
<section class="ab-who" id="ab-mission">
    <div class="container">
      <div class="ab-who-grid">
        <div class="ab-who-img" data-aos>
          <div class="ab-img-main" style="background-image:url('/img/about/Fondo_1.jpg')"></div>
          <div class="ab-img-accent" style="background-image:url('/img/about/Processing.jpg')"></div>
          <div class="ab-img-tag">
            <span class="ab-tag-num">2023</span>
            <span class="ab-tag-lbl">Founded in Jaén</span>
          </div>
        </div>
        <div class="ab-who-text" data-aos>
          <span class="eyebrow gold">Who We Are</span>
          <h2 class="section-title">A company rooted<br><em>in the highlands.</em></h2>
          <p>Chacra Coffee was born in Jaén, one of Peru's most celebrated coffee-growing regions. We are a specialty
            green coffee exporter that sources, processes and exports traceable lots from smallholder farmers across
            Cajamarca — to roasters and importers in the United Kingdom, Europe and beyond.</p>
          <p>The name <em>Chacra</em> comes from the Quechua word for <em>farm</em> or <em>field</em> — a reflection of
            our roots and the farmers at the heart of everything we do.</p>
          <div class="ab-who-tags">
            <span class="ab-pill">🌿 Specialty Grade</span>
            <span class="ab-pill">📍 Traceable Lots</span>
            <span class="ab-pill">🤝 Direct Trade</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.ab-who {
  background: var(--ivory);
  padding: 110px 0 100px;
}
.ab-who-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: center;
}

/* IMAGE BLOCK */
.ab-who-img {
  position: relative;
  height: 520px;
}
.ab-img-main {
  position: absolute;
  inset: 0;
  border-radius: var(--r-lg);
  background-size: cover;
  background-position: center;
  box-shadow: var(--sh-lg);
}
.ab-img-accent {
  position: absolute;
  width: 52%;
  height: 46%;
  bottom: -28px;
  right: -28px;
  border-radius: var(--r-md);
  background-size: cover;
  background-position: center;
  border: 4px solid var(--ivory);
  box-shadow: var(--sh-md);
  z-index: 2;
}
.ab-img-tag {
  position: absolute;
  top: 28px;
  left: -20px;
  background: var(--green);
  color: var(--white);
  border-radius: var(--r-md);
  padding: 14px 20px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  z-index: 3;
  box-shadow: var(--sh-md);
}
.ab-tag-num {
  font-family: var(--ff-d);
  font-size: 28px;
  line-height: 1;
  color: var(--gold);
}
.ab-tag-lbl {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: rgba(255,255,255,.55);
}

/* TEXT BLOCK */
.ab-who-text {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.ab-who-text p {
  font-size: 15px;
  color: var(--text-m);
  line-height: 1.85;
}
.ab-who-text em {
  color: var(--green);
  font-style: italic;
}
.ab-who-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 8px;
}
.ab-pill {
  font-size: 11px;
  font-weight: 600;
  padding: 7px 16px;
  border-radius: 20px;
  background: var(--white);
  border: 1.5px solid var(--ivory-d);
  color: var(--text-m);
  transition: all var(--tr);
}
.ab-pill:hover {
  border-color: var(--green);
  color: var(--green);
  background: rgba(26,80,48,.05);
}
</style>