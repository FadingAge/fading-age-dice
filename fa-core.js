// Gemeinsamer Regelkern für Würfel-, SL- und Charakter-Extension.
// Alle drei liegen auf derselben Domain und lesen denselben Speicher (STORE).
// Regeln stehen nur hier: Stufen, Wundfolgen, Tod, Korruptionsgrenze, Vorschläge, Verlauf.

export const STORE = "fa-char1";
export const ATTRS = ["Kraft", "Geschick", "Präsenz", "Intellekt", "Wille", "Sinne", "Glück"];
export const ATTR_SHORT = ["Kra", "Ges", "Prä", "Int", "Wil", "Sin", "Glü"];
export const KAMPF = ["Verteidigen", "Nahkampf", "Fernkampf", "Schusswaffen"];
export const ROMAN = ["", "I", "II", "III", "IV"];
export const ART = { w: "Weltlicher", v: "Verdammter", a: "Abtrünniger" };
export const NATUREN = { hunger: "Hunger", eid: "Eid", vernunft: "Vernunft" };
export const WF_ATTRS = 6; // Glück kann keine Wundfolge bekommen
export const WF_MAX = 2; // je Attribut höchstens 2 eingetragene Wundfolgen
export const MAX = { chars: 12, f: 24, m: 12, x: 12, bf: 6, zz: 12, nar: 6, cnn: 6, log: 80, q: 24, ev: 20, w: 4, notes: 4000 };
export const TR_MAX = { fear: 6, exh: 6, wounds: 7, corr: 24, brand: 4 };

export const clamp = (x, lo, hi) => Math.min(hi, Math.max(lo, parseInt(x) || 0));
export const txt = (x, n = 40) => String(x == null ? "" : x).replace(/[\u0000-\u001f<>]/g, "").slice(0, n);
export const uid = () => (typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : String(Date.now()) + Math.random().toString(16).slice(2));
const obj = (x) => (x && typeof x === "object" && !Array.isArray(x) ? x : {});
const arr = (x, max) => (Array.isArray(x) ? x.slice(0, max) : []);

// Furcht und Erschöpfung zählen 0 bis 6: ab 3 ist Stufe 1, ab 5 ist Stufe 2
export const level = (p) => (p >= 5 ? 2 : p >= 3 ? 1 : 0);


