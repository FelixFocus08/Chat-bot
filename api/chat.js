const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const intents = [
  {
    intent: "begrüßung",
    examples: [
      "hallo", "hi", "hey", "servus", "guten tag", "moin", "grüß dich", "guten morgen", "guten abend", "salut",
      "hi chatbot", "hey du", "hallöchen", "huhu", "heyho"
    ],
    response: "Hallo! Wie kann ich dir helfen? 🎮💻"
  },
  {
    intent: "verabschiedung",
    examples: [
      "tschüss", "ciao", "bis bald", "auf wiedersehen", "mach's gut", "bye", "bis später", "servus", "auf wiederhören", "tschö",
      "bye bye", "tschüssi", "bis dann"
    ],
    response: "Bis bald und viel Spaß beim Zocken oder Coden! 👋"
  },
  {
    intent: "frage_coding",
    examples: [
      // vorherige 200+ Fragen (hier gekürzt), plus die neuen 50+ hier
      "wie lerne ich python", "was ist eine schleife in python", "wie mache ich eine for schleife",
      "was ist ein datentyp", "was bedeutet variable", "was sind funktionen in javascript",
      "wie mache ich ein objekt in javascript", "was ist ein array", "wie funktioniert eine if abfrage",
      "wie schreibe ich eine klasse", "was ist objektorientierung", "wie kann ich css animationen machen",
      "wie benutze ich flexbox", "wie funktioniert grid layout", "wie schreibe ich html formulare",
      "was ist ein eventlistener", "wie funktionieren promises", "was ist async await",
      "wie baue ich eine webseite", "wie kann ich javascript debuggen", "was ist node.js",
      "wie installiere ich npm pakete", "was ist ein modul", "wie programmiere ich eine api",
      "wie funktioniert rest api", "wie mache ich eine datenbankanbindung", "was ist sql",
      "wie schreibe ich abfragen", "was sind triggers in sql", "wie mache ich css styling",
      "wie kann ich bilder in html einfügen", "was ist responsive design", "wie mache ich mobile friendly design",
      "was ist typescript", "wie benutze ich git", "wie funktioniert version control",
      "wie mache ich tests in javascript", "was ist jest", "wie funktioniert docker",
      "was ist kubernetes", "wie lerne ich c++", "was ist eine pointer variable",
      "wie programmiere ich in java", "was ist spring boot", "wie mache ich android apps",
      "wie funktionieren threads", "was ist parallel programming", "wie kann ich python scripts schreiben",
      "was ist maschinelles lernen", "wie funktioniert tensorflow", "was ist künstliche intelligenz",
      "wie mache ich data science", "wie benutze ich pandas", "was ist numpy",
      "wie schreibe ich eine rekursive funktion", "was ist debugging", "wie nutze ich vscode",
      "wie kann ich eine datenbank backup machen", "was ist sql injection", "wie schütze ich meine webseite",
      "was ist https", "wie funktioniert ssl", "was ist eine api key",
      "wie programmiere ich ein spiel", "was ist unity engine", "wie mache ich level design",
      "wie kann ich eine highscore speichern", "wie baue ich ein menü", "wie schreibe ich ein script",
      "was ist bash scripting", "wie benutze ich das terminal", "wie funktionieren reguläre ausdrücke",
      "was ist html5 canvas", "wie kann ich animationen mit js machen",
      // ...weitere Fragen für Coding hier hinzufügen...
    ],
    response: "Zum Start ins Coding empfehle ich dir HTML & CSS. Danach kannst du mit JavaScript dynamische Websites bauen!"
  },
  {
    intent: "frage_gaming",
    examples: [
      // vorherige 200+ Fragen (hier gekürzt), plus die neuen 75+ hier
      "was sind die besten spiele 2025", "wie spiele ich minecraft multiplayer", "wie installiere ich mods in skyrim",
      "was ist esports", "wie werde ich streamer", "wie funktioniert twitch",
      "was ist discord", "wie mache ich einen discord server", "was sind gaming tournaments",
      "wie optimiere ich meinen gaming pc", "was ist raytracing", "was sind die besten grafikkarten",
      "wie spiele ich fortnite", "was ist valorant", "wie funktioniert steam",
      "was sind cheat codes", "wie kann ich cheats erkennen", "was ist ein aimbot",
      "wie schütze ich mich vor hacks", "wie mache ich livestreams", "wie spiele ich auf konsole",
      "was ist ein controller", "wie verbinde ich controller mit pc", "was ist crossplay",
      "wie spiele ich online", "was sind season passes", "was ist ein battle royale",
      "wie mache ich screenshots beim spielen", "was sind fps spiele", "wie optimiere ich fps",
      "was ist ein gaming monitor", "wie funktioniert vr gaming", "was sind gaming headsets",
      "wie spiele ich mmorpg", "was ist ein raid", "wie funktioniert matchmaking",
      "wie spiele ich lol", "was ist dota 2", "wie funktioniert cs go",
      "was ist speedrunning", "wie mache ich einen gaming pc", "was ist hardware",
      "wie installiere ich spiele", "was sind dlcs", "wie spiele ich offline",
      "was ist epic games store", "wie funktioniert origin", "was ist steam workshop",
      "wie baue ich eine gaming community auf", "wie starte ich einen youtube kanal",
      "was sind gaming trends", "was ist ein twitch affiliate", "wie verdiene ich geld mit gaming",
      "was ist game design", "wie programmiere ich spiele", "was ist unreal engine",
      "wie mache ich level design", "wie kann ich spiele testen", "was sind bugs",
      "wie mache ich performance tests", "wie programmiere ich scripts für spiele",
      "wie schreibe ich mods", "was ist unity", "was ist spielmechanik",
      "wie funktioniert loot box", "was sind achievements", "was ist ein quest system",
      // ...weitere Fragen für Gaming hier hinzufügen...
    ],
    response: "Aktuell sind Elden Ring, Valorant und Minecraft sehr gefragt. 🎮"
  },
  {
    intent: "frage_allgemein",
    examples: [
      // vorherige 100+ Fragen (hier gekürzt), plus neue 50+ hier
      "wer bist du", "was kannst du", "wie funktioniert das",
      "wer hat dich gemacht", "wie alt bist du", "bist du ein roboter",
      "was ist künstliche intelligenz", "wie funktioniert ai", "was ist maschinelles lernen",
      "was ist openai", "was ist chatgpt", "was ist ein chatbot",
      "wie programmiert man einen bot", "was ist internet", "wie funktioniert web",
      "was ist server", "was ist cloud computing", "wie funktioniert datenschutz",
      "was ist open source", "was ist github", "was ist linux",
      "was ist windows", "was ist macos", "was ist android",
      "was ist ios", "was ist app", "wie funktionieren apps",
      "wie funktioniert ein browser", "was ist html", "was ist css",
      "was ist javascript", "was ist programmierung",
      "was ist eine variable", "was ist funktion", "was ist klasse",
      "was ist objektorientierung", "wie funktionieren datenbanken",
      "was ist sql", "wie funktioniert künstliche intelligenz",
      "was ist robotik", "was ist datenanalyse",
      "was ist virtual reality", "was ist augmented reality", "was ist blockchain",
      "was ist bitcoin", "was sind cryptocurrencies", "was ist metaverse",
      "wie funktioniert 5g", "was ist internet der dinge",
      "wie funktioniert smart home", "was ist cybersecurity", "was ist phishing",
      "was ist malware", "wie schütze ich mich vor viren",
      "was ist cloud gaming", "was ist streaming", "was ist social media",
      "was ist youtube", "was ist facebook", "was ist instagram",
      "was ist tiktok", "was ist snapchat", "wie funktioniert email",
      "was ist vpn", "was ist datenschutz grundverordnung",
      "was ist 5g", "was ist 6g", "was ist quantum computing",
      "was ist iot", "was sind wearables", "was ist künstliche neuronale netzwerke",
      "wie funktioniert blockchain", "was ist nft", "wie funktionieren smart contracts",
      // ...weitere Fragen für Allgemein hier hinzufügen...
    ],
    response: "Ich bin dein KI-Chatbot für Gaming und Coding. Frag mich alles rund um diese Themen!"
  }
];

// Hilfsfunktionen zur robusten Wort-Suche
function normalize(text) {
  return text.toLowerCase().replace(/[^\w\säöüß]/g, '').split(/\s+/);
}

function containsAllWords(inputWords, exampleWords) {
  return exampleWords.every(word => inputWords.includes(word));
}

function getResponse(text) {
  const inputWords = normalize(text);

  for (const intent of intents) {
    for (const example of intent.examples) {
      const exampleWords = normalize(example);
      if (containsAllWords(inputWords, exampleWords)) {
        return intent.response;
      }
    }
  }
  return "Das habe ich nicht verstanden. Kannst du die Frage anders formulieren?";
}

app.post('/chat', (req, res) => {
  const userText = req.body.text;
  if (!userText) {
    return res.status(400).json({ error: "Kein Text übergeben." });
  }
  const response = getResponse(userText);
  res.json({ response });
});

app.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});