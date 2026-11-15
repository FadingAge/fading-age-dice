// Gemeinsame Helfer für Hintergrundseite und Panel der SL-Extension
export const ATTRS = ["Kraft", "Geschick", "Präsenz", "Intellekt", "Wille", "Sinne", "Glück"];
export const ATTR_SHORT = ["Kra", "Ges", "Prä", "Int", "Wil", "Sin", "Glü"];
export const KAMPF = ["Verteidigen", "Nahkampf", "Fernkampf", "Schusswaffen"];
export const ROMAN = ["", "I", "II", "III"];
export const ART = { w: "Weltlicher", v: "Verdammter", a: "Abtrünniger" };
export const MAX = { f: 24, m: 12, x: 12, chars: 12, notes: 40 };
export const CH = "de.fadingage.chars"; // Kanal: Spieler teilen ihren Charakter mit der SL
export const KEYS = { pchars: "fa-sl-pchars", local: "fa-sl-lchars", set: "fa-sl-set", tab: "fa-sl-tab", notes: "fa-sl-notes", sub: "fa-sl-sub" };

// Wirksamer Attributswert: Grundwert minus Wundfolgen (Glück bleibt)
export const effA = (c, i) => Math.max(0, c.a[i] - (i < 6 && c.wf ? c.wf[i] || 0 : 0));
export const clamp = (x, lo, hi) => Math.min(hi, Math.max(lo, parseInt(x) || 0));
export const txt = (x, n = 24) => String(x == null ? "" : x).replace(/[\u0000-\u001f<>]/g, "").slice(0, n);

export function cleanChar(c) {
  c = c && typeof c === "object" ? c : {};
  const list = (arr, max) => (Array.isArray(arr) ? arr : []).slice(0, max);
  const a = Array.isArray(c.a) ? c.a : [], k = Array.isArray(c.k) ? c.k : [];
  const w = Array.isArray(c.wf) ? c.wf : [], t = c.tr && typeof c.tr === "object" ? c.tr : null;
  return { n: txt(c.n), t: c.t === "v" || c.t === "a" ? c.t : "w", a: ATTRS.map((_, i) => clamp(a[i], 1, 7)), k: KAMPF.map((_, i) => clamp(k[i], 0, 3)),
    // Wundfolgen (je Attribut 0-2) und Zustand kommen nur von Spielern, die die Charakter-Extension nutzen
    wf: [0, 1, 2, 3, 4, 5].map((i) => clamp(w[i], 0, 2)),
    tr: t ? { fear: clamp(t.fear, 0, 6), exh: clamp(t.exh, 0, 6), corr: clamp(t.corr, 0, 24), wounds: clamp(t.wounds, 0, 7), brand: clamp(t.brand, 0, 4), lvl: clamp(t.lvl, 0, 20) } : null,
    dead: txt(c.dead, 80),
    f: list(c.f, MAX.f).map((e) => ({ n: txt(e && e.n), r: clamp(e && e.r, 1, 3) })),
    m: list(c.m, MAX.m).map((e) => ({ n: txt(e && e.n), v: clamp(e && e.v, 1, 3) })),
    x: list(c.x, MAX.x).map((e) => txt(e)) };
}

export const readJ = (k, fb) => { try { const o = JSON.parse(localStorage.getItem(k) || "null"); return o && typeof o === "object" ? o : fb; } catch { return fb; } };
export const writeJ = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* ignorieren */ } };

// Was die SL im Charakter sieht (Standard: Attribute, Makel, Fertigkeiten, Merkmale)
export const DEFAULT_SET = { theme: "auto", cast: "mask", show: { a: true, x: true, f: true, m: true, k: false, t: false } };
export function readSet() {
  const s = readJ(KEYS.set, {}), d = DEFAULT_SET;
  const show = {}; Object.keys(d.show).forEach((k) => { show[k] = s.show && typeof s.show[k] === "boolean" ? s.show[k] : d.show[k]; });
  return { theme: typeof s.theme === "string" ? s.theme.slice(0, 20) : d.theme, cast: s.cast === "off" ? "off" : "mask", show };
}
export const readPChars = () => {
  const o = readJ(KEYS.pchars, {}), out = {};
  Object.keys(o).slice(0, 40).forEach((pid) => { const e = o[pid]; if (e && typeof e === "object") out[pid] = { name: txt(e.name), c: e.c ? cleanChar(e.c) : null }; });
  return out;
};
export const readLocal = () => (Array.isArray(readJ(KEYS.local, [])) ? readJ(KEYS.local, []) : []).slice(0, MAX.chars)
  .map((e) => ({ id: txt(e && e.id, 40) || crypto.randomUUID(), c: cleanChar(e && e.c) }));

// Eigene Notizen der SL (nur lokal): Titel und Text
export const readNotes = () => (Array.isArray(readJ(KEYS.notes, [])) ? readJ(KEYS.notes, []) : []).slice(0, MAX.notes)
  .map((e) => ({ id: txt(e && e.id, 40) || crypto.randomUUID(), t: txt(e && e.t, 60), b: String((e && e.b) || "").replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f<>]/g, "").slice(0, 3000) }));
