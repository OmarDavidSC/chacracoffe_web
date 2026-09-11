<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const menuOpen = ref(false);
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
    document.body.style.overflow = menuOpen.value ? "hidden" : "";
};
const handleClickOutside = (event: MouseEvent) => {
    const navbar = document.getElementById("navbar");

    if (navbar && !navbar.contains(event.target as Node)) {
        closeMobile();
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
            <!-- LOGO -->
            <router-link to="/" class="nav-logo">
                <img src="../../public/img/Logo_Chacra.png" alt="Chacra Coffee" class="logo-img" />
            </router-link>
            <!-- DESKTOP MENU -->
            <ul class="nav-links">
                <li>
                    <router-link to="/" class="active">Home</router-link>
                </li>
                <li>
                    <router-link to="/ourstory">Our Story</router-link>
                </li>
                <li>
                    <router-link to="/about">About Us</router-link>
                </li>
                <li>
                    <router-link to="/offer">Offer List</router-link>
                </li>
                <li>
                    <router-link to="/new-releases">Blog</router-link>
                </li>
                
                <li>
                    <router-link to="/contact">Contact</router-link>
                </li>
            </ul>
            <!-- ACTIONS DESKTOP -->
            <div class="nav-actions">
                <router-link to="/contact" class="btn btn-nav">
                    Request Samples
                </router-link>
                <button class="lang-btn">EN</button>
                <button class="lang-btn">ES</button>
            </div>
            <!-- HAMBURGER -->
            <button class="hamburger" :class="{ open: menuOpen }" @click.stop="toggleMobile" aria-label="Abrir menú">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        <!-- MOBILE MENU -->
        <div class="mobile-menu" :class="{ open: menuOpen }">
            <ul>
                <li>
                    <router-link to="/" @click="closeMobile"> Home </router-link>
                </li>
                <li>
                    <router-link to="/coffees" @click="closeMobile">
                        Coffees
                    </router-link>
                </li>
                <li>
                    <router-link to="/offer-list" @click="closeMobile">
                        Offer List
                    </router-link>
                </li>
                <li>
                    <router-link to="/new-releases" @click="closeMobile">
                        New Releases
                    </router-link>
                </li>
                <li>
                    <router-link to="/ourstory" @click="closeMobile">
                        Story
                    </router-link>
                </li>
                <li>
                    <router-link to="/about" @click="closeMobile"> About </router-link>
                </li>
                <li>
                    <router-link to="/contact" @click="closeMobile">
                        Contact
                    </router-link>
                </li>
            </ul>
            <router-link to="/contact" class="btn btn-nav" style="align-self: flex-start" @click="closeMobile">
                Request Samples
            </router-link>
        </div>
    </nav>
</template>

<style scoped>
/* NAVBAR */
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

.lang-btn {
    display: flex;
    align-items: center;
    gap: 4px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.16);
    color: var(--white);
    font-size: 11px;
    font-weight: 600;
    padding: 6px 10px;
    border-radius: var(--r-sm);
    cursor: pointer;
    transition: background var(--tr);
}

.lang-btn:hover {
    background: rgba(255, 255, 255, 0.18);
}

/* HAMBURGER */
.hamburger {
    display: none;
    flex-direction: column;
    gap: 5px;
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    margin-left: auto;
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

/* MOBILE MENU */
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
}

@media (max-width: 600px) {
    .nav-inner {
        padding: 8px 18px;
    }

    .logo-img {
        height: 48px;
    }

    .mobile-menu {
        padding: 14px 20px 22px;
    }

    .mobile-menu li a {
        padding: 13px 0;
        font-size: 14px;
    }
}
</style>
