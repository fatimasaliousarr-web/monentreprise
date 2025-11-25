export default function Footer() {
  return (
    <footer className="bg-night border-t border-white/10 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="font-bold mb-4 gold">Entreprise</h3>
          <p>Solutions professionnelles innovantes.</p>
        </div>
        <div>
          <h3 className="font-bold mb-4 gold">Liens</h3>
          <ul className="space-y-2">
            <li>Accueil</li>
            <li>Activités</li>
            <li>Services</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold mb-4 gold">Contact</h3>
          <p>Email : contact@entreprise.com</p>
          <p>Téléphone : +33 06 00 00 00 00</p>
        </div>
      </div>
    </footer>
  );
}

