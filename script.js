document.addEventListener("DOMContentLoaded", function() {
  // Inhalt-Objekt mit Testtexten
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
          {
            title: "Minispiele",
            text: "Hier kann ein Text stehen: Teste dein Geschick in unseren speziellen Minispielen."
          },
          {
            title: "Wettbewerbe",
            text: "Hier kann ein Text stehen: Gewinne einzigartige Preise in spannenden Wettbewerben!"
          }
        ]
      },
      rules: {
        title: "Event Regeln",
        boxes: [
          {
            title: "Teilnahmebedingungen",
            text: "Hier kann ein Text stehen: Nur Spieler ab Level 5 dürfen teilnehmen."
          },
          {
            title: "Event-Zeiten",
            text: "Hier kann ein Text stehen: Das Event findet vom 15.04. bis 20.04. statt."
          },
          {
            title: "Fairplay",
            text: "Hier kann ein Text stehen: Cheating wird nicht toleriert – spiele fair!"
          }
        ]
      },
      prizes: {
        title: "Preise & Belohnungen",
        boxes: [
          {
            title: "Exklusive Items",
            text: "Hier kann ein Text stehen: Sichere dir einzigartige Items, die nur beim Event erhältlich sind."
          },
          {
            title: "Ranglistenpreise",
            text: "Hier kann ein Text stehen: Die besten Spieler erhalten besondere Auszeichnungen."
          },
          {
            title: "Überraschungen",
            text: "Hier kann ein Text stehen: Freue dich auf spontane Events und Spezialboni."
          }
        ]
      },
      contact: {
        title: "Kontakt & Infos",
        text: 'Hier kann ein Text stehen: Bei Fragen wende dich an unser Support-Team oder besuche unser <a href="https://www.mkylandia2.de/forum" target="_blank">Forum</a>.'
      }
    }
  };

  // Header und Navigation
  document.getElementById("site-title").textContent = content.siteTitle;
  document.getElementById("site-tagline").textContent = content.siteTagline;
  document.getElementById("hero-title").textContent = content.heroTitle;
  document.getElementById("nav-event").textContent = content.nav.event;
  document.getElementById("nav-rules").textContent = content.nav.rules;
  document.getElementById("nav-prizes").textContent = content.nav.prizes;
  document.getElementById("nav-contact").textContent = content.nav.contact;

  // Event-Sektion
  document.getElementById("section-event-title").textContent = content.sections.event.title;
  document.getElementById("event-box1-title").textContent = content.sections.event.boxes[0].title;
  document.getElementById("event-box1-text").textContent = content.sections.event.boxes[0].text;
  document.getElementById("event-box2-title").textContent = content.sections.event.boxes[1].title;
  document.getElementById("event-box2-text").textContent = content.sections.event.boxes[1].text;
  document.getElementById("event-box3-title").textContent = content.sections.event.boxes[2].title;
  document.getElementById("event-box3-text").textContent = content.sections.event.boxes[2].text;

  // Regeln-Sektion
  document.getElementById("section-rules-title").textContent = content.sections.rules.title;
  document.getElementById("rules-box1-title").textContent = content.sections.rules.boxes[0].title;
  document.getElementById("rules-box1-text").textContent = content.sections.rules.boxes[0].text;
  document.getElementById("rules-box2-title").textContent = content.sections.rules.boxes[1].title;
  document.getElementById("rules-box2-text").textContent = content.sections.rules.boxes[1].text;
  document.getElementById("rules-box3-title").textContent = content.sections.rules.boxes[2].title;
  document.getElementById("rules-box3-text").textContent = content.sections.rules.boxes[2].text;

  // Preise-Sektion
  document.getElementById("section-prizes-title").textContent = content.sections.prizes.title;
  document.getElementById("prizes-box1-title").textContent = content.sections.prizes.boxes[0].title;
  document.getElementById("prizes-box1-text").textContent = content.sections.prizes.boxes[0].text;
  document.getElementById("prizes-box2-title").textContent = content.sections.prizes.boxes[1].title;
  document.getElementById("prizes-box2-text").textContent = content.sections.prizes.boxes[1].text;
  document.getElementById("prizes-box3-title").textContent = content.sections.prizes.boxes[2].title;
  document.getElementById("prizes-box3-text").textContent = content.sections.prizes.boxes[2].text;

  // Kontakt-Sektion
  document.getElementById("section-contact-title").textContent = content.sections.contact.title;
  document.getElementById("contact-text").innerHTML = content.sections.contact.text;
});
