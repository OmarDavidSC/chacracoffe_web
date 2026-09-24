<template>
    <section class="ab-who ab-facility o_colored_level" id="ab-facility" style="background-image: none">
        <div class="container">
            <div class="ab-who-grid">
                <!-- IMAGEN -->
                <div class="ab-who-img" data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
                    <div class="ab-img-main" style="background-image: url(&quot;/img/about/Processing.jpg&quot;)">
                        <div class="ab-img-badge" data-aos="zoom-in" data-aos-delay="500" data-aos-duration="700"
                            data-aos-once="true">
                            <strong>From Cherry</strong>
                            to Green Coffee
                        </div>
                    </div>
                </div>

                <!-- CONTENIDO -->
                <div class="ab-who-text" data-aos="fade-left" data-aos-duration="1000" data-aos-once="true">
                    <span class="eyebrow gold">Our Facility</span>

                    <h2 class="section-title">
                        One plant.<br />
                        <em>Every process.</em>
                    </h2>

                    <p>
                        Our own processing plant in Jaén handles washing, drying and sorting
                        for every lot we export — full control from cherry to green coffee.
                    </p>

                    <p>
                        Located at Calle Las Tres Marías, Jaén, Cajamarca (next to
                        Prosegur), our facility tailors each method to bring out the best of
                        every microlot.
                    </p>

                    <!-- PROCESOS -->
                    <div class="ab-process-list">
                        <div class="ab-process-item" data-aos="fade-up" data-aos-delay="200" data-aos-duration="700"
                            data-aos-once="true">
                            <svg height="24" viewBox="0 0 50 50" width="24">
                                <path d="M25 5C16 5 10 14 10 25C10 36 16 45 25 45C34 45 40 36 40 25C40 14 34 5 25 5Z"
                                    fill="none" stroke="#C8A85A" stroke-width="2" />
                                <path d="M18 10C23 16 25 22 25 25C25 29 22 35 18 40" fill="none" stroke="#C8A85A"
                                    stroke-linecap="round" stroke-width="2" />
                                <path d="M25 25C29 29 32 35 32 40" fill="none" stroke="#C8A85A" stroke-linecap="round"
                                    stroke-width="2" />
                            </svg>

                            <span>Washed</span>
                        </div>

                        <div class="ab-process-item" data-aos="fade-up" data-aos-delay="350" data-aos-duration="700"
                            data-aos-once="true">
                            <svg height="24" viewBox="0 0 50 50" width="24">
                                <path d="M25 5C16 5 10 14 10 25C10 36 16 45 25 45C34 45 40 36 40 25C40 14 34 5 25 5Z"
                                    fill="none" stroke="#C8A85A" stroke-width="2" />
                                <path d="M18 10C23 16 25 22 25 25C25 29 22 35 18 40" fill="none" stroke="#C8A85A"
                                    stroke-linecap="round" stroke-width="2" />
                                <path d="M25 25C29 29 32 35 32 40" fill="none" stroke="#C8A85A" stroke-linecap="round"
                                    stroke-width="2" />
                            </svg>

                            <span>Honey</span>
                        </div>

                        <div class="ab-process-item" data-aos="fade-up" data-aos-delay="500" data-aos-duration="700"
                            data-aos-once="true">
                            <svg height="24" viewBox="0 0 50 50" width="24">
                                <path
                                    d="M25 12C18 12 13 18 13 27C13 36 18 42 25 42C32 42 37 36 37 27C37 18 32 12 25 12Z"
                                    fill="none" stroke="#C8A85A" stroke-width="2" />

                                <path d="M25 12C25 8 29 5 35 6C33 11 30 13 25 13" fill="none" stroke="#C8A85A"
                                    stroke-linecap="round" stroke-width="2" />

                                <path d="M18 23C20 20 23 19 25 19C28 19 31 20 33 23" fill="none" stroke="#C8A85A"
                                    stroke-linecap="round" stroke-width="1.8" />

                                <path d="M19 28C19 32 21 35 24 37" fill="none" stroke="#C8A85A" stroke-linecap="round"
                                    stroke-width="1.5" />
                            </svg>

                            <span>Natural</span>
                        </div>
                    </div>

                    <!-- CONTACTO -->
                    <div class="ab-region-contact" data-aos="fade-up" data-aos-delay="600" data-aos-duration="800"
                        data-aos-once="true">
                        <div class="ab-contact-heading">
                            <span class="ab-contact-line"></span>

                            <div>
                                <span class="ab-contact-label"> Get in touch </span>

                                <h3>Let's talk about coffee.</h3>
                            </div>
                        </div>

                        <form class="ab-contact-form" @submit.prevent="sendMessage">
                            <div class="ab-form-row">
                                <div class="ab-form-group">
                                    <label for="name"> Name </label>

                                    <input id="name" v-model="form.name" type="text" placeholder="Your name" required />
                                </div>

                                <div class="ab-form-group">
                                    <label for="email"> Email </label>

                                    <input id="email" v-model="form.email" type="email" placeholder="your@email.com"
                                        required />
                                </div>
                            </div>

                            <div class="ab-form-group">
                                <label for="subject"> Subject </label>

                                <input id="subject" v-model="form.subject" type="text" placeholder="How can we help?"
                                    required />
                            </div>

                            <div class="ab-form-group">
                                <label for="message"> Message </label>

                                <textarea id="message" v-model="form.message" rows="4"
                                    placeholder="Tell us about your request..." required></textarea>
                            </div>

                            <button type="submit" class="ab-contact-btn" :disabled="sending">
                                <span>
                                    {{ sending ? "Opening email..." : "Send Message" }}
                                </span>

                                <span class="ab-btn-arrow"> → </span>
                            </button>
                        </form>

                        <div class="ab-direct-contact">
                            <span>Or contact us directly</span>

                            <a href="mailto:bryanzc@chacracoffee.com">
                                bryanzc@chacracoffee.com
                            </a>

                            <a href="tel:+51948512606"> +51 948 512 606 </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const sending = ref(false);

