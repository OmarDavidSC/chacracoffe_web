<template>
    <section class="ab-who ab-facility o_colored_level" id="ab-facility" style="background-image: none;">
        <div class="container">
            <div class="ab-who-grid">

                <div class="ab-who-img aos-in" data-aos="">
                    <div class="ab-img-main"
                        style="background-image:url('/img/about/Processing.jpg')">
                        <div class="ab-img-badge">
                            <strong>From Cherry</strong>
                            to Green Coffee
                        </div>
                    </div>
                </div>

                <div class="ab-who-text aos-in" data-aos="">
                    <span class="eyebrow gold">Our Facility</span>
                    <h2 class="section-title">One plant.<br><em>Every process.</em></h2>

                    <p>Our own processing plant in Jaén handles washing, drying and sorting for every lot we export —
                        full control
                        from cherry to green coffee.</p>
                    <p>Located at Calle Las Tres Marías, Jaén, Cajamarca (next to Prosegur), our facility tailors each
                        method to
                        bring out the best of every microlot.</p>

                    <div class="ab-process-list">
                        <div class="ab-process-item">
                            <svg height="24" viewBox="0 0 50 50" width="24">
                                <path d="M25 5C16 5 10 14 10 25C10 36 16 45 25 45C34 45 40 36 40 25C40 14 34 5 25 5Z"
                                    fill="none" stroke="#C8A85A" stroke-width="2" />
                                <path d="M18 10C23 16 25 22 25 25C25 29 22 35 18 40" fill="none" stroke="#C8A85A"
                                    stroke-linecap="round" stroke-width="2" />
                                <path d="M25 25C29 29 32 35 32 40" fill="none" stroke="#C8A85A" stroke-linecap="round"
                                    stroke-width="2" />
                            </svg> <span>Washed</span>
                        </div>
                        <div class="ab-process-item">
                            <svg height="24" viewBox="0 0 50 50" width="24">
                                <path d="M25 5C16 5 10 14 10 25C10 36 16 45 25 45C34 45 40 36 40 25C40 14 34 5 25 5Z"
                                    fill="none" stroke="#C8A85A" stroke-width="2" />
                                <path d="M18 10C23 16 25 22 25 25C25 29 22 35 18 40" fill="none" stroke="#C8A85A"
                                    stroke-linecap="round" stroke-width="2" />
                                <path d="M25 25C29 29 32 35 32 40" fill="none" stroke="#C8A85A" stroke-linecap="round"
                                    stroke-width="2" />
                            </svg> <span>Honey</span>
                        </div>
                        <div class="ab-process-item">
                            <svg height="24" viewBox="0 0 50 50" width="24">
                                <!-- Cereza de café -->
                                <path
                                    d="M25 12C18 12 13 18 13 27C13 36 18 42 25 42C32 42 37 36 37 27C37 18 32 12 25 12Z"
                                    fill="none" stroke="#C8A85A" stroke-width="2" />

                                <!-- Hojas -->
                                <path d="M25 12C25 8 29 5 35 6C33 11 30 13 25 13" fill="none" stroke="#C8A85A"
                                    stroke-linecap="round" stroke-width="2" />

                                <!-- Detalle de la cereza -->
                                <path d="M18 23C20 20 23 19 25 19C28 19 31 20 33 23" fill="none" stroke="#C8A85A"
                                    stroke-linecap="round" stroke-width="1.8" />

                                <!-- Brillo -->
                                <path d="M19 28C19 32 21 35 24 37" fill="none" stroke="#C8A85A" stroke-linecap="round"
                                    stroke-width="1.5" />
                            </svg> <span>Natural</span>
                        </div>
                    </div>

                    <div class="ab-region-contact">
                        <p><strong>Schedule a visit or processing request:</strong></p>
                        <p>📧 <a href="mailto:bryanzc@chacracoffee.com">bryanzc@chacracoffee.com</a></p>
                        <p>📞 <a href="tel:+51948512606">+51 948 512 606</a></p>
                    </div>
                </div>

            </div>
        </div>
    </section>


</template>

<style>
.ab-process-section {
    padding: 90px 0;
    background: #1a1a1a;
}

.ab-process-section .eyebrow.gold {
    color: #C8A85A;
}

.ab-process-header {
    text-align: center;
    margin-bottom: 60px;
}

.ab-process-header h2 {
    color: #fff;
    font-size: 34px;
}

.ab-process-header h2 em {
    color: #C8A85A;
    font-style: normal;
}

.ab-process-timeline {
    display: flex;
    justify-content: space-between;
    position: relative;
    max-width: 1100px;
    margin: 0 auto;
}

.ab-process-timeline::before {
    content: '';
    position: absolute;
    top: 22px;
    left: 5%;
    right: 5%;
    height: 1px;
    background: linear-gradient(to right, transparent, #C8A85A, transparent);
}

.ab-process-step {
    flex: 1;
    text-align: center;
    position: relative;
    padding: 0 8px;
}

.ab-process-num {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #1a1a1a;
    border: 2px solid #C8A85A;
    color: #C8A85A;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
    margin: 0 auto 18px;
    position: relative;
    z-index: 2;
}

.ab-process-step h4 {
    color: #fff;
    font-size: 15px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-bottom: 8px;
}

.ab-process-step p {
    color: #999;
    font-size: 13px;
    line-height: 1.6;
}

@media (max-width: 900px) {
    .ab-process-timeline {
        flex-direction: column;
        gap: 32px;
    }

    .ab-process-timeline::before {
        display: none;
    }
}

@media (max-width: 900px) {
    .ab-stats-grid {
        grid-template-columns: repeat(2, 1fr);
    }

    .ab-stat-item:nth-child(2) {
        border-right: none;
    }

    .ab-stat-item {
        border-bottom: 1px solid #e0d9c7;
    }
}
</style>