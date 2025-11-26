export default function Footer() {
  return (
    <footer className="bg-[#030A1A] text-gray-300 py-16 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* COLONNE 1 */}
        <div>
          <h3 className="text-xl font-semibold text-[#33AFFF] mb-4">Entreprise</h3>
          <p className="text-gray-400 leading-relaxed">
            Solutions professionnelles innovantes et services d’excellence pour un futur plus performant.
          </p>
        </div>

        {/* COLONNE 2 */}
        <div>
          <h3 className="text-xl font-semibold text-[#33AFFF] mb-4">Liens utiles</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-[#33AFFF] transition">Accueil</a></li>
            <li><a href="/activites" className="hover:text-[#33AFFF] transition">Activités</a></li>
            <li><a href="/services" className="hover:text-[#33AFFF] transition">Services</a></li>
            <li><a href="/contact" className="hover:text-[#33AFFF] transition">Contact</a></li>
          </ul>
        </div>

        {/* COLONNE 3 */}
        <div>
          <h3 className="text-xl font-semibold text-[#33AFFF] mb-4">Contact</h3>
          <p className="text-gray-400"><span className="text-gray-500">Email :</span> contact@entreprise.com</p>
          <p className="text-gray-400 mt-2"><span className="text-gray-500">Téléphone :</span> +33 06 00 00 00 00</p>
        </div>

      </div>

      {/* BAS DE PAGE */}
      <div className="mt-12 pt-6 border-t border-white/10 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Entreprise — Tous droits réservés.
      </div>
    </footer>
  );
}
