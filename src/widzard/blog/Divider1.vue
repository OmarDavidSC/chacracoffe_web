<template>
<div class="mag-divider">
  <span class="mag-divider-rule"></span>
  <span class="mag-divider-text">All New Releases · June 2026</span>
  <span class="mag-divider-rule"></span>
</div>
</template>

<style>
.mag-divider {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 14px 48px;
  background: #0a1510;
  border-top: 1px solid rgba(255, 255, 255, .05);
  border-bottom: 1px solid rgba(255, 255, 255, .05);
}

.mag-divider-rule {
  flex: 1;
  height: 1px;
  background: rgba(255, 255, 255, .07);
}

.mag-divider-text {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .24em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, .25);
  white-space: nowrap;
}
</style>