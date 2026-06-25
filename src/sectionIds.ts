export const sectionIds = [
    "cauzasi-2030",
    "harta",
    "voluntari",
    "actiuni",
    "sponsori",
    "echipa",
    "contact",
] as const;

export type SectionId = (typeof sectionIds)[number];
