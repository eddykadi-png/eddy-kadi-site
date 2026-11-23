/* =====================================================================
   EDDY KADI — SITE CONTENT  /  CONTENU DU SITE
   ---------------------------------------------------------------------
   This is the ONLY file you need to edit to add photos, species,
   mammals and stories. Every text field has an English (en) and a
   French (fr) version.

   C'est le SEUL fichier à modifier pour ajouter photos, espèces,
   mammifères et récits. Chaque texte existe en anglais (en) et en
   français (fr).

   Filled-in examples of every kind of entry are in content.sample.js
   (not loaded by the site). See README.md for step-by-step help.
   ===================================================================== */

window.SITE = {
  name: "Eddy Kadi",
  // Contact shown on the About page. Leave "" to hide.
  email: "your-email@example.com",
  instagram: "",            // e.g. "https://instagram.com/yourname"
  ebird: "",                // e.g. "https://ebird.org/profile/XXXX"
  // Photos newer than this many days get a "NEW" marker automatically.
  newWithinDays: 90,
  // Big image at the top of the home page. Leave "" so it always shows the newest photo,
  // the same bird named under "Latest addition". Put a photo id here only to pin one photo.
  heroPhoto: "",
  // Which part of the home-page photo to keep in view when it is cropped: "left/right% top/bottom%".
  // A photo can override this with its own  focus: "35% 50%"  (see the PHOTOS entries below).
  // "50% 50%" is the centre; "65% 40%" keeps a bird that sits right of centre.
  heroFocus: "50% 50%",
  // Photo on the home-page "Checklist" card: a close-up where the eye is clearly visible.
  // Shown on the home-page "Checklist" card and at the top of the checklist page.
  // A photo id from PHOTOS, or a file path; leave "" to pick a recent photo automatically.
  checklistPhoto: "yellow-billed-hornbill-03",   // Southern Yellow-billed Hornbill close-up, Etosha
  checklistFocus: "50% 45%",
  checklistZoom: 1,     // 1 = whole photo; higher zooms in towards the focus point
  // Shows a thin bar saying the content is sample data.
  showSampleNotice: false,
  copyrightYear: 2026,
  // Date of your latest eBird import; shown as "Last updated" if it is the newest date.
  listUpdated: "2026-11-19",
  // Change this (e.g. "2", "3"...) whenever you replace a photo file but keep its name,
  // so visitors' browsers load the new version instead of an old saved copy.
  photoVersion: "1"
};

/* ---------------------------------------------------------------------
   BIRD FAMILIES — in taxonomic order (eBird/Clements). The checklist
   follows this order. "hue" (0–360) tints the placeholder for the family.
   FAMILLES D'OISEAUX — dans l'ordre taxonomique.
   --------------------------------------------------------------------- */
window.FAMILIES = [
  { id: "phasianidae", sci: "Phasianidae", en: "Pheasants, francolins and allies", fr: "Faisans, francolins et alliés", hue: 25 },
  { id: "pteroclidae", sci: "Pteroclidae", en: "Sandgrouse",  fr: "Gangas",           hue: 42 },
  { id: "otididae",    sci: "Otididae",    en: "Bustards",    fr: "Outardes",         hue: 38 },
  { id: "burhinidae", sci: "Burhinidae", en: "Thick-knees", fr: "Œdicnèmes", hue: 40 },
  { id: "haematopodidae", sci: "Haematopodidae", en: "Oystercatchers", fr: "Huîtriers", hue: 10 },
  { id: "jacanidae",   sci: "Jacanidae",   en: "Jacanas",     fr: "Jacanas",          hue: 90 },
  { id: "scolopacidae", sci: "Scolopacidae", en: "Sandpipers and allies", fr: "Bécasseaux, chevaliers et alliés", hue: 30 },
  { id: "glareolidae", sci: "Glareolidae", en: "Coursers and pratincoles", fr: "Courvites et glaréoles", hue: 28 },
  { id: "laridae", sci: "Laridae", en: "Gulls, terns and skimmers", fr: "Mouettes, sternes et becs-en-ciseaux", hue: 205 },
  { id: "ciconiidae",  sci: "Ciconiidae",  en: "Storks",      fr: "Cigognes",         hue: 0 },
  { id: "anhingidae", sci: "Anhingidae", en: "Anhingas and darters", fr: "Anhingas", hue: 25 },
  { id: "phalacrocoracidae", sci: "Phalacrocoracidae", en: "Cormorants and shags", fr: "Cormorans", hue: 215 },
  { id: "ardeidae",    sci: "Ardeidae",    en: "Herons",      fr: "Hérons",           hue: 200 },
  { id: "pelecanidae", sci: "Pelecanidae", en: "Pelicans", fr: "Pélicans", hue: 195 },
  { id: "sagittariidae", sci: "Sagittariidae", en: "Secretarybird", fr: "Messager sagittaire", hue: 35 },
  { id: "accipitridae", sci: "Accipitridae", en: "Eagles, hawks and kites", fr: "Aigles, buses et milans", hue: 20 },
  { id: "strigidae", sci: "Strigidae", en: "Owls", fr: "Chouettes et hiboux", hue: 30 },
  { id: "bucerotidae", sci: "Bucerotidae", en: "Hornbills",   fr: "Calaos",           hue: 15 },
  { id: "meropidae",   sci: "Meropidae",   en: "Bee-eaters",  fr: "Guêpiers",         hue: 120 },
  { id: "coraciidae", sci: "Coraciidae", en: "Rollers", fr: "Rolliers", hue: 270 },
  { id: "alcedinidae", sci: "Alcedinidae", en: "Kingfishers", fr: "Martins-pêcheurs", hue: 175 },
  { id: "picidae",     sci: "Picidae",     en: "Woodpeckers", fr: "Pics",             hue: 55 },
  { id: "leiothrichidae", sci: "Leiothrichidae", en: "Laughingthrushes and babblers", fr: "Garrulaxes et cratéropes", hue: 40 },
  { id: "buphagidae",  sci: "Buphagidae",  en: "Oxpeckers",   fr: "Piqueboeufs",      hue: 45 },
  { id: "ploceidae",   sci: "Ploceidae",   en: "Weavers and allies", fr: "Tisserins et alliés", hue: 48 }
];

/* ---------------------------------------------------------------------
   BIRD CHECKLIST — one line per species you have SEEN.
   Imported from eBird (MyEBirdData.csv, 2 Nov 2026).
   "first" / "where" / "gps" are your earliest eBird record of the species,
   and "checklist" is that eBird checklist's ID (S…), linked on the site.
   A species becomes "photographed" automatically when a photo in
   PHOTOS below points to it.
   LISTE D'ESPÈCES — importée d'eBird. Une ligne par espèce observée.
   --------------------------------------------------------------------- */