const form = reactive({
    name: "",
    email: "",
    subject: "",
    message: "",
});

const sendMessage = () => {
    sending.value = true;

    const subject = form.subject || "Coffee inquiry";

    const body = `
Name: ${form.name}
Email: ${form.email}

Message:
${form.message}
    `.trim();

    const mailto = `mailto:bryanzc@chacracoffee.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    setTimeout(() => {
        sending.value = false;
    }, 1000);
};
</script>

<style>
.ab-facility {
    position: relative;
    overflow: hidden;
}

.ab-who-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 90px;
}

/* =========================
   IMAGE
========================= */

.ab-who-img {
    position: relative;
}

.ab-img-main {
    min-height: 620px;
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.12);
}

.ab-img-main::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg,
            rgba(0, 0, 0, 0) 45%,
            rgba(0, 0, 0, 0.38) 100%);
    transition: opacity 0.5s ease;
}

.ab-who-img:hover .ab-img-main::after {
    opacity: 0.7;
}

.ab-img-badge {
    position: absolute;
    z-index: 2;
    bottom: 30px;
    left: 30px;
    padding: 18px 22px;
    background: rgba(20, 35, 27, 0.92);
    color: rgba(255, 255, 255, 0.75);
    font-size: 11px;
    line-height: 1.6;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    border-left: 2px solid var(--gold);
    backdrop-filter: blur(5px);
}

.ab-img-badge strong {
    display: block;
    color: var(--gold);
    font-size: 13px;
    letter-spacing: 0.12em;
}

/* =========================
   TEXT
========================= */

.ab-who-text {
    max-width: 560px;
}

.ab-who-text>p {
    font-size: 14px;
    color: var(--text-m);
    line-height: 1.9;
    margin-bottom: 18px;
}

.ab-who-text .section-title {
    margin-bottom: 25px;
}

.ab-who-text .section-title em {
    color: var(--gold);
    font-style: italic;
}

/* =========================
   PROCESS
========================= */

.ab-process-list {
    display: flex;
    align-items: center;
    gap: 30px;
    margin-top: 30px;
    margin-bottom: 35px;
    padding: 20px 0;
    border-top: 1px solid rgba(180, 142, 72, 0.18);
    border-bottom: 1px solid rgba(180, 142, 72, 0.18);
}

.ab-process-item {
    display: flex;
    align-items: center;
    gap: 9px;
    color: var(--text);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    transition:
        transform 0.3s ease,
        color 0.3s ease;
}

.ab-process-item svg {
    flex-shrink: 0;
    transition: transform 0.4s ease;
}

.ab-process-item:hover {
    color: var(--gold);
    transform: translateY(-3px);
}

.ab-process-item:hover svg {
    transform: rotate(8deg) scale(1.12);
}

/* =========================
   CONTACT
========================= */

.ab-region-contact {
    margin-top: 32px;
    padding: 28px;
    background: rgba(255, 255, 255, 0.38);
    border: 1px solid rgba(180, 142, 72, 0.16);
    position: relative;
    overflow: hidden;
}

.ab-region-contact::before {
    content: "";
    position: absolute;
    width: 120px;
    height: 120px;
    right: -60px;
    top: -60px;
    border: 1px solid rgba(200, 168, 90, 0.18);
    border-radius: 50%;
}

.ab-region-contact::after {
    content: "";
    position: absolute;
    width: 180px;
    height: 180px;
    right: -90px;
    top: -90px;
    border: 1px solid rgba(200, 168, 90, 0.08);
    border-radius: 50%;
}

.ab-contact-heading {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    margin-bottom: 25px;
    position: relative;
    z-index: 2;
}

.ab-contact-line {
    width: 2px;
    min-height: 45px;
    background: var(--gold);
    display: block;
}

.ab-contact-label {
    display: block;
    color: var(--gold);
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.17em;
    text-transform: uppercase;
    margin-bottom: 5px;
}

.ab-contact-heading h3 {
    font-family: var(--ff-d);
    font-size: 23px;
    font-weight: 400;
    color: var(--text);
    margin: 0;
}

/* =========================
   FORM
========================= */

.ab-contact-form {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.ab-form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
}

.ab-form-group {
    display: flex;
    flex-direction: column;
    gap: 7px;
}

.ab-form-group label {
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: var(--gold);
}

.ab-form-group input,
.ab-form-group textarea {
    width: 100%;
    box-sizing: border-box;
    border: 1px solid rgba(30, 45, 36, 0.12);
    background: rgba(255, 255, 255, 0.55);
    color: var(--text);
    padding: 11px 13px;
    border-radius: 2px;
    outline: none;
    font-family: inherit;
    font-size: 12px;
    transition:
        border-color 0.3s ease,
        background 0.3s ease,
        box-shadow 0.3s ease,
        transform 0.3s ease;
}

.ab-form-group input::placeholder,
.ab-form-group textarea::placeholder {
    color: rgba(30, 45, 36, 0.38);
}

.ab-form-group input:hover,
.ab-form-group textarea:hover {
    border-color: rgba(200, 168, 90, 0.4);
}

.ab-form-group input:focus,
.ab-form-group textarea:focus {
    border-color: var(--gold);
    background: rgba(255, 255, 255, 0.8);
    box-shadow: 0 5px 20px rgba(180, 142, 72, 0.08);
    transform: translateY(-1px);
}

.ab-form-group textarea {
    min-height: 95px;
    resize: vertical;
}

/* =========================
   BUTTON
========================= */

.ab-contact-btn {
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
    margin-top: 5px;
    padding: 13px 20px;
    border: 1px solid var(--gold);
    background: var(--gold);
    color: var(--white);
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    cursor: pointer;
    transition:
        background 0.35s ease,
        color 0.35s ease,
        transform 0.35s ease,
        box-shadow 0.35s ease;
}

.ab-contact-btn:hover {
    background: transparent;
    color: var(--gold);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(180, 142, 72, 0.12);
}

.ab-contact-btn:active {
    transform: translateY(-1px);
}

.ab-contact-btn:disabled {
    opacity: 0.7;
    cursor: wait;
}

.ab-btn-arrow {
    font-size: 16px;
    line-height: 1;
    transition: transform 0.35s ease;
}

.ab-contact-btn:hover .ab-btn-arrow {
    transform: translateX(5px);
}

/* =========================
   DIRECT CONTACT
========================= */

.ab-direct-contact {
    position: relative;
    z-index: 2;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 10px 18px;
    margin-top: 22px;
    padding-top: 18px;
    border-top: 1px solid rgba(30, 45, 36, 0.08);
}

.ab-direct-contact span {
    width: 100%;
    font-size: 8px;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--text-m);
}

.ab-direct-contact a {
    color: var(--text);
    font-size: 11px;
    text-decoration: none;
    transition: color 0.3s ease;
}

.ab-direct-contact a:hover {
    color: var(--gold);
}

/* =========================
   TABLET
========================= */

@media (max-width: 1000px) {
    .ab-who-grid {
        grid-template-columns: 1fr 1fr;
        gap: 50px;
    }

    .ab-img-main {
        min-height: 550px;
    }
}

@media (max-width: 900px) {
    .ab-who-grid {
        grid-template-columns: 1fr;
        gap: 60px;
    }

    .ab-who-img {
        max-width: 650px;
        width: 100%;
        margin: 0 auto;
    }

    .ab-who-text {
        max-width: 650px;
        width: 100%;
        margin: 0 auto;
    }

    .ab-img-main {
        min-height: 500px;
    }
}

/* =========================
   MOBILE
========================= */

@media (max-width: 600px) {
    .ab-who-grid {
        gap: 45px;
    }

    .ab-img-main {
        min-height: 400px;
    }

    .ab-img-badge {
        left: 18px;
        bottom: 18px;
        padding: 14px 17px;
    }

    .ab-process-list {
        gap: 18px;
        flex-wrap: wrap;
    }

    .ab-process-item {
        font-size: 9px;
    }

    .ab-region-contact {
        padding: 22px 18px;
    }

    .ab-form-row {
        grid-template-columns: 1fr;
        gap: 14px;
    }

    .ab-contact-btn {
        width: 100%;
    }

    .ab-direct-contact {
        flex-direction: column;
        align-items: flex-start;
        gap: 8px;
    }
}

/* =========================
   REDUCE MOTION
========================= */

@media (prefers-reduced-motion: reduce) {

    .ab-process-item,
    .ab-process-item svg,
    .ab-form-group input,
    .ab-form-group textarea,
    .ab-contact-btn,
    .ab-btn-arrow {
        transition: none;
    }
}
</style>
