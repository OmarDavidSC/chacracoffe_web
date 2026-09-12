import { createI18n } from "vue-i18n";
import es from "./es";
import en from "./en";

const i18n = createI18n({
        legacy: false,
        locale: 'en',
        fallbackLocale: 'en',
        messages: {en, es}
});

export default i18n;