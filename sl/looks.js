// Aussehen der Würfel für die verdeckten Würfe der SL (gleiche Herkunft wie die Würfel-Extension, daher liest sie deren Einstellungen).
// Die Liste der fertigen Würfelsets (Körperfarbe, Augenfarbe) muss zur Würfel-Extension passen: Kommt dort ein Set dazu, hier ergänzen.
const SETS = {
  gem_gr: ["#17653a", "#f6f2e6"],
  gem_sb: ["#12306a", "#cda648"],
  gem_bp: ["#4a3aa0", "#d6b255"],
  gem_br: ["#5a2146", "#cda648"],
  purpur: ["#6a4bb5", "#d6b255"],
  regen: ["#5b3fb0", "#ffffff"],
  knochen: ["#e8dcb8", "#1b1510"],
  eisen: ["#55585b", "#0f1012"],
  gold_aq: ["#17827f", "#e0b53a"],
  blau_sw: ["#3f78b8", "#d6b255"],
  inquis: ["#4a0c10", "#d6b255"],
  obsidian: ["#101012", "#d8b24a"],
  gold_nb: ["#1d2a7a", "#e0b53a"],
  silb_rt: ["#c1121f", "#f4f4f4"],
  silb_bl: ["#7a0e18", "#f4f4f4"],
  rosa: ["#eb8fb0", "#1c1233"],
  kup_bl: ["#2a74b8", "#e9a57c"]
};
const DEF = { cw: "#e0b035", pw: "#1a1408", cm: "#b83a3a", pm: "#f5efe0", cf: "#5b3a8c", pf: "#f5efe0", cz: "#1f7a86", pz: "#f5efe0" };
const HEX = /^#[0-9a-f]{6}$/i;
const KEYS = { w: ["cw", "pw", "dw"], m: ["cm", "pm", "dm"], f: ["cf", "pf", "df"], z: ["cz", "pz", "dz"] };
// Liefert { hex, pip, pat } je Würfeltyp (w = W6, m = MW6, f = Furcht- und Effektwürfel, z = Korruptionswürfel)
export function readLooks() {
  let s = {}; try { s = JSON.parse(localStorage.getItem("fa-dice3") || "{}") || {}; } catch { s = {}; }
  const out = {};
  Object.keys(KEYS).forEach((t) => {
    const [c, p, d] = KEYS[t], set = typeof s[d] === "string" && SETS[s[d]] ? s[d] : "";
    out[t] = set ? { hex: SETS[set][0], pip: SETS[set][1], pat: set } : { hex: HEX.test(s[c]) ? s[c].toLowerCase() : DEF[c], pip: HEX.test(s[p]) ? s[p].toLowerCase() : DEF[p], pat: "none" };
  });
  return out;
}
