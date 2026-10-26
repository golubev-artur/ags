import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Политика конфиденциальности — AirGS" },
      {
        name: "description",
        content: "Политика обработки персональных данных школы воздушной гимнастики AirGS.",
      },
      { property: "og:title", content: "Политика конфиденциальности — AirGS" },
      { property: "og:description", content: "Как школа AirGS обрабатывает персональные данные." },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <Link to="/" className="text-sm text-muted-foreground hover:text-foreground">
        ← На главную
      </Link>
      <h1 className="mt-8 text-5xl">Политика конфиденциальности</h1>
      <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
        <p>
          Школа воздушной гимнастики AirGS обрабатывает персональные данные (имя, телефон, возраст,
          комментарий), которые вы оставляете в форме записи, исключительно для связи с вами и
          записи на занятия.
        </p>
        <p>
          Мы не передаём ваши данные третьим лицам и храним их не дольше, чем это необходимо для
          указанных целей.
        </p>
        <p>
          Вы можете отозвать согласие на обработку данных, позвонив по телефону 8 (968) 013-90-60.
        </p>
      </div>
    </main>
  );
}
