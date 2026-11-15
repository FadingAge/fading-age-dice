// Nachschlage-Tabellen für die SL. Hier kannst Du Texte ändern.
// Rückschläge: je Stufe 6 Einträge (n = Würfelergebnis, t = Name, b = Text, tag = Kennzeichnung)
export const RUECK = {
 "I": {
  "note": "",
  "items": [
   {
    "n": 1,
    "t": "Arkaner Rückstoß",
    "b": "Der Zauberer wird niedergeworfen und lässt einen zufälligen gehaltenen Gegenstand fallen."
   },
   {
    "n": 2,
    "t": "Blutpreis",
    "b": "Der Zauberer erleidet 1 Schaden auf Wille."
   },
   {
    "n": 3,
    "t": "Gestohlene Stimme",
    "b": "Bis zum Ende der Phase bringt der Zauberer nur ein tonloses Flüstern hervor."
   },
   {
    "n": 4,
    "t": "Vertauschte Sinne",
    "b": "Proben mit Sinne erhalten bis zum Ende der Phase -2W6."
   },
   {
    "n": 5,
    "t": "Aschenhusten",
    "b": "Die nächste gewürfelte Handlung des Zauberers erhält -2W6."
   },
   {
    "n": 6,
    "t": "Hexenruf",
    "b": "Ein unnatürlicher Schrei ist bis RW 4 hörbar und verrät den Ursprung der Magie."
   }
  ]
 },
 "II": {
  "note": "",
  "items": [
   {
    "n": 1,
    "t": "Zauberfraß",
    "b": "Ein zufälliger getragener Gegenstand verliert 2 Haltbarkeit. Besitzt er keine, wird er unbrauchbar."
   },
   {
    "n": 2,
    "t": "Zeitsturz",
    "b": "Der Zauberer verschwindet bis zum Beginn seines übernächsten Zuges. Sein nächster Zug entfällt. Anschließend erscheint er am selben oder nächsten freien Ort."
   },
   {
    "n": 3,
    "t": "Gebrochene Begabung",
    "b": "Das höchste Attribut des Zauberers erhält 2 Schaden. Bei Gleichstand entscheidet der Zufall."
   },
   {
    "n": 4,
    "t": "Rauchhand",
    "b": "Eine zufällige Hand ist bis zum Ende der Phase unbrauchbar. Danach bleibt sie rußschwarz und unnatürlich kalt.",
    "tag": "dauerhaft"
   },
   {
    "n": 5,
    "t": "Schwarzer Schleier",
    "b": "Absolute Dunkelheit in RW 0 folgt dem Zauberer für eine Phase. Niemand kann sie durchschauen."
   },
   {
    "n": 6,
    "t": "Offener Geist",
    "b": "Denkfähige Wesen in RW 1 hören für eine Phase die gegenwärtigen Gedanken des Zauberers."
   }
  ]
 },
 "III": {
  "note": "",
  "items": [
   {
    "n": 1,
    "t": "Knochenchor",
    "b": "Der Zauberer erhält 2 Angst; alle anderen furchtfähigen Wesen in RW 1 erhalten 1 Angst."
   },
   {
    "n": 2,
    "t": "Rissschritt",
    "b": "Der Zauberer wird an einen zufälligen freien Ort innerhalb RW 3 versetzt. Hindernisse verhindern dies nicht."
   },
   {
    "n": 3,
    "t": "Schwarzer Schwarm",
    "b": "Ein Schwarm erfüllt den Wirkungsort in RW 1 bis zum Ende der nächsten Runde. Sichtabhängige Handlungen erhalten -2W6; wer seinen Zug darin beginnt, erleidet 1 körperlichen Schaden."
   },
   {
    "n": 4,
    "t": "Ausgebrannter Zauber",
    "b": "Der gerade gewirkte Zauber kann 24 Stunden lang nicht erneut verwendet werden."
   },
   {
    "n": 5,
    "t": "Fremder Wille",
    "b": "Im nächsten Zug bewegt sich der Zauberer auf das nächste Wesen zu und greift es mit seiner ersten Aktion an."
   },
   {
    "n": 6,
    "t": "Fleischbeben",
    "b": "Der Zauberer und alle lebenden Wesen in RW 0 erleiden 2 körperlichen Schaden. Die Haut des Zauberers bleibt dauerhaft unnatürlich durchscheinend.",
    "tag": "dauerhaft"
   }
  ]
 },
 "IV": {
  "note": "",
  "items": [
   {
    "n": 1,
    "t": "Gestohlene Jahre",
    "b": "Der Zauberer altert augenblicklich um zehn Jahre und erleidet 1 Wunde.",
    "tag": "dauerhaft"
   },
   {
    "n": 2,
    "t": "Steinernes Glied",
    "b": "Ein zufälliger Arm oder ein zufälliges Bein versteinert für drei Tage. Ein Arm ist unbrauchbar; Bewegung mit einem versteinerten Bein kostet 1 Aktion."
   },
   {
    "n": 3,
    "t": "Irrläufer",
    "b": "Der Zauber wiederholt sich mit sämtlicher Macht auf einem zufälligen zweiten Ziel oder Ort in Reichweite. Auch der Zauberer und seine Verbündeten kommen infrage."
   },
   {
    "n": 4,
    "t": "Wunde der Welt",
    "b": "Am Wirkungsort öffnet sich für 24 Stunden ein Riss in RW 2. Beim Öffnen und beim ersten Aufenthalt jeder Phase erleidet jedes Wesen darin 2 mentalen Schaden und 1 Angst."
   },
   {
    "n": 5,
    "t": "Eisenfieber",
    "b": "Getragenes oder gehaltenes nichtmagisches Metall in RW 1 glüht bis zum Ende der nächsten Runde. Träger und Berührende erleiden einmalig 3 körperlichen Schaden; betroffene Gegenstände verlieren 1 Haltbarkeit."
   },
   {
    "n": 6,
    "t": "Mund der Hand",
    "b": "Der Mund des Zauberers wandert in eine zufällige Handfläche. Die Hand muss frei und unbedeckt sein, damit er sprechen, essen oder trinken kann.",
    "tag": "dauerhaft"
   }
  ]
 },
 "V": {
  "note": "",
  "items": [
   {
    "n": 1,
    "t": "Seelensturz",
    "b": "Der Geist des Zauberers wird an einen zufälligen Ort innerhalb RW 5 geschleudert; sein Körper bleibt bewusstlos. Der Geist kann sich bewegen, Materie durchdringen und in RW 0 flüstern, aber weder körperlich interagieren noch zaubern. Die Rückkehr zum Körper kostet 1 Aktion; dieser erleidet für jede getrennte Stunde 1 Wunde. Nach der Rückkehr besitzt der Zauberer dauerhaft kein Spiegelbild mehr.",
    "tag": "dauerhaft"
   },
   {
    "n": 2,
    "t": "Falscher Erbe",
    "b": "Ein unversehrter, ausrüstungsloser Doppelgänger mit denselben Werten und Fähigkeiten entsteht. Er jagt den Zauberer, um ihn zu töten und zu ersetzen."
   },
   {
    "n": 3,
    "t": "Verlorene Woche",
    "b": "Der Zauberer und alle Wesen in RW 1 verschwinden und kehren sieben Tage später unverändert zurück. Für sie vergeht keine Zeit."
   },
   {
    "n": 4,
    "t": "Himmelssturz",
    "b": "Die Schwerkraft kehrt sich in RW 2 bis zum Ende der nächsten Runde um. Ungesicherte Wesen erleiden 1 Wunde und werden niedergeworfen; lose Gegenstände werden fortgerissen."
   },
   {
    "n": 5,
    "t": "Ruf der Toten",
    "b": "Alle Leichen in RW 4 erheben sich und jagen den Zauberer für 24 Stunden oder bis zu ihrer Zerstörung."
   },
   {
    "n": 6,
    "t": "Offene Ader",
    "b": "Bei jeder künftigen Anwendung von Magie wird 1 zusätzlicher Intensitätswürfel geworfen und vollständig ausgewertet. Nur außergewöhnliche Magie kann diese Veränderung lösen.",
    "tag": "dauerhaft"
   }
  ]
 },
 "VI": {
  "note": "Rückschlag VI ist eine Endstation. Die Ergebnisse 1, 5 und 6 bedeuten den sicheren Tod. Bei 2, 3 und 4 ist eine Rettung möglich, doch der Zauberer bleibt dauerhaft verändert.",
  "items": [
   {
    "n": 1,
    "t": "Auslöschung",
    "b": "Körper, Seele und Ausrüstung des Zauberers hören auf zu existieren. Es bleiben weder Überreste noch eine Möglichkeit zur Wiederbelebung."
   },
   {
    "n": 2,
    "t": "Falsche Apotheose",
    "b": "Der Zauberer wird zu einem feindseligen Wesen unter Kontrolle der Spielleitung. Schaden und Wunden verschwinden, alle Attribute steigen um 2 und dürfen dabei 9 erreichen; seine Fähigkeiten bleiben erhalten. Wird Aufhebung auf ihn gewirkt und erzeugt die dazugehörige Entfesselung mindestens 6 Macht, kann sein Geist gerettet werden. Die Attributsboni enden dann, doch die monströse Gestalt und 1 zusätzlicher KW6 bei jedem Zauber bleiben dauerhaft."
   },
   {
    "n": 3,
    "t": "Ewige Runde",
    "b": "In RW 1 wiederholt sich die gegenwärtige Runde endlos; wer den Bereich betritt, wird eingeschlossen. Eine von außerhalb gewirkte Aufhebung beendet die Schleife, wenn ihre Entfesselung mindestens 6 Macht erzeugt. Gerettete altern um zwanzig Jahre und erleiden 2 Wunden."
   },
   {
    "n": 4,
    "t": "Tor ohne Rückkehr",
    "b": "Der Zauberer und alle Wesen in RW 0 werden ins Dazwischen gerissen. Das Tor bleibt auf beiden Seiten eine Phase geöffnet. Rückkehrende besitzen dauerhaft schwarze Augen und keinen Schatten; Präsenz sinkt um 1 und Sinne steigt um 1."
   },
   {
    "n": 5,
    "t": "Himmelsgrab",
    "b": "Am Ende der nächsten Runde schlägt ein schwarzer Stern ein. Der Zauberer kann den Bereich nicht verlassen und stirbt. RW 2 wird vernichtet; Wesen in RW 3 erleiden 3 Wunden und werden niedergeworfen."
   },
   {
    "n": 6,
    "t": "Weltfäule",
    "b": "Der Zauberer stirbt und wird zu einem schwarzen Herzen. In RW 5 verrotten Nahrung und Wasser, Pflanzen sterben und natürliche Genesung ist unmöglich. Lebende Wesen erleiden pro Phase 1 Wunde. Die Zerstörung des Herzens beendet die Fäule."
   }
  ]
 }
};

