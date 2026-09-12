<template>
<section class="ab-team">
    <div class="container">
      <div class="ab-team-header" data-aos>
        <span class="eyebrow gold">The Team</span>
        <h2 class="section-title">The people behind<br><em>every cup.</em></h2>
        <p>A small, dedicated team of agronomists, cuppers and logistics specialists working from the source.</p>
      </div>
      <div class="ab-team-grid">

        <div class="ab-team-card" data-aos>
          <div class="ab-team-img" style="background-image:url('/img/about/Andy_LLanos.JPG')"></div>
          <div class="ab-team-body">
            <h4 class="ab-team-name">Andy Llanos</h4>
            <span class="ab-team-role">Founder &amp; Head of Sourcing</span>
            <p>Born in Jaén, Andy has spent over a decade building relationships with producers across Cajamarca. He
              leads all sourcing, cupping and producer development.</p>
          </div>
        </div>

        <div class="ab-team-card" data-aos>
          <div class="ab-team-img" style="background-image:url('/img/about/francohuaches.jpg')"></div>
          <div class="ab-team-body">
            <h4 class="ab-team-name">Franco Huaches</h4>
            <span class="ab-team-role">Processing &amp; Quality Control</span>
            <p>Franco oversees all wet and dry milling operations at our Jaén station, ensuring each lot meets
              specialty-grade standards before export.</p>
          </div>
        </div>

        <div class="ab-team-card" data-aos>
          <div class="ab-team-img" style="background-image:url('/img/about/lasetiopes.jpg')"></div>
          <div class="ab-team-body">
            <h4 class="ab-team-name">Las Etiopes Farm</h4>
            <span class="ab-team-role">Producer Partner — San Ignacio</span>
            <p>One of our flagship producer partners in San Ignacio, known for exceptional Geisha and Caturra lots grown
              above 1,800 masl.</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<style>
.ab-team {
  background: var(--ivory-d);
  padding: 100px 0 110px;
}
.ab-team-header {
  max-width: 520px;
  margin-bottom: 56px;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.ab-team-header p {
  font-size: 14px;
  color: var(--text-m);
  line-height: 1.75;
}
.ab-team-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
.ab-team-card {
  background: var(--white);
  border-radius: var(--r-md);
  overflow: hidden;
  box-shadow: var(--sh-sm);
  transition: transform var(--tr), box-shadow var(--tr);
}
.ab-team-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--sh-md);
}
.ab-team-img {
  height: 300px;
  background-size: cover;
  background-position: center top;
  transition: transform .5s ease;
}
.ab-team-card:hover .ab-team-img {
  transform: scale(1.04);
}
.ab-team-body {
  padding: 24px 22px 28px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.ab-team-name {
  font-family: var(--ff-d);
  font-size: 22px;
  font-weight: 400;
  color: var(--text);
}
.ab-team-role {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .16em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 8px;
}
.ab-team-body p {
  font-size: 13px;
  color: var(--text-m);
  line-height: 1.75;
}
</style>