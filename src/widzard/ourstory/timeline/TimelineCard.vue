<template>
    <div class="timeline-content-wrapper">
        <Transition name="timeline-content" mode="out-in">
            <article :key="item.year" class="timeline-card">
                <div class="timeline-card-top">
                    <div>
                        <span class="timeline-card-number">
                            {{ String(index + 1).padStart(2, "0") }}
                        </span>

                        <span class="timeline-card-year">
                            {{ item.year }}
                        </span>
                    </div>

                    <div class="timeline-card-status">
                        <span></span>
                        Our Story
                    </div>
                </div>

                <h3 class="timeline-card-title">
                    {{ item.title }}
                </h3>

                <p class="timeline-card-text">
                    {{ item.description }}
                </p>

                <div class="timeline-card-divider"></div>

                <div class="timeline-card-footer">
                    <div class="timeline-location">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                            <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                            <circle cx="12" cy="10" r="2.5" />
                        </svg>

                        <span>
                            {{ item.location }}
                        </span>
                    </div>

                    <div class="timeline-navigation-buttons">
                        <button class="timeline-arrow" :disabled="index === 0" @click="$emit('previous')">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <path d="M19 12H5" />
                                <path d="M12 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button class="timeline-arrow" :disabled="index === total - 1" @click="$emit('next')">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                <path d="M5 12h14" />
                                <path d="M12 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </article>
        </Transition>
    </div>
</template>

<script setup lang="ts">
import type { TimelineItem } from "./timelineData";

defineProps<{
    item: TimelineItem;
    index: number;
    total: number;
}>();

defineEmits<{
    previous: [];
    next: [];
}>();
</script>

<style scoped>
.timeline-content-wrapper {
    display: flex;
    align-items: center;
    min-height: 500px;
}

.timeline-card {
    width: 100%;
    max-width: 650px;

    padding: 45px 50px;

    background: linear-gradient(145deg,
            rgba(255, 255, 255, 0.98),
            rgba(248, 245, 237, 0.96));

    border: 1px solid rgba(200, 168, 90, 0.22);

    border-radius: 3px;

    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.28);

    position: relative;
    overflow: hidden;
}

.timeline-card::before {
    content: "";

    position: absolute;

    top: 0;
    left: 0;

    width: 5px;
    height: 100%;

    background: linear-gradient(to bottom, var(--gold), rgba(200, 168, 90, 0.25));
}

.timeline-card::after {
    content: "";

    position: absolute;

    right: -90px;
    bottom: -90px;

    width: 220px;
    height: 220px;

    border: 1px solid rgba(200, 168, 90, 0.12);
    border-radius: 50%;
}

.timeline-card-top {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 28px;
}

.timeline-card-number {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.15em;

    color: #999;

    margin-right: 12px;
}

.timeline-card-year {
    font-family: var(--ff-d);
    font-size: 32px;
    color: var(--gold);
}

.timeline-card-status {
    display: flex;
    align-items: center;
    gap: 7px;

    font-size: 9px;
    font-weight: 700;

    text-transform: uppercase;
    letter-spacing: 0.15em;

    color: #999;
}

.timeline-card-status span {
    width: 6px;
    height: 6px;

    border-radius: 50%;
    background: var(--gold);
}

.timeline-card-title {
    font-family: var(--ff-d);

    font-size: 36px;
    font-weight: 400;
    line-height: 1.15;

    color: var(--text);

    margin-bottom: 20px;
}

.timeline-card-text {
    max-width: 540px;

    font-size: 14px;
    line-height: 1.9;

    color: var(--text-m);

    margin: 0;
}

.timeline-card-divider {
    width: 100%;
    height: 1px;

    margin: 32px 0 22px;

    background: linear-gradient(90deg,
            rgba(200, 168, 90, 0.5),
            rgba(200, 168, 90, 0.08),
            transparent);
}

.timeline-card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.timeline-location {
    display: flex;
    align-items: center;
    gap: 8px;

    color: #777;

    font-size: 11px;

    text-transform: uppercase;
    letter-spacing: 0.08em;
}

.timeline-location svg {
    width: 17px;
    height: 17px;
    color: var(--gold);
}

.timeline-navigation-buttons {
    display: flex;
    gap: 8px;
}

.timeline-arrow {
    width: 38px;
    height: 38px;

    border-radius: 50%;

    border: 1px solid #ded8ca;
    background: transparent;

    color: var(--text);

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    transition:
        background 0.3s ease,
        color 0.3s ease,
        border-color 0.3s ease,
        transform 0.3s ease;
}

.timeline-arrow svg {
    width: 16px;
    height: 16px;
}

.timeline-arrow:hover:not(:disabled) {
    background: var(--gold);
    border-color: var(--gold);
    color: var(--white);

    transform: translateY(-2px);
}

.timeline-arrow:disabled {
    opacity: 0.3;
    cursor: not-allowed;
}

/* TRANSITION */

.timeline-content-enter-active,
.timeline-content-leave-active {
    transition:
        opacity 0.45s ease,
        transform 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}

.timeline-content-enter-from {
    opacity: 0;
    transform: translateX(35px) scale(0.98);
}

.timeline-content-leave-to {
    opacity: 0;
    transform: translateX(-25px) scale(0.98);
}

@media (max-width: 900px) {
    .timeline-card {
        padding: 38px 35px;
    }

    .timeline-card-title {
        font-size: 31px;
    }
}

@media (max-width: 700px) {
    .timeline-content-wrapper {
        min-height: auto;
    }

    .timeline-card {
        padding: 32px 25px;
    }

    .timeline-card-year {
        font-size: 28px;
    }

    .timeline-card-title {
        font-size: 29px;
    }

    .timeline-card-text {
        font-size: 13px;
        line-height: 1.8;
    }

    .timeline-card-footer {
        align-items: flex-end;
        gap: 20px;
    }

    .timeline-location {
        max-width: 180px;
        line-height: 1.5;
    }
}

@media (max-width: 420px) {
    .timeline-card {
        padding: 28px 21px;
    }

    .timeline-card-title {
        font-size: 26px;
    }

    .timeline-card-status {
        display: none;
    }

    .timeline-card-footer {
        align-items: center;
    }

    .timeline-location {
        font-size: 9px;
    }
}
</style>
