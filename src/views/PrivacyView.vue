<template>
    <div class="legal-layout container">
        <main class="policy-content">
            <h1>{{ $t('privacy_policy.title') }}</h1>

            <p class="last-updated">
                {{ $t('privacy_policy.last_updated') }}
            </p>

            <p>{{ $t('privacy_policy.introduction') }}</p>

            <h2>{{ $t('privacy_policy.sections.information.title') }}</h2>
            <p>{{ $t('privacy_policy.sections.information.description') }}</p>

            <ul>
                <li>
                    <strong>{{ $t('privacy_policy.sections.information.personal_data_title') }}</strong>
                    {{ $t('privacy_policy.sections.information.personal_data') }}
                </li>
                <li>
                    <strong>{{ $t('privacy_policy.sections.information.derivative_data_title') }}</strong>
                    {{ $t('privacy_policy.sections.information.derivative_data') }}
                </li>
            </ul>

            <h2>{{ $t('privacy_policy.sections.use.title') }}</h2>
            <p>{{ $t('privacy_policy.sections.use.description') }}</p>

            <ul>
                <li>{{ $t('privacy_policy.sections.use.items.samples') }}</li>
                <li>{{ $t('privacy_policy.sections.use.items.email') }}</li>
                <li>{{ $t('privacy_policy.sections.use.items.improve') }}</li>
                <li>{{ $t('privacy_policy.sections.use.items.analyze') }}</li>
                <li>{{ $t('privacy_policy.sections.use.items.support') }}</li>
            </ul>

            <h2>{{ $t('privacy_policy.sections.disclosure.title') }}</h2>
            <p>{{ $t('privacy_policy.sections.disclosure.description') }}</p>

            <h2>{{ $t('privacy_policy.sections.security.title') }}</h2>
            <p>{{ $t('privacy_policy.sections.security.description') }}</p>

            <h2>{{ $t('privacy_policy.sections.cookies.title') }}</h2>
            <p>{{ $t('privacy_policy.sections.cookies.description') }}</p>

            <h2>{{ $t('privacy_policy.sections.contact.title') }}</h2>
            <p>{{ $t('privacy_policy.sections.contact.description') }}</p>

            <p>
                <strong>{{ $t('privacy_policy.sections.contact.company') }}</strong><br>
                {{ $t('privacy_policy.sections.contact.address') }}<br>
                {{ $t('privacy_policy.sections.contact.email_label') }}
                <a href="mailto:info@chacracoffee.com">info@chacracoffee.com</a><br>
                {{ $t('privacy_policy.sections.contact.whatsapp_label') }}
                <a href="https://wa.me/51937791406">+51 937 791 406</a>
            </p>
        </main>
    </div>
</template>
<style>
/* ============================================================
   CHACRA COFFEE — Privacy.css / Conditions.css
   ============================================================ */

/* ---- FIX NAVBAR OVERLAP ---- */
/* El navbar es fixed, entonces el body necesita espacio arriba */
body {
    padding-top: 80px;
}

/* ---- LAYOUT WRAPPER ---- */
.legal-layout {
    padding-top: 0;
    padding-bottom: 80px;
}

/* ---- MAIN CONTENT ---- */
.policy-content {
    padding: 72px 20px 80px;
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.8;
    color: #333;
}

/* ---- HEADINGS ---- */
.policy-content h1 {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 400;
    margin-bottom: 0.5rem;
    color: #0b141d;
    line-height: 1.1;
}

.policy-content h2 {
    font-family: 'DM Serif Display', serif;
    font-size: clamp(1.3rem, 3vw, 1.8rem);
    font-weight: 400;
    margin-top: 2.8rem;
    margin-bottom: 1rem;
    color: #0b141d;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid #e8e2d9;
}

/* ---- BODY TEXT ---- */
.policy-content p {
    margin-bottom: 1.2rem;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    font-weight: 300;
    color: #444;
}

/* ---- LISTS ---- */
.policy-content ul {
    margin-bottom: 1.4rem;
    padding-left: 0;
    list-style: none;
}

.policy-content li {
    margin-bottom: 0.7rem;
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    font-weight: 300;
    color: #444;
    padding-left: 18px;
    position: relative;
}

.policy-content li::before {
    content: '';
    position: absolute;
    left: 0;
    top: 9px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background: #C8A85A;
    opacity: 0.7;
}

/* ---- LINKS ---- */
.policy-content a {
    color: #1a5030;
    text-decoration: underline;
    text-underline-offset: 3px;
    transition: color .2s;
}

.policy-content a:hover {
    color: #C8A85A;
}

/* ---- LAST UPDATED ---- */
.last-updated {
    font-family: 'Inter', sans-serif;
    font-size: 13px;
    font-style: italic;
    color: #999;
    margin-bottom: 3rem;
    letter-spacing: 0.02em;
}

/* ---- RESPONSIVE ---- */
@media (max-width: 768px) {
    body {
        padding-top: 68px;
    }

    .policy-content {
        padding: 40px 20px 60px;
    }
}

/* ---- NAVBAR — forzar fondo oscuro en páginas legales ---- */
.navbar {
    background: var(--green) !important;
    box-shadow: 0 2px 20px rgba(0, 0, 0, .12);
}
</style>