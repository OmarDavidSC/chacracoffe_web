<template>
    <section class="timeline-section" :style="{ backgroundImage: `url('${backgroundImage}')` }">
        <div class="timeline-overlay"></div>

        <div class="container timeline-container">
            <!-- HEADER -->
            <div class="timeline-header" data-aos="fade-up" data-aos-duration="900" data-aos-once="true">
                <span class="eyebrow gold"> Our Journey </span>

                <h2 class="section-title">A decade of <em>growth.</em></h2>

                <p>
                    From a single family farm to a growing network of producers across the
                    highlands of Cajamarca.
                </p>
            </div>

            <!-- TIMELINE -->
            <div class="timeline-wrapper">
                <TimelineNavigation :items="timeline" :active-index="activeIndex" :progress="progressPercentage"
                    :spacing="pointSpacing" @select="selectTimeline" />

                <TimelineCard :item="activeItem" :index="activeIndex" :total="timeline.length"
                    @previous="previousTimeline" @next="nextTimeline" />
            </div>

            <!-- PROGRESS -->
            <div class="timeline-progress">
                <span>
                    {{ String(activeIndex + 1).padStart(2, "0") }}
                </span>

                <div class="timeline-progress-line">
                    <div :style="{ width: `${progressPercentage}%` }"></div>
                </div>

                <span>
                    {{ String(timeline.length).padStart(2, "0") }}
                </span>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

import TimelineNavigation from "./TimelineNavigation.vue";
import TimelineCard from "./TimelineCard.vue";

import { timeline } from "./timelineData";

const backgroundImage = "/img/coffee/Fondo_2.jpg";

const activeIndex = ref(0);

const activeItem = computed(() => {
    return timeline[activeIndex.value];
});

const progressPercentage = computed(() => {
    if (timeline.length <= 1) return 100;

    return (activeIndex.value / (timeline.length - 1)) * 100;
});

const pointSpacing = computed(() => {
    if (timeline.length <= 1) return 0;

    return 100 / (timeline.length - 1);
});

const selectTimeline = (index: number) => {
    activeIndex.value = index;
};

const nextTimeline = () => {
    if (activeIndex.value < timeline.length - 1) {
        activeIndex.value++;
    }
};

const previousTimeline = () => {
    if (activeIndex.value > 0) {
        activeIndex.value--;
    }
};
</script>

<style scoped>
.timeline-section {
    position: relative;

    padding: 120px 0 100px;

    background-size: cover;
    background-position: center;
    background-attachment: fixed;

    overflow: hidden;
}

.timeline-overlay {
    position: absolute;
    inset: 0;

    background: linear-gradient(90deg,
            rgba(20, 19, 15, 0.94) 0%,
            rgba(20, 19, 15, 0.88) 45%,
            rgba(20, 19, 15, 0.76) 100%);
}

.timeline-container {
    position: relative;
    z-index: 2;
}

/* HEADER */

.timeline-header {
    max-width: 600px;
    margin-bottom: 90px;
}

.timeline-header .eyebrow {
    display: inline-block;
    margin-bottom: 14px;
}

.timeline-header .section-title {
    color: var(--white);
    margin-bottom: 20px;
}

.timeline-header .section-title em {
    color: var(--gold);
}

.timeline-header p {
    max-width: 500px;

    color: rgba(255, 255, 255, 0.62);

    font-size: 14px;
    line-height: 1.8;
}

/* WRAPPER */

.timeline-wrapper {
    max-width: 1100px;

    margin: 0 auto;

    display: grid;

    grid-template-columns: 280px 1fr;

    gap: 90px;

    min-height: 500px;
}

/* PROGRESS */

.timeline-progress {
    max-width: 1100px;

    margin: 70px auto 0;

    display: flex;

    align-items: center;

    gap: 16px;

    color: rgba(255, 255, 255, 0.45);

    font-size: 9px;

    font-weight: 700;

    letter-spacing: 0.12em;
}

.timeline-progress-line {
    flex: 1;

    height: 1px;

    background: rgba(255, 255, 255, 0.15);

    position: relative;
}

.timeline-progress-line div {
    position: absolute;

    left: 0;
    top: 0;

    height: 100%;

    background: var(--gold);

    transition: width 0.7s cubic-bezier(0.22, 1, 0.36, 1);
}

/* TABLET */

@media (max-width: 900px) {
    .timeline-section {
        padding: 90px 30px;
        background-attachment: scroll;
    }

    .timeline-wrapper {
        grid-template-columns: 210px 1fr;
        gap: 45px;
    }
}

/* MOBILE */

@media (max-width: 700px) {
    .timeline-section {
        padding: 80px 20px;
    }

    .timeline-header {
        margin-bottom: 65px;
    }

    .timeline-header .section-title {
        font-size: 36px;
    }

    .timeline-wrapper {
        display: block;
        min-height: auto;
    }

    .timeline-progress {
        margin-top: 50px;
    }
}
</style>
