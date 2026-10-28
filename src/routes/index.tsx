import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Wind, Circle, Minus, Cloud, Link2, Flower2, Award, ShieldCheck, Users, Sparkles,
  Phone, MapPin, Bus, Plus, Menu, X,
} from "lucide-react";
import hero from "@/assets/hero.jpg";
import studio from "@/assets/studio.jpg";
import stage from "@/assets/stage.jpg";
import { TrialForm } from "@/components/TrialForm";
import { SocialIcons, VkLink } from "@/components/SocialIcons";
import { COACHES, SOCIAL } from "@/lib/coaches";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AirGS — школа воздушной гимнастики в Балашихе" },
      { name: "description", content: "Воздушные полотна, кольцо, трапеция и гамак для детей от 3 лет и взрослых. Малые группы, безопасность, выступления. Пробное занятие." },
      { property: "og:title", content: "AirGS — школа воздушной гимнастики в Балашихе" },
      { property: "og:description", content: "Лёгкость, сила и полёт. Дети от 3 лет и взрослые. Запишитесь на пробное занятие." },
    ],
  }),
  component: Index,
});

const NAV = [
  ["О школе", "#about"],
  ["Направления", "#directions"],
  ["Тренеры", "#coaches"],
  ["Расписание", "#signup"],
  ["Контакты", "#contacts"],
];

function FadeUp({ children, delay = 0, className }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <FadeUp className="mb-14 max-w-2xl">
      <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">{eyebrow}</p>
      <h2 className="mt-4 text-5xl md:text-6xl">{title}</h2>
    </FadeUp>
  );
}

const pastel = ["bg-powder", "bg-lavender", "bg-mint"];

const directions = [
  { icon: Wind, t: "Воздушные полотна", d: "Свободные трюки и плавные каскады на мягкой ткани.", a: "от 5 лет" },
  { icon: Circle, t: "Воздушное кольцо", d: "Изящные позы и вращения на металлическом обруче.", a: "от 6 лет" },
  { icon: Minus, t: "Трапеция", d: "Классика цирка: баланс, сила и чистые линии.", a: "от 7 лет" },
  { icon: Cloud, t: "Воздушный гамак", d: "Мягкий старт в воздухе — идеально для малышей.", a: "от 3 лет" },
  { icon: Link2, t: "Ремни", d: "Сложный цирковой жанр для тех, кто уже летает.", a: "от 10 лет" },
  { icon: Flower2, t: "Растяжка и ОФП", d: "Гибкость и сила — основа любого воздушного номера.", a: "от 3 лет и взрослые" },
];

const why = [
  { icon: Award, t: "Опытные тренеры", d: "Мастера спорта и артисты цирка" },
  { icon: ShieldCheck, t: "Безопасность и страховка", d: "Маты, сертифицированное оборудование" },
  { icon: Users, t: "Малые группы до 8 человек", d: "Внимание каждому ученику" },
  { icon: Sparkles, t: "Выступления и фестивали", d: "Сцена, костюмы и награды" },
];

const awards = [
  { t: "Fly Dance Star", c: "Москва" },
  { t: "Polygon International", c: "Красногорск" },
  { t: "V Международный турнир", c: "Сочи" },
  { t: "Fly Dance Star", c: "Москва" },
  { t: "Polygon International", c: "Красногорск" },
  { t: "V Международный турнир", c: "Сочи" },
];

const reviews = [
  { q: "Дочка ждёт каждое занятие как праздник. За полгода стала увереннее, выпрямилась осанка, появились подруги.", n: "Ольга" },
  { q: "Очень бережные тренеры: ни разу не было страшно отпускать ребёнка. А первое выступление — слёзы счастья.", n: "Наталья" },
  { q: "Пришли на пробное и остались. Малые группы — это правда чувствуется, каждому уделяют внимание.", n: "Ирина" },
];

const faq = [
  ["Что взять на первое занятие?", "Облегающую спортивную форму с закрытыми коленями и подмышками, носочки, воду. Украшения лучше снять."],
  ["Нужна ли физическая подготовка?", "Нет. Мы начинаем с базы и подбираем нагрузку под каждого ученика."],
  ["С какого возраста берёте детей?", "С 3 лет — в группы воздушного гамака и растяжки."],
  ["Есть ли страховка?", "Да: тренер страхует каждый элемент, под снарядами — толстые маты, оборудование сертифицировано."],
  ["Можно ли взрослым?", "Конечно! У нас есть взрослые группы любого уровня — начать никогда не поздно."],
];

