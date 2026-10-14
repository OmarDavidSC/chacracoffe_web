<template>
 <main>
    <!-- ============================================================ HERO -->
    <header class="nw-hero">
      <div class="nw-wrap">
        <div>
          <div class="nw-hero-kicker"><span class="nw-dot"></span>Chacra News, Issue 04, June 2026</div>
          <h1>What's new at<span>Chacra Coffee</span></h1>
          <p class="nw-hero-deck">New lots, producer stories and updates from our plant in Jaén. Eight new lots from
            northern Peru are scored and ready to export.</p>
          <div class="nw-hero-links">
            <a href="#featured" class="nw-btn nw-btn-gold">Read the Editor's Pick</a>
            <a href="#news" class="nw-btn nw-btn-ghost">Browse all news</a>
          </div>
        </div>
        <aside class="nw-latest" aria-label="Latest headlines">
          <h2>Latest headlines</h2>
          <ol>
            <li><a href="#news"><time datetime="2026-06-18">18 June 2026</time><span>Geisha Honey from Colasay scores
                  87.5</span></a></li>
            <li><a href="#news"><time datetime="2026-06-12">12 June 2026</time><span>Our Jaén plant adds a second drying
                  patio</span></a></li>
            <li><a href="#news"><time datetime="2026-06-05">5 June 2026</time><span>Meet María Nila, producer in
                  Huabal</span></a></li>
            <li><a href="#news"><time datetime="2026-05-28">28 May 2026</time><span>UK and EU stock arrives for the 2026
                  crop</span></a></li>
          </ol>
        </aside>
      </div>
    </header>

    <!-- ============================================================ FILTROS -->
    <div class="nw-filter">
      <div class="nw-wrap">
        <div class="nw-tabs" role="group" aria-label="Filter news by topic">
          <button class="nw-tab" data-filter="all" aria-pressed="true">All</button>
          <button class="nw-tab" data-filter="lots" aria-pressed="false">New lots</button>
          <button class="nw-tab" data-filter="producers" aria-pressed="false">Producers</button>
          <button class="nw-tab" data-filter="plant" aria-pressed="false">Our plant</button>
          <button class="nw-tab" data-filter="market" aria-pressed="false">Market &amp; export</button>
        </div>
        <span class="nw-count" id="nwCount" aria-live="polite"></span>
      </div>
    </div>

    <!-- ============================================================ EDITOR'S PICK -->
    <section class="nw-pick" id="featured">
      <div class="nw-wrap nw-pick-grid">
        <figure class="nw-pick-img" style="margin:0">
          <div class="ph" role="img" aria-label="Raised-bed honey processing"></div>
          <p>Raised-bed honey processing in Colasay, San Ignacio, at 1,850 masl.</p>
        </figure>
        <article>
          <span class="nw-tag">Editor's Pick: lot of the season</span>
          <h2>San Ignacio Geisha Honey, 2026 crop</h2>
          <p class="nw-lead">Some lots score well. Others stop a cupping room. This Geisha from Colasay, honey-processed
            for 22 days on raised beds, is the second kind.</p>

          <div class="nw-score">
            <div class="nw-score-big">87.5<small>SCA cup score</small></div>
            <div class="nw-bars">
              <div class="nw-bar"><span>Fragrance / Aroma</span><i><b style="--w:92%"></b></i><span>9.2</span></div>
              <div class="nw-bar"><span>Flavour</span><i><b style="--w:89%"></b></i><span>8.9</span></div>
              <div class="nw-bar"><span>Acidity</span><i><b style="--w:88%"></b></i><span>8.8</span></div>
              <div class="nw-bar"><span>Body</span><i><b style="--w:84%"></b></i><span>8.4</span></div>
              <div class="nw-bar"><span>Aftertaste</span><i><b style="--w:88%"></b></i><span>8.8</span></div>
              <div class="nw-bar"><span>Balance</span><i><b style="--w:87%"></b></i><span>8.7</span></div>
            </div>
          </div>

          <blockquote class="nw-quote">
            “Red fruit aromatics, a silky floral mid-palate, and a bergamot finish that lingers for minutes.”
            <cite>Q Grader, Chacra Coffee Cupping Lab</cite>
          </blockquote>

          <p class="nw-text">Grown by a small collective of Geisha producers in Colasay, this lot was hand-selected
            cherry by cherry during the April 2026 harvest. After de-pulping, the parchment dried on elevated African
            beds for 22 days, turned daily for an even, controlled fermentation. The cup is clear and transparent, with
            a sweetness that builds instead of fading.</p>

          <dl class="nw-specs">
            <div>
              <dt>Origin</dt>
              <dd>Colasay, San Ignacio</dd>
            </div>
            <div>
              <dt>Altitude</dt>
              <dd>1,850 masl</dd>
            </div>
            <div>
              <dt>Variety</dt>
              <dd>Geisha</dd>
            </div>
            <div>
              <dt>Process</dt>
              <dd>Honey, 22 days</dd>
            </div>
            <div>
              <dt>Harvest</dt>
              <dd>April 2026</dd>
            </div>
            <div>
              <dt>Availability</dt>
              <dd>Limited, 12 bags</dd>
            </div>
          </dl>

          <div class="nw-chips"><span>Red fruits</span><span>Floral</span><span>Bergamot</span><span>Black
              tea</span><span>Caramel</span></div>
          <a href="Contact.html" class="nw-btn nw-btn-gold"
            style="background:var(--nw-ink);border-color:var(--nw-ink);color:#fff">Request a sample of this lot</a>
        </article>
      </div>
    </section>

    <!-- ============================================================ FEED DE NOTICIAS -->
    <section class="nw-feed" id="news">
      <div class="nw-wrap">
        <div class="nw-feed-head">
          <h2>Latest news</h2>
        </div>
        <div class="nw-grid" id="nwGrid">

          <article class="nw-card is-wide" data-cat="lots">
            <div class="nw-media lot l1"><b>86.5</b><span>Anaerobic<br>Cutervo, 1,950 masl</span></div>
            <div class="nw-card-body">
              <div class="nw-meta"><strong>New lot</strong><time datetime="2026-06-16">16 June 2026</time><span>4 min
                  read</span></div>
              <h3>Anaerobic Caturra from Cutervo opens with notes of tropical fruit</h3>
              <p>Seventy-two hours of sealed fermentation give this lot a bright pineapple and passion fruit profile,
                with a clean, sugary finish. A good fit for roasters looking for an expressive filter coffee.</p>
              <a href="Contact.html" class="nw-more">Request a sample</a>
            </div>
          </article>

          <article class="nw-card" data-cat="plant">
            <div class="nw-media photo-a" role="img" aria-label="Drying patio at the Jaén plant"></div>
            <div class="nw-meta"><strong>Our plant</strong><time datetime="2026-06-12">12 June 2026</time></div>
            <h3>A second drying patio at our Jaén plant</h3>
            <p>More drying space means more lots dried slowly and evenly during peak harvest, without mixing processes.
            </p>
            <a href="OurStory.html#ab-facility" class="nw-more">See the facility</a>
          </article>

          <article class="nw-card" data-cat="producers">
            <div class="nw-media photo-b" role="img" aria-label="Producer in Huabal"></div>
            <div class="nw-meta"><strong>Producers</strong><time datetime="2026-06-05">5 June 2026</time><span>6 min
                read</span></div>
            <h3>María Nila and the farm that grows with each harvest</h3>
            <p>In Huabal, María Nila has spent years improving her drying practices. We visited her farm to hear how the
              work changed her lots.</p>
            <a href="#" class="nw-more">Read the story</a>
          </article>

          <article class="nw-card" data-cat="lots">
            <div class="nw-media lot l2"><b>85.0</b><span>Washed<br>Jaén, 1,600 masl</span></div>
            <div class="nw-meta"><strong>New lot</strong><time datetime="2026-06-02">2 June 2026</time></div>
            <h3>Washed Jaén: a clean, sweet cup for everyday service</h3>
            <p>Panela, red apple and a soft citric acidity. Consistent, traceable and available in larger volumes.</p>
            <a href="Contact.html" class="nw-more">Request a sample</a>
          </article>

          <article class="nw-card" data-cat="market">
            <div class="nw-media photo-c" role="img" aria-label="Green coffee bags ready to ship"></div>
            <div class="nw-meta"><strong>Market and export</strong><time datetime="2026-05-28">28 May 2026</time></div>
            <h3>UK and EU stock arrives for the 2026 crop</h3>
            <p>Selected lots are now in warehouses in Europe, so you can buy smaller volumes with shorter delivery
              times.</p>
            <a href="Contact.html" class="nw-more">Ask about stock</a>
          </article>

          <article class="nw-card" data-cat="lots">
            <div class="nw-media lot l3"><b>87.0</b><span>Natural<br>Queromarca, 2,200 masl</span></div>
            <div class="nw-meta"><strong>New lot</strong><time datetime="2026-05-20">20 May 2026</time></div>
            <h3>High-altitude natural from Queromarca</h3>
            <p>Dried cherry, cocoa nibs and red wine notes, with a long and syrupy finish.</p>
            <a href="Contact.html" class="nw-more">Request a sample</a>
          </article>

          <article class="nw-card" data-cat="producers">
            <div class="nw-media photo-a" style="background-position:70% 30%" role="img"
              aria-label="Producers at the cupping table"></div>
            <div class="nw-meta"><strong>Producers</strong><time datetime="2026-05-14">14 May 2026</time><span>5 min
                read</span></div>
            <h3>Andy Llanos, Colasay: why he separates every lot by day</h3>
            <p>Picking, fermenting and drying each day's harvest separately lets him offer more microlots with a clear
              profile.</p>
            <a href="#" class="nw-more">Read the story</a>
          </article>

          <article class="nw-card" data-cat="plant">
            <div class="nw-media photo-b" style="background-position:60% 50%" role="img" aria-label="Cupping lab"></div>
            <div class="nw-meta"><strong>Our plant</strong><time datetime="2026-05-08">8 May 2026</time></div>
            <h3>Inside our cupping lab: how every lot gets its score</h3>
            <p>From sample roast to the final SCA score, here is how we evaluate a lot before it is offered.</p>
            <a href="#" class="nw-more">Read more</a>
          </article>

          <article class="nw-card" data-cat="market">
            <div class="nw-media photo-c" style="background-position:30% 70%" role="img"
              aria-label="Specialty coffee fair"></div>
            <div class="nw-meta"><strong>Market and export</strong><time datetime="2026-04-30">30 April 2026</time>
            </div>
            <h3>See us at the next specialty coffee fairs</h3>
            <p>We are bringing samples from this season. Book a cupping session and taste the new lots with us.</p>
            <a href="Contact.html" class="nw-more">Book a cupping</a>
          </article>

        </div>
        <p class="nw-empty" id="nwEmpty">No stories in this topic yet. Check back soon.</p>
      </div>
    </section>

    <!-- ============================================================ CALENDARIO -->
    <section class="nw-cal" id="calendar">
      <div class="nw-wrap">
        <h2>Harvest calendar by origin</h2>
        <p class="sub">When each origin is picked and when its lots are ready to ship. Use it to plan your buying across
          the year.</p>
        <div class="nw-cal-scroll">
          <div class="nw-cal-table" role="table" aria-label="Harvest calendar">
            <div></div>
            <div class="m">Jan</div>
            <div class="m">Feb</div>
            <div class="m">Mar</div>
            <div class="m">Apr</div>
            <div class="m">May</div>
            <div class="m">Jun</div>
            <div class="m">Jul</div>
            <div class="m">Aug</div>
            <div class="m">Sep</div>
            <div class="m">Oct</div>
            <div class="m">Nov</div>
            <div class="m">Dec</div>

            <div class="o">Cajamarca</div>
            <div class="c"></div>
            <div class="c"></div>
            <div class="c"></div>
            <div class="c on"></div>
            <div class="c on peak"></div>
            <div class="c on peak"></div>
            <div class="c on peak"></div>
            <div class="c on"></div>
            <div class="c"></div>
            <div class="c"></div>
            <div class="c"></div>
            <div class="c"></div>
            <div class="o">Jaén</div>
            <div class="c"></div>
            <div class="c"></div>
            <div class="c on"></div>
            <div class="c on peak"></div>
            <div class="c on peak"></div>
            <div class="c on peak"></div>
            <div class="c on"></div>
            <div class="c"></div>
            <div class="c"></div>
            <div class="c"></div>
            <div class="c"></div>
            <div class="c"></div>
            <div class="o">San Ignacio</div>
            <div class="c"></div>
            <div class="c"></div>
            <div class="c on"></div>
            <div class="c on peak"></div>
            <div class="c on peak"></div>
            <div class="c on"></div>
            <div class="c on"></div>
            <div class="c"></div>
            <div class="c"></div>
            <div class="c"></div>
            <div class="c"></div>
            <div class="c"></div>
            <div class="o">Cutervo</div>
            <div class="c"></div>
            <div class="c"></div>
            <div class="c"></div>
            <div class="c"></div>
            <div class="c on"></div>
            <div class="c on peak"></div>
            <div class="c on peak"></div>
            <div class="c on peak"></div>
            <div class="c on"></div>
            <div class="c"></div>
            <div class="c"></div>
            <div class="c"></div>
            <div class="o">Queromarca</div>
            <div class="c"></div>
            <div class="c"></div>
            <div class="c"></div>
            <div class="c"></div>
            <div class="c on"></div>
            <div class="c on peak"></div>
            <div class="c on peak"></div>
            <div class="c on"></div>
            <div class="c on"></div>
            <div class="c"></div>
            <div class="c"></div>
            <div class="c"></div>
            <div class="o">Callayuc</div>
            <div class="c"></div>
            <div class="c"></div>
            <div class="c"></div>
            <div class="c"></div>
            <div class="c"></div>
            <div class="c on"></div>
            <div class="c on peak"></div>
            <div class="c on peak"></div>
            <div class="c on"></div>
            <div class="c on"></div>
            <div class="c"></div>
            <div class="c"></div>
          </div>
        </div>
        <div class="nw-legend"><span><i></i>Harvest window</span><span><i class="pk"></i>Peak harvest</span></div>
      </div>
    </section>

    <!-- ============================================================ NEWSLETTER -->
    <section class="nw-sub" id="notify">
      <div class="nw-wrap">
        <h2>Get new lots in your inbox</h2>
        <p>One email a month with new lots, scores and availability. No spam, and you can unsubscribe at any time.</p>
        <form id="nwForm">
          <input type="email" placeholder="Your work email" aria-label="Email address" required>
          <button type="submit">Subscribe</button>
        </form>
        <p class="nw-ok" id="nwOk">Thanks. You're on the list for the next drop.</p>
      </div>
    </section>
  </main>
