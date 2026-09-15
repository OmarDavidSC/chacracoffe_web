<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

interface Producer {
    name: string;
    location: string;
    image: string;
}

const producers: Producer[] = [
    {
        name: "Andy Llanos",
        location: "Colasay",
        image: "/img/productores/andyllanos.jpg",
    },
    {
        name: "Las Etiopes",
        location: "El Porvenir",
        image: "/img/productores/lasetiopes.jpg",
    },
    {
        name: "Franco Huaches",
        location: "El Limon",
        image: "/img/productores/francohuaches.jpg",
    },
    {
        name: "María Nila",
        location: "Huabal",
        image: "/img/productores/marianila.jpg",
    },
];

const currentIndex = ref(0);
let autoPlay: ReturnType<typeof setInterval> | null = null;

const nextSlide = () => {
    currentIndex.value++;
    if (currentIndex.value >= producers.length) {
        currentIndex.value = 0;
    }
};

const previousSlide = () => {
    currentIndex.value--;
    if (currentIndex.value < 0) {
        currentIndex.value = producers.length - 1;
    }
};

const startAutoPlay = () => {
    stopAutoPlay();

    autoPlay = setInterval(() => {
        nextSlide();
    }, 3000);
};

const stopAutoPlay = () => {
    if (autoPlay) {
        clearInterval(autoPlay);
        autoPlay = null;
    }
};

const handleNext = () => {
    nextSlide();
    startAutoPlay();
};

const handlePrevious = () => {
    previousSlide();
    startAutoPlay();
};


onMounted(() => {
    startAutoPlay();
});

onUnmounted(() => {
    stopAutoPlay();
});
</script>


<template>
    <section class="producers-section" id="producers">
        <div class="container">
            <div class="producers-layout">
                <div class="prod-text">
                    <span class="eyebrow gold"> Our Producers </span>
                    <h2 class="section-title">
                        The
                        <em> heart of<br> our coffee. </em>
                    </h2>
                    <p>
                        We build long-term relationships with producers
                        who share our passion for quality and sustainability.
                    </p>
                    <p>
                        Each producer we work with is a vital part of our
                        story, and we are proud to share their stories
                        with you.
                    </p>
                </div>
                <div class="prod-slider-wrap" @mouseenter="stopAutoPlay" @mouseleave="startAutoPlay">
                    <button class="prod-arr" type="button" aria-label="Previous" @click="handlePrevious">
                        <svg viewBox="0 0 20 20" width="16" height="16">
                            <path d="M13 4L7 10L13 16" stroke="currentColor" stroke-width="2" fill="none"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <div class="prod-track-outer">
                        <div class="prod-track" :style="{
                            transform: `translateX(calc(-${currentIndex} * (196px + 16px)))`}">
                            <div v-for="producer in producers" :key="producer.name" class="prod-card">
                                <div class="prod-img" :style="{backgroundImage:`url('${producer.image}')`}"></div>
                                <div class="prod-info">
                                    <strong> {{ producer.name }} </strong>
                                    <span> {{ producer.location }} </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button class="prod-arr" type="button" aria-label="Next" @click="handleNext">
                        <svg viewBox="0 0 20 20" width="16" height="16">
                            <path d="M7 4L13 10L7 16" stroke="currentColor" stroke-width="2" fill="none"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.producers-section {
    background: var(--ivory);
    padding: 100px 0;
    overflow: hidden;
}

.producers-layout {
    display: grid;

    grid-template-columns:
        300px 1fr;

    gap: 56px;

    align-items: center;
}

.prod-text {
    display: flex;

    flex-direction: column;

    gap: 20px;
}

.prod-text p {
    margin: 0;

    font-size: 14px;

    color: var(--text-m);

    line-height: 1.75;
}


.prod-slider-wrap {
    display: flex;

    align-items: center;

    gap: 12px;

    width: 100%;

    overflow: hidden;
}

.prod-track-outer {
    flex: 1;

    min-width: 0;

    overflow: hidden;
}

.prod-track {
    display: flex;

    gap: 16px;

    transition:
        transform 0.7s cubic-bezier(0.25,
            0.46,
            0.45,
            0.94);

    will-change: transform;
}

.prod-card {
    width: 196px;

    min-width: 196px;

    flex: 0 0 196px;

    background: var(--white);

    border-radius: var(--r-md);

    overflow: hidden;

    box-shadow: var(--sh-sm);

    transition:
        transform var(--tr),
        box-shadow var(--tr);
}

.prod-card:hover {
    transform: translateY(-6px);

    box-shadow: var(--sh-md);
}

.prod-img {
    width: 100%;

    height: 220px;

    background-size: cover;

    background-position: center top;

    background-repeat: no-repeat;
}

.prod-info {
    padding: 14px 16px;

    display: flex;

    flex-direction: column;

    gap: 3px;
}

.prod-info strong {
    font-size: 14px;

    font-weight: 600;

    color: var(--text);
}

.prod-info span {
    font-size: 12px;

    color: var(--text-l);
}

.prod-arr {
    width: 40px;
    height: 40px;

    border-radius: 50%;

    border:
        1.5px solid var(--ivory-d);

    background: var(--white);

    color: var(--text);

    cursor: pointer;

    flex-shrink: 0;

    display: flex;

    align-items: center;

    justify-content: center;

    transition:
        background var(--tr),
        color var(--tr),
        border-color var(--tr),
        transform var(--tr);
}

.prod-arr:hover {
    background: var(--green);

    color: var(--white);

    border-color: var(--green);

    transform: scale(1.05);
}

.prod-arr:active {
    transform: scale(0.95);
}

@media (max-width: 1000px) {

    .producers-layout {
        grid-template-columns:
            250px 1fr;

        gap: 35px;
    }

    .prod-card {
        width: 180px;

        min-width: 180px;

        flex-basis: 180px;
    }

    .prod-img {
        height: 210px;
    }

    .prod-track {
        gap: 14px;
    }

}

@media (max-width: 700px) {

    .producers-section {
        padding: 75px 0;
    }

    .producers-layout {
        display: flex;

        flex-direction: column;

        align-items: stretch;

        gap: 40px;
    }

    .prod-text {
        max-width: 520px;
    }

    .prod-slider-wrap {
        gap: 8px;
    }

    .prod-card {
        width: 180px;

        min-width: 180px;

        flex-basis: 180px;
    }

    .prod-img {
        height: 210px;
    }

    .prod-arr {
        width: 36px;
        height: 36px;
    }

}

@media (max-width: 450px) {

    .prod-card {
        width: 160px;

        min-width: 160px;

        flex-basis: 160px;
    }

    .prod-img {
        height: 190px;
    }

    .prod-info {
        padding:
            12px 13px;
    }

    .prod-info strong {
        font-size: 13px;
    }

    .prod-info span {
        font-size: 11px;
    }

}
</style>