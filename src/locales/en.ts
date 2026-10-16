import about from "./ingles/about";
import conditions from "./ingles/conditions";
import contac from "./ingles/contac";
import footer from "./ingles/footer";
import home from "./ingles/home";
import navbar from "./ingles/navbar";
import news from "./ingles/news";
import offer from "./ingles/offer";
import privacy from "./ingles/privacy";
import story from "./ingles/story";
import timeline from "./ingles/timeline";

export default {
    ...navbar,
    ...home,
    ...story,
    ...about,
    ...offer,
    ...news,
    ...contac,
    ...footer,

    ...timeline,
    ...privacy,
    ...conditions,
}