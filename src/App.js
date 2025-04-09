import React, { useState } from "react";

const questions = {
  "Hardcore": [
    "Non ho mai fatto un video privato.",
    "Non ho mai fatto l'amore in un luogo pubblico.",
    "Non ho mai usato un sex toy.",
    "Non ho mai fatto un sogno erotico con qualcuno che conosco.",
    "Non ho mai mandato una foto spinta.",
    "Non ho mai fatto una videochiamata hot.",
    "Non ho mai fatto un gioco di ruolo in intimità.",
    "Non ho mai detto una bugia per fare sesso.",
    "Non ho mai provato bondage.",
    "Non ho mai avuto una notte di solo piacere senza legami.",
    "Non ho mai provato a filmarmi mentre lo facevo.",
    "Non ho mai fatto sesso in auto.",
    "Non ho mai fatto l’amore in acqua.",
    "Non ho mai fatto una cosa estrema a letto.",
    "Non ho mai provato più di una posizione in meno di 5 minuti.",
    "Non ho mai fatto sesso con la musica a tutto volume.",
    "Non ho mai fatto l’amore senza sapere il nome dell’altra persona.",
    "Non ho mai giocato a spogliarmi.",
    "Non ho mai provato un’esperienza a tre.",
    "Non ho mai fatto sesso all’aperto.",
    "Non ho mai provato un massaggio sensuale.",
    "Non ho mai letto un libro erotico.",
    "Non ho mai fatto qualcosa che non pensavo di poter fare a letto.",
    "Non ho mai usato ghiaccio o oggetti strani nel rapporto.",
    "Non ho mai mixato cibo e sesso.",
    "Non ho mai ricevuto o dato un bacio passionale inaspettato.",
    "Non ho mai mandato un vocale hot.",
    "Non ho mai parlato in modo esplicito solo per provocare.",
    "Non ho mai provato attrazione per qualcuno irraggiungibile.",
    "Non ho mai fatto qualcosa a letto solo per compiacere l’altro.",
    "Non ho mai provato la gelosia a letto.",
    "Non ho mai desiderato qualcuno in un momento inappropriato.",
    "Non ho mai fatto finta di dormire per non farlo.",
    "Non ho mai fatto una pazzia per vedere una persona che mi attraeva.",
    "Non ho mai provato uno strip tease.",
    "Non ho mai fatto qualcosa di proibito in intimità.",
    "Non ho mai fatto sesso in un momento rischioso.",
    "Non ho mai detto qualcosa imbarazzante durante l’atto.",
    "Non ho mai perso il controllo in una situazione hot.",
    "Non ho mai provato a sorprendere qualcuno in modo piccante.",
    "Non ho mai voluto farlo in un posto assurdo.",
    "Non ho mai fatto una sfida hot con un amico.",
    "Non ho mai fatto o ricevuto un dirty talk.",
    "Non ho mai ricevuto un regalo a tema hot.",
    "Non ho mai pensato a un ex durante un momento intimo.",
    "Non ho mai desiderato di avere più esperienza.",
    "Non ho mai provato vergogna dopo un momento hot.",
    "Non ho mai fatto qualcosa che non racconterei mai.",
    "Non ho mai superato un mio limite in intimità."
  ]
};

export default function App() {
  const [category] = useState("Hardcore");
  const [question, setQuestion] = useState("");

  const getRandomQuestion = () => {
    const selectedQuestions = questions[category];
    const randomIndex = Math.floor(Math.random() * selectedQuestions.length);
    setQuestion(selectedQuestions[randomIndex]);
  };

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h1>Non Ho Mai - Categoria Hardcore</h1>
      <button onClick={getRandomQuestion} style={{ marginTop: 20, padding: 10 }}>Genera Domanda</button>
      {question && <p style={{ marginTop: 20, fontWeight: 'bold' }}>{question}</p>}
    </div>
  );
}