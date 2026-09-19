<template>
    <div class="coffee-catalog">
        <!-- FILTERS -->
        <CoffeeFilters :selected-category="selectedCategory" :selected-process="selectedProcess"
            :selected-origin="selectedOrigin" :results-count="filteredLots.length"
            @update:category="selectedCategory = $event" @update:process="selectedProcess = $event"
            @update:origin="selectedOrigin = $event" />

        <!-- CATALOG -->
        <section class="catalog-section">
            <div class="container">
                <!-- RESULTS -->
                <div v-if="filteredLots.length" class="catalog-grid">
                    <CoffeeCard v-for="lot in filteredLots" :key="lot.id" :lot="lot" />
                </div>

                <!-- EMPTY -->
                <div v-else class="catalog-empty">
                    <div class="empty-icon">☕</div>

                    <h3>No lots found</h3>

                    <p>No lots match your current filters.</p>

                    <button type="button" class="btn btn-dark" @click="resetFilters">
                        Reset Filters
                    </button>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import CoffeeFilters from "./CoffeeFilters.vue";
import CoffeeCard from "./CoffeeCard.vue";
import { coffeeLots } from "../../../data/coffees.ts";


const selectedCategory = ref("all");
const selectedProcess = ref("all");
const selectedOrigin = ref("all");

const filteredLots = computed(() => {
    return coffeeLots.filter((lot) => {
        const categoryMatch =
            selectedCategory.value === "all" ||
            lot.category === selectedCategory.value;

        const processMatch =
            selectedProcess.value === "all" || lot.process === selectedProcess.value;

        const originMatch =
            selectedOrigin.value === "all" || lot.origin === selectedOrigin.value;

        return categoryMatch && processMatch && originMatch;
    });
});

const resetFilters = () => {
    selectedCategory.value = "all";
    selectedProcess.value = "all";
    selectedOrigin.value = "all";
};
</script>

<style scoped>
.catalog-section {
    background: var(--ivory);

    padding: 50px 0 100px;
}

.catalog-grid {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 24px;
}

.catalog-empty {
    min-height: 350px;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    text-align: center;

    gap: 10px;
}

.empty-icon {
    width: 54px;
    height: 54px;

    display: flex;

    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background: var(--white);

    font-size: 22px;

    margin-bottom: 8px;
}

.catalog-empty h3 {
    font-family: var(--ff-d);

    font-size: 22px;

    color: var(--text);
}

.catalog-empty p {
    font-size: 14px;

    color: var(--text-m);

    margin-bottom: 12px;
}

@media (max-width: 1000px) {
    .catalog-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 650px) {
    .catalog-section {
        padding: 35px 0 70px;
    }

    .catalog-grid {
        grid-template-columns: 1fr;

        gap: 18px;
    }
}
</style>
