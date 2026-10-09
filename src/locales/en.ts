import about from "./ingles/about";
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
    footer: {
        rights: 'All rights reserved.',
    }
}