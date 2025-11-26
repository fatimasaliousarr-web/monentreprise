"use client";
import Image from "next/image";
import AnimatedCounter from "../components/AnimatedCounter";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <div className="pt-32 fade-in space-y-32">

      {/* HERO — Fix spacing, bigger image, wider text */}
<section className="section flex flex-col md:flex-row items-center gap-10 md:gap-20">

  {/* TEXTE PLUS LARGE */}
  <Reveal>
    <div className="w-full md:w-[55%] space-y-6">
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
        Construisons le futur avec 
        <span className="text-[#00AEEF]"> Monsieur Le Méchant™ </span>
        & son consultant félin, Messi.
      </h1>

      <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
        <span className="italic text-[#00AEEF]">
          “Bienvenue dans l’univers de Monsieur Le Méchant™ — un homme tellement
          taquin qu’il faudrait un service client juste pour réparer ses dégâts.”
        </span>
        <br /><br />
        Leader du “Consulting Taquin™”, il incarne les 
        <span className="text-[#00AEEF]"> 3M : Maroc, Marseille et Ma… </span>
        (classified top secret).
        <br /><br />
        Accompagné de Messi, chat blanc analyste senior expert en jugement silencieux.
      </p>

      <div className="flex gap-4">
        <button className="px-6 py-3 bg-[#00AEEF] text-black rounded-xl font-semibold shadow-lg hover:bg-[#0095d6] transition">
          Découvrir →
        </button>
        <button className="px-6 py-3 border border-gray-500 text-white rounded-xl font-semibold hover:bg-white/10 transition">
          Recruter Monsieur Le Méchant
        </button>
      </div>
    </div>
  </Reveal>

  {/* IMAGE PLUS GRANDE + COLLEE */}
  <Reveal>
    <div className="w-full md:w-[45%] flex justify-center">
      <Image 
        src="/messi.jpeg"
        width={900}
        height={1400}
        alt="Messi le Juge Blanc"
        className="rounded-3xl shadow-2xl object-cover scale-100 hover:scale-105 transition-transform duration-700 ease-out"
      />
    </div>
  </Reveal>

</section>




      {/* SECTION SERVICES — Style consulting Capgemini */}
      <section className="section text-center space-y-12">
        
        <Reveal>
          <h2 className="text-4xl font-bold text-white">
            Nos Domaines d’Intervention
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Une offre complète mêlant humour, impact stratégique et jugement félin de haute précision.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          <Reveal>
            <div className="bg-white/5 p-8 rounded-2xl shadow-xl hover:bg-white/10 transition">
              <h3 className="text-2xl font-semibold text-[#00AEEF] mb-4">Consulting Taquin</h3>
              <p className="text-gray-300">
                Analyse stratégique des situations où Monsieur Le Méchant peut taquiner avec précision.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white/5 p-8 rounded-2xl shadow-xl hover:bg-white/10 transition">
              <h3 className="text-2xl font-semibold text-[#00AEEF] mb-4">Gestion du Stress Félin</h3>
              <p className="text-gray-300">
                Messi observe, juge, et optimise votre comportement en fonction de son taux d’agacement.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-white/5 p-8 rounded-2xl shadow-xl hover:bg-white/10 transition">
              <h3 className="text-2xl font-semibold text-[#00AEEF] mb-4">Transformation Digitale</h3>
              <p className="text-gray-300">
                Automatisation, leadership, humour et chaos parfaitement coordonné.
              </p>
            </div>
          </Reveal>

        </div>
      </section>




      {/* SECTION COMPTEURS */}
      <section className="section grid grid-cols-2 md:grid-cols-4 gap-12 text-center">

        <Reveal><AnimatedCounter end={120} label="Personnes taquinées" /></Reveal>
        <Reveal><AnimatedCounter end={350} label="Moments gênants créés" /></Reveal>
        <Reveal><AnimatedCounter end={15} label="Années à râler pour rien" /></Reveal>
        <Reveal><AnimatedCounter end={45} label="Chats témoins de ses bêtises" /></Reveal>

      </section>




      {/* SECTION VALEURS — Style corporate */}
      <section className="section text-center space-y-12">
        
        <Reveal>
          <h2 className="text-4xl font-bold text-white">Nos Valeurs</h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          
          <Reveal>
            <div className="p-8 bg-white/5 rounded-2xl">
              <h3 className="text-2xl font-semibold text-[#00AEEF] mb-4">Imprévisibilité</h3>
              <p className="text-gray-300">
                Chaque échange avec Monsieur Le Méchant est une aventure dont personne ne sort indemne.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="p-8 bg-white/5 rounded-2xl">
              <h3 className="text-2xl font-semibold text-[#00AEEF] mb-4">Innovation</h3>
              <p className="text-gray-300">
                Transformer la taquinerie en un moteur de création et de performance.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="p-8 bg-white/5 rounded-2xl">
              <h3 className="text-2xl font-semibold text-[#00AEEF] mb-4">Jugement Félin</h3>
              <p className="text-gray-300">
                Messi, expert en jugement passif-agressif, valide 0.2% des humains rencontrés.
              </p>
            </div>
          </Reveal>

        </div>

      </section>

    </div>
  );
}

