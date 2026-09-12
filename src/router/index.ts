import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import OfferListView from "../views/OfferListView.vue";
import StoryView from "../views/StoryView.vue";
import AboutView from "../views/AboutView.vue";
import ContactView from "../views/ContactView.vue";
import BlogView from "../views/BlogView.vue";


const routes: RouteRecordRaw[] = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/offer', name: 'offer', component: OfferListView },
    { path: '/ourstory', name: 'ourstory', component: StoryView },
    { path: '/about', name: 'about', component: AboutView },
    { path: '/contact', name: 'contact', component: ContactView },
    {path: '/blog', name: 'blog', component: BlogView},

];

const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return {
            top: 0,
            behavior: 'smooth'
        }
    }
});


export default router;
