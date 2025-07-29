// api/chat.js
export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const intents = [
    {
      intent: "begrüßung",
      examples: ["hallo", "hi", "hey", "servus", "guten tag"],
      response: "Hallo! Wie kann ich dir helfen? 🎮💻"
    },
    {
      intent: "hilfe",
      examples: ["was kannst du?", "hilfe", "was ist dein zweck?", "was kann ich fragen?"],
      response: "Ich bin dein KI-Chatbot für Coding & Gaming. Frag mich alles rund um Spiele, Code oder die Community!"
    },
    {
      intent: "frage_coding",
      examples: ["wie lerne ich html?", "was ist css?", "wie funktioniert javascript?"],
      response: "Zum Start ins Coding empfehle ich dir HTML & CSS. Danach kannst du mit JavaScript dynamische Websites bauen!"
    },
    {
      intent: "frage_gaming",
      examples: ["was sind gute spiele?", "welches spiel ist beliebt?", "gibt es neue games?"],
      response: "Aktuell sind Elden Ring, Valorant und Minecraft sehr gefragt. 🎮"
    },
    {
      intent: "verabschiedung",
      examples: ["tschüss", "ciao", "bis bald", "auf wiedersehen"],
      response: "Bis bald und viel Spaß beim Zocken oder Coden! 👋"
    }
  ];

  if (!req.body || !req.body.text) {
    res.status(400).json({ error: "Kein Text übergeben." });
    return;
  }
  const userText = req.body.text.toLowerCase();

  for (const intent of intents) {
    for (const example of intent.examples) {
      if (userText.includes(example)) {
        res.status(200).json({ response: intent.response });
        return;
      }
    }
  }
  res.status(200).json({ response: "Das habe ich nicht verstanden. Kannst du die Frage anders formulieren?" });
}
