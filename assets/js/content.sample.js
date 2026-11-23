/* =====================================================================
   SAMPLE CONTENT — reference only. The site does NOT load this file.
   It shows filled-in examples of every kind of entry (photos, mammals,
   stories). Copy an entry into content.js and change it.
   EXEMPLES — fichier de référence, non chargé par le site.
   ===================================================================== */

window.SITE = {
  name: "Eddy Kadi",
  // Contact shown in the footer. Leave "" to hide.
  email: "your-email@example.com",
  instagram: "",            // e.g. "https://instagram.com/yourname"
  ebird: "",                // e.g. "https://ebird.org/profile/XXXX"
  // Photos newer than this many days get a "NEW" marker automatically.
  newWithinDays: 90,
  // Photo id used as the big image at the top of the home page.
  heroPhoto: "fish-eagle-ihema-01",
  // Shows a thin bar saying the content is sample data. Set to false when done.
  showSampleNotice: true,
  copyrightYear: 2026
};

/* ---------------------------------------------------------------------
   BIRD FAMILIES — in taxonomic order (IOC). The checklist follows
   this order. "hue" (0–360) tints the placeholder plate for the family.
   FAMILLES D'OISEAUX — dans l'ordre taxonomique (COI).
   --------------------------------------------------------------------- */
window.FAMILIES = [
  { id: "numididae",     sci: "Numididae",     en: "Guineafowl",                 fr: "Pintades",                    hue: 210 },
  { id: "musophagidae",  sci: "Musophagidae",  en: "Turacos",                    fr: "Touracos",                    hue: 190 },
  { id: "gruidae",       sci: "Gruidae",       en: "Cranes",                     fr: "Grues",                       hue: 40  },
  { id: "ciconiidae",    sci: "Ciconiidae",    en: "Storks",                     fr: "Cigognes",                    hue: 0   },
  { id: "ardeidae",      sci: "Ardeidae",      en: "Herons and egrets",          fr: "Hérons et aigrettes",         hue: 200 },
  { id: "scopidae",      sci: "Scopidae",      en: "Hamerkop",                   fr: "Ombrette",                    hue: 30  },
  { id: "accipitridae",  sci: "Accipitridae",  en: "Eagles, hawks and vultures", fr: "Aigles, buses et vautours",   hue: 25  },
  { id: "bucerotidae",   sci: "Bucerotidae",   en: "Hornbills",                  fr: "Calaos",                      hue: 15  },
  { id: "meropidae",     sci: "Meropidae",     en: "Bee-eaters",                 fr: "Guêpiers",                    hue: 95  },
  { id: "coraciidae",    sci: "Coraciidae",    en: "Rollers",                    fr: "Rolliers",                    hue: 255 },
  { id: "alcedinidae",   sci: "Alcedinidae",   en: "Kingfishers",                fr: "Martins-pêcheurs",            hue: 175 },
  { id: "pycnonotidae",  sci: "Pycnonotidae",  en: "Bulbuls",                    fr: "Bulbuls",                     hue: 55  },
  { id: "sturnidae",     sci: "Sturnidae",     en: "Starlings",                  fr: "Étourneaux et choucadors",    hue: 220 },
  { id: "nectariniidae", sci: "Nectariniidae", en: "Sunbirds",                   fr: "Souimangas",                  hue: 330 },
  { id: "ploceidae",     sci: "Ploceidae",     en: "Weavers",                    fr: "Tisserins",                   hue: 48  },
  { id: "estrildidae",   sci: "Estrildidae",   en: "Waxbills and cordon-bleus",  fr: "Astrilds et cordonbleus",     hue: 205 }
];

/* ---------------------------------------------------------------------
   BIRD CHECKLIST — one line per species you have SEEN.
   A species becomes "photographed" automatically when a photo in
   PHOTOS below points to it.
   - id:     short unique name, lowercase with dashes
   - family: an id from FAMILIES
   - first:  date of your first record (YYYY-MM-DD)
   - where:  where that first record was
   LISTE D'ESPÈCES — une ligne par espèce OBSERVÉE.
   --------------------------------------------------------------------- */
