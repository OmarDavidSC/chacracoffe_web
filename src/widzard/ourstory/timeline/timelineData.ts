export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  location: string;
}

export const timeline: TimelineItem[] = [
  {
    year: "2014",
    title: "The First Hectare",
    description:
      "A single family farm in Jaén begins processing washed Typica and Bourbon for the local market, focused on quality over volume from day one.",
    location: "Jaén, Cajamarca",
  },
  {
    year: "2017",
    title: "First Export Container",
    description:
      "Chacra Coffee ships its first container of green coffee to a roaster in the UK, marking the start of direct relationships with European buyers.",
    location: "Jaén → United Kingdom",
  },
  {
    year: "2019",
    title: "Expanding to New Origins",
    description:
      "Partnerships extend into San Ignacio and Cutervo, bringing the total network to over 40 producers and introducing the first honey-processed lots.",
    location: "Cajamarca, Peru",
  },
  {
    year: "2021",
    title: "Quality Lab & Cupping Room",
    description:
      "A dedicated cupping lab opens in Jaén, allowing every lot to be scored and verified before export — establishing a stronger foundation for quality control.",
    location: "Jaén, Cajamarca",
  },
  {
    year: "2023",
    title: "Experimental Processing Program",
    description:
      "Anaerobic fermentation and carbonic maceration trials begin with producers in Callayuc and Queromarca, leading to Chacra's first exceptional experimental lots.",
    location: "Callayuc & Queromarca",
  },
  {
    year: "2026",
    title: "100+ Producers, 6 Origins",
    description:
      "Chacra Coffee now works with over 100 producers across six origin zones in Cajamarca, exporting to roasters across the UK and Europe with full traceability.",
    location: "Cajamarca, Peru",
  },
];
