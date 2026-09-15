<template>
  <section ref="statsSection" class="stats-bar">
    <div class="stats-inner">
      <div class="stat-item">
        <svg class="stat-icon" viewBox="0 0 40 40">
          <circle cx="15" cy="12" r="5" fill="none" stroke="#C8A85A" stroke-width="1.8" />
          <circle cx="25" cy="12" r="5" fill="none" stroke="#C8A85A" stroke-width="1.8" />
          <path d="M6 32C6 26 10 22 15 22H25C30 22 34 26 34 32" fill="none" stroke="#C8A85A" stroke-width="1.8" />
        </svg>
        <span class="stat-num">{{ communities }}+</span>
        <span class="stat-label">Communities</span>
      </div>
      <div class="stat-item">
        <svg class="stat-icon" viewBox="0 0 40 40">
          <rect x="14" y="8" width="12" height="16" rx="2" fill="none" stroke="#C8A85A" stroke-width="1.8" />
          <path d="M20 24V34M14 34H26" stroke="#C8A85A" stroke-width="1.8" stroke-linecap="round" />
        </svg>
        <span class="stat-num">{{ producers }}+</span>
        <span class="stat-label">Producers</span>
      </div>
      <div class="stat-item">
        <svg class="stat-icon" viewBox="0 0 40 40">
          <path d="M10 16C10 16 12 10 20 10C28 10 30 16 30 16H10Z" fill="none" stroke="#C8A85A" stroke-width="1.8" />
          <path d="M10 16C10 22 14 28 20 30C26 28 30 22 30 16" fill="none" stroke="#C8A85A" stroke-width="1.8" />
        </svg>
        <span class="stat-num">{{ cupScore }}–90+</span>
        <span class="stat-label">Cup Score</span>
      </div>
      <div class="stat-item">
        <svg class="stat-icon" viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="12" fill="none" stroke="#C8A85A" stroke-width="1.8" />
          <path d="M8 20H32M20 8C16 12 14 16 14 20C14 24 16 28 20 32M20 8C24 12 26 16 26 20C26 24 24 28 20 32"
            fill="none" stroke="#C8A85A" stroke-width="1.5" />
        </svg>
        <span class="stat-num stock-value">UK &amp; EU</span>
        <span class="stat-label">Stock Available</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
const statsSection = ref<HTMLElement | null>(null);

const communities = ref(0);
const producers = ref(0);
const cupScore = ref(0);

let observer: IntersectionObserver | null = null;
let animationStarted = false;

const animateNumber = (target: number, setter: (value: number) => void, duration: number = 1800,): void => {
  const startTime = performance.now();

  const update = (currentTime: number): void => {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = 1 - Math.pow(1 - progress, 3);
    const value = Math.floor(target * easedProgress);
    setter(value);

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      setter(target);
    }
  };
  requestAnimationFrame(update);
};

const startCounters = (): void => {
  if (animationStarted) return;

  animationStarted = true;

  animateNumber(50, (value: number) => {
    communities.value = value;
  });

  animateNumber(150, (value: number) => {
    producers.value = value;
  });

  animateNumber(83, (value: number) => {
    cupScore.value = value;
  });
};

onMounted(() => {
  observer = new IntersectionObserver(
    (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];

      if (entry?.isIntersecting) {
        startCounters();
        observer?.disconnect();
      }
    },
    {
      threshold: 0.35,
    },
  );

  if (statsSection.value) {
    observer.observe(statsSection.value);
  }
});

onBeforeUnmount(() => {
  observer?.disconnect();
});
</script>

<style scoped>
.stats-bar {
  background: var(--green);
  padding: 36px 0;
}

.stats-inner {
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 28px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  padding: 8px 16px;
  border-right: 1px solid rgba(255, 255, 255, 0.07);
}

.stat-item:last-child {
  border-right: none;
}

.stat-icon {
  width: 30px;
  height: 30px;
  margin-bottom: 4px;
}

.stat-num {
  font-family: var(--ff-d);
  font-size: 28px;
  color: var(--white);
  line-height: 1;
}

.stat-label {
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.38);
}

.stock-value {
  animation: stockReveal 0.8s ease both;
  animation-delay: 0.3s;
}

@keyframes stockReveal {
  from {
    opacity: 0;
    transform: translateY(8px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .stats-inner {
    grid-template-columns: repeat(2, 1fr);
  }

  .stat-item:nth-child(2) {
    border-right: none;
  }

  .stat-item:nth-child(3),
  .stat-item:nth-child(4) {
    border-top: 1px solid rgba(255, 255, 255, 0.07);
    padding-top: 20px;
  }
}

@media (max-width: 480px) {
  .stats-inner {
    grid-template-columns: 1fr;
  }

  .stat-item {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.07);
    padding: 18px 16px;
  }

  .stat-item:last-child {
    border-bottom: none;
  }

  .stat-item:nth-child(3),
  .stat-item:nth-child(4) {
    border-top: none;
  }
}
</style>
