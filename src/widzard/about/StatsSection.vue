<template>
    <section ref="statsSection" class="ab-stats-section">
        <div class="container">
            <div class="ab-stats-grid">
                <div v-for="(stat, index) in stats" :key="stat.id" class="ab-stat-item" data-aos="fade-up"
                    data-aos-duration="800" :data-aos-delay="index * 120" data-aos-once="true">
                    <div class="ab-stat-number">
                        {{ stat.current }}<span>{{ stat.suffix }}</span>
                    </div>
                    <div class="ab-stat-label">
                        {{ stat.label }}
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

interface Stat {
    id: number;
    value: number;
    suffix: string;
    label: string;
    current: number;
}

const stats = ref<Stat[]>([
    {
        id: 1,
        value: 3,
        suffix: "+",
        label: "Processing & Preparation Methods",
        current: 0,
    },
    {
        id: 2,
        value: 100,
        suffix: "%",
        label: "Lot Traceability",
        current: 0,
    },
    {
        id: 3,
        value: 10,
        suffix: "+",
        label: "Partner Producers",
        current: 0,
    },
    {
        id: 4,
        value: 1,
        suffix: "",
        label: "Facility, Full Quality Control",
        current: 0,
    },
]);

const statsSection = ref<HTMLElement | null>(null);

let observer: IntersectionObserver | null = null;
let animationStarted = false;

const animateNumber = (stat: Stat, duration = 1800) => {
    const start = 0;
    const end = stat.value;
    const startTime = performance.now();

    const update = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);

        stat.current = Math.floor(start + (end - start) * easeOut);
        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            stat.current = end;
        }
    };
    requestAnimationFrame(update);
};

const startCounters = () => {
    if (animationStarted) return;
    animationStarted = true;
    stats.value.forEach((stat, index) => {
        setTimeout(() => {
            animateNumber(stat, 1800);
        }, index * 150);
    });
};

onMounted(() => {
    if (!statsSection.value) return;
    observer = new IntersectionObserver(
        (entries) => {
            const entry = entries[0];
            if (entry.isIntersecting) {
                startCounters();
                observer?.disconnect();
            }
        },
        { threshold: 0.35, },
    );
    observer.observe(statsSection.value);
});

onUnmounted(() => {
    observer?.disconnect();
});
</script>

<style>
.ab-stats-section {
    padding: 80px 0;
    background: #f7f4ee;
    overflow: hidden;
}

.ab-stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    text-align: center;
}

.ab-stat-item {
    padding: 30px 16px;
    border-right: 1px solid #e0d9c7;
    position: relative;
}

.ab-stat-item:last-child {
    border-right: none;
}

.ab-stat-number {
    font-size: 44px;
    font-weight: 700;
    color: #1a1a1a;
    line-height: 1;
    margin-bottom: 10px;
    font-variant-numeric: tabular-nums;
    min-height: 44px;
}

.ab-stat-number span {
    color: #c8a85a;
}

.ab-stat-label {
    font-size: 13px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #666;
    line-height: 1.5;
}

.ab-stat-item {
    transition:
        transform 0.4s ease,
        border-color 0.4s ease;
}

.ab-stat-item:hover {
    transform: translateY(-6px);
}

.ab-stat-item:hover .ab-stat-number {
    color: #c8a85a;
}

.ab-stat-item:hover .ab-stat-number span {
    color: #1a1a1a;
}

@media (max-width: 900px) {
    .ab-stats-section {
        padding: 70px 30px;
    }

    .ab-stats-grid {
        grid-template-columns: repeat(2, 1fr);
        row-gap: 20px;
    }

    .ab-stat-item:nth-child(2) {
        border-right: none;
    }

    .ab-stat-item:nth-child(3),
    .ab-stat-item:nth-child(4) {
        border-top: 1px solid #e0d9c7;
        padding-top: 35px;
    }
}

@media (max-width: 600px) {
    .ab-stats-section {
        padding: 60px 20px;
    }

    .ab-stats-grid {
        grid-template-columns: 1fr;
        gap: 0;
    }

    .ab-stat-item,
    .ab-stat-item:nth-child(2),
    .ab-stat-item:nth-child(3),
    .ab-stat-item:nth-child(4) {
        border-right: none;
        border-top: none;
        border-bottom: 1px solid #e0d9c7;
        padding: 28px 16px;
    }

    .ab-stat-item:last-child {
        border-bottom: none;
    }

    .ab-stat-number {
        font-size: 40px;
    }

    .ab-stat-label {
        font-size: 12px;
    }
}

@media (prefers-reduced-motion: reduce) {
    .ab-stat-item {
        transition: none;
    }
}
</style>
