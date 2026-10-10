import about from "./ingles/about";
import contac from "./ingles/contac";
import footer from "./ingles/footer";
import home from "./ingles/home";
import navbar from "./ingles/navbar";
import offer from "./ingles/offer";
import story from "./ingles/story";
import timeline from "./ingles/timeline";

export default {
    ...navbar,
    ...home,
    ...story,
    ...about,
    ...offer,
    ...contac,
    ...footer,

    ...timeline,
}