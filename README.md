# Eddy Kadi: Field Notes / Carnets de terrain

A static, bilingual (English / French) site. There is no build step and no database.
Open `index.html` in a browser to view it, or upload the whole folder to any static host
such as Netlify, GitHub Pages or Cloudflare Pages.

Site statique bilingue (anglais / français), sans compilation ni base de données.
Ouvrez `index.html` dans un navigateur, ou envoyez tout le dossier sur un hébergeur statique.

```
eddy-kadi-site/
├── index.html              Home: hero, recent additions, links to each section
├── checklist.html          Bird checklist (each family opens and closes)
├── gallery.html            Bird photographs
├── mammals.html            Mammals
├── stories.html            Stories
├── about.html              About and contact
├── assets/css/site.css     colours, fonts, layout
├── assets/js/content.js    ← YOUR CONTENT: species, photos, mammals, stories, bio
├── assets/js/i18n.js       ← interface wording in EN and FR (menus, buttons, headings)
├── assets/js/app.js        rendering code (no need to edit)
└── photos/
    ├── birds/              bird images
    └── mammals/            mammal images
```

---

## English

### Add a new bird photo
1. Export the image as JPG, about **2000 px on the long edge** and under 500 KB.
   Name it in lowercase with dashes, e.g. `malachite-kingfisher-03.jpg`.
2. Copy it into `photos/birds/`.
3. Open `assets/js/content.js`, find `window.PHOTOS = [`, and add an entry anywhere in the list.
   The site sorts photos by date, so order doesn't matter.

```js
{ id: "malachite-kf-03", species: "malachite-kingfisher",
  src: "photos/birds/malachite-kingfisher-03.jpg", orient: "landscape",
  date: "2026-10-12", place: "Lake Ihema, Akagera NP, Rwanda", gps: "-1.87, 30.78",
  caption: { en: "Short English caption.", fr: "Courte légende en français." } },
```

- `id` must be unique.
- `species` must match an `id` in `window.BIRDS`.
- `orient` is `"landscape"` or `"portrait"`.
- `gps` is optional.

Photos newer than `newWithinDays` (90 days by default) are marked **New** automatically.
The home page "Recent additions", the counters and the "Last updated" date all update by themselves.

### Your checklist comes from eBird
The species in `window.BIRDS` were imported from your eBird export (`MyEBirdData.csv`, 15 Oct 2026).
Each species keeps your **earliest** eBird record: `first` (date), `where`, `gps`, and `checklist`
(the eBird checklist ID). The date on the site links to that checklist on ebird.org.

To update after more birding: in eBird, open My eBird → **Download My Data**, then send the new ZIP to Claude,
or add new species by hand as shown below. `listUpdated` in `window.SITE` sets the "Last updated" date.

### Add a new species to the checklist
Add a line to `window.BIRDS`. If the family is new, add it to `window.FAMILIES` too, in taxonomic order.

```js
{ id: "shoebill", family: "balaenicipitidae", en: "Shoebill", fr: "Bec-en-sabot du Nil",
  sci: "Balaeniceps rex", first: "2026-10-01", where: "Mabamba Swamp, Uganda" },
```

A species with no photo shows as an open circle (seen). It becomes a filled circle
(photographed) as soon as one entry in `PHOTOS` points to it.

On the checklist page every family is closed at first and opens with a click. The site remembers
which families a visitor opened. Searching opens the matching families automatically.
When more than 12 families have photos, the gallery's family buttons become a dropdown.

### Link straight to a species, family or story
- `gallery.html#malachite-kingfisher` shows one species' photos.
- `gallery.html#alcedinidae` shows one family's photos.
- `stories.html#dawn-at-ihema` opens one story.

### Add a new page
Copy one of the section pages, such as `mammals.html`, and change `data-page` on `<main>`.
Then add the page to the `PAGES` list at the top of `assets/js/app.js`, and add its
`nav.*` and `title.*` texts in both languages to `i18n.js`.

### Add a mammal
Put the image in `photos/mammals/` and add an entry to `window.MAMMALS`, using the same fields as a bird photo
plus `en`, `fr` and `sci` names.

### Add a story
Add an entry to `window.STORIES`. `cover` is the `id` of a photo, and `species` is a list of bird ids.
Each paragraph is one string inside `body.en` and `body.fr`.

### Change interface wording
Edit `assets/js/i18n.js`. Change only the text on the right of each line and keep the keys on the left.

### Before going live
In `content.js`:
- set your real `email`, plus `instagram` and `ebird` if you want them;
- set `showSampleNotice: false`;
- replace all sample entries with your own records.

---

## Français

### Ajouter une photo d'oiseau
1. Exportez l'image en JPG, environ **2000 px sur le grand côté** et moins de 500 Ko.
   Nommez-la en minuscules avec des tirets, par ex. `martin-pecheur-huppe-03.jpg`.
2. Copiez-la dans `photos/birds/`.
3. Ouvrez `assets/js/content.js`, repérez `window.PHOTOS = [` et ajoutez une entrée (voir l'exemple ci-dessus).
   L'ordre n'a pas d'importance, car le site trie les photos par date.

- `species` doit correspondre à un `id` de `window.BIRDS`.
- Remplissez `caption.en` **et** `caption.fr`. Si une langue manque, l'autre s'affiche à sa place.

### Ajouter une espèce
Ajoutez une ligne dans `window.BIRDS`. Pour une famille nouvelle, ajoutez-la aussi dans `window.FAMILIES`.

Sur la page de la liste, chaque famille est fermée au départ et s'ouvre d'un clic. Une recherche ouvre
automatiquement les familles concernées.

### Pages et liens directs
Le site comporte six pages : `index.html` (accueil), `checklist.html`, `gallery.html`, `mammals.html`,
`stories.html` et `about.html`. Liens directs : `gallery.html#malachite-kingfisher` (une espèce),
`gallery.html#alcedinidae` (une famille), `stories.html#dawn-at-ihema` (un récit).

### Ajouter un mammifère ou un récit
Utilisez `window.MAMMALS` (images dans `photos/mammals/`) et `window.STORIES`.

### Modifier les textes de l'interface
Modifiez `assets/js/i18n.js` en ne changeant que le texte à droite.

### Avant la mise en ligne
Indiquez votre vrai e-mail, mettez `showSampleNotice: false` et remplacez tous les exemples.

---

## Template assets (Potolia ZIP) / Éléments du modèle

The supplied ZIP is the commercial **Potolia** photography HTML template.
- **Every image in it is a grey size placeholder** (e.g. "1366x683"), and the logos are "Potolia" wordmarks. None of these are usable as photos or branding.
- Its code depends on Bootstrap 3, jQuery, Revolution Slider and many plugins, which would make the site much harder to update. This site does not use that code.
- Ideas carried over from the template: a masonry gallery, a lightbox viewer, album pages and a dark full-width hero.

**Still needed from Eddy / À fournir par Eddy:**
1. Bird photographs, ideally one strong hero image (landscape, 2400 px or more) plus at least one photo per species.
2. Mammal photographs.
3. ~~The real species list~~ Done: imported from eBird on 15 Oct 2026 (3 species so far).
4. A biography in EN and FR, and a portrait if wanted.
5. Contact email and social links.
6. Optionally, a logo or monogram. The site currently uses a simple bird-in-circle mark.
7. Real stories. The old sample entries are kept in `assets/js/content.sample.js` as examples only; the site does not load that file.
