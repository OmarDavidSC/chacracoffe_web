<script setup lang="ts">
import { onMounted } from "vue";

onMounted(() => {
    const journeySection = document.querySelector(".journey-section");

    if (journeySection) {
        const imgs =
            journeySection.querySelectorAll<HTMLElement>(".jstep-img");

        imgs.forEach((img, i) => {
            Object.assign(img.style, {
                opacity: "0",
                transform: "scale(.95)",
                transition: `opacity .5s ease ${i * 0.09}s, transform .5s ease ${i * 0.09}s`,
            });
        });

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    imgs.forEach((img) => {
                        img.style.opacity = "1";
                        img.style.transform = "scale(1)";
                    });

                    observer.disconnect();
                }
            },
            {
                threshold: 0.2,
            }
        );

        observer.observe(journeySection);
    }
});
</script>

<template>
    <section class="journey-section">
        <div class="container">

            <!-- HEADER -->
            <div class="journey-header">
                <span class="eyebrow gold">Coffee Journey</span>

                <h2 class="section-title">
                    From <em>our farms</em><br />
                    to your cup.
                </h2>
            </div>

            <!-- JOURNEY -->
            <div class="journey-grid">

                <!-- 01 -->
                <div class="jstep">
                    <div class="jstep-img" style="
                            background-image: url('../../public/img/journey/Fondo_1.jpg');
                        "></div>

                    <div class="jstep-lbl">
                        <span class="jstep-n">01</span>
                        <span class="jstep-t">Cultivation</span>
                    </div>
                </div>

                <!-- 02 -->
                <div class="jstep">
                    <div class="jstep-img" style="
                            background-image: url('../../public/img/journey/Harvest.jpg');
                        "></div>

                    <div class="jstep-lbl">
                        <span class="jstep-n">02</span>
                        <span class="jstep-t">Harvest</span>
                    </div>
                </div>

                <!-- 03 -->
                <div class="jstep">
                    <div class="jstep-img" style="
                            background-image: url('../../public/img/journey/Processing.jpg');
                        "></div>

                    <div class="jstep-lbl">
                        <span class="jstep-n">03</span>
                        <span class="jstep-t">Processing</span>
                    </div>
                </div>

                <!-- 04 -->
                <div class="jstep">
                    <div class="jstep-img" style="
                            background-image: url('https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80');
                        "></div>

                    <div class="jstep-lbl">
                        <span class="jstep-n">04</span>
                        <span class="jstep-t">Cupping</span>
                    </div>
                </div>

                <!-- 05 -->
                <div class="jstep">
                    <div class="jstep-img" style="
                            background-image: url('../../public/img/journey/Export.jpg');
                        "></div>

                    <div class="jstep-lbl">
                        <span class="jstep-n">05</span>
                        <span class="jstep-t">Export</span>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>

<style>
.journey-section {
    background: var(--ivory-d);
    padding: 80px 0;
}

.journey-header {
    margin-bottom: 32px;
}

/* =========================
   GRID
========================= */

.journey-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 8px;
    border-radius: var(--r-md);
    overflow: hidden;
}

/* =========================
   CARD
========================= */

.jstep {
    position: relative;
    overflow: hidden;
    border-radius: 4px;

    /* Shadow inicial muy suave */
    box-shadow: 0 4px 14px rgba(20, 40, 26, 0.06);

    transition:
        transform 0.35s ease,
        box-shadow 0.35s ease;
}

/* =========================
   IMAGE
========================= */

.jstep-img {
    height: 220px;

    background-size: cover;
    background-position: center;

    transition:
        transform 0.6s ease,
        filter 0.6s ease;
}

/* =========================
   HOVER
========================= */

.jstep:hover {
    transform: translateY(-3px);

    /* Shadow suave */
    box-shadow: 0 8px 22px rgba(20, 40, 26, 0.12);
}

.jstep:hover .jstep-img {
    transform: scale(1.04);
    filter: brightness(1.03);
}

/* =========================
   SUBTLE OVERLAY
========================= */

.jstep::after {
    content: "";

    position: absolute;
    inset: 0;

    background: linear-gradient(to top,
            rgba(20, 40, 26, 0.08),
            transparent 55%);

    opacity: 0;

    transition: opacity 0.4s ease;

    pointer-events: none;
}

.jstep:hover::after {
    opacity: 1;
}

/* =========================
   LABEL
========================= */

.jstep-lbl {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;

    padding: 14px;

    background: linear-gradient(to top,
            rgba(20, 40, 26, 0.82),
            transparent);

    display: flex;
    align-items: center;
    gap: 8px;

    z-index: 2;
}

.jstep-n {
    font-size: 10px;
    font-weight: 700;
    color: var(--gold);
    letter-spacing: 0.1em;
}

.jstep-t {
    font-size: 11px;
    font-weight: 600;
    color: var(--white);
    letter-spacing: 0.08em;
    text-transform: uppercase;
}

/* =========================
   TABLET
========================= */

@media (max-width: 900px) {
    .journey-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

/* =========================
   MOBILE
========================= */

@media (max-width: 600px) {
    .journey-section {
        padding: 65px 0;
    }

    .journey-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 7px;
    }

    .jstep-img {
        height: 200px;
    }
}

/* =========================
   SMALL MOBILE
========================= */

@media (max-width: 420px) {
    .journey-grid {
        grid-template-columns: 1fr;
    }

    .jstep-img {
        height: 230px;
    }
}

/* =========================
   REDUCED MOTION
========================= */

@media (prefers-reduced-motion: reduce) {

    .jstep,
    .jstep-img,
    .jstep::after {
        transition: none;
    }
}
</style>