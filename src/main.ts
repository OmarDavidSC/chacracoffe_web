import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from './router'
import i18n from './locales/index.ts'
import './assets/css/main.css'

const app = createApp(App);

app.use(createPinia);
app.use(router);
app.use(i18n);

app.mount('#app')