window.BIRDS = [
  { id: "crested-francolin", family: "phasianidae", en: "Crested Francolin", fr: "Francolin huppé", sci: "Ortygornis sephaena",
    first: "2026-09-29", where: "Chobe NP (Serondela), Botswana", gps: "-17.8669, 24.8608", checklist: "S408040011" },
  { id: "swainsons-spurfowl", family: "phasianidae", en: "Swainson's Spurfowl", fr: "Francolin de Swainson", sci: "Pternistis swainsonii",
    first: "2026-09-30", where: "Chobe NP (Serondela), Botswana", gps: "-17.8669, 24.8608", checklist: "S408033129" },
  { id: "namaqua-sandgrouse", family: "pteroclidae", en: "Namaqua Sandgrouse", fr: "Ganga namaqua", sci: "Pterocles namaqua",
    first: "2012-04-19", where: "C14, Solitaire to C26, Khomas, Namibia", gps: "-23.6676, 15.8636", checklist: "S406514812" },
  { id: "kori-bustard", family: "otididae", en: "Kori Bustard", fr: "Outarde kori", sci: "Ardeotis kori",
    first: "2012-04-17", where: "Kalahari Anib Lodge, Hardap, Namibia", gps: "-24.4303, 18.1005", checklist: "S402447854" },
  { id: "ruppells-bustard", family: "otididae", en: "Rüppell's Bustard", fr: "Outarde de Rüppell", sci: "Heterotetrax rueppelii",
    first: "2012-04-20", where: "Erongo, Namibia", gps: "-21.2923, 14.5705", checklist: "S406515323" },
  { id: "eurasian-whimbrel", family: "scolopacidae", en: "Eurasian Whimbrel", fr: "Courlis corlieu", sci: "Numenius phaeopus",
    first: "2025-12-03", where: "Diaz Point, Lüderitz, Namibia", gps: "-26.6354, 15.0889", checklist: "S407498176" },
  { id: "wood-sandpiper", family: "scolopacidae", en: "Wood Sandpiper", fr: "Chevalier sylvain", sci: "Tringa glareola",
    first: "2017-01-07", where: "Gammams Water Care Works, Windhoek, Namibia", gps: "-22.5347, 17.0298", checklist: "S406426028" },
  { id: "african-skimmer", family: "laridae", en: "African Skimmer", fr: "Bec-en-ciseaux d'Afrique", sci: "Rynchops flavirostris",
    first: "2026-09-29", where: "Chobe NP, Botswana", gps: "-17.8071, 25.1683", checklist: "S410934151" },
  { id: "double-banded-courser", family: "glareolidae", en: "Double-banded Courser", fr: "Courvite à double collier", sci: "Smutsornis africanus",
    first: "2012-04-21", where: "Brandberg White Lady Lodge, Erongo, Namibia", gps: "-21.0190, 14.6857", checklist: "S406513916" },
  { id: "yellow-billed-stork", family: "ciconiidae", en: "Yellow-billed Stork", fr: "Tantale ibis", sci: "Mycteria ibis",
    first: "2026-09-29", where: "Chobe NP (Serondela), Botswana", gps: "-17.8669, 24.8608", checklist: "S408893319" },
  { id: "african-openbill", family: "ciconiidae", en: "African Openbill", fr: "Bec-ouvert africain", sci: "Anastomus lamelligerus",
    first: "2024-03-06", where: "Bwabwata NP (Kwando Core Area), Namibia", gps: "-17.9317, 23.2769", checklist: "S403192810" },
  { id: "spotted-eagle-owl", family: "strigidae", en: "Spotted Eagle-Owl", fr: "Grand-duc africain", sci: "Bubo africanus",
    first: "2016-11-17", where: "Ohange Lodge, Namibia", checklist: "S411316683" },
  { id: "arrow-marked-babbler", family: "leiothrichidae", en: "Arrow-marked Babbler", fr: "Cratérope fléché", sci: "Turdoides jardineii",
    first: "2016-10-30", where: "Mahango Core Area (Bwabwata NP), Namibia", checklist: "S411528167" },
  { id: "monteiros-hornbill", family: "bucerotidae", en: "Monteiro's Hornbill", fr: "Calao de Monteiro", sci: "Tockus monteiri",
    first: "2023-08-08", where: "Mowani Mountain Camp, Kunene, Namibia", gps: "-20.5074, 14.4248", checklist: "S402445846" },
  { id: "gray-heron", family: "ardeidae", en: "Grey Heron", fr: "Héron cendré", sci: "Ardea cinerea",
    first: "2012-05-03", where: "Erindi Private Game Reserve, Namibia", gps: "-21.5455, 16.3884", checklist: "S407317862" },
  { id: "little-egret", family: "ardeidae", en: "Little Egret", fr: "Aigrette garzette", sci: "Egretta garzetta",
    first: "2026-09-29", where: "Chobe River (boat trip), Botswana", gps: "-17.8104, 25.1429", checklist: "S409535131" },
  { id: "great-white-pelican", family: "pelecanidae", en: "Great White Pelican", fr: "Pélican blanc", sci: "Pelecanus onocrotalus",
    first: "2012-04-20", where: "Walvis Bay Ramsar Site, Namibia", gps: "-22.9931, 14.4352", checklist: "S406624507" },
  { id: "secretarybird", family: "sagittariidae", en: "Secretarybird", fr: "Messager sagittaire", sci: "Sagittarius serpentarius",
    first: "2026-09-20", where: "Etosha NP (Sprokieswoud), Namibia", gps: "-19.0914, 15.6340", checklist: "S407586565" },
  { id: "martial-eagle", family: "accipitridae", en: "Martial Eagle", fr: "Aigle martial", sci: "Polemaetus bellicosus",
    first: "2012-04-19", where: "C14, Solitaire to C26, Khomas, Namibia", gps: "-23.6676, 15.8636", checklist: "S406617740" },
  { id: "verreauxs-eagle", family: "accipitridae", en: "Verreaux's Eagle", fr: "Aigle de Verreaux", sci: "Aquila verreauxii",
    first: "2012-04-21", where: "Rhino Ugab Camp, Erongo, Namibia", gps: "-20.9636, 14.1322", checklist: "S406511395" },
  { id: "african-fish-eagle", family: "accipitridae", en: "African Fish-Eagle", fr: "Pygargue vocifère", sci: "Haliaeetus vocifer",
    first: "2026-09-29", where: "Chobe River (boat trip), Botswana", gps: "-17.8104, 25.1429", checklist: "S409538238" },
  { id: "southern-yellow-billed-hornbill", family: "bucerotidae", en: "Southern Yellow-billed Hornbill", fr: "Calao leucomèle", sci: "Tockus leucomelas",
    first: "2019-06-19", where: "Chobe NP, Botswana", gps: "-18.4558, 24.3665", checklist: "S402444996" },
  { id: "purple-roller", family: "coraciidae", en: "Purple Roller", fr: "Rollier varié", sci: "Coracias naevius",
    first: "2026-09-20", where: "Etosha NP (Arendsnes), Namibia", gps: "-18.9775, 15.4095", checklist: "S407577323" },
  { id: "brown-hooded-kingfisher", family: "alcedinidae", en: "Brown-hooded Kingfisher", fr: "Martin-chasseur à tête brune", sci: "Halcyon albiventris",
    first: "2026-09-28", where: "Caprivi Mutoya Lodge, Zambezi, Namibia", gps: "-17.5566, 24.4740", checklist: "S409521745" },
  { id: "woodland-kingfisher", family: "alcedinidae", en: "Woodland Kingfisher", fr: "Martin-chasseur du Sénégal", sci: "Halcyon senegalensis",
    first: "2024-03-08", where: "Bwabwata NP (Kwando Core Area), Namibia", gps: "-17.9317, 23.2769", checklist: "S403188007" },
  { id: "water-thick-knee", family: "burhinidae", en: "Water Thick-knee", fr: "Œdicnème vermiculé", sci: "Burhinus vermiculatus",
    first: "2026-09-29", where: "Chobe River area, Botswana", gps: "-17.8336, 25.1767", checklist: "S409542513" },
  { id: "african-oystercatcher", family: "haematopodidae", en: "African Oystercatcher", fr: "Huîtrier de Moquin", sci: "Haematopus moquini",
    first: "2025-12-02", where: "Diaz Point, Lüderitz, Namibia", gps: "-26.6354, 15.0889", checklist: "S407565268" },
  { id: "african-jacana", family: "jacanidae", en: "African Jacana", fr: "Jacana à poitrine dorée", sci: "Actophilornis africanus",
    first: "2024-03-06", where: "Bwabwata NP (Kwando Core Area), Namibia", gps: "-17.9317, 23.2769", checklist: "S403307700" },
  { id: "marabou-stork", family: "ciconiidae", en: "Marabou Stork", fr: "Marabout d'Afrique", sci: "Leptoptilos crumenifer",
    first: "2012-05-03", where: "Erindi Private Game Reserve, Namibia", gps: "-21.5455, 16.3884", checklist: "S407309439" },
  { id: "african-darter", family: "anhingidae", en: "African Darter", fr: "Anhinga d'Afrique", sci: "Anhinga rufa",
    first: "2026-09-29", where: "Chobe River (boat trip), Botswana", gps: "-17.8104, 25.1429", checklist: "S409540360" },
  { id: "reed-cormorant", family: "phalacrocoracidae", en: "Reed Cormorant", fr: "Cormoran africain", sci: "Microcarbo africanus",
    first: "2026-09-28", where: "Caprivi Mutoya Lodge, Zambezi, Namibia", gps: "-17.5566, 24.4740", checklist: "S409528195" },
  { id: "cape-cormorant", family: "phalacrocoracidae", en: "Cape Cormorant", fr: "Cormoran du Cap", sci: "Phalacrocorax capensis",
    first: "2012-04-20", where: "Walvis Bay Lagoon, Namibia", gps: "-22.9903, 14.4716", checklist: "S406615983" },
  { id: "little-heron", family: "ardeidae", en: "Little Heron", fr: "Héron strié", sci: "Butorides atricapilla",
    first: "2024-03-06", where: "Bwabwata NP (Kwando Core Area), Namibia", gps: "-17.9317, 23.2769", checklist: "S403341679" },
  { id: "swallow-tailed-bee-eater", family: "meropidae", en: "Swallow-tailed Bee-eater", fr: "Guêpier à queue d'aronde", sci: "Merops hirundineus",
    first: "2025-09-16", where: "Schoenlein Street, Windhoek, Namibia", gps: "-22.5550, 17.0659", checklist: "S410930438" },
  { id: "white-fronted-bee-eater", family: "meropidae", en: "White-fronted Bee-eater", fr: "Guêpier à front blanc", sci: "Merops bullockoides",
    first: "2024-03-06", where: "Bwabwata NP (Kwando Core Area), Namibia", gps: "-17.9317, 23.2769", checklist: "S403320178" },
  { id: "southern-carmine-bee-eater", family: "meropidae", en: "Southern Carmine Bee-eater", fr: "Guêpier carmin", sci: "Merops nubicoides",
    first: "2026-09-26", where: "Kazile Island Lodge, Zambezi, Namibia", gps: "-17.9030, 23.3177", checklist: "S407591112" },
  { id: "pied-kingfisher", family: "alcedinidae", en: "Pied Kingfisher", fr: "Martin-pêcheur pie", sci: "Ceryle rudis",
    first: "2024-03-06", where: "Bwabwata NP (Kwando Core Area), Namibia", gps: "-17.9317, 23.2769", checklist: "S403158145" },
  { id: "golden-tailed-woodpecker", family: "picidae", en: "Golden-tailed Woodpecker", fr: "Pic à queue dorée", sci: "Campethera abingoni",
    first: "2026-07-04", where: "Kalahari Anib Lodge, Hardap, Namibia", gps: "-24.4303, 18.1005", checklist: "S406395881" },
  { id: "yellow-billed-oxpecker", family: "buphagidae", en: "Yellow-billed Oxpecker", fr: "Piqueboeuf à bec jaune", sci: "Buphagus africanus",
    first: "2019-07-30", where: "Kunene, Namibia", gps: "-19.1705, 13.9901", checklist: "S402709233" },
  { id: "sociable-weaver", family: "ploceidae", en: "Sociable Weaver", fr: "Républicain social", sci: "Philetairus socius",
    first: "2012-04-17", where: "Kalahari Anib Lodge, Hardap, Namibia", gps: "-24.4303, 18.1005", checklist: "S410226360" }
];

