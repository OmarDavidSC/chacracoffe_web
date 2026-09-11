<template>
    <section class="coffees-section" id="coffees">
        <div class="container">
            <div class="coffees-header">
                <div>
                    <span class="eyebrow gold">Our Coffees</span>
                    <h2 class="section-title">Exceptional coffees,<br><em>distinct origins.</em></h2>
                </div>
                <div class="coffees-header-right">
                    <p>Discover the richness of Peru through our curated collection of Specialty Coffees. Sourced from
                        exceptional microclimates across the country's most celebrated coffee regions, every coffee is
                        meticulously selected, processed, and quality controlled to deliver an authentic expression of
                        Peru.</p>
                    <a href="Coffees.html" class="btn btn-dark">Explore All Coffees</a>
                </div>
            </div>

            <div class="cc-outer">
                <button class="cc-arr cc-arr-l" id="ccPrev" aria-label="Prev">
                    <svg viewBox="0 0 20 20" width="18" height="18">
                        <path d="M13 4L7 10L13 16" stroke="currentColor" stroke-width="2" fill="none"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                <div class="cc-viewport">
                    <div class="cc-track" id="ccTrack">

                        <article class="cc-card">
                            <div class="cc-img" style="background-image:url('img/Regional.png')">
                                <span class="cc-badge">Regional Blends</span>
                            </div>
                            <div class="cc-body">
                                <div class="cc-tags"><span class="cc-tag">Washed</span><span
                                        class="cc-tag">Natural</span><span class="cc-tag gold-tag">83-86 pts</span>
                                </div>
                                <h3 class="cc-title">Regional Blends</h3>
                                <p class="cc-desc">Balanced and consistent profiles from different origins. Ideal for
                                    espresso and
                                    filter roasting.</p>
                                <a href="#" class="cc-link">View Offer List <svg viewBox="0 0 16 16" width="13"
                                        height="13">
                                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"
                                            fill="none" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg></a>
                            </div>
                        </article>

                        <article class="cc-card cc-featured">
                            <div class="cc-img" style="background-image:url('img/Mircrolotes.jpg')">
                                <span class="cc-badge">Microlots</span>
                            </div>
                            <div class="cc-body">
                                <div class="cc-tags"><span class="cc-tag">Washed</span><span
                                        class="cc-tag">Natural</span><span class="cc-tag gold-tag">86-90+ pts</span>
                                </div>
                                <h3 class="cc-title">Microlots</h3>
                                <p class="cc-desc">Unique and exclusive lots with exceptional cup scores, traceable to
                                    single farms in
                                    Jaén, San Ignacio and Cutervo.</p>
                                <a href="#" class="cc-link">View Offer List <svg viewBox="0 0 16 16" width="13"
                                        height="13">
                                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"
                                            fill="none" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg></a>
                            </div>
                        </article>

                        <article class="cc-card">
                            <div class="cc-img" style="background-image:url('img/Experimental.jpg')">
                                <span class="cc-badge">Experimental</span>
                            </div>
                            <div class="cc-body">
                                <div class="cc-tags"><span class="cc-tag">Anaerobic</span><span
                                        class="cc-tag">Fermentation</span><span class="cc-tag gold-tag">86-90+
                                        pts</span></div>
                                <h3 class="cc-title">Experimental Lots</h3>
                                <p class="cc-desc">Special fermentations and innovative processes that push the
                                    boundaries of flavour
                                    and complexity.</p>
                                <a href="#" class="cc-link">View Offer List <svg viewBox="0 0 16 16" width="13"
                                        height="13">
                                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5"
                                            fill="none" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg></a>
                            </div>
                        </article>

                    </div>
                </div>
                <button class="cc-arr cc-arr-r" id="ccNext" aria-label="Next">
                    <svg viewBox="0 0 20 20" width="18" height="18">
                        <path d="M7 4L13 10L7 16" stroke="currentColor" stroke-width="2" fill="none"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </div>

            <div class="cc-dots" id="ccDots">
                <button class="cc-dot active" data-i="0"></button>
                <button class="cc-dot" data-i="1"></button>
                <button class="cc-dot" data-i="2"></button>
            </div>
        </div>
    </section>
