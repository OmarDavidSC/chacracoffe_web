<template>
    <section class="cta-section">
        <div class="cta-bg"></div>
        <div class="cta-inner">
            <div class="cta-pill">{{ $t('ctaabout.badge') }}</div>
            <h2 class="cta-title">{{ $t('ctaabout.h2') }}<br>{{ $t('ctaabout.br') }}</h2>
            <p class="cta-sub">{{ $t('ctaabout.sub') }}</p>
            <div class="cta-btns">
                <router-link to="/contact" class="btn btn-ghost"> {{ $t('ctaabout.buttom_contact') }} </router-link>
                <router-link to="/offer" class="btn btn-gold"> {{ $t('ctaabout.buttom_offer') }} </router-link>
            </div>
        </div>
    </section>
</template>