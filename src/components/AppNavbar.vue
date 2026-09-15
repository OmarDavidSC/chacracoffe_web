<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useI18n } from "vue-i18n";

const { locale } = useI18n();

const menuOpen = ref(false);
const languageOpen = ref(false);
const scrolled = ref(false);

const handleScroll = () => {
    scrolled.value = window.scrollY > 60;
};

const closeMobile = () => {
    menuOpen.value = false;
    document.body.style.overflow = "";
};

const toggleMobile = () => {
    menuOpen.value = !menuOpen.value;
    languageOpen.value = false;

    document.body.style.overflow = menuOpen.value ? "hidden" : "";
};

const toggleLanguage = () => {
    languageOpen.value = !languageOpen.value;
};

const changeLanguage = (language: string) => {
    locale.value = language;
    languageOpen.value = false;
};

const handleClickOutside = (event: MouseEvent) => {
    const navbar = document.getElementById("navbar");

    if (navbar && !navbar.contains(event.target as Node)) {
        closeMobile();
        languageOpen.value = false;
    }
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("click", handleClickOutside);

    handleScroll();
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
    document.removeEventListener("click", handleClickOutside);

    document.body.style.overflow = "";
});
</script>

<template>
    <nav id="navbar" class="navbar" :class="{ scrolled: scrolled }">
        <div class="nav-inner">
            <router-link to="/" class="nav-logo">
                <img src="../../public/img/Logo_Chacra.png" alt="Chacra Coffee" class="logo-img" />
            </router-link>
            <ul class="nav-links">
                <li>
                    <router-link to="/">
                        {{ $t("navbar.home") }}
                    </router-link>
                </li>
                <li>
                    <router-link to="/ourstory">
                        {{ $t("navbar.ourStory") }}
                    </router-link>
                </li>
                <li>
                    <router-link to="/about">
                        {{ $t("navbar.about") }}
                    </router-link>
                </li>
                <li>
                    <router-link to="/offer">
                        {{ $t("navbar.offer") }}
                    </router-link>
                </li>
                <li>
                    <router-link to="/blog">
                        {{ $t("navbar.blog") }}
                    </router-link>
                </li>
                <li>
                    <router-link to="/contact">
                        {{ $t("navbar.contact") }}
                    </router-link>
                </li>
            </ul>
            <div class="nav-actions">
                <!-- REQUEST SAMPLES -->
                <router-link to="/contact" class="btn btn-nav">
                    {{ $t("navbar.requestSamples") }}
                </router-link>
                <div class="language-wrapper">
                    <button type="button" class="language-btn" @click.stop="toggleLanguage">
                        <span class="language-flag">
                            {{ locale === "es" ? "🇪🇸" : "🇬🇧" }}
                        </span>
                        <span class="language-code">
                            {{ locale === "es" ? "ES" : "EN" }}
                        </span>
                        <svg class="language-chevron" :class="{ open: languageOpen }" width="11" height="11"
                            viewBox="0 0 24 24" fill="none">
                            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </button>
                    <div v-if="languageOpen" class="language-dropdown" @click.stop>
                        <!-- ENGLISH -->
                        <button type="button" class="language-option" :class="{
                            selected: locale === 'en',
                        }" @click="changeLanguage('en')">
                            <span class="language-option-flag"> 🇬🇧 </span>
                            <span> English </span>
                            <svg v-if="locale === 'en'" class="language-check" width="13" height="13"
                                viewBox="0 0 24 24" fill="none">
                                <path d="M5 12L10 17L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </button>
                        <button type="button" class="language-option" :class="{
                            selected: locale === 'es',
                        }" @click="changeLanguage('es')">
                            <span class="language-option-flag"> 🇪🇸 </span>

                            <span> Español </span>
                            <svg v-if="locale === 'es'" class="language-check" width="13" height="13"
                                viewBox="0 0 24 24" fill="none">
                                <path d="M5 12L10 17L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- <button type="button" class="login-btn">
                    <svg class="login-icon" width="14" height="14" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="1.7" />
                        <path d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21" stroke="currentColor"
                            stroke-width="1.7" stroke-linecap="round" />
                    </svg>
                    <span>
                        {{ $t("navbar.login") }}
                    </span>
                </button> -->
            </div>
            <div class="mobile-actions">
                <!-- MOBILE LANGUAGE -->
                <div class="language-wrapper mobile-language">
                    <button type="button" class="language-btn" @click.stop="toggleLanguage">
                        <span class="language-flag">
                            {{ locale === "es" ? "🇪🇸" : "🇬🇧" }}
                        </span>

                        <span class="language-code">
                            {{ locale === "es" ? "ES" : "EN" }}
                        </span>

                        <svg class="language-chevron" :class="{ open: languageOpen }" width="10" height="10"
                            viewBox="0 0 24 24" fill="none">
                            <path d="M6 9L12 15L18 9" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </button>
                    <!-- MOBILE LANGUAGE DROPDOWN -->
                    <div v-if="languageOpen" class="language-dropdown mobile-language-dropdown" @click.stop>
                        <button type="button" class="language-option" :class="{
                            selected: locale === 'en',
                        }" @click="changeLanguage('en')">
                            <span class="language-option-flag"> 🇬🇧 </span>
                            <span> English </span>
                            <svg v-if="locale === 'en'" class="language-check" width="13" height="13"
                                viewBox="0 0 24 24" fill="none">
                                <path d="M5 12L10 17L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </button>
                        <button type="button" class="language-option" :class="{
                            selected: locale === 'es',
                        }" @click="changeLanguage('es')">
                            <span class="language-option-flag"> 🇪🇸 </span>
                            <span> Español </span>
                            <svg v-if="locale === 'es'" class="language-check" width="13" height="13"
                                viewBox="0 0 24 24" fill="none">
                                <path d="M5 12L10 17L19 7" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
                <!-- <button type="button" class="mobile-login-btn" aria-label="Login">
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="7" r="4" stroke="currentColor" stroke-width="1.7" />

                        <path d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.4183 4 21" stroke="currentColor"
                            stroke-width="1.7" stroke-linecap="round" />
                    </svg>
                </button> -->
                <button class="hamburger" :class="{ open: menuOpen }" @click.stop="toggleMobile"
                    aria-label="Abrir menú">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
            </div>
        </div>
        <div class="mobile-menu" :class="{ open: menuOpen }">
            <ul>
                <li>
                    <router-link to="/" @click="closeMobile">
                        {{ $t("navbar.home") }}
                    </router-link>
                </li>
                <li>
                    <router-link to="/coffees" @click="closeMobile">
                        {{ $t("navbar.coffees") }}
                    </router-link>
                </li>
                <li>
                    <router-link to="/offer-list" @click="closeMobile">
                        {{ $t("navbar.offer") }}
                    </router-link>
                </li>
                <li>
                    <router-link to="/blog" @click="closeMobile">
                        {{ $t("navbar.blog") }}
                    </router-link>
                </li>
                <li>
                    <router-link to="/ourstory" @click="closeMobile">
                        {{ $t("navbar.ourStory") }}
                    </router-link>
                </li>
                <li>
                    <router-link to="/about" @click="closeMobile">
                        {{ $t("navbar.about") }}
                    </router-link>
                </li>
                <li>
                    <router-link to="/contact" @click="closeMobile">
                        {{ $t("navbar.contact") }}
                    </router-link>
                </li>
            </ul>
            <router-link to="/contact" class="btn btn-nav" style="align-self: flex-start" @click="closeMobile">
                {{ $t("navbar.requestSamples") }}
            </router-link>
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 200;
    transition:
        background var(--tr),
        box-shadow var(--tr);
}