// ---------- Ausrüstung: Waffen, Rüstung, Schild, Munition ----------
export const DMG = ["Wucht", "Klinge", "Geschoss"];
export const AT_SHORT = ["KRA", "GES", "PRÄ", "INT", "WIL", "SIN", "GLÜ"]; // Schreibweise wie in der Waffentabelle
export const BASIS_RES = 2; // Grundresistenz ohne Rüstung (wie auf dem Charakterblatt)
// Tabellen aus der Charaktererstellung (Schritt V und VI). Waffe: Name, Hände, Attribute, Schadensart, Reichweite, Eigenschaften
export const WAFFEN = [
  ["Unbewaffnet", 1, "KRA,GES", "Wucht", "0", "Schwach II"],
  ["Dolch", 1, "GES", "Klinge", "0 (2)", "Verbergbar, Werfbar"],
  ["Parierdolch", 1, "GES", "Klinge", "0", "Verbergbar, Parieren +2W6"],
  ["Schwert", 1, "KRA,GES", "Klinge", "0", "Parieren +1W6"],
  ["Axt", 1, "KRA", "Klinge", "0", "Robust"],
  ["Streitkolben", 1, "KRA", "Wucht", "0", "Robust"],
  ["Speer", 1, "KRA,GES", "Klinge", "1 (2)", "Werfbar"],
  ["Wurfaxt, Handaxt", 1, "KRA", "Klinge", "0 (2)", "Werfbar"],
  ["Zweihänder", 2, "KRA,GES", "Klinge", "0", "+1AW6, Parieren +1W6"],
  ["Zweihandaxt", 2, "KRA", "Klinge", "0", "+1AW6, Robust"],
  ["Großer Kriegshammer", 2, "KRA", "Wucht", "0", "+1AW6, Robust, Sperrig"],
  ["Langspeer", 2, "KRA,GES", "Klinge", "1", "+1AW6, Sperrig"],
  ["Hellebarde", 2, "KRA", "Klinge,Wucht", "1", "+1AW6, Vielseitig, Sperrig"],
  ["Kampfstab", 2, "KRA,GES", "Wucht", "1", "Parieren +2W6"],
  ["Schleuder", 1, "GES", "Wucht", "3", "Nachladen I, Schwach I, Verbergbar"],
  ["Kurzbogen", 2, "GES", "Geschoss", "3", "Nachladen I"],
  ["Langbogen", 2, "KRA,GES", "Geschoss", "5", "Nachladen I, +1AW6, Sperrig"],
  ["Armbrust", 2, "GES,SIN", "Geschoss", "4", "Nachladen 2, +1AW6"],
  ["Pistole", 1, "GES,GLÜ", "Geschoss", "3", "Nachladen 3, Laut, Nahschuss, +2AW6"],
  ["Muskete", 2, "SIN,GLÜ", "Geschoss", "5", "Nachladen 4, Laut, +2AW6"],
];
// Rüstung: Name, Wucht, Klinge, Geschoss, Haltbarkeit (0 = keine), Eigenschaften
export const RUESTUNGEN = [
  ["Alltagskleidung", 2, 3, 2, 0, ""], ["Schwere Kleidung", 3, 3, 2, 2, "Verbergbar"], ["Gepolsterte Kleidung", 4, 3, 3, 2, "Verbergbar"],
  ["Gambeson", 4, 4, 3, 3, ""], ["Lederharnisch", 3, 5, 3, 3, ""], ["Verstärkte leichte Rüstung", 4, 5, 4, 3, ""],
  ["Kettenhemd", 3, 6, 4, 4, "Verbergbar, Geräuschvoll"], ["Schuppenpanzer", 5, 6, 5, 4, "Schwerfällig I, Geräuschvoll"],
  ["Kettenrüstung", 4, 7, 5, 4, "Schwerfällig I, Geräuschvoll"], ["Brigantine", 5, 6, 7, 4, "Schwerfällig I"],
  ["Plattenharnisch", 6, 8, 7, 4, "Schwerfällig II, Geräuschvoll"],
];
// Schild: Name, Verteidigung (W6), Resistenz, Haltbarkeit, Eigenschaften
export const SCHILDE = [["Buckler", 2, 1, 2, "Verbergbar"], ["Schild", 4, 2, 3, ""], ["Turmschild", 6, 3, 4, "Sperrig"]];

