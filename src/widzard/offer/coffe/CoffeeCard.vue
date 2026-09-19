<template>
    <article class="cat-card" :class="{
        'cat-featured': lot.featured,
    }">
        <!-- IMAGE -->
        <div class="cat-img" :style="{
            backgroundImage: `url('${lot.image}')`,
        }">
            <!-- BADGE -->
            <span class="cat-badge" :class="{
                gold: lot.category !== 'regional',
            }">
                {{ lot.badge }}
            </span>

            <!-- SCORE -->
            <div class="cat-score" :class="{
                gold: lot.category !== 'regional',
            }">
                <span>
                    {{ lot.score }}
                </span>
            </div>
        </div>

        <!-- BODY -->
        <div class="cat-body">
            <h3 class="cat-title">
                {{ lot.name }}
            </h3>

            <span class="cat-origin">
                {{ lot.originLabel }}
                ·
                {{ lot.altitude }}
            </span>

            <!-- TAGS -->
            <div class="cat-tags">
                <span v-for="tag in lot.tags" :key="tag" class="cat-tag">
                    {{ tag }}
                </span>
            </div>

            <!-- NOTES -->
            <p class="cat-notes">
                {{ lot.notes }}
            </p>

            <!-- LINK -->
            <a href="#" class="cat-link" @click.prevent="requestSample">
                Request Sample →
            </a>
        </div>
    </article>
</template>

<script setup lang="ts">
import type { CoffeeLot } from "../../../data/coffees";

interface Props {
    lot: CoffeeLot;
}

const props = defineProps<Props>();

const requestSample = () => {
    console.log(`Request sample: ${props.lot.name}`);
};
</script>

<style scoped>
.cat-card {
    background: var(--white);

    border-radius: var(--r-md);

    overflow: hidden;

    box-shadow: var(--sh-sm);

    transition:
        transform var(--tr),
        box-shadow var(--tr);

    display: flex;
    flex-direction: column;
}

.cat-card:hover {
    transform: translateY(-6px);

    box-shadow: var(--sh-md);
}

.cat-featured {
    box-shadow: 0 4px 24px rgba(200, 168, 90, 0.18);
}

.cat-img {
    height: 200px;

    background-size: cover;
    background-position: center;

    position: relative;

    overflow: hidden;
}

.cat-img::after {
    content: "";

    position: absolute;

    inset: 0;

    background: linear-gradient(to top,
            rgba(20, 40, 26, 0.5) 0%,
            transparent 50%);
}

.cat-badge {
    position: absolute;

    top: 12px;
    left: 12px;

    z-index: 2;

    font-size: 9px;
    font-weight: 700;

    letter-spacing: 0.1em;

    text-transform: uppercase;

    background: rgba(255, 255, 255, 0.92);

    color: var(--text);

    padding: 4px 10px;

    border-radius: 20px;
}

.cat-badge.gold {
    background: rgba(200, 168, 90, 0.92);

    color: #1a3026;
}

.cat-score {
    position: absolute;
    top: 12px;
    right: 12px;
    z-index: 2;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: rgba(26, 48, 38, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--ff-d);
    font-size: 14px;
    color: var(--white);
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.cat-score.gold {
    background: rgba(200, 168, 90, 0.92);
    color: #1a3026;
    border-color: transparent;
    font-weight: 700;
}

.cat-body {
    padding: 18px 20px 20px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex: 1;
}

.cat-title {
    font-family: var(--ff-d);
    font-size: 18px;
    color: var(--text);
    line-height: 1.2;
}

.cat-origin {
    font-size: 11px;
    color: var(--text-l);
}

.cat-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin: 6px 0 2px;
}

.cat-tag {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    padding: 3px 8px;
    border-radius: 20px;
    background: var(--ivory);
    color: var(--text-m);
    border: 1px solid var(--ivory-d);
}

.cat-notes {
    font-size: 12px;
    color: var(--text-m);
    font-style: italic;
}

.cat-link {
    display: inline-block;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--green);
    margin-top: 10px;
    transition: color var(--tr);
}

.cat-link:hover {
    color: var(--gold);
}
</style>