// Reaktion (3W6): a = ab, b = bis (null = nach unten bzw. oben offen), t = Ergebnis, c = Farbe
export const REAKTION = [
  { a: null, b: 2, t: "Katastrophal", c: "kat" },
  { a: 3, b: 5, t: "Negativ", c: "neg" },
  { a: 6, b: 8, t: "Ablehnend", c: "rej" },
  { a: 9, b: 12, t: "Neutral", c: "neu" },
  { a: 13, b: 15, t: "Interessiert", c: "int" },
  { a: 16, b: 18, t: "Positiv", c: "pos" },
  { a: 19, b: null, t: "Hervorragend", c: "top" },
];
// Modifikatoren, die die SL auf das Ergebnis geben kann
export const REAKTION_MOD = [-4, -2, 0, 2, 4];

// Wundfolgen: je Attribut 6 Folgen (1W6). Das Attribut selbst wird mit 1W6 in dieser Reihenfolge bestimmt.
export const WUNDEN = [
  { a: "Kraft", f: ["Rippenverletzung", "Schulterverletzung", "Rückenverletzung", "Muskelverletzung", "Innere Verletzung", "Kreislaufschwäche"] },
  { a: "Geschick", f: ["Beinverletzung", "Handverletzung", "Armverletzung", "Gelenkverletzung", "Fußverletzung", "Koordinationsverlust"] },
  { a: "Präsenz", f: ["Gesichtswunde", "Kieferverletzung", "Stimmverletzung", "Hautverletzung", "Entstellende Verletzung", "Körperliche Gebrechlichkeit"] },
  { a: "Intellekt", f: ["Benommenheit", "Kopfschmerz", "Erinnerungslücken", "Verwirrtheit", "Denkblockade", "Tunneldenken"] },
  { a: "Sinne", f: ["Tinnitus", "Verschwommenes Sehen", "Schwindel", "Reizüberflutung", "Taubheitsgefühl", "Desorientierung"] },
  { a: "Wille", f: ["Schreckhaftigkeit", "Albträume", "Innere Unruhe", "Vermeidungsverhalten", "Apathie", "Überwachsamkeit"] },
];

