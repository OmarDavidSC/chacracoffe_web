<template>
<section class="ab-stats-section">
        <div class="container">
            <div class="ab-stats-grid">
                <div class="ab-stat-item">
                    <div class="ab-stat-number">3<span>+</span></div>
                    <div class="ab-stat-label">Processing & Preparation Methods</div>
                </div>
                <div class="ab-stat-item">
                    <div class="ab-stat-number">100<span>%</span></div>
                    <div class="ab-stat-label">Lot Traceability</div>
                </div>
                <div class="ab-stat-item">
                    <div class="ab-stat-number">10<span>+</span></div>
                    <div class="ab-stat-label">Partner Producers</div>
                </div>
                <div class="ab-stat-item">
                    <div class="ab-stat-number">1</div>
                    <div class="ab-stat-label">Facility, Full Quality Control</div>
                </div>
            </div>
        </div>
    </section>
</template>


<style>
.ab-stats-section {
    padding: 80px 0;
    background: #f7f4ee;
}

.ab-stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    text-align: center;
}

.ab-stat-item {
    padding: 30px 16px;
    border-right: 1px solid #e0d9c7;
}

.ab-stat-item:last-child {
    border-right: none;
}

.ab-stat-number {
    font-size: 44px;
    font-weight: 700;
    color: #1a1a1a;
    line-height: 1;
    margin-bottom: 10px;
}

.ab-stat-number span {
    color: #C8A85A;
}

.ab-stat-label {
    font-size: 13px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #666;
}
</style>