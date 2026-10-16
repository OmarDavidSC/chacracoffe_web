import about from "./espanol/about";
import conditions from "./espanol/conditions";
import contact from "./espanol/contact";
import footer from "./espanol/footer";
import home from "./espanol/home";
import navbar from "./espanol/navbar";
import news from "./espanol/news";
import offer from "./espanol/offer";
import privacy from "./espanol/privacy";
import story from "./espanol/story";
import timeline from "./espanol/timeline";

export default {
    ...navbar,
    ...home,
    ...story,
    ...about,
    ...offer,
    ...news,
    ...contact,
    ...footer,

    ...timeline,
    ...privacy,
    ...conditions,
}