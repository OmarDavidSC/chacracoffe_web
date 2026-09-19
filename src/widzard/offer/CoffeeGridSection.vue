<template>
  <main class="coffees-page">
    <!-- HEADER -->
    <section class="coffees-hero">
      <div class="container">
        <span class="eyebrow gold"> Our Coffees </span>

        <h1 class="section-title">
          Explore our
          <em>coffee lots.</em>
        </h1>

        <p class="hero-description">
          Traceable specialty coffee from the highlands of Cajamarca, Peru.
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
