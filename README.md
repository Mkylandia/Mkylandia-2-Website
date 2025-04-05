# Mkylandia 2 - Ostern Event Webseite

Dieses Projekt stellt eine moderne, responsive Webseite für den Ostern Event von Mkylandia 2 dar. Die Seite wurde mit HTML, CSS und JavaScript erstellt. Alle Texte können zentral in der JavaScript-Datei verwaltet werden, sodass du Inhalte einfach anpassen kannst, ohne den HTML-Code zu verändern.

## Inhalt

- [Voraussetzungen](#voraussetzungen)
- [Installation](#installation)
- [Dateistruktur](#dateistruktur)
- [Anpassung der Inhalte](#anpassung-der-inhalte)
- [Starten der Webseite](#starten-der-webseite)
- [Lizenz](#lizenz)

## Voraussetzungen

- Ein moderner Webbrowser (Chrome, Firefox, Edge etc.)
- Ein Code-Editor (z.B. Visual Studio Code) für Anpassungen am Code
- (Optional) Ein lokaler Webserver, um die Seite im Browser zu testen (z.B. [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) in VS Code)

## Installation

1. **Klonen oder herunterladen:**
   - Klone das Repository oder lade den Quellcode herunter und entpacke ihn in einen Ordner.

2. **Ordner öffnen:**
   - Öffne den Projektordner in deinem bevorzugten Code-Editor.

## Dateistruktur

Das Projekt enthält folgende Dateien:

- **index.html**  
  Enthält das HTML-Grundgerüst der Seite. Platzhalter-Elemente werden per JavaScript befüllt.

- **styles.css**  
  Beinhaltet alle CSS-Regeln für ein modernes und responsives Design. Ähnlich wie bei modernen Seiten wie Cytooxien.

- **script.js**  
  Verwaltet alle Texte und Inhalte zentral. Hier kannst du die Testtexte sowie alle Event-bezogenen Inhalte anpassen.

- **README.md**  
  Diese Datei mit Informationen zum Projekt.

## Anpassung der Inhalte

Alle Texte werden in der `script.js` definiert. Ändere einfach die Werte im `content`-Objekt, um die Texte auf deiner Webseite zu aktualisieren:

```javascript
const content = {
  siteTitle: "Mkylandia 2",
  siteTagline: "Hier kann ein Text stehen – Testtext für die Kopfzeile.",
  heroTitle: "Frohe Ostern in Mkylandia 2!",
  nav: {
    event: "Event",
    rules: "Regeln",
    prizes: "Preise",
    contact: "Kontakt"
  },
  sections: {
    event: {
      title: "Das Event",
      boxes: [
        {
          title: "Ostereiersuche",
          text: "Hier kann ein Text stehen: Finde die versteckten Eier und sammle Punkte!"
        },
        // Weitere Boxen...
      ]
    },
    // Weitere Sektionen (rules, prizes, contact)...
  }
};

