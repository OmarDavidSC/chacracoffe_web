<template>
  <section class="ab-team">
    <div class="container">
      <!-- HEADER -->
      <div class="ab-team-header" data-aos="fade-up" data-aos-duration="900" data-aos-once="true">
        <span class="eyebrow gold">The Team</span>
        <h2 class="section-title">
          The people behind<br />
          <em>every cup.</em>
        </h2>
      </div>
      <!-- TEAM -->
      <div class="ab-team-grid">
        <!-- ANDY -->
        <div class="ab-team-member ab-team-member-1" data-aos="fade-up" data-aos-duration="800" data-aos-delay="100"
          data-aos-once="true">
          <div class="ab-team-photo-wrap">
            <div class="ab-team-photo" style="background-image: url(&quot;/img/about/Andy_LLanos.JPG&quot;);"></div>
            <span class="ab-team-number">01</span>
          </div>
          <div class="ab-team-info">
            <h4 class="ab-team-name">Andy Llanos</h4>
            <span class="ab-team-role"> Founder &amp; Head of Sourcing </span>
            <p>
              Born in Jaén, Andy has spent over a decade building relationships
              with producers across Cajamarca. He leads all sourcing, cupping
              and producer development.
            </p>
          </div>
        </div>
        <!-- FRANCO -->
        <div class="ab-team-member ab-team-member-2" data-aos="fade-up" data-aos-duration="800" data-aos-delay="250"
          data-aos-once="true">
          <div class="ab-team-photo-wrap">
            <div class="ab-team-photo" style="background-image: url(&quot;/img/about/francohuaches.jpg&quot;);"></div>
            <span class="ab-team-number">02</span>
          </div>
          <div class="ab-team-info">
            <h4 class="ab-team-name">Franco Huaches</h4>
            <span class="ab-team-role"> Processing &amp; Quality Control </span>
            <p>
              Franco oversees all wet and dry milling operations at our Jaén
              station, ensuring each lot meets specialty-grade standards before
              export.
            </p>
          </div>
        </div>
        <!-- LAS ETIOPES -->
        <div class="ab-team-member ab-team-member-3" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400"
          data-aos-once="true">
          <div class="ab-team-photo-wrap">
            <div class="ab-team-photo" style="background-image: url(&quot;/img/about/lasetiopes.jpg&quot;);"></div>
            <span class="ab-team-number">03</span>
          </div>
          <div class="ab-team-info">
            <h4 class="ab-team-name">Las Etiopes Farm</h4>
            <span class="ab-team-role"> Producer Partner — San Ignacio </span>
            <p>
              One of our flagship producer partners in San Ignacio, known for
              exceptional Geisha and Caturra lots grown above 1,800 masl.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.ab-team {
  position: relative;
  background: var(--ivory-d);
  padding: 110px 0 120px;
  overflow: hidden;
}

.ab-team-header {
  max-width: 560px;
  margin: 0 auto 75px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.ab-team-header p {
  max-width: 500px;
  font-size: 14px;
  color: var(--text-m);
  line-height: 1.8;
}

.ab-team-grid {
  max-width: 1050px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 80px;
  row-gap: 90px;
  align-items: start;
}

.ab-team-member {
  text-align: center;
  position: relative;
}

.ab-team-member-1 {
  grid-column: 1 / 3;
  justify-self: center;
  margin-bottom: 10px;
}

.ab-team-member-2 {
  grid-column: 1;
  justify-self: center;
}

.ab-team-member-3 {
  grid-column: 2;
  justify-self: center;
}

.ab-team-photo-wrap {
  width: 250px;
  height: 250px;
  margin: 0 auto 30px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.ab-team-photo-wrap::before {
  content: "";
  position: absolute;
  inset: -9px;
  border: 1px solid rgba(180, 142, 72, 0.35);
  border-radius: 50%;
  transition:
    transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.4s ease;
}

.ab-team-photo-wrap::after {
  content: "";
  position: absolute;
  inset: -18px;
  border: 1px solid rgba(180, 142, 72, 0.1);
  border-radius: 50%;
  transition:
    transform 0.7s cubic-bezier(0.22, 1, 0.36, 1),
    opacity 0.4s ease;
}

.ab-team-photo {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-size: cover;
  background-position: center top;
  position: relative;
  z-index: 2;
  box-shadow: 0 12px 35px rgba(0, 0, 0, 0.12);
  transition:
    transform 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.5s ease;
  overflow: hidden;
}

.ab-team-photo::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: linear-gradient(180deg,
      rgba(255, 255, 255, 0) 50%,
      rgba(0, 0, 0, 0.18) 100%);
  opacity: 0.5;
  transition: opacity 0.4s ease;
}

.ab-team-number {
  position: absolute;
  right: -2px;
  bottom: 12px;
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: var(--gold);
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.08em;
  z-index: 4;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  transition:
    transform 0.4s ease,
    background 0.4s ease;
}

.ab-team-info {
  max-width: 310px;
  margin: 0 auto;
}

.ab-team-name {
  font-family: var(--ff-d);
  font-size: 25px;
  font-weight: 400;
  color: var(--text);
  margin-bottom: 7px;
  transition: color 0.3s ease;
}

.ab-team-role {
  display: block;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.17em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 14px;
}

.ab-team-info p {
  font-size: 13px;
  color: var(--text-m);
  line-height: 1.8;
  margin: 0;
}

.ab-team-member:hover .ab-team-photo {
  transform: scale(1.045);
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.18);
}

.ab-team-member:hover .ab-team-photo-wrap::before {
  transform: scale(1.06);
  border-color: rgba(180, 142, 72, 0.75);
}

.ab-team-member:hover .ab-team-photo-wrap::after {
  transform: scale(1.12);
  opacity: 0.8;
}

.ab-team-member:hover .ab-team-photo::after {
  opacity: 0.8;
}

.ab-team-member:hover .ab-team-number {
  transform: scale(1.12) rotate(8deg);
}

.ab-team-member:hover .ab-team-name {
  color: var(--gold);
}

@media (max-width: 900px) {
  .ab-team {
    padding: 90px 0 100px;
  }

  .ab-team-grid {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 30px;
    row-gap: 70px;
  }

  .ab-team-member-1 {
    grid-column: 1 / 3;
  }

  .ab-team-member-2 {
    grid-column: 1;
  }

  .ab-team-member-3 {
    grid-column: 2;
  }
}

@media (max-width: 600px) {
  .ab-team {
    padding: 75px 20px 85px;
  }

  .ab-team-header {
    margin-bottom: 60px;
  }

  .ab-team-grid {
    display: flex;
    flex-direction: column;
    gap: 75px;
  }

  .ab-team-member-1,
  .ab-team-member-2,
  .ab-team-member-3 {
    width: 100%;
    margin: 0;
  }

  .ab-team-photo-wrap {
    width: 220px;
    height: 220px;
  }

  .ab-team-name {
    font-size: 23px;
  }

  .ab-team-info {
    max-width: 340px;
  }
}

@media (prefers-reduced-motion: reduce) {

  .ab-team-photo,
  .ab-team-photo-wrap::before,
  .ab-team-photo-wrap::after,
  .ab-team-number,
  .ab-team-name {
    transition: none;
  }
}
</style>
