<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";

const currentPage = ref(0);
const cardsPerPage = ref(3);
const totalCards = 3;

const updateCardsPerPage = () => {
    if (window.innerWidth <= 600) {
        cardsPerPage.value = 1;
    } else if (window.innerWidth <= 900) {
        cardsPerPage.value = 2;
    } else {
        cardsPerPage.value = 3;
    }
    // Evitar quedar en una página inexistente al cambiar de tamaño
    if (currentPage.value > maxPage.value) {
        currentPage.value = maxPage.value;
    }
};

const totalPages = computed(() => {
    return Math.ceil(totalCards / cardsPerPage.value);
});

const maxPage = computed(() => {
    return Math.max(0, totalPages.value - 1);
});

const trackStyle = computed(() => {
    //   const gap = 22;
    if (cardsPerPage.value === 3) {
        return {
            transform: `translateX(-${currentPage.value * 100}%)`,
        };
    }
    if (cardsPerPage.value === 2) {
        return {
            transform: `translateX(-${currentPage.value * 50}%)`,
        };
    }

    return {
        transform: `translateX(-${currentPage.value * 100}%)`,
    };
});

const nextPage = () => {
    if (currentPage.value < maxPage.value) {
        currentPage.value++;
    }
};

const previousPage = () => {
    if (currentPage.value > 0) {
        currentPage.value--;
    }
};

const goToPage = (page: number) => {
    currentPage.value = page;
};

const isFirstPage = computed(() => {
    return currentPage.value === 0;
});

const isLastPage = computed(() => {
    return currentPage.value === maxPage.value;
});

onMounted(() => {
    updateCardsPerPage();
    window.addEventListener("resize", updateCardsPerPage);
});

onUnmounted(() => {
    window.removeEventListener("resize", updateCardsPerPage);
});
</script>

<template>
    <section class="coffees-section" id="coffees">
        <div class="container">
            <!-- HEADER -->

            <div class="coffees-header">
                <div>
                    <span class="eyebrow gold"> Our Coffees </span>

                    <h2 class="section-title">
                        Exceptional coffees,<br />
                        <em>distinct origins.</em>
                    </h2>
                </div>

                <div class="coffees-header-right">
                    <p>
                        Discover the richness of Peru through our curated collection of
                        Specialty Coffees. Sourced from exceptional microclimates across the
                        country's most celebrated coffee regions, every coffee is
                        meticulously selected, processed, and quality controlled to deliver
                        an authentic expression of Peru.
                    </p>
                    <router-link to="/offer" class="btn btn-dark"> Explore All Coffees</router-link>
                </div>
            </div>
            <!-- CAROUSEL -->
            <div class="cc-outer">
                <!-- PREVIOUS -->
                <button class="cc-arr cc-arr-l" aria-label="Previous coffees" :disabled="isFirstPage"
                    @click="previousPage">
                    <svg viewBox="0 0 20 20" width="18" height="18">
                        <path d="M13 4L7 10L13 16" stroke="currentColor" stroke-width="2" fill="none"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                <!-- VIEWPORT -->
                <div class="cc-viewport">
                    <div class="cc-track" :style="trackStyle">
                        <!-- CARD 1 -->
                        <article class="cc-card">
                            <div class="cc-img"
                                style="background-image: url(&quot;/img/insidetheplant/Regional.png&quot;);">
                                <span class="cc-badge"> Regional Blends </span>
                            </div>
                            <div class="cc-body">
                                <div class="cc-tags">
                                    <span class="cc-tag"> Washed </span>
                                    <span class="cc-tag"> Natural </span>
                                    <span class="cc-tag gold-tag"> 83-86 pts </span>
                                </div>
                                <h3 class="cc-title">Regional Blends</h3>
                                <p class="cc-desc">
                                    Balanced and consistent profiles from different origins. Ideal
                                    for espresso and filter roasting.
                                </p>

                                <router-link to="/offer" class="cc-link">
                                    View Offer List
                                    <svg viewBox="0 0 16 16" width="13" height="13">
                                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"
                                            fill="none" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </router-link>
                            </div>
                        </article>
                        <!-- CARD 2 -->
                        <article class="cc-card cc-featured">
                            <div class="cc-img"
                                style="background-image: url(&quot;/img/insidetheplant/Mircrolotes.jpg&quot;);">
                                <span class="cc-badge"> Microlots </span>
                            </div>
                            <div class="cc-body">
                                <div class="cc-tags">
                                    <span class="cc-tag"> Washed </span>
                                    <span class="cc-tag"> Natural </span>
                                    <span class="cc-tag gold-tag"> 86-90+ pts </span>
                                </div>
                                <h3 class="cc-title">Microlots</h3>
                                <p class="cc-desc">
                                    Unique and exclusive lots with exceptional cup scores,
                                    traceable to single farms in Jaén, San Ignacio and Cutervo.
                                </p>
                                <router-link to="/offer" class="cc-link">
                                    View Offer List
                                    <svg viewBox="0 0 16 16" width="13" height="13">
                                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"
                                            fill="none" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </router-link>
                            </div>
                        </article>
                        <!-- CARD 3 -->
                        <article class="cc-card">
                            <div class="cc-img"
                                style="background-image: url(&quot;/img/insidetheplant/Experimental.jpg&quot;);">
                                <span class="cc-badge"> Experimental </span>
                            </div>
                            <div class="cc-body">
                                <div class="cc-tags">
                                    <span class="cc-tag"> Anaerobic </span>
                                    <span class="cc-tag"> Fermentation </span>
                                    <span class="cc-tag gold-tag"> 86-90+ pts </span>
                                </div>
                                <h3 class="cc-title">Experimental Lots</h3>
                                <p class="cc-desc">
                                    Special fermentations and innovative processes that push the
                                    boundaries of flavour and complexity.
                                </p>
                                <router-link to="/offer" class="cc-link">
                                    View Offer List
                                    <svg viewBox="0 0 16 16" width="13" height="13">
                                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"
                                            fill="none" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                </router-link>
                            </div>
                        </article>
                    </div>
                </div>
                <!-- NEXT -->
                <button class="cc-arr cc-arr-r" aria-label="Next coffees" :disabled="isLastPage" @click="nextPage">
                    <svg viewBox="0 0 20 20" width="18" height="18">
                        <path d="M7 4L13 10L7 16" stroke="currentColor" stroke-width="2" fill="none"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
            <!-- PAGINATION -->
            <div class="cc-dots">
                <button v-for="page in totalPages" :key="page" class="cc-dot"
                    :class="{ active: currentPage === page - 1 }" :aria-label="`Go to page ${page}`"
                    @click="goToPage(page - 1)"></button>
            </div>
        </div>
    </section>
