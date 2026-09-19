<template>
    <section class="filters-section">
        <div class="container">
            <div class="filters-bar">
                <!-- CATEGORY -->
                <div class="filter-group">
                    <span class="filter-label"> Category </span>

                    <div class="filter-pills">
                        <button v-for="filter in categoryFilters" :key="filter.value" type="button" class="filter-pill"
                            :class="{
                                active: selectedCategory === filter.value,
                            }" @click="selectCategory(filter.value)">
                            {{ filter.label }}
                        </button>
                    </div>
                </div>

                <!-- PROCESS -->
                <div class="filter-group">
                    <span class="filter-label"> Process </span>

                    <div class="filter-pills">
                        <button v-for="filter in processFilters" :key="filter.value" type="button" class="filter-pill"
                            :class="{
                                active: selectedProcess === filter.value,
                            }" @click="selectProcess(filter.value)">
                            {{ filter.label }}
                        </button>
                    </div>
                </div>

                <!-- ORIGIN -->
                <div class="filter-group">
                    <span class="filter-label"> Origin </span>

                    <select class="filter-select" :value="selectedOrigin" @change="handleOriginChange">
                        <option v-for="filter in originFilters" :key="filter.value" :value="filter.value">
                            {{ filter.label }}
                        </option>
                    </select>
                </div>

                <!-- RESULTS -->
                <div class="filter-results">
                    <span>
                        {{ resultsCount }}
                    </span>

                    {{ resultsCount === 1 ? "lot" : "lots" }} found
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { categoryFilters, processFilters, originFilters, } from "../../../data/catalogFilters";

interface Props {
    selectedCategory: string;
    selectedProcess: string;
    selectedOrigin: string;
    resultsCount: number;
}

const props = defineProps<Props>();

const emit = defineEmits<{
    (event: "update:category", value: string): void;

    (event: "update:process", value: string): void;

    (event: "update:origin", value: string): void;
}>();

const selectCategory = (value: string) => {
    emit("update:category", value);
};

const selectProcess = (value: string) => {
    emit("update:process", value);
};

const handleOriginChange = (event: Event) => {
    const target = event.target as HTMLSelectElement;

    emit("update:origin", target.value);
};
</script>

<style scoped>
.filters-section {
    background: var(--ivory);
    padding: 32px 0;
    border-bottom: 1px solid var(--ivory-d);

    position: sticky;
    top: 84px;

    z-index: 50;

    backdrop-filter: blur(8px);
}

.filters-bar {
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    gap: 24px;
}

.filter-group {
    display: flex;
    flex-direction: column;

    gap: 8px;
}

.filter-label {
    font-size: 9px;
    font-weight: 700;

    letter-spacing: 0.14em;
    text-transform: uppercase;

    color: var(--text-l);
}

.filter-pills {
    display: flex;
    flex-wrap: wrap;

    gap: 6px;
}

.filter-pill {
    padding: 7px 14px;

    font-size: 11px;
    font-weight: 600;

    border-radius: 20px;

    border: 1.5px solid var(--ivory-d);

    background: var(--white);
    color: var(--text-m);

    cursor: pointer;

    transition: all var(--tr);
}

.filter-pill:hover {
    border-color: var(--gold);
    color: var(--text);
}

.filter-pill.active {
    background: var(--green);

    border-color: var(--green);

    color: var(--white);
}

.filter-select {
    padding: 8px 14px;

    font-size: 12px;
    font-weight: 500;

    border-radius: 6px;

    border: 1.5px solid var(--ivory-d);

    background: var(--white);

    color: var(--text);

    cursor: pointer;

    outline: none;
}

.filter-select:focus {
    border-color: var(--gold);
}

.filter-results {
    margin-left: auto;

    font-size: 12px;

    color: var(--text-l);

    font-weight: 500;

    white-space: nowrap;
}

.filter-results span {
    color: var(--green);

    font-weight: 700;
}

@media (max-width: 1100px) {
    .filter-results {
        margin-left: 0;
        width: 100%;
    }
}

@media (max-width: 768px) {
    .filters-section {
        position: static;

        padding: 24px 0;
    }

    .filters-bar {
        gap: 18px;
    }

    .filter-group {
        width: 100%;
    }

    .filter-pills {
        width: 100%;
    }

    .filter-pill {
        flex: 0 0 auto;
    }

    .filter-select {
        width: 100%;
    }
}
</style>
