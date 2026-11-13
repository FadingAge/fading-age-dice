// Nachschlage-Infos für die SL. Hier kannst Du Texte ändern oder ergänzen.
// Aufbau: Kategorie { t: Titel, items: [ { t: Titel, b: Text } ] }
// Im Text: neue Zeile = neuer Absatz, Zeile mit "- " am Anfang = Listenpunkt, **fett** = fett.
export const INFOS = [
  { t: "Proben und Würfel", items: [
    { t: "Ablauf einer Probe", b:
      "Der Spieler beschreibt und spielt aus, was sein Charakter tut. Danach gibst Du das Attribut vor (z. B. Kraftprobe). Hat der Spieler einen anderen Ansatz, kann er ein anderes Attribut vorschlagen.\n" +
      "Fertigkeit und Merkmal wählt der Spieler. Eine Probe besteht aus bis zu 3 Teilen: Attribut, Merkmal, Fertigkeit.\n" +
      "Gewürfelt wird zum Schluss, um zu entscheiden, wie gut das Ergebnis ausfällt." },
    { t: "Würfel und Erfolge", b:
      "- **W6** (Attribut): 5-6 = 1 Erfolg\n" +
      "- **MW6** (Merkmal, rote Würfel): 5-6 = 2 Erfolge\n" +
      "- **Fertigkeit** Rang I-III: feste Erfolge (1 bis 3)\n" +
      "- **Glück** zählt wie ein Attribut\n" +
      "Der Spieler kann bis zu 3 normale W6 dazugeben oder wegnehmen (W6 +/-)." },
    { t: "Push", b:
      "Einmal pro Wurf. Alle erfolglosen Würfel (1-4) werden neu gewürfelt.\n" +
      "- Neuwurf 5-6: +1 Erfolg (MW6: +2)\n" +
      "- Neuwurf 1-2: -1 Erfolg (MW6: -2)\n" +
      "Der Neuwurf zählt, auch wenn er schlechter ist." },
    { t: "Kritischer Fehlschlag", b:
      "Ein Wurf mit negativen Erfolgen (unter 0) ist ein kritischer Fehlschlag. Das kann nach einem Push passieren oder durch Furcht-W6." },
  ]},
  { t: "Zustände", items: [
    { t: "Erschöpfung", b:
      "Stufe 1 oder 2. Jede Stufe nimmt 1 normalen W6 weg. Der Attributwert selbst bleibt gleich (z. B. Kraft 5 mit Erschöpfung 2 würfelt 3W6).\n" +
      "Erschöpfung nimmt nur W6 weg, keine MW6." },
    { t: "Furcht", b:
      "Stufe 1 oder 2. Furcht sperrt alle Merkmal-W6 und ersetzt sie durch 1 (Stufe 1) oder 2 (Stufe 2) **Furcht-W6**.\n" +
      "- Furcht-W6: 5-6 = +2 Erfolge, 1-2 = -2 Erfolge\n" +
      "- Beim Push werden Furcht-W6 nur bei 3-4 neu gewürfelt" },
    { t: "Panik", b:
      "Bei Furcht Stufe 2: zeigen beide Furcht-W6 dieselbe Augenzahl (Pasch), bricht Panik aus. Der Wurf zählt dann nicht, auch nicht nach einem Push." },
  ]},
  { t: "Kampf", items: [
    { t: "Angriff in zwei Schritten", b:
      "**Schritt 1:** Der Spieler würfelt die Probe aus Attribut und Kampffertigkeit. Die Erfolge zählen.\n" +
      "**Schritt 2:** Er kann die Erfolge ändern (höchstens 10). Dann werden so viele W6 neu gewürfelt, und die Augensumme ist der **Angriffswert**.\n" +
      "Schritt 2 gibt es nur bei Nahkampf, Fernkampf und Schusswaffen, nicht bei Verteidigen.\n" +
      "Das X in der Würfel-Extension bricht Schritt 2 ab." },
    { t: "Effektwürfel", b:
      "Im 2. Angriffsschritt darf der Spieler auf Deine Ansage einen Effektwürfel (in Furchtfarbe) mitwürfeln. Er zählt ohne Erfolge und wird nicht zum Angriffswert addiert." },
    { t: "Kampffertigkeiten", b:
      "Verteidigen, Nahkampf, Fernkampf, Schusswaffen, je Rang I bis III." },
    { t: "Initiative", b:
      "Jeder Spieler würfelt 1W6, Du würfelst 1W6 für die Gegnergruppe.\n" +
      "- **Schnell:** mehr als der Gegnerwurf. Beginnt zuerst.\n" +
      "- **Langsam:** gleiches Ergebnis oder weniger. Es gibt kein \"gleichzeitig\".\n" +
      "Reihenfolge: schnelle SCs, dann die Gegner, dann langsame SCs.\n" +
      "Mit dem Reiter Initiative rufst Du sie aus: Der nächste Wurf der Spieler zählt dann als Initiative." },
    { t: "Resistenz und Rüstung", b:
      "Stand Charakterblatt v0.4:\n" +
      "- Basis-Resistenz 2, bei Weltlichen 3\n" +
      "- Rüstungs-Resistenz zählt nur, wenn mindestens 1 Rüstungs-Haltbarkeit ausgefüllt ist\n" +
      "- Schildwert zählt nur, wenn mindestens 1 Schild-Haltbarkeit ausgefüllt ist. Er zählt zusätzlich als Rüstung und fließt als Basiswert in die Schadensschwellen ein\n" +
      "- Die höhere Resistenz zählt" },
  ]},
  { t: "Magie", items: [
    { t: "Charakterarten", b:
      "- **Weltliche:** würfeln wie gewohnt, kein Zaubern\n" +
      "- **Verdammte:** zaubern mit Korruptionswürfeln\n" +
      "- **Abtrünnige:** zaubern mit Korruptionswürfeln und können Korruption entfesseln" },
    { t: "Korruptionswürfel (KW6)", b:
      "Die Anzahl richtet sich nach dem Grad des Zaubers.\n" +
      "- 1-2: 1 Korruption\n" +
      "- 5-6: 2 Erfolge und 1 Korruption weniger\n" +
      "Die Korruption am Ende ist nie unter 0." },
    { t: "Zauberprobe", b:
      "Bei einer Probe zählen die Erfolge der KW6. Zusätzlich zählen (bei Verdammten und Abtrünnigen gleich) das Attribut als W6 (5-6 = 1 Erfolg) und die Fertigkeit Arkana I-III als feste Erfolge.\n" +
      "Merkmale zählen beim Zaubern nicht." },
    { t: "Entfesseln (nur Abtrünnige)", b:
      "Bis zu 12 W6 werden gewürfelt.\n" +
      "- 1-3: Rückschlag\n" +
      "- 4-6: Macht\n" +
      "Beides wird getrennt gezählt. Mehr Macht ist besser, mehr Rückschläge bedeuten größere Konsequenzen." },
    { t: "Korruptionsgrenze", b:
      "Bei Abtrünnigen: Intellekt + Charakterstufe." },
  ]},
  { t: "Charaktere", items: [
    { t: "Aufbau", b:
      "- **7 Attribute** mit Wert 1-7: Kraft, Geschick, Präsenz, Intellekt, Wille, Sinne, Glück\n" +
      "- **Fertigkeiten:** frei benannt, Rang I-III\n" +
      "- **Merkmale:** frei benannt, Wert 1-3\n" +
      "- **Makel:** frei benannt, ohne Wert\n" +
      "- **Kampffertigkeiten:** Verteidigen, Nahkampf, Fernkampf, Schusswaffen, je Rang I-III" },
  ]},
];