window.BIRDS = [
  { id: "helmeted-guineafowl", family: "numididae", en: "Helmeted Guineafowl", fr: "Pintade de Numidie", sci: "Numida meleagris", first: "2025-06-02", where: "Akagera NP, Rwanda" },
  { id: "great-blue-turaco", family: "musophagidae", en: "Great Blue Turaco", fr: "Touraco géant", sci: "Corythaeola cristata", first: "2025-12-14", where: "Nyungwe NP, Rwanda" },
  { id: "grey-crowned-crane", family: "gruidae", en: "Grey Crowned Crane", fr: "Grue royale", sci: "Balearica regulorum", first: "2025-06-03", where: "Akagera NP, Rwanda" },
  { id: "saddle-billed-stork", family: "ciconiidae", en: "Saddle-billed Stork", fr: "Jabiru d'Afrique", sci: "Ephippiorhynchus senegalensis", first: "2025-06-03", where: "Lake Ihema, Rwanda" },
  
  { id: "grey-heron", family: "ardeidae", en: "Grey Heron", fr: "Héron cendré", sci: "Ardea cinerea", first: "2025-03-11", where: "Nyabarongo wetlands, Rwanda" },
  
  
  { id: "hamerkop", family: "scopidae", en: "Hamerkop", fr: "Ombrette africaine", sci: "Scopus umbretta", first: "2025-03-11", where: "Nyabarongo wetlands, Rwanda" },
  { id: "african-fish-eagle", family: "accipitridae", en: "African Fish Eagle", fr: "Pygargue vocifère", sci: "Haliaeetus vocifer", first: "2025-06-03", where: "Lake Ihema, Rwanda" },
  { id: "bateleur", family: "accipitridae", en: "Bateleur", fr: "Bateleur des savanes", sci: "Terathopius ecaudatus", first: "2025-06-04", where: "Akagera NP, Rwanda" },
  { id: "crowned-hornbill", family: "bucerotidae", en: "Crowned Hornbill", fr: "Calao couronné", sci: "Lophoceros alboterminatus", first: "2025-09-20", where: "Kigali, Rwanda" },
  { id: "little-bee-eater", family: "meropidae", en: "Little Bee-eater", fr: "Guêpier nain", sci: "Merops pusillus", first: "2025-06-02", where: "Akagera NP, Rwanda" },
  { id: "cinnamon-chested-bee-eater", family: "meropidae", en: "Cinnamon-chested Bee-eater", fr: "Guêpier de Lafresnaye", sci: "Merops oreobates", first: "2025-12-13", where: "Nyungwe NP, Rwanda" },
  { id: "lilac-breasted-roller", family: "coraciidae", en: "Lilac-breasted Roller", fr: "Rollier à longs brins", sci: "Coracias caudatus", first: "2025-06-02", where: "Akagera NP, Rwanda" },
  { id: "malachite-kingfisher", family: "alcedinidae", en: "Malachite Kingfisher", fr: "Martin-pêcheur huppé", sci: "Corythornis cristatus", first: "2025-06-03", where: "Lake Ihema, Rwanda" },
  { id: "pied-kingfisher", family: "alcedinidae", en: "Pied Kingfisher", fr: "Martin-pêcheur pie", sci: "Ceryle rudis", first: "2025-03-11", where: "Nyabarongo wetlands, Rwanda" },
  { id: "common-bulbul", family: "pycnonotidae", en: "Common Bulbul", fr: "Bulbul des jardins", sci: "Pycnonotus barbatus", first: "2025-01-04", where: "Kigali, Rwanda" },
  { id: "greater-blue-eared-starling", family: "sturnidae", en: "Greater Blue-eared Starling", fr: "Choucador à oreillons bleus", sci: "Lamprotornis chalybaeus", first: "2025-06-04", where: "Akagera NP, Rwanda" },
  { id: "scarlet-chested-sunbird", family: "nectariniidae", en: "Scarlet-chested Sunbird", fr: "Souimanga à poitrine rouge", sci: "Chalcomitra senegalensis", first: "2025-01-04", where: "Kigali, Rwanda" },
  { id: "village-weaver", family: "ploceidae", en: "Village Weaver", fr: "Tisserin gendarme", sci: "Ploceus cucullatus", first: "2025-01-04", where: "Kigali, Rwanda" },
  { id: "red-cheeked-cordon-bleu", family: "estrildidae", en: "Red-cheeked Cordon-bleu", fr: "Cordonbleu à joues rouges", sci: "Uraeginthus bengalus", first: "2025-02-08", where: "Kigali, Rwanda" }
];

/* ---------------------------------------------------------------------
   BIRD PHOTOS — newest can go anywhere; the site sorts by date.
   1. Put the image in  photos/birds/  (long edge ~2000 px, JPG).
   2. Add an entry here with "src" pointing to it.
   - species:  an id from BIRDS
   - orient:   "landscape" or "portrait" (sets the frame shape)
   - gps:      optional "lat, long"
   PHOTOS D'OISEAUX — mettez l'image dans photos/birds/ puis ajoutez
   une entrée ici.
   --------------------------------------------------------------------- */