/* ---------------------------------------------------------------------
   BIRD PHOTOS — the site sorts them by date, newest first.
   1. Put the image in  photos/birds/  (long edge ~2000 px, JPG).
   2. Add an entry here, for example:

   { id: "kori-bustard-01", species: "kori-bustard",
     src: "photos/birds/kori-bustard-01.jpg", orient: "landscape",
     date: "2026-07-14", place: "Etosha NP, Namibia", gps: "-19.086, 14.486",
     caption: { en: "English caption.", fr: "Légende en français." } },

   - species:  an id from BIRDS
   - orient:   "landscape" or "portrait" (sets the frame shape)
   - gps:      optional "lat, long"
   PHOTOS D'OISEAUX — mettez l'image dans photos/birds/ puis ajoutez
   une entrée ici (voir l'exemple ci-dessus).
   --------------------------------------------------------------------- */
window.PHOTOS = [
  { id: "yellow-bh-01", species: "southern-yellow-billed-hornbill", src: "photos/birds/yellow-billed-hornbill-01.jpg", orient: "landscape", focus: "60% 45%", date: "2019-06-19", place: "Chobe NP, Botswana", gps: "-18.4558, 24.3665",
    caption: { en: "Searching the ground for ants and termites for its evening meal.",
               fr: "À la recherche de fourmis et de termites au sol pour son repas du soir." } },
  { id: "yellow-billed-oxpecker-01", species: "yellow-billed-oxpecker", src: "photos/birds/yellow-billed-oxpecker-01.jpg", orient: "landscape", focus: "15% 50%", date: "2019-07-30", place: "Kunene, Namibia", gps: "-19.1705, 13.9901",
    caption: { en: "Three oxpeckers riding on the back of a cow in a Himba village.",
               fr: "Trois piqueboeufs perchés sur le dos d'une vache dans un village himba." } },
  { id: "african-openbill-01", species: "african-openbill", src: "photos/birds/african-openbill-01.jpg", orient: "landscape", date: "2024-03-06", place: "Bwabwata NP (Kwando Core Area), Namibia", gps: "-17.9317, 23.2769",
    caption: { en: "Standing among bare twigs on the riverbank.",
               fr: "Debout parmi des branches nues sur la berge." } },
  { id: "pied-kingfisher-01", species: "pied-kingfisher", src: "photos/birds/pied-kingfisher-01.jpg", orient: "landscape", focus: "55% 50%", date: "2024-03-06", place: "Bwabwata NP (Kwando Core Area), Namibia", gps: "-17.9317, 23.2769",
    caption: { en: "Two Pied Kingfishers on a bare branch against a clear blue sky.",
               fr: "Deux martins-pêcheurs pies sur une branche nue, sur fond de ciel bleu." } },
  // This file is 990 px wide, smaller than the others: fine in the gallery, a little soft if used as the home-page photo.
  { id: "african-jacana-01", species: "african-jacana", src: "photos/birds/african-jacana-01.jpg", orient: "landscape", date: "2024-03-06", place: "Bwabwata NP (Kwando Core Area), Namibia", gps: "-17.9317, 23.2769",
    caption: { en: "Walking across water-lily pads, picking food from the surface.",
               fr: "Marche sur les feuilles de nénuphar en picorant à la surface." } },
  { id: "little-heron-01", species: "little-heron", src: "photos/birds/little-heron-01.jpg", orient: "landscape", date: "2024-03-06", place: "Bwabwata NP (Kwando Core Area), Namibia", gps: "-17.9317, 23.2769",
    caption: { en: "Hunting from a fallen branch among the reeds.",
               fr: "À l'affût sur une branche tombée, au milieu des roseaux." } },
  { id: "white-fronted-bee-eater-01", species: "white-fronted-bee-eater", src: "photos/birds/white-fronted-bee-eater-01.jpg", orient: "landscape", date: "2024-03-06", place: "Bwabwata NP (Kwando Core Area), Namibia", gps: "-17.9317, 23.2769",
    caption: { en: "Perched in front of a sandy riverbank.",
               fr: "Perché devant une berge sablonneuse." } },
  { id: "golden-tailed-woodpecker-01", species: "golden-tailed-woodpecker", src: "photos/birds/golden-tailed-woodpecker-01.jpg", orient: "landscape", focus: "70% 50%", date: "2026-07-04", place: "Kalahari Anib Lodge, Hardap, Namibia", gps: "-24.4303, 18.1005",
    caption: { en: "Clinging upside down beneath a branch, probing the bark.",
               fr: "Agrippé sous une branche, la tête en bas, fouillant l'écorce." } },
  { id: "wood-sandpiper-01", species: "wood-sandpiper", src: "photos/birds/wood-sandpiper-01.jpg", orient: "landscape", date: "2017-01-07", place: "Gammams Water Care Works, Windhoek, Namibia", gps: "-22.5347, 17.0298",
    caption: { en: "Wading through shallow water.",
               fr: "En train de marcher dans l'eau peu profonde." } },
  { id: "namaqua-sandgrouse-01", species: "namaqua-sandgrouse", src: "photos/birds/namaqua-sandgrouse-01.jpg", orient: "landscape", date: "2012-04-19", place: "C14, Solitaire to C26, Khomas, Namibia", gps: "-23.6676, 15.8636",
    caption: { en: "A male on stony ground in the early-morning light.",
               fr: "Un mâle sur un sol caillouteux, dans la lumière du petit matin." } },
  { id: "namaqua-sandgrouse-02", species: "namaqua-sandgrouse", src: "photos/birds/namaqua-sandgrouse-02.jpg", orient: "landscape", date: "2012-04-19", place: "C14, Solitaire to C26, Khomas, Namibia", gps: "-23.6676, 15.8636",
    caption: { en: "A female, her barred plumage matching the ground.",
               fr: "Une femelle, son plumage barré se confondant avec le sol." } },
  { id: "kori-bustard-01", species: "kori-bustard", src: "photos/birds/kori-bustard-01.jpg", orient: "landscape", date: "2012-04-17", place: "Kalahari Anib Lodge, Hardap, Namibia", gps: "-24.4303, 18.1005",
    caption: { en: "Striding through short grass.",
               fr: "Marchant à grands pas dans l'herbe rase." } },
  { id: "ruppells-bustard-01", species: "ruppells-bustard", src: "photos/birds/ruppells-bustard-01.jpg", orient: "landscape", date: "2012-04-20", place: "Erongo, Namibia", gps: "-21.2923, 14.5705",
    caption: { en: "Walking across stony ground in the late-afternoon light.",
               fr: "Marchant sur un sol caillouteux, dans la lumière de fin d'après-midi." } },
  { id: "ruppells-bustard-02", species: "ruppells-bustard", src: "photos/birds/ruppells-bustard-02.jpg", orient: "landscape", date: "2012-04-20", place: "Erongo, Namibia", gps: "-21.2923, 14.5705",
    caption: { en: "Looking back over its shoulder among low shrubs.",
               fr: "Regardant par-dessus son épaule, parmi des arbustes bas." } },
  { id: "double-banded-courser-01", species: "double-banded-courser", src: "photos/birds/double-banded-courser-01.jpg", orient: "landscape", date: "2012-04-21", place: "Brandberg White Lady Lodge, Erongo, Namibia", gps: "-21.0190, 14.6857",
    caption: { en: "Standing upright on red gravel, showing its two dark neck bands.",
               fr: "Bien droit sur le gravier rouge, montrant ses deux colliers sombres." } },
  { id: "cape-cormorant-01", species: "cape-cormorant", src: "photos/birds/cape-cormorant-01.jpg", orient: "portrait", date: "2012-04-20", place: "Walvis Bay Lagoon, Namibia", gps: "-22.9903, 14.4716",
    caption: { en: "Standing on a boat, with waterfront buildings behind.",
               fr: "Debout sur un bateau, devant les bâtiments du front de mer." } },
  { id: "cape-cormorant-02", species: "cape-cormorant", src: "photos/birds/cape-cormorant-02.jpg", orient: "portrait", date: "2012-04-20", place: "Walvis Bay Lagoon, Namibia", gps: "-22.9903, 14.4716",
    caption: { en: "Close-up showing the blue eye and orange throat patch.",
               fr: "Gros plan sur l'œil bleu et la tache orange de la gorge." } },
  { id: "great-white-pelican-01", species: "great-white-pelican", src: "photos/birds/great-white-pelican-01.jpg", orient: "landscape", date: "2012-04-20", place: "Walvis Bay Ramsar Site, Namibia", gps: "-22.9931, 14.4352",
    caption: { en: "In flight, low over the water.",
               fr: "En vol, au ras de l'eau." } },
  { id: "great-white-pelican-02", species: "great-white-pelican", src: "photos/birds/great-white-pelican-02.jpg", orient: "landscape", date: "2012-04-20", place: "Walvis Bay Ramsar Site, Namibia", gps: "-22.9931, 14.4352",
    caption: { en: "Four pelicans swimming together.",
               fr: "Quatre pélicans nageant ensemble." } },
  { id: "martial-eagle-01", species: "martial-eagle", src: "photos/birds/martial-eagle-01.jpg", orient: "landscape", date: "2012-04-19", place: "C14, Solitaire to C26, Khomas, Namibia", gps: "-23.6676, 15.8636",
    caption: { en: "Perched on a fence post beside the road.",
               fr: "Perché sur un piquet de clôture au bord de la route." } },
  { id: "verreauxs-eagle-01", species: "verreauxs-eagle", src: "photos/birds/verreauxs-eagle-01.jpg", orient: "landscape", date: "2012-04-21", place: "Rhino Ugab Camp, Erongo, Namibia", gps: "-20.9636, 14.1322",
    caption: { en: "Standing on red rock beneath a bare branch.",
               fr: "Debout sur la roche rouge, sous une branche nue." } },
  { id: "verreauxs-eagle-02", species: "verreauxs-eagle", src: "photos/birds/verreauxs-eagle-02.jpg", orient: "landscape", date: "2012-04-21", place: "Rhino Ugab Camp, Erongo, Namibia", gps: "-20.9636, 14.1322",
    caption: { en: "Launching from the rock face, wings raised.",
               fr: "S'élançant de la paroi rocheuse, les ailes levées." } },
  { id: "marabou-stork-01", species: "marabou-stork", src: "photos/birds/marabou-stork-01.jpg", orient: "landscape", date: "2012-05-03", place: "Erindi Private Game Reserve, Namibia", gps: "-21.5455, 16.3884",
    caption: { en: "Standing on red earth in front of dry grass.",
               fr: "Debout sur la terre rouge, devant les herbes sèches." } },
  { id: "marabou-stork-02", species: "marabou-stork", src: "photos/birds/marabou-stork-02.jpg", orient: "landscape", date: "2012-05-03", place: "Erindi Private Game Reserve, Namibia", gps: "-21.5455, 16.3884",
    caption: { en: "Soaring against a clear blue sky.",
               fr: "En vol plané dans un ciel bleu limpide." } },
  { id: "marabou-stork-03", species: "marabou-stork", src: "photos/birds/marabou-stork-03.jpg", orient: "landscape", date: "2024-11-15", place: "Etosha NP (Gemsbokvlakte waterhole), Namibia",
    caption: { en: "Stretching its wings by the waterhole, throat pouch hanging.",
               fr: "Déployant ses ailes près du point d'eau, la poche gulaire pendante." } },
  { id: "gray-heron-01", species: "gray-heron", src: "photos/birds/gray-heron-01.jpg", orient: "landscape", date: "2012-05-03", place: "Erindi Private Game Reserve, Namibia", gps: "-21.5455, 16.3884",
    caption: { en: "Holding its catch in its bill on dry ground.",
               fr: "Sa prise dans le bec, sur un sol sec." } },
  { id: "gray-heron-02", species: "gray-heron", src: "photos/birds/gray-heron-02.jpg", orient: "landscape", date: "2012-05-03", place: "Erindi Private Game Reserve, Namibia", gps: "-21.5455, 16.3884",
    caption: { en: "Wading at the water's edge, reflected in the still water.",
               fr: "Marchant au bord de l'eau, son reflet sur l'eau calme." } },
  { id: "eurasian-whimbrel-01", species: "eurasian-whimbrel", src: "photos/birds/eurasian-whimbrel-01.jpg", orient: "landscape", date: "2025-12-03", place: "Diaz Point, Lüderitz, Namibia", gps: "-26.6354, 15.0889",
    caption: { en: "Standing on the rocks at the water's edge.",
               fr: "Debout sur les rochers au bord de l'eau." } },
  { id: "eurasian-whimbrel-02", species: "eurasian-whimbrel", src: "photos/birds/eurasian-whimbrel-02.jpg", orient: "landscape", date: "2025-12-03", place: "Diaz Point, Lüderitz, Namibia", gps: "-26.6354, 15.0889",
    caption: { en: "In flight over the sea.",
               fr: "En vol au-dessus de la mer." } },
  { id: "eurasian-whimbrel-03", species: "eurasian-whimbrel", src: "photos/birds/eurasian-whimbrel-03.jpg", orient: "landscape", date: "2025-12-03", place: "Diaz Point, Lüderitz, Namibia", gps: "-26.6354, 15.0889",
    caption: { en: "Walking through low succulent plants.",
               fr: "Marchant parmi des plantes succulentes basses." } },
  { id: "african-oystercatcher-01", species: "african-oystercatcher", src: "photos/birds/african-oystercatcher-01.jpg", orient: "landscape", date: "2025-12-02", place: "Diaz Point, Lüderitz, Namibia", gps: "-26.6354, 15.0889",
    caption: { en: "Standing on kelp at the water's edge.",
               fr: "Debout sur le varech au bord de l'eau." } },
  { id: "african-oystercatcher-02", species: "african-oystercatcher", src: "photos/birds/african-oystercatcher-02.jpg", orient: "landscape", date: "2025-12-02", place: "Diaz Point, Lüderitz, Namibia", gps: "-26.6354, 15.0889",
    caption: { en: "A pair mating on a rock above the sea.",
               fr: "Un couple en accouplement sur un rocher au-dessus de la mer." } },
  { id: "african-oystercatcher-03", species: "african-oystercatcher", src: "photos/birds/african-oystercatcher-03.jpg", orient: "landscape", date: "2025-12-02", place: "Diaz Point, Lüderitz, Namibia", gps: "-26.6354, 15.0889",
    caption: { en: "On a rock, with sunlit kelp behind.",
               fr: "Sur un rocher, devant le varech éclairé par le soleil." } },
  { id: "secretarybird-01", species: "secretarybird", src: "photos/birds/secretarybird-01.jpg", orient: "landscape", date: "2026-09-20", place: "Etosha NP (Sprokieswoud), Namibia", gps: "-19.0914, 15.6340",
    caption: { en: "Striding through dry grass.",
               fr: "Marchant à grands pas dans l'herbe sèche." } },
  { id: "secretarybird-02", species: "secretarybird", src: "photos/birds/secretarybird-02.jpg", orient: "landscape", date: "2026-09-20", place: "Etosha NP (Sprokieswoud), Namibia", gps: "-19.0914, 15.6340",
    caption: { en: "Mid-stride, showing its long legs and crest feathers.",
               fr: "En pleine marche, montrant ses longues pattes et les plumes de sa huppe." } },
  { id: "purple-roller-01", species: "purple-roller", src: "photos/birds/purple-roller-01.jpg", orient: "landscape", date: "2026-09-20", place: "Etosha NP (Arendsnes), Namibia", gps: "-18.9775, 15.4095",
    caption: { en: "Perched on a bare branch against a pale sky.",
               fr: "Perché sur une branche nue, sur fond de ciel clair." } },
  { id: "southern-carmine-bee-eater-01", species: "southern-carmine-bee-eater", src: "photos/birds/southern-carmine-bee-eater-01.jpg", orient: "landscape", focus: "22% 50%", date: "2026-09-26", place: "Kazile Island Lodge, Zambezi, Namibia", gps: "-17.9030, 23.3177",
    caption: { en: "Two birds at the nesting burrows in a sandy bank.",
               fr: "Deux oiseaux devant les terriers de nidification d'une berge sablonneuse." } },
  { id: "yellow-billed-hornbill-02", species: "southern-yellow-billed-hornbill", src: "photos/birds/yellow-billed-hornbill-02.jpg", orient: "landscape", date: "2026-07-15", place: "Etosha NP, Namibia",
    caption: { en: "Searching the dry ground for insects such as grasshoppers.",
               fr: "Cherchant des insectes au sol, comme des sauterelles." } },
  { id: "yellow-billed-hornbill-03", species: "southern-yellow-billed-hornbill", src: "photos/birds/yellow-billed-hornbill-03.jpg", orient: "landscape", focus: "50% 45%", date: "2026-09-21", place: "Etosha NP, Namibia",
    caption: { en: "Close-up against a clear blue sky: the yellow eye and the big curved bill.",
               fr: "En gros plan sur un ciel bleu : l'œil jaune et le grand bec courbé." } },
  { id: "crested-francolin-01", species: "crested-francolin", src: "photos/birds/crested-francolin-01.jpg", orient: "landscape", date: "2026-09-29", place: "Chobe NP (Serondela), Botswana", gps: "-17.8669, 24.8608",
    caption: { en: "Walking across bare ground, tail cocked.",
               fr: "Marchant sur le sol nu, la queue relevée." } },
  { id: "crested-francolin-02", species: "crested-francolin", src: "photos/birds/crested-francolin-02.jpg", orient: "landscape", date: "2026-09-29", place: "Chobe NP (Serondela), Botswana", gps: "-17.8669, 24.8608",
    caption: { en: "Facing the camera, showing its spotted breast.",
               fr: "Face à l'objectif, montrant sa poitrine tachetée." } },
  { id: "crested-francolin-03", species: "crested-francolin", src: "photos/birds/crested-francolin-03.jpg", orient: "landscape", date: "2026-09-29", place: "Chobe NP (Serondela), Botswana", gps: "-17.8669, 24.8608",
    caption: { en: "Two birds foraging on the ground.",
               fr: "Deux oiseaux cherchant leur nourriture au sol." } },
  { id: "swainsons-spurfowl-01", species: "swainsons-spurfowl", src: "photos/birds/swainsons-spurfowl-01.jpg", orient: "landscape", date: "2026-09-30", place: "Chobe NP (Serondela), Botswana", gps: "-17.8669, 24.8608",
    caption: { en: "Standing on sand in soft golden light.",
               fr: "Debout sur le sable, dans une douce lumière dorée." } },
  { id: "swainsons-spurfowl-02", species: "swainsons-spurfowl", src: "photos/birds/swainsons-spurfowl-02.jpg", orient: "landscape", date: "2026-09-30", place: "Chobe NP (Serondela), Botswana", gps: "-17.8669, 24.8608",
    caption: { en: "Looking back over its shoulder, showing its red face.",
               fr: "Regardant par-dessus son épaule, montrant sa face rouge." } },
  { id: "yellow-billed-stork-01", species: "yellow-billed-stork", src: "photos/birds/yellow-billed-stork-01.jpg", orient: "landscape", date: "2026-09-29", place: "Chobe NP (Serondela), Botswana", gps: "-17.8669, 24.8608",
    caption: { en: "Walking through green grass, the pink tinge showing on its wings.",
               fr: "Marchant dans l'herbe verte, les reflets roses visibles sur ses ailes." } },
  { id: "yellow-billed-stork-02", species: "yellow-billed-stork", src: "photos/birds/yellow-billed-stork-02.jpg", orient: "landscape", date: "2026-09-29", place: "Chobe NP (Serondela), Botswana", gps: "-17.8669, 24.8608",
    caption: { en: "Close-up of the red face and long yellow bill.",
               fr: "Gros plan sur la face rouge et le long bec jaune." } },
  { id: "yellow-billed-stork-03", species: "yellow-billed-stork", src: "photos/birds/yellow-billed-stork-03.jpg", orient: "landscape", date: "2026-09-29", place: "Chobe NP (Serondela), Botswana", gps: "-17.8669, 24.8608",
    caption: { en: "Mid-stride on the grass.",
               fr: "En pleine marche dans l'herbe." } },
  { id: "brown-hooded-kingfisher-01", species: "brown-hooded-kingfisher", src: "photos/birds/brown-hooded-kingfisher-01.jpg", orient: "landscape", date: "2026-09-28", place: "Caprivi Mutoya Lodge, Zambezi, Namibia", gps: "-17.5566, 24.4740",
    caption: { en: "Perched on a thick branch, showing its red bill and turquoise wing.",
               fr: "Perché sur une grosse branche, montrant son bec rouge et son aile turquoise." } },
  { id: "reed-cormorant-01", species: "reed-cormorant", src: "photos/birds/reed-cormorant-01.jpg", orient: "landscape", date: "2026-09-28", place: "Caprivi Mutoya Lodge, Zambezi, Namibia", gps: "-17.5566, 24.4740",
    caption: { en: "Perched on a bare twig among green leaves.",
               fr: "Perché sur une brindille nue, parmi les feuilles vertes." } },
  { id: "african-darter-01", species: "african-darter", src: "photos/birds/african-darter-01.jpg", orient: "landscape", date: "2026-09-29", place: "Chobe River (boat trip), Botswana", gps: "-17.8104, 25.1429",
    caption: { en: "Perched on a dead branch on the riverbank.",
               fr: "Perché sur une branche morte, sur la berge." } },
  { id: "african-fish-eagle-01", species: "african-fish-eagle", src: "photos/birds/african-fish-eagle-01.jpg", orient: "landscape", date: "2026-09-29", place: "Chobe River (boat trip), Botswana", gps: "-17.8104, 25.1429",
    caption: { en: "In flight over the river, wings raised.",
               fr: "En vol au-dessus de la rivière, les ailes levées." } },
  { id: "little-egret-01", species: "little-egret", src: "photos/birds/little-egret-01.jpg", orient: "landscape", date: "2026-09-29", place: "Chobe River (boat trip), Botswana", gps: "-17.8104, 25.1429",
    caption: { en: "Hunting in the shallows among the grass.",
               fr: "En chasse dans l'eau peu profonde, parmi les herbes." } },
  { id: "water-thick-knee-01", species: "water-thick-knee", src: "photos/birds/water-thick-knee-01.jpg", orient: "landscape", date: "2026-09-29", place: "Chobe River area, Botswana", gps: "-17.8336, 25.1767",
    caption: { en: "Standing in short green grass.",
               fr: "Debout dans l'herbe rase et verte." } },
  { id: "sociable-weaver-01", species: "sociable-weaver", src: "photos/birds/sociable-weaver-01.jpg", orient: "landscape", date: "2012-04-17", place: "Kalahari Anib Lodge, Hardap, Namibia", gps: "-24.4303, 18.1005",
    caption: { en: "Perched on a dry branch.",
               fr: "Perché sur une branche sèche." } },
  { id: "african-darter-02", species: "african-darter", src: "photos/birds/african-darter-02.jpg", orient: "landscape", date: "2026-09-29", place: "Chobe NP, Botswana",
    caption: { en: "Drying its wings, spread wide on the grass.",
               fr: "En train de sécher ses ailes, grandes ouvertes sur l'herbe." } },
  { id: "reed-cormorant-02", species: "reed-cormorant", src: "photos/birds/reed-cormorant-02.jpg", orient: "landscape", date: "2026-09-29", place: "Chobe NP, Botswana",
    caption: { en: "Red eye and half-open wings, walking through the grass.",
               fr: "L'œil rouge et les ailes entrouvertes, marchant dans l'herbe." } },
  { id: "swallow-tailed-bee-eater-01", species: "swallow-tailed-bee-eater", src: "photos/birds/swallow-tailed-bee-eater-01.jpg", orient: "landscape", date: "2025-09-16", place: "Schoenlein Street, Windhoek, Namibia", gps: "-22.5550, 17.0659",
    caption: { en: "Clinging to a sandy bank, its forked blue tail hanging below.",
               fr: "Accroché à une berge sableuse, sa queue bleue fourchue pendant dessous." } },
  { id: "african-skimmer-01", species: "african-skimmer", src: "photos/birds/african-skimmer-01.jpg", orient: "landscape", date: "2026-09-29", place: "Chobe NP, Botswana", gps: "-17.8071, 25.1683",
    caption: { en: "Resting on a sandbank, showing its long red-and-yellow bill.",
               fr: "Au repos sur un banc de sable, montrant son long bec rouge et jaune." } },
  { id: "spotted-eagle-owl-01", species: "spotted-eagle-owl", src: "photos/birds/spotted-eagle-owl-01.jpg", orient: "landscape", date: "2016-11-17", place: "Ohange Lodge, Namibia",
    caption: { en: "Perched on a thick branch, staring down with bright yellow eyes.",
               fr: "Perché sur une grosse branche, le regard fixe de ses yeux jaune vif." } },
  { id: "arrow-marked-babbler-01", species: "arrow-marked-babbler", src: "photos/birds/arrow-marked-babbler-01.jpg", orient: "landscape", date: "2016-10-30", place: "Mahango Core Area (Bwabwata NP), Namibia",
    caption: { en: "On the ground among grass and dry leaves, its orange eye bright.",
               fr: "Au sol parmi l'herbe et les feuilles sèches, l'œil orange bien visible." } },
  { id: "woodland-kingfisher-01", species: "woodland-kingfisher", src: "photos/birds/woodland-kingfisher-01.jpg", orient: "landscape", date: "2024-03-08", place: "Bwabwata NP (Kwando Core Area), Namibia", gps: "-17.9317, 23.2769",
    caption: { en: "Perched on a fallen log.",
               fr: "Perché sur un tronc tombé." } }
];