.navbar.scrolled {
    background: var(--green);
    box-shadow: 0 2px 24px rgba(0, 0, 0, 0.28);
}

.nav-inner {
    display: flex;
    align-items: center;
    gap: 28px;
    padding: 12px 32px;
    max-width: 1280px;
    margin: 0 auto;
}

.nav-logo {
    display: flex;
    align-items: center;
    flex-shrink: 0;
}

.logo-img {
    height: 60px;
    width: auto;
    object-fit: contain;
    filter: brightness(0) invert(1);
}

.nav-links {
    display: flex;
    gap: 26px;
    margin: 0 auto;
}

.nav-links a {
    font-size: 12px;
    font-weight: 500;
    letter-spacing: 0.05em;
    color: rgba(255, 255, 255, 0.78);
    transition: color var(--tr);
    position: relative;
}

.nav-links a::after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    right: 0;
    height: 1px;
    background: var(--gold);
    transform: scaleX(0);
    transition: transform var(--tr);
}

.nav-links a:hover,
.nav-links a.active,
.nav-links a.router-link-active {
    color: var(--white);
}

.nav-links a:hover::after,
.nav-links a.active::after,
.nav-links a.router-link-active::after {
    transform: scaleX(1);
}

.nav-actions {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
}

.language-wrapper {
    position: relative;
}

.language-btn {
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    padding: 0 11px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: var(--r-sm);
    color: var(--white);
    font-family: inherit;
    cursor: pointer;
    transition:
        background var(--tr),
        border-color var(--tr);
}

