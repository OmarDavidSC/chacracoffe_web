<template>
<section class="faq-section">
    <div class="container">
      <div class="faq-header">
        <span class="eyebrow gold">{{ $t('street.pill') }}</span>
        <h2 class="section-title">{{ $t('street.h2') }} <em>{{ $t('street.em') }}</em></h2>
      </div>
      <div class="faq-grid">
        <div class="faq-item">
          <h3>{{ $t('street.t1') }}</h3>
          <p>{{ $t('street.d1') }}</p>
        </div>
        <div class="faq-item">
          <h3>{{ $t('street.t2') }}</h3>
          <p>{{ $t('street.d2') }}</p>
        </div>
        <div class="faq-item">
          <h3>{{ $t('street.t3') }}</h3>
          <p>{{ $t('street.d3') }}</p>
        </div>
        <div class="faq-item">
          <h3>{{ $t('street.t4') }}</h3>
          <p>{{ $t('street.d4') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
.faq-section {
  background: var(--ivory-d);
  padding: 90px 0;
}

.faq-header {
  max-width: 480px;
  margin-bottom: 48px;
}

.faq-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px 40px;
}

.faq-item {
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, .07);
}

.faq-item h3 {
  font-size: 15px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 8px;
}

.faq-item p {
  font-size: 13px;
  color: var(--text-m);
  line-height: 1.75;
}
</style>