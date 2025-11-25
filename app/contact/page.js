export default function Contact() {
  return (
    <div className="pt-32 section">
      <h1 className="text-4xl font-bold mb-6">Contactez-nous</h1>

      <div className="grid md:grid-cols-2 gap-10">

        <form className="space-y-4">
          <input className="w-full p-3 rounded bg-white/10" placeholder="Nom" />
          <input className="w-full p-3 rounded bg-white/10" placeholder="Email" />
          <textarea className="w-full p-3 rounded bg-white/10" rows="4" placeholder="Message"></textarea>
          <button className="btn-primary">Envoyer</button>
        </form>

        <div>
          <p className="text-gray-300 mb-4">
            Nous sommes disponibles pour répondre à vos besoins.
          </p>
          <p>Email : contact@entreprise.com</p>
          <p>Téléphone : 06 00 00 00 00</p>

          <iframe
            className="mt-6 w-full h-64 rounded-xl"
            src="https://maps.google.com/maps?q=Paris&t=&z=13&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