window.PHOTOS = [
  { id: "fish-eagle-ihema-01", species: "african-fish-eagle", src: "photos/birds/african-fish-eagle-01.jpg", orient: "landscape",
    date: "2026-09-28", place: "Lake Ihema, Akagera NP, Rwanda", gps: "-1.872, 30.786",
    caption: { en: "Calling from a dead acacia at first light, answered by its mate across the bay.",
               fr: "Cri lancé d'un acacia mort aux premières lueurs, aussitôt suivi d'une réponse de l'autre rive." } },
  { id: "malachite-kf-01", species: "malachite-kingfisher", src: "photos/birds/malachite-kingfisher-01.jpg", orient: "portrait",
    date: "2026-09-28", place: "Lake Ihema, Akagera NP, Rwanda", gps: "-1.869, 30.781",
    caption: { en: "Papyrus perch, twenty centimetres above the water. Three dives, one small fish.",
               fr: "Perché sur un papyrus, à vingt centimètres de l'eau. Trois plongeons, un petit poisson." } },
  { id: "turaco-nyungwe-01", species: "great-blue-turaco", src: "photos/birds/great-blue-turaco-01.jpg", orient: "landscape",
    date: "2026-08-17", place: "Uwinka, Nyungwe NP, Rwanda", gps: "-2.479, 29.200",
    caption: { en: "A group of five moving through the canopy, heard long before they were seen.",
               fr: "Un groupe de cinq traversant la canopée, entendu bien avant d'être vu." } },
  { id: "bee-eater-cinnamon-01", species: "cinnamon-chested-bee-eater", src: "photos/birds/cinnamon-chested-bee-eater-01.jpg", orient: "portrait",
    date: "2026-08-16", place: "Nyungwe NP, Rwanda", gps: "-2.468, 29.231",
    caption: { en: "Returning to the same forest-edge snag after every sally.",
               fr: "Retour au même chicot en lisière après chaque envol." } },
  { id: "crane-akagera-01", species: "grey-crowned-crane", src: "photos/birds/grey-crowned-crane-01.jpg", orient: "landscape",
    date: "2026-07-30", place: "Northern plains, Akagera NP, Rwanda", gps: "-1.552, 30.651",
    caption: { en: "A pair displaying in short grass after the night's rain.",
               fr: "Un couple en parade dans l'herbe rase après la pluie de la nuit." } },
  { id: "roller-akagera-01", species: "lilac-breasted-roller", src: "photos/birds/lilac-breasted-roller-01.jpg", orient: "portrait",
    date: "2026-07-30", place: "Akagera NP, Rwanda",
    caption: { en: "Hunting from a fence post beside the main track.",
               fr: "À l'affût sur un piquet le long de la piste principale." } },
  { id: "stork-ihema-01", species: "saddle-billed-stork", src: "photos/birds/saddle-billed-stork-01.jpg", orient: "landscape",
    date: "2026-06-21", place: "Lake Ihema, Akagera NP, Rwanda",
    caption: { en: "A female (yellow eye) working the shallows.",
               fr: "Une femelle (œil jaune) fouillant les hauts-fonds." } },
  { id: "bateleur-akagera-01", species: "bateleur", src: "photos/birds/bateleur-01.jpg", orient: "landscape",
    date: "2026-06-20", place: "Akagera NP, Rwanda",
    caption: { en: "Low pass over the savanna, tilting the whole time.",
               fr: "Passage bas au-dessus de la savane, en bascule permanente." } },
  { id: "sunbird-kigali-01", species: "scarlet-chested-sunbird", src: "photos/birds/scarlet-chested-sunbird-01.jpg", orient: "portrait",
    date: "2026-05-09", place: "Kigali, Rwanda",
    caption: { en: "Male at flowering aloe in the garden.",
               fr: "Mâle sur un aloès en fleur au jardin." } },
  { id: "weaver-kigali-01", species: "village-weaver", src: "photos/birds/village-weaver-01.jpg", orient: "landscape",
    date: "2026-04-12", place: "Kigali, Rwanda",
    caption: { en: "Weaving the entrance tube. The colony had 30 nests that week.",
               fr: "Tissage du tube d'entrée. La colonie comptait 30 nids cette semaine-là." } },
  { id: "pied-kf-01", species: "pied-kingfisher", src: "photos/birds/pied-kingfisher-01.jpg", orient: "landscape",
    date: "2026-03-15", place: "Nyabarongo wetlands, Rwanda",
    caption: { en: "Hovering before the dive.",
               fr: "Vol stationnaire avant le plongeon." } },
  { id: "hornbill-kigali-01", species: "crowned-hornbill", src: "photos/birds/crowned-hornbill-01.jpg", orient: "portrait",
    date: "2026-02-22", place: "Kigali, Rwanda",
    caption: { en: "One of a pair feeding on figs.",
               fr: "L'un des deux oiseaux d'un couple se nourrissant de figues." } },
  { id: "starling-akagera-01", species: "greater-blue-eared-starling", src: "photos/birds/greater-blue-eared-starling-01.jpg", orient: "landscape",
    date: "2026-01-18", place: "Akagera NP, Rwanda",
    caption: { en: "Iridescence only shows in full sun.",
               fr: "Les reflets n'apparaissent qu'en plein soleil." } },
  { id: "little-bee-eater-01", species: "little-bee-eater", src: "photos/birds/little-bee-eater-01.jpg", orient: "portrait",
    date: "2025-12-28", place: "Akagera NP, Rwanda",
    caption: { en: "Bashing a bee on the perch to remove the sting.",
               fr: "Frappe une abeille contre le perchoir pour retirer le dard." } },
  { id: "cordon-bleu-01", species: "red-cheeked-cordon-bleu", src: "photos/birds/red-cheeked-cordon-bleu-01.jpg", orient: "landscape",
    date: "2025-11-30", place: "Kigali, Rwanda",
    caption: { en: "At the garden water dish.",
               fr: "Au point d'eau du jardin." } },
  { id: "bulbul-01", species: "common-bulbul", src: "photos/birds/common-bulbul-01.jpg", orient: "portrait",
    date: "2025-11-02", place: "Kigali, Rwanda",
    caption: { en: "The first bird singing every morning.",
               fr: "Le premier oiseau à chanter chaque matin." } },
  { id: "malachite-kf-02", species: "malachite-kingfisher", src: "photos/birds/malachite-kingfisher-02.jpg", orient: "landscape",
    date: "2025-10-19", place: "Nyabarongo wetlands, Rwanda",
    caption: { en: "Juvenile, with a dark bill.",
               fr: "Juvénile, au bec encore sombre." } }
];