const idxs = (x, max, n) => [...new Set(arr(x, n).map((v) => parseInt(v)).filter((v) => v >= 0 && v <= max))];
export function cleanWeapon(e) {
  e = obj(e); const hm = clamp(e.hm, 0, 4);
  return { n: txt(e.n, 40), h: e.h === 2 ? 2 : 1, art: idxs(e.art, 2, 3), at: idxs(e.at, 6, 3), rw: txt(e.rw, 8), e: txt(e.e, 80), hm, hz: clamp(e.hz, 0, hm), eq: !!e.eq };
}
export function cleanArmor(e) {
  e = obj(e); const hm = clamp(e.hm, 0, 8), r = arr(e.r, 3);
  return { n: txt(e.n, 40), r: [0, 1, 2].map((i) => clamp(r[i], 0, 12)), hm, hz: clamp(e.hz, 0, hm), e: txt(e.e, 80) };
}
// Munition: a = Schuss, die noch im Behälter sind (0 bis 10). Ältere Stände zählten abgegebene Schuss (u).
export function cleanMun(e) {
  e = obj(e);
  return { n: txt(e.n, 30), a: clamp(e.a != null ? e.a : (e.u > 0 ? 10 - e.u : 0), 0, 10) };
}
export function cleanShield(e) {
  e = obj(e); const hm = clamp(e.hm, 0, 4);
  return { n: txt(e.n, 40), v: clamp(e.v, 0, 12), r: clamp(e.r, 0, 6), hm, hz: clamp(e.hz, 0, hm), act: !!e.act, e: txt(e.e, 60) };
}
const names = (s) => s.split(",").map((x) => x.trim());
export function weaponPreset(i) {
  const w = WAFFEN[i]; if (!w) return null;
  const hm = w[0] === "Unbewaffnet" ? 0 : /Robust/.test(w[5]) ? 4 : 3; // Jede Waffe beginnt mit Haltbarkeit 3, robuste mit 4, unbewaffnet ohne
  return cleanWeapon({ n: w[0], h: w[1], at: names(w[2]).map((s) => AT_SHORT.indexOf(s)), art: names(w[3]).map((s) => DMG.indexOf(s)), rw: w[4], e: w[5], hm, hz: hm });
}
export function armorPreset(i) { const r = RUESTUNGEN[i]; return r ? cleanArmor({ n: r[0], r: [r[1], r[2], r[3]], hm: r[4], hz: r[4], e: r[5] }) : null; }
export function shieldPreset(i) { const s = SCHILDE[i]; return s ? cleanShield({ n: s[0], v: s[1], r: s[2], hm: s[3], hz: s[3], e: s[4] }) : null; }

// ---------- Charakter ----------
export function cleanChar(c) {
  c = obj(c);
  const a = arr(c.a, 7), wf = arr(c.wf, WF_ATTRS), k = arr(c.k, 4), tr = obj(c.tr);
  const rank = (e, key, lo, hi, n) => ({ n: txt(e && e.n, n), [key]: clamp(e && e[key], lo, hi) });
  return {
    id: txt(c.id, 40) || uid(),
    n: txt(c.n, 40),
    t: c.t === "v" || c.t === "a" ? c.t : "w",
    nat: NATUREN[c.nat] ? c.nat : "",
    fac: txt(c.fac, 30), pra: txt(c.pra, 40),
    a: ATTRS.map((_, i) => clamp(a[i], 1, 7)),
    wf: Array.from({ length: WF_ATTRS }, (_, i) => clamp(wf[i], 0, WF_MAX)),
    k: KAMPF.map((_, i) => clamp(k[i], 0, 3)),
    f: arr(c.f, MAX.f).map((e) => rank(e, "r", 1, 3, 30)),
    m: arr(c.m, MAX.m).map((e) => rank(e, "v", 1, 3, 30)),
    x: arr(c.x, MAX.x).map((e) => txt(e, 40)),
    weg: txt(c.weg, 40), sf: txt(c.sf, 60),
    biest: txt(c.biest, 20), bf: arr(c.bf, MAX.bf).map((e) => rank(e, "g", 1, 3, 40)),
    zz: arr(c.zz, MAX.zz).map((e) => rank(e, "g", 1, 3, 40)),
    nar: arr(c.nar, MAX.nar).map((e) => txt(e, 80)),
    cnn: arr(c.cnn, MAX.cnn).map((e) => ({ n: txt(e && e.n, 30), b: txt(e && e.b, 200) })),
    tr: { fear: clamp(tr.fear, 0, TR_MAX.fear), exh: clamp(tr.exh, 0, TR_MAX.exh), corr: clamp(tr.corr, 0, TR_MAX.corr),
      brand: clamp(tr.brand || 1, 1, TR_MAX.brand), wounds: clamp(tr.wounds, 0, TR_MAX.wounds),
      lvl: clamp(tr.lvl || 1, 1, 20), xp: clamp(tr.xp, 0, 9999), kxp: clamp(tr.kxp, 0, 9999) },
    w: arr(c.w, MAX.w).map(cleanWeapon), ar: cleanArmor(c.ar), sh: cleanShield(c.sh), mun: cleanMun(c.mun), rb: Math.max(clamp(c.rb, 0, 6), c.rv !== 1 && c.t !== "v" && c.t !== "a" ? 1 : 0), rv: 1, // ältere Stände: Weltliche bekommen ihr +1 jetzt sichtbar im Resistenzbonus
    dead: txt(c.dead, 80),
    notes: String(c.notes == null ? "" : c.notes).replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f<>]/g, "").slice(0, MAX.notes),
  };
}
export const newChar = (name = "") => cleanChar({ n: name, a: [3, 3, 3, 3, 3, 3, 3] });

