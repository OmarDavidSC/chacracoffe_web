<template>
    <section class="stats-bar">
        <div class="stats-inner">
            <div class="stat-item">
                <svg class="stat-icon" viewBox="0 0 40 40">
                    <circle cx="15" cy="12" r="5" fill="none" stroke="#C8A85A" stroke-width="1.8" />
                    <circle cx="25" cy="12" r="5" fill="none" stroke="#C8A85A" stroke-width="1.8" />
                    <path d="M6 32C6 26 10 22 15 22H25C30 22 34 26 34 32" fill="none" stroke="#C8A85A"
                        stroke-width="1.8" />
                </svg>
                <span class="stat-num">50+</span><span class="stat-label">Communities</span>
            </div>
            <div class="stat-item">
                <svg class="stat-icon" viewBox="0 0 40 40">
                    <rect x="14" y="8" width="12" height="16" rx="2" fill="none" stroke="#C8A85A" stroke-width="1.8" />
                    <path d="M20 24V34M14 34H26" stroke="#C8A85A" stroke-width="1.8" stroke-linecap="round" />
                </svg>
                <span class="stat-num">150+</span><span class="stat-label">Producers</span>
            </div>
            <div class="stat-item">
                <svg class="stat-icon" viewBox="0 0 40 40">
                    <path d="M10 16C10 16 12 10 20 10C28 10 30 16 30 16H10Z" fill="none" stroke="#C8A85A"
                        stroke-width="1.8" />
                    <path d="M10 16C10 22 14 28 20 30C26 28 30 22 30 16" fill="none" stroke="#C8A85A"
                        stroke-width="1.8" />
                </svg>
                <span class="stat-num">83 - 90+</span><span class="stat-label">Cup Score</span>
            </div>
            <div class="stat-item">
                <svg class="stat-icon" viewBox="0 0 40 40">
                    <circle cx="20" cy="20" r="12" fill="none" stroke="#C8A85A" stroke-width="1.8" />
                    <path d="M8 20H32M20 8C16 12 14 16 14 20C14 24 16 28 20 32M20 8C24 12 26 16 26 20C26 24 24 28 20 32"
                        fill="none" stroke="#C8A85A" stroke-width="1.5" />
                </svg>
                <span class="stat-num">UK &amp; EU</span><span class="stat-label">Stock Available</span>
            </div>
        </div>
    </section>
</template>
<style>
.stats-bar {
    background: var(--green);
    padding: 36px 0;
}

.stats-inner {
    max-width: 1180px;
    margin: 0 auto;
    padding: 0 28px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

.stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    padding: 8px 16px;
    border-right: 1px solid rgba(255, 255, 255, .07);
}

.stat-item:last-child {
    border-right: none;
}

.stat-icon {
    width: 30px;
    height: 30px;
    margin-bottom: 4px;
}

.stat-num {
    font-family: var(--ff-d);
    font-size: 28px;
    color: var(--white);
    line-height: 1;
}

.stat-label {
    font-size: 10px;
    font-weight: 600;
    letter-spacing: .16em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, .38);
}
</style>