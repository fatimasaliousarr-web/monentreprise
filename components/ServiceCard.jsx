export default function ServiceCard({ title, img }) {
  return (
    <div className="bg-white/5 p-5 rounded-xl hover:bg-white/10 transition shadow-lg">
      <img src={img} className="rounded-lg mb-4 h-40 w-full object-cover" />
      <h3 className="text-xl font-bold gold mb-2">{title}</h3>
      <p className="text-gray-300">
        Service professionnel adapté aux besoins de nos clients.
      </p>
    </div>
  );
}