// Wirksamer Attributswert: Grundwert minus Wundfolgen (Glück bleibt)
export const effAttr = (c, i) => Math.max(0, c.a[i] - (i < WF_ATTRS ? c.wf[i] : 0));
export const wfTotal = (c) => c.wf.reduce((s, v) => s + v, 0);

// Wirksame Resistenz gegen Wucht, Klinge, Geschoss, genau wie auf dem Charakterblatt: Grundresistenz 2, eine Rüstung zählt nur mit mindestens 1 Haltbarkeit und ersetzt die Grundresistenz, wenn ihr Wert höher ist.
// Dazu kommen die Resistenz eines gehaltenen Schilds mit mindestens 1 Haltbarkeit und der Resistenzbonus (Weltliche haben dort automatisch +1).
export function resist(c) {
  const arOn = c.ar.hz > 0, shOn = c.sh.act && c.sh.hz > 0;
  return [0, 1, 2].map((i) => Math.max(BASIS_RES, arOn ? c.ar.r[i] : 0) + (shOn ? c.sh.r : 0) + c.rb);
}
// Schadensschwellen je Schadensart (Wucht, Klinge, Geschoss), vier Stück: R, dann jeweils + Attribut + Charakterstufe. Mit den Attributen nach Abzug der Wundfolgen, wie das Charakterblatt.
export function schwellen(c) {
  const R = resist(c), a = ATTRS.map((_, i) => effAttr(c, i)), L = c.tr.lvl, mk = (r, x, y, z) => { const s2 = r + x + L, s3 = s2 + y + L; return [r, s2, s3, s3 + z + L]; };
  return [mk(R[0], a[0], a[4], a[1]), mk(R[1], a[1], a[5], a[2]), mk(R[2], a[5], a[6], a[0])];
}
// Belegte Hände: gezogene Waffen und gehaltener Schild
export const handsUsed = (c) => c.w.reduce((s, w) => s + (w.eq ? w.h : 0), 0) + (c.sh.act ? 1 : 0);
// Korruptionsgrenze: Abtrünnige Intellekt + Charakterstufe (höchstens 12), Verdammte 6 (darüber Fluchausbruch), Weltliche keine
export const korrLimit = (c) => (c.t === "a" ? Math.min(12, c.a[3] + c.tr.lvl) : c.t === "v" ? 6 : 0);

export function alerts(c) {
  const out = [];
  if (c.dead) out.push({ k: "dead", t: "Gestorben: " + c.dead });
  if (c.t === "v" && c.tr.corr > 6) out.push({ k: "ausbruch", t: "Korruption über 6: Fluchausbruch" });
  if (c.t === "a" && c.tr.corr > korrLimit(c)) out.push({ k: "grenze", t: `Korruptionsgrenze (${korrLimit(c)}) überschritten` });
  if (handsUsed(c) > 2) out.push({ k: "hands", t: `Mehr als zwei Hände belegt (${handsUsed(c)}): Waffe oder Schild weglegen` });
  return out;
}

