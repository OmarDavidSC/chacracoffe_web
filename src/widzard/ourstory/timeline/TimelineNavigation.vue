<template>
    <div class="timeline-navigation">
        <div class="timeline-track">
            <div class="timeline-line"></div>

            <div class="timeline-line-active" :style="{ height: `${progress}%` }"></div>

            <button v-for="(item, index) in items" :key="item.year" class="timeline-point"
                :class="{ active: activeIndex === index }" :style="{ top: `${index * spacing}%` }"
                @click="$emit('select', index)" :aria-label="`View ${item.year}`">
                <span class="timeline-point-dot">
                    <span></span>
                </span>

                <span class="timeline-point-year">
                    {{ item.year }}
                </span>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { TimelineItem } from "./timelineData";

defineProps<{
    items: TimelineItem[];
    activeIndex: number;
    progress: number;
    spacing: number;
}>();

defineEmits<{
    select: [index: number];
}>();
</script>

<style scoped>
.timeline-navigation {
    position: relative;
    display: flex;
    justify-content: center;
}

.timeline-track {
    position: relative;
    width: 180px;
    height: 500px;
}

.timeline-line {
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 1px;
    transform: translateX(-50%);
    background: linear-gradient(to bottom,
            rgba(200, 168, 90, 0.45),
            rgba(255, 255, 255, 0.12));
}

.timeline-line-active {
    position: absolute;
    left: 50%;
    top: 0;
    width: 2px;
    transform: translateX(-50%);
    background: var(--gold);
    box-shadow: 0 0 12px rgba(200, 168, 90, 0.35);
    transition: height 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.timeline-point {
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);

    width: 180px;
    height: 60px;

    padding: 0;
    border: 0;
    background: transparent;

    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
}

.timeline-point-dot {
    position: absolute;
    left: 50%;

    width: 17px;
    height: 17px;

    transform: translateX(-50%);

    border-radius: 50%;

    background: #24221d;
    border: 2px solid rgba(200, 168, 90, 0.55);

    z-index: 3;

    transition:
        transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
        background 0.35s ease,
        border-color 0.35s ease,
        box-shadow 0.35s ease;
}

.timeline-point-dot span {
    position: absolute;
    inset: 4px;

    border-radius: 50%;

    background: var(--gold);

    opacity: 0;
    transform: scale(0);

    transition:
        opacity 0.3s ease,
        transform 0.4s ease;
}

.timeline-point-year {
    position: absolute;

    right: calc(50% + 28px);

    color: rgba(255, 255, 255, 0.4);

    font-family: var(--ff-d);
    font-size: 18px;

    white-space: nowrap;

    transition:
        color 0.35s ease,
        transform 0.4s ease;
}

.timeline-point:nth-child(even) .timeline-point-year {
    left: calc(50% + 28px);
    right: auto;
}

.timeline-point:hover .timeline-point-dot {
    transform: translateX(-50%) scale(1.25);
    border-color: var(--gold);
    box-shadow: 0 0 0 6px rgba(200, 168, 90, 0.1);
}

.timeline-point:hover .timeline-point-year {
    color: rgba(255, 255, 255, 0.85);
}

.timeline-point.active .timeline-point-dot {
    transform: translateX(-50%) scale(1.35);

    background: var(--gold);
    border-color: var(--gold);

    box-shadow:
        0 0 0 7px rgba(200, 168, 90, 0.14),
        0 0 25px rgba(200, 168, 90, 0.35);
}

.timeline-point.active .timeline-point-dot span {
    opacity: 1;
    transform: scale(1);
}

.timeline-point.active .timeline-point-year {
    color: var(--gold);
    font-size: 21px;
    font-weight: 500;
    transform: scale(1.03);
}

@media (max-width: 900px) {
    .timeline-track {
        width: 150px;
    }

    .timeline-point {
        width: 150px;
    }
}

@media (max-width: 700px) {
    .timeline-navigation {
        display: block;
        margin-bottom: 55px;
    }

    .timeline-track {
        width: 100%;
        height: 85px;
    }

    .timeline-line,
    .timeline-line-active {
        top: 50%;
        left: 0;

        width: 100%;
        height: 1px;

        transform: translateY(-50%);
    }

    .timeline-line-active {
        width: v-bind("`${progress}%`");
        height: 2px;
    }

    .timeline-point {
        width: 50px;
        height: 70px;

        transform: translate(-50%, -50%);
    }

    .timeline-point-year,
    .timeline-point:nth-child(even) .timeline-point-year {
        top: 60px;

        left: 50%;
        right: auto;

        transform: translateX(-50%);

        font-size: 11px;
    }

    .timeline-point.active .timeline-point-year {
        font-size: 13px;
        transform: translateX(-50%) scale(1.05);
    }

    .timeline-point-dot {
        width: 13px;
        height: 13px;
    }
}
</style>
