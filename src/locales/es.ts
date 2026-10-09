import about from "./espanol/about";
import home from "./espanol/home";
import offer from "./espanol/offer";
import story from "./espanol/story";

export default {
    navbar : {
        home: 'Inicio',
        ourStory: 'Nuestra Historia',
        about: 'Acerca de',
        offer: 'Lista de Ofertas',
        blog: 'Blog',
        contact: 'Contacto',
        requestSamples: 'Solicitar Muestra',
        login: 'Iniciar Sesión',        
    },
    ...home,
    ...story,
    ...about,
    ...offer,
    footer: {
        rights: 'Todos los derechos reservados.',
    }
}