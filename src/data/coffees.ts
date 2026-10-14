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
        name: "Bracamoros",
        category: "regional",
        process: "washed",
        origin: "jaen",
        originLabel: "Jaén, Cajamarca",
        altitude: "1,800 - 2400 masl",
        image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80",
        score: 83,
        badge: "Regional Blend",
        tags: ["Washed", "Typica", "Caturra"],
        notes: "Fruity, peach, apricot, tomato",
    },

    {
        id: 2,
        name: "Marañón",
        category: "regional",
        process: "natural",
        origin: "cutervo",
        originLabel: "Jaén, Cajamarca",
        altitude: "1,800 – 2,400 masl",
        image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80",
        score: 84,
        badge: "Regional Blend",
        tags: ["Natural", "Typica", "Caturra"],
        notes: "Fruity, peach, apricot, tomato",
    },

    {
        id: 3,
        name: "Chicha",
        category: "regional",
        process: "washed",
        origin: "cajamarca",
        originLabel: "Jaén, Cajamarca",
        altitude: "1,800 – 2,400 masl",
        image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80",
        score: 86,
        badge: "Regional Blend",
        tags: ["Washed", "Bourbon", "Catura"],
        notes: "Kiwi, Orange, Panela, Fruity",
    },

    {
        id: 4,
        name: "Premier Cru",
        category: "microlot",
        process: "honey",
        origin: "san-ignacio",
        originLabel: "San Ignacio",
        altitude: "1,200–1,900 masl",
        image:
            "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80",
        score: 86,
        badge: "Microlot",
        tags: ["Washed", "Geisha", "Caturra"],
        notes: "Fruity, Kiwi, Floral, Bright Acidity, Elderberry",
        featured: true,
    },

    {
        id: 5,
        name: "Geisha Clásico",
        category: "microlot",
        process: "washed",
        origin: "jaen",
        originLabel: "Jaén - Cajamarca",
        altitude: "1,800 - 2,400 masl",
        image:
            "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80",
        score: 85,
        badge: "Microlot",
        tags: ["Washed", "Geisha",],
        notes: "Floral, Peach, Citrus",
    },

    {
        id: 6,
        name: "Geisha Fino",
        category: "microlot",
        process: "natural",
        origin: "cutervo",
        originLabel: "Jaén - Cajamarca",
        altitude: "1,800 - 2,400 masl",
        image:
            "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80",
        score: 87,
        badge: "Microlot",
        tags: ["Washed", "Geisha"],
        notes: "Floral, Rose, Naranjilla, Lemon Verbena, Bergamot",
    },

    {
        id: 7,
        name: "Nativo",
        category: "microlot",
        process: "honey",
        origin: "san-ignacio",
        originLabel: "Jaén - Cajamarca",
        altitude: "1,800 - 2,400 masl",
        image:
            "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80",
        score: 86,
        badge: "Microlot",
        tags: ["Natural", "Bourbon", "Caturra"],
        notes: "Chocolate, Malt, Fruity, Peach",
    },

    {
        id: 8,
        name: "Tropical",
        category: "experimental",
        process: "anaerobic",
        origin: "callayuc",
        originLabel: "Jaén - Cajamarca",
        altitude: "1,800 – 2,400 masl",
        image:
            "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80",
        score: 85,
        badge: "Experimental",
        tags: ["Natural", "Geisha", "Bourbon", "Typica"],
        notes: "Fruity, Plum, Beer, Floral, Olive",
        featured: true,
    },

    {
        id: 9,
        name: "Gran Cru",
        category: "experimental",
        process: "anaerobic",
        origin: "queromarca",
        originLabel: "Jaén - Cajamarca",
        altitude: "1,800 - 2,200 masl",
        image:
            "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80",
        score: 89,
        badge: "Nano Lots",
        tags: ["WASHED", "NATURAL"],
        notes: "Floral, Sweetness, Complex, Naranjilla, Hibiscus",
    },

    {
        id: 10,
        name: "Las Etiopes",
        category: "experimental",
        process: "natural",
        origin: "callayuc",
        originLabel: "Callayuc · High Jungle",
        altitude: "1,950 - 2,050 masl",
        image:
            "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80",
        score: 88,
        badge: "Nano Lots",
        tags: ["Washed", "Natural"],
        notes: "Jasmine, Bergamot, Black tea, Pitaya",
    },

    {
        id: 11,
        name: "José Quispe Honey",
        category: "regional",
        process: "honey",
        origin: "cajamarca",
        originLabel: "Colasay, Cajamarca",
        altitude: "1,850 masl",
        image:
            "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80",
        score: 87,
        badge: "NANO LOTS",
        tags: ["Natural"],
        notes: "Floral, naranjilla, sweet, lemon verbena, green apple",
    },

    {
        id: 12,
        name: "Clever Acosta",
        category: "microlot",
        process: "washed",
        origin: "queromarca",
        originLabel: "Las Pirias - Chirinos",
        altitude: "1,800 - 1,900 masl",
        image:
            "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&q=80",
        score: 86,
        badge: "NANO LOTS",
        tags: ["Washed", "Geisha", "Sidra"],
        notes: "Fruity, naranjilla, panela, lemon verbena",
    },
];
