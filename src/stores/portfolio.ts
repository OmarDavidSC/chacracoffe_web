import { defineStore } from "pinia";
import { ref } from "vue";

export const usePortfolioStore = defineStore('portfolio', () => {
    const darkMode = ref<boolean>(false);

    const toggleDarkMode = (): void => {
        darkMode.value = !darkMode.value;
    }

    return {
        darkMode,
        toggleDarkMode
    }
});