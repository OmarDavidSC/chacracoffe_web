export interface CoffeeLot {
    id: number;
    name: string;
    category: "regional" | "microlot" | "experimental";
    process: "washed" | "natural" | "honey" | "anaerobic";
    origin: string;
    originLabel: string;
    altitude: string;
    image: string;
    score: number;
    badge: string;
    tags: string[];
    notes: string;
    featured?: boolean;
}

export const coffeeLots: CoffeeLot[] = [
    {
        id: 1,
        name: "Jaén Reserve",
        category: "regional",
        process: "washed",
        origin: "jaen",
        originLabel: "Jaén, Cajamarca",
        altitude: "1,300–1,800 masl",
        image: "/img/catalog/Fondo_1.jpg",
        score: 84,
        badge: "Regional Blend",
        tags: ["Washed", "Typica", "Caturra"],
        notes: "Chocolate, caramel, orange",
    },

    {
        id: 2,
        name: "Cutervo Highland",
        category: "regional",
        process: "natural",
        origin: "cutervo",
        originLabel: "Cutervo, Cajamarca",
        altitude: "1,800–2,100 masl",
        image: "/img/catalog/Fondo_2.jpg",
        score: 85,
        badge: "Regional Blend",
        tags: ["Natural", "Typica", "Geisha"],
        notes: "Tropical fruits, panela, vanilla",
    },

    {
        id: 3,
        name: "Cajamarca Classic",
        category: "regional",
        process: "washed",
        origin: "cajamarca",
        originLabel: "Cajamarca Central",
        altitude: "1,300–2,000 masl",
        image: "/img/catalog/Fondo_3.jpg",
        score: 83,
        badge: "Regional Blend",
        tags: ["Washed", "Bourbon", "Catura"],
        notes: "Caramel, chocolate, citrus",
    },

    {
        id: 4,
        name: "San Ignacio Geisha",
        category: "microlot",
        process: "honey",
        origin: "san-ignacio",
        originLabel: "San Ignacio",
        altitude: "1,200–1,900 masl",
        image:
            "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80",
        score: 87,
        badge: "Microlot",
        tags: ["Honey", "Geisha", "Single Farm"],
        notes: "Floral, bergamot, red fruits",
        featured: true,
    },

    {
        id: 5,
        name: "María Flores Lot",
        category: "microlot",
        process: "washed",
        origin: "jaen",
        originLabel: "Jaén · El Porvenir",
        altitude: "1,400 masl",
        image:
            "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=600&q=80",
        score: 86,
        badge: "Microlot",
        tags: ["Washed", "Bourbon", "Traceable"],
        notes: "Dark chocolate, almond",
    },

    {
        id: 6,
        name: "Elmer Valdivia Selection",
        category: "microlot",
        process: "natural",
        origin: "cutervo",
        originLabel: "Cutervo",
        altitude: "1,900 masl",
        image:
            "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&q=80",
        score: 87,
        badge: "Microlot",
        tags: ["Natural", "Caturra", "Single Farm"],
        notes: "Strawberry, brown sugar",
    },

    {
        id: 7,
        name: "Andy Llanos Honey",
        category: "microlot",
        process: "honey",
        origin: "san-ignacio",
        originLabel: "Colasay, San Ignacio",
        altitude: "1,700 masl",
        image:
            "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=600&q=80",
        score: 86,
        badge: "Microlot",
        tags: ["Honey", "Pache", "Traceable"],
        notes: "Black tea, bergamot",
    },

    {
        id: 8,
        name: "Callayuc Anaerobic",
        category: "experimental",
        process: "anaerobic",
        origin: "callayuc",
        originLabel: "Callayuc",
        altitude: "1,900–2,400 masl",
        image:
            "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
        score: 88,
        badge: "Experimental",
        tags: ["Anaerobic", "Typica", "72h Fermentation"],
        notes: "Passion fruit, guava, jasmine",
        featured: true,
    },

    {
        id: 9,
        name: "Queromarca Carbonic",
        category: "experimental",
        process: "anaerobic",
        origin: "queromarca",
        originLabel: "Queromarca",
        altitude: "2,200 masl",
        image:
            "https://images.unsplash.com/photo-1442550528053-c431ecb55509?w=600&q=80",
        score: 87,
        badge: "Experimental",
        tags: ["Carbonic Maceration", "Bourbon"],
        notes: "Green apple, peach, nuts",
    },

    {
        id: 10,
        name: "Jungle Long Ferment",
        category: "experimental",
        process: "natural",
        origin: "callayuc",
        originLabel: "Callayuc · High Jungle",
        altitude: "2,000 masl",
        image:
            "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=600&q=80",
        score: 88,
        badge: "Experimental",
        tags: ["Long Fermentation", "Pache"],
        notes: "Honey, jasmine, tropical",
    },

    {
        id: 11,
        name: "José Quispe Honey",
        category: "regional",
        process: "honey",
        origin: "cajamarca",
        originLabel: "Cajamarca Central",
        altitude: "1,600 masl",
        image:
            "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&q=80",
        score: 84,
        badge: "Regional Blend",
        tags: ["Honey", "Catimor"],
        notes: "Caramel, red fruits",
    },

    {
        id: 12,
        name: "High Jalca Lot",
        category: "microlot",
        process: "washed",
        origin: "queromarca",
        originLabel: "Queromarca",
        altitude: "2,300 masl",
        image:
            "https://images.unsplash.com/photo-1506372023823-741c83b836fe?w=600&q=80",
        score: 86,
        badge: "Microlot",
        tags: ["Washed", "Typica", "High Altitude"],
        notes: "Green apple, brown sugar",
    },
];
