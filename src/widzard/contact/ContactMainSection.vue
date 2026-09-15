<template>
  <section class="contact-main">
    <div class="container contact-grid"> <!-- INFO -->
      <div class="contact-info">
        <div v-for="item in contactInfo" :key="item.label" class="info-card">
          <div class="info-icon" v-html="item.icon"></div>
          <div class="info-body"> <span class="info-label">{{ item.label }}</span> <template v-if="item.values"> <a
                v-for="value in item.values" :key="value"
                :href="item.type === 'email' ? `mailto:${value}` : `tel:${value.replace(/\s/g, '')}`"
                class="info-value"> {{ value }} </a> </template>
            <span v-else class="info-value">{{ item.value }}</span>
          </div>
        </div>
        <div class="info-social-card"> <span class="info-label">Follow Us</span>
          <div class="socials"> <a href="facebook.com/profile.php?id=61559304344126" class="soc-ico" aria-label="Instagram">◎</a> <a
              href="mailto:info@chacracoffee.com" class="soc-ico" aria-label="Email">✉</a> <a
              href="https://wa.me/51976339443" target="_blank" rel="noopener" class="soc-ico"
              aria-label="WhatsApp">◉</a> </div>
        </div>
      </div> <!-- FORM -->
      <div class="contact-form-wrap"> <span class="eyebrow">GET IN TOUCH</span>
        <h2 class="form-title">Let's talk coffee.</h2>
        <p class="form-sub"> Tell us what you're looking for and our team will get back to you shortly. </p>
        <form class="contact-form" @submit.prevent="sendMessage">
          <div class="form-row">
            <div class="form-field"> <label>Full Name <span>*</span></label> <input v-model="form.name" type="text"
                placeholder="Your name" :class="{ error: errors.name }" /> <small v-if="errors.name">{{ errors.name
                }}</small>
            </div>
            <div class="form-field"> <label>Company</label> <input v-model="form.company" type="text"
                placeholder="Roastery / Company" /> </div>
          </div>
          <div class="form-row">
            <div class="form-field"> <label>Email <span>*</span></label> <input v-model="form.email" type="email"
                placeholder="you@company.com" :class="{ error: errors.email }" /> <small v-if="errors.email">{{
                errors.email
                }}</small> </div>
            <div class="form-field"> <label>Phone</label> <input v-model="form.phone" type="tel"
                placeholder="+51 900 000 000" /> </div>
          </div>
          <div class="form-field"> <label>I'm interested in <span>*</span></label> <select v-model="form.interest"
              :class="{ error: errors.interest }">
              <option value="" disabled>Select an option</option>
              <option value="Requesting Samples">Requesting Samples</option>
              <option value="Current Offer List">Current Offer List</option>
              <option value="Microlots / Single Origin">Microlots / Single Origin</option>
              <option value="Long-term Partnership">Long-term Partnership</option>
              <option value="Other">Other</option>
            </select> <small v-if="errors.interest">{{ errors.interest }}</small> </div>
          <div class="form-field"> <label>Message <span>*</span></label> <textarea v-model="form.message" rows="5"
              placeholder="Tell us a bit about what you're looking for..."
              :class="{ error: errors.message }"></textarea>
            <small v-if="errors.message">{{ errors.message }}</small>
          </div> <!-- SEND OPTIONS -->
          <div class="send-options"> <button type="submit" class="btn btn-dark"> Send by Email <span>→</span> </button>
            <button type="button" class="btn btn-whatsapp" @click="sendWhatsApp"> WhatsApp <span>↗</span> </button>
          </div>
          <div v-if="success" class="form-success"> ✓ Your message is ready to send. Thank you! </div>
        </form>
      </div>
    </div>
  </section>
</template>
<script
  setup>  import { reactive, ref } from "vue"; const form = reactive({ name: "", company: "", email: "", phone: "", interest: "", message: "" }); const errors = reactive({}); const success = ref(false); const contactInfo = [{ label: "Email", type: "email", values: ["info@chacracoffee.com", "bryanzc@chacracoffee.com"], icon: "✉" }, { label: "Phone / WhatsApp", values: ["+51 976 339 443", "+51 948 512 606"], icon: "⌕" }, { label: "Location", value: "Jaén, Cajamarca, Peru", icon: "⌖" }, { label: "Office Hours", value: "Mon – Fri · 8:00 – 17:00 · Sat 8:00 – 13:00", icon: "◷" }]; const validate = () => { Object.keys(errors).forEach(key => delete errors[key]); if (!form.name.trim()) errors.name = "Please enter your name"; if (!form.email.trim()) { errors.email = "Please enter your email"; } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { errors.email = "Please enter a valid email"; } if (!form.interest) errors.interest = "Please select an option"; if (!form.message.trim()) errors.message = "Please enter a message"; return Object.keys(errors).length === 0; }; const getMessage = () => ` Hello Chacra Coffee, I would like to get in touch with your team. Name: ${form.name} Company: ${form.company || "Not specified"} Email: ${form.email} Phone: ${form.phone || "Not specified"} Interest: ${form.interest} Message: ${form.message} Thank you. `; const sendMessage = () => { if (!validate()) return; const subject = encodeURIComponent(`Website Contact - ${form.interest}`); const body = encodeURIComponent(getMessage()); window.location.href = `mailto:info@chacracoffee.com?subject=${subject}&body=${body}`; success.value = true; }; const sendWhatsApp = () => { if (!validate()) return; const phone = "51976339443"; const message = encodeURIComponent(getMessage()); window.open(`https://wa.me/${phone}?text=${message}`, "_blank", "noopener,noreferrer"); success.value = true; }; </script>
