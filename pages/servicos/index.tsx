import PageHeader from "@/components/ui/PageHeader";

const servicos = [
  { titulo: "Desenvolvimento Web", desc: "Sites e sistemas modernos com Next.js, React e Tailwind." },
  { titulo: "Consultoria em Git", desc: "Boas práticas de versionamento, branches e revisões de código." },
  { titulo: "Treinamentos", desc: "Capacitação técnica para times de desenvolvimento." },
];

export default function ServicosPage() {
  return (
    <>
      <PageHeader
        eyebrow="O que oferecemos"
        title="Nossos Serviços"
        description="Conheça as soluções que entregamos para nossos clientes."
      />

      <div className="grid md:grid-cols-3 gap-6">
        {servicos.map((s) => (
          <article key={s.titulo} className="card">
            <h3 className="font-semibold text-ink-900 mb-2">{s.titulo}</h3>
            <p className="text-sm text-ink-600">{s.desc}</p>
          </article>
        ))}
      </div>
    </>
  );
}