// Ansicht für die Würfel-Extension (im alten Format, Attribute schon mit Wundfolgen verrechnet)
export function viewChar(c) {
  return { id: c.id, n: c.n, t: c.t, a: ATTRS.map((_, i) => effAttr(c, i)), a0: c.a.slice(), wf: [...c.wf, 0], k: c.k.slice(),
    f: c.f.map((e) => ({ n: e.n, r: e.r })), m: c.m.map((e) => ({ n: e.n, v: e.v })), x: c.x.slice(), dead: c.dead,
    fear: level(c.tr.fear), exh: level(c.tr.exh), fac: c.fac,
    gear: { w: c.w.filter((w) => w.eq).map((w) => ({ n: w.n, h: w.h, art: w.art.map((i) => DMG[i]), at: w.at.slice(), rw: w.rw, e: w.e, hz: w.hz, hm: w.hm })),
      sh: c.sh.act ? { n: c.sh.n, v: c.sh.v, r: c.sh.r, hz: c.sh.hz, hm: c.sh.hm } : null } };
}
// Kurzfassung für die SL: altes Format plus Wundfolgen und Tracker
export function slView(c) {
  return { n: c.n, t: c.t, a: c.a.slice(), wf: c.wf.slice(), k: c.k.slice(), f: c.f.map((e) => ({ n: e.n, r: e.r })), m: c.m.map((e) => ({ n: e.n, v: e.v })), x: c.x.slice(),
    tr: { fear: c.tr.fear, exh: c.tr.exh, corr: c.tr.corr, wounds: c.tr.wounds, brand: c.tr.brand, lvl: c.tr.lvl }, dead: c.dead };
}

// ---------- Änderungen mit Regeln ----------
const stepOf = (cur, ch, lo, hi) => clamp(ch.set != null ? ch.set : cur + (parseInt(ch.delta) || 0), lo, hi);
const sgn = (n) => (n > 0 ? "+" : "") + n;
const NAMES = { fear: "Furcht", exh: "Erschöpfung", corr: "Korruption", wounds: "Wunden", brand: "Brandmal", xp: "Erfahrung", kxp: "Kampferfahrung", lvl: "Charakterstufe" };

// Wendet eine Änderung auf den Charakter an. Ergebnis: { ok, text } oder { ok:false, death } wenn der Charakter sterben würde (erst mit force:true wird es eingetragen)
export function applyChange(c, ch) {
  const k = ch && ch.kind;
  if (c.dead && k !== "revive") return { ok: false, text: "Der Charakter ist gestorben." };
  if (k === "revive") { if (!c.dead) return { ok: false, text: "Keine Änderung" }; c.dead = ""; return { ok: true, text: "Wieder am Leben" }; }
  if (k === "fear" || k === "exh" || k === "corr" || k === "brand" || k === "xp" || k === "kxp" || k === "lvl" || k === "wounds") {
    const lo = k === "brand" || k === "lvl" ? 1 : 0, cap = k === "xp" || k === "kxp" ? 9999 : k === "lvl" ? 20 : TR_MAX[k];
    const cur = c.tr[k], nv = stepOf(cur, ch, lo, cap);
    if (k === "wounds" && nv >= 7 && cur < 7) {
      if (!ch.force) return { ok: false, death: "Siebte Wunde" };
      c.dead = "Siebte Wunde"; c.tr.wounds = 7; return { ok: true, text: "Siebte Wunde: Der Charakter stirbt" };
    }
    if (nv === cur) return { ok: false, text: "Keine Änderung" };
    c.tr[k] = nv;
    const lv = k === "fear" || k === "exh" ? (level(cur) !== level(nv) ? ` (Stufe ${level(nv)})` : "") : "";
    return { ok: true, text: `${NAMES[k]} ${sgn(nv - cur)} (${cur} → ${nv})${lv}` };
  }
  if (k === "wf") {
    const i = parseInt(ch.attr);
    if (!(i >= 0 && i < WF_ATTRS)) return { ok: false, text: "Ungültiges Attribut" };
    const nv = stepOf(c.wf[i], ch, 0, WF_MAX + 1), cur = c.wf[i];
    if (nv === cur) return { ok: false, text: "Keine Änderung" };
    if (nv > cur && (nv > WF_MAX || wfTotal(c) + (nv - cur) >= 5)) {
      const why = nv > WF_MAX ? `Dritte Wundfolge auf ${ATTRS[i]}` : "Fünfte Wundfolge";
      if (!ch.force) return { ok: false, death: why };
      c.dead = why; return { ok: true, text: why + ": Der Charakter stirbt" };
    }
    c.wf[i] = nv;
    return { ok: true, text: `Wundfolge ${ATTRS[i]} ${sgn(nv - cur)} (${nv} von ${WF_MAX})` };
  }
  if (k === "ausbruch") {
    if (c.t !== "v") return { ok: false, text: "Nur Verdammte erleben einen Fluchausbruch" };
    const b = Math.min(4, c.tr.brand + 1); c.tr.corr = 0; c.tr.brand = b;
    return { ok: true, text: `Fluchausbruch: Brandmal ${b}, Korruption 0` };
  }
  return { ok: false, text: "Unbekannte Änderung" };
}

