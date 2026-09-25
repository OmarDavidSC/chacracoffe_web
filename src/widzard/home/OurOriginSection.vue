<script setup lang="ts">
import { computed, ref } from 'vue';

const peruMap = '/img/map/mapa-peru.png';
const piuraMask = '/img/map/region-piura.png';
const cajamarcaMask = '/img/map/region-cajamarca.png';
const cuscoMask = '/img/map/region-cusco.png';
const amazonasMask = '/img/map/region-amazonas.png';

const REGIONS = {
    cajamarca: {
        color: '#C8A85A', name: 'Cajamarca', region: 'Central Valley — Inter-Andean',
        alt: '1,300 – 2,000 masl', varieties: ['Typica', 'Bourbon', 'Caturra', 'Geisha', 'Catimor'],
        cup: ['Caramel', 'Chocolate', 'Red Fruits', 'Citrus'],
    },
    piura: {
        color: '#5faa84', name: 'Piura', region: 'Northern Coast — Preandean Valley',
        alt: '1,200 – 1,800 masl', varieties: ['Typica', 'Bourbon', 'Caturra'],
        cup: ['Dark Chocolate', 'Jasmine', 'Dried Fruits', 'Caramel'],
    },
    cusco: {
        color: '#8B6FC8', name: 'Cusco', region: 'Southern Andes — Cloud Forest',
        alt: '1,400 – 1,900 masl', varieties: ['Typica', 'Bourbon', 'Caturra', 'Catimor'],
        cup: ['Citric Acidity', 'Stone Fruit', 'Brown Sugar', 'Nuts'],
    },
    amazonas: {
        color: '#E87B4A', name: 'Amazonas', region: 'Northern Jungle — Inter-Andean',
        alt: '1,000 – 1,800 masl', varieties: ['Typica', 'Caturra', 'Catimor', 'Pache'],
        cup: ['Tropical Fruits', 'Honey', 'Floral', 'Citrus'],
    },
} as const;

type RegionKey = keyof typeof REGIONS;
const selectedZone = ref<RegionKey>('cajamarca');
const selectedOrigin = computed(() => REGIONS[selectedZone.value]);

const regionMasks: Record<RegionKey, string> = {
    piura: piuraMask,
    cajamarca: cajamarcaMask,
    cusco: cuscoMask,
    amazonas: amazonasMask,
};

function originsSelect(key: RegionKey) {
    selectedZone.value = key;
}
</script>

