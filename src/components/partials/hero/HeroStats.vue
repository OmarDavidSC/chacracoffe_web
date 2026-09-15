<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const communities = ref(0);
const producers = ref(0);
const cupScore = ref(83);

let observer: IntersectionObserver | null = null;
let animationStarted = false;

const animateNumber = (
    start: number,
    end: number,
    duration: number,
    callback: (value: number) => void,
) => {
    const startTime = performance.now();

    const update = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(start + (end - start) * easeOut);
        callback(currentValue);
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    };
    requestAnimationFrame(update);
};

const startStatsAnimation = () => {
    if (animationStarted) return;
    animationStarted = true;
    animateNumber(0, 50, 1800, (value) => {
        communities.value = value;
    });
    animateNumber(0, 150, 2000, (value) => {
        producers.value = value;
    });
    animateNumber(83, 90, 1600, (value) => {
        cupScore.value = value;
    });
};

onMounted(() => {
    const statsSection = document.querySelector(".stats-bar");
    if (!statsSection) return;
    observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    startStatsAnimation();
                    observer?.disconnect();
                }
            });
        },
        {
            threshold: 0.35,
        },
    );
    observer.observe(statsSection);
});

onUnmounted(() => {
    observer?.disconnect();
});
</script>
<template>
    <section class="stats-bar">
        <div class="stats-inner">
            <!-- COMMUNITIES -->
            <div class="stat-item">
                <svg class="stat-icon" viewBox="0 0 40 40">
                    <circle cx="15" cy="12" r="5" fill="none" stroke="#C8A85A" stroke-width="1.8" />
                    <circle cx="25" cy="12" r="5" fill="none" stroke="#C8A85A" stroke-width="1.8" />
                    <path d="M6 32C6 26 10 22 15 22H25C30 22 34 26 34 32" fill="none" stroke="#C8A85A"
                        stroke-width="1.8" />
                </svg>
                <span class="stat-num"> {{ communities }}+ </span>
                <span class="stat-label"> Communities </span>
            </div>
            <!-- PRODUCERS -->
            <div class="stat-item">
                <svg class="stat-icon" viewBox="0 0 40 40">
                    <rect x="14" y="8" width="12" height="16" rx="2" fill="none" stroke="#C8A85A" stroke-width="1.8" />
                    <path d="M20 24V34M14 34H26" stroke="#C8A85A" stroke-width="1.8" stroke-linecap="round" />
                </svg>
                <span class="stat-num"> {{ producers }}+ </span>
                <span class="stat-label"> Producers </span>
            </div>
            <!-- CUP SCORE -->
            <div class="stat-item">
                <svg class="stat-icon" viewBox="0 0 40 40">
                    <path d="M10 16C10 16 12 10 20 10C28 10 30 16 30 16H10Z" fill="none" stroke="#C8A85A"
                        stroke-width="1.8" />
                    <path d="M10 16C10 22 14 28 20 30C26 28 30 22 30 16" fill="none" stroke="#C8A85A"
                        stroke-width="1.8" />
                </svg>
                <span class="stat-num"> {{ cupScore }}+ </span>
                <span class="stat-label"> Cup Score </span>
            </div>
            <!-- STOCK -->
            <div class="stat-item">
                <svg class="stat-icon" viewBox="0 0 40 40">
                    <circle cx="20" cy="20" r="12" fill="none" stroke="#C8A85A" stroke-width="1.8" />
                    <path d="M8 20H32M20 8C16 12 14 16 14 20C14 24 16 28 20 32M20 8C24 12 26 16 26 20C26 24 24 28 20 32"
                        fill="none" stroke="#C8A85A" stroke-width="1.5" />
                </svg>
                <span class="stat-num stat-stock"> UK &amp; EU </span>
                <span class="stat-label"> Stock Available </span>
            </div>
        </div>
    </section>
</template>
<style>
.stats-bar {
    background: var(--green);
    padding: 36px 0;
    /* Para que la sección pueda entrar suavemente */
    overflow: hidden;
}

.stats-inner {
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 28px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

.stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding: 8px 16px;
    border-right: 1px solid rgba(255, 255, 255, 0.07);
    /* Animación de entrada */
    opacity: 1;
}

.stat-item:last-child {
    border-right: none;
}

.stat-icon {
    width: 30px;
    height: 30px;
    margin-bottom: 4px;
    transition: transform 0.5s ease;
}

.stat-item:hover .stat-icon {
    transform: translateY(-3px) scale(1.08);
}

.stat-num {
    font-family: var(--ff-d);
    font-size: 28px;
    color: var(--white);
    line-height: 1;
    min-height: 28px;
    white-space: nowrap;
}

.stat-label {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.38);
}

.stat-stock {
    font-size: 25px;
}

@media (max-width: 768px) {
    .stats-bar {
        padding: 30px 0;
    }

    .stats-inner {
        grid-template-columns: repeat(2, 1fr);
        gap: 25px 0;
        padding: 0 20px;
    }

    .stat-item {
        border-right: none;
        padding: 10px 12px;
    }

    .stat-item:nth-child(1),
    .stat-item:nth-child(2) {
        border-bottom: 1px solid rgba(255, 255, 255, 0.07);
        padding-bottom: 25px;
    }

    .stat-num {
        font-size: 25px;
    }

    .stat-stock {
        font-size: 22px;
    }
}

@media (max-width: 480px) {
    .stats-inner {
        padding: 0 12px;
    }

    .stat-icon {
        width: 27px;
        height: 27px;
    }

    .stat-num {
        font-size: 23px;
    }

    .stat-stock {
        font-size: 19px;
    }

    .stat-label {
        font-size: 8px;
        letter-spacing: 0.12em;
    }
}
</style>