const snap = (c) => ({ tr: { ...c.tr }, wf: c.wf.slice(), dead: c.dead });
function logPush(s, e) {
  s.log.push({ id: uid(), t: Date.now(), cid: e.cid, src: txt(e.src, 20), text: txt(e.text, 120), before: e.before });
  if (s.log.length > MAX.log) s.log.splice(0, s.log.length - MAX.log);
}
// Meldungen an die SL: Alles, was der Spieler selbst ändert (nicht die SL, nicht die Würfel, nicht die erste Anlage), landet hier.
// Der Hintergrund der Charakter-Extension holt die Meldungen ab und schickt sie der SL.
export const SILENT = ["SL", "Würfel", "Anlage"];
export function selfEvent(s, cid, text) {
  if (!Array.isArray(s.ev)) s.ev = [];
  s.ev.push({ id: uid(), t: Date.now(), cid, text: txt(text, 120) });
  if (s.ev.length > MAX.ev) s.ev.splice(0, s.ev.length - MAX.ev);
}
// Änderung anwenden und im Verlauf festhalten. Rückgabe wie applyChange
export function commit(s, cid, ch, src = "") {
  const c = s.chars.find((x) => x.id === cid);
  if (!c) return { ok: false, text: "Charakter nicht gefunden" };
  const before = snap(c), r = applyChange(c, ch);
  if (r.ok) { logPush(s, { cid, src, text: r.text, before }); if (!SILENT.includes(src)) selfEvent(s, cid, r.text); }
  return r;
}
// Nur die jeweils letzte Änderung eines Charakters lässt sich zurücknehmen
export function undoLast(s, cid) {
  for (let i = s.log.length - 1; i >= 0; i--) {
    const e = s.log[i]; if (e.cid !== cid) continue;
    const c = s.chars.find((x) => x.id === cid); if (!c) return false;
    c.tr = cleanChar({ tr: e.before.tr }).tr; c.wf = cleanChar({ wf: e.before.wf }).wf; c.dead = txt(e.before.dead, 80);
    s.log.splice(i, 1); if (e.src !== "Anlage") selfEvent(s, cid, "Zurückgenommen: " + e.text); return true;
  }
  return false;
}

// ---------- Vorschläge (Würfel oder SL schlagen vor, der Spieler bestätigt) ----------
export function addProposal(s, p) {
  if (!s.chars.some((c) => c.id === p.cid)) return false;
  const kind = ["corr", "fear", "exh", "wf", "wounds"].includes(p.kind) ? p.kind : "";
  const delta = clamp(p.delta, -12, 12); if (!kind || !delta) return false;
  s.q.push({ id: uid(), t: Date.now(), cid: p.cid, kind, delta, attr: kind === "wf" ? clamp(p.attr, 0, WF_ATTRS - 1) : 0, label: txt(p.label, 60), src: txt(p.src, 20) || "Würfel" });
  if (s.q.length > MAX.q) s.q.splice(0, s.q.length - MAX.q);
  return true;
}
export function proposalText(c, p) {
  const nm = p.kind === "wf" ? `Wundfolge ${ATTRS[p.attr]}` : NAMES[p.kind] || p.kind;
  return `${nm} ${sgn(p.delta)}` + (p.label ? ` (${p.label})` : "");
}
// Eintragen: bei möglichem Tod kommt { ok:false, death } zurück und der Vorschlag bleibt, bis der Spieler mit force bestätigt
export function acceptProposal(s, id, force = false) {
  const i = s.q.findIndex((p) => p.id === id); if (i < 0) return { ok: false, text: "Vorschlag nicht mehr da" };
  const p = s.q[i], r = commit(s, p.cid, { kind: p.kind, delta: p.delta, attr: p.attr, force }, p.src);
  if (r.ok || !r.death) s.q.splice(i, 1);
  return r;
}
export function rejectProposal(s, id) {
  const i = s.q.findIndex((p) => p.id === id); if (i < 0) return;
  const p = s.q[i]; s.q.splice(i, 1);
  if (p.src === "SL") selfEvent(s, p.cid, "Vorschlag abgelehnt: " + proposalText(null, p)); // die SL erfährt, dass ihr Vorschlag nicht eingetragen wurde
}

