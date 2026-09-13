<template>
    <section class="mag-notify-section" id="notify">
  <div class="mag-notify-bg" style="background-image:url('Fondo_Web.jpg')"></div>
  <div class="mag-notify-overlay"></div>
  <div class="mag-notify-inner">

    <div class="mag-section-header mb">
      <span class="mag-section-rule light"></span>
      <span class="mag-section-num light">04</span>
      <span class="mag-section-title light">Never Miss a Drop</span>
    </div>

    <h2 class="mag-notify-title">Be the first<br><em>to know.</em></h2>
    <p class="mag-notify-sub">Our offer list updates every month with fresh crop arrivals. One email per release — no noise, just coffee.</p>

    <form class="mag-notify-form" id="notifyForm">
      <div class="mag-notify-row">
        <input type="text"  placeholder="Your name"            id="notifyName">
        <input type="email" placeholder="your@roastery.com"    id="notifyEmail" required>
        <button type="submit" class="btn btn-gold">Notify Me</button>
      </div>
      <p class="mag-notify-fine">No spam. One email per drop. Unsubscribe anytime.</p>
      <div class="mag-notify-ok" id="notifyOk">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#C8A85A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        You're on the list — see you next release.
      </div>
    </form>

  </div>
</section>
</template>

<style>
.mag-notify-section {
  position: relative;
  padding: 110px 0;
  overflow: hidden;
}

.mag-notify-bg {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
}

.mag-notify-overlay {
  position: absolute;
  inset: 0;
  background: rgba(8, 20, 12, .92);
}

.mag-notify-inner {
  position: relative;
  z-index: 2;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 48px;
}

.mag-notify-title {
  font-family: var(--ff-d);
  font-size: clamp(40px, 6vw, 72px);
  color: var(--white);
  line-height: 1;
  margin-bottom: 16px;
}

.mag-notify-title em {
  font-style: italic;
  color: var(--gold);
}

.mag-notify-sub {
  font-size: 14px;
  color: rgba(255, 255, 255, .45);
  line-height: 1.75;
  max-width: 480px;
  margin-bottom: 36px;
}

.mag-notify-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.mag-notify-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  max-width: 620px;
}

.mag-notify-row input {
  font-family: var(--ff-b);
  font-size: 13px;
  padding: 13px 16px;
  flex: 1;
  min-width: 180px;
  border: 1.5px solid rgba(255, 255, 255, .1);
  border-radius: 8px;
  background: rgba(255, 255, 255, .05);
  color: var(--white);
  transition: border-color var(--tr);
}

.mag-notify-row input::placeholder {
  color: rgba(255, 255, 255, .28);
}

.mag-notify-row input:focus {
  outline: none;
  border-color: var(--gold);
}

.mag-notify-fine {
  font-size: 11px;
  color: rgba(255, 255, 255, .22);
}

.mag-notify-ok {
  display: none;
  align-items: center;
  gap: 10px;
  font-size: 13px;
  color: var(--gold);
  background: rgba(200, 168, 90, .07);
  border: 1px solid rgba(200, 168, 90, .2);
  border-radius: 8px;
  padding: 12px 16px;
  max-width: 440px;
}

.mag-notify-ok.show {
  display: flex;
}
</style>