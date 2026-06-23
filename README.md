# CodexVostok

Простейшая статическая стартовая страница для GitHub Pages: две точки входа для команды и клиента, модальные окна и временный маскот видеопродакшна. Визуальный слой адаптирован под дизайн-систему с токенами `background`, `foreground`, `card`, `primary`, `secondary`, `accent`, `border`, `input`, `ring` и шрифтами `Open Sans`, `Georgia`, `Menlo`.

## Файлы

- `index.html` — разметка страницы и модальных окон.
- `styles.css` — адаптивная верстка, кнопки и CSS-маскот.
- `script.js` — открытие/закрытие окон и базовая обработка форм.

## Локальный просмотр

Сайт не требует фреймворков, сборки и зависимостей. Можно открыть `index.html` в браузере напрямую.

## Публикация на GitHub Pages

1. Открой репозиторий на GitHub.
2. Перейди в `Settings` → `Pages`.
3. В блоке `Build and deployment` выбери `Deploy from a branch`.
4. В `Branch` выбери `main` и папку `/root`.
5. Нажми `Save`.
6. Через пару минут GitHub покажет публичную ссылку на сайт.

Если публикуешь из этого локального репозитория:

```bash
git add index.html styles.css script.js README.md
git commit -m "Add static GitHub Pages entry page"
git push origin main
```