// ---------- Speicher ----------
export const emptyStore = () => ({ v: 1, ci: "", chars: [], q: [], log: [], ev: [] });
export function cleanStore(s) {
  s = obj(s);
  const out = emptyStore();
  const seen = new Set();
  arr(s.chars, MAX.chars).forEach((c) => { const cc = cleanChar(c); if (!seen.has(cc.id)) { seen.add(cc.id); out.chars.push(cc); } });
  out.ci = out.chars.some((c) => c.id === s.ci) ? s.ci : out.chars.length ? out.chars[0].id : "";
  out.q = arr(s.q, MAX.q).filter((p) => p && seen.has(p.cid) && ["corr", "fear", "exh", "wf", "wounds"].includes(p.kind) && parseInt(p.delta))
    .map((p) => ({ id: txt(p.id, 40) || uid(), t: clamp(p.t, 0, 9e15), cid: p.cid, kind: p.kind, delta: clamp(p.delta, -12, 12), attr: clamp(p.attr, 0, WF_ATTRS - 1), label: txt(p.label, 60), src: txt(p.src, 20) }));
  out.ev = arr(s.ev, MAX.ev).filter((e) => e && txt(e.text, 120)).map((e) => ({ id: txt(e.id, 40) || uid(), t: clamp(e.t, 0, 9e15), cid: txt(e.cid, 40), text: txt(e.text, 120) }));
  out.log = arr(s.log, MAX.log).filter((e) => e && seen.has(e.cid))
    .map((e) => ({ id: txt(e.id, 40) || uid(), t: clamp(e.t, 0, 9e15), cid: e.cid, src: txt(e.src, 20), text: txt(e.text, 120),
      before: { tr: cleanChar({ tr: obj(e.before).tr }).tr, wf: cleanChar({ wf: obj(e.before).wf }).wf, dead: txt(obj(e.before).dead, 80) } }));
  return out;
}
export function readStore(ls = typeof localStorage !== "undefined" ? localStorage : null) {
  try { return cleanStore(JSON.parse(ls.getItem(STORE) || "null")); } catch { return emptyStore(); }
}
export function writeStore(s, ls = typeof localStorage !== "undefined" ? localStorage : null) {
  try { ls.setItem(STORE, JSON.stringify(s)); return true; } catch { return false; }
}
// Lesen, ändern, schreiben in einem Schritt (kürzeste Zeitspanne für gleichzeitige Änderungen aus zwei Fenstern)
export function update(fn, ls) {
  const s = readStore(ls), r = fn(s); writeStore(s, ls); return r;
}
export const active = (s) => s.chars.find((c) => c.id === s.ci) || null;

// Automatisch-Modus: Der Würfel nutzt die Charakter-Extension, sobald dort ein Charakter existiert (und "Manuell" nicht gewählt ist)
export function useAuto(ls = typeof localStorage !== "undefined" ? localStorage : null) {
  try { const d = JSON.parse(ls.getItem("fa-dice3") || "{}"); return !(d && d.src === "manual") && readStore(ls).chars.length > 0; } catch { return false; }
}
