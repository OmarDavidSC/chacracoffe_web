<template>
  <footer class="footer">
    <div class="footer-inner container">
      <div class="footer-brand">
        <img src="../../public/img/Logo_Chacra.png" alt="Chacra Coffee" class="footer-logo logo-img">
        <p class="footer-tag">Specialty Coffee<br>From Peru</p>
      </div>
      <div class="footer-cols">
        <div class="footer-col">
          <h4>Company</h4>
          <ul>
            <li><router-link to="/home">Home</router-link></li>
            <li><router-link to="/ourstory">Our Story</router-link></li>
            <li><router-link to="/about">About Us</router-link></li>
            <li><router-link to="/offer">Offer List</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
            <li><router-link to="/contact">Contact</router-link></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Coffees</h4>
          <ul>
            <li><RouterLink to="/offer">Regional Blends</RouterLink></li>
            <li><RouterLink to="/offer">Microlots</RouterLink></li>
            <li><RouterLink to="/offer">Experimental Lots</RouterLink></li>
            <li><RouterLink to="/offer">Offer List</RouterLink></li>
          </ul>
        </div>
        
        <div class="footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:info@chacracoffee.com">info@chacracoffee.com</a></li>
            <li><a href="https://wa.me/51937791406">+51 937 791 406</a></li>
            <li>Jaén, Cajamarca, Peru</li>
          </ul>
          <div class="footer-social"><span>Follow Us</span>
            <div class="socials">
              <!-- Instagram -->
              <a href="https://www.instagram.com/chacracoffee/" class="soc-ico" target="_blank"
                rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>

              <!-- Facebook -->
              <a href="https://www.facebook.com/profile.php?id=61559304344126" class="soc-ico" target="_blank"
                rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span>© <span id="year"></span> CHACRA COFFEE LIMITED. ALL RIGHTS RESERVED.</span>
      <div><a href="Privacy.html">Privacy Policy</a><a href="Conditions.html">Terms &amp; Conditions</a></div>
    </div>
  </footer>
</template>

<style>
.footer {
  background: var(--charcoal);
  padding-top: 64px;
}

.footer-inner {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 48px;
  padding-bottom: 48px;
  border-bottom: 1px solid rgba(255, 255, 255, .06);
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.footer-logo {
  height: 58px;
  width: auto;
  object-fit: contain;
}

.footer-tag {
  font-size: 10px;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, .28);
  line-height: 1.7;
  margin-top: 4px;
}

.footer-cols {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
}

.footer-col h4 {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: .16em;
  text-transform: uppercase;
  color: var(--white);
  margin-bottom: 14px;
}

.footer-col ul {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-col li,
.footer-col li a {
  font-size: 13px;
  color: rgba(255, 255, 255, .36);
  transition: color var(--tr);
}

.footer-col li a:hover {
  color: var(--white);
}

.footer-social {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.footer-social>span {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, .26);
}

.socials {
  display: flex;
  gap: 8px;
}

.soc-ico {
  width: 34px;
  height: 34px;
  border: 1px solid rgba(255, 255, 255, .12);
  border-radius: var(--r-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, .42);
  transition: all var(--tr);
}

.soc-ico svg {
  width: 14px;
  height: 14px;
}

.soc-ico:hover {
  background: var(--green-mid);
  border-color: var(--green-mid);
  color: var(--white);
}

.footer-bottom {
  max-width: 1180px;
  margin: 0 auto;
  padding: 20px 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: wrap;
}

.footer-bottom span,
.footer-bottom a {
  font-size: 11px;
  color: rgba(255, 255, 255, .22);
  letter-spacing: .05em;
}

.footer-bottom div {
  display: flex;
  gap: 18px;
}

.footer-bottom a:hover {
  color: rgba(255, 255, 255, .55);
}
</style>