</template>

<style>
.coffees-section {
    background: var(--ivory);
    padding: 100px 0 80px;
}

.coffees-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: start;
    margin-bottom: 52px;
}

.coffees-header-right {
    display: flex;
    flex-direction: column;
    gap: 22px;
    padding-top: 6px;
}

.coffees-header-right p {
    font-size: 14px;
    color: var(--text-m);
    line-height: 1.8;
}

.cc-outer {
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
}

.cc-viewport {
    flex: 1;
    overflow: hidden;
}

.cc-track {
    display: flex;
    gap: 22px;
    transition: transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    will-change: transform;
}

.cc-card {
    flex: 0 0 calc((100% - 44px) / 3);
    min-width: 0;
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

.cc-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--sh-md);
}

.cc-featured {
    box-shadow: 0 4px 24px rgba(200, 168, 90, 0.18);
}

.cc-img {
    height: 240px;
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
}

.cc-img::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to top,
            rgba(20, 40, 26, 0.55) 0%,
            transparent 55%);
    transition: opacity var(--tr);
}

.cc-card:hover .cc-img::after {
    opacity: 0.78;
}

.cc-badge {
    position: absolute;
    top: 14px;
    left: 14px;
    z-index: 2;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    background: rgba(200, 168, 90, 0.92);
    color: #1a3026;
    padding: 4px 11px;
    border-radius: 20px;
}

.cc-body {
    padding: 22px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
}

.cc-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
}

.cc-tag {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 3px 9px;
    border-radius: 20px;
    background: var(--ivory);
    color: var(--text-m);
    border: 1px solid var(--ivory-d);
}

.cc-tag.gold-tag {
    background: rgba(200, 168, 90, 0.12);
    color: var(--gold);
    border-color: rgba(200, 168, 90, 0.28);
}

.cc-title {
    font-family: var(--ff-d);
    font-size: 20px;
    font-weight: 400;
    color: var(--text);
    line-height: 1.2;
}

.cc-desc {
    font-size: 13px;
    color: var(--text-m);
    line-height: 1.7;
    flex: 1;
}

.cc-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--green);
    margin-top: 4px;
    transition:
        gap var(--tr),
        color var(--tr);
}

.cc-link:hover {
    color: var(--gold);
    gap: 10px;
}

.cc-arr {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 1.5px solid var(--ivory-d);
    background: var(--white);
    color: var(--text);
    cursor: pointer;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all var(--tr);
    box-shadow: var(--sh-sm);
}

.cc-arr:hover:not(:disabled) {
    background: var(--green);
    color: var(--white);
    border-color: var(--green);
    transform: scale(1.05);
}

.cc-arr:disabled {
    opacity: 0.3;
    cursor: default;
}

.cc-dots {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 9px;
    margin-top: 28px;
}

.cc-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: none;
    background: rgba(26, 48, 38, 0.2);
    cursor: pointer;
    padding: 0;
    transition: all 0.3s ease;
}

.cc-dot:hover {
    background: var(--gold);
}

.cc-dot.active {
    background: var(--green);
    transform: scale(1.4);
}

@media (max-width: 900px) {
    .coffees-section {
        padding: 80px 0 70px;
    }

    .coffees-header {
        grid-template-columns: 1fr;
        gap: 25px;
        margin-bottom: 40px;
    }

    .cc-card {
        flex: 0 0 calc((100% - 22px) / 2);
    }
}

@media (max-width: 600px) {
    .coffees-section {
        padding: 70px 0 60px;
    }

    .coffees-header {
        margin-bottom: 32px;
    }

    .coffees-header-right p {
        font-size: 13px;
    }

    .cc-outer {
        gap: 7px;
    }

    .cc-card {
        flex: 0 0 100%;
    }

    .cc-img {
        height: 220px;
    }

    .cc-body {
        padding: 20px;
    }

    .cc-title {
        font-size: 21px;
    }

    .cc-desc {
        font-size: 13px;
    }

    .cc-arr {
        width: 36px;

        height: 36px;
    }

    .cc-arr svg {
        width: 16px;

        height: 16px;
    }

    .cc-dots {
        margin-top: 22px;
    }
}

@media (max-width: 420px) {
    .cc-outer {
        gap: 5px;
    }

    .cc-arr {
        width: 32px;

        height: 32px;
    }

    .cc-img {
        height: 200px;
    }
}
</style>
