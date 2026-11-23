/* Renders every page of the site from content.js and i18n.js.
   Each HTML page sets data-page on <main>; this script fills in the
   shared header, footer and photo viewer, then the parts that page has.
   You should not need to edit this file to add photos or text. */
(function () {
  "use strict";

  var SITE = window.SITE || {}, T = window.T || {};
  var FAMILIES = window.FAMILIES || [], BIRDS = window.BIRDS || [], PHOTOS = window.PHOTOS || [];
  var MAMMALS = window.MAMMALS || [], STORIES = window.STORIES || [], ABOUT = window.ABOUT || {};
  var NO_PHOTOS = !!window.NO_PHOTOS; // set by the online preview, where image files are not uploaded

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var mainEl = $("[data-page]");
  var PAGE = mainEl ? mainEl.getAttribute("data-page") : "home";

  // Menu order. To add a page: create the HTML file, add a line here and a "nav.*" text in i18n.js.
  var PAGES = [
    { id: "checklist", href: "checklist.html", t: "nav.checklist" },
    { id: "gallery", href: "gallery.html", t: "nav.gallery" },
    { id: "mammals", href: "mammals.html", t: "nav.mammals" },
    { id: "stories", href: "stories.html", t: "nav.stories" },
    { id: "about", href: "about.html", t: "nav.about" }
  ];

  /* ---------- small storage helpers (never required) ---------- */
  function load(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
  function save(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* storage unavailable */ } }

  /* ---------- language ---------- */
  var lang = load("ek-lang") || "";
  if (lang !== "en" && lang !== "fr") lang = /^fr/i.test(navigator.language || "") ? "fr" : "en";

  function t(key, vars) {
    var s = (T[lang] && T[lang][key]) || (T.en && T.en[key]) || key;
    if (vars) Object.keys(vars).forEach(function (k) { s = s.split("{" + k + "}").join(vars[k]); });
    return s;
  }
  // Picks the ".one" or ".other" form of a text; French treats 0 and 1 as singular.
  function plural(key, n) { var one = lang === "fr" ? n <= 1 : n === 1; return t(key + (one ? ".one" : ".other"), { n: n }); }
  function statLabel(k, n) { var one = lang === "fr" ? n <= 1 : n === 1; return t("stat." + k + (one ? ".one" : "")); }
  function L(o) { return o ? (o[lang] || o.en || o.fr || "") : ""; }
  function esc(s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }

  /* ---------- lookups ---------- */
  var famById = {}, famOrder = {}, birdById = {}, photosBySpecies = {}, photoById = {}, mammalById = {};
  MAMMALS.forEach(function (m) { mammalById[m.id] = m; });
  FAMILIES.forEach(function (f, i) { famById[f.id] = f; famOrder[f.id] = i; });
  BIRDS.forEach(function (b) { birdById[b.id] = b; });
  PHOTOS.forEach(function (p) { photoById[p.id] = p; (photosBySpecies[p.species] = photosBySpecies[p.species] || []).push(p); });
  // Spot common typos in content.js and explain them in the browser console (F12 → Console).
  PHOTOS.forEach(function (p) {
    if (!birdById[p.species]) console.warn('[content.js] Photo "' + p.id + '": species "' + p.species + '" is not an id in BIRDS. Use one of: ' + BIRDS.map(function (b) { return b.id; }).join(", "));
  });
  STORIES.forEach(function (s) {
    if (s.cover && !s.coverPhoto && !photoById[s.cover] && !mammalById[s.cover]) console.warn('[content.js] Story "' + s.id + '": cover "' + s.cover + '" is not a photo id in PHOTOS or MAMMALS.');
  });
  BIRDS.forEach(function (b) {
    if (!famById[b.family]) console.warn('[content.js] Bird "' + b.id + '": family "' + b.family + '" is not an id in FAMILIES.');
  });
  var byDateDesc = function (a, b) { return (b.date || "").localeCompare(a.date || ""); };
  var photosNewest = PHOTOS.slice().sort(byDateDesc);
  var famOf = function (p) { return (birdById[p.species] || {}).family; };

  function toDate(d) { return d ? new Date(d + "T12:00:00") : null; }
  function fmtDate(d) {
    var x = toDate(d); if (!x || isNaN(x)) return "";
    return new Intl.DateTimeFormat(lang === "fr" ? "fr-FR" : "en-GB", { day: "numeric", month: "short", year: "numeric" }).format(x);
  }
  function isNew(d) {
    var x = toDate(d); if (!x) return false;
    return (Date.now() - x.getTime()) / 864e5 <= (SITE.newWithinDays || 90);
  }
  var newTag = function (d) { return isNew(d) ? ' <span class="new-tag">' + esc(t("new")) + "</span>" : ""; };

  /* ---------- photo frame with placeholder plate ---------- */
  function hueFor(item) {
    if (item.species && birdById[item.species]) { var f = famById[birdById[item.species].family]; return f ? f.hue : 150; }
    return 32; // mammals: warm savanna tint
  }
  // opts.eager: load right away (the home-page photo); opts.focus: CSS object-position, e.g. "60% 40%".
  function frame(item, cls, opts) {
    opts = opts || {};
    var name = item.title || "", sci = item.sci || "";
    // A missing file shows its path (useful while editing); an empty section just says "coming soon".
    var plate = '<div class="plate" aria-hidden="true">' +
      '<span class="plate-tag">' + esc(t(item.src ? "photo.missing" : "empty.soon")) + "</span>" +
      '<span class="plate-name">' + esc(name) + "</span>" +
      (sci ? '<span class="plate-sci">' + esc(sci) + "</span>" : "") +
      (item.src ? '<span class="plate-file">' + esc(item.src) + "</span>" : "") + "</div>";
    // SITE.photoVersion: change it after replacing a photo file under the same name, so browsers reload it.
    var url = item.src + (SITE.photoVersion ? "?v=" + encodeURIComponent(SITE.photoVersion) : "");
    var img = (!NO_PHOTOS && item.src) ? '<img src="' + esc(url) + '" alt="' + esc(name + (item.place ? ", " + item.place : "")) + '"' +
      (opts.eager ? ' loading="eager" fetchpriority="high"' : ' loading="lazy"') +
      (opts.focus || opts.zoom ? ' style="' + (opts.focus ? 'object-position:' + esc(opts.focus) + ';' : '') + (opts.zoom > 1 ? 'transform:scale(' + (+opts.zoom) + ');transform-origin:' + esc(opts.focus || '50% 50%') : '') + '"' : "") + ' decoding="async">' : "";
    return '<div class="ph ' + (cls || "") + (img ? "" : " is-missing") + '" style="--h:' + hueFor(item) + '">' + plate + img + "</div>";
  }
  // Show the plate only when there is no usable image: hide it once a photo loads, keep it if the file is missing.
  document.addEventListener("load", function (e) {
    var el = e.target; if (el && el.tagName === "IMG" && el.parentNode && el.parentNode.classList) el.parentNode.classList.add("is-loaded");
  }, true);
  document.addEventListener("error", function (e) {
    var el = e.target; if (el && el.tagName === "IMG" && el.parentNode && el.parentNode.classList) {
      el.parentNode.classList.add("is-missing");
      if (!NO_PHOTOS) console.warn("[content.js] Image not found: " + el.getAttribute("src") + " (check the file name and folder).");
    }
  }, true);
  function sweepImages(root) {
    $$("img", root).forEach(function (img) {
      if (!img.complete) return;
      img.parentNode.classList.add(img.naturalWidth === 0 ? "is-missing" : "is-loaded");
    });
  }

  /* ---------- normalised items for cards and the viewer ---------- */
  function birdItem(p) {
    var b = birdById[p.species] || {};
    return { kind: "bird", id: p.id, species: p.species, src: p.src, orient: p.orient || "landscape",
      title: b[lang] || b.en || p.species, alt: lang === "en" ? b.fr : b.en, sci: b.sci,
      caption: L(p.caption), place: p.place, gps: p.gps, date: p.date };
  }
  function mammalItem(m) {
    return { kind: "mammal", id: m.id, src: m.src, orient: m.orient || "landscape",
      title: m[lang] || m.en, alt: lang === "en" ? m.fr : m.en, sci: m.sci,
      caption: L(m.caption), place: m.place, gps: m.gps, date: m.date };
  }
  function card(it, i, extra) {
    return '<button type="button" class="card" data-i="' + i + '">' + frame(it, it.orient) +
      '<span class="card-name">' + esc(it.title) + newTag(it.date) + "</span>" + (extra || "") +
      '<span class="card-meta mono">' + esc([it.place, fmtDate(it.date)].filter(Boolean).join(" · ")) + "</span></button>";
  }
  function emptyNote(key) { return '<p class="empty-note">' + esc(t(key)) + "</p>"; }
  function bindCards(sel, items) {
    $$(sel + " .card").forEach(function (b) { b.onclick = function () { openLightbox(items, +b.dataset.i); }; });
  }

  /* ---------- shared header, footer, dialogs ---------- */
  function renderChrome() {
    var head = $("#site-header");
    if (head) head.innerHTML =
      '<a class="skip" href="#main">' + esc(t("skip")) + "</a>" +
      '<div id="sample-bar" class="sample-bar"' + (SITE.showSampleNotice ? "" : " hidden") + ">" + esc(t("sample")) + "</div>" +
      '<header class="topbar"><div class="wrap topbar-in">' +
        '<a class="brand" href="index.html" aria-label="' + esc(t("nav.home")) + '">' +
          '<svg class="brand-mark" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="14.5" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M7 19c4-1 6-5 10-6 3-.8 5 .2 7 2l2-.6-1.6 1.8c-.6 3-3 5-6.4 5H11z" fill="currentColor"/></svg>' +
          '<span class="brand-name"><span>' + esc(SITE.name || "Eddy Kadi") + '</span><span class="brand-sub">' + esc(t("brand.sub")) + "</span></span></a>" +
        '<nav class="nav" aria-label="' + esc(t("nav.label")) + '">' + PAGES.map(function (p) {
          return '<a href="' + p.href + '"' + (p.id === PAGE ? ' aria-current="page"' : "") + ">" + esc(t(p.t)) + "</a>";
        }).join("") + "</nav>" +
        '<div class="lang" role="group" aria-label="Language / Langue">' +
          '<button type="button" data-lang="en" lang="en" aria-pressed="' + (lang === "en") + '">EN</button>' +
          '<button type="button" data-lang="fr" lang="fr" aria-pressed="' + (lang === "fr") + '">FR</button></div>' +
      "</div></header>";

    var foot = $("#site-footer");
    if (foot) {
      var dates = PHOTOS.concat(MAMMALS, STORIES).map(function (x) { return x.date || ""; })
        .concat(BIRDS.map(function (b) { return b.first || ""; }), [SITE.listUpdated || ""]).sort();
      foot.innerHTML = '<footer class="footer"><div class="wrap footer-in">' +
        '<nav class="footer-nav" aria-label="' + esc(t("nav.label")) + '"><a href="index.html">' + esc(t("nav.home")) + "</a>" +
          PAGES.map(function (p) { return '<a href="' + p.href + '">' + esc(t(p.t)) + "</a>"; }).join("") + "</nav>" +
        "<p>" + esc(t("footer.rights", { year: SITE.copyrightYear || new Date().getFullYear(), name: SITE.name || "" })) + "</p>" +
        (dates.length ? '<p class="mono">' + esc(t("footer.updated")) + (lang === "fr" ? " : " : ": ") + esc(fmtDate(dates[dates.length - 1])) + "</p>" : "") +
        "</div></footer>";
    }

    var pageTitle = PAGE === "home" ? "" : t("title." + PAGE) + " · ";
    document.title = pageTitle + (SITE.name || "Eddy Kadi") + (lang === "fr" ? " : " : ": ") + t("brand.sub");
    document.documentElement.lang = lang;
  }

  function ensureDialogs() {
    if ($("#lightbox")) return;
    var wrap = document.createElement("div");
    wrap.innerHTML =
      '<dialog class="lightbox" id="lightbox" aria-label="Photo"><div class="lb-frame" id="lb-media"></div><div class="lb-info" id="lb-info"></div>' +
      '<button type="button" class="lb-btn lb-close" id="lb-close" data-aria="lb.close">×</button>' +
      '<button type="button" class="lb-btn lb-prev" id="lb-prev" data-aria="lb.prev">‹</button>' +
      '<button type="button" class="lb-btn lb-next" id="lb-next" data-aria="lb.next">›</button></dialog>' +
      '<dialog class="reader" id="reader" aria-label="Story"><div id="reader-body"></div>' +
      '<button type="button" class="lb-btn reader-close" id="reader-close" data-aria="lb.close">×</button></dialog>';
    while (wrap.firstChild) document.body.appendChild(wrap.firstChild);
    $("#lb-close").onclick = function () { $("#lightbox").close(); };
    $("#lb-prev").onclick = function () { step(-1); };
    $("#lb-next").onclick = function () { step(1); };
    $("#reader-close").onclick = function () { $("#reader").close(); };
    ["#lightbox", "#reader"].forEach(function (s) {
      $(s).addEventListener("click", function (e) { if (e.target === e.currentTarget) e.currentTarget.close(); });
    });
    document.addEventListener("keydown", function (e) {
      if (!$("#lightbox").open) return;
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    });
  }

  function renderStatic() {
    $$("[data-t]").forEach(function (el) { el.textContent = t(el.getAttribute("data-t")); });
    $$("[data-ph]").forEach(function (el) { el.placeholder = t(el.getAttribute("data-ph")); });
    $$("[data-aria]").forEach(function (el) { el.setAttribute("aria-label", t(el.getAttribute("data-aria"))); });
    $$("[data-site-name]").forEach(function (el) { el.textContent = SITE.name || "Eddy Kadi"; });
  }

  /* ---------- home ---------- */
  function statsHtml(keys) {
    var photographed = BIRDS.filter(function (b) { return photosBySpecies[b.id]; }).length;
    var fams = {}; BIRDS.forEach(function (b) { fams[b.family] = 1; });
    var v = { species: BIRDS.length, photographed: photographed, families: Object.keys(fams).length, photos: PHOTOS.length };
    return keys.map(function (k) { return '<div class="stat"><b>' + v[k] + "</b><span>" + esc(statLabel(k, v[k])) + "</span></div>"; }).join("");
  }
  function renderHome() {
    var p = photoById[SITE.heroPhoto] || photosNewest[0];
    $("#hero-photo").innerHTML = frame(p ? birdItem(p) : { title: "" }, "", { eager: true, focus: (p && p.focus) || SITE.heroFocus });
    var cap = $("#hero-caption");
    if (photosNewest.length) {
      var latest = birdItem(photosNewest[0]);
      cap.innerHTML = '<span class="mono">' + esc(t("hero.latest")) + "</span><strong>" + esc(latest.title) + '</strong><span class="mono">' + esc([latest.place, fmtDate(latest.date)].filter(Boolean).join(" · ")) + "</span>";
      cap.setAttribute("role", "button"); cap.tabIndex = 0;
      cap.onclick = function () { openLightbox(photosNewest.map(birdItem), 0); };
      cap.onkeydown = function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); cap.onclick(); } };
    } else if (BIRDS.length) {
      // No photos yet: point to the most recent new species on the checklist instead.
      var sp = BIRDS.slice().sort(function (a, b) { return (b.first || "").localeCompare(a.first || ""); })[0];
      cap.innerHTML = '<a class="hero-cap-link" href="checklist.html"><span class="mono">' + esc(t("hero.latestSpecies")) + "</span><strong>" + esc(sp[lang]) + '</strong><span class="mono">' + esc([sp.where, fmtDate(sp.first)].filter(Boolean).join(" · ")) + "</span></a>";
    }
    $("#stats").innerHTML = statsHtml(["species", "photographed", "families", "photos"]);

    var recent = photosNewest.slice(0, 8).map(birdItem);
    $("#recent-strip").innerHTML = recent.map(function (it, i) {
      return '<button type="button" class="tile" data-i="' + i + '">' + frame(it) +
        '<span class="tile-name">' + esc(it.title) + "</span>" +
        '<span class="tile-meta mono">' + esc(fmtDate(it.date)) + newTag(it.date) + "</span></button>";
    }).join("");
    if (!recent.length) $("#recent-strip").innerHTML = emptyNote("empty.photos");
    $$("#recent-strip .tile").forEach(function (b) { b.onclick = function () { openLightbox(recent, +b.dataset.i); }; });

    var mammalSpecies = Object.keys(MAMMALS.reduce(function (o, m) { o[m.sci || m.en] = 1; return o; }, {})).length;
    var story = STORIES.slice().sort(byDateDesc)[0];
    var cover = function (x) { return x ? birdItem(x) : { title: "" }; };
    // Checklist card photo on the home page: always the same latest photo as the main picture.
    var checklistCard = { item: cover(p), focus: (p && p.focus) || SITE.heroFocus || "", zoom: 0 };
    var cards = [
      { href: "checklist.html", key: "checklist", n: BIRDS.length, unit: statLabel("species", BIRDS.length), item: checklistCard.item, focus: checklistCard.focus, zoom: checklistCard.zoom },
      { href: "gallery.html", key: "gallery", n: PHOTOS.length, unit: statLabel("photos", PHOTOS.length), item: cover(photosNewest[2] || photosNewest[0]) },
      { href: "mammals.html", key: "mammals", n: mammalSpecies, unit: t("explore.mammals.unit" + ((lang === "fr" ? mammalSpecies <= 1 : mammalSpecies === 1) ? ".one" : "")), item: MAMMALS.length ? mammalItem(MAMMALS.slice().sort(byDateDesc)[0]) : { title: "" } },
      { href: "stories.html", key: "stories", n: STORIES.length, unit: t("explore.stories.unit"), item: story ? storyCover(story) : { title: "" } }
    ];
    $("#explore").innerHTML = cards.map(function (c) {
      return '<a class="ex-card" href="' + c.href + '">' + frame(c.item, "", { focus: c.focus, zoom: c.zoom }) +
        '<span class="ex-num mono">' + (c.n ? c.n + " " + esc(c.unit) : esc(t("empty.soon"))) + "</span>" +
        "<h3>" + esc(t("nav." + c.key)) + ' <span aria-hidden="true">→</span></h3><p>' + esc(t("explore." + c.key)) + "</p></a>";
    }).join("");
  }

  /* ---------- checklist (families fold open and closed) ---------- */
  var openFams = {};
  (load("ek-open-fams") || "").split(",").forEach(function (id) { if (id) openFams[id] = true; });
  function saveOpen() { save("ek-open-fams", Object.keys(openFams).filter(function (k) { return openFams[k]; }).join(",")); }
  function norm(s) { return String(s || "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, ""); }

  function speciesRow(b) {
    var n = (photosBySpecies[b.id] || []).length;
    var btn = n ? '<a class="sp-photos" href="gallery.html#' + b.id + '">' + n + " " + esc(t(n === 1 ? "checklist.photo" : "checklist.photos")) + " →</a>"
                : '<span class="sp-photos is-none">' + esc(t("checklist.none")) + "</span>";
    return '<div class="sp' + (n ? " has-photo" : "") + '"><span class="sp-mark" aria-hidden="true"></span>' +
      '<span class="sp-name">' + esc(b[lang]) + '<span class="sp-alt" lang="' + (lang === "en" ? "fr" : "en") + '">' + esc(lang === "en" ? b.fr : b.en) + "</span></span>" +
      '<span class="sp-sci">' + esc(b.sci) + "</span>" +
      '<span class="sp-first mono" title="' + esc(t("checklist.first") + (b.gps ? " · " + b.gps : "")) + '">' +
        (b.checklist ? '<a href="https://ebird.org/checklist/' + encodeURIComponent(b.checklist) + '" target="_blank" rel="noopener" aria-label="' + esc(t("checklist.ebird")) + '">' : "") +
        esc(fmtDate(b.first)) + (b.where ? " · " + esc(b.where) : "") + (b.checklist ? " ↗</a>" : "") + "</span>" + btn + "</div>";
  }
  // Photo at the top of the checklist page (SITE.checklistPhoto), drawn once.
  function checklistHeadPhoto() {
    var box = $("#cl-photo"); if (!box || box.dataset.done) return;
    var cp = SITE.checklistPhoto || "", p = photoById[cp];
    var item = p ? birdItem(p) : (cp.indexOf("/") > -1 ? { src: cp, title: t("nav.checklist") } : null);
    if (!item) { box.hidden = true; return; }
    box.innerHTML = frame(item, "", { eager: true, focus: SITE.checklistFocus || (p && p.focus) || "" });
    box.parentNode.classList.add("has-photo"); box.dataset.done = "1"; sweepImages(box);
  }
  function renderChecklist() {
    checklistHeadPhoto();
    $("#cl-stats").innerHTML = statsHtml(["species", "photographed", "families"]);
    var q = norm($("#cl-q").value.trim()), st = $("#cl-status").value, sort = $("#cl-sort").value;
    var filtering = !!q || st !== "all";
    var list = BIRDS.filter(function (b) {
      var has = !!photosBySpecies[b.id];
      if (st === "photo" && !has) return false;
      if (st === "nophoto" && has) return false;
      if (q && norm(b.en + " " + b.fr + " " + b.sci + " " + (famById[b.family] ? famById[b.family].en + " " + famById[b.family].fr + " " + famById[b.family].sci : "")).indexOf(q) === -1) return false;
      return true;
    });
    $("#cl-count").textContent = t("checklist.count", { n: list.length, t: BIRDS.length });
    $("#cl-tools-fold").hidden = sort === "alpha";
    var body = $("#checklist-body");
    if (!list.length) { body.innerHTML = '<p class="cl-empty">' + esc(t("checklist.empty")) + "</p>"; return; }

    if (sort === "alpha") {
      list.sort(function (a, b) { return a[lang].localeCompare(b[lang], lang); });
      body.innerHTML = '<div class="fam-flat">' + list.map(speciesRow).join("") + "</div>";
      return;
    }
    var groups = {};
    list.forEach(function (b) { (groups[b.family] = groups[b.family] || []).push(b); });
    body.innerHTML = Object.keys(groups).sort(function (a, b) { return (famOrder[a] || 0) - (famOrder[b] || 0); }).map(function (fid) {
      var f = famById[fid] || { sci: fid, en: fid, fr: fid };
      var all = BIRDS.filter(function (b) { return b.family === fid; });
      var shot = all.filter(function (b) { return photosBySpecies[b.id]; }).length;
      var pct = all.length ? Math.round(shot / all.length * 100) : 0;
      var famPhotos = PHOTOS.some(function (p) { return famOf(p) === fid; });
      var open = filtering || openFams[fid];
      return '<details class="fam" data-fam="' + esc(fid) + '"' + (open ? " open" : "") + ">" +
        '<summary><span class="fam-chev" aria-hidden="true"></span>' +
          '<span class="fam-title"><span class="fam-name">' + esc(L(f)) + '</span><span class="sci">' + esc(f.sci) + "</span></span>" +
          '<span class="fam-meta"><span class="mono">' + esc(plural("checklist.famSpecies", all.length) + " · " + plural("checklist.famShot", shot)) + "</span>" +
          '<span class="fam-bar" aria-hidden="true"><i style="width:' + pct + '%"></i></span></span></summary>' +
        '<div class="fam-body">' + groups[fid].map(speciesRow).join("") +
          (famPhotos ? '<p class="fam-foot"><a href="gallery.html#' + esc(fid) + '">' + esc(t("checklist.famPhotos", { f: L(f) })) + " →</a></p>" : "") +
        "</div></details>";
    }).join("");
    $$("#checklist-body details.fam").forEach(function (d) {
      d.addEventListener("toggle", function () {
        if (filtering) return; // auto-opened by a search; don't remember it
        openFams[d.dataset.fam] = d.open; saveOpen();
      });
    });
  }
  function setAllFamilies(open) {
    FAMILIES.forEach(function (f) { openFams[f.id] = open; });
    saveOpen();
    $$("#checklist-body details.fam").forEach(function (d) { d.open = open; });
  }

  /* ---------- gallery ---------- */
  var galFamily = "all", galSpecies = null, galLimit = 12;
  function readGalleryHash() {
    var h = decodeURIComponent((location.hash || "").slice(1));
    galSpecies = birdById[h] ? h : null;
    galFamily = famById[h] ? h : "all";
    galLimit = galSpecies ? 999 : 12;
  }
  function setGalleryHash(id) {
    try { history.replaceState(null, "", id ? "#" + id : location.pathname + location.search); } catch (e) { /* not allowed here */ }
  }
  function renderGallery() {
    var famsWithPhotos = FAMILIES.filter(function (f) { return PHOTOS.some(function (p) { return famOf(p) === f.id; }); });
    var counts = {}; PHOTOS.forEach(function (p) { counts[famOf(p)] = (counts[famOf(p)] || 0) + 1; });
    var filt = $("#gal-filter");
    if (!PHOTOS.length) {
      filt.innerHTML = ""; $("#gal-pin").hidden = true;
      $("#gal-grid").innerHTML = emptyNote("empty.photos");
      $("#gal-more").parentNode.hidden = true;
      return;
    }
    if (famsWithPhotos.length > 12) {
      // Many families: a dropdown keeps the filter compact.
      filt.innerHTML = '<label class="field"><span>' + esc(t("checklist.family")) + '</span><select id="gal-select"><option value="all">' + esc(t("checklist.allFamilies")) + " (" + PHOTOS.length + ")</option>" +
        famsWithPhotos.map(function (f) { return '<option value="' + f.id + '"' + (galFamily === f.id ? " selected" : "") + ">" + esc(L(f)) + " (" + counts[f.id] + ")</option>"; }).join("") + "</select></label>";
      $("#gal-select").onchange = function () { galFamily = this.value; galSpecies = null; galLimit = 12; setGalleryHash(galFamily === "all" ? "" : galFamily); renderGallery(); };
    } else {
      filt.innerHTML = '<div class="chips" role="group" aria-label="' + esc(t("checklist.family")) + '">' +
        [{ id: "all", label: t("gallery.all"), n: PHOTOS.length }].concat(famsWithPhotos.map(function (f) { return { id: f.id, label: L(f), n: counts[f.id] }; })).map(function (c) {
          return '<button type="button" class="chip" data-f="' + c.id + '" aria-pressed="' + (!galSpecies && galFamily === c.id) + '">' + esc(c.label) + "<small>" + c.n + "</small></button>";
        }).join("") + "</div>";
      $$("#gal-filter .chip").forEach(function (b) { b.onclick = function () { galFamily = b.dataset.f; galSpecies = null; galLimit = 12; setGalleryHash(galFamily === "all" ? "" : galFamily); renderGallery(); }; });
    }

    var pin = $("#gal-pin");
    if (galSpecies) {
      var b = birdById[galSpecies];
      pin.hidden = false;
      pin.innerHTML = '<span class="mono">' + esc(t("gallery.species")) + "</span><strong>" + esc(b[lang]) + '</strong><span class="sci">' + esc(b.sci) + '</span><button type="button" class="chip" id="gal-clear">' + esc(t("gallery.clear")) + "</button>";
      $("#gal-clear").onclick = function () { galSpecies = null; galLimit = 12; setGalleryHash(""); renderGallery(); };
    } else { pin.hidden = true; pin.innerHTML = ""; }

    var list = photosNewest.filter(function (p) {
      if (galSpecies) return p.species === galSpecies;
      return galFamily === "all" || famOf(p) === galFamily;
    }).map(birdItem);
    $("#gal-grid").innerHTML = list.slice(0, galLimit).map(function (it, i) { return card(it, i); }).join("");
    bindCards("#gal-grid", list);
    var more = $("#gal-more");
    more.parentNode.hidden = list.length <= galLimit;
    more.onclick = function () { galLimit += 12; renderGallery(); };
    sweepImages($("#gal-grid"));
  }

  /* ---------- mammals ---------- */
  // One block per species: names and record details once, then its photos (a large lead image and smaller ones).
  function renderMammals() {
    var groups = {}, order = [];
    MAMMALS.slice().sort(byDateDesc).forEach(function (m) {
      var key = m.sci || m.en;
      if (!groups[key]) { groups[key] = []; order.push(key); }
      groups[key].push(m);
    });
    var lists = {};
    var html = order.map(function (key, gi) {
      var ms = groups[key], first = ms[0], items = ms.map(mammalItem);
      lists[gi] = items;
      var places = ms.map(function (m) { return m.place; }).filter(function (p, i, a) { return p && a.indexOf(p) === i; });
      var dates = ms.map(function (m) { return m.date; }).filter(Boolean).sort();
      var when = dates.length ? (dates[0] === dates[dates.length - 1] ? fmtDate(dates[0]) : fmtDate(dates[0]) + " – " + fmtDate(dates[dates.length - 1])) : "";
      var n = ms.length, cols = n === 1 ? 1 : n === 2 ? 2 : Math.min(2 + Math.ceil((n - 1) / 2), 6);
      return '<section class="mam" id="' + esc(slug(key)) + '">' +
        '<header class="mam-head"><h2>' + esc(first[lang] || first.en) + "</h2>" +
          '<p class="mam-alt" lang="' + (lang === "en" ? "fr" : "en") + '">' + esc(lang === "en" ? first.fr : first.en) + "</p>" +
          '<p class="sci">' + esc(first.sci || "") + "</p>" +
          '<p class="mam-meta mono">' + [places.join(" · "), when, n + " " + esc(t(n === 1 ? "checklist.photo" : "checklist.photos"))].filter(Boolean).map(function (s) { return "<span>" + s + "</span>"; }).join("") + "</p>" +
          (isNew(dates[dates.length - 1]) ? newTag(dates[dates.length - 1]) : "") +
        "</header>" +
        '<div class="mam-photos' + (n >= 3 ? " has-lead" : "") + '" style="--cols:' + cols + '">' + items.map(function (it, i) {
          return '<button type="button" class="mam-thumb" data-g="' + gi + '" data-i="' + i + '" aria-label="' + esc(it.title + (it.caption ? ": " + it.caption : "")) + '">' + frame(it) + "</button>";
        }).join("") + "</div></section>";
    }).join("");
    $("#mammal-grid").innerHTML = html || emptyNote("empty.mammals");
    $$("#mammal-grid .mam-thumb").forEach(function (b) { b.onclick = function () { openLightbox(lists[b.dataset.g], +b.dataset.i); }; });
  }
  function slug(s) { return String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""); }

  /* ---------- stories ---------- */
  function storyCover(s) {
    if (s.coverPhoto && s.coverPhoto.src) return { src: s.coverPhoto.src, orient: s.coverPhoto.orient || "landscape", title: L(s.title), place: s.place, date: s.date };
    var p = photoById[s.cover], m = mammalById[s.cover]; return p ? birdItem(p) : m ? mammalItem(m) : { title: L(s.title), src: "" };
  }
  function renderStories() {
    var list = STORIES.slice().sort(byDateDesc);
    $("#story-list").innerHTML = list.map(function (s) {
      return '<button type="button" class="story" data-id="' + esc(s.id) + '">' + frame(storyCover(s)) +
        '<span class="story-txt"><span class="story-loc mono">' + esc(fmtDate(s.date)) + " · " + esc(s.place || "") + newTag(s.date) + "</span>" +
        "<h2>" + esc(L(s.title)) + '</h2><span class="story-dek">' + esc(L(s.dek)) + '</span><span class="story-go">' + esc(t("stories.read")) + " →</span></span></button>";
    }).join("") || emptyNote("empty.stories");
    $$("#story-list .story").forEach(function (b) { b.onclick = function () { openStory(b.dataset.id); }; });
  }
  var openStoryId = null;
  function openStory(id) {
    var s = STORIES.filter(function (x) { return x.id === id; })[0]; if (!s) return;
    openStoryId = id;
    var paras = (s.body && (s.body[lang] || s.body.en)) || [];
    var sp = (s.species || []).filter(function (x) { return birdById[x]; });
    // Optional extra photos for a story: photos: [{ src, orient, caption: { en, fr } }]
    var pics = (s.photos || []).map(function (p) {
      var cap = L(p.caption);
      return '<figure class="story-fig' + (p.orient && p.orient !== "landscape" ? " is-" + esc(p.orient) : "") + '">' +
        frame({ src: p.src, title: cap || L(s.title), place: s.place }, p.orient) +
        (cap ? "<figcaption>" + esc(cap) + "</figcaption>" : "") + "</figure>";
    }).join("");
    $("#reader-body").innerHTML = frame(storyCover(s)) + '<div class="reader-in"><p class="mono">' + esc(fmtDate(s.date)) + " · " + esc(s.place || "") + (s.gps ? " · " + esc(s.gps) : "") + "</p>" +
      "<h2>" + esc(L(s.title)) + '</h2><div class="prose">' + paras.map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("") + "</div>" +
      (pics ? '<div class="story-figs">' + pics + "</div>" : "") +
      (sp.length ? '<div class="reader-species"><span class="mono">' + esc(t("stories.species")) + "</span>" + sp.map(function (x) {
        return '<a class="chip" href="gallery.html#' + x + '">' + esc(birdById[x][lang]) + "</a>";
      }).join("") + "</div>" : "") + "</div>";
    openDialog($("#reader"));
  }

  /* ---------- about ---------- */
  function renderAbout() {
    $("#about-body").innerHTML = (ABOUT[lang] || ABOUT.en || []).map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
    var c = "<h2>" + esc(t("contact.title")) + "</h2>";
    if (SITE.email) c += '<div class="contact-row"><code id="email-text">' + esc(SITE.email) + '</code><button type="button" id="copy-email">' + esc(t("contact.copy")) + "</button></div>";
    if (SITE.instagram) c += '<a href="' + esc(SITE.instagram) + '" target="_blank" rel="noopener">Instagram ↗</a>';
    if (SITE.ebird) c += '<a href="' + esc(SITE.ebird) + '" target="_blank" rel="noopener">eBird ↗</a>';
    $("#contact").innerHTML = c;
    var cb = $("#copy-email");
    if (cb) cb.onclick = function () {
      var done = function () { cb.textContent = t("contact.copied"); setTimeout(function () { cb.textContent = t("contact.copy"); }, 1600); };
      var fallback = function () { var r = document.createRange(); r.selectNodeContents($("#email-text")); var s = getSelection(); s.removeAllRanges(); s.addRange(r); };
      try { navigator.clipboard.writeText(SITE.email).then(done, fallback); } catch (e) { fallback(); }
    };
  }

  /* ---------- photo viewer ---------- */
  var lbList = [], lbIdx = 0;
  function openDialog(d) { if (d.showModal) { if (!d.open) d.showModal(); } else d.setAttribute("open", ""); sweepImages(d); }
  function openLightbox(list, i) { lbList = list; lbIdx = i; drawLightbox(); openDialog($("#lightbox")); }
  function drawLightbox() {
    var it = lbList[lbIdx]; if (!it) return;
    $("#lb-media").innerHTML = frame(it, "");
    $("#lb-info").innerHTML = "<h3>" + esc(it.title) + newTag(it.date) + "</h3>" +
      '<p><span class="sci">' + esc(it.sci || "") + "</span>" + (it.alt ? " · " + esc(it.alt) : "") + "</p>" +
      (it.caption ? '<p class="lb-cap">' + esc(it.caption) + "</p>" : "") +
      '<p class="mono">' + (it.place ? "<span>" + esc(it.place) + "</span>" : "") + "<span>" + esc(fmtDate(it.date)) + "</span>" + (it.gps ? "<span>" + esc(it.gps) + "</span>" : "") +
      "<span>" + (lbIdx + 1) + " / " + lbList.length + "</span></p>";
    $("#lb-prev").hidden = $("#lb-next").hidden = lbList.length < 2;
    sweepImages($("#lb-media"));
  }
  function step(d) { lbIdx = (lbIdx + d + lbList.length) % lbList.length; drawLightbox(); }

  /* ---------- wiring ---------- */
  var RENDER = { home: renderHome, checklist: renderChecklist, gallery: renderGallery, mammals: renderMammals, stories: renderStories, about: renderAbout };
  function renderAll() {
    renderChrome(); renderStatic();
    if (RENDER[PAGE]) RENDER[PAGE]();
    sweepImages(document);
  }
  document.addEventListener("click", function (e) {
    var b = e.target.closest && e.target.closest("[data-lang]");
    if (!b) return;
    lang = b.getAttribute("data-lang"); save("ek-lang", lang);
    // Lightbox items carry text in the old language, so close it before re-rendering.
    if ($("#lightbox").open) $("#lightbox").close();
    renderAll();
    if (PAGE === "stories" && $("#reader").open && openStoryId) openStory(openStoryId);
  });

  ensureDialogs();
  if (PAGE === "checklist") {
    ["#cl-q", "#cl-status", "#cl-sort"].forEach(function (s) { $(s).addEventListener("input", renderChecklist); });
    $("#cl-filters").addEventListener("submit", function (e) { e.preventDefault(); });
    $("#cl-expand").onclick = function () { setAllFamilies(true); };
    $("#cl-collapse").onclick = function () { setAllFamilies(false); };
  }
  if (PAGE === "gallery") {
    readGalleryHash();
    window.addEventListener("hashchange", function () { readGalleryHash(); renderGallery(); });
  }
  renderAll();
  if (PAGE === "stories") {
    var h = decodeURIComponent((location.hash || "").slice(1));
    if (h) openStory(h);
  }
})();