/* ---------------------------------------------------------------------
   MAMMALS — same idea, put images in photos/mammals/
   MAMMIFÈRES — images dans photos/mammals/
   --------------------------------------------------------------------- */
window.MAMMALS = [
  { id: "hoests-monkey-01", en: "L'Hoest's Monkey", fr: "Cercopithèque de L'Hoest", sci: "Allochrocebus lhoesti",
    src: "photos/mammals/lhoests-monkey-01.jpg", orient: "portrait", date: "2026-08-17", place: "Nyungwe NP, Rwanda",
    caption: { en: "Crossing the road at Uwinka.", fr: "Traversée de la route à Uwinka." } },
  { id: "hippo-01", en: "Hippopotamus", fr: "Hippopotame amphibie", sci: "Hippopotamus amphibius",
    src: "photos/mammals/hippopotamus-01.jpg", orient: "landscape", date: "2026-09-28", place: "Lake Ihema, Rwanda",
    caption: { en: "A bull yawning at the boat.", fr: "Un mâle bâillant vers le bateau." } },
  { id: "zebra-01", en: "Plains Zebra", fr: "Zèbre des plaines", sci: "Equus quagga",
    src: "photos/mammals/plains-zebra-01.jpg", orient: "landscape", date: "2026-07-30", place: "Akagera NP, Rwanda",
    caption: { en: "Dust bath at midday.", fr: "Bain de poussière à midi." } },
  { id: "topi-01", en: "Topi", fr: "Damalisque", sci: "Damaliscus lunatus jimela",
    src: "photos/mammals/topi-01.jpg", orient: "portrait", date: "2026-06-20", place: "Akagera NP, Rwanda",
    caption: { en: "Sentinel on a termite mound.", fr: "Sentinelle sur une termitière." } },
  { id: "giraffe-01", en: "Masai Giraffe", fr: "Girafe masaï", sci: "Giraffa tippelskirchi",
    src: "photos/mammals/masai-giraffe-01.jpg", orient: "portrait", date: "2026-01-18", place: "Akagera NP, Rwanda",
    caption: { en: "Browsing acacia at sunset.", fr: "Broutant un acacia au coucher du soleil." } },
  { id: "buffalo-01", en: "African Buffalo", fr: "Buffle d'Afrique", sci: "Syncerus caffer",
    src: "photos/mammals/african-buffalo-01.jpg", orient: "landscape", date: "2025-12-28", place: "Akagera NP, Rwanda",
    caption: { en: "Oxpeckers on board.", fr: "Avec ses piqueboeufs." } }
];