function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 30);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <div className="overflow-x-clip">
      {/* NAV */}
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${scrolled || open ? "bg-card/80 backdrop-blur-xl shadow-soft" : ""}`}>
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="font-display text-3xl tracking-wide">AirGS</a>
          <nav className="hidden gap-8 text-sm lg:flex">
            {NAV.map(([l, h]) => <a key={h} href={h} className="text-muted-foreground transition-colors hover:text-foreground">{l}</a>)}
          </nav>
          <div className="hidden items-center gap-5 lg:flex">
            <VkLink className="h-8 w-8" button={false} />
            <a href="#signup" className="btn-mint !py-2.5 text-sm">Пробное занятие</a>
          </div>
          <button className="lg:hidden" aria-label="Меню" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
        {open && (
          <nav className="flex flex-col gap-4 px-6 pb-6 lg:hidden">
            {NAV.map(([l, h]) => <a key={h} href={h} onClick={() => setOpen(false)}>{l}</a>)}
            <a href={SOCIAL.vk} target="_blank" rel="noreferrer" className="flex items-center gap-3 pt-2">
              <VkMark className="h-8 w-8" />
              <span>Мы во ВКонтакте</span>
            </a>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pb-16 pt-28 lg:grid-cols-2">
        <FadeUp>
          <h1 className="text-[44px] font-light leading-[1.08] sm:text-6xl lg:text-[76px]">Школа воздушной гимнастики <em className="italic">AirGS</em></h1>
          <p className="mt-6 font-display text-2xl italic text-muted-foreground md:text-3xl">Лёгкость, сила и полёт — в Балашихе</p>
          <p className="mt-5 max-w-md text-muted-foreground">Дети от 3 лет и взрослые. Малые группы, безопасность, выступления.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#signup" className="btn-mint">Записаться на пробное занятие</a>
            <a href="#directions" className="btn-ghost">Смотреть направления</a>
          </div>
        </FadeUp>
        <FadeUp delay={0.15} className="relative">
          <div className="absolute -right-10 top-10 h-[80%] w-[90%] rounded-full bg-lavender blur-3xl opacity-80" />
          <img src={hero} alt="Гимнастка на воздушных полотнах" width={896} height={1152} className="relative mx-auto aspect-[4/5] w-full max-w-md rounded-[28px] object-cover shadow-lift" />
        </FadeUp>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-7xl px-6 py-20 md:py-[120px]">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <FadeUp><img src={studio} alt="Зал школы AirGS" loading="lazy" width={1024} height={1152} className="aspect-[4/5] w-full rounded-[28px] object-cover shadow-soft" /></FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">О школе</p>
            <h2 className="mt-4 text-5xl md:text-6xl">Бережно к телу, смело — к небу</h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>Мы учим летать постепенно: от укрепления мышц и растяжки — к первым трюкам и сценическим номерам. Нагрузку подбираем индивидуально.</p>
              <p>С малышами работаем через игру, со взрослыми — через осознанное движение. Каждый элемент — под страховкой тренера и на мягких матах.</p>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
              {[["12 лет", "работы"], ["от 3 лет", "возраст учеников"], ["200+", "учеников"]].map(([a, b]) => (
                <div key={a}><div className="font-display text-4xl md:text-5xl">{a}</div><div className="mt-1 text-sm text-muted-foreground">{b}</div></div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* DIRECTIONS */}
      <section id="directions" className="mx-auto max-w-7xl px-6 py-20 md:py-[120px]">
        <SectionTitle eyebrow="Направления" title="Выберите свою стихию" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {directions.map((d, i) => (
            <FadeUp key={d.t} delay={(i % 3) * 0.08}>
              <div className={`card-soft h-full p-8 ${pastel[i % 3]}`}>
                <d.icon className="h-9 w-9" strokeWidth={1} />
                <h3 className="mt-8 text-3xl">{d.t}</h3>
                <p className="mt-3 text-muted-foreground">{d.d}</p>
                <span className="mt-6 inline-block rounded-full bg-card/70 px-4 py-1.5 text-sm">{d.a}</span>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-[120px]">
        <SectionTitle eyebrow="Почему мы" title="Полёт начинается с доверия" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {why.map((w, i) => (
            <FadeUp key={w.t} delay={i * 0.08}>
              <div className="card-soft h-full bg-card p-8">
                <w.icon className="h-8 w-8" strokeWidth={1} />
                <h3 className="mt-6 text-2xl">{w.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{w.d}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* COACHES */}
      <section id="coaches" className="mx-auto max-w-7xl px-6 py-20 md:py-[120px]">
        <SectionTitle eyebrow="Тренеры" title="Те, кто научит летать" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {COACHES.map((c, i) => (
            <FadeUp key={c.slug} delay={i * 0.08}>
              <Link to="/coaches/$slug" params={{ slug: c.slug }} className="card-soft group block h-full overflow-hidden bg-card">
                <img src={c.photo} alt={c.name} loading="lazy" width={960} height={1280} className="aspect-[4/5] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="p-6">
                  <h3 className="text-2xl leading-tight">{c.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.short}</p>
                  <span className="mt-4 inline-block text-sm underline underline-offset-4">Подробнее о тренере</span>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* SIGNUP */}
      <section id="signup" className="mx-auto max-w-7xl px-6 py-20 md:py-[120px]">
        <FadeUp>
          <div className="mx-auto max-w-3xl rounded-[40px] bg-lavender p-8 shadow-soft md:p-14">
            <h2 className="text-center text-4xl md:text-5xl">Запишитесь на пробное занятие</h2>
            <p className="mx-auto mt-4 mb-10 max-w-md text-center text-muted-foreground">Первое занятие — знакомство с тренером и оборудованием</p>
            <TrialForm />
          </div>
        </FadeUp>
      </section>

      {/* AWARDS */}
      <section className="py-20 md:py-[120px]">
        <div className="mx-auto max-w-7xl px-6"><SectionTitle eyebrow="Достижения" title="Наши ученицы на сцене" /></div>
        <div className="fade-edges flex snap-x gap-6 overflow-x-auto px-6 pb-6 [scrollbar-width:none]">
          {awards.map((a, i) => (
            <div key={i} className="card-soft w-72 shrink-0 snap-center overflow-hidden bg-card md:w-80">
              <img src={stage} alt={a.t} loading="lazy" width={1024} height={768} className={`aspect-[4/3] w-full object-cover ${i % 2 ? "hue-rotate-[-30deg]" : ""}`} />
              <div className="p-6"><h3 className="text-2xl">{a.t}</h3><p className="text-sm text-muted-foreground">{a.c}</p></div>
            </div>
          ))}
        </div>
      </section>

      {/* REVIEWS */}
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-[120px]">
        <SectionTitle eyebrow="Отзывы" title="Что говорят родители" />
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <FadeUp key={r.n} delay={i * 0.08}>
              <div className={`card-soft h-full p-10 ${pastel[i]}`}>
                <p className="font-display text-2xl italic leading-snug">«{r.q}»</p>
                <p className="mt-8 font-medium">{r.n}</p>
                <p className="text-sm text-muted-foreground">мама ученицы, 8 лет</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="mx-auto max-w-7xl px-6 py-20 md:py-[120px]">
        <SectionTitle eyebrow="Контакты" title="Ждём вас в студии" />
        <div className="grid gap-8 lg:grid-cols-2">
          <FadeUp>
            <div className="card-soft h-full space-y-6 bg-card p-10">
              <p className="flex gap-3"><MapPin className="h-5 w-5 shrink-0" strokeWidth={1.5} /> Балашиха, ул. Заречная, 44</p>
              <a href="tel:89680139060" className="flex gap-3 text-2xl font-display hover:opacity-70"><Phone className="mt-1 h-5 w-5" strokeWidth={1.5} /> 8 (968) 013-90-60</a>
              <SocialIcons />
              <div className="rounded-[20px] bg-powder p-6">
                <h3 className="flex items-center gap-2 text-2xl"><Bus className="h-5 w-5" strokeWidth={1.5} /> Как добраться</h3>
                <p className="mt-3 text-muted-foreground">Маршрутки 8, 110, 2, 4, 6, 9 до остановки «Солнышко», далее 5 минут пешком.</p>
              </div>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <iframe
              title="Карта"
              src="https://yandex.ru/map-widget/v1/?text=%D0%91%D0%B0%D0%BB%D0%B0%D1%88%D0%B8%D1%85%D0%B0%2C%20%D1%83%D0%BB.%20%D0%97%D0%B0%D1%80%D0%B5%D1%87%D0%BD%D0%B0%D1%8F%2C%2044&z=16"
              className="h-[420px] w-full rounded-[28px] border border-border shadow-soft lg:h-full"
              loading="lazy"
            />
          </FadeUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-20 md:py-[120px]">
        <SectionTitle eyebrow="FAQ" title="Частые вопросы" />
        <div className="space-y-4">
          {faq.map(([q, a]) => (
            <details key={q} className="group card-soft bg-card px-8 py-6 hover:!translate-y-0">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-2xl">
                {q}<Plus className="h-5 w-5 shrink-0 transition-transform duration-300 group-open:rotate-45" strokeWidth={1.5} />
              </summary>
              <p className="mt-4 text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border pb-28 pt-14 lg:pb-14">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
          <span className="font-display text-3xl text-foreground">AirGS</span>
          <span>Балашиха, ул. Заречная, 44 · <a href="tel:89680139060">8 (968) 013-90-60</a></span>
          <a href="/privacy" className="underline">Политика конфиденциальности</a>
          <span>© {new Date().getFullYear()} AirGS</span>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 bg-card/85 p-3 backdrop-blur-xl lg:hidden">
        <a href="#signup" className="btn-mint w-full">Пробное занятие</a>
      </div>
    </div>
  );
}
