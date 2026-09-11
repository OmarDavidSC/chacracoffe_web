<script setup lang="ts">
import AppNavbar from "./components/AppNavbar.vue";
import AppFooter from "./components/AppFooter.vue";

</script>

<template>
  <div class="app-container">
    <AppNavbar />
    <main>
      <RouterView />
    </main>
    <AppFooter/>
  </div>

</template>

<style>
.app-container {
  min-height: 100vh;
  color: #1f2937;
  background: black;
}
</style>
