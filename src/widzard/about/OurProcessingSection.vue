<template>
    <section class="ab-certs">
        <div class="container">
            <div class="ab-certs-header aos-in" data-aos="">
                <span class="eyebrow gold">Our Processing</span>
                <h2 class="section-title">From cherry<br /><em>to export, in-house.</em></h2>
            </div>
            <div class="ab-certs-grid">
                <div class="ab-cert-item aos-in" data-aos="">
                    <div class="ab-cert-icon">
                        <svg fill="none" height="30" stroke="#C8A85A" stroke-linecap="round" stroke-width="1.5"
                            viewbox="0 0 32 32" width="30">
                            <path d="M8 6h16v6a8 8 0 01-16 0V6z" />
                            <path d="M8 9H5a3 3 0 003 3M24 9h3a3 3 0 01-3 3" />
                            <path d="M16 20v6M11 26h10" />
                        </svg>
                    </div>
                    <h4>Own Processing Plant</h4>
                    <p>Our facility in Jaén, Cajamarca, gives us full control over every stage from cherry to green
                        bean.</p>
                </div>
                <div class="ab-cert-item aos-in" data-aos="">
                    <div class="ab-cert-icon">
                        <svg fill="none" height="30" stroke="#C8A85A" stroke-linecap="round" stroke-width="1.5"
                            viewbox="0 0 32 32" width="30">
                            <circle cx="16" cy="16" r="12" />
                            <path d="M10 16l4 4 8-8" />
                        </svg>
                    </div>
                    <h4>Washed, Honey &amp;amp; Natural</h4>
                    <p>We process washed, honey and natural lots in-house, tailoring each method to bring out the best
                        of every
                        microlot.</p>
                </div>
                <div class="ab-cert-item aos-in" data-aos="">
                    <div class="ab-cert-icon">
                        <svg fill="none" height="30" stroke="#C8A85A" stroke-linecap="round" stroke-width="1.5"
                            viewbox="0 0 32 32" width="30">
                            <rect height="20" rx="2" width="16" x="8" y="4" />
                            <path d="M12 10h8M12 14h8M12 18h5" />
                        </svg>
                    </div>
                    <h4>Full Traceability</h4>
                    <p>Every lot processed in-house is tracked from farm to shipment, so buyers know exactly where their
                        coffee
                        comes from.</p>
                </div>
                <div class="ab-cert-item aos-in" data-aos="">
                    <div class="ab-cert-icon">
                        <svg fill="none" height="30" stroke="#C8A85A" stroke-linecap="round" stroke-width="1.5"
                            viewbox="0 0 32 32" width="30">
                            <path d="M6 16C6 10 10 6 16 6s10 4 10 10-4 10-10 10S6 22 6 16z" />
                            <path d="M16 10v6l4 2" />
                        </svg>
                    </div>
                    <h4>Microlot Focus</h4>
                    <p>Small, separated lots preserve the identity of each farm and variety through the entire process.
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.ab-certs {
  background: var(--white);
  padding: 100px 0 110px;
}
.ab-certs-header {
  max-width: 460px;
  margin-bottom: 56px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.ab-certs-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.ab-cert-item {
  background: var(--ivory);
  border: 1px solid var(--ivory-d);
  border-radius: var(--r-md);
  padding: 30px 24px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  transition: border-color var(--tr), box-shadow var(--tr), transform var(--tr);
}
.ab-cert-item:hover {
  border-color: rgba(200,168,90,.4);
  box-shadow: var(--sh-md);
  transform: translateY(-6px);
}
.ab-cert-icon {
  width: 54px;
  height: 54px;
  border-radius: var(--r-md);
  background: rgba(26,48,38,.06);
  border: 1px solid rgba(26,48,38,.1);
  display: flex;
  align-items: center;
  justify-content: center;
}
.ab-cert-item h4 {
  font-size: 13px;
  font-weight: 700;
  letter-spacing: .06em;
  text-transform: uppercase;
  color: var(--text);
}
.ab-cert-item p {
  font-size: 13px;
  color: var(--text-m);
  line-height: 1.75;
}
</style>