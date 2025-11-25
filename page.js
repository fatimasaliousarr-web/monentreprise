import AnimatedCounter from "../components/AnimatedCounter";

export default function Home() {
  return (
    <div className="pt-32">

      {/* HERO */}
      <section className="section text-center">
        <h1 className="text-5xl font-bold mb-4">
          Bienvenue chez <span className="gold">Entreprise</span>
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Nous créons des solutions modernes, innovantes et adaptées aux besoins de nos clients.
        </p>
        <div className="mt-10">
          <img src="/hero.jpg" className="rounded-xl shadow-xl mx-auto max-w-4xl" />
        </div>
      </section>

      {/* COUNTERS */}
      <section className="section grid grid-cols-2 md:grid-cols-4 gap-10">
        <AnimatedCounter end={120} label="Clients satisfaits" />
        <AnimatedCounter end={350} label="Projets réalisés" />
        <AnimatedCounter end={15} label="Années d'expérience" />
        <AnimatedCounter end={45} label="Partenaires" />
      </section>

    </div>
  );
}