.language-btn:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.28);
}

.language-flag {
    font-size: 15px;
    line-height: 1;
    display: flex;
    align-items: center;
}

.language-code {
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.08em;
}

.language-chevron {
    opacity: 0.75;
    transition: transform 0.25s ease;
}

.language-chevron.open {
    transform: rotate(180deg);
}

.language-dropdown {
    position: absolute;
    top: calc(100% + 8px);
    right: 0;
    min-width: 145px;
    padding: 6px;
    background: #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.08);
    border-radius: 8px;
    box-shadow: 0 12px 35px rgba(0, 0, 0, 0.18);
    z-index: 500;
    animation: languageDropdown 0.18s ease-out;
}

@keyframes languageDropdown {
    from {
        opacity: 0;
        transform: translateY(-5px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.language-option {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 9px;
    padding: 9px 10px;
    border: none;
    background: transparent;
    border-radius: 5px;
    color: var(--text);
    font-family: inherit;
    font-size: 11px;
    text-align: left;
    cursor: pointer;
    transition:
        background 0.2s ease,
        color 0.2s ease;
}

.language-option:hover {
    background: var(--ivory-d);
    color: var(--gold);
}

.language-option.selected {
    color: var(--gold);
    font-weight: 700;
}

.language-option-flag {
    font-size: 15px;
    line-height: 1;
}

.language-check {
    margin-left: auto;
    color: var(--gold);
}

.login-btn {
    height: 34px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    padding: 0 13px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: var(--r-sm);
    color: var(--white);
    font-family: inherit;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.08em;
    cursor: pointer;
    transition:
        background var(--tr),
        border-color var(--tr),
        transform var(--tr);
}

.login-btn:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(255, 255, 255, 0.28);
    transform: translateY(-1px);
}

.login-icon {
    flex-shrink: 0;
    opacity: 0.9;
    transition: transform var(--tr);
}

.login-btn:hover .login-icon {
    transform: translateY(-1px);
}

.mobile-actions {
    display: none;
    align-items: center;
    gap: 9px;
    margin-left: auto;
}

.mobile-login-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    padding: 0;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.16);
    border-radius: var(--r-sm);
    color: var(--white);
    cursor: pointer;
    transition:
        background var(--tr),
        border-color var(--tr),
        transform var(--tr);
}

.mobile-login-btn:hover {
    background: rgba(255, 255, 255, 0.16);
    border-color: rgba(255, 255, 255, 0.28);
    transform: translateY(-1px);
}

.hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    margin-left: 0;
}

.hamburger span {
    display: block;
    width: 22px;
    height: 2px;
    background: var(--white);
    border-radius: 2px;
    transition: all var(--tr);
}

.hamburger.open span:nth-child(1) {
    transform: translateY(7px) rotate(45deg);
}

.hamburger.open span:nth-child(2) {
    opacity: 0;
}

.hamburger.open span:nth-child(3) {
    transform: translateY(-7px) rotate(-45deg);
}

.mobile-menu {
    display: none;
    flex-direction: column;
    padding: 16px 32px 24px;
    background: var(--green);
    border-top: 1px solid rgba(255, 255, 255, 0.07);
}

.mobile-menu.open {
    display: flex;
}

.mobile-menu ul {
    margin-bottom: 16px;
}

.mobile-menu li a {
    display: block;
    padding: 12px 0;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.82);
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
    transition: color var(--tr);
}

.mobile-menu li a:hover,
.mobile-menu li a.router-link-active {
    color: var(--white);
}

@media (max-width: 900px) {
    .nav-inner {
        padding: 10px 24px;
    }

    .nav-links,
    .nav-actions {
        display: none;
    }

    .mobile-actions {
        display: flex;
    }

    .hamburger {
        display: flex;
    }

    .logo-img {
        height: 52px;
    }

    .mobile-menu {
        display: none;
    }

    .mobile-menu.open {
        display: flex;
    }

    .mobile-language-dropdown {
        right: 0;

        left: auto;
    }
}

@media (max-width: 600px) {
    .nav-inner {
        padding: 8px 18px;
    }

    .logo-img {
        height: 48px;
    }

    .mobile-actions {
        gap: 6px;
    }

    .mobile-login-btn {
        width: 32px;

        height: 32px;
    }

    .mobile-menu {
        padding: 14px 20px 22px;
    }

    .mobile-menu li a {
        padding: 13px 0;

        font-size: 14px;
    }

    .language-btn {
        height: 32px;

        padding: 0 8px;

        gap: 5px;
    }

    .language-flag {
        font-size: 14px;
    }

    .language-code {
        font-size: 9px;
    }
}
</style>
