<template>
<section class="ab-hero">
    <div class="ab-hero-overlay"></div>
    <div class="ab-hero-content">
      <span class="hero-eyebrow">Jaén, Cajamarca — Peru</span>
      <h1 class="ab-hero-title">About<br><em>Chacra</em></h1>
      <p class="ab-hero-sub">A specialty coffee exporter born in the highlands of Cajamarca — built on relationships,
        quality and transparency.</p>
      <div class="hero-btns">
        <a href="#ab-mission" class="btn btn-gold">Our Mission</a>
        <a href="Contact.html" class="btn btn-ghost">Work With Us</a>
      </div>
    </div>
    <div class="ab-hero-scroll">
      <span>Scroll</span>
      <div class="scroll-bar"></div>
    </div>
  </section>
</template>

<style>
.ab-hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background-image: url('/img/about/Fondo_Cerros.jpeg');
  background-size: cover;
  background-position: center 30%;
  overflow: hidden;
}
.ab-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(140deg,
    rgba(12, 28, 18, .96) 0%,
    rgba(20, 42, 28, .72) 55%,
    rgba(200, 168, 90, .04) 100%);
}
.ab-hero-content {
  position: relative;
  z-index: 2;
  padding: 140px 80px 90px;
  max-width: 700px;
}
.ab-hero-title {
  font-family: var(--ff-d);
  font-size: clamp(64px, 10vw, 116px);
  font-weight: 400;
  line-height: .92;
  color: var(--white);
  margin-bottom: 24px;
}
.ab-hero-title em {
  color: var(--gold);
  font-style: italic;
}
.ab-hero-sub {
  font-size: 15px;
  color: rgba(255,255,255,.62);
  line-height: 1.78;
  max-width: 460px;
  margin-bottom: 36px;
}
.ab-hero-scroll {
  position: absolute;
  bottom: 36px;
  left: 80px;
  display: flex;
  align-items: center;
  gap: 14px;
  z-index: 2;
}
.ab-hero-scroll span {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .18em;
  text-transform: uppercase;
  color: rgba(255,255,255,.32);
}
</style>