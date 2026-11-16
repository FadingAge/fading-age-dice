/* Fading Age: Looks und Farbpaletten, gemeinsam für Würfel, Charakter, SL und Ansage.
   Ein Design hat die Kennung "look.palette", zum Beispiel "eisen.0". Der Look bestimmt Schrift, Form und Oberfläche
   (siehe looks.css), die Palette die Farben. Eine Palette besteht aus genau zwei Farben (Grund und Tinte), alles andere wird daraus gemischt. */
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
  // Jede Palette besteht aus genau zwei Farben: [Name, Grund, Tinte]. Alles andere (Flächen, Linien, Knöpfe) sind Mischungen aus diesen beiden.
  var LOOKS = {
    eisen: { name: "Eisen und Fackelschein", font: "Pirata One", pals: [
      ["Schwarz und Orange", "#171513", "#ff9f45"],
      ["Eisen und Weiß", "#1f2124", "#eef0f2"],
      ["Nachtblau und Eisblau", "#0f1a2b", "#b9dcff"],
      ["Dunkelgrün und Mint", "#0f1f1a", "#a9f0d0"],
      ["Blutrot und Weiß", "#3a0e0e", "#f6e6e0"],
      ["Schwarz und Gold", "#15130c", "#efc95c"]] },
    verlies: { name: "Verlies", font: "Uncial Antiqua", pals: [
      ["Schwarz und Knochen", "#0c0b0a", "#e6dcc2"],
      ["Moder und Moos", "#0e140d", "#d6e6b0"],
      ["Schwarz und Frost", "#0a0e13", "#bcd6ea"],
      ["Schwefel", "#0f0f08", "#e2dc6a"],
      ["Aubergine und Eiter", "#120d16", "#d9bdea"],
      ["Rost", "#130b07", "#e0905a"]] },
    pergament: { name: "Pergament und Tinte", font: "Grenze Gotisch", pals: [
      ["Schwarz auf Weiß", "#f1ead8", "#17120d"],
      ["Weiß auf Dunkelrot", "#4a0f15", "#f6efe2"],
      ["Weiß auf Nachtblau", "#0f1d45", "#f4f1e8"],
      ["Dunkelrot auf Weiß", "#f4ecdc", "#6a1018"],
      ["Dunkelblau auf Weiß", "#f0efe6", "#14286a"],
      ["Weiß auf Waldgrün", "#10301f", "#f1f0e0"]] },
    holzschnitt: { name: "Holzschnitt", font: "Grenze Gotisch", pals: [
      ["Schwarz auf Weiß", "#ece7dc", "#141210"],
      ["Blaudruck", "#e4e9ea", "#14233f"],
      ["Sepia", "#eadfc6", "#3a2414"],
      ["Waldholz", "#e3e6d3", "#1c3a1c"],
      ["Zinnober", "#efe4d6", "#7a1610"],
      ["Negativdruck", "#14120f", "#ece7dc"]] },
    grimoire: { name: "Schwarzes Grimoire", font: "Almendra", pals: [
      ["Schwarz und Gold", "#100c0b", "#d4af62"],
      ["Schwarz und Silber", "#0b0d12", "#cdd6e4"],
      ["Schwarz und Kupfer", "#150d0a", "#d9855a"],
      ["Smaragd und Jade", "#0a1a13", "#8fe0b0"],
      ["Aubergine und Flieder", "#170f1d", "#ceaaf0"],
      ["Oxblut und Bein", "#2a0a0e", "#ecdcc0"]] },
    moor: { name: "Hexenmoor", font: "IM Fell English SC", pals: [
      ["Moor und Irrlicht", "#0f1a14", "#cfe070"],
      ["Erde und Fliegenpilz", "#1b1210", "#ff8f78"],
      ["Nebel", "#101a1d", "#b5d5de"],
      ["Nachtschatten", "#16101c", "#cfa8ee"],
      ["Moor und Birke", "#14160f", "#e8e2cc"],
      ["Herbst", "#1a1408", "#f0a848"]] }
  };
  var ORDER = ["eisen", "verlies", "pergament", "holzschnitt", "grimoire", "moor"];
  var DEFAULT = "eisen.0";

  function rgb(h) { h = h.replace("#", ""); return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)]; }
  function hex(c) { return "#" + c.map(function (v) { v = Math.max(0, Math.min(255, Math.round(v))); return (v < 16 ? "0" : "") + v.toString(16); }).join(""); }
  function mix(a, b, t) { var x = rgb(a), y = rgb(b); return hex([x[0] + (y[0] - x[0]) * t, x[1] + (y[1] - x[1]) * t, x[2] + (y[2] - x[2]) * t]); }
  function lum(h) { var c = rgb(h).map(function (v) { v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); }); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; }

  // Aus Grund (g) und Tinte (i) werden alle Variablen gemischt. Hell ist, wenn der Grund heller als die Tinte ist.
  function isLight(look, pi) { var p = LOOKS[look].pals[pi]; return lum(p[1]) > lum(p[2]); }
  function vars(look, pi) {
    var p = LOOKS[look].pals[pi], g = p[1], i = p[2], light = isLight(look, pi);
    var v = { bg: g, txt: i, acc: i, onacc: g };
    if (light) {
      v.panel = mix(g, i, 0.11); v.line = mix(g, i, 0.45); v.line2 = mix(g, i, 0.72);
      v.mut = mix(i, g, 0.22); v.mut2 = mix(i, g, 0.42);
      v.acc2 = mix(i, g, 0.2); v.alt = mix(g, i, 0.82); v.alt2 = mix(g, i, 0.62);
      v.tray1 = mix(i, "#ffffff", 0.18); v.tray2 = mix(i, "#000000", 0.45);
      v.good = "#2d6a2a"; v.warn = "#8a5200"; v.bad = "#a3231c"; v.pan = "#6a2a9a"; v.fear = "#5a3a9a";
    } else {
      v.panel = mix(g, i, 0.12); v.line = mix(g, i, 0.28); v.line2 = mix(g, i, 0.55);
      v.mut = mix(i, g, 0.2); v.mut2 = mix(i, g, 0.42);
      v.acc2 = mix(i, "#ffffff", 0.3); v.alt = mix(g, i, 0.3); v.alt2 = mix(g, i, 0.52);
      v.tray1 = mix(g, i, 0.16); v.tray2 = mix(g, "#000000", 0.5);
      v.good = "#a6f0a0"; v.warn = "#ffd95c"; v.bad = "#ff9088"; v.pan = "#e3adff"; v.fear = "#d2baff";
    }
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
    var light = isLight(t.look, t.pal);
    root.classList.toggle("light", light);
    try { loadFonts(t.look); } catch (e) { /* ignorieren */ }
    return t.look + "." + t.pal;
  }
  // Kleine Farbprobe für die Auswahlknöpfe: [Grund, Tinte, Name]
  function swatch(look, pi) { var p = LOOKS[look].pals[pi]; return [p[1], p[2], p[0]]; }
  // Gespeichertes Design der Würfel-Extension (gemeinsamer Speicher)
  function stored() {
    try { var raw = null; try { raw = localStorage.getItem("fa-dice3"); } catch (e) { raw = null; } return JSON.parse(raw || "{}").theme; } catch (e) { return undefined; }
  }

  // Für Seiten, die dem Design des Würfel-Trackers folgen (zum Beispiel die Charakter-Extension): bei Änderung neu setzen
  function follow(get) {
    var f = function () { try { var id = get ? get() : stored(); if (valid(id) && id !== (document.documentElement.dataset.look + "." + document.documentElement.dataset.pal)) apply(id); else if (!valid(id) && document.documentElement.dataset.look + "." + document.documentElement.dataset.pal !== DEFAULT) apply(DEFAULT); } catch (e) { /* ignorieren */ } };
    window.addEventListener("storage", function (e) { if (e.key === "fa-dice3" || e.key === null) f(); });
    window.addEventListener("focus", f); document.addEventListener("visibilitychange", f);
    setInterval(f, 1500);
  }

  window.FA_LOOKS = { follow: follow, looks: LOOKS, order: ORDER, DEFAULT: DEFAULT, parse: parse, valid: valid, apply: apply, swatch: swatch, vars: vars, stored: stored };
  // Beim Laden sofort das gespeicherte Design setzen, damit nichts aufblitzt (die Seite kann es danach überschreiben)
  apply(stored());
})();
