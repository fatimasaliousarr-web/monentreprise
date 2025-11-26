"use client";
import Image from "next/image";
import AnimatedCounter from "../components/AnimatedCounter";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <div className="pt-32 fade-in">

      {/* HERO — Texte à gauche, image à droite */}
<section className="section flex flex-col md:flex-row items-center justify-between gap-12">

  {/* Texte à gauche */}
  <Reveal>
    <div className="md:w-1/2">
      <h1 className="text-5xl md:text-6xl font-extrabold gradient-title mb-6">
        Monsieur Le Méchant™ & Messi le Juge Blanc
      </h1>

      <p className="text-gray-300 text-lg leading-relaxed">
        <span className="italic text-[#FFD56B]">
          “Bienvenue dans le royaume officiel de Monsieur Le Méchant™ — 
          un homme tellement taquin qu’on devrait lui délivrer un permis spécial
          pour éviter d’en assommer des innocents.” 
        </span>
        <br /><br />
        Ici, vous entrez dans le territoire d’un individu légendairement imprévisible : 
        <span className="text-[#FFD56B]"> l’homme aux 3M : Maroc, Marseille… et Ma…</span>  
        (la fin n’a jamais été clarifiée).
        <br /><br />
        Heureusement, il n’est jamais seul : 
        <span className="text-[#FFD56B]"> Messi, son chat blanc, maître du jugement silencieux, </span>
        veille sur vous… et vous juge probablement en ce moment même LOLLLL.
      </p>
    </div>
  </Reveal>

  {/* Image à droite */}
  <Reveal>
    <div className="md:w-1/2 flex justify-center">
      <Image 
        src="/messi.jpeg" 
        width={950}
        height={1500}
        alt="Chat Messi"
        className="rounded-3xl shadow-2xl float"
      />
    </div>
  </Reveal>

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










