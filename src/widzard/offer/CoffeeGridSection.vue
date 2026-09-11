<template>
<section class="catalog-section">
      <div class="container">
        <div class="catalog-grid" id="catalogGrid">
          <!-- ===== REGIONAL BLENDS ===== -->
          <article
            class="cat-card"
            data-category="regional"
            data-process="washed"
            data-origin="jaen"
          >
            <div
              class="cat-img"
              style="background-image: url(&quot;Fondo_1.jpg&quot;)"
            >
              <span class="cat-badge">Regional Blend</span>
              <div class="cat-score"><span>84</span></div>
            </div>
            <div class="cat-body">
              <h3 class="cat-title">Jaén Reserve</h3>
              <span class="cat-origin">Jaén, Cajamarca · 1,300–1,800 masl</span>
              <div class="cat-tags">
                <span class="cat-tag">Washed</span
                ><span class="cat-tag">Typica</span
                ><span class="cat-tag">Caturra</span>
              </div>
              <p class="cat-notes">Chocolate, caramel, orange</p>
              <a href="#" class="cat-link">Request Sample →</a>
            </div>
          </article>

          <article
            class="cat-card"
            data-category="regional"
            data-process="natural"
            data-origin="cutervo"
          >
            <div
              class="cat-img"
              style="background-image: url(&quot;Fondo_2.jpg&quot;)"
            >
              <span class="cat-badge">Regional Blend</span>
              <div class="cat-score"><span>85</span></div>
            </div>
            <div class="cat-body">
              <h3 class="cat-title">Cutervo Highland</h3>
              <span class="cat-origin"
                >Cutervo, Cajamarca · 1,800–2,100 masl</span
              >
              <div class="cat-tags">
                <span class="cat-tag">Natural</span
                ><span class="cat-tag">Typica</span
                ><span class="cat-tag">Geisha</span>
              </div>
              <p class="cat-notes">Tropical fruits, panela, vanilla</p>
              <a href="#" class="cat-link">Request Sample →</a>
            </div>
          </article>

          <article
            class="cat-card"
            data-category="regional"
            data-process="washed"
            data-origin="cajamarca"
          >
            <div
              class="cat-img"
              style="background-image: url(&quot;Fondo_3.jpg&quot;)"
            >
              <span class="cat-badge">Regional Blend</span>
              <div class="cat-score"><span>83</span></div>
            </div>
            <div class="cat-body">
              <h3 class="cat-title">Cajamarca Classic</h3>
              <span class="cat-origin"
                >Cajamarca Central · 1,300–2,000 masl</span
              >
              <div class="cat-tags">
                <span class="cat-tag">Washed</span
                ><span class="cat-tag">Bourbon</span
                ><span class="cat-tag">Catura</span>
              </div>
              <p class="cat-notes">Caramel, chocolate, citrus</p>
              <a href="#" class="cat-link">Request Sample →</a>
            </div>
          </article>

          <!-- ===== MICROLOTS ===== -->
          <article
            class="cat-card cat-featured"
            data-category="microlot"
            data-process="honey"
            data-origin="san-ignacio"
          >
            <div
              class="cat-img"
              style="
                background-image: url(&quot;https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80&quot;);
              "
            >
              <span class="cat-badge gold">Microlot</span>
              <div class="cat-score gold"><span>87</span></div>
            </div>
            <div class="cat-body">
              <h3 class="cat-title">San Ignacio Geisha</h3>
              <span class="cat-origin">San Ignacio · 1,200–1,900 masl</span>
              <div class="cat-tags">
                <span class="cat-tag">Honey</span
                ><span class="cat-tag">Geisha</span
                ><span class="cat-tag">Single Farm</span>
              </div>
              <p class="cat-notes">Floral, bergamot, red fruits</p>
              <a href="#" class="cat-link">Request Sample →</a>
            </div>
          </article>

          <article
            class="cat-card"
            data-category="microlot"
            data-process="washed"
            data-origin="jaen"
          >
            <div
              class="cat-img"
              style="
                background-image: url(&quot;https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80&quot;);
              "
            >
              <span class="cat-badge gold">Microlot</span>
              <div class="cat-score gold"><span>86</span></div>
            </div>
            <div class="cat-body">
              <h3 class="cat-title">María Flores Lot</h3>
              <span class="cat-origin">Jaén · El Porvenir · 1,400 masl</span>
              <div class="cat-tags">
                <span class="cat-tag">Washed</span
                ><span class="cat-tag">Bourbon</span
                ><span class="cat-tag">Traceable</span>
              </div>
              <p class="cat-notes">Dark chocolate, almond</p>
              <a href="#" class="cat-link">Request Sample →</a>
            </div>
          </article>

          <article
            class="cat-card"
            data-category="microlot"
            data-process="natural"
            data-origin="cutervo"
          >
            <div
              class="cat-img"
              style="
                background-image: url(&quot;https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&q=80&quot;);
              "
            >
              <span class="cat-badge gold">Microlot</span>
              <div class="cat-score gold"><span>87</span></div>
            </div>
            <div class="cat-body">
              <h3 class="cat-title">Elmer Valdivia Selection</h3>
              <span class="cat-origin">Cutervo · 1,900 masl</span>
              <div class="cat-tags">
                <span class="cat-tag">Natural</span
                ><span class="cat-tag">Caturra</span
                ><span class="cat-tag">Single Farm</span>
              </div>
              <p class="cat-notes">Strawberry, brown sugar</p>
              <a href="#" class="cat-link">Request Sample →</a>
            </div>
          </article>

          <article
            class="cat-card"
            data-category="microlot"
            data-process="honey"
            data-origin="san-ignacio"
          >
            <div
              class="cat-img"
              style="
                background-image: url(&quot;https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600&q=80&quot;);
              "
            >
              <span class="cat-badge gold">Microlot</span>
              <div class="cat-score gold"><span>86</span></div>
            </div>
            <div class="cat-body">
              <h3 class="cat-title">Andy Llanos Honey</h3>
              <span class="cat-origin">Colasay, San Ignacio · 1,700 masl</span>
              <div class="cat-tags">
                <span class="cat-tag">Honey</span
                ><span class="cat-tag">Pache</span
                ><span class="cat-tag">Traceable</span>
              </div>
              <p class="cat-notes">Black tea, bergamot</p>
              <a href="#" class="cat-link">Request Sample →</a>
            </div>
          </article>

          <!-- ===== EXPERIMENTAL ===== -->
          <article
            class="cat-card cat-featured"
            data-category="experimental"
            data-process="anaerobic"
            data-origin="callayuc"
          >
            <div
              class="cat-img"
              style="
                background-image: url(&quot;https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80&quot;);
              "
            >
              <span class="cat-badge gold">Experimental</span>
              <div class="cat-score gold"><span>88</span></div>
            </div>
            <div class="cat-body">
              <h3 class="cat-title">Callayuc Anaerobic</h3>
              <span class="cat-origin">Callayuc · 1,900–2,400 masl</span>
              <div class="cat-tags">
                <span class="cat-tag">Anaerobic</span
                ><span class="cat-tag">Typica</span
                ><span class="cat-tag">72h Fermentation</span>
              </div>
              <p class="cat-notes">Passion fruit, guava, jasmine</p>
              <a href="#" class="cat-link">Request Sample →</a>
            </div>
          </article>

          <article
            class="cat-card"
            data-category="experimental"
            data-process="anaerobic"
            data-origin="queromarca"
          >
            <div
              class="cat-img"
              style="
                background-image: url(&quot;https://images.unsplash.com/photo-1442550528053-c431ecb55509?w=600&q=80&quot;);
              "
            >
              <span class="cat-badge gold">Experimental</span>
              <div class="cat-score gold"><span>87</span></div>
            </div>
            <div class="cat-body">
              <h3 class="cat-title">Queromarca Carbonic</h3>
              <span class="cat-origin">Queromarca · 2,200 masl</span>
              <div class="cat-tags">
                <span class="cat-tag">Carbonic Maceration</span
                ><span class="cat-tag">Bourbon</span>
              </div>
              <p class="cat-notes">Green apple, peach, nuts</p>
              <a href="#" class="cat-link">Request Sample →</a>
            </div>
          </article>

          <article
            class="cat-card"
            data-category="experimental"
            data-process="natural"
            data-origin="callayuc"
          >
            <div
              class="cat-img"
              style="
                background-image: url(&quot;https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80&quot;);
              "
            >
              <span class="cat-badge gold">Experimental</span>
              <div class="cat-score gold"><span>88</span></div>
            </div>
            <div class="cat-body">
              <h3 class="cat-title">Jungle Long Ferment</h3>
              <span class="cat-origin"
                >Callayuc · High Jungle · 2,000 masl</span
              >
              <div class="cat-tags">
                <span class="cat-tag">Long Fermentation</span
                ><span class="cat-tag">Pache</span>
              </div>
              <p class="cat-notes">Honey, jasmine, tropical</p>
              <a href="#" class="cat-link">Request Sample →</a>
            </div>
          </article>

          <article
            class="cat-card"
            data-category="regional"
            data-process="honey"
            data-origin="cajamarca"
          >
            <div
              class="cat-img"
              style="
                background-image: url(&quot;https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80&quot;);
              "
            >
              <span class="cat-badge">Regional Blend</span>
              <div class="cat-score"><span>84</span></div>
            </div>
            <div class="cat-body">
              <h3 class="cat-title">José Quispe Honey</h3>
              <span class="cat-origin">Cajamarca Central · 1,600 masl</span>
              <div class="cat-tags">
                <span class="cat-tag">Honey</span
                ><span class="cat-tag">Catimor</span>
              </div>
              <p class="cat-notes">Caramel, red fruits</p>
              <a href="#" class="cat-link">Request Sample →</a>
            </div>
          </article>

          <article
            class="cat-card"
            data-category="microlot"
            data-process="washed"
            data-origin="queromarca"
          >
            <div
              class="cat-img"
              style="
                background-image: url(&quot;https://images.unsplash.com/photo-1506372023823-741c83b836fe?w=600&q=80&quot;);
              "
            >
              <span class="cat-badge gold">Microlot</span>
              <div class="cat-score gold"><span>86</span></div>
            </div>
            <div class="cat-body">
              <h3 class="cat-title">High Jalca Lot</h3>
              <span class="cat-origin">Queromarca · 2,300 masl</span>
              <div class="cat-tags">
                <span class="cat-tag">Washed</span
                ><span class="cat-tag">Typica</span
                ><span class="cat-tag">High Altitude</span>
              </div>
              <p class="cat-notes">Green apple, brown sugar</p>
              <a href="#" class="cat-link">Request Sample →</a>
            </div>
          </article>
        </div>

        <!-- Empty state -->
        <div class="catalog-empty" id="catalogEmpty">
          <p>No lots match your current filters.</p>
          <button class="btn btn-dark" id="resetFilters">Reset Filters</button>
        </div>
      </div>
    </section>
</template>

<style>
.catalog-section {
  background: var(--ivory);
  padding: 50px 0 100px;
}

.catalog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.cat-card {
  background: var(--white);
  border-radius: var(--r-md);
  overflow: hidden;
  box-shadow: var(--sh-sm);
  transition: transform var(--tr), box-shadow var(--tr), opacity .3s, transform .3s;
  display: flex;
  flex-direction: column;
}

.cat-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--sh-md);
}

