<template>
  <section ref="whoSection" class="ab-who" id="ab-mission">
    <div class="container">
      <div class="ab-who-grid">
        <!-- IMAGE BLOCK -->
        <div class="ab-who-img" :class="{ 'is-visible': isVisible }">
          <div class="ab-img-main" style="background-image: url(&quot;/img/about/Fondo_1.jpg&quot;)"></div>
          <div class="ab-img-accent" style="background-image: url(&quot;/img/about/Processing.jpg&quot;)"></div>
          <div class="ab-img-tag">
            <span class="ab-tag-num">2023</span>
            <span class="ab-tag-lbl">Founded in Jaén</span>
          </div>
        </div>
        <!-- TEXT BLOCK -->
        <div class="ab-who-text" :class="{ 'is-visible': isVisible }">
          <span class="eyebrow gold ab-eyebrow"> Who We Are </span>
          <h2 class="section-title ab-title">
            A company rooted<br />
            <em>in the highlands.</em>
          </h2>
          <p class="ab-paragraph">
            Chacra Coffee was born in Jaén, one of Peru's most celebrated
            coffee-growing regions. We are a specialty green coffee exporter
            that sources, processes and exports traceable lots from smallholder
            farmers across Cajamarca — to roasters and importers in the United
            Kingdom, Europe and beyond.
          </p>
          <p class="ab-paragraph">
            The name <em>Chacra</em> comes from the Quechua word for
            <em>farm</em> or <em>field</em> — a reflection of our roots and the
            farmers at the heart of everything we do.
          </p>
          <div class="ab-who-tags">
            <span class="ab-pill"> 🌿 Specialty Grade </span>
            <span class="ab-pill"> 📍 Traceable Lots </span>
            <span class="ab-pill"> 🤝 Direct Trade </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
const whoSection = ref<HTMLElement | null>(null);
const isVisible = ref(false);
let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];
      if (entry?.isIntersecting) {
        isVisible.value = true;
        observer?.disconnect();
      }
    },
    {
      threshold: 0.2,
    },
  );

  if (whoSection.value) {
    observer.observe(whoSection.value);
  }
});

onBeforeUnmount(() => {
  observer?.disconnect();
});
</script>

<style scoped>

.ab-who {
  background: var(--ivory);
  padding: 110px 0 100px;
  overflow: hidden;
}

.ab-who-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: center;
}

.ab-who-img {
  position: relative;
  height: 520px;
}

.ab-img-main {
  position: absolute;
  inset: 0;
  border-radius: var(--r-lg);
  background-size: cover;
  background-position: center;
  box-shadow: var(--sh-lg);
  opacity: 0;
  transform: translateX(-60px) scale(0.97);
  transition:
    opacity 1s ease,
    transform 1.1s cubic-bezier(0.22, 1, 0.36, 1);
}

.ab-who-img.is-visible .ab-img-main {
  opacity: 1;
  transform: translateX(0) scale(1);
  animation: mainImageFloat 7s ease-in-out infinite;
  animation-delay: 1.1s;
}

.ab-img-accent {
  position: absolute;
  width: 52%;
  height: 46%;
  bottom: -28px;
  right: -28px;
  border-radius: var(--r-md);
  background-size: cover;
  background-position: center;
  border: 4px solid var(--ivory);
  box-shadow: var(--sh-md);
  z-index: 2;
  opacity: 0;
  transform: translate(45px, 45px) scale(0.9);
  transition:
    opacity 0.9s ease 0.35s,
    transform 1s cubic-bezier(0.22, 1, 0.36, 1) 0.35s;
}

.ab-who-img.is-visible .ab-img-accent {
  opacity: 1;
  transform: translate(0, 0) scale(1);
  animation: accentFloat 5s ease-in-out infinite;
  animation-delay: 1.4s;
}

.ab-img-tag {
  position: absolute;
  top: 28px;
  left: -20px;
  background: var(--green);
  color: var(--white);
  border-radius: var(--r-md);
  padding: 14px 20px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  z-index: 3;
  box-shadow: var(--sh-md);
  opacity: 0;
  transform: translateX(-25px) translateY(-10px);
  transition:
    opacity 0.7s ease 0.75s,
    transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.75s;
}

.ab-who-img.is-visible .ab-img-tag {
  opacity: 1;
  transform: translateX(0) translateY(0);
}

.ab-tag-num {
  font-family: var(--ff-d);
  font-size: 28px;
  line-height: 1;
  color: var(--gold);
}

.ab-tag-lbl {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.55);
}

