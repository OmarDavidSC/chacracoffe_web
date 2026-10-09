<template>
    <section class="page-hero">
        <div class="page-hero-bg"></div>
        <div class="page-hero-inner container">
            <span class="eyebrow gold">{{ $t('hero.pill') }}</span>
            <h1 class="page-title">{{ $t('hero.h1') }} <em>{{ $t('hero.em') }}</em></h1>
            <p class="page-sub">{{ $t('hero.sub') }}</p>
            <div class="page-stats">
                <div class="ps-item"><span class="ps-num">38</span><span class="ps-lbl">{{ $t('hero.d1') }}</span></div>
                <div class="ps-item"><span class="ps-num">83–88+</span><span class="ps-lbl">{{ $t('hero.d2') }}</span></div>
                <div class="ps-item"><span class="ps-num">6</span><span class="ps-lbl">{{ $t('hero.d3') }}</span></div>
            </div>
        </div>
    </section>
</template>

<style>
.page-hero {
    position: relative;
    padding: 170px 0 70px;
    overflow: hidden;
    background: var(--green);
}

.page-hero-bg {
    position: absolute;
    inset: 0;
    background-image: url('../../../public/img/coffee/Fondo_2.jpg');
    background-size: cover;
    background-position: center;
    opacity: .22;
}

.page-hero-inner {
    position: relative;
    z-index: 2;
    max-width: 640px;
}

.page-title {
    font-family: var(--ff-d);
    font-size: clamp(38px, 6vw, 64px);
    font-weight: 400;
    color: var(--white);
    line-height: 1.08;
    margin-bottom: 18px;
}

.page-title em {
    font-style: italic;
    color: var(--gold);
}

.page-sub {
    font-size: 14px;
    color: rgba(255, 255, 255, .62);
    line-height: 1.8;
    max-width: 540px;
    margin-bottom: 36px;
}

.page-stats {
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
}

.ps-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
}

.ps-num {
    font-family: var(--ff-d);
    font-size: 30px;
    color: var(--gold);
    line-height: 1;
}

.ps-lbl {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: .14em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, .4);
}
</style>