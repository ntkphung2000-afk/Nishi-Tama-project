/**
 * CENTRAL IMAGE CONFIGURATION
 * ---------------------------------------------------------------
 * Every image used on the site is referenced from this file only.
 * To replace an image later in VS Code:
 *   1. Drop your file into  public/images/
 *   2. Change the path below. Nothing else needs to be touched.
 *
 * Paths are public URLs (served from the /public folder).
 * If a file is missing, the <Figure /> component shows an elegant
 * placeholder instead of a broken image.
 */

export const images = {
  hero: "/images/nishitama-hero.jpg",
  nishitama: "/images/nishitama-overview.jpg",

  // 8 municipalities
  ome: "/images/ome.jpg",
  fussa: "/images/fussa.jpg",
  hamura: "/images/hamura.jpg",
  akiruno: "/images/akigawa.jpg",
  mizuho: "/images/mizuho.jpg",
  hinode: "/images/hinode.jpg",
  hinohara: "/images/hossawa.jpg",
  okutama: "/images/okutama-lake.jpg",

  destinations: {
    mitake: "/images/mitake.jpg",
    rockGarden: "/images/mitake-rock-garden.jpg",
    akigawa: "/images/akigawa.jpg",
    hossawa: "/images/hossawa.jpg",
    okutamaLake: "/images/okutama-lake.jpg",
    nippara: "/images/nippara-cave.jpg",
    yoshinoBaigo: "/images/yoshino-baigo.jpg",
    musashiMitake: "/images/musashi-mitake-shrine.jpg",
    omeOldTown: "/images/ome-old-town.jpg",
    // Drop matching files into public/images/ to replace the placeholders.
    shiromaru: "/images/shiromaru-lake.jpg",
    tamaRiver: "/images/tama-river.jpg",
    ogochiDam: "/images/ogochi-dam.jpg",
    hatonosu: "/images/hatonosu-valley.jpg",
    hyakuhiro: "/images/hyakuhiro-falls.jpg",
    hikawa: "/images/hikawa-area.jpg",
    mitakeGorge: "/images/mitake-gorge.jpg",
    kamanofuchi: "/images/kamanofuchi-park.jpg",
    shiofune: "/images/shiofune-kannonji.jpg",
  },

  specialties: {
    ume: "/images/specialty-ume.jpg",
    vegetables: "/images/specialty-vegetables.jpg",
    river: "/images/specialty-river-fish.jpg",
    sweets: "/images/specialty-sweets.jpg",
    drinks: "/images/specialty-drinks.jpg",
    seasonal: "/images/specialty-seasonal.jpg",
  },

  experiences: {
    nature: "/images/experience-nature.jpg",
    culture: "/images/mitake.jpg",
    food: "/images/experience-food.jpg",
    outdoor: "/images/akigawa.jpg",
    seasonal: "/images/experience-seasonal.jpg",
    showa: "/images/experience-showa.jpg",
    samurai: "/images/experience-samurai.jpg",
  },

  events: {
    featured: "/images/event-gunjo-kiko.jpg",
    omeFireworks: "/images/event-ome-fireworks.jpg",
    akirunoSummer: "/images/event-akiruno-summer.jpg",
    fussaTanabata: "/images/event-fussa-tanabata.jpg",
    hinodeShishimai: "/images/event-hinode-shishimai.jpg",
    okutamaFireworks: "/images/event-okutama-fireworks.jpg",
    ekinishi: "/images/event-ekinishi.jpg",
    hossawaMatsuri: "/images/event-hossawa-matsuri.jpg",
    yoruichi: "/images/event-yoruichi.jpg",
  },

  manners: "/images/manners.jpg",
  plan: "/images/plan-trip.jpg",
  guide: "/images/nishitama-overview.jpg",
} as const;

export type Images = typeof images;
