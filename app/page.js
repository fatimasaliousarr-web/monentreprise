"use client";
import Image from "next/image";
import AnimatedCounter from "../components/AnimatedCounter";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <div className="pt-32 fade-in space-y-32">
{/* HERO — Version premium sans image, avec fond glacier bleu */}
<section className="relative section py-32 overflow-hidden">

  {/* BACKGROUND GLACÉ / BLEU GLOW */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#001228] via-[#00254A] to-[#003C7A] opacity-80"></div>

  <div className="absolute -top-20 -left-40 w-[500px] h-[500px] 
    bg-blue-500/20 blur-3xl rounded-full"></div>

  <div className="absolute bottom-0 right-0 w-[450px] h-[450px]
    bg-cyan-400/20 blur-3xl rounded-full"></div>

  {/* TEXTE */}
  <Reveal>
    <div className="relative max-w-3xl mx-auto text-center px-6 z-10">
      
      <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
        Construisons le futur avec <br />
        <span className="text-[#33AFFF]">Monsieur Le Méchant™</span> <br />
        & son consultant félin invisible, Messi.
      </h1>

      <p className="text-gray-300 text-lg mt-10 leading-relaxed max-w-2xl mx-auto">
        <span className="italic text-[#33AFFF]">
          “Bienvenue dans l’univers de Monsieur Le Méchant™ — 
          un homme tellement taquin qu’un service client spécialisé serait nécessaire
          juste pour gérer les dégâts.”
        </span>
        <br /><br />
        Leader du <span className="text-[#33AFFF]">Consulting Taquin™</span>, 
        il incarne fièrement les 3M :  
        <span className="text-[#33AFFF]"> Maroc, Marseille… et Mystère.</span>  
        <br />
        <span className="text-gray-400 text-sm">(Personne n’a jamais su le troisième.)</span>
      </p>

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



