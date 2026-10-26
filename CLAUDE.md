# AirGS — школа воздушной гимнастики

Описание проекта, структура и команды — в `README.md`. Правила Lovable — в `AGENTS.md`.

- Ссылки внутри сайта — только через `<Link to="...">` из `@tanstack/react-router` или
  `import.meta.env.BASE_URL`, без жёстких `href="/..."`: на GitHub Pages сайт живёт
  в подпапке `/<имя репозитория>/`, и абсолютный путь уводит на чужой адрес.
- Статическая сборка для Pages включается только переменной `PAGES_BASE`
  (`vite.config.ts`), сборку Lovable она не меняет.
- Перед push: `bun run lint && bun run test && PAGES_BASE=/ags/ bun run build`.