</template>
<style>
    /* ===== Chacra News — todo con prefijo nw- para no chocar con Styles.css ===== */
    :root {
      --nw-ink: #1b1410;
      /* café tostado */
      --nw-ink-2: #2a201a;
      --nw-paper: #faf9f6;
      --nw-line: #e4dfd6;
      --nw-muted: #6d655c;
      --nw-gold: #C8A85A;
      --nw-gold-dk: #8f7430;
      /* dorado legible sobre fondo claro */
    }

    .nw-body {
      background: var(--nw-paper);
      color: var(--nw-ink);
      font-family: Inter, system-ui, sans-serif;
      margin: 0
    }

    .nw-wrap {
      max-width: 1180px;
      margin: 0 auto;
      padding: 0 24px
    }

    .nw-serif {
      font-family: 'DM Serif Display', Georgia, serif;
      font-weight: 400
    }

    .nw-body a:focus-visible,
    .nw-body button:focus-visible,
    .nw-body input:focus-visible {
      outline: 2px solid var(--nw-gold);
      outline-offset: 3px
    }

    /* ---------- Hero ---------- */
    .nw-hero {
      position: relative;
      background: var(--nw-ink);
      color: #fff;
      padding: 140px 0 70px;
      overflow: hidden
    }

    .nw-hero::before {
      content: "";
      position: absolute;
      inset: 0;
      background: url('Fondo_Web.jpg') center/cover;
      opacity: .28
    }

    .nw-hero::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(100deg, var(--nw-ink) 35%, rgba(27, 20, 16, .55))
    }

    .nw-hero .nw-wrap {
      position: relative;
      z-index: 1;
      display: grid;
      grid-template-columns: 1.35fr 1fr;
      gap: 64px;
      align-items: end
    }

    .nw-hero-kicker {
      display: flex;
      align-items: center;
      gap: 10px;
      color: var(--nw-gold);
      font-size: 14px;
      font-weight: 500;
      margin-bottom: 22px
    }

    .nw-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--nw-gold);
      animation: nwPulse 2.2s ease-out infinite
    }

    @keyframes nwPulse {
      0% {
        box-shadow: 0 0 0 0 rgba(200, 168, 90, .6)
      }

      100% {
        box-shadow: 0 0 0 12px rgba(200, 168, 90, 0)
      }
    }

    .nw-hero h1 {
      font-family: 'DM Serif Display', Georgia, serif;
      font-weight: 400;
      font-size: clamp(44px, 6.2vw, 84px);
      line-height: 1;
      margin: 0 0 22px;
      letter-spacing: -.01em
    }

    .nw-hero h1 span {
      display: block;
      color: var(--nw-gold);
      font-style: italic
    }

    .nw-hero-deck {
      max-width: 520px;
      color: #d9d0c4;
      line-height: 1.7;
      font-size: 17px;
      margin: 0 0 30px
    }

    .nw-hero-links {
      display: flex;
      gap: 14px;
      flex-wrap: wrap
    }

    .nw-btn {
      display: inline-block;
      padding: 13px 24px;
      border-radius: 2px;
      font-weight: 600;
      font-size: 14px;
      text-decoration: none;
      border: 1px solid var(--nw-gold);
      transition: background .2s, color .2s
    }

    .nw-btn-gold {
      background: var(--nw-gold);
      color: var(--nw-ink)
    }

    .nw-btn-gold:hover {
      background: #d8bb74
    }

    .nw-btn-ghost {
      color: var(--nw-gold)
    }

    .nw-btn-ghost:hover {
      background: rgba(200, 168, 90, .12)
    }

    .nw-latest {
      border-left: 1px solid rgba(200, 168, 90, .4);
      padding-left: 32px
    }

    .nw-latest h2 {
      font-size: 15px;
      font-weight: 600;
      color: var(--nw-gold);
      margin: 0 0 6px
    }

    .nw-latest ol {
      list-style: none;
      margin: 0;
      padding: 0
    }

    .nw-latest li {
      border-bottom: 1px solid rgba(255, 255, 255, .12)
    }

    .nw-latest a {
      display: block;
      padding: 15px 0;
      color: #fff;
      text-decoration: none
    }

    .nw-latest time {
      display: block;
      font-size: 12px;
      color: #a99f92;
      margin-bottom: 3px
    }

    .nw-latest span {
      font-size: 16px;
      line-height: 1.35;
      transition: color .2s
    }

    .nw-latest a:hover span {
      color: var(--nw-gold)
    }

    /* ---------- Barra de filtros ---------- */
    .nw-filter {
      position: sticky;
      top: 0;
      z-index: 20;
      background: rgba(250, 249, 246, .94);
      backdrop-filter: blur(8px);
      border-bottom: 1px solid var(--nw-line)
    }

    .nw-filter .nw-wrap {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
      padding-top: 14px;
      padding-bottom: 14px;
      flex-wrap: wrap
    }

    .nw-tabs {
      display: flex;
      gap: 6px;
      flex-wrap: wrap
    }

    .nw-tab {
      font: 500 14px Inter, sans-serif;
      background: none;
      border: 1px solid transparent;
      border-radius: 99px;
      padding: 8px 16px;
      color: var(--nw-muted);
      cursor: pointer;
      transition: all .2s
    }

    .nw-tab:hover {
      color: var(--nw-ink)
    }

    .nw-tab[aria-pressed="true"] {
      background: var(--nw-ink);
      color: #fff
    }

    .nw-count {
      font-size: 13px;
      color: var(--nw-muted)
    }

    /* ---------- Editor's pick ---------- */
    .nw-pick {
      padding: 80px 0 30px
    }

    .nw-pick-grid {
      display: grid;
      grid-template-columns: 1fr 1.05fr;
      gap: 56px;
      align-items: start
    }

    .nw-pick-img {
      position: sticky;
      top: 90px
    }

    .nw-pick-img .ph {
      aspect-ratio: 4/5;
      background: url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=900&q=80') center/cover;
      border-radius: 2px
    }

    .nw-pick-img p {
      font-size: 13px;
      color: var(--nw-muted);
      margin: 10px 0 0
    }

    .nw-tag {
      display: inline-block;
      font-size: 13px;
      font-weight: 600;
      color: var(--nw-gold-dk);
      margin-bottom: 14px
    }

    .nw-pick h2 {
      font-family: 'DM Serif Display', Georgia, serif;
      font-weight: 400;
      font-size: clamp(34px, 4.4vw, 54px);
      line-height: 1.05;
      margin: 0 0 20px
    }

    .nw-lead {
      font-size: 19px;
      line-height: 1.65;
      color: #3d342c;
      margin: 0 0 28px;
      font-family: 'DM Serif Display', Georgia, serif
    }

    .nw-score {
      display: grid;
      grid-template-columns: auto 1fr;
      gap: 28px;
      align-items: center;
      background: var(--nw-ink);
      color: #fff;
      padding: 26px 28px;
      border-radius: 2px;
      margin-bottom: 28px
    }

    .nw-score-big {
      font-family: 'DM Serif Display', serif;
      font-size: 68px;
      line-height: 1;
      color: var(--nw-gold)
    }

    .nw-score-big small {
      display: block;
      font: 500 12px Inter, sans-serif;
      color: #b9ae9f;
      margin-top: 6px
    }

    .nw-bars {
      display: grid;
      gap: 8px
    }

    .nw-bar {
      display: grid;
      grid-template-columns: 110px 1fr 28px;
      gap: 10px;
      align-items: center;
      font-size: 12.5px;
      color: #d9d0c4
    }

    .nw-bar i {
      display: block;
      height: 4px;
      background: rgba(255, 255, 255, .14);
      border-radius: 2px;
      overflow: hidden
    }

    .nw-bar i b {
      display: block;
      height: 100%;
      width: var(--w);
      background: var(--nw-gold);
      transform-origin: left;
      animation: nwGrow 1.1s .2s cubic-bezier(.2, .7, .2, 1) both
    }

    @keyframes nwGrow {
      from {
        transform: scaleX(0)
      }
    }

    .nw-quote {
      margin: 0 0 26px;
      padding: 4px 0 4px 22px;
      border-left: 3px solid var(--nw-gold);
      font-family: 'DM Serif Display', serif;
      font-size: 21px;
      line-height: 1.45
    }

    .nw-quote cite {
      display: block;
      font: 400 13px Inter, sans-serif;
      color: var(--nw-muted);
      margin-top: 10px
    }

    .nw-text {
      line-height: 1.8;
      color: #463d34;
      max-width: 60ch
    }

    .nw-specs {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      margin: 28px 0;
      border-top: 1px solid var(--nw-line)
    }

    .nw-specs div {
      padding: 13px 0;
      border-bottom: 1px solid var(--nw-line)
    }

    .nw-specs dt {
      font-size: 12px;
      color: var(--nw-muted);
      margin-bottom: 2px
    }

    .nw-specs dd {
      margin: 0;
      font-weight: 600;
      font-size: 15px
    }

    .nw-chips {
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
      margin-bottom: 26px
    }

    .nw-chips span {
      border: 1px solid var(--nw-line);
      border-radius: 99px;
      padding: 6px 14px;
      font-size: 13px;
      background: #fff
    }

    /* ---------- Feed de noticias ---------- */
    .nw-feed {
      padding: 60px 0 90px
    }

    .nw-feed-head {
      display: flex;
      align-items: baseline;
      justify-content: space-between;
      border-bottom: 2px solid var(--nw-ink);
      padding-bottom: 14px;
      margin-bottom: 36px
    }

    .nw-feed-head h2 {
      font-family: 'DM Serif Display', serif;
      font-weight: 400;
      font-size: 34px;
      margin: 0
    }

    .nw-grid {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 40px 32px
    }

    .nw-card {
      grid-column: span 2;
      display: flex;
      flex-direction: column
    }

    .nw-card.is-wide {
      grid-column: span 4;
      flex-direction: row;
      gap: 28px
    }

    .nw-card.is-wide .nw-media {
      flex: 1.2;
      aspect-ratio: auto;
      min-height: 280px
    }

    .nw-card.is-wide .nw-card-body {
      flex: 1
    }

    .nw-card[hidden] {
      display: none
    }

    .nw-media {
      aspect-ratio: 3/2;
      border-radius: 2px;
      margin-bottom: 16px;
      position: relative;
      overflow: hidden;
      background: var(--nw-ink-2) center/cover
    }

    .nw-media.photo-a {
      background-image: linear-gradient(rgba(27, 20, 16, .25), rgba(27, 20, 16, .25)), url('Fondo_Web.jpg')
    }

    .nw-media.photo-b {
      background-image: linear-gradient(rgba(27, 20, 16, .35), rgba(27, 20, 16, .35)), url('Fondo_Web.jpg');
      background-position: 20% 80%
    }

    .nw-media.photo-c {
      background-image: linear-gradient(rgba(27, 20, 16, .4), rgba(27, 20, 16, .4)), url('Fondo_Web.jpg');
      background-position: 90% 20%
    }

    /* tarjetas de lote: el puntaje es la imagen */
    .nw-media.lot {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      padding: 18px 20px;
      color: #fff
    }

    .nw-media.lot.l1 {
      background: linear-gradient(135deg, #3b2a1f, #1b1410)
    }

    .nw-media.lot.l2 {
      background: linear-gradient(135deg, #5a3a24, #2a1a10)
    }

    .nw-media.lot.l3 {
      background: linear-gradient(135deg, #6b5524, #2b2210)
    }

    .nw-media.lot b {
      font-family: 'DM Serif Display', serif;
      font-weight: 400;
      font-size: 64px;
      line-height: .9;
      color: var(--nw-gold)
    }

    .nw-media.lot span {
      font-size: 13px;
      text-align: right;
      color: #e9dfd0;
      line-height: 1.4
    }

    .nw-meta {
      display: flex;
      gap: 10px;
      align-items: center;
      font-size: 13px;
      color: var(--nw-muted);
      margin-bottom: 8px
    }

    .nw-meta strong {
      color: var(--nw-gold-dk);
      font-weight: 600
    }

    .nw-card h3 {
      font-family: 'DM Serif Display', serif;
      font-weight: 400;
      font-size: 25px;
      line-height: 1.2;
      margin: 0 0 10px
    }

    .nw-card.is-wide h3 {
      font-size: 32px
    }

    .nw-card p {
      margin: 0 0 14px;
      color: #51483f;
      line-height: 1.65;
      font-size: 15px
    }

    .nw-more {
      margin-top: auto;
      font-weight: 600;
      font-size: 14px;
      color: var(--nw-ink);
      text-decoration: none;
      border-bottom: 1px solid var(--nw-gold);
      align-self: flex-start;
      padding-bottom: 2px
    }

    .nw-more:hover {
      color: var(--nw-gold-dk)
    }

    .nw-empty {
      display: none;
      text-align: center;
      color: var(--nw-muted);
      padding: 50px 0
    }

    /* ---------- Calendario de cosecha ---------- */
    .nw-cal {
      background: var(--nw-ink);
      color: #fff;
      padding: 80px 0
    }

    .nw-cal h2 {
      font-family: 'DM Serif Display', serif;
      font-weight: 400;
      font-size: clamp(30px, 4vw, 44px);
      margin: 0 0 10px
    }

    .nw-cal .sub {
      color: #c9bfb1;
      max-width: 560px;
      line-height: 1.7;
      margin: 0 0 40px
    }

    .nw-cal-scroll {
      overflow-x: auto
    }

    .nw-cal-table {
      min-width: 760px;
      display: grid;
      grid-template-columns: 150px repeat(12, 1fr);
      gap: 0;
      font-size: 13px
    }

    .nw-cal-table .m {
      padding: 0 0 12px;
      text-align: center;
      color: #a99f92
    }

    .nw-cal-table .o {
      padding: 14px 0;
      border-top: 1px solid rgba(255, 255, 255, .12);
      font-weight: 600
    }

    .nw-cal-table .c {
      border-top: 1px solid rgba(255, 255, 255, .12);
      position: relative
    }

    .nw-cal-table .c.on::after {
      content: "";
      position: absolute;
      left: 2px;
      right: 2px;
      top: 50%;
      height: 12px;
      margin-top: -6px;
      background: var(--nw-gold);
      border-radius: 2px
    }

    .nw-cal-table .c.peak::after {
      background: #e9d08f;
      box-shadow: 0 0 14px rgba(233, 208, 143, .5)
    }

    .nw-legend {
      display: flex;
      gap: 22px;
      margin-top: 22px;
      font-size: 13px;
      color: #c9bfb1
    }

    .nw-legend i {
      display: inline-block;
      width: 18px;
      height: 8px;
      border-radius: 2px;
      margin-right: 8px;
      background: var(--nw-gold)
    }

    .nw-legend i.pk {
      background: #e9d08f
    }

    /* ---------- Newsletter ---------- */
    .nw-sub {
      padding: 90px 0;
      text-align: center
    }

    .nw-sub h2 {
      font-family: 'DM Serif Display', serif;
      font-weight: 400;
      font-size: clamp(30px, 4vw, 44px);
      margin: 0 0 12px
    }

    .nw-sub p {
      color: var(--nw-muted);
      max-width: 520px;
      margin: 0 auto 28px;
      line-height: 1.7
    }

    .nw-sub form {
      display: flex;
      gap: 10px;
      max-width: 480px;
      margin: 0 auto;
      flex-wrap: wrap
    }

    .nw-sub input {
      flex: 1 1 220px;
      padding: 14px 16px;
      border: 1px solid #c9c2b6;
      border-radius: 2px;
      font: 400 15px Inter, sans-serif;
      background: #fff
    }

    .nw-sub button {
      padding: 14px 26px;
      background: var(--nw-ink);
      color: #fff;
      border: 0;
      border-radius: 2px;
      font: 600 14px Inter, sans-serif;
      cursor: pointer
    }

    .nw-sub button:hover {
      background: #3a2b21
    }

    .nw-ok {
      display: none;
      margin-top: 18px;
      color: var(--nw-gold-dk);
      font-weight: 600
    }

    /* ---------- Responsive ---------- */
    @media (max-width:980px) {

      .nw-hero .nw-wrap,
      .nw-pick-grid {
        grid-template-columns: 1fr;
        gap: 40px
      }

      .nw-latest {
        border-left: 0;
        padding-left: 0;
        border-top: 1px solid rgba(200, 168, 90, .4);
        padding-top: 24px
      }

      .nw-pick-img {
        position: static
      }

      .nw-grid {
        grid-template-columns: repeat(2, 1fr)
      }

      .nw-card,
      .nw-card.is-wide {
        grid-column: span 2
      }

      .nw-card.is-wide {
        flex-direction: column
      }

      .nw-card.is-wide .nw-media {
        min-height: 0;
        aspect-ratio: 3/2;
        flex: none
      }
    }

    @media (min-width:640px) and (max-width:980px) {
      .nw-card:not(.is-wide) {
        grid-column: span 1
      }
    }

    @media (max-width:560px) {
      .nw-hero {
        padding-top: 110px
      }

      .nw-score {
        grid-template-columns: 1fr
      }

      .nw-specs {
        grid-template-columns: 1fr
      }
    }

    @media (prefers-reduced-motion:reduce) {

      .nw-dot,
      .nw-bar i b {
        animation: none
      }
    }
  </style>