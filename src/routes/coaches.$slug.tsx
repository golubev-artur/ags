import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Award, GraduationCap, Heart, Sparkles } from "lucide-react";
import { COACHES } from "@/lib/coaches";

export const Route = createFileRoute("/coaches/$slug")({
  loader: ({ params }) => {
    const coach = COACHES.find((c) => c.slug === params.slug);
    if (!coach) throw notFound();
    return { coach };
  },
  head: ({ loaderData }) => {
    const c = loaderData?.coach;
    const title = c ? `${c.name} — тренер AirGS` : "Тренер — AirGS";
    const desc = c ? `${c.name}: ${c.directions.join(", ")}. Регалии, образование и достижения тренера школы AirGS в Балашихе.` : "Тренер школы AirGS";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "profile" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-4xl">Тренер не найден</h1>
      <Link to="/" className="btn-mint">На главную</Link>
    </div>
  ),
  component: CoachPage,
});

function Block({ icon: Icon, title, items }: { icon: typeof Award; title: string; items: string[] }) {
  if (!items.length) return null;
  return (
    <div className="card-soft bg-card p-8">
      <h2 className="flex items-center gap-3 text-3xl"><Icon className="h-6 w-6" strokeWidth={1.2} />{title}</h2>
      <ul className="mt-5 space-y-3 text-muted-foreground">
        {items.map((i) => <li key={i} className="flex gap-3"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />{i}</li>)}
      </ul>
    </div>
  );
}

function CoachPage() {
  const { coach } = Route.useLoaderData();
  const others = COACHES.filter((c) => c.slug !== coach.slug);
  return (
    <div className="mx-auto max-w-6xl px-6 py-10 md:py-16">
      <Link to="/" hash="coaches" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" /> Все тренеры
      </Link>
      <div className="mt-8 grid gap-12 lg:grid-cols-[2fr_3fr]">
        <div className="relative">
          <div className="absolute -left-6 top-10 h-[80%] w-[90%] rounded-full bg-lavender opacity-80 blur-3xl" />
          <img src={coach.photo} alt={coach.name} width={960} height={1280} className="relative aspect-[3/4] w-full rounded-[28px] object-cover shadow-lift" />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">Тренер AirGS</p>
          <h1 className="mt-4 text-5xl md:text-6xl">{coach.name}</h1>
          <div className="mt-6 flex flex-wrap gap-2">
            {coach.directions.map((d) => <span key={d} className="rounded-full bg-mint px-4 py-1.5 text-sm">{d}</span>)}
          </div>
          <div className="mt-10 space-y-6">
            <Block icon={Award} title="Достижения" items={coach.titles} />
            <Block icon={GraduationCap} title="Образование" items={coach.education ?? []} />
            <Block icon={Heart} title="Благодарности за подготовку учеников" items={coach.gratitude} />
          </div>
          <Link to="/" hash="signup" className="btn-mint mt-10 inline-flex"><Sparkles className="mr-2 h-4 w-4" />Записаться на пробное занятие</Link>
        </div>
      </div>
      <h2 className="mt-24 text-4xl">Другие тренеры</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {others.map((c) => (
          <Link key={c.slug} to="/coaches/$slug" params={{ slug: c.slug }} className="card-soft overflow-hidden bg-card">
            <img src={c.photo} alt={c.name} loading="lazy" className="aspect-[4/5] w-full object-cover" />
            <div className="p-5"><h3 className="text-2xl">{c.name}</h3></div>
          </Link>
        ))}
      </div>
    </div>
  );
}
