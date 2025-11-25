import ServiceCard from "../../components/ServiceCard";

export default function Services() {
  return (
    <div className="pt-32 section">
      <h1 className="text-4xl font-bold mb-10">Nos Services</h1>

      <div className="grid md:grid-cols-3 gap-10">
        <ServiceCard title="Développement Web" img="/service1.jpg" />
        <ServiceCard title="Consulting" img="/service2.jpg" />
        <ServiceCard title="Formations" img="/service3.jpg" />
      </div>
    </div>
  );
}