<template>
    <section class="origins-section" id="about">
        <div class="ori-map-wrapper">

            <!-- IZQUIERDA: texto -->
            <div class="ori-intro">
                <div class="ori-intro-eyebrow">OUR ORIGINS</div>

                <h2 class="ori-intro-title">
                    Rich<br />
                    diversity,<br />
                    one<br />
                    exceptional<br />
                    <em>cup.</em>
                </h2>

                <p class="ori-intro-desc">
                    From Peru's diverse coffee-growing landscapes, each origin
                    offers a unique expression of flavor, aroma, and character.
                    Explore the journey behind every cup.
                </p>

                <RouterLink to="/offer" class="ori-coffee-button">
                    <span>EXPLORE OUR COFFEES</span>
                </RouterLink>
            </div>

            <!-- CENTRO: mapa -->
            <div class="ori-map-column">
                <div class="peru-map-wrap">
                    <img class="peru-map" :src="peruMap" alt="Mapa del Perú" />

                    <img
                        v-for="(mask, key) in regionMasks"
                        :key="key"
                        class="peru-region-mask"
                        :class="{ active: selectedZone === key }"
                        :src="mask"
                        :alt="`Región ${REGIONS[key].name}`"
                    />
                </div>
            </div>

            <!-- DERECHA: regiones y tarjeta -->
            <div class="ori-side">
                <div class="ori-region-list">
                    <button
                        v-for="(_, key) in REGIONS"
                        :key="key"
                        class="ori-region-tab"
                        :class="{ active: selectedZone === key }"
                        type="button"
                        @click="originsSelect(key)"
                    >
                        <span class="ori-tab-dot" :style="{ background: REGIONS[key].color }"></span>
                        <span class="ori-tab-info">
                            <span class="ori-tab-name">{{ REGIONS[key].name }}</span>
                            <span class="ori-tab-alt">{{ REGIONS[key].alt }}</span>
                        </span>
                        <span class="ori-tab-arr">›</span>
                    </button>
                </div>

                <div class="ori-info-card">
                    <div class="ori-card-region-name">{{ selectedOrigin.name }}</div>

                    <div class="ori-card-row">
                        <span class="ori-card-key">Region</span>
                        <span class="ori-card-val">{{ selectedOrigin.region }}</span>
                    </div>

                    <div class="ori-card-row">
                        <span class="ori-card-key">Altitude</span>
                        <span class="ori-card-val">{{ selectedOrigin.alt }}</span>
                    </div>

                    <div class="ori-card-row">
                        <span class="ori-card-key">Varieties</span>
                        <span class="ori-card-tags">
                            <span v-for="variety in selectedOrigin.varieties" :key="variety" class="ori-tag ori-tag-v">
                                {{ variety }}
                            </span>
                        </span>
                    </div>

                    <div class="ori-card-row">
                        <span class="ori-card-key">Cup Profile</span>
                        <span class="ori-card-tags">
                            <span v-for="cup in selectedOrigin.cup" :key="cup" class="ori-tag ori-tag-c">
                                {{ cup }}
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.origins-section {
    width: 100%;
    min-height: 100vh;
    padding: 32px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: #071410;
}

.ori-map-wrapper {
    position: relative;
    display: grid;
    grid-template-columns: minmax(250px, .9fr) minmax(300px, 1fr) minmax(280px, .95fr);
    gap: 26px;
    align-items: center;
    width: 100%;
    max-width: 1240px;
    padding: 42px 44px;
    overflow: hidden;
    border-radius: 20px;
    background: #0e2418;
    font-family: Inter, sans-serif;
}

.ori-map-wrapper::before {
    content: '';
    position: absolute;
    top: -70px;
    right: -70px;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(200, 168, 90, .06), transparent 70%);
    pointer-events: none;
}

/* IZQUIERDA */
.ori-intro {
    position: relative;
    z-index: 1;
    min-width: 0;
}

.ori-intro-eyebrow {
    margin-bottom: 16px;
    color: #c8a85a;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: .24em;
    text-transform: uppercase;
}

.ori-intro-title {
    margin: 0 0 20px;
    color: #fff;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: clamp(40px, 4vw, 56px);
    font-weight: 400;
    line-height: .96;
    letter-spacing: -.025em;
}

.ori-intro-title em {
    color: #c8a85a;
    font-style: normal;
}

.ori-intro-desc {
    max-width: 310px;
    margin: 0 0 25px;
    color: rgba(255, 255, 255, .45);
    font-size: 12px;
    line-height: 1.72;
}

.ori-coffee-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
    min-width: 190px;
    padding: 11px 16px;
    border: 1px solid rgba(200, 168, 90, .42);
    border-radius: 7px;
    background: rgba(200, 168, 90, .08);
    color: #c8a85a;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: .16em;
    text-decoration: none;
    transition: .22s ease;
}

.ori-coffee-button:hover {
    border-color: rgba(200, 168, 90, .7);
    background: rgba(200, 168, 90, .15);
    transform: translateY(-1px);
}

.ori-button-arrow {
    font-size: 15px;
    line-height: 1;
    transition: transform .22s ease;
}

.ori-coffee-button:hover .ori-button-arrow {
    transform: translateX(3px);
}

/* CENTRO: MAPA */
.ori-map-column {
    position: relative;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 0;
}

.peru-map-wrap {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-width: 0;
}

.peru-map {
    display: block;
    width: 100%;
    max-width: 410px;
    height: auto;
    mix-blend-mode: screen;
    opacity: .28;
}

