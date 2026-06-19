import sharp from "sharp";
import { mkdir, readdir, rm } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const assetsDir =
    "/Users/catalintugui/.cursor/projects/Users-catalintugui-Downloads-initiativa-urbana/assets";
const outputDir = path.join(root, "public/vision");

const slides = [
    {
        source: "01_strada_verde_trotuar_larg",
        name: "01-strada-verde-trotuar-larg",
        alt: "Stradă verde cu trotuar larg, copaci și parcări organizate",
    },
    {
        source: "02_mobilitate_calma_cafenea_bicicleta",
        name: "02-mobilitate-calma-cafenea-bicicleta",
        alt: "Mobilitate calmă: cafenea pe trotuar și pistă pentru biciclete",
    },
    {
        source: "03_pocket_park_spatiu_verde",
        name: "03-pocket-park-spatiu-verde",
        alt: "Pocket park cu spații verzi, bănci și copii",
    },
    {
        source: "04_detaliu_patrimoniu_balcon",
        name: "04-detaliu-patrimoniu-balcon",
        alt: "Detaliu de patrimoniu: balcon istoric cu balustradă ornamentată",
    },
    {
        source: "05_ulita_istorica_curte",
        name: "05-ulita-istorica-curte",
        alt: "Uliță istorică cu pavaj vechi și curți ascunse",
    },
    {
        source: "06_piata_comunitara_cu_arbore",
        name: "06-piata-comunitara-cu-arbore",
        alt: "Piață comunitară cu arbore central și fântână pentru copii",
    },
    {
        source: "08_sectiune_stradala_arbori_pietoni",
        name: "08-sectiune-stradala-arbori-pietoni",
        alt: "Secțiune stradală cu arbori, pietoni, bicicliști și mașini",
    },
    {
        source: "09_strada_cu_pista_biciclete_si_arbori",
        name: "09-strada-pista-biciclete-arbori",
        alt: "Stradă cu pistă de biciclete separată și aliniament de arbori",
    },
    {
        source: "10_activare_urbana_piata_creativi",
        name: "10-activare-urbana-piata-creativi",
        alt: "Activare urbană: piață creativă cu mural, mese și lumini",
    },
];

const assetFiles = await readdir(assetsDir);

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

for (const slide of slides) {
    const sourceFile = assetFiles.find((file) => file.startsWith(slide.source));

    if (!sourceFile) {
        throw new Error(`Missing asset for ${slide.source}`);
    }

    await sharp(path.join(assetsDir, sourceFile))
        .webp({ quality: 90 })
        .toFile(path.join(outputDir, `${slide.name}.webp`));
}

console.log(`Prepared ${slides.length} vision slides in ${outputDir}`);
