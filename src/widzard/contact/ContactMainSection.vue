<template>
<section class="contact-main">
    <div class="container contact-grid">

      <!-- LEFT: Info cards -->
      <div class="contact-info">

        <div class="info-card">
          <div class="info-icon">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#C8A85A" stroke-width="1.6"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <div class="info-body">
            <span class="info-label">Email</span>
            <a href="mailto:info@chacracoffee.com" class="info-value">info@chacracoffee.com</a>
          </div>
        </div>

        <div class="info-card">
          <div class="info-icon">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#C8A85A" stroke-width="1.6"
              stroke-linecap="round" stroke-linejoin="round">
              <path
                d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <div class="info-body">
            <span class="info-label">Phone / WhatsApp</span>
            <a href="tel:+51976339443" class="info-value">+51 976 339 443</a>
          </div>
        </div>

        <div class="info-card">
          <div class="info-icon">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#C8A85A" stroke-width="1.6"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div class="info-body">
            <span class="info-label">Location</span>
            <span class="info-value">Jaén, Cajamarca, Peru</span>
          </div>
        </div>

        <div class="info-card">
          <div class="info-icon">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#C8A85A" stroke-width="1.6"
              stroke-linecap="round" stroke-linejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <div class="info-body">
            <span class="info-label">Office Hours</span>
            <span class="info-value">Mon – Fri · 8:00 – 17:00<p>Sat 8:00 – 13:00</p></span>
          </div>
        </div>

        <div class="info-social-card">
          <span class="info-label">Follow Us</span>
          <div class="socials">
            <a href="#" class="soc-ico" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg></a>
            <a href="#" class="soc-ico" aria-label="Email"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
                stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg></a>
          </div>
        </div>

      </div>

      <!-- RIGHT: Form -->
      <div class="contact-form-wrap">
        <h2 class="form-title">Send us a message</h2>
        <p class="form-sub">Fill out the form and our team will get back to you shortly.</p>

        <form class="contact-form" id="contactForm" novalidate>

          <div class="form-row">
            <div class="form-field">
              <label for="fullName">Full Name <span>*</span></label>
              <input type="text" id="fullName" name="fullName" placeholder="Your name" required>
              <span class="field-error">Please enter your name</span>
            </div>
            <div class="form-field">
              <label for="company">Company</label>
              <input type="text" id="company" name="company" placeholder="Roastery / Company">
            </div>
          </div>

          <div class="form-row">
            <div class="form-field">
              <label for="email">Email <span>*</span></label>
              <input type="email" id="email" name="email" placeholder="you@company.com" required>
              <span class="field-error">Please enter a valid email</span>
            </div>
            <div class="form-field">
              <label for="phone">Phone</label>
              <input type="tel" id="phone" name="phone" placeholder="+44 7000 000000">
            </div>
          </div>

          <div class="form-field">
            <label for="interest">I'm interested in <span>*</span></label>
            <select id="interest" name="interest" required>
              <option value="" disabled selected>Select an option</option>
              <option value="samples">Requesting Samples</option>
              <option value="offer-list">Current Offer List</option>
              <option value="microlots">Microlots / Single Origin</option>
              <option value="partnership">Long-term Partnership</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div class="form-field">
            <label for="message">Message <span>*</span></label>
            <textarea id="message" name="message" rows="5" placeholder="Tell us a bit about what you're looking for..."
              required></textarea>
            <span class="field-error">Please enter a message</span>
          </div>

          <button type="submit" class="btn btn-dark form-submit">
            Send Message
            <svg viewBox="0 0 16 16" width="14" height="14">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" fill="none" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </button>

          <div class="form-success" id="formSuccess">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="#3D6B4A" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>Thank you! Your message has been sent — we'll be in touch soon.</span>
          </div>

        </form>
      </div>

    </div>
  </section>
</template>

<style>
.contact-main {
  background: var(--ivory);
  padding: 80px 0 100px;
}

.contact-grid {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 56px;
  align-items: start;
}

/* Info column */
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.info-card {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  background: var(--white);
  border-radius: var(--r-md);
  padding: 18px 20px;
  box-shadow: var(--sh-sm);
  transition: transform var(--tr), box-shadow var(--tr);
}

.info-card:hover {
  transform: translateY(-3px);
  box-shadow: var(--sh-md);
}

.info-icon {
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: rgba(200, 168, 90, .1);
  border: 1px solid rgba(200, 168, 90, .22);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.info-body {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.info-label {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: var(--text-l);
}

.info-value {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  transition: color var(--tr);
}

a.info-value:hover {
  color: var(--green-lt);
}

.info-social-card {
  background: var(--green);
  border-radius: var(--r-md);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.info-social-card .info-label {
  color: rgba(255, 255, 255, .5);
}

.info-social-card .socials {
  display: flex;
  gap: 8px;
}

.info-social-card .soc-ico {
  width: 36px;
  height: 36px;
  border: 1px solid rgba(255, 255, 255, .18);
  border-radius: var(--r-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, .7);
  transition: all var(--tr);
}

.info-social-card .soc-ico:hover {
  background: rgba(200, 168, 90, .2);
  border-color: var(--gold);
  color: var(--gold);
}

/* Form column */
.contact-form-wrap {
  background: var(--white);
  border-radius: var(--r-lg);
  padding: 44px 44px 40px;
  box-shadow: var(--sh-md);
}

.form-title {
  font-family: var(--ff-d);
  font-size: 26px;
  color: var(--text);
  margin-bottom: 6px;
}

.form-sub {
  font-size: 13px;
  color: var(--text-l);
  margin-bottom: 30px;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}

.form-field {
  display: flex;
  flex-direction: column;
  gap: 7px;
  position: relative;
}

.form-field label {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .04em;
  color: var(--text);
}

.form-field label span {
  color: var(--gold);
}

.form-field input,
.form-field select,
.form-field textarea {
  font-family: var(--ff-b);
  font-size: 13px;
  padding: 11px 14px;
  border: 1.5px solid var(--ivory-d);
  border-radius: 8px;
  background: var(--ivory);
  color: var(--text);
  transition: border-color var(--tr), background var(--tr);
  resize: vertical;
}

.form-field input::placeholder,
.form-field textarea::placeholder {
  color: var(--text-l);
}

.form-field input:focus,
.form-field select:focus,
.form-field textarea:focus {
  outline: none;
  border-color: var(--gold);
  background: var(--white);
}

.form-field select {
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%238A8A82' stroke-width='1.5' fill='none'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 14px center;
  padding-right: 36px;
}

.field-error {
  display: none;
  font-size: 11px;
  color: #c0392b;
  margin-top: -2px;
}

.form-field.error input,
.form-field.error select,
.form-field.error textarea {
  border-color: #c0392b;
  background: #fdf2f1;
}

.form-field.error .field-error {
  display: block;
}

.form-submit {
  align-self: flex-start;
  margin-top: 6px;
}

.form-success {
  display: none;
  align-items: center;
  gap: 10px;
  background: rgba(61, 107, 74, .08);
  border: 1px solid rgba(61, 107, 74, .25);
  border-radius: 8px;
  padding: 14px 16px;
  font-size: 13px;
  color: var(--green-lt);
}

.form-success.show {
  display: flex;
}
</style>