.cat-card.cat-hidden {
  display: none;
}

.cat-featured {
  box-shadow: 0 4px 24px rgba(200, 168, 90, .18);
}

.cat-img {
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
}

.cat-img::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(20, 40, 26, .5) 0%, transparent 50%);
}

.cat-badge {
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 2;
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  background: rgba(255, 255, 255, .92);
  color: var(--text);
  padding: 4px 10px;
  border-radius: 20px;
}

.cat-badge.gold {
  background: rgba(200, 168, 90, .92);
  color: #1A3026;
}

.cat-score {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 2;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(26, 48, 38, .85);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--ff-d);
  font-size: 14px;
  color: var(--white);
  border: 1px solid rgba(255, 255, 255, .2);
}

.cat-score.gold {
  background: rgba(200, 168, 90, .92);
  color: #1A3026;
  border-color: transparent;
  font-weight: 700;
}

.cat-body {
  padding: 18px 20px 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex: 1;
}

.cat-title {
  font-family: var(--ff-d);
  font-size: 18px;
  color: var(--text);
  line-height: 1.2;
}

.cat-origin {
  font-size: 11px;
  color: var(--text-l);
}

.cat-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin: 6px 0 2px;
}

.cat-tag {
  font-size: 9px;
  font-weight: 700;
  letter-spacing: .06em;
  text-transform: uppercase;
  padding: 3px 8px;
  border-radius: 20px;
  background: var(--ivory);
  color: var(--text-m);
  border: 1px solid var(--ivory-d);
}

.cat-notes {
  font-size: 12px;
  color: var(--text-m);
  font-style: italic;
}

.cat-link {
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .06em;
  text-transform: uppercase;
  color: var(--green);
  margin-top: 10px;
  transition: color var(--tr);
}

.cat-link:hover {
  color: var(--gold);
}

/* ---- EMPTY STATE ---- */
.catalog-empty {
  display: none;
  text-align: center;
  padding: 80px 20px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.catalog-empty.show {
  display: flex;
}

.catalog-empty p {
  font-size: 15px;
  color: var(--text-m);
}
</style>