.ab-who-text {
  display: flex;
  flex-direction: column;
  gap: 20px;
  opacity: 0;
  transform: translateX(55px);
  transition:
    opacity 1s ease,
    transform 1s cubic-bezier(0.22, 1, 0.36, 1);
}

.ab-who-text.is-visible {
  opacity: 1;
  transform: translateX(0);
}

.ab-eyebrow {
  opacity: 0;
  transform: translateY(15px);
  transition:
    opacity 0.7s ease 0.25s,
    transform 0.7s ease 0.25s;
}

.ab-who-text.is-visible .ab-eyebrow {
  opacity: 1;
  transform: translateY(0);
}

.ab-title {
  opacity: 0;
  transform: translateY(20px);

  transition:
    opacity 0.8s ease 0.4s,
    transform 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.4s;
}

.ab-who-text.is-visible .ab-title {
  opacity: 1;
  transform: translateY(0);
}

.ab-paragraph {
  font-size: 15px;
  color: var(--text-m);
  line-height: 1.85;

  opacity: 0;
  transform: translateY(18px);
  transition:
    opacity 0.8s ease,
    transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
}

.ab-who-text.is-visible .ab-paragraph:nth-of-type(1) {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.55s;
}

.ab-who-text.is-visible .ab-paragraph:nth-of-type(2) {
  opacity: 1;
  transform: translateY(0);
  transition-delay: 0.7s;
}

.ab-who-text em {
  color: var(--green);
  font-style: italic;
}

.ab-who-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  margin-top: 8px;
}

.ab-pill {
  font-size: 11px;
  font-weight: 600;
  padding: 7px 16px;
  border-radius: 20px;
  background: var(--white);
  border: 1.5px solid var(--ivory-d);
  color: var(--text-m);
  transition:
    border-color var(--tr),
    color var(--tr),
    background var(--tr),
    transform 0.3s ease,
    box-shadow 0.3s ease;
  opacity: 0;
  transform: translateY(15px);
}

.ab-who-text.is-visible .ab-pill:nth-child(1) {
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity 0.6s ease 0.9s,
    transform 0.6s ease 0.9s,
    border-color var(--tr),
    color var(--tr),
    background var(--tr),
    box-shadow 0.3s ease;
}

.ab-who-text.is-visible .ab-pill:nth-child(2) {
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity 0.6s ease 1s,
    transform 0.6s ease 1s,
    border-color var(--tr),
    color var(--tr),
    background var(--tr),
    box-shadow 0.3s ease;
}

.ab-who-text.is-visible .ab-pill:nth-child(3) {
  opacity: 1;
  transform: translateY(0);
  transition:
    opacity 0.6s ease 1.1s,
    transform 0.6s ease 1.1s,
    border-color var(--tr),
    color var(--tr),
    background var(--tr),
    box-shadow 0.3s ease;
}

.ab-pill:hover {
  border-color: var(--green);
  color: var(--green);
  background: rgba(26, 80, 48, 0.05);
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(26, 80, 48, 0.08);
}

@keyframes mainImageFloat {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-7px);
  }
}

@keyframes accentFloat {

  0%,
  100% {
    transform: translateY(0) rotate(0deg);
  }

  50% {
    transform: translateY(-9px) rotate(0.5deg);
  }
}

@media (max-width: 900px) {
  .ab-who {
    padding: 90px 0;
  }

  .ab-who-grid {
    grid-template-columns: 1fr;

    gap: 70px;
  }

  .ab-who-img {
    height: 500px;
  }

  .ab-who-text {
    max-width: 700px;
  }
}

@media (max-width: 600px) {
  .ab-who {
    padding: 75px 0;
  }

  .ab-who-grid {
    gap: 55px;
  }

  .ab-who-img {
    height: 400px;
  }

  .ab-img-accent {
    width: 55%;
    height: 43%;

    right: -10px;
    bottom: -20px;
  }

  .ab-img-tag {
    left: -8px;
    top: 20px;
  }

  .ab-tag-num {
    font-size: 24px;
  }

  .ab-who-text {
    gap: 17px;
  }

  .ab-who-text p {
    font-size: 14px;
    line-height: 1.8;
  }

  .ab-pill {
    font-size: 10px;
    padding: 7px 13px;
  }
}

@media (prefers-reduced-motion: reduce) {

  .ab-img-main,
  .ab-img-accent,
  .ab-img-tag,
  .ab-who-text,
  .ab-eyebrow,
  .ab-title,
  .ab-paragraph,
  .ab-pill {
    animation: none !important;
    transition: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
</style>
