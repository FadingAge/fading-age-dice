/* Fading Age: Looks und Farbpaletten, gemeinsam für Würfel, Charakter, SL und Ansage.
   Ein Design hat die Kennung "look.palette", zum Beispiel "eisen.0". Der Look bestimmt Schrift, Form und Oberfläche
   (siehe looks.css), die Palette die Farben. Die Palette wird hier aus fünf Grundfarben abgeleitet. */
(function () {
  "use strict";
  var FONT = {
    Vollkorn: "family=Vollkorn:ital,wght@0,400;0,500;0,600;0,700;1,400",
    "Pirata One": "family=Pirata+One",
    "Grenze Gotisch": "family=Grenze+Gotisch:wght@500;700",
    Almendra: "family=Almendra:wght@400;700",
    "Uncial Antiqua": "family=Uncial+Antiqua",
    "IM Fell English SC": "family=IM+Fell+English+SC"
  };
  // Palette: [Name, Hintergrund, Fläche, Schrift, Akzent, Zweitfarbe, (dunkel)]
  var LOOKS = {
    eisen: { name: "Eisen und Fackelschein", font: "Pirata One", scheme: "dark", pals: [
      ["Fackelschein", "#1c1b1a", "#2c2a28", "#e6dccb", "#e8832e", "#a8301c"],
      ["Frostschmiede", "#151a1f", "#222b34", "#dde6ee", "#7fb8e0", "#2f5f8f"],
      ["Grünspan", "#121a17", "#1f2d28", "#dbe8e0", "#6fc7a8", "#2a6a56"],
      ["Blutstahl", "#1d1313", "#2f1e1e", "#ecdcd6", "#e0483c", "#7a2530"],
      ["Messing", "#1b1912", "#2e2a1c", "#eadfc2", "#d9b24a", "#7a5a1c"],
      ["Amethyst", "#181420", "#2a2338", "#e4dcee", "#b48ae0", "#5a3a8a"]] },
    verlies: { name: "Verlies", font: "Uncial Antiqua", scheme: "dark", pals: [
      ["Knochen und Blut", "#0d0c0a", "#1b1916", "#d9cdb0", "#d9cdb0", "#8a1c14"],
      ["Moder", "#0b0f0a", "#171d14", "#d3dcc0", "#9fb07a", "#3a5a2a"],
      ["Frost", "#0a0d11", "#161b21", "#d6dee6", "#a8c4d8", "#2a4a6a"],
      ["Schwefel", "#0f0f08", "#1e1e12", "#e0dcb8", "#cfc65a", "#5a5a1a"],
      ["Eiter", "#0f0b12", "#1d1722", "#dfd4e6", "#b08ac0", "#5a2a6a"],
      ["Rost", "#120b08", "#241812", "#e0d0c0", "#c0703a", "#7a2a14"]] },
    pergament: { name: "Pergament und Tinte", font: "Grenze Gotisch", scheme: "light", pals: [
      ["Schwarz auf Weiß", "#f1ead8", "#e2d8bd", "#17120d", "#17120d", "#7a1f2b"],
      ["Weiß auf Dunkelrot", "#3f0d12", "#5a1a20", "#f6efe2", "#f6efe2", "#1c0a0c", 1],
      ["Weiß auf Nachtblau", "#0f1d45", "#1a2d66", "#f4f1e8", "#f4f1e8", "#070f2a", 1],
      ["Dunkelrot auf Weiß", "#f4ecdc", "#e4d6bb", "#5a0f16", "#7a1620", "#1a1410"],
      ["Dunkelblau auf Weiß", "#f0efe6", "#dcdccf", "#10224f", "#1b3a8a", "#7a1620"],
      ["Weiß auf Waldgrün", "#10301f", "#1a4a30", "#f1f0e0", "#f1f0e0", "#071a10", 1]] },
    holzschnitt: { name: "Holzschnitt", font: "Grenze Gotisch", scheme: "light", pals: [
      ["Schwarz auf Weiß", "#ece7dc", "#ddd6c6", "#141210", "#141210", "#9c1c1c"],
      ["Blaudruck", "#e4e9ea", "#cdd7da", "#14233f", "#14233f", "#b8452a"],
      ["Sepiadruck", "#eadfc6", "#d9c9a6", "#3a2414", "#3a2414", "#8a2a1a"],
      ["Waldholz", "#e3e6d3", "#cdd2b6", "#1c2a1c", "#1c2a1c", "#a03a28"],
      ["Zinnober", "#efe4d6", "#e0cdb8", "#6a1610", "#6a1610", "#141210"],
      ["Negativdruck", "#14120f", "#26231e", "#ece7dc", "#ece7dc", "#b0302a", 1]] },
    grimoire: { name: "Schwarzes Grimoire", font: "Almendra", scheme: "dark", pals: [
      ["Gold auf Schwarz", "#100c0b", "#1f1815", "#e4d8c0", "#cfa95c", "#6e1a1f"],
      ["Silber und Mitternacht", "#0b0d13", "#181c28", "#dde2ec", "#b8c2d4", "#2a3a6a"],
      ["Kupferrot", "#150d0a", "#2a1812", "#ecd9cc", "#c9754a", "#7a2a1a"],
      ["Smaragd", "#0a130f", "#15251d", "#dbe8de", "#62b88a", "#1f5a3a"],
      ["Amethyst", "#130d18", "#241a2e", "#e6dcee", "#b08ad8", "#5a2a7a"],
      ["Blutrot und Bein", "#1c0a0c", "#34141a", "#efe2cf", "#e4d6b4", "#8a1a22"]] },
    moor: { name: "Hexenmoor", font: "IM Fell English SC", scheme: "dark", pals: [
      ["Irrlicht", "#0f1a14", "#1c2a20", "#dcd8c0", "#c6d86a", "#7a4c10"],
      ["Fliegenpilz", "#1a1210", "#2c1f1a", "#e6d8c8", "#dc5a42", "#5a4a2a"],
      ["Nebelmoor", "#101619", "#1c2a30", "#d8e2e4", "#9fc4d0", "#3a5a6a"],
      ["Nachtschatten", "#15101a", "#261c2e", "#e2d8ea", "#b78ad8", "#5a2a6a"],
      ["Birke", "#14150f", "#24261a", "#e6e0cc", "#e0d6bc", "#5a6a2a"],
      ["Herbstkürbis", "#1a1408", "#2e2410", "#eadcb8", "#e0963a", "#8a3a14"]] }
  };
  var ORDER = ["eisen", "verlies", "pergament", "holzschnitt", "grimoire", "moor"];
  var DEFAULT = "eisen.0";

  function rgb(h) { h = h.replace("#", ""); return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)]; }
  function hex(c) { return "#" + c.map(function (v) { v = Math.max(0, Math.min(255, Math.round(v))); return (v < 16 ? "0" : "") + v.toString(16); }).join(""); }
  function mix(a, b, t) { var x = rgb(a), y = rgb(b); return hex([x[0] + (y[0] - x[0]) * t, x[1] + (y[1] - x[1]) * t, x[2] + (y[2] - x[2]) * t]); }
  function lum(h) { var c = rgb(h).map(function (v) { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; }

  function vars(look, pi) {
    var L = LOOKS[look], p = L.pals[pi], bg = p[1], pn = p[2], tx = p[3], ac = p[4], al = p[5];
    var light = L.scheme === "light" && !p[6];
    var v = { bg: bg, panel: pn, txt: tx, acc: ac, alt: al };
    if (light) {
      v.line = mix(pn, tx, 0.5); v.line2 = mix(pn, tx, 0.72);
      v.mut = mix(tx, bg, 0.22); v.mut2 = mix(tx, bg, 0.42);
      v.good = "#2d6a2a"; v.warn = "#8a5200"; v.bad = "#a3231c"; v.pan = "#6a2a9a"; v.fear = "#5a3a9a";
      v.tray1 = mix(tx, "#ffffff", 0.2); v.tray2 = mix(tx, "#000000", 0.4);
    } else {
      v.line = mix(pn, tx, 0.16); v.line2 = mix(pn, ac, 0.55);
      v.mut = mix(tx, bg, 0.22); v.mut2 = mix(tx, bg, 0.45);
      v.tray1 = mix(pn, ac, 0.1); v.tray2 = mix(bg, "#000000", 0.62);
      v.good = "#a6f0a0"; v.warn = "#ffd95c"; v.bad = "#ff9088"; v.pan = "#e3adff"; v.fear = "#d2baff";
      if (L.scheme === "light") { v.tray1 = mix(pn, ac, 0.06); v.tray2 = mix(bg, "#000000", 0.5); }
    }
    v.acc2 = light ? mix(ac, "#ffffff", 0.18) : mix(ac, "#ffffff", 0.24);
    v.onacc = lum(ac) > 0.3 ? mix(bg, "#000000", 0.55) : (light ? mix(bg, "#ffffff", 0.55) : "#f6efe0");
    v.alt2 = mix(al, "#ffffff", light ? 0.22 : 0.32);
    return v;
  }

  var loaded = {};
  function loadFonts(look) {
    var fam = [LOOKS[look].font, "Vollkorn"].filter(function (f, i, a) { return a.indexOf(f) === i; });
    var key = fam.join("|");
    if (loaded[key] || !document.head) return;
    loaded[key] = 1;
    var l = document.createElement("link"); l.rel = "stylesheet";
    l.href = "https://fonts.googleapis.com/css2?" + fam.map(function (f) { return FONT[f]; }).join("&") + "&display=swap";
    document.head.appendChild(l);
  }

  function parse(id) {
    var m = /^([a-z]+)\.([0-5])$/.exec(String(id || ""));
    if (m && LOOKS[m[1]]) return { look: m[1], pal: +m[2] };
    var d = DEFAULT.split("."); return { look: d[0], pal: +d[1] };
  }
  function valid(id) { var m = /^([a-z]+)\.([0-5])$/.exec(String(id || "")); return !!(m && LOOKS[m[1]]); }

  function apply(id) {
    var t = parse(id), root = document.documentElement, v = vars(t.look, t.pal), st = root.style;
    root.dataset.look = t.look; root.dataset.pal = String(t.pal);
    Object.keys(v).forEach(function (k) { st.setProperty("--" + k, v[k]); });
    var light = LOOKS[t.look].scheme === "light" && !LOOKS[t.look].pals[t.pal][6];
    root.classList.toggle("light", light);
    try { loadFonts(t.look); } catch (e) { /* ignorieren */ }
    return t.look + "." + t.pal;
  }
  // Kleine Farbprobe für die Auswahlknöpfe: [Hintergrund, Akzent, Name, Zweitfarbe]
  function swatch(look, pi) { var p = LOOKS[look].pals[pi]; return [p[1], p[4], p[0], p[5]]; }
  // Gespeichertes Design der Würfel-Extension (gemeinsamer Speicher)
  function stored() {
    try { var raw = null; try { raw = localStorage.getItem("fa-dice3"); } catch (e) { raw = null; } return JSON.parse(raw || "{}").theme; } catch (e) { return undefined; }
  }

  window.FA_LOOKS = { looks: LOOKS, order: ORDER, DEFAULT: DEFAULT, parse: parse, valid: valid, apply: apply, swatch: swatch, vars: vars, stored: stored };
  // Beim Laden sofort das gespeicherte Design setzen, damit nichts aufblitzt (die Seite kann es danach überschreiben)
  apply(stored());
})();