/* ---------------------------------------------------------------------
   MAMMALS — put images in photos/mammals/ and add entries like:

   { id: "oryx-01", en: "Gemsbok", fr: "Oryx gazelle", sci: "Oryx gazella",
     src: "photos/mammals/gemsbok-01.jpg", orient: "landscape",
     date: "2026-07-14", place: "Etosha NP, Namibia",
     caption: { en: "English caption.", fr: "Légende en français." } },

   MAMMIFÈRES — images dans photos/mammals/
   --------------------------------------------------------------------- */
window.MAMMALS = [
  // Aardvark series: taken 6 Jul 2019 around 06:06 (camera time). Add the place in "place" (and "gps" if you have it).
  { id: "aardvark-01", en: "Aardvark", fr: "Oryctérope du Cap", sci: "Orycteropus afer",
    src: "photos/mammals/aardvark-01.jpg", orient: "landscape", date: "2019-07-06", place: "Okapuka Dam, Namibia",
    caption: { en: "Walking along the edge of a waterhole in the early-morning light.",
               fr: "Le long d'un point d'eau, dans la lumière du petit matin." } },
  { id: "aardvark-02", en: "Aardvark", fr: "Oryctérope du Cap", sci: "Orycteropus afer",
    src: "photos/mammals/aardvark-02.jpg", orient: "landscape", date: "2019-07-06", place: "Okapuka Dam, Namibia",
    caption: { en: "Facing the camera, tongue out, on the muddy shore.",
               fr: "Face à l'objectif, langue sortie, sur la rive boueuse." } },
  { id: "aardvark-03", en: "Aardvark", fr: "Oryctérope du Cap", sci: "Orycteropus afer",
    src: "photos/mammals/aardvark-03.jpg", orient: "landscape", date: "2019-07-06", place: "Okapuka Dam, Namibia",
    caption: { en: "Leaving the water's edge.",
               fr: "En quittant le bord de l'eau." } },
  // Eastern Lowland (Grauer's) Gorilla series: Kahuzi-Biega National Park, 10 Feb 2022.
  { id: "eastern-lowland-gorilla-01", en: "Eastern Lowland Gorilla", fr: "Gorille des plaines de l'Est", sci: "Gorilla beringei graueri",
    src: "photos/mammals/eastern-lowland-gorilla-01.jpg", orient: "landscape", date: "2022-02-10", place: "Kahuzi-Biega NP, DR Congo",
    caption: { en: "Resting on its back in the undergrowth, one arm over its head.",
               fr: "Allongé sur le dos dans les sous-bois, un bras au-dessus de la tête." } },
  { id: "eastern-lowland-gorilla-02", en: "Eastern Lowland Gorilla", fr: "Gorille des plaines de l'Est", sci: "Gorilla beringei graueri",
    src: "photos/mammals/eastern-lowland-gorilla-02.jpg", orient: "landscape", date: "2022-02-10", place: "Kahuzi-Biega NP, DR Congo",
    caption: { en: "A wide yawn while lying in the vegetation.",
               fr: "Un large bâillement, allongé dans la végétation." } },
  { id: "eastern-lowland-gorilla-03", en: "Eastern Lowland Gorilla", fr: "Gorille des plaines de l'Est", sci: "Gorilla beringei graueri",
    src: "photos/mammals/eastern-lowland-gorilla-03.jpg", orient: "landscape", date: "2022-02-10", place: "Kahuzi-Biega NP, DR Congo",
    caption: { en: "Feeding on a plant stem.",
               fr: "En train de manger une tige." } },
  { id: "eastern-lowland-gorilla-04", en: "Eastern Lowland Gorilla", fr: "Gorille des plaines de l'Est", sci: "Gorilla beringei graueri",
    src: "photos/mammals/eastern-lowland-gorilla-04.jpg", orient: "landscape", date: "2022-02-10", place: "Kahuzi-Biega NP, DR Congo",
    caption: { en: "A young gorilla looking back over its shoulder.",
               fr: "Un jeune gorille regardant par-dessus son épaule." } },
  { id: "eastern-lowland-gorilla-05", en: "Eastern Lowland Gorilla", fr: "Gorille des plaines de l'Est", sci: "Gorilla beringei graueri",
    src: "photos/mammals/eastern-lowland-gorilla-05.jpg", orient: "landscape", date: "2022-02-10", place: "Kahuzi-Biega NP, DR Congo",
    caption: { en: "Two young gorillas side by side in the foliage.",
               fr: "Deux jeunes gorilles côte à côte dans le feuillage." } },
  // Elephant: Etosha NP, Namutoni side, 28 May 2024.
  { id: "elephant-01", en: "African Bush Elephant", fr: "Éléphant de savane d'Afrique", sci: "Loxodonta africana",
    src: "photos/mammals/elephant-01.jpg", orient: "landscape", date: "2024-05-28", place: "Etosha NP (Namutoni), Namibia",
    caption: { en: "Two elephants heading to the waterhole.",
               fr: "Deux éléphants se dirigeant vers le point d'eau." } },
  // Hippopotamus series: first photo at Mahango (29 Oct 2016), the rest in Chobe NP (31 Oct - 2 Nov 2016), camera dates.
  { id: "hippopotamus-01", en: "Common Hippopotamus", fr: "Hippopotame amphibie", sci: "Hippopotamus amphibius",
    src: "photos/mammals/hippopotamus-01.jpg", orient: "landscape", date: "2016-10-29", place: "Mahango Core Area (Bwabwata NP), Namibia",
    caption: { en: "Wading out of the shallows, a small bird perched on its head.",
               fr: "Sortant des eaux peu profondes, un petit oiseau perché sur la tête." } },
  { id: "hippopotamus-02", en: "Common Hippopotamus", fr: "Hippopotame amphibie", sci: "Hippopotamus amphibius",
    src: "photos/mammals/hippopotamus-02.jpg", orient: "landscape", date: "2016-11-02", place: "Chobe NP, Botswana",
    caption: { en: "A huge yawn, showing its tusks and the inside of its mouth.",
               fr: "Un énorme bâillement qui dévoile ses défenses et l'intérieur de sa gueule." } },
  { id: "hippopotamus-03", en: "Common Hippopotamus", fr: "Hippopotame amphibie", sci: "Hippopotamus amphibius",
    src: "photos/mammals/hippopotamus-03.jpg", orient: "landscape", date: "2016-10-31", place: "Chobe NP, Botswana",
    caption: { en: "Eyes, ears and nostrils just above the water, with the herd behind.",
               fr: "Les yeux, les oreilles et les narines juste hors de l'eau, le groupe derrière." } },
  { id: "hippopotamus-04", en: "Common Hippopotamus", fr: "Hippopotame amphibie", sci: "Hippopotamus amphibius",
    src: "photos/mammals/hippopotamus-04.jpg", orient: "landscape", date: "2016-11-02", place: "Chobe NP, Botswana",
    caption: { en: "Two hippos facing off with open mouths.",
               fr: "Deux hippopotames face à face, gueules ouvertes." } },
  { id: "hippopotamus-05", en: "Common Hippopotamus", fr: "Hippopotame amphibie", sci: "Hippopotamus amphibius",
    src: "photos/mammals/hippopotamus-05.jpg", orient: "landscape", date: "2016-11-02", place: "Chobe NP, Botswana",
    caption: { en: "Sparring in the river, tusks bared.",
               fr: "Joute dans la rivière, défenses à découvert." } },
  // White Rhinoceros series: Otjiwa Game Lodge, 12 Mar 2024.
  { id: "vervet-monkey-01", en: "Vervet Monkey", fr: "Singe vervet", sci: "Chlorocebus pygerythrus",
    src: "photos/mammals/vervet-monkey-01.jpg", orient: "landscape", date: "2016-10-29", place: "Nguma Lagoon, Botswana",
    caption: { en: "A young one in a tree, nibbling from its hand.",
               fr: "Un jeune dans un arbre, grignotant ce qu'il tient dans la main." } },
  { id: "white-rhinoceros-01", en: "White Rhinoceros", fr: "Rhinocéros blanc", sci: "Ceratotherium simum",
    src: "photos/mammals/white-rhinoceros-01.jpg", orient: "landscape", date: "2024-03-12", place: "Otjiwa Game Lodge, Namibia",
    caption: { en: "A mother and calf walking straight towards the camera.",
               fr: "Une mère et son petit avancent droit vers l'objectif." } },
  { id: "white-rhinoceros-02", en: "White Rhinoceros", fr: "Rhinocéros blanc", sci: "Ceratotherium simum",
    src: "photos/mammals/white-rhinoceros-02.jpg", orient: "landscape", date: "2024-03-12", place: "Otjiwa Game Lodge, Namibia",
    caption: { en: "The calf stays close at its mother's side.",
               fr: "Le petit reste tout près de sa mère." } },
  { id: "white-rhinoceros-03", en: "White Rhinoceros", fr: "Rhinocéros blanc", sci: "Ceratotherium simum",
    src: "photos/mammals/white-rhinoceros-03.jpg", orient: "landscape", date: "2024-03-12", place: "Otjiwa Game Lodge, Namibia",
    caption: { en: "Grazing, with the calf following behind.",
               fr: "En train de brouter, suivie de son petit." } }
];

