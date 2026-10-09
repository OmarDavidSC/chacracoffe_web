<template>
  <main class="coffees-page">
    <!-- HEADER -->
    <section class="coffees-hero">
      <div class="container">
        <span class="eyebrow gold"> {{ $t('grid.pill') }} </span>

        <h1 class="section-title">
          {{ $t('grid.h1') }}
          <em>{{ $t('grid.em') }}</em>
        </h1>

        <p class="hero-description">
          {{ $t('grid.description') }}
        </p>
      </div>
    </section>

    <!-- CATALOG -->
    <CoffeeCatalog />
  </main>
</template>

<script setup lang="ts">
import CoffeeCatalog from './coffe/CoffeeCatalog.vue';
</script>

<style scoped>
.coffees-page {
  background: var(--ivory);

  min-height: 100vh;
}

.coffees-hero {
  padding: 100px 0 60px;

  background: var(--ivory);
}

.hero-description {
  max-width: 620px;

  margin-top: 18px;

  font-size: 15px;

  line-height: 1.8;

  color: var(--text-m);
}

@media (max-width: 768px) {
  .coffees-hero {
    padding: 70px 0 40px;
  }
}
</style>
