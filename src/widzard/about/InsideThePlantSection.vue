<template>
<section class="ab-gallery-section">
        <div class="container">
            <div class="ab-gallery-header">
                <span class="eyebrow gold">Inside The Plant</span>
                <h2>A closer <em>look.</em></h2>
            </div>
            <div class="ab-gallery-grid">
                <div class="g-item" style="background-image:url('/img/productores/andyllanos.jpg')">
                    <span class="g-caption">Chacra Plant</span>
                </div>
                <div class="g-item" style="background-image:url('/img/insidetheplant/Export.jpg')">
                    <span class="g-caption">Trite</span>
                </div>
                <div class="g-item" style="background-image:url('/img/productores/francohuaches.jpg')">
                    <span class="g-caption">Sorting</span>
                </div>
                <div class="g-item" style="background-image:url('/img/insidetheplant/Cafe_1.png')">
                    <span class="g-caption">Storage</span>
                </div>
                <div class="g-item" style="background-image:url('/img/insidetheplant/Experimental.jpg')">
                    <span class="g-caption">Quality Lab</span>
                </div>
            </div>
        </div>
    </section>
</template>

<style>
.ab-gallery-section {
    padding: 90px 0;
}

.ab-gallery-header {
    text-align: center;
    margin-bottom: 50px;
}

.ab-gallery-header h2 {
    font-size: 32px;
}

.ab-gallery-header h2 em {
    color: #C8A85A;
    font-style: normal;
}

.ab-gallery-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 260px 260px;
    gap: 16px;
}

.ab-gallery-grid .g-item:nth-child(1) {
    grid-row: span 2;
}

.g-item {
    background-size: cover;
    background-position: center;
    border-radius: 4px;
    position: relative;
    overflow: hidden;
}

.g-item::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent 50%);
    opacity: 0;
    transition: opacity 0.3s ease;
}

.g-item:hover::after {
    opacity: 1;
}

.g-caption {
    position: absolute;
    bottom: 14px;
    left: 16px;
    color: #fff;
    font-size: 13px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.g-item:hover .g-caption {
    opacity: 1;
}

@media (max-width: 900px) {
    .ab-gallery-grid {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 200px 200px 200px;
    }

    .ab-gallery-grid .g-item:nth-child(1) {
        grid-row: span 1;
        grid-column: span 2;
    }
}

.ab-facility .ab-who-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

.ab-facility .ab-who-img {
    position: relative;
}

.ab-facility .ab-img-main {
    width: 100%;
    height: 480px;
    background-size: cover;
    background-position: center;
    border-radius: 4px;
    position: relative;
}

.ab-facility .ab-img-badge {
    position: absolute;
    bottom: -20px;
    left: -20px;
    background: #1a1a1a;
    border: 1px solid #C8A85A;
    padding: 18px 24px;
    color: #C8A85A;
    font-size: 13px;
    letter-spacing: 1px;
    text-transform: uppercase;
}

.ab-facility .ab-img-badge strong {
    display: block;
    font-size: 20px;
    color: #fff;
    letter-spacing: 0;
    text-transform: none;
    margin-bottom: 2px;
}

.ab-facility .ab-who-text p {
    color: #555;
    line-height: 1.7;
    margin-bottom: 16px;
}

.ab-facility .ab-process-list {
    display: flex;
    gap: 20px;
    margin: 28px 0;
    flex-wrap: wrap;
}

.ab-facility .ab-process-item {
    flex: 1 1 0;
    min-width: 120px;
    text-align: center;
    padding: 20px 12px;
    border: 1px solid #e5e0d5;
    border-radius: 4px;
    transition: border-color 0.25s ease;
}

.ab-facility .ab-process-item:hover {
    border-color: #C8A85A;
}

.ab-facility .ab-process-item svg {
    margin-bottom: 8px;
}

.ab-facility .ab-process-item span {
    display: block;
    font-size: 13px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #333;
    font-weight: 600;
}

.ab-facility .ab-region-contact {
    border-top: 1px solid #e5e0d5;
    padding-top: 20px;
    margin-top: 28px;
}

.ab-facility .ab-region-contact p {
    margin: 6px 0 !important;
    font-size: 14px;
}

.ab-facility .ab-region-contact a {
    color: #C8A85A;
    text-decoration: none;
}

.ab-facility .ab-region-contact a:hover {
    text-decoration: underline;
}

@media (max-width: 900px) {
    .ab-facility .ab-who-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    .ab-facility .ab-img-badge {
        left: 12px;
    }
}
</style>