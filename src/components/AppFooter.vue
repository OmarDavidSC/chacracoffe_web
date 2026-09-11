<template>
    <footer class="footer">
    <div class="footer-top">
      <section class="footer-logo">
        <img src="/images/Logo_Chacra.png" alt="Chacra Coffee" class="footer__logo"/>
        <p>SPECIALTY COFFEE <br/> FROM PERU</p>
      </section>

      <nav class="footer-columna">
        <h2>Company</h2>
        <a href="#">About Us</a>
        <a href="#">Our Story</a>
        <a href="#">Sustainability</a>
        <a href="#">Careers</a>
      </nav>

      <nav class="footer-columna">
        <h2>Coffees</h2>
        <a href="#">Regional Blends</a>
        <a href="#">Microlots</a>
        <a href="#">Experimental Lots</a>
        <a href="#">Offer List</a>
      </nav>

      <nav class="footer-columna">
        <h2>Resources</h2>
        <a href="#">Quality Control</a>
        <a href="#">Traceability</a>
        <a href="#">Shipping & Logistics</a>
        <a href="#">FAQs</a>
      </nav>

      <section class="footer-columna">
        <h2>Contact</h2>
        <a href="mailto:info@chacracoffee.com">info@chacracoffee.com</a>
        <a href="tel:+51937911406">+51 937 911 406</a>
        <p>Jaén, Cajamarca, Peru</p>
        <div class="footer-redes">
            <p class="footer-redes-titulo">Follow us</p>

            <div class="footer-redes-links">
                <a class="footer-redes-link" href="#" aria-label="Instagram"> IG </a>
                <a class="footer-redes-link" href="#" aria-label="Facebook">f</a>
            </div>

        </div>
      </section>
    </div>

    <div class="footer-bottom">
      <p>© 2026 CHACRA COFFEE LIMITED. ALL RIGHTS RESERVED.</p>

      <div>
        <a href="#">Privacy Policy</a>
        <a href="#">Terms & Conditions</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>

.footer__logo {
  display: block;
  width: 72px;
  height: auto;
}

.footer {
  padding: 72px 24px 24px;
  background: #1c1d1a;
  color: #f4f1e8;
}

.footer-top {
  display: grid;
  grid-template-columns: 1.3fr repeat(4, 1fr);
  gap: 56px;
  width: min(100%, 1160px);
  margin: 0 auto;
}

.footer-columna {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 14px;
}

.footer-columna h2 {
  margin: 0 0 4px;
  color: #f4f1e8;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.footer-columna a {
  color: #7c827d;
  font-size: 14px;
  text-decoration: none;
}

.footer-columna p {
  margin: 0;
  color: #7c827d;
  font-size: 14px;
}

.footer-logo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
}

.footer-logo p {
  margin: 0;
  color: #7c827d;
  font-size: 10px;
  font-weight: 600;
  line-height: 1.7;
  letter-spacing: 1.2px;
}

.footer-redes {
  margin-top: 8px;
}

.footer-redes-titulo {
  margin: 0 0 10px;
  color: #7c827d;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.footer-redes-links {
  display: flex;
  gap: 8px;
}

.footer-redes-link {
  display: grid;
  place-items: center;

  width: 34px;
  height: 34px;
  border: 1px solid #444842;
  border-radius: 3px;

  color: #b7bbb4;
  font-size: 11px;
  text-decoration: none;
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: min(100%, 1160px);
  margin: 64px auto 0;
  padding-top: 22px;
  border-top: 1px solid #31342f;
}

.footer-bottom p {
  margin: 0;
  color: #6f756f;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.7px;
}

.footer-bottom a {
  color: #6f756f;
  font-size: 12px;
  text-decoration: none;
}
</style>