import about from "./espanol/about";
import contact from "./espanol/contact";
import footer from "./espanol/footer";
import home from "./espanol/home";
import navbar from "./espanol/navbar";
import offer from "./espanol/offer";
import story from "./espanol/story";

export default {
    ...navbar,
    ...home,
    ...story,
    ...about,
    ...offer,
    ...contact,
    ...footer
}