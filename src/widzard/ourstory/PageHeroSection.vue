<template>
  <section class="story-hero">
    <div class="story-hero-bg"></div>
    <div class="story-hero-inner container">
      <span class="eyebrow gold">{{ $t('hero.badge') }}</span>
      <h1 class="page-title">{{ $t('hero.h1') }} <em>{{ $t('hero.em') }}</em></h1>
      <p class="page-sub">{{ $t('hero.description') }}</p>
    </div>
  </section>
</template>

<style>
.story-hero {
  position: relative;
  padding: 180px 0 90px;
  overflow: hidden;
  background: var(--green);
}

.story-hero-bg {
  position: absolute;
  inset: 0;
  background-image: url('../../../public/img/coffeestory/Fondo_Web.jpg');
  background-size: cover;
  background-position: center;
  opacity: .22;
}

.story-hero-inner {
  position: relative;
  z-index: 2;
  max-width: 620px;
}

.page-title {
  font-family: var(--ff-d);
  font-size: clamp(38px, 6vw, 64px);
  font-weight: 400;
  color: var(--white);
  line-height: 1.08;
  margin-bottom: 18px;
}

.page-title em {
  font-style: italic;
  color: var(--gold);
}

.page-sub {
  font-size: 14px;
  color: rgba(255, 255, 255, .62);
  line-height: 1.8;
  max-width: 540px;
}
</style>