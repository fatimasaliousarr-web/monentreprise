"use client";
import Image from "next/image";
import AnimatedCounter from "../components/AnimatedCounter";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <div className="pt-32 fade-in">

      {/* HERO */}
      <section className="section text-center">
        <Reveal>
          <h1 className="text-6xl font-extrabold mb-6 gradient-title">
            Monsieur Le Méchant & Son Chat Messique
          </h1>
        </Reveal>

        <Reveal>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
         “Bienvenue dans le royaume officiel de Monsieur Le Méchant™ —
un homme tellement taquin qu’on devrait lui délivrer un permis spécial pour éviter d’en assommer des innocents.”

Ici, vous entrez dans le territoire d’un individu légendairement imprévisible :
l’homme aux 3M : Maroc, Marseille… et Ma…
(ne demandez pas la fin, il ne répond jamais, il fait juste un sourire suspect).

Chaque phrase de Monsieur Le Méchant est calibrée avec la précision d’un sniper :
trop rapide pour être évitée, trop piquante pour être ignorée.
Certains disent qu’il est méchant.
Lui, il dit qu’il est réaliste.
La vérité est quelque part entre les deux… mais personne n’ose trancher.

Heureusement, ou peut-être malheureusement, il n’affronte pas le monde seul.
Messi, son chat blanc légendairement expressif, est toujours à ses côtés.

Ce chat possède un talent extraordinaire :
juger absolument tout ce que vous faites… surtout vous.

Un regard de Messi peut :

casser votre confiance

dévoiler vos mensonges

vous rappeler vos erreurs de 2017

et vous faire remettre en question votre existence

Ensemble, ils forment un duo mythique :
un maître de la taquinerie et un chat qui a abandonné depuis longtemps l’idée de le contrôler.

“Je ne suis pas méchant,” répète Monsieur Le Méchant,
“c’est juste que les gens sont trop sensibles.”
— Une citation officielle, tatouée dans son âme
(et peut-être bientôt sur un t-shirt).
          </p>
        </Reveal>

        <div className="mt-12 flex justify-center">
          <Image 
            src="/chat-messi.jpg" 
            width={350}
            height={350}
            alt="Chat Messi"
            className="rounded-3xl shadow-2xl float"
          />
        </div>
      </section>

      {/* COUNTERS HUMORISTIQUES */}
      <section className="section grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        <Reveal><AnimatedCounter end={120} label="Personnes taquinées" /></Reveal>
        <Reveal><AnimatedCounter end={350} label="Moments gênants créés" /></Reveal>
        <Reveal><AnimatedCounter end={15} label="Années à râler pour rien" /></Reveal>
        <Reveal><AnimatedCounter end={45} label="Chats témoins de ses bêtises" /></Reveal>
      </section>

    </div>
  );
}
