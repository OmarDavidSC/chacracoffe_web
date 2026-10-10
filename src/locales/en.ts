import about from "./ingles/about";
import contac from "./ingles/contac";
import home from "./ingles/home";
import offer from "./ingles/offer";
import story from "./ingles/story";

export default {
    navbar : {
        home: 'Home',
        ourStory: 'Our Story',
        about: 'About',
        offer: 'Offer List',
        blog: 'Blog',
        contact: 'Contact',
        requestSamples: 'Request Sample',
        login: 'Login',        
    },
    ...home,
    ...story,
    ...about,
    ...offer,
    ...contac,
    footer: {
        rights: 'All rights reserved.',
    }
}