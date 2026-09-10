<script setup lang="ts">
import { onMounted, ref } from "vue";

// import AppNavbar from "./components/AppNavbar.vue";

type Theme = "light" | "dark";


/* TEMA*/

const THEME_STORAGE_KEY = "omar-portfolio-theme";
const theme = ref<Theme>("light");

const applyTheme = (newTheme: Theme): void => {
  theme.value = newTheme;

  /*
   * Colocamos:
   *
   * <html data-theme="light">
   *
   * o
   *
   * <html data-theme="dark">
   */

  document.documentElement.setAttribute("data-theme", newTheme);

  /*
   * Guardamos la selección.
   */

  localStorage.setItem(THEME_STORAGE_KEY, newTheme);
};

const toggleTheme = (): void => {
  const newTheme: Theme = theme.value === "light" ? "dark" : "light";

  applyTheme(newTheme);
};

const loadTheme = (): void => {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;

  if (savedTheme === "light" || savedTheme === "dark") {
    applyTheme(savedTheme);

    return;
  }

  /*
   * Primera visita:
   *
   * detectamos si Windows / navegador
   * utiliza modo oscuro.
   */

  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  applyTheme(prefersDark ? "dark" : "light");
};


onMounted(() => {
  loadTheme();
});
</script>

<template>

  <!-- =================================================
         PORTFOLIO
    ================================================== -->

  <div class="app-container">
    <AppNavbar :theme="theme" @toggle-theme="toggleTheme" />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<style>
/* =====================================================
   APP
===================================================== */

.app-container {
  min-height: 100vh;

  color: var(--retro-text);

  background: var(--page-background);
}

/* =====================================================
   LOADING EXIT
===================================================== */

.loading-exit-leave-active {
  transition:
    opacity 0.45s steps(7),
    transform 0.45s steps(7),
    filter 0.45s steps(7);
}

.loading-exit-leave-to {
  opacity: 0;

  transform: scale(1.04);

  filter: brightness(2) blur(4px);
}
</style>
