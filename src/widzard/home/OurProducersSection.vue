<template>
    <section class="producers-section" id="producers">
        <div class="container">
            <div class="producers-layout">
                <div class="prod-text">
                    <span class="eyebrow gold">Our Producers</span>
                    <h2 class="section-title">The <em>heart of<br>our coffee.</em></h2>
                    <p>We build long-term relationships with producers who share our passion for quality and
                        sustainability.</p>
                    <p>Each producer we work with is a vital part of our story, and we are proud to share their stories
                        with you.
                    </p>
                </div>

                <div class="prod-slider-wrap">
                    <button class="prod-arr" id="prevBtn" aria-label="Previous">
                        <svg viewBox="0 0 20 20" width="16" height="16">
                            <path d="M13 4L7 10L13 16" stroke="currentColor" stroke-width="2" fill="none"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <div class="prod-track-outer">
                        <div class="prod-track" id="producersSlider">
                            <div class="prod-card">
                                <div class="prod-img" style="background-image:url('../../public/img/productores/andyllanos.jpg')"></div>
                                <div class="prod-info"><strong>Andy LLanos</strong><span>Colasay</span></div>
                            </div>
                            <div class="prod-card">
                                <div class="prod-img" style="background-image:url('../../public/img/productores/lasetiopes.jpg')"></div>
                                <div class="prod-info"><strong>Las Etiopes</strong><span>El Porvenir</span></div>
                            </div>
                            <div class="prod-card">
                                <div class="prod-img" style="background-image:url('../../public/img/productores/francohuaches.jpg')"></div>
                                <div class="prod-info"><strong>Franco Huaches</strong><span>El Limon</span></div>
                            </div>
                            <div class="prod-card">
                                <div class="prod-img" style="background-image:url('../../public/img/productores/marianila.jpg')"></div>
                                <div class="prod-info"><strong>María Nila</strong><span>Huabal</span></div>
                            </div>
                        </div>
                    </div>
                    <button class="prod-arr" id="nextBtn" aria-label="Next">
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
<style>
.producers-section {
    background: var(--ivory);
    padding: 100px 0;
    overflow: hidden;
}

.producers-layout {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 56px;
    align-items: center;
}

.prod-text {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.prod-text p {
    font-size: 14px;
    color: var(--text-m);
    line-height: 1.75;
}

.prod-slider-wrap {
    display: flex;
    align-items: center;
    gap: 12px;
    overflow: hidden;
}

.prod-track-outer {
    overflow: hidden;
    flex: 1;
}

.prod-track {
    display: flex;
    gap: 16px;
    transition: transform .45s cubic-bezier(.25, .46, .45, .94);
    will-change: transform;
}

.prod-card {
    min-width: 196px;
    background: var(--white);
    border-radius: var(--r-md);
    overflow: hidden;
    box-shadow: var(--sh-sm);
    transition: transform var(--tr), box-shadow var(--tr);
    flex-shrink: 0;
}

.prod-card:hover {
    transform: translateY(-6px);
    box-shadow: var(--sh-md);
}

.prod-img {
    height: 220px;
    background-size: cover;
    background-position: center top;
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

.prod-link {
    font-size: 11px;
    font-weight: 700;
    letter-spacing: .05em;
    color: var(--gold);
    margin-top: 8px;
    transition: color var(--tr);
}

.prod-link:hover {
    color: var(--green);
}

.prod-arr {
    width: 40px;
    height: 40px;
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
}

.prod-arr:hover {
    background: var(--green);
    color: var(--white);
    border-color: var(--green);
}
</style>