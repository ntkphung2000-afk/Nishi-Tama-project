/**
 * CENTRAL IMAGE CONFIGURATION
 * ---------------------------------------------------------------
 * All website images are referenced from this file.
 *
 * To replace an image:
 * 1. Put the new image into public/images/ or public/images/areas/
 * 2. Keep the same filename
 * 3. The website will automatically use the new image
 *
 * Public image URLs start with /images/
 */

export const images = {
  // ============================================================
  // MAIN WEBSITE IMAGES
  // ============================================================

  hero: "/images/hero/nishitama-hero.jpg",
  // Cinematic Hero background sequence, kept in its own folder
  // (public/images/hero/) for easy management. Only genuinely scenic
  // photographs belong here — the original nishitama-hero(1).JPG and
  // nishitama-hero(2).JPG snapshots (a station signpost, a hand holding a
  // notebook) were tourist snapshots, not landscape photography, and have
  // since been removed/replaced.
  heroScenes: ["/images/hero/nishitama-hero.jpg", "/images/hero/nishitama-hero(1).jpg"],
  nishitama: "/images/nishitama-overview.jpg",

  // ============================================================
  // 8 NISHI TAMA MUNICIPALITIES
  // ============================================================

  municipalities: {
    ome: "/images/ome.jpg",
    fussa: "/images/fussa.jpg",
    hamura: "/images/hamura.jpg",
    akiruno: "/images/akigawa.jpg",
    mizuho: "/images/mizuho.jpg",
    hinode: "/images/hinode.jpg",
    hinohara: "/images/hossawa.jpg",
    okutama: "/images/okutama-lake.jpg",
  },

  // Keep backward compatibility with existing components
  ome: "/images/ome.jpg",
  fussa: "/images/fussa.jpg",
  hamura: "/images/hamura.jpg",
  akiruno: "/images/akigawa.jpg",
  mizuho: "/images/mizuho.jpg",
  hinode: "/images/hinode.jpg",
  hinohara: "/images/hossawa.jpg",
  okutama: "/images/okutama-lake.jpg",

  // ============================================================
  // DESTINATION / AREA IMAGES
  // ============================================================
  // Detailed destination images are stored in:
  // public/images/areas/
  //
  // Each image corresponds to ONE specific destination.
  // ============================================================

  destinations: {
  // Mount Mitake
  mountMitake: "/images/areas/mount-mitake.jpg",
  mitake: "/images/areas/mount-mitake.jpg",

  // Mitake Gorge
  mitakeGorge: "/images/areas/mitake-gorge.jpg",

  // Musashi Mitake Shrine
  musashiMitake: "/images/areas/musashi-mitake-shrine.jpg",

  // Mitake Rock Garden
  rockGarden: "/images/areas/mitake-rock-garden.jpg",

  // Yoshino Baigo
  yoshinoBaigo: "/images/areas/yoshino-baigo.jpg",

  // Ome Old Town
  omeOldTown: "/images/areas/ome-old-town.jpg",

  // Kamanofuchi Park
  kamanofuchi: "/images/areas/kamanofuchi-park.jpg",

  // Shiofune Kannon-ji
  shiofune: "/images/areas/shiofune-kannonji.jpg",

  // Akigawa Valley
  akigawa: "/images/areas/akigawa-valley.jpg",
  akigawaValley: "/images/areas/akigawa-valley.jpg",

  // Hossawa Falls
  hossawa: "/images/areas/hossawa-falls.jpg",
  hossawaFalls: "/images/areas/hossawa-falls.jpg",

  // Lake Okutama
  okutamaLake: "/images/areas/lake-okutama.jpg",
  lakeOkutama: "/images/areas/lake-okutama.jpg",

  // Ogochi Dam
  ogochiDam: "/images/areas/ogochi-dam.jpg",

  // Nippara Limestone Cave
  nippara: "/images/areas/nippara-limestone-cave.jpg",

  // Shiromaru Lake
  shiromaru: "/images/areas/shiromaru-lake.jpg",

  // Tama River
  tamaRiver: "/images/areas/tama-river.jpg",

  // Hatonosu Valley
  hatonosu: "/images/areas/hatonosu-valley.jpg",

  // Hyakuhiro Falls
  hyakuhiro: "/images/areas/hyakuhiro-falls.jpg",

  // Hikawa Area
  hikawa: "/images/areas/hikawa-area.jpg",

  // Mount Hinode — stand-in: free Unsplash photo (generic forested-hill
  // hiking scene, not literally Mount Hinode). Swap for a real photo when
  // available.
  mountHinode: "https://images.unsplash.com/photo-1658296769881-f50967f4e740?auto=format&fit=crop&w=1600&q=80",

  // Mount Odake — stand-in: free Unsplash photo (generic forested-mountain
  // hiking scene, not literally Mount Odake). Swap for a real photo when
  // available.
  mountOdake: "https://images.unsplash.com/photo-1658296758904-45442f808dae?auto=format&fit=crop&w=1600&q=80",

  // Hamura Zoo — free Unsplash photo (capybara at a zoo enclosure).
  hamuraZoo: "https://images.unsplash.com/photo-1683479452479-21a4f12672d2?auto=format&fit=crop&w=1600&q=80",

  // Tokyo Summerland — free Unsplash photo (water park slide).
  tokyoSummerland: "https://images.unsplash.com/photo-1706843540963-ae52d784de62?auto=format&fit=crop&w=1600&q=80",

  // Hinode Tsurutsuru Onsen — stand-in: free Unsplash photo of a Japanese
  // onsen (Beppu), not literally this onsen. Swap for a real photo when
  // available.
  hinodeTsurutsuruOnsen: "https://images.unsplash.com/photo-1752917878233-fd51e99a48ba?auto=format&fit=crop&w=1600&q=80",

  // Ozawa Sake Brewery (Sawanoi) — free Unsplash photo (sake barrels, Japan).
  ozawaSakeBrewery: "https://images.unsplash.com/photo-1758470475891-5dae231b01b5?auto=format&fit=crop&w=1600&q=80",

  // Ishikawa Brewery — stand-in: free Unsplash photo (craft beer glasses),
  // not specific to this brewery. Swap for a real photo when available.
  ishikawaBrewery: "https://images.unsplash.com/photo-1687771454203-97d0b08bbeb2?auto=format&fit=crop&w=1600&q=80",
},

  // ============================================================
  // SPECIALTIES / LOCAL FOOD
  // ============================================================

  specialties: {
    ume: "/images/specialty-ume.jpg",
    vegetables: "/images/specialty-vegetables.jpg",
    river: "/images/specialty-river-fish.jpg",
    sweets: "/images/specialty-sweets.jpg",
    drinks: "/images/specialty-drinks.jpg",
    seasonal: "/images/specialty-seasonal.jpg",
  },

 // ============================================================
// EXPERIENCES
// ============================================================

experiences: {
  nature: "/images/experiences/experience-nature.jpg",
  culture: "/images/experiences/experience-culture.jpg",
  food: "/images/experiences/experience-food.jpg",
  outdoor: "/images/experiences/experience-outdoor.jpg",
  seasonal: "/images/experiences/experience-seasonal.jpg",

  // Showa retro experience
  showa: "/images/experiences/experience-showa.jpg",

  // Samurai / traditional Japanese culture
  samurai: "/images/experiences/experience-samurai.jpg",
},

  // ============================================================
  // EVENTS
  // ============================================================

 events: {
  featured: "/images/events/event-gunjo-kiko.jpg",
  omeFireworks: "/images/events/event-ome-fireworks.jpg",
  akirunoSummer: "/images/events/event-akiruno-summer.jpg",
  fussaTanabata: "/images/events/event-fussa-tanabata.jpg",
  hinodeShishimai: "/images/events/event-hinode-shishimai.svg",
  okutamaFireworks: "/images/events/event-okutama-fireworks.svg",
  ekinishi: "/images/events/event-ekinishi.svg",
  hossawaMatsuri: "/images/events/event-hossawa-matsuri.svg",
  yoruichi: "/images/events/event-yoruichi.svg",

  // Placeholder theme illustrations for the 35 new (non-August) events —
  // one monoline sketch reused per theme, swap for real photos later.
  themeMatsuri: "/images/events/event-theme-matsuri.svg",
  themeNatureSeasonal: "/images/events/event-theme-nature-seasonal.svg",
  themeFireRitual: "/images/events/event-theme-fire-ritual.svg",
  themeMarathon: "/images/events/event-theme-marathon.svg",
  themeMarket: "/images/events/event-theme-market.svg",
  themeArts: "/images/events/event-theme-arts.svg",
  themeFireworks: "/images/events/event-theme-fireworks.svg",
},

  // ============================================================
  // OTHER SECTIONS
  // ============================================================

  // Stand-in: free Unsplash photo (green countryside near Usuki, Japan),
  // not a Nishi Tama photo specifically. Swap for a real photo when available.
  manners: "https://images.unsplash.com/photo-1698877716509-408261f38661?auto=format&fit=crop&w=1600&q=80",

  plan: "/images/plan-trip.jpg",

  guide: "/images/nishitama-overview.jpg",

} as const;

export type Images = typeof images;