// Effektwürfel (EW6): 1-4 gelten für jede Waffe, 5 und 6 je nach Waffenart. i = Effekt I, ii = Effekt II
export const EFFEKTE = {
  allg: [
    { n: 1, t: "Ablenkung", i: "Nächste gewürfelte Handlung des Ziels: -1W6.", ii: "Nächste gewürfelte Handlung des Ziels: -2W6." },
    { n: 2, t: "Abwehr öffnen", i: "Nächste Aktive Verteidigung des Ziels: -1W6.", ii: "Ziel kann nächsten wahrgenommenen Angriff nicht aktiv verteidigen." },
    { n: 3, t: "Entwaffnen", i: "Nächste Verwendung eines geeigneten gehaltenen Gegenstands: +1 Aktion.", ii: "Ein gehaltener Gegenstand fällt zu Boden und landet in der Nähe." },
    { n: 4, t: "Beschädigen", i: "Geeigneter Gegenstand oder verwendete natürliche Waffe: -1 Haltbarkeit.", ii: "Geeigneter Gegenstand oder verwendete natürliche Waffe: -2 Haltbarkeit." },
  ],
  waffe: [
    { n: 5, w: [
      { w: "Wucht", i: "**Wegstoßen:** Das Ziel wird um 1 Distanzstufe vom Angreifer fortbewegt.", ii: "**Niederwerfen:** Das Ziel wird niedergeworfen. Aufstehen kostet 1 Aktion." },
      { w: "Klinge", i: "**Öffnen:** Die Seite des Angreifers erhält +1 Öffnung.", ii: "**Öffnen:** Die Seite des Angreifers erhält 2 zusätzliche Öffnungen." },
      { w: "Geschoss", i: "**Kleiner Vorteil:** Der nächste Angriff gegen das Ziel erhält +1W6.", ii: "**Großer Vorteil:** Der nächste Angriff gegen das Ziel erhält +2W6." },
    ]},
    { n: 6, w: [
      { w: "Wucht", i: "**Benommen:** Das Ziel kann bis zum Ende seines nächsten Zuges nicht reagieren.", ii: "**Betäubt:** Keine Reaktionen bis zum Ende des nächsten Zuges; im nächsten Zug 1 Aktion weniger und keine freie Bewegung." },
      { w: "Klinge", i: "**Tiefer Treffer:** Der Angriffswert steigt um 2.", ii: "**Verheerender Treffer:** Der Angriffswert steigt um 4." },
      { w: "Geschoss", i: "**Schock:** Das Ziel wird **Schrecken I** ausgesetzt.", ii: "**Schock:** Das Ziel wird **Schrecken II** ausgesetzt." },
    ]},
  ],
};

// Ereignis- bzw. Ergebniswurf (1W6): Kategorie je Augenzahl
export const EREIGNIS = ["Verzögerung", "Enthüllung", "Bedingungen", "Position", "Ressourcen", "Schaden"];

// Hinterhalt: Ergebnis der Probe, darunter die erste Kampfrunde (Zeilen mit **fett** sind Auszeichnung)
export const HINTERHALT = [
  { t: "Kritischer Erfolg", l: ["**Angreifer:** Schnell", "**Verteidiger:** Nur 1 Aktion, keine Reaktion möglich"] },
  { t: "Voller Erfolg", l: ["**Angreifer:** Schnell", "**Verteidiger:** Nur 1 Aktion"] },
  { t: "Erfolg mit Konsequenz", l: ["Reguläre Initiative", "**Verteidiger:** Nur 1 Aktion"] },
  { t: "Fehlschlag mit Konsequenz", l: ["Reguläre Initiative", "**Verteidiger:** Beginnen mit 2 Öffnungen"] },
  { t: "Katastrophaler Fehlschlag", l: ["**Angreifer:** Nur 1 Aktion", "**Verteidiger:** Schnell"] },
];