</template>
<style>
.coffees-section {
    background: var(--ivory);
    padding: 100px 0 80px;
}

.coffees-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: start;
    margin-bottom: 52px;
}

.coffees-header-right {
    display: flex;
    flex-direction: column;
    gap: 22px;
    padding-top: 6px;
}

.coffees-header-right p {
    font-size: 14px;
    color: var(--text-m);
    line-height: 1.8;
}

.cc-outer {
    position: relative;
    display: flex;
    align-items: center;
    gap: 12px;
}

.cc-viewport {
    flex: 1;
    overflow: hidden;
}

.cc-track {
    display: flex;
    gap: 22px;
    transition: transform .45s cubic-bezier(.25, .46, .45, .94);
    will-change: transform;
}

.cc-card {
    flex: 0 0 calc((100% - 44px) / 3);
    background: var(--white);
    border-radius: var(--r-md);
    overflow: hidden;
    box-shadow: var(--sh-sm);
    transition: transform var(--tr), box-shadow var(--tr);
    display: flex;
    flex-direction: column;
}

.cc-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--sh-md);
}

.cc-featured {
    box-shadow: 0 4px 24px rgba(200, 168, 90, .18);
}

.cc-img {
    height: 240px;
    background-size: cover;
    background-position: center;
    position: relative;
    overflow: hidden;
    flex-shrink: 0;
}

.cc-img::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(20, 40, 26, .55) 0%, transparent 55%);
    transition: opacity var(--tr);
}

.cc-card:hover .cc-img::after {
    opacity: .78;
}

.cc-badge {
    position: absolute;
    top: 14px;
    left: 14px;
    z-index: 2;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: .14em;
    text-transform: uppercase;
    background: rgba(200, 168, 90, .92);
    color: #1A3026;
    padding: 4px 11px;
    border-radius: 20px;
}

.cc-score {
    position: absolute;
    bottom: 14px;
    right: 14px;
    z-index: 2;
    text-align: center;
    background: rgba(26, 48, 38, .88);
    border: 1px solid rgba(200, 168, 90, .4);
    border-radius: 8px;
    padding: 8px 12px;
    backdrop-filter: blur(8px);
}

.cs-num {
    display: block;
    font-family: var(--ff-d);
    font-size: 22px;
    color: var(--gold);
    line-height: 1;
}

.cs-lbl {
    display: block;
    font-size: 8px;
    font-weight: 700;
    letter-spacing: .12em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, .48);
    margin-top: 2px;
}

.cc-body {
    padding: 22px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex: 1;
}

.cc-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
}

.cc-tag {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: .1em;
    text-transform: uppercase;
    padding: 3px 9px;
    border-radius: 20px;
    background: var(--ivory);
    color: var(--text-m);
    border: 1px solid var(--ivory-d);
}

.cc-tag.gold-tag {
    background: rgba(200, 168, 90, .12);
    color: var(--gold);
    border-color: rgba(200, 168, 90, .28);
}

.cc-title {
    font-family: var(--ff-d);
    font-size: 20px;
    font-weight: 400;
    color: var(--text);
    line-height: 1.2;
}

.cc-desc {
    font-size: 13px;
    color: var(--text-m);
    line-height: 1.7;
    flex: 1;
}

.cc-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: .08em;
    text-transform: uppercase;
    color: var(--green);
    margin-top: 4px;
    transition: gap var(--tr), color var(--tr);
}

.cc-link:hover {
    color: var(--gold);
    gap: 10px;
}

.cc-arr {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: 1.5px solid var(--ivory-d);
    background: var(--white);
    color: var(--text);
    cursor: pointer;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all var(--tr);
    box-shadow: var(--sh-sm);
}

.cc-arr:hover {
    background: var(--green);
    color: var(--white);
    border-color: var(--green);
}

.cc-arr:disabled {
    opacity: .3;
    cursor: default;
}

.cc-dots {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: 28px;
}

.cc-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: none;
    background: rgba(26, 48, 38, .2);
    cursor: pointer;
    padding: 0;
    transition: all var(--tr);
}

.cc-dot.active {
    background: var(--green);
    transform: scale(1.35);
}
</style>