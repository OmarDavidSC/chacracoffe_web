<template>
    <section class="ab-process-section">
        <div class="container">
            <div class="ab-process-header">
                <span class="eyebrow gold">How It Works</span>
                <h2>From <em>pergamino</em> and <em>natural</em> to export-ready green coffee</h2>
            </div>
            <div class="ab-process-timeline">
                <div class="ab-process-step">
                    <div class="ab-process-num">01</div>
                    <h4>Reception</h4>
                    <p>Coffee arrives from our partner producers and is carefully received, identified and registered to
                        maintain
                        complete lot traceability.</p>
                </div>
                <div class="ab-process-step">
                    <div class="ab-process-num">02</div>
                    <h4>Quality Control</h4>
                    <p>Each lot is evaluated through physical analysis to verify moisture, defects, size.</p>
                </div>
                <div class="ab-process-step">
                    <div class="ab-process-num">03</div>
                    <h4>Hulling & Processing</h4>
                    <p>Coffee parchment is hulled to obtain green coffee, with controlled processing designed to
                        preserve the
                        characteristics of each lot.</p>
                </div>
                <div class="ab-process-step">
                    <div class="ab-process-num">04</div>
                    <h4>Sorting & Grading</h4>
                    <p>Green coffee is mechanically sorted to remove defects and separate beans according to size,
                        density and
                        quality.</p>
                </div>
                <div class="ab-process-step">
                    <div class="ab-process-num">05</div>
                    <h4>Final Preparation</h4>
                    <p>Selected coffees are prepared according to each customer's specifications, packed, labeled.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.ab-process-section {
    padding: 90px 0;
    background: #1a1a1a;
}

.ab-process-section .eyebrow.gold {
    color: #C8A85A;
}

.ab-process-header {
    text-align: center;
    margin-bottom: 60px;
}

.ab-process-header h2 {
    color: #fff;
    font-size: 34px;
}

.ab-process-header h2 em {
    color: #C8A85A;
    font-style: normal;
}

.ab-process-timeline {
    display: flex;
    justify-content: space-between;
    position: relative;
    max-width: 1100px;
    margin: 0 auto;
}

.ab-process-timeline::before {
    content: '';
    position: absolute;
    top: 22px;
    left: 5%;
    right: 5%;
    height: 1px;
    background: linear-gradient(to right, transparent, #C8A85A, transparent);
}

.ab-process-step {
    flex: 1;
    text-align: center;
    position: relative;
    padding: 0 8px;
}

.ab-process-num {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #1a1a1a;
    border: 2px solid #C8A85A;
    color: #C8A85A;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
    margin: 0 auto 18px;
    position: relative;
    z-index: 2;
}

.ab-process-step h4 {
    color: #fff;
    font-size: 15px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-bottom: 8px;
}

.ab-process-step p {
    color: #999;
    font-size: 13px;
    line-height: 1.6;
}
</style>>