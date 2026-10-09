<template>
  <section class="history-section">
    <div class="container history-grid">
      <div class="history-text">
        <span class="eyebrow gold">{{ $t('story.badge') }}</span>
        <h2 class="section-title">{{ $t('story.h2') }}<br>{{ $t('story.br') }} <em>{{ $t('story.em') }}</em></h2>
        <p>{{ $t('story.d1') }}</p>
        <p>{{ $t('story.d2') }}</p>
        <p>{{ $t('story.d3') }}</p>
      </div>
      <div class="history-photos">
        <div class="hp-main" style="background-image:url('/public/img/coffeestory/Story2.jpg')"></div>
        <div class="hp-sub" style="background-image:url('/public/img/coffeestory/Story.jpg')"></div>
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
  height: 60%;
  background-size: cover;
  background-position: center 60%;
  border-radius: var(--r-md);
  box-shadow: var(--sh-md);
  border: 6px solid var(--ivory);
}
</style>