.peru-region-mask {
    position: absolute;
    width: 100%;
    max-width: 410px;
    height: auto;
    opacity: 0;
    pointer-events: none;
    transition: opacity .28s ease;
}

.peru-region-mask.active {
    opacity: 1;
    filter: drop-shadow(0 0 12px rgba(255, 255, 255, .16));
}

/* DERECHA */
.ori-side {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    min-width: 0;
    align-self: start;
}

.ori-region-list {
    display: flex;
    flex-direction: column;
    gap: 4px;
    margin-bottom: 17px;
}

.ori-region-tab {
    display: flex;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 10px 13px;
    border: 1px solid transparent;
    border-radius: 10px;
    background: transparent;
    color: inherit;
    font: inherit;
    text-align: left;
    cursor: pointer;
    transition: .22s ease;
}

.ori-region-tab:hover {
    border-color: rgba(255, 255, 255, .08);
    background: rgba(255, 255, 255, .05);
}

.ori-region-tab.active {
    border-color: rgba(200, 168, 90, .22);
    background: rgba(200, 168, 90, .1);
}

.ori-tab-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    flex: 0 0 auto;
}

.ori-region-tab.active .ori-tab-dot {
    box-shadow: 0 0 0 3px rgba(200, 168, 90, .2);
}

.ori-tab-info {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: 1px;
}

.ori-tab-name {
    color: rgba(255, 255, 255, .5);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: .14em;
    text-transform: uppercase;
}

.ori-tab-alt {
    color: rgba(255, 255, 255, .24);
    font-size: 10px;
}

.ori-region-tab.active .ori-tab-name { color: #c8a85a; }
.ori-region-tab.active .ori-tab-alt { color: rgba(200, 168, 90, .55); }

.ori-tab-arr {
    color: rgba(255, 255, 255, .14);
    font-size: 14px;
    transition: .22s ease;
}

.ori-region-tab.active .ori-tab-arr {
    color: #c8a85a;
    transform: translateX(3px);
}

.ori-info-card {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 16px 18px;
    border: 1px solid rgba(255, 255, 255, .08);
    border-radius: 12px;
    background: rgba(255, 255, 255, .04);
}

.ori-card-region-name {
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, .07);
    color: #fff;
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 18px;
}

.ori-card-row {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.ori-card-key {
    color: rgba(255, 255, 255, .28);
    font-size: 8px;
    font-weight: 700;
    letter-spacing: .18em;
    text-transform: uppercase;
}

.ori-card-val {
    color: rgba(255, 255, 255, .68);
    font-size: 12px;
}

.ori-card-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: 2px;
}

.ori-tag {
    padding: 3px 9px;
    border-radius: 20px;
    font-size: 9px;
    font-weight: 600;
}

.ori-tag-v {
    border: 1px solid rgba(26, 80, 48, .6);
    background: rgba(26, 80, 48, .5);
    color: rgba(180, 230, 200, .7);
}

.ori-tag-c {
    border: 1px solid rgba(200, 168, 90, .2);
    background: rgba(200, 168, 90, .1);
    color: rgba(200, 168, 90, .8);
}

@media (max-width: 1050px) {
    .ori-map-wrapper {
        grid-template-columns: minmax(220px, .85fr) minmax(250px, .9fr) minmax(250px, .9fr);
        gap: 18px;
        padding: 34px 28px;
    }

    .ori-intro-title { font-size: 42px; }
    .peru-map, .peru-region-mask { max-width: 340px; }
}

@media (max-width: 760px) {
    .origins-section {
        align-items: flex-start;
        padding: 20px 12px;
    }

    .ori-map-wrapper {
        grid-template-columns: 1fr;
        gap: 30px;
        padding: 30px 20px 26px;
    }

    .ori-intro { order: 1; }
    .ori-map-column { order: 2; }
    .ori-side { order: 3; }

    .ori-intro-title { font-size: 44px; }
    .ori-intro-desc { max-width: 390px; }
    .peru-map, .peru-region-mask { max-width: 300px; }
}
</style>
