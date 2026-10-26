# AirGS — сайт школы воздушной гимнастики (Балашиха)

Лендинг школы воздушной гимнастики AirGS: направления, тренеры, расписание, контакты
и форма записи на пробное занятие.

- **Сайт:** https://golubev-artur.github.io/ags/
- **Редактор Lovable:** https://lovable.dev/projects/0e4a8802-599b-4a6a-9bb9-5189a9e88758

## Как устроено

| Что | Где |
|-----|-----|
| Главная страница (все секции) | `src/routes/index.tsx` |
| Политика конфиденциальности | `src/routes/privacy.tsx` |
| Общий каркас, `<title>`, мета-теги, шрифты | `src/routes/__root.tsx` |
| Форма записи на пробное занятие | `src/components/TrialForm.tsx` |
| Фотографии | `src/assets/` |
| Стили и цвета | `src/styles.css` |
| Подключение к базе (Supabase) | `src/integrations/supabase/` |

Стек: TanStack Start + React 19 + Tailwind 4 + shadcn/ui. Заявки из формы сохраняются
в таблицу `trial_requests` в Supabase (Lovable Cloud).

## Публикация

Два независимых канала:

1. **GitHub Pages** — `.github/workflows/deploy-pages.yml`. Каждый push в `main`
   собирает статическую версию сайта (переменная `PAGES_BASE`) и публикует её по адресу
   `https://golubev-artur.github.io/<имя репозитория>/`.
2. **Lovable** — кнопка Publish в редакторе. Изменения из Lovable приходят в этот
   репозиторий автоматически, и наоборот: push в `main` попадает в Lovable.

## Команды

```sh
bun install
bun run dev        # локальный сервер
bun run build      # сборка как в Lovable
PAGES_BASE=/ags/ bun run build   # статическая сборка для GitHub Pages → dist/client
bun run test
bun run lint
```

## Важно

- Репозиторий связан с Lovable: не переписывайте историю (`force push`, `rebase`
  опубликованных коммитов) — в Lovable потеряется история проекта.
- В `.env` лежат только публичные ключи Supabase (`publishable`), они нужны браузеру
  для отправки формы. Секретных ключей в репозитории нет.
