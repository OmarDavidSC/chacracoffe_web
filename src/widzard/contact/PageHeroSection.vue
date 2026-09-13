<template>
<section class="contact-hero">
    <div class="contact-hero-bg"></div>
    <div class="contact-hero-inner container">
      <span class="eyebrow gold">Get In Touch</span>
      <h1 class="page-title">Let's talk<br><em>coffee.</em></h1>
      <p class="page-sub">Whether you're after our current offer list, a sample box, or just want to learn more about
        our origins — we usually reply within one business day.</p>
    </div>
  </section>
</template>

<style>
.contact-hero {
  position: relative;
  padding: 180px 0 80px;
  overflow: hidden;
  background: var(--green);
}

.contact-hero-bg {
  position: absolute;
  inset: 0;
  background-image: url('Fondo_3.jpg');
  background-size: cover;
  background-position: center;
  opacity: .2;
}

.contact-hero-inner {
  position: relative;
  z-index: 2;
  max-width: 580px;
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
  max-width: 500px;
}
</style>