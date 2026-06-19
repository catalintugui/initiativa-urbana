export const sectionIds = [
    "cauzasi-2030",
    "harta",
    "voluntari",
    "petitii",
    "sponsori",
    "echipa",
    "contact",
] as const;

export type SectionId = (typeof sectionIds)[number];
