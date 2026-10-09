<template>
    <section class="cta-section">
        <div class="cta-bg"></div>
        <div class="cta-inner">
            <div class="cta-pill">{{ $t('cta.badge') }}</div>
            <h2 class="cta-title">{{ $t('cta.h2') }}<br>{{ $t('cta.br') }}</h2>
            <p class="cta-sub">{{ $t('cta.sub') }}</p>
            <div class="cta-btns">
                <router-link to="/contact" class="btn btn-ghost"> {{ $t('cta.buttom_contact') }} </router-link>
                <router-link to="/offer" class="btn btn-gold"> {{ $t('cta.buttom_offer') }} </router-link>
            </div>
        </div>
    </section>
</template>