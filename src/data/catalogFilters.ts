export interface FilterOption {
    value: string;
    label: string;
}

export const categoryFilters: FilterOption[] = [
    {
        value: "all",
        label: "All",
    },
    {
        value: "regional",
        label: "Regional Blends",
    },
    {
        value: "microlot",
        label: "Microlots",
    },
    {
        value: "experimental",
        label: "Experimental",
    },
];

export const processFilters: FilterOption[] = [
    {
        value: "all",
        label: "All",
    },
    {
        value: "washed",
        label: "Washed",
    },
    {
        value: "natural",
        label: "Natural",
    },
    {
        value: "honey",
        label: "Honey",
    },
    {
        value: "anaerobic",
        label: "Anaerobic",
    },
];

export const originFilters: FilterOption[] = [
    {
        value: "all",
        label: "All Origins",
    },
    {
        value: "jaen",
        label: "Jaén",
    },
    {
        value: "san-ignacio",
        label: "San Ignacio",
    },
    {
        value: "cutervo",
        label: "Cutervo",
    },
    {
        value: "cajamarca",
        label: "Cajamarca",
    },
    {
        value: "queromarca",
        label: "Queromarca",
    },
    {
        value: "callayuc",
        label: "Callayuc",
    },
];
