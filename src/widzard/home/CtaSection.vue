<template>
    <section class="cta-section">
        <div class="cta-bg"></div>
        <div class="cta-inner">
            <div class="cta-pill">Looking for Specialty Coffee?</div>
            <h2 class="cta-title">We would love to<br>work with you.</h2>
            <p class="cta-sub">Request our current offer list or get in touch — we ship to UK, Europe and beyond.</p>
            <div class="cta-btns">
                <router-link to="/contact" class="btn btn-ghost"> Contact Us </router-link>
            </div>
        </div>
    </section>
</template>
<style>
.cta-section {
    position: relative;
    padding: 120px 0;
    overflow: hidden;
}

.cta-bg {
    position: absolute;
    inset: 0;
    background-image: url('../../public/img/journey/Fondo_1.jpg');
    background-size: cover;
    background-position: center;
}

.cta-bg::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to bottom, rgba(18, 36, 24, .9), rgba(26, 48, 38, .95));
}

.cta-inner {
    position: relative;
    z-index: 2;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;
}

.cta-pill {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: .2em;
    text-transform: uppercase;
    color: var(--gold);
    background: rgba(200, 168, 90, .1);
    border: 1px solid rgba(200, 168, 90, .22);
    padding: 6px 16px;
    border-radius: 20px;
}

.cta-title {
    font-family: var(--ff-d);
    font-size: clamp(32px, 5vw, 56px);
    font-weight: 400;
    color: var(--white);
    line-height: 1.15;
}

.cta-sub {
    font-size: 14px;
    color: rgba(255, 255, 255, .48);
    max-width: 420px;
    line-height: 1.75;
}

.cta-btns {
    display: flex;
    gap: 14px;
    margin-top: 8px;
}
</style>