/* ---------------------------------------------------------------------
   STORIES — field notes. "cover" is a photo id from PHOTOS.
   Each paragraph is one string in the list.
   RÉCITS — carnets de terrain. Chaque paragraphe est une chaîne.
   --------------------------------------------------------------------- */
window.STORIES = [
  { id: "dawn-at-ihema", date: "2026-09-28", place: "Lake Ihema, Akagera NP, Rwanda", gps: "-1.872, 30.786",
    cover: "fish-eagle-ihema-01", species: ["african-fish-eagle", "malachite-kingfisher", "saddle-billed-stork"],
    title: { en: "Dawn at Lake Ihema", fr: "L'aube sur le lac Ihema" },
    dek:   { en: "Two fish eagles, one kingfisher and a very patient boatman.",
             fr: "Deux pygargues, un martin-pêcheur et un batelier très patient." },
    body: {
      en: [
        "We left the jetty at 05:50 with the lake still grey. The first sound was the fish eagle, a long falling call from the far shore, then the answer from much closer.",
        "The bird sat on a dead acacia at the water's edge. I had about four minutes of usable light before it dropped and flew low across the bay.",
        "On the way back, a Malachite Kingfisher held its papyrus perch while we drifted to within three metres. It made three dives and caught one small fish."
      ],
      fr: [
        "Départ du ponton à 5 h 50, le lac encore gris. Premier son : le pygargue, un long cri descendant depuis la rive opposée, puis la réponse, beaucoup plus proche.",
        "L'oiseau était posé sur un acacia mort au bord de l'eau. J'ai eu environ quatre minutes de lumière exploitable avant qu'il ne s'envole en rase-mottes au-dessus de la baie.",
        "Au retour, un Martin-pêcheur huppé est resté sur son papyrus pendant que nous dérivions jusqu'à trois mètres. Trois plongeons, un petit poisson."
      ]
    } },
  { id: "turaco-canopy", date: "2026-08-17", place: "Uwinka, Nyungwe NP, Rwanda", gps: "-2.479, 29.200",
    cover: "turaco-nyungwe-01", species: ["great-blue-turaco", "cinnamon-chested-bee-eater"],
    title: { en: "Listening for turacos", fr: "À l'écoute des touracos" },
    dek:   { en: "In Nyungwe you find the birds by ear first.",
             fr: "À Nyungwe, on trouve d'abord les oiseaux à l'oreille." },
    body: {
      en: [
        "The Great Blue Turaco's call carries a long way through the forest. We followed it for twenty minutes along the Uwinka trail before the first bird showed.",
        "Five birds in all, moving tree to tree and running along the branches. Light under the canopy was poor, so I worked at ISO 3200 and waited for one to land in a gap."
      ],
      fr: [
        "Le cri du Touraco géant porte loin dans la forêt. Nous l'avons suivi pendant vingt minutes sur le sentier d'Uwinka avant de voir le premier oiseau.",
        "Cinq oiseaux au total, passant d'arbre en arbre et courant le long des branches. Peu de lumière sous la canopée : j'ai travaillé à 3200 ISO en attendant qu'un oiseau se pose dans une trouée."
      ]
    } },
  { id: "weaver-colony", date: "2026-04-12", place: "Kigali, Rwanda",
    cover: "weaver-kigali-01", species: ["village-weaver", "scarlet-chested-sunbird", "red-cheeked-cordon-bleu"],
    title: { en: "The weaver colony next door", fr: "La colonie de tisserins d'à côté" },
    dek:   { en: "Thirty nests in one tree, and a season of photographing from the garden.",
             fr: "Trente nids dans un seul arbre, et une saison de photo depuis le jardin." },
    body: {
      en: [
        "Every April the males rebuild in the same tree beside the road. Each nest starts as a ring, then a chamber, then the entrance tube.",
        "Females inspect and often reject a nest. A rejected nest is torn down and rebuilt within days."
      ],
      fr: [
        "Chaque avril, les mâles reconstruisent dans le même arbre au bord de la route. Chaque nid commence par un anneau, puis une chambre, puis le tube d'entrée.",
        "Les femelles inspectent les nids et en refusent souvent. Un nid refusé est démoli et reconstruit en quelques jours."
      ]
    } }
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