/* ---------------------------------------------------------------------
   STORIES — accounts from the field. "cover" is a photo id from PHOTOS,
   "species" a list of bird ids. Each paragraph is one string.
   See content.sample.js for complete examples.
   RÉCITS — "cover" est l'id d'une photo ; un paragraphe par chaîne.
   --------------------------------------------------------------------- */
window.STORIES = [
  { id: "hippos-mahango-chobe", date: "2016-11-02", place: "Mahango (Namibia) & Chobe NP (Botswana)",
    cover: "hippopotamus-02", species: [],
    title: { en: "Five days of hippos", fr: "Cinq jours d'hippopotames" },
    dek:   { en: "From Mahango to the Chobe: a wade, a stare, and a lot of teeth.",
             fr: "De Mahango à la Chobe : une sortie de l'eau, un regard, et beaucoup de dents." },
    body: {
      en: [
        "On 29 October 2016, at Mahango in the Bwabwata National Park, a big hippo walked out of the shallows in full daylight. Hippos spend most of the day in the water, so seeing the whole animal on its legs is a treat. A small bird was riding on its head, completely at ease.",
        "Two days later we were on the Chobe in Botswana. One hippo stayed with only its eyes, ears and nostrils above the surface and watched us without moving, while the rest of the group rested behind it.",
        "On 2 November the river was much livelier. A hippo opened its mouth to the full in front of us. It looks like a yawn, but it is a warning: it shows off the tusks, which never stop growing.",
        "Then two of them faced off with open mouths and started sparring in the water, pushing against each other with their tusks bared. It lasted only a few seconds, and then everything was calm again."
      ],
      fr: [
        "Le 29 octobre 2016, à Mahango, dans le parc national de Bwabwata, un gros hippopotame est sorti des eaux peu profondes en plein jour. Les hippopotames passent l'essentiel de la journée dans l'eau, alors voir l'animal entier, debout sur ses pattes, est un vrai cadeau. Un petit oiseau voyageait sur sa tête, parfaitement tranquille.",
        "Deux jours plus tard, nous étions sur la Chobe, au Botswana. Un hippopotame ne laissait dépasser que ses yeux, ses oreilles et ses narines, et nous observait sans bouger, pendant que le reste du groupe se reposait derrière lui.",
        "Le 2 novembre, la rivière était bien plus animée. Un hippopotame a ouvert la gueule en grand devant nous. On dirait un bâillement, mais c'est un avertissement : il montre ses défenses, qui ne cessent jamais de pousser.",
        "Puis deux d'entre eux se sont fait face, gueules ouvertes, et ont commencé à jouter dans l'eau, se poussant l'un l'autre, défenses à découvert. Cela n'a duré que quelques secondes, puis tout est redevenu calme."
      ]
    } },
  { id: "gorillas-kahuzi-biega", date: "2022-02-10", place: "Kahuzi-Biega NP, DR Congo",
    cover: "eastern-lowland-gorilla-01",
    coverPhoto: { src: "photos/stories/kahuzi-biega-cover.webp", orient: "landscape" },
    species: [],
    title: { en: "A childhood dream come true in Kahuzi-Biega", fr: "Un rêve d'enfant devenu réalité à Kahuzi-Biega" },
    dek:   { en: "Thirty years after holding a gorilla banknote, I met the Bonne Année family.",
             fr: "Trente ans après avoir tenu un billet au gorille, j'ai rencontré la famille Bonne Année." },
    body: {
      fr: [
        "Le 10 février 2022 restera une date particulière pour moi. Ce jour-là, j'ai enfin réalisé un rêve que je portais depuis mon enfance.",
        "Je me souviens encore de ce billet de 50 000 zaïres mis en circulation en octobre 1991. Il représentait un gorille, avec cette inscription : « Maheshe, du Parc Kahuzi-Biega ».",
        "J'étais encore gamin, et je me souviens m'être dit qu'un jour, moi aussi, je verrais ces gorilles de mes propres yeux. À l'époque, je ne savais pas quand ni comment, mais cette image était restée quelque part dans ma mémoire.",
        "Et puis, trente ans plus tard, me voilà au cœur du parc national de Kahuzi-Biega, dans l'est de la RDC, à quelques mètres de ces animaux qui m'avaient tant fasciné.",
        "Avec Papa Lambert, notre ranger, et son collègue, nous avons suivi les traces de la famille de Bonne Année, menée par un magnifique dos argenté né le 1er janvier 2013, d'où lui vient son nom.",
        "Nous avons passé un bon moment à leurs côtés. Certains gorilles se reposaient tranquillement dans les sous-bois, d'autres mangeaient des tiges. Les plus jeunes, eux, étaient particulièrement curieux. Ils s'approchaient parfois de nous et nous observaient avec autant d'intérêt que nous les regardions.",
        "Difficile de décrire ce que l'on ressent dans un moment pareil. On oublie presque le temps qui passe. On se contente de regarder, d'écouter et de profiter de l'instant.",
        "Le gorille de Grauer, aussi appelé gorille des plaines de l'Est, est une espèce que l'on ne trouve qu'à l'est de la République démocratique du Congo. Malheureusement, il est aujourd'hui en danger critique d'extinction.",
        "Au-delà de la beauté de cette rencontre, je suis reparti avec beaucoup de respect pour les gardes, les pisteurs et toutes les personnes qui consacrent leur vie à la protection de ces animaux et de leur habitat.",
        "Ce jour-là, je n'ai pas simplement visité un parc. J'ai retrouvé un rêve d'enfant qui m'accompagnait depuis 1991.",
        "Parfois, il faut attendre trente ans pour vivre un moment dont on rêvait depuis toujours. Et celui-là, je ne l'oublierai jamais."
      ],
      en: [
        "10 February 2022 will always be a special date for me. That day, I finally fulfilled a dream I had carried since childhood.",
        "I still remember the 50,000-zaire banknote put into circulation in October 1991. It showed a gorilla, with the words \"Maheshe, du Parc Kahuzi-Biega\".",
        "I was just a kid, and I remember telling myself that one day I too would see these gorillas with my own eyes. At the time I had no idea when or how, but that image stayed somewhere in my memory.",
        "And then, thirty years later, there I was in the heart of Kahuzi-Biega National Park, in the east of the DR Congo, a few metres from the animals that had fascinated me so much.",
        "With Papa Lambert, our ranger, and his colleague, we followed the tracks of the Bonne Année family, led by a magnificent silverback born on 1 January 2013, which is where his name (\"Happy New Year\") comes from.",
        "We spent a good while with them. Some of the gorillas rested quietly in the undergrowth, others fed on plant stems. The youngest were especially curious. They sometimes came close and watched us with as much interest as we watched them.",
        "It is hard to describe what you feel in a moment like that. You almost forget time passing. You just watch, listen and take in the moment.",
        "Grauer's gorilla, also called the Eastern Lowland Gorilla, is found only in the east of the Democratic Republic of the Congo. Sadly, it is now critically endangered.",
        "Beyond the beauty of the encounter, I left with deep respect for the rangers, the trackers and everyone who devotes their life to protecting these animals and their habitat.",
        "That day, I didn't simply visit a park. I found again a childhood dream that had been with me since 1991.",
        "Sometimes you have to wait thirty years to live a moment you have always dreamed of. And this one, I will never forget."
      ]
    },
    photos: [
      { src: "photos/stories/zaire-50000-1991.jpg", orient: "square",
        caption: { en: "The 50,000-zaire note of 1991, with the gorillas of Kahuzi-Biega on the back.", fr: "Le billet de 50 000 zaïres de 1991, avec les gorilles de Kahuzi-Biega au verso." } },
      { src: "photos/stories/kahuzi-biega-05.webp", orient: "portrait",
        caption: { en: "Face to face at last: photographing a gorilla in the thick vegetation.", fr: "Enfin face à face : je photographie un gorille dans la végétation dense." } },
      { src: "photos/stories/kahuzi-biega-01.webp", orient: "landscape",
        caption: { en: "With Papa Lambert and the park rangers and trackers.", fr: "Avec Papa Lambert et les gardes et pisteurs du parc." } },
      { src: "photos/stories/kahuzi-biega-02.webp", orient: "landscape",
        caption: { en: "A pause in the undergrowth, close to the family.", fr: "Une pause dans les sous-bois, près de la famille." } },
      { src: "photos/stories/kahuzi-biega-03.webp", orient: "portrait",
        caption: { en: "A curious youngster sitting just behind me.", fr: "Un jeune curieux assis juste derrière moi." } },
      { src: "photos/stories/kahuzi-biega-04.webp", orient: "landscape",
        caption: { en: "Two young gorillas watching us from the vegetation.", fr: "Deux jeunes gorilles nous observent depuis la végétation." } }
    ] }
];

/* ---------------------------------------------------------------------
   ABOUT — your biography, one paragraph per string.
   À PROPOS — votre biographie, un paragraphe par chaîne.
   --------------------------------------------------------------------- */
window.ABOUT = {
  en: [
    "I photograph wild birds and, now and then, the mammals that share their habitats. This site is my working record: every species I have identified, the photographs I am happy with, and notes from the field.",
    "Replace this text with your own story: where you started birding, the places you return to, and the gear you carry."
  ],
  fr: [
    "Je photographie les oiseaux sauvages et, de temps en temps, les mammifères qui partagent leurs milieux. Ce site est mon carnet de travail : chaque espèce identifiée, les photos qui me plaisent et des notes de terrain.",
    "Remplacez ce texte par votre propre histoire : vos débuts en ornithologie, les lieux où vous revenez, le matériel que vous emportez."
  ]
};