<style
  scoped>
  .contact-main {
    background: var(--ivory);
    padding: 80px 0 100px;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: 320px 1fr;
    gap: 55px;
    align-items: start;
  }

  /* INFO */
  .contact-info {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .info-card {
    display: flex;
    gap: 14px;
    padding: 17px;
    background: var(--white);
    border-radius: var(--r-md);
    box-shadow: var(--sh-sm);
    transition: .3s ease;
  }

  .info-card:hover {
    transform: translateY(-3px);
    box-shadow: var(--sh-md);
  }

  .info-icon {
    width: 38px;
    height: 38px;
    flex: 0 0 38px;
    display: grid;
    place-items: center;
    border-radius: 10px;
    color: var(--gold);
    background: rgba(200, 168, 90, .1);
    border: 1px solid rgba(200, 168, 90, .2);
    font-size: 18px;
  }

  .info-body {
    display: flex;
    flex-direction: column;
    gap: 3px;
    min-width: 0;
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
    line-height: 1.5;
    color: var(--text);
    text-decoration: none;
  }

  a.info-value:hover {
    color: var(--green-lt);
  }

  .info-social-card {
    margin-top: 3px;
    padding: 20px;
    border-radius: var(--r-md);
    background: var(--green);
  }

  .info-social-card .info-label {
    color: rgba(255, 255, 255, .5);
  }

  .socials {
    display: flex;
    gap: 8px;
    margin-top: 12px;
  }

  .soc-ico {
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    border: 1px solid rgba(255, 255, 255, .18);
    border-radius: var(--r-sm);
    color: rgba(255, 255, 255, .75);
    text-decoration: none;
    transition: .3s ease;
  }

  .soc-ico:hover {
    color: var(--gold);
    border-color: var(--gold);
    transform: translateY(-2px);
  }

  /* FORM */
  .contact-form-wrap {
    padding: 44px;
    background: var(--white);
    border-radius: var(--r-lg);
    box-shadow: var(--sh-md);
  }

  .eyebrow {
    display: block;
    margin-bottom: 8px;
    color: var(--gold);
    font-size: 9px;
    font-weight: 700;
    letter-spacing: .18em;
  }

  .form-title {
    margin: 0 0 7px;
    font-family: var(--ff-d);
    font-size: 30px;
    color: var(--text);
  }

  .form-sub {
    margin: 0 0 30px;
    color: var(--text-l);
    font-size: 13px;
  }

  .contact-form {
    display: flex;
    flex-direction: column;
    gap: 18px;
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
  }

  .form-field label {
    font-size: 11px;
    font-weight: 700;
    color: var(--text);
  }

  .form-field label span {
    color: var(--gold);
  }

  .form-field input,
  .form-field select,
  .form-field textarea {
    width: 100%;
    box-sizing: border-box;
    padding: 11px 14px;
    border: 1.5px solid var(--ivory-d);
    border-radius: 8px;
    background: var(--ivory);
    color: var(--text);
    font: 13px var(--ff-b);
    transition: .25s ease;
  }

  .form-field textarea {
    resize: vertical;
    min-height: 125px;
  }

  .form-field input:focus,
  .form-field select:focus,
  .form-field textarea:focus {
    outline: none;
    border-color: var(--gold);
    background: var(--white);
  }

  .form-field input.error,
  .form-field select.error,
  .form-field textarea.error {
    border-color: #c0392b;
  }

  .form-field small {
    color: #c0392b;
    font-size: 10px;
  }

  /* BUTTONS */
  .send-options {
    display: flex;
    gap: 10px;
    margin-top: 4px;
  }

  .btn {
    min-height: 42px;
    padding: 0 20px;
    border: 0;
    border-radius: 7px;
    cursor: pointer;
    font: 700 11px var(--ff-b);
    letter-spacing: .04em;
    transition: .3s ease;
  }

  .btn span {
    margin-left: 7px;
  }

  .btn-dark {
    background: var(--green);
    color: white;
  }

  .btn-dark:hover {
    background: var(--green-lt);
    transform: translateY(-2px);
  }

  .btn-whatsapp {
    background: #edf5ee;
    color: var(--green);
    border: 1px solid rgba(61, 107, 74, .2);
  }

  .btn-whatsapp:hover {
    background: var(--green);
    color: white;
    transform: translateY(-2px);
  }

  .form-success {
    padding: 13px 15px;
    border-radius: 8px;
    background: rgba(61, 107, 74, .08);
    border: 1px solid rgba(61, 107, 74, .2);
    color: var(--green-lt);
    font-size: 12px;
  }

  /* RESPONSIVE */
  @media (max-width: 850px) {
    .contact-grid {
      grid-template-columns: 1fr;
      gap: 30px;
    }

    .contact-info {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .info-social-card {
      grid-column: span 2;
    }
  }

  @media (max-width: 600px) {
    .contact-main {
      padding: 55px 0 70px;
    }

    .contact-info,
    .form-row {
      grid-template-columns: 1fr;
    }

    .info-social-card {
      grid-column: auto;
    }

    .contact-form-wrap {
      padding: 28px 20px;
    }

    .form-title {
      font-size: 26px;
    }

    .send-options {
      flex-direction: column;
    }

    .btn {
      width: 100%;
    }
  }
</style>
