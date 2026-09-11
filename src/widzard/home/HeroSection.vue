<script setup lang="ts">
    import HeroStats from '../../components/partials/hero/HeroStats.vue';
</script>
<template>
    <section class="hero" id="home">
        <div class="hero-overlay"></div>
        <div class="hero-content">
            <span class="hero-eyebrow">Specialty Coffee from Peru</span>
            <h1 class="hero-title">CHACRA<br>COFFEE</h1>
            <p class="hero-tagline">From the farms to the world.
            </p>
            <div class="hero-btns">
                <a href="Coffees.html" class="btn btn-ghost">View Current Offer List</a>
                <a href="Contact.html" class="btn btn-gold">Request Samples</a>
            </div>
        </div>
    </section>
    <HeroStats/> 
</template>

<style>
.hero {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    background-image: url('../../public/img/hero.jpg');
    background-size: cover;
    background-position: center 30%;
    overflow: hidden;
}

.hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(140deg, rgba(18, 36, 24, .92) 0%, rgba(26, 48, 38, .68) 50%, rgba(0, 0, 0, .18) 100%);
}

.hero-content {
    position: relative;
    z-index: 2;
    padding: 130px 80px 90px;
    max-width: 680px;
}

.hero-eyebrow {
    display: block;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: .22em;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 18px;
}

.hero-title {
    font-family: var(--ff-d);
    font-size: clamp(60px, 10vw, 112px);
    font-weight: 400;
    line-height: .93;
    color: var(--white);
    margin-bottom: 22px;
}

.hero-tagline {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 15px;
    color: rgba(255, 255, 255, .72);
    font-style: italic;
    margin-bottom: 38px;
}

.leaf-svg {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
}

.hero-btns {
    display: flex;
    gap: 14px;
    flex-wrap: wrap;
}

.hero-scroll {
    position: absolute;
    bottom: 36px;
    left: 80px;
    display: flex;
    align-items: center;
    gap: 14px;
    z-index: 2;
}

.hero-scroll span {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: .18em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, .38);
}

.scroll-bar {
    width: 46px;
    height: 1px;
    background: linear-gradient(90deg, rgba(200, 168, 90, .6), transparent);
}
</style>