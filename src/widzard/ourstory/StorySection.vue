<template>
<section class="history-section">
  <div class="container history-grid">
    <div class="history-text">
      <span class="eyebrow gold">How We Started</span>
      <h2 class="section-title">From one farm<br>to <em>twenty communities.</em></h2>
      <p>Chacra Coffee began as a small family operation in Jaén, Cajamarca, where coffee has been grown for generations. What started as a single hectare of Typica and Bourbon trees grew, over a decade, into a network of relationships with more than 100 producers across six origin zones in Northern Peru.</p>
      <p>The name "Chacra" — a Quechua word for a small family-run farm — reflects what still drives the business today: direct, long-term relationships with the people who grow the coffee, built on fair pricing, shared knowledge and mutual trust.</p>
      <p>Today, Chacra Coffee exports specialty-grade green coffee to roasters across the UK and Europe, with full traceability from farm to cup and a growing portfolio of award-winning microlots.</p>
    </div>
    <div class="history-photos">
      <div class="hp-main" style="background-image:url('/public/img/coffeestory/Fondo_1.jpg')"></div>
      <div class="hp-sub" style="background-image:url('/public/img/coffeestory/Las_Etiopes.JPG')"></div>
    </div>
  </div>
</section>
</template>

<style>
.history-section {
  background: var(--ivory);
  padding: 100px 0;
}

.history-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.history-text {
  display: flex;
  flex-direction: column;
  gap: 18px;
}

.history-text p {
  font-size: 14px;
  color: var(--text-m);
  line-height: 1.85;
}

.history-photos {
  position: relative;
  height: 480px;
}

.hp-main {
  position: absolute;
  top: 0;
  left: 0;
  width: 78%;
  height: 80%;
  background-size: cover;
  background-position: center;
  border-radius: var(--r-lg);
  box-shadow: var(--sh-lg);
}

.hp-sub {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 56%;
  height: 50%;
  background-size: cover;
  background-position: center top;
  border-radius: var(--r-md);
  box-shadow: var(--sh-md);
  border: 6px solid var(--ivory);
}
</style>